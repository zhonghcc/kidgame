/* 白板口袋 · 课程数据
   加一课：在下面数组里追加一个对象，词卡例句、句子组、思考题里出现的英文句子
   需要用 tools/make-audio.py 生成到 audio/<哈希>.mp3（哈希算法见 index.html 的 hashOf）。
   单词发音走有道词典，只有句子和短语才用随页面打包的音频。 */

const K='#2C2C2A',D='#444441',GR='#888780',GL='#D3D1C7',R='#E24B4A',RD='#A32D2D',RL='#FCEBEB',B='#378ADD',BD='#185FA5',BL='#E6F1FB',BM='#B5D4F4',Y='#EF9F27',YD='#BA7517',YL='#FAEEDA',YM='#FAC775',G='#639922',GD='#3B6D11',GLL='#EAF3DE',GM='#97C459',SK='#F5C4B3',BR='#854F0B',TEAL='#1D9E75';
const wh=(x,y,r=7)=>`<circle cx="${x}" cy="${y}" r="${r}" fill="${K}"/><circle cx="${x}" cy="${y}" r="${(r*.4).toFixed(1)}" fill="${GL}"/>`;
const rail=(y=86)=>`<rect x="4" y="${y}" width="92" height="3" rx="1.5" fill="${GR}"/>`;
const bigWheel=(cx,cy,r,rim=K,hub=R)=>{let s='';for(let i=0;i<8;i++){const a=i*Math.PI/4;s+='<line x1="'+cx+'" y1="'+cy+'" x2="'+(cx+r*.78*Math.cos(a)).toFixed(1)+'" y2="'+(cy+r*.78*Math.sin(a)).toFixed(1)+'" stroke="'+rim+'" stroke-width="'+(r*.13).toFixed(1)+'"/>'}return '<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="'+rim+'"/><circle cx="'+cx+'" cy="'+cy+'" r="'+(r*.8).toFixed(1)+'" fill="'+hub+'"/>'+s+'<circle cx="'+cx+'" cy="'+cy+'" r="'+(r*.25).toFixed(1)+'" fill="'+rim+'"/><circle cx="'+cx+'" cy="'+cy+'" r="'+(r*.1).toFixed(1)+'" fill="'+YM+'"/>'};
const radial=(n,r1,r2,stroke,w,cap='round')=>{let s='';for(let i=0;i<n;i++){const a=i*2*Math.PI/n;s+=`<line x1="${(50+r1*Math.cos(a)).toFixed(1)}" y1="${(50+r1*Math.sin(a)).toFixed(1)}" x2="${(50+r2*Math.cos(a)).toFixed(1)}" y2="${(50+r2*Math.sin(a)).toFixed(1)}" stroke="${stroke}" stroke-width="${w}" stroke-linecap="${cap}"/>`}return s};

/* 词卡小图，统一 100x100 的圆角贴纸底 */
const sticker=(bg,body)=>`<rect x="4" y="4" width="92" height="92" rx="20" fill="${bg}"/>${body}`;
const ART={
/* —— 第 01 课：火车的演变（从小火车英语搬过来） —— */
steamtrain:`<circle cx="22" cy="23" r="7" fill="${GL}" class="puff"/><circle cx="33" cy="14" r="9" fill="${GL}"/><circle cx="47" cy="10" r="7" fill="${GL}"/><rect x="18" y="28" width="8" height="15" fill="${K}"/><rect x="8" y="42" width="34" height="22" rx="8" fill="${D}"/><rect x="38" y="32" width="20" height="34" rx="3" fill="${D}"/><rect x="42" y="37" width="12" height="10" rx="2" fill="${YM}"/><rect x="6" y="62" width="54" height="5" fill="${R}"/><rect x="62" y="40" width="32" height="26" rx="4" fill="${R}"/><rect x="66" y="45" width="10" height="9" rx="1.5" fill="${RL}"/><rect x="80" y="45" width="10" height="9" rx="1.5" fill="${RL}"/>${wh(17,74,7)}${wh(33,74,7)}${wh(50,74,6)}${wh(70,74,6)}${wh(86,74,6)}${rail(82)}`,
chimney:`<circle cx="44" cy="17" r="8" fill="${GL}" class="puff"/><circle cx="58" cy="10" r="7" fill="#fff" stroke="${GL}" stroke-width="2"/><rect x="36" y="28" width="18" height="40" fill="${K}"/><rect x="30" y="22" width="30" height="9" rx="3" fill="${K}"/><rect x="6" y="64" width="88" height="26" rx="13" fill="${D}"/><path d="M30 64 V90 M70 64 V90" stroke="${K}" stroke-width="2"/><rect x="24" y="16" width="42" height="56" rx="7" fill="none" stroke="${Y}" stroke-width="3" stroke-dasharray="5 4"/>`,
boiler:`<rect x="40" y="18" width="14" height="14" rx="6" fill="${D}"/><rect x="8" y="28" width="80" height="42" rx="21" fill="${D}"/><ellipse cx="14" cy="49" rx="8" ry="21" fill="#5F5E5A"/><path d="M36 28 V70 M62 28 V70" stroke="${YM}" stroke-width="3"/><circle cx="24" cy="36" r="1.8" fill="${GL}"/><circle cx="24" cy="62" r="1.8" fill="${GL}"/><circle cx="76" cy="36" r="1.8" fill="${GL}"/><circle cx="76" cy="62" r="1.8" fill="${GL}"/><rect x="58" y="72" width="34" height="16" rx="3" fill="${K}"/><path d="M62 88 Q66 76 72 82 Q76 72 82 82 Q86 76 88 88 Z" fill="${R}"/><path d="M68 88 Q71 81 75 84 Q78 79 82 88 Z" fill="${Y}"/>`,
drivercab:`<rect x="10" y="18" width="80" height="9" rx="3" fill="${K}"/><rect x="16" y="27" width="68" height="60" rx="4" fill="${R}"/><rect x="26" y="35" width="48" height="32" rx="4" fill="${YL}"/><path d="M38 67 Q38 59 50 59 Q62 59 62 67 Z" fill="${BD}"/><circle cx="50" cy="51" r="9" fill="${SK}"/><path d="M40 48 Q41 38 50 38 Q59 38 60 48 Z" fill="#0C447C"/><rect x="38" y="46" width="24" height="3" rx="1.5" fill="${K}"/><circle cx="46.5" cy="52" r="1.4" fill="${K}"/><circle cx="53.5" cy="52" r="1.4" fill="${K}"/><rect x="10" y="85" width="80" height="6" rx="2" fill="${K}"/>`,
drivingwheels:`${bigWheel(29,58,21)}${bigWheel(71,58,21)}<rect x="27" y="61" width="46" height="5" rx="2.5" fill="${GR}"/><circle cx="29" cy="63" r="3" fill="${YM}"/><circle cx="71" cy="63" r="3" fill="${YM}"/>${rail(80)}`,
tender:`<circle cx="20" cy="40" r="7" fill="${K}"/><circle cx="32" cy="36" r="8" fill="${K}"/><circle cx="46" cy="38" r="7" fill="${K}"/><circle cx="58" cy="35" r="8" fill="${K}"/><circle cx="71" cy="38" r="7" fill="${K}"/><circle cx="82" cy="40" r="6" fill="${K}"/><rect x="10" y="40" width="80" height="34" rx="4" fill="${D}"/><rect x="10" y="40" width="80" height="6" fill="#5F5E5A"/><text x="50" y="66" font-size="13" font-weight="700" fill="#fff" text-anchor="middle" font-family="Arial">COAL</text>${wh(28,80,7)}${wh(72,80,7)}${rail(87)}`,
steam:`<rect x="8" y="62" width="44" height="18" rx="9" fill="${D}"/><rect x="48" y="66" width="10" height="10" fill="${GR}"/><circle cx="66" cy="68" r="8" fill="#fff" stroke="${GL}" stroke-width="2"/><circle cx="74" cy="52" r="11" fill="#fff" stroke="${GL}" stroke-width="2"/><circle cx="66" cy="36" r="8" fill="#fff" stroke="${GL}" stroke-width="2"/><circle cx="82" cy="30" r="10" fill="#fff" stroke="${GL}" stroke-width="2" class="puff"/><path d="M60 24 q4 -6 0 -12 M88 50 q5 -5 0 -11" stroke="${GL}" stroke-width="2.5" fill="none" stroke-linecap="round"/>`,
smoke:`<circle cx="42" cy="44" r="10" fill="#B4B2A9"/><circle cx="54" cy="31" r="13" fill="${GL}"/><circle cx="70" cy="22" r="13" fill="#B4B2A9"/><circle cx="85" cy="14" r="9" fill="${GL}"/><rect x="30" y="58" width="16" height="26" fill="${K}"/><rect x="26" y="54" width="24" height="7" rx="2" fill="${K}"/><rect x="8" y="82" width="84" height="12" rx="4" fill="${R}"/>`,
invent:`${radial(8,38,46,Y,4)}<circle cx="50" cy="44" r="22" fill="${YM}"/><path d="M42 46 L46 40 L50 46 L54 40 L58 46" stroke="${YD}" stroke-width="2.5" fill="none" stroke-linejoin="round"/><path d="M44 58 V66 M56 58 V66" stroke="${YD}" stroke-width="2"/><rect x="40" y="64" width="20" height="8" rx="2" fill="${GR}"/><rect x="42" y="72" width="16" height="6" rx="2" fill="#5F5E5A"/><circle cx="43" cy="37" r="5" fill="#fff" fill-opacity=".7"/>`,
travel:`<path d="M18 30 Q50 4 82 30" stroke="${B}" stroke-width="3" stroke-dasharray="5 5" fill="none"/><circle cx="18" cy="32" r="6" fill="${R}"/><circle cx="82" cy="32" r="6" fill="${G}"/><rect x="40" y="44" width="20" height="11" rx="4" fill="none" stroke="${BR}" stroke-width="4"/><rect x="24" y="52" width="52" height="38" rx="6" fill="${Y}"/><path d="M38 52 V90 M62 52 V90" stroke="${YD}" stroke-width="4"/>`,
onfoot:`<g transform="translate(34 64) rotate(-12)"><ellipse cx="0" cy="0" rx="9" ry="15" fill="${BR}"/><circle cx="-5" cy="-20" r="3.4" fill="${BR}"/><circle cx="1" cy="-22" r="2.8" fill="${BR}"/><circle cx="6" cy="-20" r="2.4" fill="${BR}"/><circle cx="9" cy="-16" r="2" fill="${BR}"/></g><g transform="translate(64 36) rotate(12)"><ellipse cx="0" cy="0" rx="9" ry="15" fill="${BR}"/><circle cx="5" cy="-20" r="3.4" fill="${BR}"/><circle cx="-1" cy="-22" r="2.8" fill="${BR}"/><circle cx="-6" cy="-20" r="2.4" fill="${BR}"/><circle cx="-9" cy="-16" r="2" fill="${BR}"/></g>`,
horse:`<path d="M80 46 Q93 54 87 72" stroke="${K}" stroke-width="5" fill="none" stroke-linecap="round"/><rect x="36" y="58" width="6" height="30" fill="${BR}"/><rect x="45" y="58" width="6" height="30" fill="${BR}"/><rect x="66" y="58" width="6" height="30" fill="${BR}"/><rect x="75" y="58" width="6" height="30" fill="${BR}"/><ellipse cx="57" cy="52" rx="27" ry="14" fill="${BR}"/><path d="M33 50 L23 25 L36 21 L46 44 Z" fill="${BR}"/><path d="M24 25 L9 36 Q7 41 13 42 L29 34 Z" fill="${BR}"/><path d="M30 22 L33 13 L37 22 Z" fill="${BR}"/><path d="M37 21 Q43 30 46 44" stroke="${K}" stroke-width="4" fill="none" stroke-linecap="round"/><circle cx="24" cy="30" r="1.8" fill="${K}"/><path d="M34 86 H44 M43 86 H53 M64 86 H74 M73 86 H83" stroke="${K}" stroke-width="4"/><rect x="4" y="89" width="92" height="3" rx="1.5" fill="${GM}"/>`,
boat:`<path d="M50 12 V64" stroke="${BR}" stroke-width="3"/><path d="M53 14 L82 58 L53 58 Z" fill="#fff" stroke="${GL}" stroke-width="1.5"/><path d="M47 22 L24 58 L47 58 Z" fill="${R}"/><path d="M12 62 H88 L77 79 H23 Z" fill="${BR}"/><path d="M4 87 q8 -6 16 0 t16 0 t16 0 t16 0 t16 0 t16 0" stroke="${B}" stroke-width="3" fill="none"/>`,
wagon:`<path d="M14 62 L2 70" stroke="${BR}" stroke-width="3" stroke-linecap="round"/><path d="M20 56 V40 Q20 20 50 20 Q80 20 80 40 V56 Z" fill="#fff" stroke="${GL}" stroke-width="2"/><path d="M35 22 V56 M50 20 V56 M65 22 V56" stroke="${GL}" stroke-width="2"/><rect x="14" y="54" width="72" height="14" rx="2" fill="${BR}"/>${bigWheel(30,76,12,BR,YL)}${bigWheel(70,76,12,BR,YL)}<rect x="4" y="88" width="92" height="3" rx="1.5" fill="${GM}"/>`,
slow:`<path d="M10 82 Q10 72 24 72 H72 Q84 72 86 62 L88 54 Q93 50 94 56 L92 70 Q90 82 76 82 Z" fill="${YM}"/><circle cx="48" cy="52" r="23" fill="${YD}"/><path d="M48 52 m-4 0 a4 4 0 1 1 8 0 a9 9 0 1 1 -18 0 a15 15 0 1 1 30 0" stroke="${YL}" stroke-width="3" fill="none"/><path d="M87 56 L84 41 M91 55 L95 41" stroke="${YD}" stroke-width="2.5" stroke-linecap="round"/><circle cx="84" cy="40" r="3" fill="${YD}"/><circle cx="95" cy="40" r="3" fill="${YD}"/><rect x="4" y="84" width="92" height="3" rx="1.5" fill="${GM}"/>`,
fast:`<path d="M6 48 H26 M2 57 H28 M10 65 H26" stroke="${B}" stroke-width="3.5" stroke-linecap="round"/><path d="M34 42 L66 42 Q92 46 94 70 L34 70 Z" fill="${R}"/><path d="M66 46 Q82 49 87 57 L66 57 Z" fill="${BL}"/><rect x="40" y="48" width="9" height="8" rx="2" fill="${RL}"/><rect x="53" y="48" width="9" height="8" rx="2" fill="${RL}"/><rect x="34" y="63" width="60" height="4" fill="${RD}"/>${wh(46,74,5)}${wh(80,74,5)}${rail(80)}`,
heavygoods:`<path d="M44 18 Q50 8 56 18" stroke="${K}" stroke-width="3.5" fill="none"/><path d="M36 40 L42 18 H58 L64 40 Z" fill="${K}"/><text x="50" y="35" font-size="11" fill="#fff" text-anchor="middle" font-family="Arial" font-weight="700">1t</text><rect x="14" y="40" width="72" height="46" rx="3" fill="${BR}"/><path d="M14 40 L86 86 M86 40 L14 86" stroke="#633806" stroke-width="3"/><rect x="14" y="40" width="72" height="46" rx="3" fill="none" stroke="#633806" stroke-width="4"/>`,
supplies:`<path d="M16 88 Q8 62 22 48 L20 38 H36 L34 48 Q48 62 40 88 Z" fill="${YM}"/><path d="M20 41 H36" stroke="${YD}" stroke-width="3"/><rect x="44" y="54" width="30" height="34" fill="${BR}"/><path d="M44 64 H74 M59 54 V64" stroke="#633806" stroke-width="2"/><rect x="77" y="58" width="18" height="30" rx="5" fill="#D85A30"/><path d="M77 66 H95 M77 80 H95" stroke="#993C1D" stroke-width="2.5"/>`,
difficult:`<rect x="52" y="42" width="40" height="44" rx="3" fill="${BR}"/><path d="M52 42 L92 86 M92 42 L52 86" stroke="#633806" stroke-width="2.5"/><path d="M33 42 L24 66" stroke="${BD}" stroke-width="9" stroke-linecap="round"/><path d="M31 48 L52 54 M29 54 L52 62" stroke="${BD}" stroke-width="5" stroke-linecap="round"/><path d="M24 66 L12 86 M24 66 L32 86" stroke="${K}" stroke-width="5" stroke-linecap="round"/><circle cx="31" cy="33" r="8" fill="${SK}"/><path d="M19 20 q-3 5 0 7 q3 -2 0 -7z M14 30 q-3 5 0 7 q3 -2 0 -7z" fill="${B}"/><rect x="4" y="86" width="92" height="3" rx="1.5" fill="${GR}"/>`,
journey:`<rect x="6" y="10" width="88" height="80" rx="8" fill="${GLL}"/><path d="M18 80 Q30 50 50 60 T82 24" stroke="${BR}" stroke-width="6" fill="none" stroke-linecap="round"/><path d="M18 80 Q30 50 50 60 T82 24" stroke="#fff" stroke-width="1.5" stroke-dasharray="4 4" fill="none"/><circle cx="18" cy="80" r="5" fill="${R}"/><path d="M82 24 V8" stroke="${K}" stroke-width="2.5"/><path d="M82 8 L94 12 L82 16 Z" fill="${R}"/><circle cx="76" cy="72" r="12" fill="#fff" stroke="${B}" stroke-width="3"/><path d="M76 72 V64 M76 72 L82 75" stroke="${K}" stroke-width="2.5" stroke-linecap="round"/>`,
factory:`<circle cx="70" cy="13" r="6" fill="${GL}" class="puff"/><circle cx="81" cy="8" r="5" fill="${GL}"/><rect x="64" y="20" width="10" height="36" fill="#993C1D"/><rect x="78" y="28" width="8" height="28" fill="#993C1D"/><path d="M8 88 V50 L26 38 V50 L44 38 V50 L62 38 V54 H92 V88 Z" fill="#D85A30"/><rect x="16" y="60" width="10" height="10" rx="1" fill="${YL}"/><rect x="34" y="60" width="10" height="10" rx="1" fill="${YL}"/><rect x="52" y="60" width="10" height="10" rx="1" fill="${YL}"/><rect x="70" y="66" width="14" height="22" rx="1" fill="${K}"/><rect x="4" y="88" width="92" height="4" rx="2" fill="${GR}"/>`,
connect:`<path d="M6 54 L17 43 L28 54 V68 H6 Z" fill="${R}"/><rect x="11" y="57" width="6" height="6" fill="${YL}"/><path d="M22 60 L30 52 L38 60 V68 H22 Z" fill="${Y}"/><rect x="62" y="28" width="13" height="40" fill="${B}"/><rect x="78" y="40" width="16" height="28" fill="${BD}"/><path d="M65 34 h3 M70 34 h3 M65 42 h3 M70 42 h3 M65 50 h3 M70 50 h3 M82 46 h3 M88 46 h3 M82 54 h3 M88 54 h3" stroke="${BL}" stroke-width="3"/><path d="M6 78 Q50 62 94 78" stroke="${GR}" stroke-width="3" fill="none"/><path d="M6 86 Q50 70 94 86" stroke="${GR}" stroke-width="3" fill="none"/><rect x="38" y="58" width="24" height="12" rx="3" fill="${G}"/><rect x="42" y="61" width="6" height="4" rx="1" fill="${GLL}"/><rect x="51" y="61" width="6" height="4" rx="1" fill="${GLL}"/><circle cx="17" cy="36" r="3" fill="${R}"/><circle cx="82" cy="22" r="3" fill="${R}"/><path d="M17 36 Q50 6 82 22" stroke="${R}" stroke-width="2" stroke-dasharray="3 4" fill="none"/>`,
business:`<path d="M10 28 H70 L74 40 H6 Z" fill="${R}"/><path d="M22 28 L20 40 M34 28 L34 40 M46 28 L48 40 M58 28 L62 40" stroke="#fff" stroke-width="3"/><rect x="10" y="40" width="60" height="46" fill="${YL}"/><rect x="18" y="48" width="18" height="14" rx="2" fill="${BM}"/><rect x="44" y="54" width="16" height="32" rx="2" fill="${BD}"/><path d="M76 50 L86 36 L96 50 Z M83 50 H89 V62 H83 Z" fill="${G}"/><ellipse cx="86" cy="86" rx="11" ry="4" fill="${YD}"/><ellipse cx="86" cy="81" rx="11" ry="4" fill="${Y}" stroke="${YD}"/><ellipse cx="86" cy="75" rx="11" ry="4" fill="${Y}" stroke="${YD}"/><ellipse cx="86" cy="69" rx="11" ry="4" fill="${YM}" stroke="${YD}"/>`,

/* —— 第 02 课：Adjectives —— */
adjective:sticker('#E6F1FB',`<rect x="22" y="34" width="56" height="42" rx="6" fill="#fff" stroke="${BD}" stroke-width="2.5"/><text x="50" y="60" font-size="14" font-weight="700" fill="${BD}" text-anchor="middle" font-family="Arial">NOUN</text><g transform="rotate(-9 50 30)"><rect x="24" y="16" width="52" height="22" rx="6" fill="${R}"/><text x="50" y="32" font-size="13" font-weight="700" fill="#fff" text-anchor="middle" font-family="Arial">red</text></g>`),
noun:sticker('#FAEEDA',`<rect x="18" y="22" width="64" height="58" rx="7" fill="#fff" stroke="${YD}" stroke-width="2.5"/><path d="M50 22 V80" stroke="${YD}" stroke-width="2"/><circle cx="34" cy="42" r="8" fill="${SK}"/><path d="M22 70 Q22 54 34 54 Q46 54 46 70 Z" fill="${B}"/><rect x="58" y="36" width="16" height="30" rx="2" fill="${Y}"/><rect x="61" y="40" width="10" height="5" rx="1" fill="${YL}"/>`),
describe:sticker('#EEEDFE',`<path d="M16 24 H84 Q90 24 90 30 V66 Q90 72 84 72 H42 L28 86 V72 H16 Q10 72 10 66 V30 Q10 24 16 24 Z" fill="#fff" stroke="#7F77DD" stroke-width="2.5"/><path d="M26 40 H74 M26 51 H66 M26 62 H58" stroke="#7F77DD" stroke-width="3.5" stroke-linecap="round"/>`),
word:sticker('#EAF3DE',`<rect x="12" y="34" width="24" height="32" rx="5" fill="${R}"/><rect x="38" y="34" width="24" height="32" rx="5" fill="${Y}"/><rect x="64" y="34" width="24" height="32" rx="5" fill="${B}"/><text x="24" y="57" font-size="19" font-weight="800" fill="#fff" text-anchor="middle" font-family="Arial">A</text><text x="50" y="57" font-size="19" font-weight="800" fill="#fff" text-anchor="middle" font-family="Arial">B</text><text x="76" y="57" font-size="19" font-weight="800" fill="#fff" text-anchor="middle" font-family="Arial">C</text>`),
red:sticker('#FCEBEB',`<path d="M50 30 C36 20 18 32 20 52 C22 74 40 88 50 84 C60 88 78 74 80 52 C82 32 64 20 50 30 Z" fill="${R}"/><path d="M50 30 Q52 18 62 16" stroke="${BR}" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M56 18 Q68 10 76 20 Q66 30 56 18 Z" fill="${G}"/><circle cx="38" cy="48" r="5" fill="#fff" fill-opacity=".35"/>`),
green:sticker('#EAF3DE',`<path d="M20 74 Q22 28 78 22 Q84 54 46 82 Q28 86 20 74 Z" fill="${G}"/><path d="M26 72 Q48 48 74 28" stroke="${GLL}" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M42 62 L38 46 M58 48 L64 36" stroke="${GLL}" stroke-width="2.5" stroke-linecap="round"/>`),
brown:sticker('#FAEEDA',`<path d="M14 66 Q16 26 50 26 Q84 26 86 66 Z" fill="#D9A15B"/><path d="M14 66 H86 V72 Q86 78 80 78 H20 Q14 78 14 72 Z" fill="${BR}"/><g fill="#fff"><ellipse cx="34" cy="46" rx="3.5" ry="2" transform="rotate(-25 34 46)"/><ellipse cx="54" cy="38" rx="3.5" ry="2" transform="rotate(20 54 38)"/><ellipse cx="68" cy="52" rx="3.5" ry="2" transform="rotate(-15 68 52)"/><ellipse cx="44" cy="58" rx="3.5" ry="2" transform="rotate(10 44 58)"/></g>`),
bright:sticker('#FFF6E5',`${radial(10,32,45,Y,4)}<path d="M50 16 L58 40 L84 40 L63 55 L71 80 L50 65 L29 80 L37 55 L16 40 L42 40 Z" fill="${YM}" stroke="${YD}" stroke-width="2" stroke-linejoin="round"/>`),
round:sticker('#E6F1FB',`<circle cx="50" cy="50" r="32" fill="none" stroke="${B}" stroke-width="6" stroke-dasharray="9 7"/><circle cx="50" cy="50" r="17" fill="${BL}"/><text x="50" y="92" font-size="11" font-weight="700" fill="${BD}" text-anchor="middle" font-family="Arial">round</text>`),
big:sticker('#F1EFE8',`<circle cx="42" cy="52" r="30" fill="${Y}"/><circle cx="78" cy="76" r="10" fill="${GR}"/><path d="M20 52 H64 M42 22 V82" stroke="${YL}" stroke-width="3" stroke-linecap="round"/>`),
cold:sticker('#E6F1FB',`<rect x="22" y="22" width="56" height="56" rx="9" fill="#B5D4F4" stroke="${B}" stroke-width="3"/><path d="M22 44 H78 M50 22 V78 M32 30 L42 40 M64 30 L54 40 M32 70 L42 60" stroke="#fff" stroke-width="2.5" opacity=".8"/><g stroke="#fff" stroke-width="2.5" stroke-linecap="round"><path d="M14 16 V28 M8 22 H20 M86 72 V84 M80 78 H92"/></g>`),
sweet:sticker('#FBEAF0',`<path d="M28 50 L14 36 V64 Z M72 50 L86 36 V64 Z" fill="#FF6F91"/><rect x="26" y="34" width="48" height="32" rx="12" fill="#FF8FB0"/><path d="M38 34 Q44 50 38 66 M62 34 Q56 50 62 66" stroke="#fff" stroke-width="3.5" fill="none"/><circle cx="50" cy="50" r="6" fill="#fff"/>`),
salty:sticker('#FFF6E5',`<rect x="36" y="34" width="28" height="46" rx="7" fill="#fff" stroke="${GR}" stroke-width="2.5"/><rect x="34" y="26" width="32" height="10" rx="3" fill="${B}"/><path d="M40 30 h4 M48 30 h4 M56 30 h4" stroke="#fff" stroke-width="2.5"/><text x="50" y="64" font-size="13" font-weight="700" fill="${BD}" text-anchor="middle" font-family="Arial">S</text><g fill="#fff" stroke="${GR}" stroke-width="1"><circle cx="22" cy="20" r="2.5"/><circle cx="76" cy="22" r="2.5"/><circle cx="16" cy="76" r="2.5"/><circle cx="82" cy="72" r="2.5"/><circle cx="70" cy="86" r="2.5"/></g>`),
sour:sticker('#FFF6E5',`<ellipse cx="50" cy="52" rx="31" ry="25" fill="#F5D93D"/><path d="M50 27 Q54 19 62 20" stroke="${G}" stroke-width="4" fill="none" stroke-linecap="round"/><circle cx="39" cy="47" r="3" fill="${K}"/><circle cx="61" cy="47" r="3" fill="${K}"/><path d="M38 66 Q50 56 62 66" stroke="${K}" stroke-width="3" fill="none" stroke-linecap="round"/>`),
juicy:sticker('#EAF3DE',`<path d="M50 14 C50 14 20 50 20 66 A30 30 0 0 0 80 66 C80 50 50 14 50 14 Z" fill="#F5A623" stroke="${YD}" stroke-width="2.5"/><path d="M34 64 Q34 76 46 80" stroke="#fff" stroke-width="4" fill="none" stroke-linecap="round" opacity=".75"/><circle cx="62" cy="58" r="5" fill="#fff" fill-opacity=".4"/>`),
soft:sticker('#EEEDFE',`<path d="M18 66 Q10 66 10 56 Q10 46 22 46 Q20 28 38 28 Q46 16 62 24 Q82 22 84 44 Q94 48 90 60 Q88 70 78 68 Z" fill="#fff" stroke="#B4A8F0" stroke-width="2.5"/><path d="M26 76 H74" stroke="#B4A8F0" stroke-width="3" stroke-linecap="round"/>`),
hamburger:sticker('#FAEEDA',`<path d="M14 48 Q16 20 50 20 Q84 20 86 48 Z" fill="#E9B96B"/><path d="M14 50 Q24 58 34 50 Q44 60 54 50 Q64 60 74 50 Q82 56 86 50 L86 56 H14 Z" fill="${G}"/><rect x="14" y="56" width="72" height="9" rx="2" fill="${YM}"/><rect x="14" y="64" width="72" height="9" rx="3" fill="${BR}"/><path d="M14 74 H86 V80 Q86 88 76 88 H24 Q14 88 14 80 Z" fill="#E9B96B"/><g fill="#fff"><ellipse cx="34" cy="36" rx="3" ry="1.8" transform="rotate(-20 34 36)"/><ellipse cx="54" cy="30" rx="3" ry="1.8" transform="rotate(15 54 30)"/><ellipse cx="68" cy="40" rx="3" ry="1.8"/></g>`),
bun:sticker('#FAEEDA',`<path d="M12 62 Q14 28 50 28 Q86 28 88 62 Z" fill="#E9B96B" stroke="${YD}" stroke-width="2.5"/><path d="M12 62 H88 V68 Q88 76 78 76 H22 Q12 76 12 68 Z" fill="${BR}"/><g fill="#fff"><ellipse cx="32" cy="46" rx="3.5" ry="2" transform="rotate(-20 32 46)"/><ellipse cx="54" cy="40" rx="3.5" ry="2" transform="rotate(15 54 40)"/><ellipse cx="70" cy="50" rx="3.5" ry="2"/></g>`),
lettuce:sticker('#EAF3DE',`<path d="M10 58 Q18 42 26 54 Q34 36 44 50 Q54 32 64 48 Q74 36 82 52 Q90 44 92 58 Q78 78 50 80 Q22 78 10 58 Z" fill="${GM}" stroke="${GD}" stroke-width="2"/><path d="M26 58 Q38 66 50 62 Q64 68 76 58" stroke="${GLL}" stroke-width="3" fill="none" stroke-linecap="round"/>`),
tomato:sticker('#FCEBEB',`<circle cx="50" cy="50" r="34" fill="${R}" stroke="${RD}" stroke-width="3"/><circle cx="50" cy="50" r="25" fill="#F4786F"/><g fill="${YL}"><ellipse cx="50" cy="34" rx="4" ry="2.5"/><ellipse cx="50" cy="66" rx="4" ry="2.5"/><ellipse cx="34" cy="50" rx="2.5" ry="4"/><ellipse cx="66" cy="50" rx="2.5" ry="4"/></g><circle cx="50" cy="50" r="8" fill="${YL}"/>`),
cheese:sticker('#FFF6E5',`<path d="M14 72 L14 38 L86 38 L86 72 Z" fill="${YM}" stroke="${YD}" stroke-width="2.5"/><path d="M14 38 L86 38 L74 26 H26 Z" fill="#FAC775" stroke="${YD}" stroke-width="2.5"/><g fill="${YD}"><circle cx="34" cy="56" r="5"/><circle cx="62" cy="62" r="7"/><circle cx="70" cy="46" r="3.5"/></g>`),
sugar:sticker('#E6F1FB',`<rect x="28" y="34" width="44" height="48" rx="6" fill="#fff" stroke="${B}" stroke-width="2.5"/><rect x="26" y="26" width="48" height="10" rx="3" fill="${BD}"/><path d="M28 56 H72" stroke="${BL}" stroke-width="4"/><g fill="#fff" stroke="${GR}" stroke-width="1.5"><rect x="36" y="62" width="12" height="12" rx="2" transform="rotate(-8 42 68)"/><rect x="52" y="60" width="12" height="12" rx="2" transform="rotate(10 58 66)"/></g>`),
salt:sticker('#F1EFE8',`<rect x="30" y="32" width="40" height="50" rx="8" fill="#fff" stroke="${GR}" stroke-width="2.5"/><rect x="28" y="24" width="44" height="10" rx="3" fill="${TEAL}"/><text x="50" y="64" font-size="15" font-weight="800" fill="${TEAL}" text-anchor="middle" font-family="Arial">SALT</text><g fill="${GL}"><circle cx="18" cy="24" r="2.5"/><circle cx="82" cy="28" r="2.5"/><circle cx="14" cy="74" r="2.5"/><circle cx="86" cy="70" r="2.5"/></g>`),
/* —— 后续课程补充的插图 —— */
beijing:sticker('#FCEBEB',`<rect x="14" y="84" width="72" height="5" rx="2" fill="${GR}"/><rect x="20" y="58" width="60" height="27" fill="${R}"/><rect x="43" y="64" width="14" height="21" rx="7" fill="${RD}"/><rect x="26" y="66" width="9" height="9" rx="2" fill="${YM}"/><rect x="65" y="66" width="9" height="9" rx="2" fill="${YM}"/><path d="M10 60 Q50 44 90 60 L82 50 Q50 38 18 50 Z" fill="${Y}"/><rect x="30" y="36" width="40" height="14" fill="${R}"/><path d="M20 38 Q50 22 80 38 L74 30 Q50 18 26 30 Z" fill="${Y}"/>`),
table:sticker('#FAEEDA',`<rect x="12" y="44" width="76" height="10" rx="3" fill="${BR}"/><rect x="18" y="54" width="8" height="32" fill="${BR}"/><rect x="74" y="54" width="8" height="32" fill="${BR}"/><rect x="28" y="30" width="18" height="14" rx="2" fill="${B}"/><circle cx="64" cy="36" r="8" fill="${R}"/>`),
short:sticker('#F1EFE8',`<circle cx="32" cy="16" r="8" fill="${SK}"/><rect x="22" y="26" width="20" height="60" rx="6" fill="${GL}"/><circle cx="66" cy="48" r="8" fill="${SK}"/><rect x="56" y="58" width="20" height="28" rx="6" fill="${B}"/><rect x="12" y="86" width="76" height="4" rx="2" fill="${GR}"/>`),
square:sticker('#E6F1FB',`<rect x="24" y="24" width="52" height="52" rx="3" fill="${BM}" stroke="${BD}" stroke-width="4"/><path d="M24 38 h12 v-14 M76 38 h-12 v-14 M24 62 h12 v14 M76 62 h-12 v14" stroke="${BD}" stroke-width="2" fill="none"/>`),
middle:sticker('#EAF3DE',[0,1,2].map(r=>[0,1,2].map(c=>`<circle cx="${26+c*24}" cy="${26+r*24}" r="${r===1&&c===1?10:6}" fill="${r===1&&c===1?R:GM}"/>`).join('')).join('')),
zipper:sticker('#FAEEDA',`<rect x="22" y="10" width="24" height="80" fill="${B}"/><rect x="54" y="10" width="24" height="80" fill="${B}"/>${Array.from({length:9},(_,i)=>`<rect x="${i%2?50:44}" y="${12+i*8}" width="6" height="6" rx="1" fill="${GR}"/>`).join('')}<rect x="40" y="40" width="20" height="14" rx="4" fill="${D}"/><rect x="45" y="52" width="10" height="22" rx="5" fill="${D}"/>`),
'dir-north':'','dir-south':'','dir-east':'','dir-west':''
};
/* 指南针方向贴纸：箭头指向哪边，那个字母就变红 */
['north','east','south','west'].forEach((d,i)=>{
  const L=['N','E','S','W'],ang=[-90,0,90,180];
  const pos=k=>{const a=ang[k]*Math.PI/180;return [50+29*Math.cos(a),50+29*Math.sin(a)+5]};
  const tip=(()=>{const a=ang[i]*Math.PI/180;return [50+17*Math.cos(a),50+17*Math.sin(a)]})();
  ART['dir-'+d]=sticker('#E6F1FB',`<circle cx="50" cy="50" r="40" fill="#fff" stroke="${BD}" stroke-width="3"/>${L.map((t,k)=>{const [x,y]=pos(k);return `<text x="${x.toFixed(1)}" y="${y.toFixed(1)}" font-size="${k===i?17:12}" font-weight="800" fill="${k===i?R:GR}" text-anchor="middle" font-family="Arial">${t}</text>`}).join('')}<line x1="50" y1="50" x2="${tip[0].toFixed(1)}" y2="${tip[1].toFixed(1)}" stroke="${R}" stroke-width="6" stroke-linecap="round"/><circle cx="50" cy="50" r="5" fill="${K}"/>`);
});

/* 没有专门画的词：e: 开头用表情当插图，t: 开头写成文字贴纸（缩写课用它显示完整写法） */
const graphemes=s=>(typeof Intl!=='undefined'&&Intl.Segmenter)?[...new Intl.Segmenter().segment(s)].length:Array.from(s).length;
const emo=s=>{const n=graphemes(s),fs=n<=1?60:n===2?38:n===3?28:22;return `<text x="50" y="55" font-size="${fs}" text-anchor="middle" dominant-baseline="middle" font-family="Apple Color Emoji,Segoe UI Emoji,Noto Color Emoji,sans-serif">${s}</text>`};
const txt=s=>{const n=s.length,fs=n<=1?58:n<=2?50:n<=4?34:n<=6?27:n<=8?21:17;return `<rect x="8" y="24" width="84" height="52" rx="12" fill="#fff" stroke="#D9CFBF" stroke-width="2"/><text x="50" y="51" font-size="${fs}" font-weight="800" fill="#3a2e26" text-anchor="middle" dominant-baseline="middle" font-family="Arial Rounded MT Bold,Arial,sans-serif">${s}</text>`};

const svgOf=(w)=>{const k=w.icon||'',body=k.startsWith('e:')?emo(k.slice(2)):k.startsWith('t:')?txt(k.slice(2)):(ART[k]||'');return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">${body}</svg>`};
const esc=s=>String(s).replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;');

/* 可点板书：第一辆蒸汽火车（来自老师的 Social Studies 板书） */
const LBL=(w,x,y,wd,lx1,ly1,lx2,ly2)=>`<line class="lead" x1="${lx1}" y1="${ly1}" x2="${lx2}" y2="${ly2}"/><circle cx="${lx2}" cy="${ly2}" r="3" fill="#378ADD"/><g class="lbl" data-w="${esc(w)}"><rect x="${x}" y="${y}" width="${wd}" height="24" rx="12"/><text x="${x+wd/2}" y="${y+16.5}" text-anchor="middle">${w}</text></g>`;
const TRAIN_DIAGRAM=`<svg viewBox="0 0 360 196" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="152" width="360" height="4" fill="${GR}"/>${Array.from({length:18},(_,i)=>`<rect x="${4+i*20}" y="156" width="10" height="4" fill="${BR}"/>`).join('')}
<circle cx="66" cy="28" r="7" fill="${GL}" class="puff"/><circle cx="54" cy="22" r="6" fill="#fff" stroke="${GL}" stroke-width="2"/>
<g class="pt" data-w="boiler"><rect x="102" y="62" width="16" height="14" rx="6" fill="${D}"/><rect x="34" y="72" width="122" height="46" rx="23" fill="${D}"/><path d="M82 72 V118 M122 72 V118" stroke="#5F5E5A" stroke-width="3"/><ellipse cx="38" cy="95" rx="8" ry="23" fill="#5F5E5A"/><circle cx="32" cy="82" r="5" fill="${YM}"/></g>
<g class="pt" data-w="chimney"><rect x="56" y="40" width="16" height="34" fill="${K}"/><rect x="51" y="34" width="26" height="8" rx="3" fill="${K}"/></g>
<g class="pt" data-w="driver's cab"><rect x="146" y="40" width="64" height="8" rx="3" fill="${K}"/><rect x="152" y="48" width="52" height="70" fill="${R}"/><rect x="164" y="58" width="28" height="22" rx="3" fill="${YL}"/><circle cx="178" cy="73" r="6" fill="${SK}"/><path d="M171 71 Q172 63 178 63 Q184 63 185 71 Z" fill="#0C447C"/></g>
<rect x="26" y="110" width="184" height="8" fill="${K}"/><path d="M26 118 L14 148 H40 L40 118 Z" fill="${R}"/>
${wh(54,142,10)}${wh(188,142,10)}
<g class="pt" data-w="driving wheels">${bigWheel(88,132,20)}${bigWheel(136,132,20)}<rect x="86" y="134" width="52" height="5" rx="2.5" fill="${GR}"/></g>
<rect x="206" y="112" width="12" height="5" fill="${K}"/>
<g class="pt" data-w="coal tender"><circle cx="226" cy="80" r="8" fill="${K}"/><circle cx="240" cy="76" r="9" fill="${K}"/><circle cx="255" cy="79" r="8" fill="${K}"/><circle cx="269" cy="75" r="9" fill="${K}"/><circle cx="282" cy="80" r="7" fill="${K}"/><rect x="216" y="80" width="74" height="44" rx="4" fill="${D}"/><text x="253" y="108" font-size="13" font-weight="700" fill="#fff" text-anchor="middle" font-family="Arial">COAL</text>${wh(234,142,10)}${wh(272,142,10)}</g>
<rect x="290" y="112" width="10" height="5" fill="${K}"/><rect x="298" y="64" width="58" height="60" rx="6" fill="${G}"/><rect x="304" y="72" width="20" height="18" rx="2" fill="${GLL}"/><rect x="330" y="72" width="20" height="18" rx="2" fill="${GLL}"/>${wh(312,142,10)}${wh(342,142,10)}
${LBL('chimney',4,4,72,40,28,62,38)}${LBL('boiler',84,4,66,117,28,128,70)}${LBL("driver's cab",158,4,98,207,28,196,42)}${LBL('coal tender',262,4,96,300,28,262,72)}${LBL('driving wheels',92,166,124,154,166,140,146)}
</svg>`;

/* 可点板书：Describe the hamburger（照着今天白板上的汉堡重画） */
const HAM_LBL=(w,x,y,wd,lx,ly,px,py)=>`<line class="lead" x1="${lx}" y1="${ly}" x2="${px}" y2="${py}"/><circle cx="${px}" cy="${py}" r="3" fill="#378ADD"/><g class="lbl" data-w="${esc(w)}"><rect x="${x}" y="${y}" width="${wd}" height="24" rx="12"/><text x="${x+wd/2}" y="${y+16.5}" text-anchor="middle">${w}</text></g>`;
const HAMBURGER_DIAGRAM=`<svg viewBox="0 0 360 230" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="180" cy="212" rx="96" ry="9" fill="#EFE9DC"/>
<path d="M104 100 Q108 44 180 42 Q252 44 256 100 Z" fill="#EBC183" stroke="${YD}" stroke-width="2.5"/>
<g fill="#fff" opacity=".9"><ellipse cx="142" cy="76" rx="4" ry="2.4" transform="rotate(-20 142 76)"/><ellipse cx="172" cy="60" rx="4" ry="2.4" transform="rotate(15 172 60)"/><ellipse cx="206" cy="68" rx="4" ry="2.4" transform="rotate(-10 206 68)"/><ellipse cx="228" cy="86" rx="4" ry="2.4" transform="rotate(20 228 86)"/><ellipse cx="122" cy="92" rx="4" ry="2.4" transform="rotate(10 122 92)"/></g>
<path d="M100 100 Q116 112 130 100 Q146 116 160 100 Q176 116 190 100 Q206 116 220 100 Q238 112 260 100 L260 112 Q180 126 100 112 Z" fill="${GM}" stroke="${GD}" stroke-width="2"/>
<path d="M104 116 L256 116 L248 132 L112 132 Z" fill="${YM}" stroke="${YD}" stroke-width="2"/>
<rect x="104" y="132" width="152" height="20" rx="8" fill="${BR}"/>
<circle cx="132" cy="160" r="18" fill="#F26D6B" stroke="${RD}" stroke-width="2"/><circle cx="132" cy="160" r="11" fill="none" stroke="#FFB3AE" stroke-width="2"/>
<circle cx="228" cy="160" r="18" fill="#F26D6B" stroke="${RD}" stroke-width="2"/><circle cx="228" cy="160" r="11" fill="none" stroke="#FFB3AE" stroke-width="2"/>
<path d="M104 152 H256 V172 Q256 194 232 196 H128 Q104 194 104 172 Z" fill="#EBC183" stroke="${YD}" stroke-width="2.5"/>
${HAM_LBL('brown',4,10,72,76,22,140,66)}${HAM_LBL('green',4,52,66,70,64,120,106)}${HAM_LBL('red',4,94,52,56,106,130,160)}${HAM_LBL('round',4,136,70,74,148,112,134)}${HAM_LBL('soft',4,178,54,58,190,150,190)}
${HAM_LBL('bun',284,10,52,284,22,214,58)}${HAM_LBL('lettuce',276,52,80,276,64,224,108)}${HAM_LBL('juicy',284,94,64,284,106,200,140)}${HAM_LBL('sweet',284,136,66,284,148,232,152)}${HAM_LBL('salty',284,178,64,284,190,206,170)}
</svg>`;

/* 可点板书：Spell and Write · Compass（照着板书上的指南针和四周的拼写词重画） */
const LB=(w,x,y,wd)=>`<g class="lbl" data-w="${esc(w)}"><rect x="${x}" y="${y}" width="${wd}" height="24" rx="12"/><text x="${x+wd/2}" y="${y+16.5}" text-anchor="middle">${w}</text></g>`;
const COMPASS_DIAGRAM=`<svg viewBox="0 0 360 230" xmlns="http://www.w3.org/2000/svg">
<g class="pt" data-w="compass">
<ellipse cx="180" cy="94" rx="13" ry="24" fill="#E6F1FB" stroke="#378ADD" stroke-width="2"/><ellipse cx="180" cy="142" rx="13" ry="24" fill="#E6F1FB" stroke="#378ADD" stroke-width="2"/><ellipse cx="156" cy="118" rx="24" ry="13" fill="#E6F1FB" stroke="#378ADD" stroke-width="2"/><ellipse cx="204" cy="118" rx="24" ry="13" fill="#E6F1FB" stroke="#378ADD" stroke-width="2"/>
<path d="M180 46 V190 M98 118 H262" stroke="${BD}" stroke-width="3"/>
<path d="M180 40 L173 54 H187 Z M180 196 L173 182 H187 Z M92 118 L106 111 V125 Z M268 118 L254 111 V125 Z" fill="${BD}"/>
<circle cx="180" cy="118" r="6" fill="${R}"/>
</g>
<text x="318" y="60" font-size="24" font-family="Apple Color Emoji,Segoe UI Emoji,Noto Color Emoji,sans-serif">🦋</text>
${LB('north',148,10,64)}${LB('south',148,198,64)}${LB('west',18,106,58)}${LB('east',284,106,58)}
${LB('pattern',226,30,80)}${LB('zipper',34,58,72)}${LB('letter',272,150,70)}${LB('Mississippi',20,160,110)}${LB('backpack',226,192,94)}
</svg>`;

/* 默认打开的课：写着「今天」的那一课。加了新课记得改这里 */
window.BOARD_DEFAULT='adjectives';

window.BOARD_LESSONS=[
{
  id:'trains',tab:'火车的演变',no:'01',date:'11 月',subject:'Social Studies',
  title:'Evolution of trains',zh:'火车的演变',
  lead:'第一辆火车长什么样？有了火车以后，人们的生活变了什么？',
  source:'依据老师的板书 Evolution of trains 和课堂海报 Life before / after trains 整理，海报上的手写笔误已按规范写法改正。',
  headSents:['The first steam train','Why did they invent trains?'],
  cats:[{k:'steam',n:'蒸汽火车',bg:'#F1EFE8'},{k:'why',n:'为什么有火车',bg:'#E1F5EE'}],
  words:[
    ['steam train','/ˈstiːm treɪn/','蒸汽火车','The first train was a steam train.','第一辆火车是蒸汽火车。','steam','steamtrain'],
    ['chimney','/ˈtʃɪmni/','烟囱','The chimney releases smoke and steam.','烟囱冒出烟和蒸汽。','steam','chimney'],
    ['boiler','/ˈbɔɪlər/','锅炉','Water in the boiler turns into steam.','锅炉里的水变成蒸汽。','steam','boiler'],
    ["driver's cab",'/ˈdraɪvərz kæb/','司机室',"The driver works in the driver's cab.",'司机在司机室里工作。','steam','drivercab'],
    ['driving wheels','/ˈdraɪvɪŋ wiːlz/','驱动轮','Steam turns the driving wheels.','蒸汽推动驱动轮转起来。','steam','drivingwheels'],
    ['coal tender','/ˈkoʊl ˌtendər/','煤水车','The coal tender carries coal and water.','煤水车装着煤和水。','steam','tender'],
    ['steam','/stiːm/','蒸汽','Steam makes the train go.','蒸汽让火车跑起来。','steam','steam'],
    ['smoke','/smoʊk/','烟','Smoke comes out of the chimney.','烟从烟囱里冒出来。','steam','smoke'],
    ['invent','/ɪnˈvent/','发明','Why did they invent trains?','人们为什么发明火车？','why','invent'],
    ['travel','/ˈtrævəl/','出行','People travel from one place to another.','人们从一个地方去另一个地方。','why','travel'],
    ['on foot','/ɑːn ˈfʊt/','步行','People travelled on foot.','以前人们走路出行。','why','onfoot'],
    ['horse','/hɔːrs/','马','People travelled by horse.','以前人们骑马出行。','why','horse'],
    ['boat','/boʊt/','船','People travelled by boat.','以前人们坐船出行。','why','boat'],
    ['wagon','/ˈwæɡən/','马车','Trains are better than wagons.','火车比马车好。','why','wagon'],
    ['slow','/sloʊ/','慢','Travelling was slow.','以前出行很慢。','why','slow'],
    ['fast','/fæst/','快','With trains, people travelled faster.','有了火车，人们出行更快了。','why','fast'],
    ['heavy goods','/ˌhevi ˈɡʊdz/','重的货物','Trains carry heavy goods.','火车运送很重的货物。','why','heavygoods'],
    ['supplies','/səˈplaɪz/','物资','Trains move people and supplies.','火车运送人和物资。','why','supplies'],
    ['difficult','/ˈdɪfɪkəlt/','困难的，很难','Carrying heavy goods was difficult.','以前搬运重货很困难。','why','difficult'],
    ['journey','/ˈdʒɜːrni/','旅程','Journeys took longer.','路上要花的时间更长。','why','journey'],
    ['factory','/ˈfæktəri/','工厂','Factories received supplies faster.','工厂能更快收到原料。','why','factory'],
    ['connect','/kəˈnekt/','连接','Trains connected towns and cities.','火车把城镇和城市连了起来。','why','connect'],
    ['business','/ˈbɪznəs/','生意','Trains helped business grow.','火车让生意越做越大。','why','business']
  ],
  board:{title:'The first steam train',zh:'第一辆蒸汽火车 · 点一点各个部分，听听它叫什么',ask:'The first steam train',svg:TRAIN_DIAGRAM,parts:['chimney','boiler',"driver's cab",'driving wheels','coal tender']},
  groups:[
    {title:'Life before trains 有火车以前',tone:'before',img:'img/before-trains.jpg',alt:'Life before trains',lines:[
      ['People travelled on foot, by horse or by boat.','以前人们步行、骑马或坐船出行。'],
      ['Travelling was slow.','出行很慢。'],['Journeys took longer.','路上要花的时间更长。'],
      ['Carrying heavy goods was difficult.','搬运很重的货物很困难。'],
      ['People and supplies could not move easily on land.','人和物资在陆地上很难运来运去。'],
      ['People and supplies mostly stayed in local areas.','人和物资大多只在附近一带活动。']]},
    {title:'Life after trains 有了火车以后',tone:'after',img:'img/after-trains.jpg',alt:'Life after trains',lines:[
      ['People travelled faster and more easily.','人们出行更快、更方便了。'],
      ['People could travel more quickly and safely.','人们出行更快，也更安全。'],
      ['Trains carried many people and heavy goods.','火车能装很多人和很重的货物。'],
      ['Trains connected towns and cities.','火车把城镇和城市连了起来。'],
      ['Factories received supplies faster.','工厂能更快收到原料。'],
      ['Trains helped business grow.','火车让生意越做越大。']]}
  ],
  think:[
    ['How would you travel to another city if there were no trains?','如果没有火车，你会怎么去另一个城市？','I would go by horse or by boat.','我会骑马或者坐船去。'],
    ['Why are trains better than wagons?','为什么火车比马车好？','Trains are faster, and they carry more people and goods.','火车更快，还能装更多的人和货物。']
  ],
  photos:[],notes:[],
  note:'板书与海报里的手写笔误已按规范写法改正。'
},
{
  id:'nouns',tab:'名词',no:'02',subject:'Grammar',
  title:'Nouns',zh:'名词：给人和东西起名字',
  lead:'Mom、teacher、school、dog，这些每天挂在嘴边的词都是名词。名词给人、动物、地方和东西起名字。',
  source:'依据老师发的三段 Grammar 课堂小结整理（英文原文在下方），这几节课没有板书照片。',
  headSents:['Nouns','A noun names a person, animal, place or thing.'],
  cats:[{k:'person',n:'人',bg:'#FBEAF0'},{k:'animal',n:'动物',bg:'#EAF3DE'},{k:'place',n:'地方',bg:'#E6F1FB'},{k:'thing',n:'东西',bg:'#FAEEDA'}],
  words:[
    ['noun','/naʊn/','名词','A noun is a naming word.','名词是给东西起名字的词。','thing','e:🏷️'],
    ['teacher','/ˈtiːtʃər/','老师','My teacher is at school.','我的老师在学校。','person','e:🧑‍🏫'],
    ['mom','/mɑːm/','妈妈','Mom went to the farm.','妈妈去了农场。','person','e:👩'],
    ['boy','/bɔɪ/','男孩','The boy went to the zoo.','男孩去了动物园。','person','e:👦'],
    ['girl','/ɡɜːrl/','女孩','The girl has a book.','女孩有一本书。','person','e:👧'],
    ['engineer','/ˌendʒɪˈnɪr/','工程师','An engineer builds things.','工程师建造东西。','person','e:👷'],
    ['dog','/dɔːɡ/','狗','The dog runs in the park.','小狗在公园里跑。','animal','e:🐕'],
    ['cat','/kæt/','猫','The cat sits on the chair.','猫坐在椅子上。','animal','e:🐈'],
    ['cow','/kaʊ/','奶牛','There are big cows on the farm.','农场里有大奶牛。','animal','e:🐄'],
    ['Beijing','/ˌbeɪˈdʒɪŋ/','北京','Beijing is beautiful.','北京很美。','place','beijing'],
    ['school','/skuːl/','学校','I go to school.','我去上学。','place','e:🏫'],
    ['park','/pɑːrk/','公园','We play in the park.','我们在公园里玩。','place','e:🏞️'],
    ['farm','/fɑːrm/','农场','The cows live on the farm.','奶牛住在农场里。','place','e:🚜'],
    ['zoo','/zuː/','动物园','Let us go to the zoo.','我们去动物园吧。','place','e:🦒'],
    ['house','/haʊs/','房子','The cat is in the house.','猫在房子里。','place','e:🏠'],
    ['book','/bʊk/','书','I read a book.','我读一本书。','thing','e:📕'],
    ['chair','/tʃer/','椅子','The cat sits on the chair.','猫坐在椅子上。','thing','e:🪑'],
    ['ball','/bɔːl/','球','The boy has a ball.','男孩有一个球。','thing','e:⚽'],
    ['bike','/baɪk/','自行车','Mom rides a bike in Beijing.','妈妈在北京骑自行车。','thing','e:🚲'],
    ['car','/kɑːr/','汽车','Dad has a car.','爸爸有一辆汽车。','thing','e:🚗'],
    ['table','/ˈteɪbəl/','桌子','The balloon is on the table.','气球在桌子上。','thing','table'],
    ['pencil','/ˈpensəl/','铅笔','I write with a pencil.','我用铅笔写字。','thing','e:✏️'],
    ['balloon','/bəˈluːn/','气球','This is a red balloon.','这是一个红气球。','thing','e:🎈']
  ],
  board:null,
  groups:[
    {title:'The teacher says 老师怎么说',tone:'idea',lines:[
      ['A noun is a naming word.','名词是给东西起名字的词。'],
      ['Nouns can name a person, animal, place, or thing.','名词可以是人、动物、地方或东西的名字。']]},
    {title:'Find the nouns 找一找名词',tone:'look',lines:[
      ['The girl has a book.','名词：girl、book'],
      ['The cat sits on the chair.','名词：cat、chair'],
      ['Mom went to the farm.','名词：Mom、farm'],
      ['The boy went to the zoo.','名词：boy、zoo']]},
    {title:'Person, animal, place or thing? 是哪一种',tone:'food',lines:[
      ['The boy has a ball.','boy 人 · ball 东西'],
      ['The cat is in the house.','cat 动物 · house 地方'],
      ['Mom rides a bike in Beijing.','Mom 人 · bike 东西 · Beijing 地方'],
      ['The dog runs in the park.','dog 动物 · park 地方']]},
    {title:'Nouns in sentences 句子里的名词',tone:'taste',lines:[
      ['There are big cows on the farm.','名词：cows、farm'],
      ['The balloon is on the table.','名词：balloon、table'],
      ['Beijing is beautiful.','名词：Beijing']]}
  ],
  think:[
    ['What nouns can you see in your classroom?','你在教室里能看到哪些名词？','I can see a table, a chair and a pencil.','我能看到桌子、椅子和铅笔。'],
    ['Is Beijing a person, a place or a thing?','Beijing 是人、地方还是东西？','Beijing is a place.','北京是一个地方。'],
    ['Find the nouns: The balloon is on the table.','找出名词：The balloon is on the table.','Balloon and table are nouns.','balloon 和 table 是名词。']
  ],
  photos:[],
  notes:[
    {title:'Nouns',text:`Today we continued learning about nouns and identifying them in words and complete sentences. The children learned that nouns can name people, animals, places, and things.

We practiced sentences such as:

The girl has a book. — girl, book
The cat sits on the chair. — cat, chair
Mom went to the farm. — Mom, farm
The boy went to the zoo. — boy, zoo

Nouns are part of children's everyday language. When they say Mom, teacher, school, Beijing, dog, book, chair, or park, they are already using nouns. Learning to identify them helps children understand how sentences are built and supports both speaking and writing.`},
    {title:'Grammar – Nouns',text:`Today we learned that a noun is a naming word. Nouns can name a person, animal, place, or thing. The children practiced finding and identifying nouns in sentences.

Examples:

The boy has a ball. → boy = person; ball = thing
The cat is in the house. → cat = animal; house = place
Mom rides a bike in Beijing. → Mom = person; bike = thing; Beijing = place
The dog runs in the park. → dog = animal; park = place

Learning nouns helps children understand how sentences are formed and gives them the vocabulary needed to describe the people, animals, places, and things around them.`},
    {title:'Grammar — Nouns',text:`The children learned that a noun names a person, animal, place or thing.

They practiced familiar examples such as teacher, engineer, boy, girl, dog, cat, Beijing, school, park, car, table and pencil.

They also found nouns in sentences:

“There are big cows on the farm.”
“The balloon is on the table.”
“Beijing is beautiful.”

By using familiar people, places, animals and objects, the children can connect grammar with what they see around them every day.`}
  ],
  note:'词卡里没有图的词用表情代替，「北京」和「桌子」是单独画的。'
},
{
  id:'verbs',tab:'动词',no:'03',subject:'Grammar',
  title:'Action verbs',zh:'动词：他在做什么',
  lead:'跳、跑、画画、骑车，表示动作的词叫动词。句子里有了动词，才知道人和动物在做什么。',
  source:'依据老师发的两段 Grammar 课堂小结整理：认识动作动词、看图选对动词（英文原文在下方），这几节课没有板书照片。',
  headSents:['Action verbs','A verb is a word describing an action or a state.'],
  cats:[{k:'idea',n:'语法小词',bg:'#E6F1FB'},{k:'move',n:'动起来',bg:'#EAF3DE'},{k:'do',n:'动手做',bg:'#FAEEDA'}],
  words:[
    ['verb','/vɜːrb/','动词','A verb is an action word.','动词是表示动作的词。','idea','e:⚡'],
    ['action','/ˈækʃən/','动作','Jump is an action.','跳是一个动作。','idea','e:🎬'],
    ['jump','/dʒʌmp/','跳','The girl jumps.','女孩跳起来。','move','e:🦘'],
    ['run','/rʌn/','跑','The dog runs quickly.','小狗跑得很快。','move','e:🏃'],
    ['ride','/raɪd/','骑','The girl rides her bike.','女孩骑她的自行车。','move','e:🚴'],
    ['kick','/kɪk/','踢','The boy kicks the ball.','男孩踢球。','move','e:🥅'],
    ['play','/pleɪ/','玩','The children play in the park.','孩子们在公园里玩。','move','e:🤹'],
    ['sit','/sɪt/','坐','The cat sits on the chair.','猫坐在椅子上。','move','e:🪑'],
    ['build','/bɪld/','建造','Dad builds a house.','爸爸盖房子。','do','e:🔨'],
    ['paint','/peɪnt/','画画','The boy paints a picture.','男孩画了一幅画。','do','e:🎨'],
    ['eat','/iːt/','吃','We eat lunch at school.','我们在学校吃午饭。','do','e:🍽️'],
    ['drink','/drɪŋk/','喝','I drink milk.','我喝牛奶。','do','e:🥤'],
    ['read','/riːd/','读','I read a book.','我读一本书。','do','e:📖'],
    ['write','/raɪt/','写','I write with a pencil.','我用铅笔写字。','do','e:✍️']
  ],
  board:null,
  groups:[
    {title:'The teacher says 老师怎么说',tone:'idea',lines:[
      ['A verb is a word describing an action or a state.','动词是表示动作或状态的词。'],
      ['An action verb shows what someone or something does.','动作动词说的是谁在做什么。']]},
    {title:'Find the action verb 找出动作',tone:'food',lines:[
      ['The girl jumps.','动作：jumps 跳'],
      ['Dad builds a house.','动作：builds 盖'],
      ['The dog runs quickly.','动作：runs 跑'],
      ['The boy paints a picture.','动作：paints 画']]},
    {title:'Choose the correct verb 选对动词',tone:'look',lines:[
      ['The girl rides her bike.','女孩骑自行车，不是 jumps her bike。'],
      ['The boy kicks the ball.','男孩踢球，不是 eats the ball。'],
      ['The children play in the park.','孩子们在公园里玩，不是 drink in the park。']]}
  ],
  think:[
    ['Does the girl jump her bike or ride her bike?','女孩是「跳」自行车，还是「骑」自行车？','The girl rides her bike.','女孩骑自行车。'],
    ['Does the boy eat the ball or kick the ball?','男孩是「吃」球，还是「踢」球？','The boy kicks the ball.','男孩踢球。'],
    ['Do the children drink in the park or play in the park?','孩子们在公园里是「喝」，还是「玩」？','The children play in the park.','孩子们在公园里玩。'],
    ['What can you do?','你会做什么？','I can jump, run and paint.','我会跳、会跑，还会画画。']
  ],
  photos:[],
  notes:[
    {title:'GRAMMAR: ACTION VERBS',text:`📚 Topic: Identifying Verbs and Non-Verbs

Today, we focused on recognizing action words in sentences and understanding the difference between verbs and other words.

A verb is a word describing an action or a state.

📝 Examples:

👧 The girl jumps.
Jump = Action verb.

👨 Dad builds a house.
Builds = Action verb.

🐕 The dog runs quickly.
Runs = Action verb.

🎨 The boy paints a picture.
Paints = Action verb.

The children learned how verbs help us explain what people and animals do.`},
    {title:'GRAMMAR: CHOOSING THE CORRECT VERB',text:`📚 Topic: Action Verbs and Sentence Completion

The children examined pictures and selected the correct action verbs from different choices. They learned to distinguish suitable actions from incorrect ones before completing their sentences.

📝 Classroom Examples:

1. The girl jumps her bike. ❌
   The girl rides her bike. ✅

2. The boy eats the ball. ❌
   The boy kicks the ball. ✅

3. The children drink in the park. ❌
   The children play in the park. ✅

📚 Vocabulary:

Verb: A word expressing an action or state.

Action Verb: A word showing what someone or something does.`}
  ],
  note:'「选对动词」只朗读正确的句子，错误的说法放在中文提示里，也可以在「想一想」里让孩子自己选。'
},
{
  id:'adjectives',tab:'形容词·汉堡',no:'04',date:'11 月 27 日',subject:'Grammar',
  title:'Adjectives',zh:'形容词：说说它是什么样',
  lead:'一个红苹果、一颗亮星星。形容词就是多说一点，让别人知道它是什么样。',
  source:'依据今天老师的白板板书 Adjectives 整理：语法定义、三个例句、Describe the hamburger 的标注词和句子。老师的原始板书在上方。',
  headSents:['Adjectives','A word that tells us more about a noun.'],
  cats:[
    {k:'idea',n:'语法小词',bg:'#E6F1FB'},
    {k:'look',n:'看得到的',bg:'#FAEEDA'},
    {k:'taste',n:'尝得到的',bg:'#FBEAF0'},
    {k:'food',n:'汉堡身上',bg:'#EAF3DE'}
  ],
  words:[
    ['adjective','/ˈædʒɪktɪv/','形容词','An adjective tells us more about a noun.','形容词让我们更了解一样东西。','idea','adjective'],
    ['noun','/naʊn/','名词','A noun is a person, a place or a thing.','名词说的是人、地方或东西。','idea','noun'],
    ['describe','/dɪˈskraɪb/','描述','We use adjectives to describe things.','我们用形容词来描述东西。','idea','describe'],
    ['word','/wɜːrd/','单词','Red is a word.','red 就是一个词。','idea','word'],
    ['red','/red/','红色的','The tomato is red.','番茄是红色的。','look','red'],
    ['green','/ɡriːn/','绿色的','The lettuce is green.','生菜是绿色的。','look','green'],
    ['brown','/braʊn/','棕色的','The bun is brown.','面包是棕色的。','look','brown'],
    ['bright','/braɪt/','明亮的','A bright star.','一颗明亮的星星。','look','bright'],
    ['round','/raʊnd/','圆的','The hamburger is round.','汉堡是圆的。','look','round'],
    ['big','/bɪɡ/','大的','The hamburger is big.','汉堡很大。','look','big'],
    ['cold','/koʊld/','凉的','The ice is cold.','冰块是凉的。','look','cold'],
    ['sweet','/swiːt/','甜的','Sugar is sweet.','糖是甜的。','taste','sweet'],
    ['salty','/ˈsɔːlti/','咸的','Salt is salty.','盐是咸的。','taste','salty'],
    ['sour','/ˈsaʊər/','酸的','A lemon is sour.','柠檬是酸的。','taste','sour'],
    ['juicy','/ˈdʒuːsi/','多汁的','The hamburger is juicy.','汉堡很多汁。','taste','juicy'],
    ['soft','/sɔːft/','软的','The bun is soft.','面包很软。','taste','soft'],
    ['hamburger','/ˈhæmbɜːrɡər/','汉堡','Describe the hamburger.','说说这个汉堡是什么样。','food','hamburger'],
    ['bun','/bʌn/','圆面包','The bun is soft and brown.','面包软软的，是棕色的。','food','bun'],
    ['lettuce','/ˈletɪs/','生菜','The lettuce is green.','生菜是绿色的。','food','lettuce'],
    ['tomato','/təˈmeɪtoʊ/','番茄','The tomato is red.','番茄是红色的。','food','tomato'],
    ['cheese','/tʃiːz/','芝士','The cheese is big.','芝士片很大。','food','cheese'],
    ['sugar','/ˈʃʊɡər/','糖','Sugar is sweet.','糖是甜的。','food','sugar'],
    ['salt','/sɔːlt/','盐','Salt is salty.','盐是咸的。','food','salt']
  ],
  board:{title:'Describe the hamburger',zh:'说说这个汉堡 · 点蓝标签听读音，也可以遮住名字考一考',ask:'Describe the hamburger',svg:HAMBURGER_DIAGRAM,parts:['brown','green','red','round','soft','bun','lettuce','juicy','sweet','salty']},
  groups:[
    {title:'Grammar 语法怎么说',tone:'idea',lines:[
      ['A word that tells us more about a noun.','用来多说一点名词的词。'],
      ['An adjective tells us more about a noun.','形容词让我们更了解一样东西。'],
      ['We use adjectives to describe things.','我们用形容词来描述东西。']]},
    {title:'Examples 白板上的三个例子',tone:'look',lines:[
      ['A red apple.','一个红苹果。'],['A bright star.','一颗明亮的星星。'],['A cold ice.','一块凉凉的冰。']]},
    {title:'Describe the hamburger · 看得见',tone:'food',lines:[
      ['The bun is brown.','面包是棕色的。'],['The lettuce is green.','生菜是绿色的。'],
      ['The tomato is red.','番茄是红色的。'],['The hamburger is round and big.','汉堡又圆又大。']]},
    {title:'Describe the hamburger · 尝得到',tone:'taste',lines:[
      ['The bun is soft.','面包软软的。'],['The hamburger is juicy.','汉堡很多汁。'],
      ['Sugar is sweet.','糖是甜的。'],['Salt is salty.','盐是咸的。'],
      ['The cheese is big.','芝士片很大。']]}
  ],
  think:[
    ['What adjectives can you use to describe an apple?','你会用哪些形容词说苹果？','It is red, round and sweet.','它又红、又圆、又甜。'],
    ['Is the hamburger sweet or salty?','这个汉堡是甜的还是咸的？','It is salty and juicy.','咸咸的，还很多汁。'],
    ['Can you describe your favourite food?','你能说说最爱吃的东西吗？','It is sweet and soft.','它甜甜的、软软的。']
  ],
  photos:[{src:'img/adjectives-board.jpg',caption:'Grammar · Adjectives：Describe the hamburger'}],notes:[],
  note:'白板手写里有 EXamples、tomatoe、A cold ice 这类笔误和口语写法，句子组照原板书展示，词卡里的例句按规范写法给出（The ice is cold.）。'
},
{
  id:'describing',tab:'找出形容词',no:'05',subject:'Grammar',
  title:'Identifying adjectives',zh:'找出形容词：它是什么样',
  lead:'老师在句子里圈出名词、划出形容词。先找到名词，再看是哪个词在描述它：颜色、大小、形状、感觉，还是味道。',
  source:'依据两块 Grammar 板书（Identifying Adjectives 小熊看病、Ask: What kind? 分组写形容词）和老师发的课堂小结整理。',
  headSents:['Identifying adjectives','An adjective describes a noun.'],
  cats:[{k:'look',n:'看得到的',bg:'#FAEEDA'},{k:'feel',n:'摸得到听得到',bg:'#EEEDFE'},{k:'taste',n:'尝得到的',bg:'#FBEAF0'},{k:'more',n:'夸一夸',bg:'#EAF3DE'}],
  words:[
    ['short','/ʃɔːrt/','矮的，短的','The short boy.','那个矮个子男孩。','look','short'],
    ['white','/waɪt/','白色的','My milk is white.','我的牛奶是白色的。','look','e:🥛'],
    ['square','/skwer/','方的','The windows are square.','窗户是方的。','look','square'],
    ['large','/lɑːrdʒ/','大的','He puts a large band aid on the teddy bear.','他给小熊贴了一块大大的创可贴。','look','e:🐳'],
    ['small','/smɔːl/','小的','The bear gets a small shot.','小熊打了一小针。','look','e:🐭'],
    ['brown','/braʊn/','棕色的','The teddy bear is brown.','小熊是棕色的。','look','brown'],
    ['blue','/bluː/','蓝色的','The sky is blue.','天空是蓝色的。','look','e:🔵'],
    ['long','/lɔːŋ/','长的','The snake is long.','蛇很长。','look','e:🐍'],
    ['three','/θriː/','三','The hospital has three floors.','医院有三层楼。','look','t:3'],
    ['soft','/sɔːft/','软的','The boy checks his soft teddy bear.','男孩给他软软的小熊做检查。','feel','soft'],
    ['warm','/wɔːrm/','暖和的','My scarf is warm.','我的围巾很暖和。','feel','e:🧣'],
    ['hot','/hɑːt/','热的','The soup is hot.','汤很烫。','feel','e:🔥'],
    ['sticky','/ˈstɪki/','黏的','Honey is sticky.','蜂蜜黏黏的。','feel','e:🍯'],
    ['loud','/laʊd/','大声的','The dog is loud.','这只狗叫得很响。','feel','e:📢'],
    ['slow','/sloʊ/','慢的','The dog is slow.','这只狗走得很慢。','feel','slow'],
    ['crisp','/krɪsp/','脆的','The apple is crisp.','苹果脆脆的。','taste','e:🍏'],
    ['crunchy','/ˈkrʌntʃi/','嘎嘣脆的','Carrots are crunchy.','胡萝卜嚼起来嘎嘣脆。','taste','e:🥕'],
    ['bitter','/ˈbɪtər/','苦的','The medicine tastes bitter.','药是苦的。','taste','e:💊'],
    ['sour','/ˈsaʊər/','酸的','The lemon is sour.','柠檬是酸的。','taste','sour'],
    ['sweet','/swiːt/','甜的','I like sweet apple juice.','我喜欢甜甜的苹果汁。','taste','sweet'],
    ['delicious','/dɪˈlɪʃəs/','好吃的','The pizza is delicious.','披萨很好吃。','taste','e:😋'],
    ['helpful','/ˈhelpfəl/','乐于助人的','The doctor is helpful.','医生很乐于助人。','more','e:🤝'],
    ['beautiful','/ˈbjuːtɪfəl/','美丽的','My sister is beautiful.','我姐姐很漂亮。','more','e:🌸'],
    ['cool','/kuːl/','酷的','This park is cool.','这个公园真酷。','more','e:😎']
  ],
  board:null,
  groups:[
    {title:'Circle the noun, find the adjective 圈名词、找形容词',tone:'look',lines:[
      ['This is a red balloon.','red 描述 balloon'],
      ['The short boy.','short 描述 boy'],
      ['The doctor is helpful.','helpful 描述 doctor'],
      ['He works at the big hospital.','big 描述 hospital'],
      ['The nurse has a white notepad.','white 描述 notepad'],
      ['The hospital has three floors.','three 描述 floors'],
      ['The windows are square.','square 描述 windows']]},
    {title:'The teddy bear goes to the doctor 小熊看病',tone:'taste',lines:[
      ['The boy pretends to check his soft teddy bear.','男孩假装给他软软的小熊做检查。'],
      ['The teddy bear is brown.','小熊是棕色的。'],
      ['He puts a large band aid on the teddy bear.','他给小熊贴了一块大大的创可贴。'],
      ['The bear cries when he gets a small shot.','小熊打了一小针，哭了。'],
      ['The medicine tastes bitter.','药是苦的。']]},
    {title:'Ask: What kind? 问一问是什么样',tone:'idea',lines:[
      ['Adjectives tell color, size, feeling, or taste.','形容词说的是颜色、大小、感觉或味道。'],
      ['The puppy is brown.','brown 多告诉我们一点小狗的样子'],
      ['My sister is beautiful.','beautiful 描述 sister'],
      ['This park is cool.','cool 描述 park'],
      ['The lemon is sour.','sour 描述 lemon'],
      ['The dog is slow.','slow 描述 dog']]},
    {title:'Foods we like 说说吃的',tone:'food',lines:[
      ['The apple is crisp.','苹果脆脆的。'],
      ['My milk is white.','我的牛奶是白色的。'],
      ['I like sweet apple juice.','我喜欢甜甜的苹果汁。']]}
  ],
  think:[
    ['Which word is the adjective? The puppy is brown.','哪个词是形容词？','Brown is the adjective. It tells us more about the puppy.','brown 是形容词，它多告诉我们一点小狗的样子。'],
    ['Is pretend an adjective?','pretend 是形容词吗？','No. Pretend is a verb. It is an action.','不是。pretend 是动词，表示动作。'],
    ['How does the medicine taste?','药是什么味道？','The medicine tastes bitter.','药是苦的。'],
    ['What kind of apple do you like?','你喜欢什么样的苹果？','I like a red, crisp apple.','我喜欢又红又脆的苹果。']
  ],
  photos:[
    {src:'img/identifying-adjectives-board.jpg',caption:'Grammar · Identifying Adjectives：圈出名词，划出形容词'},
    {src:'img/adjectives-what-kind-board.jpg',caption:'Grammar · Adjectives，Ask: What kind? 两队比赛写形容词'}
  ],
  notes:[
    {title:'GRAMMAR – IDENTIFYING ADJECTIVES',text:`📚 Topic: Adjectives and Describing Words

We continued reviewing adjectives and how they describe nouns. The children identified adjectives in sentences and explained what each describing word tells us.

📘 Key Vocabulary:

1. Adjective: A word describing a noun.
2. Noun: A word naming a person, place, animal or thing.
3. Crisp: Firm and crunchy when bitten.
4. Sour: Having a sharp taste, like a lemon.
5. Delicious: Having a pleasant taste.

📝 Sentence Practice:

1. "The apple is crisp." The adjective "crisp" describes how the apple feels when bitten.
2. "My milk is white." The adjective "white" describes the colour of the milk.
3. "I like sweet apple juice." The adjective "sweet" describes the taste of the juice.

The children also identified adjectives such as crunchy, brown, soft, hot and delicious. This practice helps them describe familiar foods, clothes and objects more clearly.`}
  ],
  note:'板书照片右上角的同学名单和星星已打码。板书上的手写笔误（Gramma、helpfal、The medicine taste）在句子组里按规范写法给出。板书红字里的 pretend 是动词，老师故意混进形容词里让孩子分辨，所以没放进词卡。'
},
{
  id:'kind-many',tab:'什么样·有多少',no:'06',subject:'Grammar',
  title:'What kind or how many?',zh:'是什么样，还是有多少',
  lead:'形容词能回答两种问题。What kind? 问是什么样：颜色、大小、形状、感觉。How many? 问有多少：数字和数量词。',
  source:'依据 Grammar 板书 What Kind or How many? 整理，包括左边两组例句、右边的分类练习和底下的词卡。',
  headSents:['What kind or how many?','What kind? describes. How many? counts.'],
  cats:[{k:'kind',n:'什么样',bg:'#E6F1FB'},{k:'many',n:'有多少',bg:'#FFF1D6'},{k:'thing',n:'说的是谁',bg:'#EAF3DE'}],
  words:[
    ['big','/bɪɡ/','大的','A big elephant.','一头大象。','kind','big'],
    ['small','/smɔːl/','小的','A small mouse.','一只小老鼠。','kind','e:🐜'],
    ['tall','/tɔːl/','高的','A tall tree.','一棵高高的树。','kind','e:🦒'],
    ['huge','/hjuːdʒ/','巨大的','A huge elephant.','一头巨大的大象。','kind','e:🦕'],
    ['warm','/wɔːrm/','暖和的','Warm mittens.','暖和的手套。','kind','e:🧣'],
    ['loud','/laʊd/','大声的','A loud dog.','一只叫得很响的狗。','kind','e:📢'],
    ['brown','/braʊn/','棕色的','A brown log.','一根棕色的木头。','kind','brown'],
    ['one','/wʌn/','一','One worm.','一条虫子。','many','t:1'],
    ['two','/tuː/','二','Two scoops.','两个冰淇淋球。','many','t:2'],
    ['three','/θriː/','三','Three eggs.','三个鸡蛋。','many','t:3'],
    ['four','/fɔːr/','四','Four pencils.','四支铅笔。','many','t:4'],
    ['five','/faɪv/','五','I have five bananas.','我有五根香蕉。','many','t:5'],
    ['six','/sɪks/','六','We have six books.','我们有六本书。','many','t:6'],
    ['seven','/ˈsevən/','七','She has seven fingers.','她有七根手指。','many','t:7'],
    ['some','/sʌm/','一些','Some apples.','一些苹果。','many','e:🍬🍬🍬'],
    ['many','/ˈmeni/','很多','Many stars.','很多星星。','many','e:✨✨✨✨'],
    ['elephant','/ˈelɪfənt/','大象','A big elephant.','一头大象。','thing','e:🐘'],
    ['mouse','/maʊs/','老鼠','A small mouse.','一只小老鼠。','thing','e:🐭'],
    ['tree','/triː/','树','A tall tree.','一棵高高的树。','thing','e:🌳'],
    ['banana','/bəˈnænə/','香蕉','I have five bananas.','我有五根香蕉。','thing','e:🍌'],
    ['egg','/eɡ/','鸡蛋','Three eggs.','三个鸡蛋。','thing','e:🥚'],
    ['mittens','/ˈmɪtənz/','连指手套','Warm mittens.','暖和的手套。','thing','e:🧤'],
    ['worm','/wɜːrm/','虫子','One worm.','一条虫子。','thing','e:🪱'],
    ['scoop','/skuːp/','一勺，一球','Two scoops.','两个冰淇淋球。','thing','e:🍨']
  ],
  board:null,
  groups:[
    {title:'What kind? 是什么样',tone:'idea',lines:[
      ['What kind? Answers: color, size, shape, feeling.','什么样：回答颜色、大小、形状、感觉。'],
      ['A big elephant.','一头大象。'],['A small mouse.','一只小老鼠。'],['A tall tree.','一棵高高的树。'],
      ['A red apple.','一个红苹果。'],['A yellow ball.','一个黄色的球。'],['A soft pillow.','一个软软的枕头。']]},
    {title:'How many? 有多少',tone:'many',lines:[
      ['How many? Answers with numbers or quantity words.','有多少：用数字或者数量词回答。'],
      ['I have five bananas.','我有五根香蕉。'],['Three balloons.','三个气球。'],['We have six books.','我们有六本书。'],
      ['She has seven fingers.','她有七根手指。'],['We have two English teachers.','我们有两位英语老师。'],
      ['Four pencils.','四支铅笔。'],['Many stars.','很多星星。']]},
    {title:'Practice: what kind 练习：什么样',tone:'look',lines:[
      ['Brown log.','棕色的木头'],['Huge elephant.','巨大的大象'],['Warm mittens.','暖和的手套'],['Loud dog.','叫得很响的狗']]},
    {title:'Practice: how many 练习：有多少',tone:'food',lines:[
      ['Two scoops.','两个冰淇淋球'],['Three eggs.','三个鸡蛋'],['Some apples.','一些苹果'],['One worm.','一条虫子']]}
  ],
  think:[
    ['Remember: what kind describes. How many counts.','记住：什么样是描述，有多少是数数。','What kind? describes. How many? counts.','什么样，是在描述；有多少，是在数数。'],
    ['Is two scoops what kind or how many?','two scoops 说的是什么样，还是有多少？','How many. Two is a number.','有多少，two 是数字。'],
    ['Is warm mittens what kind or how many?','warm mittens 呢？','What kind. Warm tells us how the mittens feel.','什么样，warm 说的是手套摸起来暖和。'],
    ['How many fingers do you have?','你有几根手指？','I have ten fingers.','我有十根手指。']
  ],
  photos:[{src:'img/what-kind-how-many-board.jpg',caption:'Grammar · What Kind or How many?'}],
  notes:[],
  note:'板书上的手写笔误（scoop\'s、teakers、some apple）已按规范写法改正。'
},
{
  id:'contractions',tab:'缩写',no:'07',subject:'Grammar',
  title:'Contractions',zh:'缩写：两个词变一个短词',
  lead:'把两个词写成一个短词，少掉的字母用一个撇号（apostrophe，就是那个小小的 \'）代替。词卡上画的是完整写法，读出来的是缩写。',
  source:'依据 Grammar 板书 Contractions 整理：左边的例子、中间的句子和右边的练习题。',
  headSents:['Contractions','Two words become one short word.'],
  cats:[{k:'be',n:'am · is · are',bg:'#E6F1FB'},{k:'will',n:'will',bg:'#EAF3DE'},{k:'not',n:'not',bg:'#FBEAF0'},{k:'idea',n:'语法小词',bg:'#FAEEDA'}],
  words:[
    ["I'm",'/aɪm/','我是（I am）',"I'm happy.",'我很开心。','be','t:I am'],
    ["he's",'/hiːz/','他是（he is）',"He's my friend.",'他是我的朋友。','be','t:he is'],
    ["she's",'/ʃiːz/','她是（she is）',"She's my teacher.",'她是我的老师。','be','t:she is'],
    ["it's",'/ɪts/','它是（it is）',"It's red.",'它是红色的。','be','t:it is'],
    ["they're",'/ðer/','他们是（they are）',"They're here.",'他们在这儿。','be','t:they are'],
    ["you're",'/jʊr/','你是（you are）',"You're my friend.",'你是我的朋友。','be','t:you are'],
    ["we'll",'/wiːl/','我们会（we will）',"We'll play in the park.",'我们会去公园玩。','will','t:we will'],
    ["I'll",'/aɪl/','我会（I will）',"I'll help you.",'我会帮你。','will','t:I will'],
    ["isn't",'/ˈɪzənt/','不是（is not）',"She isn't here.",'她不在这儿。','not','t:is not'],
    ["don't",'/doʊnt/','不要（do not）',"Don't run in the classroom.",'不要在教室里跑。','not','t:do not'],
    ["can't",'/kænt/','不能（cannot）',"I can't find my pencil.",'我找不到我的铅笔。','not','t:cannot'],
    ["didn't",'/ˈdɪdənt/','没有（did not）',"I didn't see the dog.",'我没看见那只狗。','not','t:did not'],
    ["haven't",'/ˈhævənt/','还没有（have not）',"We haven't eaten lunch.",'我们还没吃午饭。','not','t:have not'],
    ['contraction','/kənˈtrækʃən/','缩写','A contraction is a short way of writing two words.','缩写是把两个词写短的办法。','idea','e:✂️'],
    ['apostrophe','/əˈpɑːstrəfi/','撇号','We use an apostrophe to show the missing letters.','撇号表示少掉的字母。','idea',"t:it's"]
  ],
  board:null,
  groups:[
    {title:'The teacher says 老师怎么说',tone:'idea',lines:[
      ['A contraction is a short way of writing two words.','缩写是把两个词写短的办法。'],
      ['We use an apostrophe to show the missing letters.','我们用撇号表示少掉的字母。']]},
    {title:'Examples 板书上的例子',tone:'look',lines:[
      ["I am happy. I'm happy.",'我很开心。'],
      ["He is my friend. He's my friend.",'他是我的朋友。'],
      ["It is red. It's red.",'它是红色的。'],
      ["They are here. They're here.",'他们在这儿。']]},
    {title:'Practice 练一练',tone:'food',lines:[
      ["She is my teacher. She's my teacher.",'她是我的老师。'],
      ["You are my friend. You're my friend.",'你是我的朋友。'],
      ["I will help you. I'll help you.",'我会帮你。'],
      ["We have not eaten lunch. We haven't eaten lunch.",'我们还没吃午饭。'],
      ["She is not here. She isn't here.",'她不在这儿。']]}
  ],
  think:[
    ['What is the short word for I am?','I am 缩写成什么？',"I am becomes I'm.",'I am 变成 I\'m。'],
    ['What is the short word for do not?','do not 缩写成什么？',"Do not becomes don't.",'do not 变成 don\'t。'],
    ['How many words become one short word?','几个词变成一个短词？','Two words become one short word.','两个词变成一个短词。']
  ],
  photos:[{src:'img/contractions-board.jpg',caption:'Grammar · Contractions'}],
  notes:[],
  note:'板书写的是 can not，规范写法是 cannot，缩写都是 can\'t。听音选图时听到缩写，要点出写着完整写法的那张卡。'
},
{
  id:'compass',tab:'指南针·拼写',no:'08',subject:'Spell and Write',
  title:'Compass',zh:'指南针和拼写词',
  lead:'指南针有四个方向：North 北、South 南、West 西、East 东。板书右边的 Word bank 是这次要会拼、会写的词。',
  source:'依据 Spell and Write 板书整理：左边的 Compass 说明、中间的指南针和四周的词，右边的 Word bank。',
  headSents:['Spell and write','A compass helps us find which direction we should go.'],
  cats:[{k:'dir',n:'四个方向',bg:'#E6F1FB'},{k:'bank',n:'Word bank',bg:'#FAEEDA'}],
  words:[
    ['compass','/ˈkʌmpəs/','指南针','A compass has four sides.','指南针有四个方向。','dir','e:🧭'],
    ['north','/nɔːrθ/','北','The arrow points north.','箭头指向北边。','dir','dir-north'],
    ['south','/saʊθ/','南','Birds fly south in winter.','冬天鸟儿往南飞。','dir','dir-south'],
    ['east','/iːst/','东','The sun comes up in the east.','太阳从东边升起。','dir','dir-east'],
    ['west','/west/','西','The sun goes down in the west.','太阳从西边落下。','dir','dir-west'],
    ['letter','/ˈletər/','字母','A, B and C are letters.','A、B、C 都是字母。','bank','e:🔤'],
    ['different','/ˈdɪfərənt/','不一样的','The apple and the banana are different.','苹果和香蕉不一样。','bank','e:🍎🍌'],
    ['pattern','/ˈpætərn/','花纹，图案','The butterfly has a pretty pattern.','蝴蝶身上有漂亮的花纹。','bank','e:🦋'],
    ['middle','/ˈmɪdəl/','中间','The dot is in the middle.','圆点在正中间。','bank','middle'],
    ['Mississippi','/ˌmɪsɪˈsɪpi/','密西西比河','The Mississippi is a long river.','密西西比河是一条很长的河。','bank','e:🛶'],
    ['zipper','/ˈzɪpər/','拉链','My backpack has a zipper.','我的书包有拉链。','bank','zipper'],
    ['carry','/ˈkæri/','拿，搬','Can you carry the box?','你能搬这个箱子吗？','bank','e:📦'],
    ['backpack','/ˈbækpæk/','书包','I carry my backpack to school.','我背着书包去上学。','bank','e:🎒'],
    ['river','/ˈrɪvər/','河','The river is long.','这条河很长。','bank','e:🏞️']
  ],
  board:{title:'Spell and write',zh:'指南针 · 点方向和四周的词听读音，也可以遮住名字考一考',ask:'Spell and write',svg:COMPASS_DIAGRAM,parts:['north','south','west','east','pattern','zipper','letter','Mississippi','backpack']},
  groups:[
    {title:'Compass 指南针',tone:'idea',lines:[
      ['A compass helps us find which direction we should go.','指南针帮我们找到该往哪个方向走。'],
      ['A compass has four sides: north, south, west and east.','指南针有四个方向：北、南、西、东。']]},
    {title:'Spell it 拼一拼（一）',tone:'spell',lines:[
      ['Compass. C-o-m-p-a-s-s.','指南针'],['Letter. L-e-t-t-e-r.','字母'],['Different. D-i-f-f-e-r-e-n-t.','不一样的'],
      ['Pattern. P-a-t-t-e-r-n.','花纹'],['Middle. M-i-d-d-l-e.','中间']]},
    {title:'Spell it 拼一拼（二）',tone:'spell',lines:[
      ['Mississippi. M-i-s-s-i-s-s-i-p-p-i.','密西西比河'],['Zipper. Z-i-p-p-e-r.','拉链'],['Carry. C-a-r-r-y.','拿，搬'],
      ['Backpack. B-a-c-k-p-a-c-k.','书包'],['River. R-i-v-e-r.','河']]}
  ],
  think:[
    ['How many sides does a compass have?','指南针有几个方向？','A compass has four sides: north, south, west and east.','四个：北、南、西、东。'],
    ['Which word is in the north on the board?','板书上北边写的是哪个词？','Pattern is in the north.','北边是 pattern。'],
    ['How do you spell zipper?','zipper 怎么拼？','Z-i-p-p-e-r. Zipper.','Z-i-p-p-e-r。']
  ],
  photos:[{src:'img/compass-board.jpg',caption:'Spell and Write · Compass 和 Word bank'}],
  notes:[],
  note:'板书写的 Missisipi 已按规范拼写改为 Mississippi。拼一拼里的句子会一个字母一个字母地读。'
}
];

window.BOARD_HELPER={svgOf,esc};