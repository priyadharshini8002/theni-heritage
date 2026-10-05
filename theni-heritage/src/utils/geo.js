// Haversine formula — distance in km between two lat/lng points.
export function distanceKm(lat1, lng1, lat2, lng2) {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

export function formatDistance(km) {
  if (km < 1) return `${Math.round(km * 1000)} m`;
  return `${km.toFixed(1)} km`;
}

// Theni town centre — used as a sensible default map center / fallback location.
export const THENI_CENTER = { lat: 10.0104, lng: 77.4768 };

export function getCurrentLocation() {
  return new Promise((resolve, reject) => {
    if (!('geolocation' in navigator)) {
      reject(new Error('Geolocation is not supported on this device.'));
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => resolve({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
      (err) => reject(err),
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 0 }
    );
  });
}

export function openExternalNavigation(lat, lng) {
  const url = `https://www.openstreetmap.org/directions?to=${lat}%2C${lng}#map=15/${lat}/${lng}`;
  window.open(url, '_blank', 'noopener,noreferrer');
  return url;
}

// For items that only have a text location (food stalls, stays without exact
// coordinates) — opens an OpenStreetMap search instead of turn-by-turn coords.
export function openLocationSearch(query) {
  const url = `https://www.openstreetmap.org/search?query=${encodeURIComponent(`${query}, Theni, Tamil Nadu`)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
  return url;
}

export function openGoogleMapsSearch(query) {
  const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
  return url;
}
