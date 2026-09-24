import './FilterBar.css';

export default function FilterBar({ options, active, onChange }) {
  return (
    <div className="filter-bar" role="tablist" aria-label="Category filters">
      {options.map((opt) => (
        <button
          key={opt.id}
          type="button"
          role="tab"
          aria-selected={active === opt.id}
          className={`filter-bar__pill ${active === opt.id ? 'filter-bar__pill--active' : ''}`}
          onClick={() => onChange(opt.id)}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
