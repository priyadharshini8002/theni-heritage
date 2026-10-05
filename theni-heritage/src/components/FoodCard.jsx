import { MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { openGoogleMapsSearch } from '../utils/geo';
import './FoodStayCard.css';

export default function FoodCard({ item, onViewDetails, onViewMenu }) {
  const { lang, t } = useLanguage();
  const handleNavigate = () =>
    openGoogleMapsSearch(`${item.name.en} ${item.location.en}`);

  return (
    <article className="mini-card card-surface">
      <div className="mini-card__body">
        <div className="mini-card__head">
          <h3>{item.name[lang]}</h3>
        </div>
        <p className="mini-card__location"><MapPin size={13} /> {item.location[lang]}</p>
        <p className="mini-card__location">{t('food_cuisine')}: {item.cuisine[lang]}</p>
        <p className="mini-card__desc">{item.description[lang]}</p>
        <div className="mini-card__actions">
          <button type="button" className="btn btn-ghost btn-sm" onClick={() => onViewDetails(item)}>
            {t('view_details')}
          </button>
          <button type="button" className="btn btn-forest btn-sm" onClick={handleNavigate}>
            {t('navigate')}
          </button>
          <button type="button" className="btn btn-ghost btn-sm" onClick={() => onViewMenu(item)}>
            {t('menu')}
          </button>
        </div>
      </div>
    </article>
  );
}
