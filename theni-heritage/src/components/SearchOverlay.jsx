import { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Search, MapPin, UtensilsCrossed, BedDouble } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { searchAll } from '../utils/search';

export default function SearchOverlay({ onClose }) {
  const { t, lang } = useLanguage();
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useLayoutEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const results = searchAll(query, lang);
  const hasResults = results.places.length || results.food.length || results.stays.length;

  const go = (path) => {
    navigate(path);
    onClose();
  };

  return (
    <div className="search-overlay" role="dialog" aria-modal="true" aria-label="Site search">
      <div className="search-overlay__backdrop" onClick={onClose} />
      <div className="search-overlay__panel">
        <div className="search-overlay__bar">
          <Search size={20} className="search-overlay__icon" />
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t('search_placeholder')}
            aria-label={t('search_placeholder')}
          />
          <button type="button" onClick={onClose} aria-label="Close search" className="search-overlay__close">
            <X size={20} />
          </button>
        </div>

        {query.trim() && (
          <div className="search-overlay__results">
            {!hasResults && (
              <div className="search-overlay__empty">
                <p>{t('no_results')}</p>
                <span>{t('no_results_hint')}</span>
              </div>
            )}

            {results.places.length > 0 && (
              <div className="search-overlay__group">
                <h3><MapPin size={14} /> {t('nav_explore')}</h3>
                {results.places.map((p) => (
                  <button key={p.id} className="search-overlay__item" onClick={() => go(`/place/${p.id}`)}>
                    <img src={p.image} alt="" />
                    <div>
                      <strong>{p.name[lang]}</strong>
                      <span>{p.location[lang]}</span>
                    </div>
                  </button>
                ))}
              </div>
            )}

            {results.food.length > 0 && (
              <div className="search-overlay__group">
                <h3><UtensilsCrossed size={14} /> {t('nav_food')}</h3>
                {results.food.map((f) => (
                  <button key={f.id} className="search-overlay__item" onClick={() => go('/food')}>
                    <img src={f.image} alt="" />
                    <div>
                      <strong>{f.name[lang]}</strong>
                      <span>{f.location[lang]}</span>
                    </div>
                  </button>
                ))}
              </div>
            )}

            {results.stays.length > 0 && (
              <div className="search-overlay__group">
                <h3><BedDouble size={14} /> {t('nav_stay')}</h3>
                {results.stays.map((s) => (
                  <button key={s.id} className="search-overlay__item" onClick={() => go('/stay')}>
                    <img src={s.image} alt="" />
                    <div>
                      <strong>{s.name[lang]}</strong>
                      <span>{s.location[lang]}</span>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
