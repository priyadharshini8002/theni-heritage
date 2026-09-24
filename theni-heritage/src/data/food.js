export const foodItems = [
  {
    id: 'theni-parotta',
    name: { en: 'Theni-style Kari Dosa', ta: 'தேனி பாணி காரி தோசை' },
    category: 'traditional',
    location: { en: 'Theni town, near the old bus stand', ta: 'தேனி நகரம், பழைய பேருந்து நிலையம் அருகில்' },
    image: 'https://picsum.photos/seed/theni-food-1/700/500',
    price: { en: '₹40 – ₹80', ta: '₹40 – ₹80' },
    description: {
      en: 'A crisp dosa served with a spiced meat or egg filling, a breakfast favourite across small eateries in the district.',
      ta: 'காரமான இறைச்சி அல்லது முட்டை நிரப்பியுடன் பரிமாறப்படும் மொறுமொறுப்பான தோசை, மாவட்டம் முழுவதும் காலை உணவாக பிரபலமானது.',
    },
  },
  {
    id: 'cumbum-grapes',
    name: { en: 'Cumbum Grape Stalls', ta: 'கம்பம் திராட்சை கடைகள்' },
    category: 'local',
    location: { en: 'Cumbum Valley', ta: 'கம்பம் பள்ளத்தாக்கு' },
    image: 'https://picsum.photos/seed/theni-food-2/700/500',
    price: { en: '₹60 – ₹150 / kg', ta: '₹60 – ₹150 / கிலோ' },
    description: {
      en: 'Roadside stalls selling fresh grapes from the Cumbum valley, one of Tamil Nadu\'s main grape-growing regions.',
      ta: 'தமிழ்நாட்டின் முக்கிய திராட்சை பயிரிடும் பகுதியான கம்பம் பள்ளத்தாக்கின் சாலையோர கடைகள்.',
    },
  },
  {
    id: 'budget-mess',
    name: { en: 'Amma Mess', ta: 'அம்மா மெஸ்' },
    category: 'budget',
    location: { en: 'Near Theni bus stand', ta: 'தேனி பேருந்து நிலையம் அருகில்' },
    image: 'https://picsum.photos/seed/theni-food-3/700/500',
    price: { en: '₹50 – ₹100 (meals)', ta: '₹50 – ₹100 (சாப்பாடு)' },
    description: {
      en: 'A no-frills meals spot serving rice, sambar and seasonal vegetables at everyday prices.',
      ta: 'சாதம், சாம்பார் மற்றும் பருவகால காய்கறிகளுடன் எளிய விலையில் சாப்பாடு தரும் இடம்.',
    },
  },
  {
    id: 'hill-cafe',
    name: { en: 'Meghamalai Tea Cafe', ta: 'மேகமலை தேநீர் கஃபே' },
    category: 'restaurant',
    location: { en: 'Meghamalai hill road', ta: 'மேகமலை மலைச் சாலை' },
    image: 'https://picsum.photos/seed/theni-food-4/700/500',
    price: { en: '₹20 – ₹200', ta: '₹20 – ₹200' },
    description: {
      en: 'A small hillside cafe with estate-grown tea, hot snacks and views across the valley — a favourite rest stop on the way up.',
      ta: 'தோட்டத்தில் விளையும் தேநீர், சூடான சிற்றுண்டி வகைகளுடன் பள்ளத்தாக்கு காட்சியை வழங்கும் சிறிய மலைச் சார்ந்த கஃபே.',
    },
  },
  {
    id: 'temple-prasadam',
    name: { en: 'Kuchanur Temple Food Court', ta: 'குச்சனூர் கோயில் உணவகம்' },
    category: 'traditional',
    location: { en: 'Near Kuchanur Temple', ta: 'குச்சனூர் கோயில் அருகில்' },
    image: 'https://picsum.photos/seed/theni-food-5/700/500',
    price: { en: '₹30 – ₹90', ta: '₹30 – ₹90' },
    description: {
      en: 'Simple vegetarian meals and tiffin near the temple, convenient for pilgrims after darshan.',
      ta: 'தரிசனத்திற்குப் பின் புசிக்கக்கூடிய எளிய சைவ உணவு மற்றும் டிபன் வகைகள்.',
    },
  },
  {
    id: 'bodi-spice-market',
    name: { en: 'Bodi Spice Corner', ta: 'போடி மசாலா மூலை' },
    category: 'local',
    location: { en: 'Bodinayakanur market', ta: 'போடிநாயக்கனூர் சந்தை' },
    image: 'https://picsum.photos/seed/theni-food-6/700/500',
    price: { en: '₹100 – ₹400 / packet', ta: '₹100 – ₹400 / பாக்கெட்' },
    description: {
      en: 'Stalls selling fresh cardamom, pepper and other spices sourced from the surrounding hill plantations.',
      ta: 'சுற்றியுள்ள மலை தோட்டங்களிலிருந்து பெறப்படும் ஏலக்காய், மிளகு மற்றும் பிற மசாலாப் பொருட்கள்.',
    },
  },
];

export const getFoodByCategory = (categoryId) =>
  categoryId === 'all' ? foodItems : foodItems.filter((f) => f.category === categoryId);
