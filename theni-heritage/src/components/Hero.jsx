import { Link } from 'react-router-dom';
import { MapPin, Compass, LocateFixed } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import SearchBar from './SearchBar';
import './Hero.css';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hero">
      <div className="hero__media">
        <img
          src="https://picsum.photos/seed/theni-hero-landscape/1600/900"
          alt="Hills and greenery of the Theni landscape"
        />
        <div className="hero__scrim" />
      </div>

      <div className="container hero__content">
        <span className="hero__badge">
          <MapPin size={14} /> {t('hero_location')}
        </span>
        <h1 className="hero__title">{t('hero_title')}</h1>
        <p className="hero__subtitle">{t('hero_subtitle')}</p>

        <div className="hero__actions">
          <Link to="/explore" className="btn btn-primary">
            <Compass size={17} /> {t('hero_cta_primary')}
          </Link>
          <Link to="/map" className="btn btn-outline">
            <LocateFixed size={17} /> {t('hero_cta_secondary')}
          </Link>
        </div>

        <div className="hero__search">
          <SearchBar variant="hero" />
        </div>
      </div>
    </section>
  );
}
