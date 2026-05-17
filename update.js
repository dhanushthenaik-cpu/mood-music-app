const fs = require('fs');
const sidebarPath = 'frontend/src/components/Sidebar.js';
let sidebar = fs.readFileSync(sidebarPath, 'utf8');
sidebar = sidebar.replace(/const LANGUAGES = \[([\s\S]*?)\];/, 'const LANGUAGES = [\n  { id: "all", label: "All" },\n  { id: "english", label: "English" },\n  { id: "hindi", label: "Hindi" },\n  { id: "kannada", label: "Kannada" },\n  { id: "telugu", label: "Telugu" },\n  { id: "tamil", label: "Tamil" }\n];');
fs.writeFileSync(sidebarPath, sidebar);
const newS =   { id:"101", name:"Singara Siriye", artist:"Vijay Prakash", mood:"happy", language:"kannada", youtubeLink:"https://www.youtube.com/watch?v=0hDkH0s_6mI", thumbnail:"https://img.youtube.com/vi/0hDkH0s_6mI/hqdefault.jpg" },
  { id:"102", name:"Neenadena", artist:"Sonu Nigam", mood:"sad", language:"kannada", youtubeLink:"https://www.youtube.com/watch?v=x9q8dD1yQ5M", thumbnail:"https://img.youtube.com/vi/x9q8dD1yQ5M/hqdefault.jpg" },
  { id:"103", name:"Karabu", artist:"Chandan Shetty", mood:"party", language:"kannada", youtubeLink:"https://www.youtube.com/watch?v=6rM8D9vTIfs", thumbnail:"https://img.youtube.com/vi/6rM8D9vTIfs/hqdefault.jpg" },
  { id:"201", name:"Ramuloo Ramulaa", artist:"Anurag Kulkarni", mood:"party", language:"telugu", youtubeLink:"https://www.youtube.com/watch?v=8mGf0tDITuY", thumbnail:"https://img.youtube.com/vi/8mGf0tDITuY/hqdefault.jpg" },
  { id:"202", name:"Butta Bomma", artist:"Armaan Malik", mood:"happy", language:"telugu", youtubeLink:"https://www.youtube.com/watch?v=2mDCVzru61w", thumbnail:"https://img.youtube.com/vi/2mDCVzru61w/hqdefault.jpg" },
  { id:"203", name:"Adiga Adiga", artist:"Sid Sriram", mood:"sad", language:"telugu", youtubeLink:"https://www.youtube.com/watch?v=1bExOq-O34A", thumbnail:"https://img.youtube.com/vi/1bExOq-O34A/hqdefault.jpg" },
  { id:"301", name:"Rowdy Baby", artist:"Dhanush", mood:"party", language:"tamil", youtubeLink:"https://www.youtube.com/watch?v=x6Q7c9LSKq4", thumbnail:"https://img.youtube.com/vi/x6Q7c9LSKq4/hqdefault.jpg" },
  { id:"302", name:"Kolaveri Di", artist:"Dhanush", mood:"sad", language:"tamil", youtubeLink:"https://www.youtube.com/watch?v=YR12Z8f1Dh8", thumbnail:"https://img.youtube.com/vi/YR12Z8f1Dh8/hqdefault.jpg" },
  { id:"303", name:"Vaathi Coming", artist:"Anirudh", mood:"party", language:"tamil", youtubeLink:"https://www.youtube.com/watch?v=fRd_3vJWzO8", thumbnail:"https://img.youtube.com/vi/fRd_3vJWzO8/hqdefault.jpg" }
];
;
const mp = 'frontend/src/mockData.js';
fs.writeFileSync(mp, fs.readFileSync(mp, 'utf8').replace(/\];\s*export default ALL_SONGS;/m, newS + '\nexport default ALL_SONGS;'));
const bp = 'backend/data/songs.js';
fs.writeFileSync(bp, fs.readFileSync(bp, 'utf8').replace(/\];\s*module\.exports = songs;/m, newS + '\nmodule.exports = songs;'));
console.log("Success");
