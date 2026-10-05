import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  ArrowLeft,
  Share2,
  MapPin,
  Route,
  Wallet,
  CalendarClock,
  Info,
  UtensilsCrossed,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import FavoriteButton from '../components/FavoriteButton';
import FoodCard from '../components/FoodCard';
import StayCard from '../components/StayCard';
import { getPlaceById } from '../data/places';
import { foodItems } from '../data/food';
import { stays } from '../data/stays';
import { openExternalNavigation } from '../utils/geo';
import './PlaceDetails.css';

export default function PlaceDetails() {
  const { id } = useParams();
  const { t, lang } = useLanguage();
  const place = getPlaceById(id);
  const [activeImage, setActiveImage] = useState(0);
  const [copied, setCopied] = useState(false);

  if (!place) return <Navigate to="/explore" replace />;

  const gallery = [place.image, ...(place.gallery || [])].filter(Boolean);
  const nearbyFood = foodItems.slice(0, 3);
  const nearbyStays = stays.slice(0, 2);

  const handleShare = async () => {
    const url = window.location.href;
    try {
      if (navigator.share) {
        await navigator.share({ title: place.name[lang], url });
      } else {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch {
      // user cancelled share — no action needed
    }
  };

  return (
    <div className="place-details section">
      <div className="container">
        <div className="place-details__top">
          <Link to="/explore" className="btn btn-ghost btn-sm">
            <ArrowLeft size={16} /> {t('back')}
          </Link>
          <div className="place-details__top-actions">
            <button type="button" className="btn btn-ghost btn-sm" onClick={handleShare}>
              <Share2 size={15} /> {copied ? '✓' : t('share')}
            </button>
            <FavoriteButton id={place.id} size={17} />
          </div>
        </div>

        <div className="place-details__gallery">
          <div className="place-details__gallery-main">
            {gallery[activeImage] && <img src={gallery[activeImage]} alt={place.name[lang]} />}
          </div>
          {gallery.length > 1 && (
            <div className="place-details__gallery-thumbs">
              {gallery.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  className={`place-details__thumb ${i === activeImage ? 'place-details__thumb--active' : ''}`}
                  onClick={() => setActiveImage(i)}
                  aria-label={`Show image ${i + 1}`}
                >
                  <img src={src} alt="" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="place-details__grid">
          <div className="place-details__main">
            <header className="place-details__header">
              <h1>{place.name[lang]}</h1>
              <p className="place-details__location">
                <MapPin size={15} /> {place.location[lang]}
              </p>
            </header>

            <section className="place-details__section">
              <h2>{t('about_place')}</h2>
              <p>{place.history[lang]}</p>
            </section>

            <section className="place-details__section">
              <h2>{t('visitor_info')}</h2>
              <div className="place-details__info-grid">
                <div className="place-details__info-item">
                  <Route size={17} />
                  <div>
                    <strong>{t('how_to_reach')}</strong>
                    <p>{place.howToReach[lang]}</p>
                  </div>
                </div>
                <div className="place-details__info-item">
                  <Wallet size={17} />
                  <div>
                    <strong>{t('approx_expense')}</strong>
                    <p>{place.expense[lang]}</p>
                  </div>
                </div>
                <div className="place-details__info-item">
                  <CalendarClock size={17} />
                  <div>
                    <strong>{t('best_time')}</strong>
                    <p>{place.bestTime[lang]}</p>
                  </div>
                </div>
                <div className="place-details__info-item">
                  <Info size={17} />
                  <div>
                    <strong>{t('important_info')}</strong>
                    <p>{place.importantInfo[lang]}</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="place-details__section">
              <h2><UtensilsCrossed size={17} /> {t('nearby_food_stay')}</h2>
              <div className="place-details__nearby-grid">
                {nearbyFood.map((f) => (
                  <FoodCard key={f.id} item={f} />
                ))}
              </div>
              <div className="place-details__nearby-grid" style={{ marginTop: 20 }}>
                {nearbyStays.map((s) => (
                  <StayCard key={s.id} stay={s} />
                ))}
              </div>
            </section>
          </div>

          <aside className="place-details__sidebar">
            <div className="card-surface place-details__sidebar-card">
              <button
                type="button"
                className="btn btn-primary place-details__nav-btn"
                onClick={() => place.coords && openExternalNavigation(place.coords.lat, place.coords.lng, place.name.en)}
                disabled={!place.coords}
              >
                <Route size={17} /> {t('navigate')}
              </button>
              <FavoriteButtonInline id={place.id} label={t('save')} />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

function FavoriteButtonInline({ id, label }) {
  return (
    <div className="place-details__save-row">
      <FavoriteButton id={id} size={18} />
      <span>{label}</span>
    </div>
  );
}
