import { useState, useMemo } from 'react';
import { UtensilsCrossed } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import FilterBar from '../components/FilterBar';
import FoodCard from '../components/FoodCard';
import EmptyState from '../components/EmptyState';
import { foodItems } from '../data/food';
import './ListingPage.css';

const filterKeys = [
  { id: 'all', key: 'filter_all' },
  { id: 'traditional', key: 'filter_traditional' },
  { id: 'local', key: 'filter_local' },
  { id: 'budget', key: 'filter_budget' },
  { id: 'restaurant', key: 'filter_restaurants' },
];

export default function Food() {
  const { t } = useLanguage();
  const [category, setCategory] = useState('all');

  const filtered = useMemo(
    () => (category === 'all' ? foodItems : foodItems.filter((f) => f.category === category)),
    [category]
  );

  const options = filterKeys.map((f) => ({ id: f.id, label: t(f.key) }));

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
              <FoodCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
