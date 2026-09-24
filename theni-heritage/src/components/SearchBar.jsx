import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { searchAll } from '../utils/search';
import './SearchBar.css';

export default function SearchBar({ variant = 'default', onQueryChange, autoFocus = false }) {
  const { t, lang } = useLanguage();
  const [query, setQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();
  const wrapRef = useRef(null);

  useEffect(() => {
    const onClick = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  const results = query.trim() ? searchAll(query, lang) : { places: [], food: [], stays: [] };
  const suggestions = [
    ...results.places.slice(0, 4).map((p) => ({ type: 'place', id: p.id, label: p.name[lang] })),
    ...results.food.slice(0, 2).map((f) => ({ type: 'food', id: f.id, label: f.name[lang] })),
    ...results.stays.slice(0, 2).map((s) => ({ type: 'stay', id: s.id, label: s.name[lang] })),
  ];

  const submit = (e) => {
    e.preventDefault();
    if (onQueryChange) {
      onQueryChange(query);
      return;
    }
    navigate(`/explore?q=${encodeURIComponent(query)}`);
    setShowSuggestions(false);
  };

  const goTo = (item) => {
    setShowSuggestions(false);
    if (item.type === 'place') navigate(`/place/${item.id}`);
    else if (item.type === 'food') navigate('/food');
    else navigate('/stay');
  };

  return (
    <div className={`search-bar search-bar--${variant}`} ref={wrapRef}>
      <form onSubmit={submit} className="search-bar__form" role="search">
        <Search size={18} className="search-bar__icon" />
        <input
          type="search"
          value={query}
          autoFocus={autoFocus}
          placeholder={t('search_placeholder')}
          aria-label={t('search_placeholder')}
          onChange={(e) => {
            setQuery(e.target.value);
            setShowSuggestions(true);
            if (onQueryChange) onQueryChange(e.target.value);
          }}
          onFocus={() => setShowSuggestions(true)}
        />
        <button type="submit" className="btn btn-primary btn-sm search-bar__submit">
          {t('search_button')}
        </button>
      </form>

      {showSuggestions && query.trim() && suggestions.length > 0 && (
        <ul className="search-bar__suggestions">
          {suggestions.map((item) => (
            <li key={`${item.type}-${item.id}`}>
              <button type="button" onClick={() => goTo(item)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      )}

      {showSuggestions && query.trim() && suggestions.length === 0 && (
        <ul className="search-bar__suggestions">
          <li className="search-bar__no-results">{t('no_results')}</li>
        </ul>
      )}
    </div>
  );
}
