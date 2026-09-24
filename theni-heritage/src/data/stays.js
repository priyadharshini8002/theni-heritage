export const stays = [
  {
    id: 'theni-heritage-hotel',
    name: { en: 'Theni Residency', ta: 'தேனி ரெசிடென்சி' },
    category: 'hotels',
    rating: 4.2,
    priceRange: { en: '₹1,500 – ₹2,800 / night', ta: '₹1,500 – ₹2,800 / இரவு' },
    location: { en: 'Theni town centre', ta: 'தேனி நகர மையம்' },
    image: 'https://picsum.photos/seed/stay-1/700/500',
    contact: '+91 90000 00001',
    description: {
      en: 'A straightforward business hotel close to the bus stand, convenient for early starts to nearby attractions.',
      ta: 'பேருந்து நிலையம் அருகில் அமைந்த எளிய தங்குமிடம், அருகிலுள்ள இடங்களுக்கு அதிகாலையில் புறப்படுவதற்கு வசதியானது.',
    },
  },
  {
    id: 'cumbum-homestay',
    name: { en: 'Cumbum Valley Homestay', ta: 'கம்பம் பள்ளத்தாக்கு ஹோம்ஸ்டே' },
    category: 'homestays',
    rating: 4.6,
    priceRange: { en: '₹1,200 – ₹2,000 / night', ta: '₹1,200 – ₹2,000 / இரவு' },
    location: { en: 'Cumbum Valley', ta: 'கம்பம் பள்ளத்தாக்கு' },
    image: 'https://picsum.photos/seed/stay-2/700/500',
    contact: '+91 90000 00002',
    description: {
      en: 'A family-run homestay surrounded by grape orchards, with home-cooked meals on request.',
      ta: 'திராட்சை தோட்டங்களால் சூழப்பட்ட குடும்பம் நடத்தும் ஹோம்ஸ்டே, வேண்டுமானால் வீட்டு உணவும் கிடைக்கும்.',
    },
  },
  {
    id: 'meghamalai-resort',
    name: { en: 'Meghamalai Hill Resort', ta: 'மேகமலை மலை ரிசார்ட்' },
    category: 'resorts',
    rating: 4.5,
    priceRange: { en: '₹3,500 – ₹6,000 / night', ta: '₹3,500 – ₹6,000 / இரவு' },
    location: { en: 'Meghamalai Hills', ta: 'மேகமலை மலைப் பகுதி' },
    image: 'https://picsum.photos/seed/stay-3/700/500',
    contact: '+91 90000 00003',
    description: {
      en: 'A quiet estate-side resort with valley views, best booked ahead during the cooler months.',
      ta: 'பள்ளத்தாக்கு காட்சியுடன் அமைதியான தோட்டம் அருகிலுள்ள ரிசார்ட்; குளிர்காலத்தில் முன்பதிவு செய்வது நல்லது.',
    },
  },
  {
    id: 'bodi-budget-lodge',
    name: { en: 'Bodi Traveller Lodge', ta: 'போடி பயணி லாட்ஜ்' },
    category: 'budget',
    rating: 3.8,
    priceRange: { en: '₹600 – ₹1,000 / night', ta: '₹600 – ₹1,000 / இரவு' },
    location: { en: 'Bodinayakanur', ta: 'போடிநாயக்கனூர்' },
    image: 'https://picsum.photos/seed/stay-4/700/500',
    contact: '+91 90000 00004',
    description: {
      en: 'A no-frills budget lodge near the market, suited to travellers passing through on the way to Kerala.',
      ta: 'சந்தை அருகில் அமைந்த எளிய பட்ஜெட் லாட்ஜ், கேரளா செல்லும் வழியில் தங்க வசதியானது.',
    },
  },
  {
    id: 'kurangani-camp',
    name: { en: 'Kurangani Trekker\'s Camp', ta: 'குரங்கணி ட்ரெக்கர்ஸ் கேம்ப்' },
    category: 'budget',
    rating: 4.0,
    priceRange: { en: '₹500 – ₹1,200 / night', ta: '₹500 – ₹1,200 / இரவு' },
    location: { en: 'Kurangani village', ta: 'குரங்கணி கிராமம்' },
    image: 'https://picsum.photos/seed/stay-5/700/500',
    contact: '+91 90000 00005',
    description: {
      en: 'Simple dormitory-style rooms for trekkers, close to the trailhead — book alongside your trekking permit.',
      ta: 'மலையேற்றம் தொடங்கும் இடத்திற்கு அருகில், மலையேறுபவர்களுக்கான எளிய தங்கும் வசதி.',
    },
  },
  {
    id: 'vaigai-lakeview',
    name: { en: 'Vaigai Lakeview Rooms', ta: 'வைகை ஏரிக்காட்சி அறைகள்' },
    category: 'hotels',
    rating: 4.1,
    priceRange: { en: '₹1,800 – ₹3,200 / night', ta: '₹1,800 – ₹3,200 / இரவு' },
    location: { en: 'Andipatti, near Vaigai Dam', ta: 'ஆண்டிப்பட்டி, வைகை அணை அருகில்' },
    image: 'https://picsum.photos/seed/stay-6/700/500',
    contact: '+91 90000 00006',
    description: {
      en: 'Comfortable rooms a short drive from the dam gardens, popular with weekend visitors.',
      ta: 'அணை தோட்டத்திலிருந்து சிறிது தூரத்தில் அமைந்த வசதியான அறைகள், வார இறுதி பயணிகளிடையே பிரபலம்.',
    },
  },
];

export const getStaysByCategory = (categoryId) =>
  categoryId === 'all' ? stays : stays.filter((s) => s.category === categoryId);
