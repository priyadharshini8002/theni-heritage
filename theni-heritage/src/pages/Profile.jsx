import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Camera, ClipboardList, Mail, MapPin, MessageSquareText, Pencil, Phone, User } from 'lucide-react';
import { PROFILE_STORAGE_KEY, PROFILE_UPDATED_EVENT, readSavedProfile } from '../utils/profileStorage';
import './Profile.css';

const languageOptions = [
  { value: 'English', label: 'English' },
  { value: 'Tamil', label: 'தமிழ்' },
  { value: 'English + Tamil', label: 'English + தமிழ்' },
];

export default function Profile() {
  const [profile, setProfile] = useState(readSavedProfile);
  const [isEditing, setIsEditing] = useState(!profile);
  const [photo, setPhoto] = useState(profile?.photo || '');
  const [photoError, setPhotoError] = useState('');
  const [saveError, setSaveError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handlePhotoChange = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      setPhotoError('Please choose an image file.');
      event.target.value = '';
      return;
    }
    if (file.size > 1_500_000) {
      setPhotoError('Choose a profile photo smaller than 1.5 MB.');
      event.target.value = '';
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        setPhoto(reader.result);
        setPhotoError('');
      } else {
        setPhotoError('The selected photo could not be read.');
      }
    };
    reader.onerror = () => setPhotoError('The selected photo could not be read.');
    reader.readAsDataURL(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const nextProfile = {
      name: String(formData.get('name')).trim(),
      email: String(formData.get('email')).trim(),
      phone: String(formData.get('phone')).trim(),
      preferredLanguage: String(formData.get('preferredLanguage')),
      homeLocation: String(formData.get('homeLocation')).trim(),
      photo,
    };
    const wasExistingProfile = Boolean(profile);

    try {
      localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(nextProfile));
    } catch {
      setSaveError('Your profile could not be saved. Check available browser storage and try again.');
      setSuccessMessage('');
      return;
    }

    setProfile(nextProfile);
    setIsEditing(false);
    setSaveError('');
    setSuccessMessage(wasExistingProfile ? 'Profile Updated Successfully ✓' : 'Profile Saved Successfully ✓');
    window.dispatchEvent(new Event(PROFILE_UPDATED_EVENT));
  };

  const openEditForm = () => {
    setPhoto(profile?.photo || '');
    setSuccessMessage('');
    setSaveError('');
    setIsEditing(true);
  };

  return (
    <div className="profile-page section">
      <div className="container profile-page__layout">
        <section className="profile-page__intro">
          <h1>{profile ? (isEditing ? 'Update Profile' : 'My Profile') : 'Create Your Profile'}</h1>
          <p>{profile ? 'Keep your traveler details up to date.' : 'Join as a Traveler and discover Theni!'}</p>
          <svg className="profile-page__illustration" viewBox="0 0 520 390" role="img" aria-label="Illustration of Theni hills and heritage temple">
            <defs>
              <linearGradient id="profile-sky" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#d8eef0" />
                <stop offset="1" stopColor="#f8f0d9" />
              </linearGradient>
              <linearGradient id="profile-hill" x1="0" y1="0" x2="0.9" y2="1">
                <stop offset="0" stopColor="#91b9a0" />
                <stop offset="1" stopColor="#4c7a57" />
              </linearGradient>
            </defs>
            <path d="M62 312c-30-43-21-101 14-133 31-29 51-24 78-53 27-29 43-65 84-69 39-4 57 34 91 31 36-4 51-44 91-34 52 13 70 82 48 136-16 39-11 75-33 111-23 37-76 44-136 38-74-8-191 13-237-27Z" fill="url(#profile-sky)" />
            <circle cx="380" cy="93" r="37" fill="#ecc784" opacity=".86" />
            <path d="M62 270 154 176l66 67 82-111 142 148v62H62Z" fill="#8db8a4" />
            <path d="m205 239 97-107 116 116-38-17-25 13-28-19-28 17-30-15-31 18-31-16-24 16Z" fill="#edf2e2" />
            <path d="M57 288c63-53 108-22 161-54 51-31 96-5 145 22 55 31 94 7 137 34v54H57Z" fill="url(#profile-hill)" />
            <path d="M72 322c67-33 101-14 153-24 49-9 101-27 154-12 40 12 75 20 121 11v47H72Z" fill="#315d3d" />
            <g fill="#2f583c">
              <path d="M391 245c-4-43 5-72 20-95 0 31-1 64-7 96Z" />
              <path d="M409 172c-4-28-25-39-42-35 4 20 21 34 42 35Zm-1 8c8-26 29-36 44-30-8 21-23 31-44 30Zm-2 14c-4-23-20-33-35-33 1 17 16 30 35 33Zm2 10c8-21 24-29 40-24-6 17-20 25-40 24Z" />
            </g>
            <g fill="#d5a84f" stroke="#9a6d2e" strokeWidth="2">
              <path d="M343 252h79v67h-79z" />
              <path d="M336 252h93l-9-13h-75z" />
              <path d="M350 238h66l-9-12h-48z" />
              <path d="M360 226h46l-9-12h-28z" />
              <path d="M373 214h20v-18h-20z" />
              <path d="M369 196h28l-14-20z" />
            </g>
            <path d="M357 319v-37a15 15 0 0 1 30 0v37m-43-34h57m-44 34v-21m17 21v-21m16 21v-21" fill="none" stroke="#fff1d2" strokeWidth="5" />
            <g transform="translate(102 196)">
              <path d="M38 82c-2-25 7-39 23-42 20-3 32 15 32 44l-7 79H31z" fill="#3f9a78" />
              <path d="M51 83h39l11 69H42z" fill="#f3ead5" />
              <path d="M44 150h58l-5 54H39z" fill="#9c7345" />
              <path d="m47 198-7 52h22l10-51m24 0 8 51h21l-11-54" fill="#715438" />
              <path d="M39 84 20 130l20 11m56-57 22 43-22 11" fill="none" stroke="#e99c68" strokeWidth="14" strokeLinecap="round" />
              <path d="M50 48c-10-11-8-31 2-40 13-12 34-8 42 5 7 13 2 31-8 39Z" fill="#d98d5f" />
              <path d="M43 20c10-25 48-28 61 0l-3 9H42z" fill="#2a4f38" />
              <path d="M37 24c17-24 58-27 75 0-20-7-53-8-75 0Z" fill="#d8a44c" />
              <path d="M65 27h23l-2 10H65z" fill="#293c3d" />
              <path d="M68 29h7v5h-7zm10 0h7v5h-7z" fill="#9bc7c6" />
              <path d="M67 44c7 6 15 6 21 0" fill="none" stroke="#6e3d32" strokeWidth="3" strokeLinecap="round" />
              <path d="M56 90h31l8 25H52z" fill="#233c3d" />
              <rect x="61" y="95" width="22" height="16" rx="3" fill="#62aeb1" />
              <circle cx="72" cy="103" r="5" fill="#233c3d" />
              <path d="M30 81c-15 3-18 20-8 50l16-4m62-48c17 5 24 27 26 57" fill="none" stroke="#315d3d" strokeWidth="15" strokeLinecap="round" />
              <path d="M18 131c4 30 13 60 13 72h28l7-23-17-49z" fill="#315d3d" />
              <path d="M21 199H4v34h53v-32" fill="#557b75" />
              <path d="M5 211h50m-50 10h50" stroke="#a8d0c2" strokeWidth="3" />
            </g>
            <g fill="#fdfbf4" opacity=".9">
              <path d="M95 148c10-16 32-16 42-3 16-4 29 6 29 19H84c0-8 4-14 11-16Zm316-27c7-11 22-11 29-2 11-3 21 4 21 13h-51c0-5 1-9 1-11Z" />
            </g>
            <g fill="#ecc784">
              <circle cx="299" cy="92" r="3" /><circle cx="283" cy="111" r="2" /><circle cx="447" cy="188" r="3" />
            </g>
          </svg>
        </section>

        <section id="profile-form" className="card-surface profile-page__panel">
          {successMessage && <p className="profile-page__message profile-page__message--success" role="status">{successMessage}</p>}
          {saveError && <p className="profile-page__message profile-page__message--error" role="alert">{saveError}</p>}

          {isEditing ? (
            <>
              <h2 className="profile-page__panel-title">Traveler Information</h2>
              <form className="profile-page__form" onSubmit={handleSubmit}>
            <label className="profile-page__field">
              <span><User size={17} /> Full Name</span>
              <input
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Enter your full name"
                defaultValue={profile?.name || ''}
                required
              />
            </label>
            <label className="profile-page__field">
              <span><Mail size={17} /> Email</span>
              <input
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Enter your email address"
                defaultValue={profile?.email || ''}
                required
              />
            </label>
            <label className="profile-page__field">
              <span><Phone size={17} /> Phone</span>
              <input
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="Enter your phone number"
                defaultValue={profile?.phone || ''}
                required
              />
            </label>
            <label className="profile-page__field">
              <span><span aria-hidden="true">🌐</span> Preferred Language</span>
              <select name="preferredLanguage" defaultValue={profile?.preferredLanguage || 'English'} required>
                {languageOptions.map((option) => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </label>
            <label className="profile-page__field">
              <span><MapPin size={17} /> Home Location</span>
              <input
                name="homeLocation"
                type="text"
                autoComplete="address-level2"
                placeholder="E.g., Coimbatore, Tamil Nadu"
                defaultValue={profile?.homeLocation || ''}
                required
              />
            </label>
            <div className="profile-page__field">
              <span><Camera size={17} /> Profile Photo</span>
              <label className="btn btn-ghost btn-sm profile-page__upload">
                <Camera size={16} /> Upload Photo
                <input type="file" accept="image/*" onChange={handlePhotoChange} />
              </label>
              {photo && <img className="profile-page__photo-preview" src={photo} alt="Profile photo preview" />}
              {photoError && <p className="profile-page__message profile-page__message--error" role="alert">{photoError}</p>}
            </div>
            <button type="submit" className="btn btn-primary profile-page__submit">
              {profile ? 'Update Profile' : 'Create Profile'}
            </button>
              </form>
            </>
          ) : (
            <div className="profile-page__details" aria-label="My Profile">
            {profile.photo ? (
              <img className="profile-page__photo" src={profile.photo} alt={`${profile.name} profile`} />
            ) : (
              <span className="profile-page__photo profile-page__photo--empty"><User size={36} /></span>
            )}
            <h2>{profile.name}</h2>
            <p><Mail size={17} /><span>{profile.email}</span></p>
            <p><Phone size={17} /><span>{profile.phone}</span></p>
            <p><span aria-hidden="true">🌐</span><span>{languageOptions.find((option) => option.value === profile.preferredLanguage)?.label || profile.preferredLanguage}</span></p>
            <p><MapPin size={17} /><span>{profile.homeLocation}</span></p>
            <button type="button" className="btn btn-primary profile-page__submit" onClick={openEditForm}>
              <Pencil size={16} /> Update Profile
            </button>
            </div>
          )}
        </section>
        <nav className="profile-page__options" aria-label="Profile options">
          <Link className="profile-page__option card-surface" to="/profile/todo">
            <span className="profile-page__option-icon"><ClipboardList size={21} /></span>
            <span className="profile-page__option-copy">
              <strong>My To-Do List</strong>
              <span>Open To-Do List</span>
            </span>
            <span className="profile-page__option-arrow" aria-hidden="true">→</span>
          </Link>
          <Link className="profile-page__option card-surface" to="/profile/feedback">
            <span className="profile-page__option-icon"><MessageSquareText size={21} /></span>
            <span className="profile-page__option-copy">
              <strong>Feedback</strong>
              <span>Open Feedback</span>
            </span>
            <span className="profile-page__option-arrow" aria-hidden="true">→</span>
          </Link>
        </nav>
      </div>
    </div>
  );
}
