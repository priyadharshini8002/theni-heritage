import { Link } from 'react-router-dom';
import { Landmark, Trees, Users, Sparkles, LocateFixed } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import Hero from '../components/Hero';
import CategoryCard from '../components/CategoryCard';
import PlaceCard from '../components/PlaceCard';
import { categories } from '../data/categories';
import { getFeaturedPlaces } from '../data/places';
import './Home.css';

const categoryRoutes = {
  historic: '/explore?category=historic',
  nature: '/explore?category=nature',
  religious: '/explore?category=religious',
  tourist: '/explore?category=tourist',
  food: '/food',
  nearby: '/map',
};

const whyItems = [
  { icon: Landmark, titleKey: 'why_1_title', bodyKey: 'why_1_body' },
  { icon: Trees, titleKey: 'why_2_title', bodyKey: 'why_2_body' },
  { icon: Users, titleKey: 'why_3_title', bodyKey: 'why_3_body' },
  { icon: Sparkles, titleKey: 'why_4_title', bodyKey: 'why_4_body' },
];

export default function Home() {
  const { t } = useLanguage();
  const featured = getFeaturedPlaces();

  return (
    <div>
      <Hero />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">{t('nav_explore').toUpperCase()}</span>
            <h2>{t('categories_title')}</h2>
            <p>{t('categories_subtitle')}</p>
          </div>
          <div className="home-category-grid">
            {categories.map((cat) => (
              <CategoryCard key={cat.id} category={cat} to={categoryRoutes[cat.id]} />
            ))}
          </div>
        </div>
      </section>

      <section className="section home-popular">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">{t('hero_location').toUpperCase()}</span>
            <h2>{t('popular_title')}</h2>
            <p>{t('popular_subtitle')}</p>
          </div>
          <div className="home-place-grid">
            {featured.map((place) => (
              <PlaceCard key={place.id} place={place} />
            ))}
          </div>
        </div>
      </section>

      <section className="section home-why">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">{t('nav_about').toUpperCase()}</span>
            <h2>{t('why_title')}</h2>
            <p>{t('why_subtitle')}</p>
          </div>
          <div className="home-why-grid">
            {whyItems.map(({ icon: Icon, titleKey, bodyKey }) => (
              <div className="home-why-card" key={titleKey}>
                <span className="home-why-icon">
                  <Icon size={22} strokeWidth={1.8} />
                </span>
                <h3>{t(titleKey)}</h3>
                <p>{t(bodyKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="home-nearby">
        <div className="container home-nearby__inner">
          <div>
            <span className="eyebrow home-nearby__eyebrow">{t('nav_map').toUpperCase()}</span>
            <h2>{t('nearby_title')}</h2>
            <p>{t('nearby_subtitle')}</p>
          </div>
          <Link to="/map" className="btn btn-primary">
            <LocateFixed size={17} /> {t('nearby_cta')}
          </Link>
        </div>
      </section>
    </div>
  );
}
