import { Target, Landmark, Trees, Users, Compass } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './About.css';

export default function About() {
  const { t, lang } = useLanguage();

  const sections = [
    {
      icon: Target,
      title: lang === 'ta' ? 'எங்கள் நோக்கம்' : 'Our Mission',
      body:
        lang === 'ta'
          ? 'உள்ளூர் மக்கள் தங்கள் பாரம்பரியத்தை பகிர்ந்து கொள்ளவும், பயணிகள் தேனியை எளிதாக ஆராயவும் உதவும் ஒரு தளத்தை உருவாக்குவதே எங்கள் நோக்கம்.'
          : 'To build a simple, shared platform where local people can document their heritage and visitors can discover Theni at their own pace.',
    },
    {
      icon: Landmark,
      title: lang === 'ta' ? 'தேனியின் பாரம்பரியம்' : "Theni's Heritage",
      body:
        lang === 'ta'
          ? 'பழைய சந்தைகள், கோயில்கள் மற்றும் வர்த்தக நகரங்கள் தேனியின் நீண்ட வரலாற்றை பிரதிபலிக்கின்றன.'
          : 'Old markets, temples and trading towns across the district trace a long history of settlement, trade and worship in the region.',
    },
    {
      icon: Trees,
      title: lang === 'ta' ? 'இயற்கை & கலாச்சாரம்' : 'Nature & Culture',
      body:
        lang === 'ta'
          ? 'மேற்குத் தொடர்ச்சி மலைகள் தொடங்கி சமவெளி வரை, தேனி இயற்கை வளம் மற்றும் அன்றாட கலாச்சாரத்தால் நிறைந்துள்ளது.'
          : 'From the Western Ghats foothills to the plains, Theni carries a strong everyday culture shaped by farming, festivals and its landscape.',
    },
    {
      icon: Users,
      title: lang === 'ta' ? 'உள்ளூர் சமூகங்களுக்கு' : 'For Local Communities',
      body:
        lang === 'ta'
          ? 'உள்ளூர் மக்கள் தங்கள் பகுதியிலுள்ள இடங்களை பரிந்துரைக்கவும், அவற்றின் கதைகளை பகிரவும் இந்த தளம் உதவுகிறது.'
          : 'The suggestion form lets residents add places, food spots and stays they know well, keeping the listing grounded in local knowledge.',
    },
    {
      icon: Compass,
      title: lang === 'ta' ? 'பயணிகளுக்கு' : 'For Tourists',
      body:
        lang === 'ta'
          ? 'வரைபடம், வடிகட்டிகள் மற்றும் தேடல் மூலம் பயணிகள் தங்கள் பயணத்தை எளிதாக திட்டமிடலாம்.'
          : 'Filters, an interactive map and search make it straightforward to plan a route between heritage sites, food stops and places to stay.',
    },
  ];

  return (
    <div className="about-page section">
      <div className="container">
        <div className="section-head about-page__head">
          <span className="eyebrow">{t('nav_about').toUpperCase()}</span>
          <h1>{t('about_title')}</h1>
          <p>{t('about_subtitle')}</p>
        </div>

        <div className="about-page__grid">
          {sections.map(({ icon: Icon, title, body }) => (
            <div className="about-page__card card-surface" key={title}>
              <span className="about-page__icon">
                <Icon size={22} strokeWidth={1.8} />
              </span>
              <h2>{title}</h2>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
