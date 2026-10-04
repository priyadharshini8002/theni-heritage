import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchX } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import SearchBar from '../components/SearchBar';
import FilterBar from '../components/FilterBar';
import PlaceCard from '../components/PlaceCard';
import EmptyState from '../components/EmptyState';
import { matchesPlaceCategory, places } from '../data/places';
import './Explore.css';

const filterKeys = [
  { id: 'all', key: 'filter_all' },
  { id: 'historic', key: 'filter_historic' },
  { id: 'nature', key: 'filter_nature' },
  { id: 'religious', key: 'filter_religious' },
  { id: 'tourist', key: 'filter_tourist' },
];

export default function Explore() {
  const { t } = useLanguage();
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') || '');
  const [category, setCategory] = useState(searchParams.get('category') || 'all');

  useEffect(() => {
    const params = {};
    if (query) params.q = query;
    if (category !== 'all') params.category = category;
    setSearchParams(params, { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, category]);

  const filtered = useMemo(() => {
    let list = category === 'all' ? places : places.filter((p) => matchesPlaceCategory(p, category));
    if (query.trim()) {
      const q = query.trim().toLowerCase();
      list = list.filter(
        (p) =>
          p.name.en.toLowerCase().includes(q) ||
          p.name.ta.includes(query.trim()) ||
          p.location.en.toLowerCase().includes(q)
      );
    }
    return list;
  }, [category, query]);

  const options = filterKeys.map((f) => ({ id: f.id, label: t(f.key) }));

  return (
    <div className="explore-page section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">{t('hero_location').toUpperCase()}</span>
          <h1>{t('explore_title')}</h1>
          <p>{t('explore_subtitle')}</p>
        </div>

        <div className="explore-page__controls">
          <SearchBar variant="default" onQueryChange={setQuery} />
          <FilterBar options={options} active={category} onChange={setCategory} />
        </div>

        {filtered.length === 0 ? (
          <EmptyState icon={SearchX} title={t('no_results')} hint={t('no_results_hint')} />
        ) : (
          <div className="explore-page__grid">
            {filtered.map((place) => (
                <PlaceCard key={place.id} place={place} categoryId={category === 'all' ? undefined : category} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
