// Firebase is optional. If environment variables are not set, the app falls
// back to storing suggestions and feedback in localStorage so every feature
// keeps working without any external configuration.

import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

export const isFirebaseConfigured = Boolean(
  firebaseConfig.apiKey && firebaseConfig.projectId && firebaseConfig.appId
);

let app = null;
let firestoreDb = null;
let firebaseStorage = null;

if (isFirebaseConfigured) {
  try {
    app = initializeApp(firebaseConfig);
  } catch (err) {
    console.warn('Firebase failed to initialize, falling back to local storage.', err);
  }
}

// Lazily load Firestore/Storage only when actually configured, so the
// firebase packages never block the app from running without credentials.
async function getFirestoreDb() {
  if (!app) return null;
  if (firestoreDb) return firestoreDb;
  const { getFirestore } = await import('firebase/firestore');
  firestoreDb = getFirestore(app);
  return firestoreDb;
}

async function getFirebaseStorage() {
  if (!app) return null;
  if (firebaseStorage) return firebaseStorage;
  const { getStorage } = await import('firebase/storage');
  firebaseStorage = getStorage(app);
  return firebaseStorage;
}

const LOCAL_SUGGESTIONS_KEY = 'theni-heritage:suggestions';
const LOCAL_FEEDBACK_KEY = 'theni-heritage:feedback';

function saveLocally(key, entry) {
  try {
    const raw = localStorage.getItem(key);
    const list = raw ? JSON.parse(raw) : [];
    list.unshift({ ...entry, id: `local-${Date.now()}`, createdAt: new Date().toISOString() });
    localStorage.setItem(key, JSON.stringify(list));
    return true;
  } catch (err) {
    console.error('Local save failed', err);
    return false;
  }
}

/**
 * Submits a "suggest a place" entry.
 * Uses Firestore when configured, otherwise falls back to localStorage.
 * Photo uploads go to Firebase Storage when available; otherwise the file
 * is simply skipped and the rest of the suggestion is still saved.
 */
export async function submitSuggestion(data, photoFile) {
  if (isFirebaseConfigured && app) {
    try {
      const db = await getFirestoreDb();
      const { collection, addDoc, serverTimestamp } = await import('firebase/firestore');

      let photoUrl = null;
      if (photoFile) {
        try {
          const storage = await getFirebaseStorage();
          const { ref, uploadBytes, getDownloadURL } = await import('firebase/storage');
          const fileRef = ref(storage, `suggestions/${Date.now()}-${photoFile.name}`);
          await uploadBytes(fileRef, photoFile);
          photoUrl = await getDownloadURL(fileRef);
        } catch (err) {
          console.warn('Photo upload failed, continuing without image.', err);
        }
      }

      await addDoc(collection(db, 'suggestions'), {
        ...data,
        photoUrl,
        createdAt: serverTimestamp(),
      });
      return { success: true, mode: 'firebase' };
    } catch (err) {
      console.warn('Firestore submission failed, falling back to local storage.', err);
      saveLocally(LOCAL_SUGGESTIONS_KEY, data);
      return { success: true, mode: 'local-fallback' };
    }
  }

  const saved = saveLocally(LOCAL_SUGGESTIONS_KEY, data);
  return { success: saved, mode: 'local' };
}

/**
 * Submits general site feedback.
 * Uses Firestore when configured, otherwise falls back to localStorage.
 */
export async function submitFeedback(data) {
  if (isFirebaseConfigured && app) {
    try {
      const db = await getFirestoreDb();
      const { collection, addDoc, serverTimestamp } = await import('firebase/firestore');
      await addDoc(collection(db, 'feedback'), { ...data, createdAt: serverTimestamp() });
      return { success: true, mode: 'firebase' };
    } catch (err) {
      console.warn('Firestore feedback submission failed, falling back to local storage.', err);
      saveLocally(LOCAL_FEEDBACK_KEY, data);
      return { success: true, mode: 'local-fallback' };
    }
  }

  const saved = saveLocally(LOCAL_FEEDBACK_KEY, data);
  return { success: saved, mode: 'local' };
}

export { app };
