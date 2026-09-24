import { places } from '../data/places';
import { foodItems } from '../data/food';
import { stays } from '../data/stays';

function matchesText(haystack, query) {
  return haystack.toLowerCase().includes(query.toLowerCase());
}

export function searchAll(query) {
  const q = query.trim();
  if (!q) return { places: [], food: [], stays: [] };

  const matchedPlaces = places.filter(
    (p) =>
      matchesText(p.name.en, q) ||
      matchesText(p.name.ta, q) ||
      matchesText(p.location.en, q) ||
      matchesText(p.location.ta, q) ||
      matchesText(p.category, q)
  );

  const matchedFood = foodItems.filter(
    (f) =>
      matchesText(f.name.en, q) ||
      matchesText(f.name.ta, q) ||
      matchesText(f.location.en, q) ||
      matchesText(f.location.ta, q)
  );

  const matchedStays = stays.filter(
    (s) =>
      matchesText(s.name.en, q) ||
      matchesText(s.name.ta, q) ||
      matchesText(s.location.en, q) ||
      matchesText(s.location.ta, q)
  );

  return { places: matchedPlaces, food: matchedFood, stays: matchedStays };
}
