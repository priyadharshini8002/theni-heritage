import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import FavoriteButton from './FavoriteButton';
import { getCategoryById } from '../data/categories';
import './PlaceCard.css';

export default function PlaceCard({ place, categoryId }) {
  const { lang, t } = useLanguage();
  const category = getCategoryById(categoryId || place.category);
  const name = place.categoryNames?.[categoryId]?.[lang] || place.name[lang];

  return (
    <article className="place-card card-surface">
      <Link to={`/place/${place.id}`} className="place-card__media" aria-label={name}>
        <img src={place.image} alt={name} loading="lazy" />
        {category && <span className="place-card__tag">{category.label[lang]}</span>}
        <FavoriteButton id={place.id} className="place-card__fav" />
      </Link>
      <div className="place-card__body">
        <h3 className="place-card__title">
          <Link to={`/place/${place.id}`}>{name}</Link>
        </h3>
        <p className="place-card__location">
          <MapPin size={13} /> {place.location[lang]}
        </p>
        <p className="place-card__desc">{place.description[lang]}</p>
        <Link to={`/place/${place.id}`} className="btn btn-ghost btn-sm place-card__cta">
          {t('view_details')}
        </Link>
      </div>
    </article>
  );
}
