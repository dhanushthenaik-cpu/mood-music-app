// All 32 songs — used as fallback when no backend is connected
const ALL_SONGS = [
  // ── HAPPY · ENGLISH ───────────────────────────────────────
  { id:"1",  name:"Happy",                   artist:"Pharrell Williams",    mood:"happy",  language:"english", youtubeLink:"https://www.youtube.com/watch?v=ZbZSe6N_BXs", thumbnail:"https://img.youtube.com/vi/ZbZSe6N_BXs/hqdefault.jpg" },
  { id:"2",  name:"Can't Stop the Feeling",  artist:"Justin Timberlake",   mood:"happy",  language:"english", youtubeLink:"https://www.youtube.com/watch?v=ru0K8uYEZWw", thumbnail:"https://img.youtube.com/vi/ru0K8uYEZWw/hqdefault.jpg" },
  { id:"3",  name:"Uptown Funk",             artist:"Bruno Mars",           mood:"happy",  language:"english", youtubeLink:"https://www.youtube.com/watch?v=OPf0YbXqDm0", thumbnail:"https://img.youtube.com/vi/OPf0YbXqDm0/hqdefault.jpg" },
  { id:"4",  name:"Good as Hell",            artist:"Lizzo",                mood:"happy",  language:"english", youtubeLink:"https://www.youtube.com/watch?v=SmbmeOgWsqE", thumbnail:"https://img.youtube.com/vi/SmbmeOgWsqE/hqdefault.jpg" },
  // ── HAPPY · HINDI ─────────────────────────────────────────
  { id:"5",  name:"Badtameez Dil",           artist:"Pritam",               mood:"happy",  language:"hindi",   youtubeLink:"https://www.youtube.com/watch?v=II2EO3Nw4m0", thumbnail:"https://img.youtube.com/vi/II2EO3Nw4m0/hqdefault.jpg" },
  { id:"6",  name:"Gallan Goodiyaan",        artist:"Shankar-Ehsaan-Loy",   mood:"happy",  language:"hindi",   youtubeLink:"https://www.youtube.com/watch?v=tEi_MHfpGJc", thumbnail:"https://img.youtube.com/vi/tEi_MHfpGJc/hqdefault.jpg" },
  { id:"7",  name:"London Thumakda",         artist:"Labh Janjua",          mood:"happy",  language:"hindi",   youtubeLink:"https://www.youtube.com/watch?v=udra3Mfw2oo", thumbnail:"https://img.youtube.com/vi/udra3Mfw2oo/hqdefault.jpg" },
  { id:"8",  name:"Kala Chashma",            artist:"Amar Arshi",           mood:"happy",  language:"hindi",   youtubeLink:"https://www.youtube.com/watch?v=nI6nfj3LL9o", thumbnail:"https://img.youtube.com/vi/nI6nfj3LL9o/hqdefault.jpg" },
  // ── SAD · ENGLISH ─────────────────────────────────────────
  { id:"9",  name:"Someone Like You",        artist:"Adele",                mood:"sad",    language:"english", youtubeLink:"https://www.youtube.com/watch?v=hLQl3WQQoQ0", thumbnail:"https://img.youtube.com/vi/hLQl3WQQoQ0/hqdefault.jpg" },
  { id:"10", name:"The Night We Met",        artist:"Lord Huron",           mood:"sad",    language:"english", youtubeLink:"https://www.youtube.com/watch?v=KtlgYxa6BMU", thumbnail:"https://img.youtube.com/vi/KtlgYxa6BMU/hqdefault.jpg" },
  { id:"11", name:"Fix You",                 artist:"Coldplay",             mood:"sad",    language:"english", youtubeLink:"https://www.youtube.com/watch?v=k4V3Mo61fJM", thumbnail:"https://img.youtube.com/vi/k4V3Mo61fJM/hqdefault.jpg" },
  { id:"12", name:"Let Her Go",              artist:"Passenger",            mood:"sad",    language:"english", youtubeLink:"https://www.youtube.com/watch?v=RBumgq5yVrA", thumbnail:"https://img.youtube.com/vi/RBumgq5yVrA/hqdefault.jpg" },
  // ── SAD · HINDI ───────────────────────────────────────────
  { id:"13", name:"Channa Mereya",           artist:"Arijit Singh",         mood:"sad",    language:"hindi",   youtubeLink:"https://www.youtube.com/watch?v=284Ov7ysmfA", thumbnail:"https://img.youtube.com/vi/284Ov7ysmfA/hqdefault.jpg" },
  { id:"14", name:"Tujhe Kitna Chahne Lage", artist:"Arijit Singh",         mood:"sad",    language:"hindi",   youtubeLink:"https://www.youtube.com/watch?v=V7dF6HNXOVA", thumbnail:"https://img.youtube.com/vi/V7dF6HNXOVA/hqdefault.jpg" },
  { id:"15", name:"Kal Ho Naa Ho",           artist:"Sonu Nigam",           mood:"sad",    language:"hindi",   youtubeLink:"https://www.youtube.com/watch?v=9qNqwVSAgaE", thumbnail:"https://img.youtube.com/vi/9qNqwVSAgaE/hqdefault.jpg" },
  { id:"16", name:"Phir Le Aya Dil",         artist:"Arijit Singh",         mood:"sad",    language:"hindi",   youtubeLink:"https://www.youtube.com/watch?v=7wSF4lPn92E", thumbnail:"https://img.youtube.com/vi/7wSF4lPn92E/hqdefault.jpg" },
  // ── FOCUS · ENGLISH ───────────────────────────────────────
  { id:"17", name:"Experience",              artist:"Ludovico Einaudi",     mood:"focus",  language:"english", youtubeLink:"https://www.youtube.com/watch?v=hN_q-_nGv4U", thumbnail:"https://img.youtube.com/vi/hN_q-_nGv4U/hqdefault.jpg" },
  { id:"18", name:"Weightless",              artist:"Marconi Union",        mood:"focus",  language:"english", youtubeLink:"https://www.youtube.com/watch?v=UfcAVejslrU", thumbnail:"https://img.youtube.com/vi/UfcAVejslrU/hqdefault.jpg" },
  { id:"19", name:"Clair de Lune",           artist:"Debussy",              mood:"focus",  language:"english", youtubeLink:"https://www.youtube.com/watch?v=CvFH_6DNRCY", thumbnail:"https://img.youtube.com/vi/CvFH_6DNRCY/hqdefault.jpg" },
  { id:"20", name:"Comptine d'un autre été", artist:"Yann Tiersen",         mood:"focus",  language:"english", youtubeLink:"https://www.youtube.com/watch?v=vlKiuNqQTBY", thumbnail:"https://img.youtube.com/vi/vlKiuNqQTBY/hqdefault.jpg" },
  // ── FOCUS · HINDI ─────────────────────────────────────────
  { id:"21", name:"Kun Faya Kun",            artist:"AR Rahman",            mood:"focus",  language:"hindi",   youtubeLink:"https://www.youtube.com/watch?v=T94PHkuydcw", thumbnail:"https://img.youtube.com/vi/T94PHkuydcw/hqdefault.jpg" },
  { id:"22", name:"Ae Dil Hai Mushkil",      artist:"Arijit Singh",         mood:"focus",  language:"hindi",   youtubeLink:"https://www.youtube.com/watch?v=6FURuLYrR_Q", thumbnail:"https://img.youtube.com/vi/6FURuLYrR_Q/hqdefault.jpg" },
  { id:"23", name:"Tum Hi Ho",               artist:"Arijit Singh",         mood:"focus",  language:"hindi",   youtubeLink:"https://www.youtube.com/watch?v=IJq0yyWug1k", thumbnail:"https://img.youtube.com/vi/IJq0yyWug1k/hqdefault.jpg" },
  { id:"24", name:"Raabta",                  artist:"Arijit Singh",         mood:"focus",  language:"hindi",   youtubeLink:"https://www.youtube.com/watch?v=yPBq7bFP8Mk", thumbnail:"https://img.youtube.com/vi/yPBq7bFP8Mk/hqdefault.jpg" },
  // ── PARTY · ENGLISH ───────────────────────────────────────
  { id:"25", name:"Blinding Lights",         artist:"The Weeknd",           mood:"party",  language:"english", youtubeLink:"https://www.youtube.com/watch?v=4NRXx6U8ABQ", thumbnail:"https://img.youtube.com/vi/4NRXx6U8ABQ/hqdefault.jpg" },
  { id:"26", name:"Levitating",              artist:"Dua Lipa",             mood:"party",  language:"english", youtubeLink:"https://www.youtube.com/watch?v=TUVcZfQe-Kw", thumbnail:"https://img.youtube.com/vi/TUVcZfQe-Kw/hqdefault.jpg" },
  { id:"27", name:"As It Was",               artist:"Harry Styles",         mood:"party",  language:"english", youtubeLink:"https://www.youtube.com/watch?v=H5v3kku4y6Q", thumbnail:"https://img.youtube.com/vi/H5v3kku4y6Q/hqdefault.jpg" },
  { id:"28", name:"Dance Monkey",            artist:"Tones and I",          mood:"party",  language:"english", youtubeLink:"https://www.youtube.com/watch?v=q0hyYWKXF0Q", thumbnail:"https://img.youtube.com/vi/q0hyYWKXF0Q/hqdefault.jpg" },
  // ── PARTY · HINDI ─────────────────────────────────────────
  { id:"29", name:"Balam Pichkari",          artist:"Vishal-Shekhar",       mood:"party",  language:"hindi",   youtubeLink:"https://www.youtube.com/watch?v=qFCGMBp15dE", thumbnail:"https://img.youtube.com/vi/qFCGMBp15dE/hqdefault.jpg" },
  { id:"30", name:"Desi Girl",               artist:"Shankar-Ehsaan-Loy",   mood:"party",  language:"hindi",   youtubeLink:"https://www.youtube.com/watch?v=BPOQMOqb5fo", thumbnail:"https://img.youtube.com/vi/BPOQMOqb5fo/hqdefault.jpg" },
  { id:"31", name:"Chaiyya Chaiyya",         artist:"AR Rahman",            mood:"party",  language:"hindi",   youtubeLink:"https://www.youtube.com/watch?v=x2mGc5P30V8", thumbnail:"https://img.youtube.com/vi/x2mGc5P30V8/hqdefault.jpg" },
  { id:"32", name:"Naach Meri Jaan",         artist:"Neha Kakkar",          mood:"party",  language:"hindi",   youtubeLink:"https://www.youtube.com/watch?v=8xt2EtM9Ebs", thumbnail:"https://img.youtube.com/vi/8xt2EtM9Ebs/hqdefault.jpg" },
  { id:"101", name:"Singara Siriye", artist:"Vijay Prakash", mood:"happy", language:"kannada", youtubeLink:"https://www.youtube.com/watch?v=0hDkH0s_6mI", thumbnail:"https://img.youtube.com/vi/0hDkH0s_6mI/hqdefault.jpg" },
  { id:"102", name:"Neenadena", artist:"Sonu Nigam", mood:"sad", language:"kannada", youtubeLink:"https://www.youtube.com/watch?v=x9q8dD1yQ5M", thumbnail:"https://img.youtube.com/vi/x9q8dD1yQ5M/hqdefault.jpg" },
  { id:"103", name:"Karabu", artist:"Chandan Shetty", mood:"party", language:"kannada", youtubeLink:"https://www.youtube.com/watch?v=6rM8D9vTIfs", thumbnail:"https://img.youtube.com/vi/6rM8D9vTIfs/hqdefault.jpg" },
  { id:"201", name:"Ramuloo Ramulaa", artist:"Anurag Kulkarni", mood:"party", language:"telugu", youtubeLink:"https://www.youtube.com/watch?v=8mGf0tDITuY", thumbnail:"https://img.youtube.com/vi/8mGf0tDITuY/hqdefault.jpg" },
  { id:"202", name:"Butta Bomma", artist:"Armaan Malik", mood:"happy", language:"telugu", youtubeLink:"https://www.youtube.com/watch?v=2mDCVzru61w", thumbnail:"https://img.youtube.com/vi/2mDCVzru61w/hqdefault.jpg" },
  { id:"203", name:"Adiga Adiga", artist:"Sid Sriram", mood:"sad", language:"telugu", youtubeLink:"https://www.youtube.com/watch?v=1bExOq-O34A", thumbnail:"https://img.youtube.com/vi/1bExOq-O34A/hqdefault.jpg" },
  { id:"301", name:"Rowdy Baby", artist:"Dhanush", mood:"party", language:"tamil", youtubeLink:"https://www.youtube.com/watch?v=x6Q7c9LSKq4", thumbnail:"https://img.youtube.com/vi/x6Q7c9LSKq4/hqdefault.jpg" },
  { id:"302", name:"Kolaveri Di", artist:"Dhanush", mood:"sad", language:"tamil", youtubeLink:"https://www.youtube.com/watch?v=YR12Z8f1Dh8", thumbnail:"https://img.youtube.com/vi/YR12Z8f1Dh8/hqdefault.jpg" },
  { id:"303", name:"Vaathi Coming", artist:"Anirudh", mood:"party", language:"tamil", youtubeLink:"https://www.youtube.com/watch?v=fRd_3vJWzO8", thumbnail:"https://img.youtube.com/vi/fRd_3vJWzO8/hqdefault.jpg" }
];
export default ALL_SONGS;
