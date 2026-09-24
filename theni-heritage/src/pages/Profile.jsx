import { Link } from 'react-router-dom';
import { Languages, MessageSquarePlus, Heart, Info, ChevronRight, User } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useFavorites } from '../context/FavoritesContext';
import './Profile.css';

export default function Profile() {
  const { t, lang, setLang } = useLanguage();
  const { favorites } = useFavorites();

  return (
    <div className="profile-page section">
      <div className="container profile-page__container">
        <div className="profile-page__head">
          <span className="profile-page__avatar">
            <User size={30} />
          </span>
          <div>
            <h1>{t('profile_title')}</h1>
            <p>Theni Heritage {favorites.length > 0 ? `· ${favorites.length} ${t('nav_favorites').toLowerCase()}` : ''}</p>
          </div>
        </div>

        <div className="card-surface profile-page__card">
          <div className="profile-page__row">
            <div className="profile-page__row-label">
              <Languages size={18} />
              <span>{t('profile_language')}</span>
            </div>
            <div className="profile-page__lang-toggle" role="group" aria-label="Choose language">
              <button
                type="button"
                className={lang === 'en' ? 'profile-page__lang--active' : ''}
                onClick={() => setLang('en')}
              >
                English
              </button>
              <button
                type="button"
                className={lang === 'ta' ? 'profile-page__lang--active' : ''}
                onClick={() => setLang('ta')}
              >
                தமிழ்
              </button>
            </div>
          </div>
        </div>

        <div className="card-surface profile-page__card profile-page__links">
          <Link to="/favorites" className="profile-page__row profile-page__row--link">
            <div className="profile-page__row-label">
              <Heart size={18} />
              <span>{t('nav_favorites')}</span>
            </div>
            <ChevronRight size={18} />
          </Link>
          <Link to="/feedback" className="profile-page__row profile-page__row--link">
            <div className="profile-page__row-label">
              <MessageSquarePlus size={18} />
              <span>{t('profile_suggest')}</span>
            </div>
            <ChevronRight size={18} />
          </Link>
          <Link to="/about" className="profile-page__row profile-page__row--link">
            <div className="profile-page__row-label">
              <Info size={18} />
              <span>{t('profile_about')}</span>
            </div>
            <ChevronRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}
