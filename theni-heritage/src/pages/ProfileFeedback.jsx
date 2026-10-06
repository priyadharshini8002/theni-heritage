import { useState } from 'react';
import { ArrowLeft, CheckCircle2, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GOOGLE_APPS_SCRIPT_URL } from '../config/feedback';
import './ProfileFeedback.css';

const initialForm = { name: '', email: '', rating: 0, feedback: '' };

export default function ProfileFeedback() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const update = (field) => (event) => {
    setForm((current) => ({ ...current, [field]: event.target.value }));
  };

  const submitFeedback = async (event) => {
    event.preventDefault();
    if (!form.rating) {
      setError('Please choose a star rating.');
      setStatus('error');
      return;
    }
    setStatus('submitting');
    setError('');

    try {
      if (!GOOGLE_APPS_SCRIPT_URL) {
        throw new Error('Google Apps Script URL is not configured.');
      }

      const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(form),
      });
      if (!response.ok) throw new Error(`Feedback request failed with status ${response.status}.`);

      const result = await response.json();
      if (!result.success) throw new Error(result.error || 'Feedback could not be saved.');

      setForm(initialForm);
      setStatus('success');
    } catch {
      setError('Unable to submit feedback. Please try again.');
      setStatus('error');
    }
  };

  return (
    <div className="profile-feedback section">
      <div className="container profile-feedback__container">
        <Link className="profile-feedback__back" to="/profile"><ArrowLeft size={17} /> Back to Profile</Link>
        <header className="profile-feedback__header">
          <span className="eyebrow">HELP US GROW</span>
          <h1>Feedback</h1>
          <p>Tell us about your Theni Heritage experience.</p>
        </header>

        {status === 'success' ? (
          <div className="profile-feedback__success card-surface" role="status">
            <CheckCircle2 size={44} />
            <p>Thank you for your feedback!</p>
            <button type="button" className="btn btn-primary" onClick={() => setStatus('idle')}>Send another response</button>
          </div>
        ) : (
          <form className="profile-feedback__form card-surface" onSubmit={submitFeedback}>
            <label className="profile-feedback__field" htmlFor="feedback-name">
              <span>Name</span>
              <input id="feedback-name" name="name" type="text" autoComplete="name" value={form.name} onChange={update('name')} required />
            </label>
            <label className="profile-feedback__field" htmlFor="feedback-email">
              <span>Email</span>
              <input id="feedback-email" name="email" type="email" autoComplete="email" value={form.email} onChange={update('email')} required />
            </label>
            <fieldset className="profile-feedback__rating">
              <legend>Star Rating *</legend>
              <div className="profile-feedback__stars" role="group" aria-label="Choose a star rating">
                {[1, 2, 3, 4, 5].map((rating) => (
                  <button
                    key={rating}
                    type="button"
                    className={rating <= form.rating ? 'profile-feedback__star profile-feedback__star--selected' : 'profile-feedback__star'}
                    aria-label={`${rating} star${rating === 1 ? '' : 's'}`}
                    aria-pressed={form.rating === rating}
                    onClick={() => setForm((current) => ({ ...current, rating }))}
                  >
                    <Star size={28} fill={rating <= form.rating ? 'currentColor' : 'none'} />
                  </button>
                ))}
              </div>
            </fieldset>
            <label className="profile-feedback__field profile-feedback__field--full" htmlFor="feedback-comments">
              <span>Feedback / Comments</span>
              <textarea id="feedback-comments" name="feedback" rows={5} value={form.feedback} onChange={update('feedback')} required maxLength={5000} />
            </label>
            {error && <p className="profile-feedback__error" role="alert">{error}</p>}
            <button type="submit" className="btn btn-primary profile-feedback__submit" disabled={status === 'submitting'}>
              {status === 'submitting' ? 'Submitting…' : 'Submit Feedback'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
