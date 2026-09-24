import { HeartOff, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useFavorites } from '../context/FavoritesContext';
import PlaceCard from '../components/PlaceCard';
import EmptyState from '../components/EmptyState';
import { places } from '../data/places';
import './ListingPage.css';

export default function Favorites() {
  const { t } = useLanguage();
  const { favorites } = useFavorites();

  const favoritePlaces = places.filter((p) => favorites.includes(p.id));

  return (
    <div className="listing-page section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">{t('nav_favorites').toUpperCase()}</span>
          <h1>{t('favorites_title')}</h1>
          <p>{t('favorites_subtitle')}</p>
        </div>

        {favoritePlaces.length === 0 ? (
          <EmptyState
            icon={HeartOff}
            title={t('favorites_empty')}
            hint={t('favorites_empty_hint')}
            action={
              <Link to="/explore" className="btn btn-primary btn-sm" style={{ marginTop: 10 }}>
                <Compass size={15} /> {t('nav_explore')}
              </Link>
            }
          />
        ) : (
          <div className="listing-page__grid">
            {favoritePlaces.map((place) => (
              <PlaceCard key={place.id} place={place} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
