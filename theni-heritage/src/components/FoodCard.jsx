import { MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { openLocationSearch } from '../utils/geo';
import './FoodStayCard.css';

export default function FoodCard({ item }) {
  const { lang, t } = useLanguage();

  return (
    <article className="mini-card card-surface">
      <div className="mini-card__media">
        <img src={item.image} alt={item.name[lang]} loading="lazy" />
      </div>
      <div className="mini-card__body">
        <div className="mini-card__head">
          <h3>{item.name[lang]}</h3>
          <span className="mini-card__price">{item.price[lang]}</span>
        </div>
        <p className="mini-card__location"><MapPin size={13} /> {item.location[lang]}</p>
        <p className="mini-card__desc">{item.description[lang]}</p>
        <button
          type="button"
          className="btn btn-ghost btn-sm"
          onClick={() => openLocationSearch(item.location.en)}
        >
          {t('navigate')}
        </button>
      </div>
    </article>
  );
}
