const unavailableCuisine = {
  en: 'Cuisine information not available',
  ta: 'உணவு வகை தகவல் கிடைக்கவில்லை',
};

const unverifiedDescription = {
  en: 'Restaurant and menu details have not been verified. Contact the venue directly to confirm dining services.',
  ta: 'உணவகம் மற்றும் மெனு விவரங்கள் சரிபார்க்கப்படவில்லை. உணவு வசதிகளை உறுதிப்படுத்த அந்த இடத்தை நேரடியாக தொடர்பு கொள்ளவும்.',
};

export const foodItems = [
  {
    id: 'hotel-sivas-regency-restaurant',
    name: { en: 'Hotel Sivas Regency', ta: 'ஹோட்டல் சிவாஸ் ரீஜென்சி' },
    category: 'restaurant',
    location: { en: 'Theni Old Bus Stand, Theni', ta: 'தேனி பழைய பேருந்து நிலையம், தேனி' },
    cuisine: unavailableCuisine,
    description: unverifiedDescription,
  },
  {
    id: 'rr-lodge-ac-restaurant',
    name: { en: 'RR Lodge A/C', ta: 'ஆர்.ஆர். லாட்ஜ் ஏ.சி.' },
    category: 'restaurant',
    location: { en: 'NRT Nagar, Theni', ta: 'என்.ஆர்.டி. நகர், தேனி' },
    cuisine: unavailableCuisine,
    description: unverifiedDescription,
  },
  {
    id: 'es-residency-restaurant',
    name: { en: 'ES Residency', ta: 'ஈ.எஸ். ரெசிடென்சி' },
    category: 'restaurant',
    location: { en: 'Periyakulam Road, Theni', ta: 'பெரியகுளம் சாலை, தேனி' },
    cuisine: unavailableCuisine,
    description: unverifiedDescription,
  },
  {
    id: 'royal-residency-restaurant',
    name: { en: 'Royal Residency', ta: 'ராயல் ரெசிடென்சி' },
    category: 'restaurant',
    location: { en: 'NRT Nagar, Theni', ta: 'என்.ஆர்.டி. நகர், தேனி' },
    cuisine: unavailableCuisine,
    description: unverifiedDescription,
  },
  {
    id: 'hotel-sri-vijay-nivas-restaurant',
    name: { en: 'Hotel Sri Vijay Nivas', ta: 'ஹோட்டல் ஸ்ரீ விஜய் நிவாஸ்' },
    category: 'restaurant',
    location: { en: 'Theni Town', ta: 'தேனி நகரம்' },
    cuisine: unavailableCuisine,
    description: unverifiedDescription,
  },
  {
    id: 'hotel-theni-orchid-inns-restaurant',
    name: { en: 'Hotel Theni Orchid Inns', ta: 'ஹோட்டல் தேனி ஆர்க்கிட் இன்ப்ஸ்' },
    category: 'restaurant',
    location: { en: 'Palani Chettipatti, Theni', ta: 'பழனி செட்டிபட்டி, தேனி' },
    cuisine: unavailableCuisine,
    description: unverifiedDescription,
  },
  {
    id: 'hotel-shri-annalakshmi-restaurant',
    name: { en: 'Hotel Shri Annalakshmi', ta: 'ஹோட்டல் ஸ்ரீ அன்னலட்சுமி' },
    category: 'restaurant',
    location: { en: 'Periyakulam Road, Theni', ta: 'பெரியகுளம் சாலை, தேனி' },
    cuisine: unavailableCuisine,
    description: unverifiedDescription,
  },
  {
    id: 'le-shiv-executive-suite-restaurant',
    name: { en: 'Le Shiv Executive Suite', ta: 'லே ஷிவ் எக்ஸிக்யூட்டிவ் சூட்' },
    category: 'restaurant',
    location: { en: 'Near Old Bus Stand, Theni', ta: 'பழைய பேருந்து நிலையம் அருகில், தேனி' },
    cuisine: unavailableCuisine,
    description: unverifiedDescription,
  },
  {
    id: 'theni-hotel-ramyas-restaurant',
    name: { en: 'Theni Hotel Ramyas', ta: 'தேனி ஹோட்டல் ரம்யாஸ்' },
    category: 'restaurant',
    location: { en: 'Aranmanai Pudhur, Theni', ta: 'அரண்மனை புதூர், தேனி' },
    cuisine: unavailableCuisine,
    description: unverifiedDescription,
  },
  {
    id: 'hotel-grand-lpm-restaurant',
    name: { en: 'Hotel Grand LPM', ta: 'ஹோட்டல் கிராண்ட் எல்.பி.எம்.' },
    category: 'restaurant',
    location: { en: 'Lakshmipuram / Periyakulam Road, Theni', ta: 'லட்சுமிபுரம் / பெரியகுளம் சாலை, தேனி' },
    cuisine: unavailableCuisine,
    description: unverifiedDescription,
  },
  {
    id: 'hotel-krithick-grand-restaurant',
    name: { en: 'Hotel Krithick Grand', ta: 'ஹோட்டல் கிரிதிக் கிராண்ட்' },
    category: 'restaurant',
    location: { en: 'Palani Chettipatti / Veerapandi side, Theni', ta: 'பழனி செட்டிபட்டி / வீரபாண்டி பகுதி, தேனி' },
    cuisine: unavailableCuisine,
    description: unverifiedDescription,
  },
  {
    id: 'hotel-western-gatz-restaurant',
    name: { en: 'Hotel Western Gatz', ta: 'ஹோட்டல் வெஸ்டர்ன் காட்ஸ்' },
    category: 'restaurant',
    location: { en: 'NRT Nagar, Theni', ta: 'என்.ஆர்.டி. நகர், தேனி' },
    cuisine: unavailableCuisine,
    description: unverifiedDescription,
  },
];

export const getFoodByCategory = (categoryId) =>
  categoryId === 'all' ? foodItems : foodItems.filter((f) => f.category === categoryId);
