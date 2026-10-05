export const PROFILE_STORAGE_KEY = 'theni-heritage:profile';
export const PROFILE_UPDATED_EVENT = 'theni-heritage:profile-updated';

export function readSavedProfile() {
  try {
    const raw = localStorage.getItem(PROFILE_STORAGE_KEY);
    if (!raw) return null;

    const profile = JSON.parse(raw);
    if (
      !profile ||
      typeof profile.name !== 'string' ||
      typeof profile.email !== 'string' ||
      typeof profile.phone !== 'string' ||
      typeof profile.preferredLanguage !== 'string' ||
      typeof profile.homeLocation !== 'string' ||
      typeof profile.photo !== 'string'
    ) {
      return null;
    }

    return profile;
  } catch {
    return null;
  }
}
