import { useState, useMemo } from 'react';
import { BedDouble } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import FilterBar from '../components/FilterBar';
import StayCard from '../components/StayCard';
import EmptyState from '../components/EmptyState';
import { stays } from '../data/stays';
import './ListingPage.css';

const filterKeys = [
  { id: 'all', key: 'filter_all' },
  { id: 'hotels', key: 'filter_hotels' },
  { id: 'homestays', key: 'filter_homestays' },
  { id: 'resorts', key: 'filter_resorts' },
  { id: 'budget', key: 'filter_budgetstay' },
];

export default function Stay() {
  const { t } = useLanguage();
  const [category, setCategory] = useState('all');

  const filtered = useMemo(
    () => (category === 'all' ? stays : stays.filter((s) => s.category === category)),
    [category]
  );

  const options = filterKeys.map((f) => ({ id: f.id, label: t(f.key) }));

  return (
    <div className="listing-page section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">{t('nav_stay').toUpperCase()}</span>
          <h1>{t('stay_title')}</h1>
          <p>{t('stay_subtitle')}</p>
        </div>

        <div className="listing-page__controls">
          <FilterBar options={options} active={category} onChange={setCategory} />
        </div>

        {filtered.length === 0 ? (
          <EmptyState icon={BedDouble} title={t('no_results')} hint={t('no_results_hint')} />
        ) : (
          <div className="listing-page__grid">
            {filtered.map((stay) => (
              <StayCard key={stay.id} stay={stay} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
