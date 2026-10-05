import { useState, useMemo, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import { Link } from 'react-router-dom';
import { LocateFixed } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { places } from '../data/places';
import { foodItems } from '../data/food';
import { stays } from '../data/stays';
import {
  THENI_CENTER,
  distanceKm,
  formatDistance,
  getCurrentLocation,
  getFoodMapCoordinates,
  getStayMapCoordinates,
} from '../utils/geo';
import 'leaflet/dist/leaflet.css';
import './MapView.css';

// Leaflet's default marker icons reference image files that don't resolve
// correctly under Vite bundling — build icons manually with inline SVG per type.
function buildIcon(color, isUser = false) {
  const svg = isUser
    ? `<svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
        <circle cx="15" cy="15" r="9" fill="${color}" stroke="#ffffff" stroke-width="3"/>
       </svg>`
    : `<svg width="30" height="40" viewBox="0 0 30 40" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 0C6.7 0 0 6.7 0 15c0 11 15 25 15 25s15-14 15-25C30 6.7 23.3 0 15 0z" fill="${color}"/>
        <circle cx="15" cy="15" r="6" fill="#ffffff"/>
       </svg>`;
  return L.divIcon({
    html: svg,
    className: 'map-marker-icon',
    iconSize: isUser ? [30, 30] : [30, 40],
    iconAnchor: isUser ? [15, 15] : [15, 40],
    popupAnchor: [0, isUser ? -15 : -36],
  });
}

const icons = {
  heritage: buildIcon('#1f3d2b'),
  nature: buildIcon('#4c7a57'),
  food: buildIcon('#c1922f'),
  stay: buildIcon('#b3492f'),
  user: buildIcon('#2563eb', true),
};

function categoryGroup(category) {
  if (category === 'nature') return 'nature';
  return 'heritage';
}

function CurrentLocationMarker({ position, icon, t }) {
  const map = useMap();
  const markerRef = useRef(null);

  useEffect(() => {
    map.flyTo([position.lat, position.lng], 16, { duration: 1 });
    markerRef.current?.openPopup();
  }, [position, map]);

  return (
    <Marker ref={markerRef} position={[position.lat, position.lng]} icon={icon}>
      <Popup>
        <strong>{t('you_are_here')}</strong>
        <br />
        {t('latitude')}: {position.lat.toFixed(6)}
        <br />
        {t('longitude')}: {position.lng.toFixed(6)}
      </Popup>
    </Marker>
  );
}

const filterOptions = [
  { id: 'all', key: 'filter_all' },
  { id: 'heritage', key: 'filter_historic' },
  { id: 'nature', key: 'filter_nature' },
  { id: 'food', key: 'nav_food' },
  { id: 'stay', key: 'nav_stay' },
];

export default function MapView() {
  const { t, lang } = useLanguage();
  const [filter, setFilter] = useState('all');
  const [userLocation, setUserLocation] = useState(null);
  const [locationError, setLocationError] = useState(null);
  const [locating, setLocating] = useState(false);

  const placeMarkers = useMemo(
    () =>
      places.filter((p) => p.coords && Number.isFinite(p.coords.lat) && Number.isFinite(p.coords.lng)).map((p) => ({
        id: `place-${p.id}`,
        group: categoryGroup(p.category),
        lat: p.coords.lat,
        lng: p.coords.lng,
        name: p.name[lang],
        category: p.category,
        image: p.image,
        detailPath: `/place/${p.id}`,
      })),
    [lang]
  );

  const foodMarkers = useMemo(
    () =>
      foodItems.map((f, i) => ({
        id: `food-${f.id}`,
        group: 'food',
        ...getFoodMapCoordinates(i),
        name: f.name[lang],
        image: f.image,
        detailPath: '/food',
      })),
    [lang]
  );

  const stayMarkers = useMemo(
    () =>
      stays.map((s, i) => ({
        id: `stay-${s.id}`,
        group: 'stay',
        ...getStayMapCoordinates(i),
        name: s.name[lang],
        image: s.image,
        detailPath: '/stay',
      })),
    [lang]
  );

  const allMarkers = [...placeMarkers, ...foodMarkers, ...stayMarkers];
  const visibleMarkers = filter === 'all' ? allMarkers : allMarkers.filter((m) => m.group === filter);

  const handleLocate = async () => {
    setLocating(true);
    setLocationError(null);
    try {
      const loc = await getCurrentLocation();
      setUserLocation(loc);
    } catch (error) {
      setLocationError(
        error.code === 1 ? t('location_permission_required') : t('location_unavailable')
      );
    } finally {
      setLocating(false);
    }
  };

  return (
    <div className="map-view">
      <div className="map-view__controls">
        <div className="filter-bar">
          {filterOptions.map((opt) => (
            <button
              key={opt.id}
              type="button"
              className={`filter-bar__pill ${filter === opt.id ? 'filter-bar__pill--active' : ''}`}
              onClick={() => setFilter(opt.id)}
            >
              {t(opt.key)}
            </button>
          ))}
        </div>
        <button type="button" className="btn btn-forest btn-sm map-view__locate" onClick={handleLocate} disabled={locating}>
          <LocateFixed size={16} /> {locating ? '…' : t('my_location')}
        </button>
      </div>

      {locationError && <p className="map-view__error">{locationError}</p>}

      <div className="map-view__canvas">
        <MapContainer
          center={[THENI_CENTER.lat, THENI_CENTER.lng]}
          zoom={10}
          scrollWheelZoom
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {visibleMarkers.map((m) => {
            const dist = userLocation ? distanceKm(userLocation.lat, userLocation.lng, m.lat, m.lng) : null;
            return (
              <Marker key={m.id} position={[m.lat, m.lng]} icon={icons[m.group]}>
                <Popup>
                  <div className="map-popup">
                    {m.image && <img src={m.image} alt={m.name} />}
                    <div className="map-popup__body">
                      <strong>{m.name}</strong>
                      {dist !== null && <span className="map-popup__dist">{formatDistance(dist)} {t('distance_away')}</span>}
                      <Link to={m.detailPath} className="btn btn-ghost btn-sm">
                        {t('view_details')}
                      </Link>
                    </div>
                  </div>
                </Popup>
              </Marker>
            );
          })}

          {userLocation && (
            <CurrentLocationMarker position={userLocation} icon={icons.user} t={t} />
          )}
        </MapContainer>
      </div>
    </div>
  );
}
