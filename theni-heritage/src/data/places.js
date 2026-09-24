// Sample tourism data for Theni district.
// Descriptions are kept general and easy to replace with verified,
// locally-sourced information — they are not presented as exhaustive history.

export const places = [
  {
    id: 'suruli-falls',
    name: { en: 'Suruli Falls', ta: 'சுருளி அருவி' },
    category: 'nature',
    location: { en: 'Suruli, near Theni', ta: 'சுருளி, தேனி அருகில்' },
    coords: { lat: 9.9878, lng: 77.2951 },
    image: 'https://picsum.photos/seed/suruli-falls-main/900/650',
    gallery: [
      'https://picsum.photos/seed/suruli-falls-1/900/650',
      'https://picsum.photos/seed/suruli-falls-2/900/650',
      'https://picsum.photos/seed/suruli-falls-3/900/650',
    ],
    description: {
      en: 'A seasonal waterfall cascading through rock terraces on the way toward the Western Ghats, popular during monsoon months.',
      ta: 'மேற்குத் தொடர்ச்சி மலைப் பகுதிக்குச் செல்லும் வழியில் அமைந்த பருவகால அருவி, மழைக்காலத்தில் அதிக பார்வையாளர்களை ஈர்க்கும்.',
    },
    history: {
      en: 'Suruli Falls sits along an old hill route linking the plains to the ghats and has long been a stop for travellers and pilgrims heading toward Kerala. Flow varies sharply with the season, so it is worth checking conditions before visiting.',
      ta: 'சுருளி அருவி, சமவெளியிலிருந்து மலைப் பகுதிக்குச் செல்லும் பழைய பாதையில் அமைந்துள்ளது. பருவத்திற்கேற்ப நீரோட்டம் மாறுபடும், எனவே செல்வதற்கு முன் நிலவரத்தை அறிந்து கொள்வது நல்லது.',
    },
    howToReach: {
      en: 'About 25 km from Theni town by road; regular buses and taxis run from Theni and Cumbum.',
      ta: 'தேனி நகரிலிருந்து சுமார் 25 கி.மீ. தூரம்; தேனி மற்றும் கம்பம் இருந்து பேருந்துகள், டாக்சிகள் கிடைக்கும்.',
    },
    expense: { en: '₹50 – ₹150 per person (entry + local transport)', ta: '₹50 – ₹150 ஒரு நபருக்கு (நுழைவு + உள்ளூர் போக்குவரத்து)' },
    bestTime: { en: 'July to January, after monsoon rains', ta: 'ஜூலை முதல் ஜனவரி வரை, மழைக்குப் பிறகு' },
    importantInfo: {
      en: 'Water flow is unpredictable outside monsoon; footing on rocks can be slippery.',
      ta: 'மழைக்காலம் தவிர மற்ற நேரங்களில் நீரோட்டம் குறைவாக இருக்கலாம்; பாறைகள் மீது நடக்கும்போது எச்சரிக்கையாக இருக்கவும்.',
    },
    featured: true,
  },
  {
    id: 'meghamalai',
    name: { en: 'Meghamalai', ta: 'மேகமலை' },
    category: 'tourist',
    location: { en: 'Meghamalai Hills, Theni', ta: 'மேகமலை மலைப் பகுதி, தேனி' },
    coords: { lat: 9.6667, lng: 77.35 },
    image: 'https://picsum.photos/seed/meghamalai-main/900/650',
    gallery: [
      'https://picsum.photos/seed/meghamalai-1/900/650',
      'https://picsum.photos/seed/meghamalai-2/900/650',
      'https://picsum.photos/seed/meghamalai-3/900/650',
    ],
    description: {
      en: 'A cool hill region of tea and cardamom estates, often called the "Hill of Clouds", with viewpoints over the Western Ghats.',
      ta: '"மேகமலை" எனப்படும் இந்த குளிர்ந்த மலைப் பகுதியில் தேயிலை மற்றும் ஏலக்காய் தோட்டங்கள் உள்ளன.',
    },
    history: {
      en: 'The estates here developed through 20th-century plantation activity, and the hills remain sparsely populated, giving the area a quiet, forested character bordering the Periyar Tiger Reserve.',
      ta: 'இங்குள்ள தோட்டங்கள் 20ஆம் நூற்றாண்டில் உருவாக்கப்பட்டவை. இப்பகுதி பெரியார் புலிகள் காப்பகத்தை ஒட்டி அமைந்துள்ளது.',
    },
    howToReach: {
      en: 'Roughly 70 km from Theni via Cumbum and Uthamapalayam; a forest permit may be required beyond certain checkpoints.',
      ta: 'தேனியிலிருந்து கம்பம், உத்தமபாளையம் வழியாக சுமார் 70 கி.மீ.; சில இடங்களுக்கு அப்பால் வனத்துறை அனுமதி தேவைப்படலாம்.',
    },
    expense: { en: '₹300 – ₹800 per person (permits + travel)', ta: '₹300 – ₹800 ஒரு நபருக்கு (அனுமதி + பயணம்)' },
    bestTime: { en: 'October to March', ta: 'அக்டோபர் முதல் மார்ச் வரை' },
    importantInfo: {
      en: 'Mobile network is patchy; carry warm clothing as evenings get cold.',
      ta: 'மொபைல் நெட்வொர்க் பலவீனமாக இருக்கும்; மாலை நேரங்களில் குளிர் அதிகமாக இருப்பதால் அதற்கேற்ற ஆடைகளை எடுத்துச் செல்லவும்.',
    },
    featured: true,
  },
  {
    id: 'vaigai-dam',
    name: { en: 'Vaigai Dam', ta: 'வைகை அணை' },
    category: 'nature',
    location: { en: 'Andipatti, Theni district', ta: 'ஆண்டிப்பட்டி, தேனி மாவட்டம்' },
    coords: { lat: 9.9264, lng: 77.4661 },
    image: 'https://picsum.photos/seed/vaigai-dam-main/900/650',
    gallery: [
      'https://picsum.photos/seed/vaigai-dam-1/900/650',
      'https://picsum.photos/seed/vaigai-dam-2/900/650',
      'https://picsum.photos/seed/vaigai-dam-3/900/650',
    ],
    description: {
      en: 'A major irrigation reservoir across the Vaigai river with landscaped gardens and a musical fountain near the dam site.',
      ta: 'வைகை ஆற்றின் குறுக்கே கட்டப்பட்ட முக்கிய நீர்ப்பாசன அணை, தோட்டங்கள் மற்றும் இசை நீரூற்று.',
    },
    history: {
      en: 'Built in the mid-20th century to irrigate the plains of Madurai and Theni, the dam remains central to farming across the region and draws local visitors especially during weekends.',
      ta: '20ஆம் நூற்றாண்டின் நடுப்பகுதியில் மதுரை, தேனி சமவெளிகளுக்கு நீர்ப்பாசனம் அளிக்க கட்டப்பட்டது.',
    },
    howToReach: {
      en: 'About 35 km from Theni town, well connected by state highway and local buses.',
      ta: 'தேனி நகரிலிருந்து சுமார் 35 கி.மீ., மாநில நெடுஞ்சாலை வழியாக எளிதில் அடையலாம்.',
    },
    expense: { en: '₹20 – ₹100 per person (entry)', ta: '₹20 – ₹100 ஒரு நபருக்கு (நுழைவு)' },
    bestTime: { en: 'August to February, when the reservoir is fuller', ta: 'ஆகஸ்ட் முதல் பிப்ரவரி வரை' },
    importantInfo: {
      en: 'Gardens can get crowded on weekends and public holidays.',
      ta: 'வார இறுதி நாட்களில் மற்றும் விடுமுறை நாட்களில் கூட்டம் அதிகமாக இருக்கும்.',
    },
    featured: true,
  },
  {
    id: 'kuchanur-temple',
    name: { en: 'Kuchanur Temple (Navagraha)', ta: 'குச்சனூர் கோயில் (நவகிரகம்)' },
    category: 'religious',
    location: { en: 'Kuchanur, Theni district', ta: 'குச்சனூர், தேனி மாவட்டம்' },
    coords: { lat: 10.0192, lng: 77.5406 },
    image: 'https://picsum.photos/seed/kuchanur-temple-main/900/650',
    gallery: [
      'https://picsum.photos/seed/kuchanur-temple-1/900/650',
      'https://picsum.photos/seed/kuchanur-temple-2/900/650',
      'https://picsum.photos/seed/kuchanur-temple-3/900/650',
    ],
    description: {
      en: 'A temple dedicated to Guru Bhagavan (Jupiter), one of the nine Navagraha shrines associated with planetary worship in Tamil Nadu.',
      ta: 'குரு பகவானுக்கு அர்ப்பணிக்கப்பட்ட இக்கோயில், தமிழ்நாட்டின் நவகிரக தலங்களில் ஒன்றாகும்.',
    },
    history: {
      en: 'The temple draws devotees observing planetary worship traditions, particularly on Thursdays, and is part of a well-known Navagraha pilgrimage circuit around Madurai and Theni.',
      ta: 'வியாழக்கிழமைகளில் சிறப்பு வழிபாடு நடைபெறும்; மதுரை, தேனி சுற்றியுள்ள நவகிரக தலங்களில் இதுவும் ஒன்று.',
    },
    howToReach: {
      en: '20 km from Theni town, accessible by local bus or taxi.',
      ta: 'தேனி நகரிலிருந்து 20 கி.மீ., உள்ளூர் பேருந்து அல்லது டாக்சி மூலம் அடையலாம்.',
    },
    expense: { en: 'Free entry; ₹100 – ₹300 for special poojas', ta: 'இலவச நுழைவு; சிறப்பு பூஜைகளுக்கு ₹100 – ₹300' },
    bestTime: { en: 'Year-round; Thursdays are especially busy', ta: 'ஆண்டு முழுவதும்; வியாழக்கிழமைகளில் கூட்டம் அதிகம்' },
    importantInfo: {
      en: 'Modest dress is expected inside the temple premises.',
      ta: 'கோயில் வளாகத்தில் ஒழுங்கான ஆடை அணிவது சிறப்பு.',
    },
    featured: true,
  },
  {
    id: 'kurangani',
    name: { en: 'Kurangani', ta: 'குரங்கணி' },
    category: 'tourist',
    location: { en: 'Kurangani Hills, near Bodinayakanur', ta: 'குரங்கணி மலைப்பகுதி, போடிநாயக்கனூர் அருகில்' },
    coords: { lat: 10.1197, lng: 77.3742 },
    image: 'https://picsum.photos/seed/kurangani-main/900/650',
    gallery: [
      'https://picsum.photos/seed/kurangani-1/900/650',
      'https://picsum.photos/seed/kurangani-2/900/650',
    ],
    description: {
      en: 'A trekker\'s village at the base of trails leading up to Top Station and the Kerala border, known for grassland ridges and viewpoints.',
      ta: 'டாப் ஸ்டேஷன் மற்றும் கேரள எல்லைக்குச் செல்லும் மலையேற்றப் பாதைகளின் அடிவாரத்தில் அமைந்த கிராமம்.',
    },
    history: {
      en: 'Kurangani became a well-known trekking base over the last few decades, with routes historically used by local communities moving between the plains and the Kerala hills.',
      ta: 'சமவெளிக்கும் கேரள மலைப் பகுதிக்கும் இடையே உள்ளூர் மக்கள் பயன்படுத்திய பழைய பாதைகளை ஒட்டி, குரங்கணி மலையேற்ற தளமாக அறியப்பட்டது.',
    },
    howToReach: {
      en: '45 km from Theni via Bodinayakanur; trekking requires prior forest department registration.',
      ta: 'போடிநாயக்கனூர் வழியாக தேனியிலிருந்து 45 கி.மீ.; மலையேற்றத்திற்கு முன் வனத்துறை பதிவு தேவை.',
    },
    expense: { en: '₹200 – ₹600 per person (permit + guide)', ta: '₹200 – ₹600 ஒரு நபருக்கு (அனுமதி + வழிகாட்டி)' },
    bestTime: { en: 'November to February', ta: 'நவம்பர் முதல் பிப்ரவரி வரை' },
    importantInfo: {
      en: 'Trekking is only permitted with registration; check current forest department advisories before planning a trip.',
      ta: 'பதிவு செய்த பின்னரே மலையேற்றம் அனுமதிக்கப்படும்; பயணத்திற்கு முன் வனத்துறை அறிவிப்புகளை சரிபார்க்கவும்.',
    },
    featured: false,
  },
  {
    id: 'sothuparai-dam',
    name: { en: 'Sothuparai Dam', ta: 'சோத்துப்பாறை அணை' },
    category: 'nature',
    location: { en: 'Near Bodinayakanur, Theni district', ta: 'போடிநாயக்கனூர் அருகில், தேனி மாவட்டம்' },
    coords: { lat: 10.0505, lng: 77.3411 },
    image: 'https://picsum.photos/seed/sothuparai-dam-main/900/650',
    gallery: [
      'https://picsum.photos/seed/sothuparai-dam-1/900/650',
      'https://picsum.photos/seed/sothuparai-dam-2/900/650',
    ],
    description: {
      en: 'A reservoir set against the Western Ghats foothills, popular for boating and quiet picnic spots.',
      ta: 'மேற்குத் தொடர்ச்சி மலை அடிவாரத்தில் அமைந்த அணை, படகுச் சவாரி மற்றும் அமைதியான உலா செல்லும் இடம்.',
    },
    history: {
      en: 'Built to support irrigation for surrounding farmland, the dam has since become a popular day-trip destination for visitors from Theni and Bodinayakanur.',
      ta: 'சுற்றியுள்ள விவசாய நிலங்களுக்கு நீர்ப்பாசனம் அளிக்க கட்டப்பட்டது; தற்போது ஒரு நாள் உல்லாசப் பயணத்திற்கு பிரபலமான இடம்.',
    },
    howToReach: {
      en: '12 km from Bodinayakanur, easily reached by local transport.',
      ta: 'போடிநாயக்கனூரிலிருந்து 12 கி.மீ., உள்ளூர் போக்குவரத்தில் எளிதில் அடையலாம்.',
    },
    expense: { en: '₹50 – ₹200 per person (boating extra)', ta: '₹50 – ₹200 ஒரு நபருக்கு (படகுச் சவாரி தனி)' },
    bestTime: { en: 'September to February', ta: 'செப்டம்பர் முதல் பிப்ரவரி வரை' },
    importantInfo: {
      en: 'Boating availability depends on water levels and weather.',
      ta: 'நீர் மட்டம் மற்றும் வானிலையைப் பொறுத்து படகுச் சவாரி கிடைக்கும்.',
    },
    featured: false,
  },
  {
    id: 'bodinayakanur',
    name: { en: 'Bodinayakanur', ta: 'போடிநாயக்கனூர்' },
    category: 'historic',
    location: { en: 'Bodinayakanur town, Theni district', ta: 'போடிநாயக்கனூர் நகரம், தேனி மாவட்டம்' },
    coords: { lat: 10.0121, lng: 77.3467 },
    image: 'https://picsum.photos/seed/bodi-main/900/650',
    gallery: [
      'https://picsum.photos/seed/bodi-1/900/650',
      'https://picsum.photos/seed/bodi-2/900/650',
    ],
    description: {
      en: 'A historic trading town and gateway to the cardamom hills, home to one of the region\'s well-known spice and cardamom markets.',
      ta: 'ஏலக்காய் மலைகளுக்கு நுழைவாயிலாக விளங்கும் இந்த வர்த்தக நகரம், பிரபலமான ஏலக்காய் சந்தையைக் கொண்டுள்ளது.',
    },
    history: {
      en: 'Bodinayakanur grew as a trading centre linking the plains with the plantation hills, and its market still reflects that role today with spice, produce and cardamom trade.',
      ta: 'சமவெளிக்கும் தோட்டப் பகுதிகளுக்கும் இடையிலான வர்த்தக மையமாக போடிநாயக்கனூர் வளர்ந்தது; இன்றும் அதன் சந்தை அந்த பங்கை பிரதிபலிக்கிறது.',
    },
    howToReach: {
      en: '18 km from Theni town on the Theni–Kumily road.',
      ta: 'தேனி–கும்பளி சாலையில் தேனி நகரிலிருந்து 18 கி.மீ.',
    },
    expense: { en: 'Free to explore; shopping costs vary', ta: 'சுற்றிப் பார்ப்பது இலவசம்; வாங்குவதற்கேற்ப செலவு மாறும்' },
    bestTime: { en: 'Morning hours, when the market is most active', ta: 'சந்தை சுறுசுறுப்பாக இருக்கும் காலை நேரங்கள்' },
    importantInfo: {
      en: 'The cardamom market is busiest on auction days — timing can vary.',
      ta: 'ஏலக்காய் ஏலம் நடக்கும் நாட்களில் சந்தையில் அதிக கூட்டம் இருக்கும்.',
    },
    featured: false,
  },
  {
    id: 'theni-market',
    name: { en: 'Theni Market', ta: 'தேனி சந்தை' },
    category: 'historic',
    location: { en: 'Theni town centre', ta: 'தேனி நகர மையம்' },
    coords: { lat: 10.0104, lng: 77.4768 },
    image: 'https://picsum.photos/seed/theni-market-main/900/650',
    gallery: [
      'https://picsum.photos/seed/theni-market-1/900/650',
      'https://picsum.photos/seed/theni-market-2/900/650',
    ],
    description: {
      en: 'The everyday market at the heart of Theni town — fresh produce, flowers and local goods in a lively, walkable stretch.',
      ta: 'தேனி நகரின் இதயத்தில் அமைந்த அன்றாட சந்தை — புதிய காய்கறிகள், பூக்கள் மற்றும் உள்ளூர் பொருட்கள்.',
    },
    history: {
      en: 'The market has served as Theni\'s commercial core as the town grew around agricultural trade in the surrounding plains.',
      ta: 'சுற்றியுள்ள சமவெளி விவசாய வர்த்தகத்தை மையமாகக் கொண்டு தேனி நகரம் வளர்ந்த போது, இச்சந்தை அதன் மையமாக விளங்கியது.',
    },
    howToReach: {
      en: 'Central and walkable from most parts of Theni town.',
      ta: 'தேனி நகரின் பெரும்பாலான பகுதிகளிலிருந்து நடந்தே அடையக்கூடிய தூரம்.',
    },
    expense: { en: 'Free to browse', ta: 'சுற்றிப் பார்ப்பது இலவசம்' },
    bestTime: { en: 'Early morning or early evening', ta: 'அதிகாலை அல்லது மாலை நேரம்' },
    importantInfo: {
      en: 'Narrow lanes get crowded — keep an eye on belongings.',
      ta: 'குறுகிய பாதைகளில் கூட்டம் அதிகமாக இருக்கும்; பொருட்களை கவனமாக வைத்திருங்கள்.',
    },
    featured: false,
  },
];

export const getPlaceById = (id) => places.find((p) => p.id === id);
export const getFeaturedPlaces = () => places.filter((p) => p.featured);
export const getPlacesByCategory = (categoryId) =>
  categoryId === 'all' ? places : places.filter((p) => p.category === categoryId);
