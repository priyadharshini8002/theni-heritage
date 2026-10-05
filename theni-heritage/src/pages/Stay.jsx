import { useState, useMemo } from 'react';
import { BedDouble } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import FilterBar from '../components/FilterBar';
import StayCard from '../components/StayCard';
import Modal from '../components/Modal';
import EmptyState from '../components/EmptyState';
import { stays } from '../data/stays';
import { openGoogleMapsSearch } from '../utils/geo';
import './ListingPage.css';
import './StayDetails.css';

const filterKeys = [
  { id: 'all', key: 'filter_all' },
  { id: 'hotels', key: 'filter_hotels' },
  { id: 'homestays', key: 'filter_homestays' },
  { id: 'resorts', key: 'filter_resorts' },
];

export default function Stay() {
  const { lang, t } = useLanguage();
  const [category, setCategory] = useState('all');
  const [selectedStay, setSelectedStay] = useState(null);

  const filtered = useMemo(
    () => (category === 'all' ? stays : stays.filter((s) => s.category === category)),
    [category]
  );

  const options = filterKeys.map((f) => ({ id: f.id, label: t(f.key) }));
  const handleNavigate = (stay) => openGoogleMapsSearch(`${stay.name.en} ${stay.location.en}`);
  const handleViewDetails = (stay) => setSelectedStay(stay);
  const stayType = selectedStay?.category === 'hotels'
    ? (lang === 'ta' ? 'ஹோட்டல்' : 'Hotel')
    : selectedStay?.category === 'resorts'
      ? (lang === 'ta' ? 'ரிசார்ட்' : 'Resort')
      : selectedStay?.stayType[lang];

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
              <StayCard key={stay.id} stay={stay} onViewDetails={handleViewDetails} />
            ))}
          </div>
        )}
      </div>
      {selectedStay && (
        <Modal title={selectedStay.name[lang]} onClose={() => setSelectedStay(null)}>
          <div className="stay-details">
            <dl className="stay-details__list">
              <div><dt>📍 {t('detail_location')}</dt><dd>{selectedStay.location[lang]}</dd></div>
              <div><dt>🏨 {t('detail_type')}</dt><dd>{stayType}</dd></div>
              <div>
                <dt>💰 {t('approx_price')}</dt>
                <dd>{selectedStay.priceRange[lang]}</dd>
              </div>
              <div><dt>👨‍👩‍👧 {t('detail_suitable')}</dt><dd>{selectedStay.suitableFor[lang]}</dd></div>
            </dl>
            <section className="stay-details__description">
              <h4>📝 {t('detail_description')}</h4>
              <p>{selectedStay.description[lang]}</p>
            </section>
            <p className="stay-details__notice">{t('price_variation_notice')}</p>
            <div className="mini-card__actions">
              <button type="button" className="btn btn-forest btn-sm" onClick={() => handleNavigate(selectedStay)}>
                {t('navigate')}
              </button>
              <button type="button" className="btn btn-ghost btn-sm" onClick={() => setSelectedStay(null)}>
                {t('close')}
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
