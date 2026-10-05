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
import Modal from '../components/Modal';
import { getPlaceById } from '../data/places';
import { foodItems } from '../data/food';
import { stays } from '../data/stays';
import {
  distanceKm,
  formatDistance,
  getFoodMapCoordinates,
  getStayMapCoordinates,
  openGoogleMapsSearch,
  THENI_CENTER,
} from '../utils/geo';
import './PlaceDetails.css';

const NEARBY_OPTION_COUNT = 3;

function getItemCoordinates(item, fallbackCoordinates) {
  if (Number.isFinite(item.coords?.lat) && Number.isFinite(item.coords?.lng)) {
    return item.coords;
  }
  return fallbackCoordinates;
}

export default function PlaceDetails() {
  const { id } = useParams();
  const { t, lang } = useLanguage();
  const place = getPlaceById(id);
  const [activeImage, setActiveImage] = useState(0);
  const [copied, setCopied] = useState(false);
  const [selectedNearby, setSelectedNearby] = useState(null);

  if (!place) return <Navigate to="/explore" replace />;

  const gallery = [place.image, ...(place.gallery || [])].filter(Boolean);
  const hasPlaceCoordinates =
    Number.isFinite(place.coords?.lat) && Number.isFinite(place.coords?.lng);
  const origin = hasPlaceCoordinates ? place.coords : THENI_CENTER;
  const nearbyFood = foodItems
    .map((item, index) => {
      const coordinates = getItemCoordinates(item, getFoodMapCoordinates(index));
      return {
        item,
        distance: distanceKm(origin.lat, origin.lng, coordinates.lat, coordinates.lng),
      };
    })
    .sort((a, b) => a.distance - b.distance)
    .slice(0, NEARBY_OPTION_COUNT);
  const nearbyStays = stays
    .map((item, index) => {
      const coordinates = getItemCoordinates(item, getStayMapCoordinates(index));
      return {
        item,
        distance: distanceKm(origin.lat, origin.lng, coordinates.lat, coordinates.lng),
      };
    })
    .sort((a, b) => a.distance - b.distance)
    .slice(0, NEARBY_OPTION_COUNT);
  const selectedNearbyCoordinates = selectedNearby
    ? getItemCoordinates(
      selectedNearby.item,
      selectedNearby.type === 'food'
        ? getFoodMapCoordinates(foodItems.findIndex((item) => item.id === selectedNearby.item.id))
        : getStayMapCoordinates(stays.findIndex((item) => item.id === selectedNearby.item.id))
    )
    : null;

  const handleNearbyNavigate = (item) =>
    openGoogleMapsSearch(`${item.name.en} ${item.location.en}`);
  const nearbyType = selectedNearby?.type === 'food'
    ? t('filter_restaurants')
    : selectedNearby?.item.category === 'hotels'
      ? (lang === 'ta' ? 'ஹோட்டல்' : 'Hotel')
      : selectedNearby?.item.category === 'resorts'
        ? (lang === 'ta' ? 'ரிசார்ட்' : 'Resort')
        : selectedNearby?.item.stayType?.[lang];

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
              {!hasPlaceCoordinates && (
                <p className="place-details__nearby-empty">{t('nearby_distance_from_center')}</p>
              )}
              <h3 className="place-details__nearby-title">{t('nearby_food')}</h3>
              <div className="place-details__nearby-grid">
                {nearbyFood.map(({ item, distance }) => (
                  <FoodCard
                    key={item.id}
                    item={item}
                    distanceLabel={formatDistance(distance)}
                    onViewDetails={(restaurant) => setSelectedNearby({ type: 'food', item: restaurant })}
                  />
                ))}
              </div>
              <h3 className="place-details__nearby-title">{t('nearby_stay')}</h3>
              <div className="place-details__nearby-grid">
                {nearbyStays.map(({ item, distance }) => (
                  <StayCard
                    key={item.id}
                    stay={item}
                    distanceLabel={formatDistance(distance)}
                    onViewDetails={(accommodation) => setSelectedNearby({ type: 'stay', item: accommodation })}
                  />
                ))}
              </div>
            </section>
          </div>

          <aside className="place-details__sidebar">
            <div className="card-surface place-details__sidebar-card">
              <button
                type="button"
                className="btn btn-primary place-details__nav-btn"
                onClick={() => openGoogleMapsSearch(`${place.name.en}, ${place.location.en}`)}
              >
                <Route size={17} /> {t('navigate')}
              </button>
              <FavoriteButtonInline id={place.id} label={t('save')} />
            </div>
          </aside>
        </div>
      </div>
      {selectedNearby && (
        <Modal
          title={selectedNearby.item.name[lang]}
          onClose={() => setSelectedNearby(null)}
        >
          <div className="stay-details">
            <dl className="stay-details__list">
              <div><dt>📍 {t('detail_location')}</dt><dd>{selectedNearby.item.location[lang]}</dd></div>
              <div>
                <dt>{selectedNearby.type === 'food' ? `🍴 ${t('food_cuisine')}` : `🏨 ${t('detail_type')}`}</dt>
                <dd>{selectedNearby.type === 'food' ? selectedNearby.item.cuisine[lang] : nearbyType}</dd>
              </div>
              {selectedNearby.type === 'stay' && selectedNearby.item.priceRange?.[lang] && (
                <div><dt>💰 {t('approx_price')}</dt><dd>{selectedNearby.item.priceRange[lang]}</dd></div>
              )}
              <div><dt>📍 {t('distance')}</dt><dd>{formatDistance(
                distanceKm(origin.lat, origin.lng, selectedNearbyCoordinates.lat, selectedNearbyCoordinates.lng)
              )}</dd></div>
              <div><dt>📝 {t('detail_description')}</dt><dd>{selectedNearby.item.description[lang]}</dd></div>
            </dl>
            <div className="mini-card__actions">
              <button
                type="button"
                className="btn btn-forest btn-sm"
                onClick={() => handleNearbyNavigate(selectedNearby.item)}
              >
                📍 {t('navigate')}
              </button>
              <button type="button" className="btn btn-ghost btn-sm" onClick={() => setSelectedNearby(null)}>
                {t('close')}
              </button>
            </div>
          </div>
        </Modal>
      )}
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
