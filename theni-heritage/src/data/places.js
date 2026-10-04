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
    name: { en: 'Megamalai', ta: 'மேகமலை' },
    category: 'historic',
    location: { en: 'Meghamalai Hills, Theni district', ta: 'மேகமலை மலைப்பகுதி, தேனி மாவட்டம்' },
    coords: { lat: 9.679206, lng: 77.385055 },
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/26/Megamalai_-_3.jpg',
    description: {
      en: 'A historic Western Ghats hill region known for its tea estates, forest landscapes and High Wavys heritage.',
      ta: 'தேயிலைத் தோட்டங்கள், வனப்பகுதிகள் மற்றும் ஹை வேவிஸ் மரபுக்குப் பெயர் பெற்ற மேற்குத் தொடர்ச்சி மலைப்பகுதி.',
    },
    history: {
      en: 'The High Wavys hill estates developed through plantation activity during the 20th century. Their history sits alongside older forest routes and the protected landscapes of the Western Ghats.',
      ta: '20ஆம் நூற்றாண்டில் தோட்டத் தொழிலின் வளர்ச்சியுடன் ஹை வேவிஸ் மலைத் தோட்டங்கள் உருவாயின. அவற்றின் வரலாறு மேற்குத் தொடர்ச்சி மலையின் பழமையான வனப்பாதைகள் மற்றும் பாதுகாக்கப்பட்ட இயற்கையுடன் இணைந்துள்ளது.',
    },
    howToReach: {
      en: 'Reach the hills by road from Theni via Chinnamanur. Check current road conditions and forest access rules before travelling.',
      ta: 'சின்னமனூர் வழியாக தேனியிலிருந்து சாலை மார்க்கமாக மலைப்பகுதியை அடையலாம். பயணத்திற்கு முன் சாலை நிலை மற்றும் வனத்துறை அனுமதி விதிகளைச் சரிபார்க்கவும்.',
    },
    expense: { en: 'Travel costs vary; check any current permit requirements', ta: 'பயணச் செலவு மாறுபடும்; தற்போதைய அனுமதி தேவைகளைச் சரிபார்க்கவும்' },
    bestTime: { en: 'November to February; check weather and road access', ta: 'நவம்பர் முதல் பிப்ரவரி வரை; வானிலை மற்றும் சாலை அணுகலைச் சரிபார்க்கவும்' },
    importantInfo: {
      en: 'The hill landscape preserves the region’s plantation and forest heritage. Mobile coverage and services are limited in places.',
      ta: 'இம்மலைப்பகுதி தோட்ட மற்றும் வன மரபுகளைப் பாதுகாக்கிறது. சில இடங்களில் மொபைல் இணைப்பும் சேவைகளும் குறைவாக இருக்கும்.',
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
    name: { en: 'Kuchanur Saneeswara Temple', ta: 'குச்சனூர் சனீஸ்வரர் கோயில்' },
    category: 'historic',
    location: { en: 'Kuchanur, Theni district', ta: 'குச்சனூர், தேனி மாவட்டம்' },
    coords: { lat: 9.8793873, lng: 77.3772199 },
    image: 'https://2.bp.blogspot.com/-2GNwLmYvUC0/U1IQFmHbZqI/AAAAAAAACCI/O3AmaHsdIq8/s1600/kuchanur_Lord_Saneeswaran.jpg',
    description: {
      en: 'A historic temple in Kuchanur dedicated to Saneeswara, the Hindu deity associated with Saturn.',
      ta: 'சனீஸ்வரருக்கு அர்ப்பணிக்கப்பட்ட குச்சனூரின் வரலாற்றுச் சிறப்புமிக்க கோயில்.',
    },
    history: {
      en: 'Local tradition venerates the Saneeswara image here as self-manifested. The shrine has long drawn pilgrims seeking worship connected with Saturn.',
      ta: 'இங்குள்ள சனீஸ்வரர் திருமேனி தானாகத் தோன்றியதாக உள்ளூர் மரபு கூறுகிறது. சனி வழிபாட்டுடன் தொடர்புடைய இத்தலம் நீண்டகாலமாகப் பக்தர்களை ஈர்க்கிறது.',
    },
    howToReach: {
      en: 'Reach Kuchanur by road from Chinnamanur or Uthamapalayam; local buses and taxis serve the area.',
      ta: 'சின்னமனூர் அல்லது உத்தமபாளையத்திலிருந்து சாலை வழியாக குச்சனூரை அடையலாம்; உள்ளூர் பேருந்துகள் மற்றும் டாக்சிகள் கிடைக்கும்.',
    },
    expense: { en: 'No entry fee information verified; check locally', ta: 'நுழைவுக் கட்டணம் உறுதிப்படுத்தப்படவில்லை; உள்ளூரில் விசாரிக்கவும்' },
    bestTime: { en: 'Year-round; Saturdays are especially busy', ta: 'ஆண்டு முழுவதும்; சனிக்கிழமைகளில் கூட்டம் அதிகம்' },
    importantInfo: {
      en: 'The temple is an important regional shrine for Saneeswara worship; Saturdays can be crowded.',
      ta: 'சனீஸ்வரர் வழிபாட்டிற்கான முக்கியமான வட்டாரத் தலமாகும்; சனிக்கிழமைகளில் கூட்டம் அதிகமாக இருக்கலாம்.',
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
    id: 'colonel-john-pennycuick-memorial',
    name: { en: 'Colonel John Pennycuick Memorial', ta: 'கர்னல் ஜான் பென்னிகுயிக் நினைவிடம்' },
    category: 'historic',
    location: { en: 'Lower Camp, Uthamapalayam, Theni district', ta: 'லோயர் கேம்ப், உத்தமபாளையம், தேனி மாவட்டம்' },
    coords: { lat: 9.6262938, lng: 77.1969614 },
    image: 'https://cdn.s3waas.gov.in/s39a96876e2f8f3dc4f3cf45f02c61c0c1/uploads/bfi_thumb/2018062019-olwc8xnt0ym6jvxqz6imtei8dqtfmk32wu2igk4clw.jpg',
    description: {
      en: 'A memorial at Lower Camp honoring the engineer behind the Mullaperiyar Dam.',
      ta: 'முல்லைப்பெரியாறு அணையின் பொறியாளரைப் போற்றும் லோயர் கேம்ப் நினைவிடம்.',
    },
    history: {
      en: 'Colonel John Pennycuick led the engineering work on the Mullaperiyar Dam, built between 1887 and 1895. This memorial commemorates his role in a project that transformed water management across the region.',
      ta: '1887 முதல் 1895 வரை கட்டப்பட்ட முல்லைப்பெரியாறு அணையின் பொறியியல் பணிகளை கர்னல் ஜான் பென்னிகுயிக் வழிநடத்தினார். அந்த அணை இப்பகுதியின் நீர் மேலாண்மையில் ஏற்படுத்திய மாற்றத்தையும் அவரது பங்களிப்பையும் இந்நினைவிடம் போற்றுகிறது.',
    },
    howToReach: {
      en: 'Located at Lower Camp near Uthamapalayam; reachable by road from Theni and Cumbum.',
      ta: 'உத்தமபாளையம் அருகிலுள்ள லோயர் கேம்பில் அமைந்துள்ளது; தேனி மற்றும் கம்பத்திலிருந்து சாலை வழியாகச் செல்லலாம்.',
    },
    expense: { en: 'Check current visitor information locally', ta: 'தற்போதைய பார்வையாளர் தகவலை உள்ளூரில் சரிபார்க்கவும்' },
    bestTime: { en: 'October to February for milder weather', ta: 'மிதமான வானிலைக்கு அக்டோபர் முதல் பிப்ரவரி வரை' },
    importantInfo: {
      en: 'The memorial marks an important chapter in the region’s irrigation and engineering history.',
      ta: 'இந்நினைவிடம் இப்பகுதியின் நீர்ப்பாசன மற்றும் பொறியியல் வரலாற்றின் முக்கிய அத்தியாயத்தை நினைவூட்டுகிறது.',
    },
    featured: false,
  },
  {
    id: 'mangala-devi-kannagi-temple',
    name: { en: 'Mangala Devi Kannagi Temple', ta: 'மங்கலதேவி கண்ணகி கோயில்' },
    category: 'historic',
    location: { en: 'Periyar Tiger Reserve, near the Theni–Idukki border', ta: 'தேனி–இடுக்கி எல்லை அருகில், பெரியாறு புலிகள் காப்பகம்' },
    coords: { lat: 9.598056, lng: 77.221944 },
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Kannaki_temple_-_panoramio.jpg',
    description: {
      en: 'An ancient hilltop shrine dedicated to Kannagi, the heroine of the Tamil epic Silappatikaram.',
      ta: 'சிலப்பதிகாரக் காப்பியத்தின் நாயகி கண்ணகிக்கு அர்ப்பணிக்கப்பட்ட பழமையான மலைக்கோயில்.',
    },
    history: {
      en: 'Local tradition links the shrine to Chera ruler Senguttuvan and the early historic period. It is associated with Kannagi, whose story is central to the Tamil epic Silappatikaram.',
      ta: 'உள்ளூர் மரபு இக்கோயிலை சேர மன்னன் செங்குட்டுவனுடனும் தொடக்க வரலாற்றுக் காலத்துடனும் தொடர்புபடுத்துகிறது. தமிழ்க் காப்பியமான சிலப்பதிகாரத்தின் மையப் பாத்திரமான கண்ணகியுடன் இத்தலம் இணைக்கப்படுகிறது.',
    },
    howToReach: {
      en: 'The hill shrine is approached from the Pazhiyankudi side through forest land. Entry is regulated; confirm official access and permits before travel.',
      ta: 'வனப்பகுதி வழியாக பழியங்குடி பக்கத்திலிருந்து மலைக்கோயிலை அணுகலாம். நுழைவு கட்டுப்படுத்தப்பட்டுள்ளது; பயணத்திற்கு முன் அதிகாரப்பூர்வ அனுமதியை உறுதிப்படுத்தவும்.',
    },
    expense: { en: 'Check current forest access and transport arrangements', ta: 'தற்போதைய வன அனுமதி மற்றும் போக்குவரத்து ஏற்பாடுகளைச் சரிபார்க்கவும்' },
    bestTime: { en: 'Chithirai Pournami in April or May, when special access is arranged', ta: 'சிறப்பு அனுமதி ஏற்பாடு செய்யப்படும் ஏப்ரல் அல்லது மே மாத சித்திரை பௌர்ணமி' },
    importantInfo: {
      en: 'The temple lies inside Periyar Tiger Reserve and is not freely accessible year-round; follow district and forest department instructions.',
      ta: 'இக்கோயில் பெரியாறு புலிகள் காப்பகத்திற்குள் அமைந்துள்ளது; ஆண்டு முழுவதும் சுதந்திரமாகச் செல்ல முடியாது. மாவட்ட மற்றும் வனத்துறை அறிவுறுத்தல்களைப் பின்பற்றவும்.',
    },
    featured: false,
  },
  {
    id: 'veerapandi-gowmariamman-temple',
    name: { en: 'Veerapandi Gowmariamman Temple', ta: 'வீரபாண்டி கௌமாரியம்மன் கோயில்' },
    category: 'historic',
    location: { en: 'Veerapandi village, Theni district', ta: 'வீரபாண்டி கிராமம், தேனி மாவட்டம்' },
    coords: { lat: 9.9648004, lng: 77.4356843 },
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjw9KstRg7ZhiEDP597zfO-5VU7TqZbW8YtU88e66JMOf6Xlh-oe6vZcz9nsP0aD96EabC1udp8InWbvykumxOyVWkX0FxSwFts9nXyBgjXD1e8RyVjLCWfQO8suKGmvm8SJin2TBTsBRs/s1600/G_L5_489.jpg',
    description: {
      en: 'A long-standing village shrine known for its annual Chithirai festival and strong local traditions.',
      ta: 'ஆண்டுதோறும் நடைபெறும் சித்திரைத் திருவிழாவுக்கும் உள்ளூர் மரபுகளுக்கும் பெயர் பெற்ற பழமையான கிராமக் கோயில்.',
    },
    history: {
      en: 'The temple has served as a centre of worship and community life in Veerapandi for generations. Its annual Chithirai festival remains one of the district’s best-known religious gatherings.',
      ta: 'பல தலைமுறைகளாக வீரபாண்டியின் வழிபாட்டு மற்றும் சமூக வாழ்வின் மையமாக இக்கோயில் விளங்குகிறது. ஆண்டுதோறும் நடைபெறும் சித்திரைத் திருவிழா மாவட்டத்தின் புகழ்பெற்ற சமயக் கூடல்களில் ஒன்றாகும்.',
    },
    howToReach: {
      en: 'Located in Veerapandi village and reachable by local road transport from Theni town.',
      ta: 'வீரபாண்டி கிராமத்தில் அமைந்துள்ளது; தேனி நகரிலிருந்து உள்ளூர் சாலைப் போக்குவரத்தில் செல்லலாம்.',
    },
    expense: { en: 'Check current temple visitor information locally', ta: 'கோயில் பார்வையாளர் தகவலை உள்ளூரில் சரிபார்க்கவும்' },
    bestTime: { en: 'Year-round; the annual Chithirai festival in April or May is especially busy', ta: 'ஆண்டு முழுவதும்; ஏப்ரல் அல்லது மே மாத சித்திரைத் திருவிழாவில் கூட்டம் அதிகம்' },
    importantInfo: {
      en: 'The temple is a major centre for local worship and the annual Veerapandi festival; expect large crowds during festival days.',
      ta: 'உள்ளூர் வழிபாடு மற்றும் ஆண்டுதோறும் நடைபெறும் வீரபாண்டித் திருவிழாவின் முக்கிய மையமாகும்; திருவிழா நாட்களில் பெரும் கூட்டம் இருக்கும்.',
    },
    featured: false,
  },
];

export const getPlaceById = (id) => places.find((p) => p.id === id);
export const getFeaturedPlaces = () => places.filter((p) => p.featured);
export const getPlacesByCategory = (categoryId) =>
  categoryId === 'all' ? places : places.filter((p) => p.category === categoryId);
