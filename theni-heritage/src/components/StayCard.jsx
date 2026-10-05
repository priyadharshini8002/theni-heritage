import { MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { openGoogleMapsSearch } from '../utils/geo';
import './FoodStayCard.css';

export default function StayCard({ stay, onViewDetails }) {
  const { lang, t } = useLanguage();
  const type = stay.category === 'hotels'
    ? (lang === 'ta' ? 'ஹோட்டல்' : 'Hotel')
    : stay.category === 'resorts'
      ? (lang === 'ta' ? 'ரிசார்ட்' : 'Resort')
      : stay.stayType[lang];

  const handleNavigate = () => {
    openGoogleMapsSearch(`${stay.name.en} ${stay.location.en}`);
  };

  return (
    <article className="mini-card card-surface">
      <div className="mini-card__body">
        <div className="mini-card__head">
          <h3>{stay.name[lang]}</h3>
        </div>
        <p className="mini-card__location"><MapPin size={13} /> {stay.location[lang]}</p>
        <p className="mini-card__location">{lang === 'ta' ? 'வகை: ' : 'Type: '}{type}</p>
        <p className="mini-card__price mini-card__price--block">
          {t('approx_price')}: {stay.priceRange[lang]}
        </p>
        <p className="mini-card__desc">{stay.description[lang]}</p>
        <div className="mini-card__actions">
          {onViewDetails && (
            <button type="button" className="btn btn-ghost btn-sm" onClick={() => onViewDetails(stay)}>
              {t('view_details')}
            </button>
          )}
          <button type="button" className="btn btn-forest btn-sm" onClick={handleNavigate}>
            {t('navigate')}
          </button>
        </div>
      </div>
    </article>
  );
}
