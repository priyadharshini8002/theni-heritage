import { useState, useMemo } from 'react';
import { UtensilsCrossed } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import FilterBar from '../components/FilterBar';
import FoodCard from '../components/FoodCard';
import Modal from '../components/Modal';
import EmptyState from '../components/EmptyState';
import { foodItems } from '../data/food';
import { openGoogleMapsSearch } from '../utils/geo';
import './ListingPage.css';
import './FoodDetails.css';

const filterKeys = [{ id: 'restaurant', key: 'filter_restaurants' }];

export default function Food() {
  const { lang, t } = useLanguage();
  const [category, setCategory] = useState('restaurant');
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [selectedMenuRestaurant, setSelectedMenuRestaurant] = useState(null);

  const filtered = useMemo(
    () => foodItems.filter((item) => item.category === category),
    [category]
  );

  const options = filterKeys.map((f) => ({ id: f.id, label: t(f.key) }));
  const handleNavigate = (restaurant) =>
    openGoogleMapsSearch(`${restaurant.name.en} ${restaurant.location.en}`);
  const handleViewMenu = (restaurant) => {
    setSelectedRestaurant(null);
    setSelectedMenuRestaurant(restaurant);
  };

  return (
    <div className="listing-page section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">{t('nav_food').toUpperCase()}</span>
          <h1>{t('food_title')}</h1>
          <p>{t('food_subtitle')}</p>
        </div>

        <div className="listing-page__controls">
          <FilterBar options={options} active={category} onChange={setCategory} />
        </div>

        {filtered.length === 0 ? (
          <EmptyState icon={UtensilsCrossed} title={t('no_results')} hint={t('no_results_hint')} />
        ) : (
          <div className="listing-page__grid">
            {filtered.map((item) => (
              <FoodCard
                key={item.id}
                item={item}
                onViewDetails={setSelectedRestaurant}
                onViewMenu={handleViewMenu}
              />
            ))}
          </div>
        )}
      </div>
      {selectedRestaurant && (
        <Modal title={selectedRestaurant.name[lang]} onClose={() => setSelectedRestaurant(null)}>
          <div className="food-details">
            <dl className="food-details__list">
              <div><dt>📍 {t('detail_location')}</dt><dd>{selectedRestaurant.location[lang]}</dd></div>
              <div><dt>🍽️ {t('food_cuisine')}</dt><dd>{selectedRestaurant.cuisine[lang]}</dd></div>
              <div>
                <dt>📝 {t('detail_description')}</dt>
                <dd>{selectedRestaurant.description[lang]}</dd>
              </div>
              {selectedRestaurant.priceRange && (
                <div><dt>💰 {t('approx_price')}</dt><dd>{selectedRestaurant.priceRange[lang]}</dd></div>
              )}
              {selectedRestaurant.openingHours && (
                <div><dt>🕒 {t('opening_hours')}</dt><dd>{selectedRestaurant.openingHours[lang]}</dd></div>
              )}
            </dl>
            <div className="mini-card__actions">
              <button type="button" className="btn btn-forest btn-sm" onClick={() => handleNavigate(selectedRestaurant)}>
                {t('navigate')}
              </button>
              <button type="button" className="btn btn-ghost btn-sm" onClick={() => handleViewMenu(selectedRestaurant)}>
                {t('menu')}
              </button>
              <button type="button" className="btn btn-ghost btn-sm" onClick={() => setSelectedRestaurant(null)}>
                {t('close')}
              </button>
            </div>
          </div>
        </Modal>
      )}
      {selectedMenuRestaurant && (
        <Modal
          title={`${selectedMenuRestaurant.name[lang]} — ${t('menu')}`}
          onClose={() => setSelectedMenuRestaurant(null)}
        >
          <div className="food-details">
            <p className="food-details__notice">{t('restaurant_menu_unavailable')}</p>
            <button type="button" className="btn btn-ghost btn-sm" onClick={() => setSelectedMenuRestaurant(null)}>
              {t('close')}
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
}
