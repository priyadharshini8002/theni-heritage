import { Heart } from 'lucide-react';
import { useFavorites } from '../context/FavoritesContext';
import './FavoriteButton.css';

export default function FavoriteButton({ id, size = 18, className = '' }) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const active = isFavorite(id);

  return (
    <button
      type="button"
      className={`favorite-btn ${active ? 'favorite-btn--active' : ''} ${className}`}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleFavorite(id);
      }}
      aria-pressed={active}
      aria-label={active ? 'Remove from favorites' : 'Save to favorites'}
    >
      <Heart size={size} fill={active ? 'currentColor' : 'none'} />
    </button>
  );
}
