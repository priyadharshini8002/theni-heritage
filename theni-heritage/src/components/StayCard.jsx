import { MapPin, Star, Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { openLocationSearch } from '../utils/geo';
import './FoodStayCard.css';

export default function StayCard({ stay }) {
  const { lang, t } = useLanguage();

  return (
    <article className="mini-card card-surface">
      <div className="mini-card__media">
        <img src={stay.image} alt={stay.name[lang]} loading="lazy" />
        <span className="mini-card__rating"><Star size={12} fill="currentColor" /> {stay.rating}</span>
      </div>
      <div className="mini-card__body">
        <div className="mini-card__head">
          <h3>{stay.name[lang]}</h3>
        </div>
        <p className="mini-card__location"><MapPin size={13} /> {stay.location[lang]}</p>
        <p className="mini-card__price mini-card__price--block">{stay.priceRange[lang]}</p>
        <p className="mini-card__desc">{stay.description[lang]}</p>
        <div className="mini-card__actions">
          <a className="btn btn-ghost btn-sm" href={`tel:${stay.contact.replace(/\s+/g, '')}`}>
            <Phone size={14} /> {stay.contact}
          </a>
          <button type="button" className="btn btn-forest btn-sm" onClick={() => openLocationSearch(stay.location.en)}>
            {t('navigate')}
          </button>
        </div>
      </div>
    </article>
  );
}
