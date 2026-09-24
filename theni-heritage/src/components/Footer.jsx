import { NavLink } from 'react-router-dom';
import { Leaf, MapPin, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Footer.css';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <span className="navbar__brand-icon">
            <Leaf size={18} strokeWidth={2.2} />
          </span>
          <div>
            <p className="footer__brand-name">Theni Heritage</p>
            <p className="footer__tagline">{t('footer_tagline')}</p>
          </div>
        </div>

        <div className="footer__col">
          <h4>{t('footer_explore')}</h4>
          <NavLink to="/explore">{t('nav_explore')}</NavLink>
          <NavLink to="/map">{t('nav_map')}</NavLink>
          <NavLink to="/food">{t('nav_food')}</NavLink>
          <NavLink to="/stay">{t('nav_stay')}</NavLink>
        </div>

        <div className="footer__col">
          <h4>{t('footer_plan')}</h4>
          <NavLink to="/favorites">{t('nav_favorites')}</NavLink>
          <NavLink to="/feedback">{t('profile_suggest')}</NavLink>
          <NavLink to="/profile">{t('nav_profile')}</NavLink>
        </div>

        <div className="footer__col">
          <h4>{t('footer_about')}</h4>
          <NavLink to="/about">{t('nav_about')}</NavLink>
          <span className="footer__contact"><MapPin size={14} /> {t('hero_location')}</span>
          <span className="footer__contact"><Mail size={14} /> hello@theniheritage.org</span>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>&copy; {new Date().getFullYear()} Theni Heritage. {t('footer_rights')}</p>
      </div>
    </footer>
  );
}
