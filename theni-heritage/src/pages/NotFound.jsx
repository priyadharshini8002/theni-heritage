import { Link } from 'react-router-dom';
import { Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="section" style={{ textAlign: 'center' }}>
      <div className="container" style={{ maxWidth: 480 }}>
        <h1 style={{ fontSize: '2.4rem', marginBottom: 12 }}>404</h1>
        <p style={{ color: 'var(--charcoal-600)', marginBottom: 24 }}>
          That page doesn't exist. Let's get you back to exploring Theni.
        </p>
        <Link to="/" className="btn btn-primary">
          <Compass size={16} /> Back to Home
        </Link>
      </div>
    </div>
  );
}
