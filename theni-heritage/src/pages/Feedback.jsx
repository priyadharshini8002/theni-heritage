import { useState } from 'react';
import { CheckCircle2, ImagePlus, Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { submitSuggestion, isFirebaseConfigured } from '../services/firebase';
import './Feedback.css';

const categoryOptions = [
  { id: 'historic', en: 'Historic', ta: 'வரலாற்று' },
  { id: 'nature', en: 'Nature', ta: 'இயற்கை' },
  { id: 'religious', en: 'Religious', ta: 'சமயம்' },
  { id: 'tourist', en: 'Tourist Spot', ta: 'சுற்றுலா' },
  { id: 'food', en: 'Food', ta: 'உணவு' },
  { id: 'stay', en: 'Stay', ta: 'தங்குமிடம்' },
];

const initialState = {
  name: '',
  placeName: '',
  category: 'historic',
  description: '',
  location: '',
  notes: '',
};

export default function Feedback() {
  const { t, lang } = useLanguage();
  const [form, setForm] = useState(initialState);
  const [photo, setPhoto] = useState(null);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | success

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = true;
    if (!form.placeName.trim()) next.placeName = true;
    if (!form.description.trim()) next.description = true;
    if (!form.location.trim()) next.location = true;
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('submitting');
    await submitSuggestion(form, photo);
    setStatus('success');
    setForm(initialState);
    setPhoto(null);
  };

  if (status === 'success') {
    return (
      <div className="feedback-page section">
        <div className="container feedback-page__container">
          <div className="feedback-page__success">
            <CheckCircle2 size={44} />
            <p>{t('form_success')}</p>
            <button type="button" className="btn btn-primary btn-sm" onClick={() => setStatus('idle')}>
              {t('profile_suggest')}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="feedback-page section">
      <div className="container feedback-page__container">
        <div className="section-head">
          <span className="eyebrow">{t('nav_about').toUpperCase()}</span>
          <h1>{t('feedback_title')}</h1>
          <p>{t('feedback_subtitle')}</p>
        </div>

        {!isFirebaseConfigured && (
          <p className="feedback-page__note">
            {lang === 'ta'
              ? 'Firebase அமைக்கப்படவில்லை — உங்கள் பரிந்துரை இந்த சாதனத்தில் மட்டும் சேமிக்கப்படும்.'
              : 'Firebase isn\'t configured yet, so this submission will be saved locally on this device instead of the cloud.'}
          </p>
        )}

        <form className="feedback-form card-surface" onSubmit={handleSubmit} noValidate>
          <div className="feedback-form__field">
            <label htmlFor="name">{t('form_name')} *</label>
            <input
              id="name"
              type="text"
              value={form.name}
              onChange={update('name')}
              aria-invalid={errors.name || undefined}
            />
            {errors.name && <span className="feedback-form__error">Required</span>}
          </div>

          <div className="feedback-form__field">
            <label htmlFor="placeName">{t('form_place_name')} *</label>
            <input
              id="placeName"
              type="text"
              value={form.placeName}
              onChange={update('placeName')}
              aria-invalid={errors.placeName || undefined}
            />
            {errors.placeName && <span className="feedback-form__error">Required</span>}
          </div>

          <div className="feedback-form__field">
            <label htmlFor="category">{t('form_category')}</label>
            <select id="category" value={form.category} onChange={update('category')}>
              {categoryOptions.map((c) => (
                <option key={c.id} value={c.id}>
                  {lang === 'ta' ? c.ta : c.en}
                </option>
              ))}
            </select>
          </div>

          <div className="feedback-form__field">
            <label htmlFor="location">{t('form_location')} *</label>
            <input
              id="location"
              type="text"
              value={form.location}
              onChange={update('location')}
              aria-invalid={errors.location || undefined}
            />
            {errors.location && <span className="feedback-form__error">Required</span>}
          </div>

          <div className="feedback-form__field feedback-form__field--full">
            <label htmlFor="description">{t('form_description')} *</label>
            <textarea
              id="description"
              rows={4}
              value={form.description}
              onChange={update('description')}
              aria-invalid={errors.description || undefined}
            />
            {errors.description && <span className="feedback-form__error">Required</span>}
          </div>

          <div className="feedback-form__field feedback-form__field--full">
            <label htmlFor="notes">{t('form_suggestion')}</label>
            <textarea id="notes" rows={3} value={form.notes} onChange={update('notes')} />
          </div>

          <div className="feedback-form__field feedback-form__field--full">
            <label htmlFor="photo">{t('form_photo')}</label>
            <label className="feedback-form__upload" htmlFor="photo">
              <ImagePlus size={18} />
              <span>{photo ? photo.name : (lang === 'ta' ? 'படத்தை தேர்ந்தெடுக்கவும்' : 'Choose a photo')}</span>
            </label>
            <input
              id="photo"
              type="file"
              accept="image/*"
              className="visually-hidden"
              onChange={(e) => setPhoto(e.target.files?.[0] || null)}
            />
          </div>

          <button type="submit" className="btn btn-primary feedback-form__submit" disabled={status === 'submitting'}>
            <Send size={16} /> {status === 'submitting' ? '…' : t('submit_suggestion')}
          </button>
        </form>
      </div>
    </div>
  );
}
