import { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Search, Languages, Heart, User, Leaf } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import SearchOverlay from './SearchOverlay';
import './Navbar.css';

const navItems = [
  { to: '/', key: 'nav_home' },
  { to: '/explore', key: 'nav_explore' },
  { to: '/map', key: 'nav_map' },
  { to: '/food', key: 'nav_food' },
  { to: '/stay', key: 'nav_stay' },
  { to: '/about', key: 'nav_about' },
];

export default function Navbar() {
  const { t, lang, toggleLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <NavLink to="/" className="navbar__brand" aria-label="Theni Heritage — Home">
          <span className="navbar__brand-icon">
            <Leaf size={18} strokeWidth={2.2} />
          </span>
          <span className="navbar__brand-text">
            Theni <em>Heritage</em>
          </span>
        </NavLink>

        <nav className="navbar__links" aria-label="Primary">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) => `navbar__link ${isActive ? 'navbar__link--active' : ''}`}
            >
              {t(item.key)}
            </NavLink>
          ))}
        </nav>

        <div className="navbar__actions">
          <button
            type="button"
            className="navbar__icon-btn"
            onClick={() => setSearchOpen(true)}
            aria-label="Search"
          >
            <Search size={19} />
          </button>
          <button
            type="button"
            className="navbar__icon-btn navbar__lang"
            onClick={toggleLang}
            aria-label="Switch language"
          >
            <Languages size={17} />
            <span>{lang === 'en' ? 'தமிழ்' : 'EN'}</span>
          </button>
          <NavLink to="/favorites" className="navbar__icon-btn" aria-label={t('nav_favorites')}>
            <Heart size={19} />
          </NavLink>
          <NavLink to="/profile" className="navbar__icon-btn navbar__profile" aria-label={t('nav_profile')}>
            <User size={19} />
          </NavLink>

          <button
            type="button"
            className="navbar__hamburger"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div
        ref={menuRef}
        id="mobile-menu"
        className={`navbar__mobile ${open ? 'navbar__mobile--open' : ''}`}
      >
        <nav aria-label="Mobile primary">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) => `navbar__mobile-link ${isActive ? 'navbar__mobile-link--active' : ''}`}
              onClick={() => setOpen(false)}
            >
              {t(item.key)}
            </NavLink>
          ))}
          <NavLink to="/favorites" className="navbar__mobile-link" onClick={() => setOpen(false)}>
            {t('nav_favorites')}
          </NavLink>
          <NavLink to="/profile" className="navbar__mobile-link" onClick={() => setOpen(false)}>
            {t('nav_profile')}
          </NavLink>
        </nav>
      </div>

      {searchOpen && <SearchOverlay onClose={() => setSearchOpen(false)} />}
    </header>
  );
}
