import { Landmark, Trees, Sparkles, Waves, MapPinned, Compass } from 'lucide-react';

export const categories = [
  {
    id: 'historic',
    label: { en: 'Historic Places', ta: 'வரலாற்று இடங்கள்' },
    icon: Landmark,
    description: {
      en: 'Forts, markets and settlements shaped by centuries of trade.',
      ta: 'பல நூற்றாண்டு வர்த்தக வரலாறு கொண்ட கோட்டைகள், சந்தைகள்.',
    },
  },
  {
    id: 'nature',
    label: { en: 'Nature & Waterfalls', ta: 'இயற்கை & அருவிகள்' },
    icon: Waves,
    description: {
      en: 'Waterfalls, dams and the Western Ghats foothills.',
      ta: 'அருவிகள், அணைகள் மற்றும் மேற்குத் தொடர்ச்சி மலை அடிவாரங்கள்.',
    },
  },
  {
    id: 'religious',
    label: { en: 'Religious Places', ta: 'சமய தலங்கள்' },
    icon: Sparkles,
    description: {
      en: 'Temples that anchor local festivals and daily life.',
      ta: 'உள்ளூர் திருவிழாக்களுக்கு மையமான கோயில்கள்.',
    },
  },
  {
    id: 'tourist',
    label: { en: 'Tourist Spots', ta: 'சுற்றுலா இடங்கள்' },
    icon: Compass,
    description: {
      en: 'Hill stations, trekking trails and scenic viewpoints.',
      ta: 'மலை நகரங்கள், மலையேற்ற பாதைகள், காட்சியிடங்கள்.',
    },
  },
  {
    id: 'food',
    label: { en: 'Food Specials', ta: 'உணவு சிறப்புகள்' },
    icon: Trees,
    description: {
      en: 'Local kitchens serving Theni-style everyday food.',
      ta: 'தேனி பாணி உணவை பரிமாறும் உள்ளூர் உணவகங்கள்.',
    },
  },
  {
    id: 'nearby',
    label: { en: 'Nearby Places', ta: 'அருகிலுள்ள இடங்கள்' },
    icon: MapPinned,
    description: {
      en: 'Places sorted by distance from where you are.',
      ta: 'உங்கள் இருப்பிடத்தை பொறுத்து அருகிலுள்ள இடங்கள்.',
    },
  },
];

export const getCategoryById = (id) => categories.find((c) => c.id === id);
