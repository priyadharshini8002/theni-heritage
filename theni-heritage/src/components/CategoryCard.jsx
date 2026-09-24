import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './CategoryCard.css';

export default function CategoryCard({ category, to }) {
  const { lang } = useLanguage();
  const Icon = category.icon;

  return (
    <Link to={to} className="category-card">
      <span className="category-card__icon">
        <Icon size={22} strokeWidth={1.8} />
      </span>
      <h3>{category.label[lang]}</h3>
      <p>{category.description[lang]}</p>
      <span className="category-card__arrow">
        <ArrowUpRight size={16} />
      </span>
    </Link>
  );
}
