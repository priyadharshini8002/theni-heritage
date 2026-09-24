import { useLanguage } from '../context/LanguageContext';
import MapView from '../components/MapView';
import './MapPage.css';

export default function MapPage() {
  const { t } = useLanguage();

  return (
    <div className="map-page section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">{t('nav_map').toUpperCase()}</span>
          <h1>{t('map_title')}</h1>
          <p>{t('map_subtitle')}</p>
        </div>
        <MapView />
      </div>
    </div>
  );
}
