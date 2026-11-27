/* 好奇口袋 · 课程数据
   和白板口袋共用同一套页面写法：加一课就在 BOARD_LESSONS 里追加一个对象，
   跑 python3 wonder/tools/make-audio.py 补句子音频，再把 index.html 里 lessons.js?v= 的版本号改一下。
   科普课可以多一个 sort（分一分）：把句子分到对应的类别里。 */

const K='#2C2C2A',D='#444441',GR='#888780',GL='#D3D1C7',R='#E24B4A',RD='#A32D2D',RL='#FCEBEB',B='#378ADD',BD='#185FA5',BL='#E6F1FB',Y='#EF9F27',YD='#BA7517',YL='#FAEEDA',YM='#FAC775',G='#639922',GD='#3B6D11',GLL='#EAF3DE',GM='#97C459',SK='#F5C4B3',BR='#854F0B',PU='#534AB7',PL='#EEEDFE';
const esc=s=>String(s).replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;');
const sticker=(bg,body)=>'<rect x="4" y="4" width="92" height="92" rx="20" fill="'+bg+'"/>'+body;

const ART={
dirty:sticker('#FAEEDA','<path d="M30 22 L20 30 L12 46 L24 52 L28 44 V82 H72 V44 L76 52 L88 46 L80 30 L70 22 Q62 30 50 30 Q38 30 30 22 Z" fill="#fff" stroke="'+GR+'" stroke-width="2.5" stroke-linejoin="round"/><g fill="'+BR+'"><ellipse cx="42" cy="50" rx="7" ry="5"/><ellipse cx="60" cy="64" rx="9" ry="6"/><circle cx="56" cy="44" r="3"/><circle cx="38" cy="70" r="4"/></g>')
};

const graphemes=s=>(typeof Intl!=='undefined'&&Intl.Segmenter)?[...new Intl.Segmenter().segment(s)].length:Array.from(s).length;
const emo=s=>{const n=graphemes(s),fs=n<=1?60:n===2?38:n===3?28:22;return '<text x="50" y="55" font-size="'+fs+'" text-anchor="middle" dominant-baseline="middle" font-family="Apple Color Emoji,Segoe UI Emoji,Noto Color Emoji,sans-serif">'+s+'</text>'};
const svgOf=(w)=>{const k=w.icon||'',body=k.startsWith('e:')?emo(k.slice(2)):(ART[k]||'');return '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">'+body+'</svg>'};

/* 可点板书：四种污染（照着白板上的四个框重画） */
const LB=(w,x,y,wd)=>'<g class="lbl" data-w="'+esc(w)+'"><rect x="'+x+'" y="'+y+'" width="'+wd+'" height="24" rx="12"/><text x="'+(x+wd/2)+'" y="'+(y+16.5)+'" text-anchor="middle">'+w+'</text></g>';
const TTL=(t,x,y,c)=>'<g class="ttl" data-say="'+t+'" data-audio="1"><text x="'+x+'" y="'+y+'" fill="'+c+'">'+t+' ▸</text></g>';
const BOX=(x,y,stroke,fill)=>'<rect x="'+x+'" y="'+y+'" width="172" height="144" rx="16" fill="'+fill+'" stroke="'+stroke+'" stroke-width="2.5" stroke-dasharray="6 4"/>';
const wave=(y)=>'<path d="M196 '+y+' q10 -6 20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0" stroke="'+B+'" stroke-width="2.5" fill="none"/>';
const tuft=(x,y)=>'<path d="M'+x+' '+y+' l3 -12 M'+(x+5)+' '+y+' l1 -15 M'+(x+10)+' '+y+' l-2 -11" stroke="'+G+'" stroke-width="2.5" stroke-linecap="round"/>';
const POLLUTION_DIAGRAM='<svg viewBox="0 0 360 304" xmlns="http://www.w3.org/2000/svg">'
/* 空气污染 */
+BOX(4,4,R,'#FFF7F7')+TTL('Air pollution',16,28,RD)
+'<g class="pt" data-w="smoke"><circle cx="90" cy="54" r="9" fill="#B4B2A9"/><circle cx="104" cy="46" r="11" fill="'+GR+'"/><circle cx="121" cy="42" r="10" fill="#B4B2A9"/><circle cx="136" cy="46" r="8" fill="'+GR+'"/></g>'
+'<g class="pt" data-w="factory"><rect x="72" y="58" width="13" height="36" fill="'+D+'"/><rect x="72" y="66" width="13" height="5" fill="'+R+'"/><rect x="72" y="78" width="13" height="5" fill="'+R+'"/><path d="M22 136 V102 L42 90 V102 L62 90 V102 L82 90 V136 Z" fill="#D3D1C7" stroke="'+D+'" stroke-width="2.5" stroke-linejoin="round"/><rect x="30" y="112" width="10" height="9" fill="#fff" stroke="'+D+'" stroke-width="1.5"/><rect x="48" y="112" width="10" height="9" fill="#fff" stroke="'+D+'" stroke-width="1.5"/><rect x="64" y="112" width="10" height="9" fill="#fff" stroke="'+D+'" stroke-width="1.5"/></g>'
+LB('smoke',112,62,62)+LB('factory',96,112,74)
/* 水污染 */
+BOX(184,4,B,'#F4F9FE')+TTL('Water pollution',196,28,BD)
+wave(50)+wave(132)
+'<g class="pt" data-w="water"><path d="M196 70 q10 -6 20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0" stroke="#8AB8E6" stroke-width="2" fill="none"/></g>'
+'<rect x="204" y="56" width="24" height="11" rx="5" fill="#fff" stroke="'+GR+'" stroke-width="1.5"/><rect x="198" y="59" width="7" height="5" rx="1" fill="'+B+'"/>'
+'<path d="M310 52 h16 l3 14 h-22 Z M313 52 q5 -7 10 0" fill="#fff" stroke="'+GR+'" stroke-width="1.5"/>'
+'<g class="pt" data-w="fish"><ellipse cx="258" cy="94" rx="27" ry="13" fill="#9FC6EA" stroke="'+BD+'" stroke-width="2"/><path d="M284 94 L300 83 V105 Z" fill="#9FC6EA" stroke="'+BD+'" stroke-width="2" stroke-linejoin="round"/><path d="M240 89 l6 6 M246 89 l-6 6" stroke="'+K+'" stroke-width="2"/><path d="M234 101 q4 -3 8 0" stroke="'+K+'" stroke-width="1.6" fill="none"/></g>'
+LB('fish',198,112,50)+LB('water',286,112,62)
/* 土地污染 */
+BOX(4,156,G,'#F6FBF0')+TTL('Land pollution',16,180,GD)
+'<g class="pt" data-w="rubbish"><rect x="112" y="200" width="28" height="38" rx="3" fill="'+GR+'"/><rect x="108" y="194" width="36" height="7" rx="2" fill="'+D+'"/><path d="M120 208 V232 M126 208 V232 M132 208 V232" stroke="#B4B2A9" stroke-width="2"/><rect x="66" y="228" width="26" height="11" rx="5" fill="'+R+'" stroke="'+RD+'" stroke-width="1.5"/><path d="M28 214 l10 -6 l9 5 l5 10 l-9 7 l-12 -2 Z" fill="#fff" stroke="'+GR+'" stroke-width="1.5"/></g>'
+'<g class="pt" data-w="plant">'+tuft(20,258)+tuft(46,256)+tuft(150,256)+'<rect x="14" y="258" width="150" height="3" rx="1.5" fill="'+GM+'"/></g>'
+LB('plant',14,268,56)+LB('rubbish',94,268,74)
/* 噪音污染 */
+BOX(184,156,'#7F77DD','#F8F7FE')+TTL('Noise pollution',196,180,PU)
+'<g class="pt" data-w="honk"><path d="M196 248 V234 L210 222 H244 L256 234 H268 Q274 234 274 240 V248 Z" fill="'+B+'" stroke="'+BD+'" stroke-width="2"/><path d="M214 226 H240 L248 234 H210 Z" fill="'+BL+'"/><circle cx="214" cy="250" r="7" fill="'+K+'"/><circle cx="258" cy="250" r="7" fill="'+K+'"/><path d="M280 226 q6 8 0 16 M287 220 q10 14 0 28" stroke="'+PU+'" stroke-width="2.5" fill="none" stroke-linecap="round"/></g>'
+'<g class="pt" data-w="ear"><circle cx="322" cy="226" r="16" fill="'+SK+'"/><path d="M308 220 q14 -16 28 0" fill="#5F5E5A"/><rect x="301" y="218" width="8" height="16" rx="4" fill="'+SK+'" stroke="#D99A84" stroke-width="1.5"/><rect x="335" y="218" width="8" height="16" rx="4" fill="'+SK+'" stroke="#D99A84" stroke-width="1.5"/><path d="M314 226 l4 2 M330 226 l-4 2" stroke="'+K+'" stroke-width="2" stroke-linecap="round"/><path d="M316 236 q6 -4 12 0" stroke="'+K+'" stroke-width="1.8" fill="none"/></g>'
+LB('noise',196,268,62)+LB('ear',292,268,50)
+'</svg>';

/* 默认打开的课 */
window.BOARD_DEFAULT='pollution';

window.BOARD_LESSONS=[
{
  id:'pollution',tab:'污染',no:'01',date:'',subject:'Nature',
  title:'Pollution',zh:'污染：让地球不开心的东西',
  lead:'工厂的烟、河里的塑料瓶、草地上的垃圾、汽车的喇叭声，都是污染。它们让空气、水和土地变脏，也让我们的地球不开心。',
  source:'依据 Nature 课的白板板书 Pollution 整理：什么是污染、四种污染、污染带来的后果。老师的原始板书放在页面下方，可展开对照。',
  headSents:['Pollution','Pollution makes our earth unhappy.'],
  cats:[
    {k:'idea',n:'认识污染',bg:'#F1EFE8'},
    {k:'air',n:'空气污染',bg:'#FCEBEB'},
    {k:'water',n:'水污染',bg:'#E6F1FB'},
    {k:'land',n:'土地污染',bg:'#EAF3DE'},
    {k:'noise',n:'噪音污染',bg:'#EEEDFE'},
    {k:'harm',n:'带来的问题',bg:'#FAEEDA'}
  ],
  words:[
    ['pollution','/pəˈluːʃən/','污染','Pollution makes our earth unhappy.','污染让地球不开心。','idea','e:🌫️'],
    ['harmful','/ˈhɑːrmfəl/','有害的','Dirty smoke is harmful.','脏烟是有害的。','idea','e:⚠️'],
    ['dirty','/ˈdɜːrti/','脏的','Pollution makes the air dirty.','污染让空气变脏。','idea','dirty'],
    ['unsafe','/ʌnˈseɪf/','不安全的','Dirty water is unsafe.','脏水不安全。','idea','e:🚫'],
    ['clean','/kliːn/','干净的','Fish need clean water.','鱼需要干净的水。','idea','e:🧼'],
    ['earth','/ɜːrθ/','地球','Our earth is unhappy.','我们的地球不开心。','idea','e:🌍'],
    ['air','/er/','空气','We breathe air every day.','我们每天都要呼吸空气。','air','e:🌬️'],
    ['factory','/ˈfæktəri/','工厂','The factory makes shoes, toys and phones.','工厂生产鞋子、玩具和手机。','air','e:🏭'],
    ['smoke','/smoʊk/','烟','Dirty smoke comes out of the factory.','工厂冒出脏脏的烟。','air','e:💨'],
    ['breathe','/briːð/','呼吸','Dirty air is hard to breathe.','脏空气让人很难呼吸。','air','e:😮‍💨'],
    ['water','/ˈwɔːtər/','水','Water pollution makes water dirty.','水污染让水变脏。','water','e:💧'],
    ['fish','/fɪʃ/','鱼','Dirty water hurts the fish.','脏水会伤害小鱼。','water','e:🐟'],
    ['alive','/əˈlaɪv/','活着的','Fish need clean water to stay alive.','鱼要有干净的水才能活下去。','water','e:💓'],
    ['land','/lænd/','土地','Land pollution makes the land dirty.','土地污染让土地变脏。','land','e:🌾'],
    ['rubbish','/ˈrʌbɪʃ/','垃圾','There is rubbish everywhere.','到处都是垃圾。','land','e:🗑️'],
    ['plant','/plænt/','植物','Rubbish is bad for plants.','垃圾对植物不好。','land','e:🌱'],
    ['animal','/ˈænɪməl/','动物','Pollution hurts animals.','污染会伤害动物。','land','e:🐾'],
    ['noise','/nɔɪz/','噪音','Noise disturbs our sleep.','噪音打扰我们睡觉。','noise','e:🔊'],
    ['loud','/laʊd/','很响的','The car is making loud noise.','汽车发出很响的声音。','noise','e:📢'],
    ['honk','/hɑːŋk/','按喇叭','The car is honking.','汽车在按喇叭。','noise','e:🚗📣'],
    ['ear','/ɪr/','耳朵','Too much noise hurts our ears.','太吵会伤到耳朵。','noise','e:👂'],
    ['sleep','/sliːp/','睡觉','I need quiet to sleep.','我睡觉需要安静。','noise','e:😴'],
    ['sick','/sɪk/','生病的','Pollution makes people sick.','污染让人生病。','harm','e:🤒'],
    ['hurt','/hɜːrt/','伤害','Rubbish can hurt animals.','垃圾会伤害动物。','harm','e:🤕'],
    ['die','/daɪ/','死去','Pollution makes plants die.','污染让植物死掉。','harm','e:🥀'],
    ['environment','/ɪnˈvaɪrənmənt/','环境','Pollution dirties our environment.','污染弄脏我们的环境。','harm','e:🏞️']
  ],
  board:{title:'Four kinds of pollution',zh:'四种污染 · 点框上的标题听名字，点画和标签听单词，也可以遮住名字考一考',ask:'Four kinds of pollution',svg:POLLUTION_DIAGRAM,
    say:['Air pollution','Water pollution','Land pollution','Noise pollution'],
    parts:['smoke','factory','fish','water','plant','rubbish','noise','ear']},
  groups:[
    {title:'What is pollution? 什么是污染',tone:'idea',lines:[
      ['Pollution: harmful things that make air, water or land dirty and unsafe.','污染，就是让空气、水或土地变脏、变得不安全的有害东西。'],
      ['Pollution makes our earth unhappy.','污染让我们的地球不开心。']]},
    {title:'Air pollution 空气污染',tone:'air',lines:[
      ['The factory makes shoes, toys and phones.','工厂生产鞋子、玩具和手机。'],
      ['Dirty smoke comes out of the factory.','工厂冒出脏脏的烟。'],
      ['Dirty air is so hard to breathe.','脏空气让人很难呼吸。'],
      ['If we breathe dirty air, we can get sick.','吸了脏空气，我们会生病。']]},
    {title:'Water pollution 水污染',tone:'water',lines:[
      ['Dirty water hurts animals in the water.','脏水会伤害水里的动物。'],
      ['Fish need clean water to stay alive.','鱼要有干净的水才能活下去。']]},
    {title:'Land pollution 土地污染',tone:'land',lines:[
      ['There is rubbish everywhere.','到处都是垃圾。'],
      ['Rubbish is bad for plants and animals.','垃圾对植物和动物都不好。']]},
    {title:'Noise pollution 噪音污染',tone:'noise',lines:[
      ['The car is honking. It is making loud noise.','汽车在按喇叭，声音很响。'],
      ['Too loud hurts our ears.','太响会伤到耳朵。'],
      ['Noise disturbs our sleep.','噪音打扰我们睡觉。']]},
    {title:'What happens because of pollution? 污染带来什么',tone:'harm',lines:[
      ['It makes people sick.','让人生病。'],
      ['It hurts animals.','伤害动物。'],
      ['It makes plants die.','让植物死掉。'],
      ['It dirties our environment.','弄脏我们的环境。']]},
    {title:'How can we help? 我们能做什么（课外延伸）',tone:'help',lines:[
      ['Put rubbish in the bin.','把垃圾扔进垃圾桶。'],
      ['Walk or ride a bike.','走路或者骑自行车，少开车。'],
      ['Keep rivers and seas clean.','不往河里和海里扔东西。'],
      ['Be quiet at night.','晚上小声一点。']]}
  ],
  think:[
    ['What is pollution?','什么是污染？','Pollution is harmful things that make air, water or land dirty.','污染就是让空气、水或土地变脏的有害东西。'],
    ['What happens if we breathe dirty air?','吸了脏空气会怎样？','We can get sick.','我们会生病。'],
    ['Why do fish need clean water?','鱼为什么需要干净的水？','Fish need clean water to stay alive.','鱼要有干净的水才能活下去。'],
    ['Is a honking car air pollution or noise pollution?','一直按喇叭的汽车，是空气污染还是噪音污染？','It is noise pollution. Car smoke is air pollution.','喇叭声是噪音污染，汽车冒的烟是空气污染。'],
    ['What can you do to help our earth?','你能为地球做点什么？','I can put rubbish in the bin.','我可以把垃圾扔进垃圾桶。']
  ],
  sort:{
    ask:'这是哪种污染？听一听，点下面的框',
    bins:[
      {k:'air',n:'空气污染',en:'Air',icon:'💨',say:'It is air pollution.'},
      {k:'water',n:'水污染',en:'Water',icon:'💧',say:'It is water pollution.'},
      {k:'land',n:'土地污染',en:'Land',icon:'🌱',say:'It is land pollution.'},
      {k:'noise',n:'噪音污染',en:'Noise',icon:'🔊',say:'It is noise pollution.'}
    ],
    items:[
      {icon:'🏭',en:'Dirty smoke from a factory.',zh:'工厂冒出的脏烟',bin:'air'},
      {icon:'🚗',en:'Smoke from a car.',zh:'汽车排出的烟',bin:'air',why:'汽车冒的烟弄脏空气；按喇叭的声音才算噪音。'},
      {icon:'🔥',en:'Burning rubbish makes black smoke.',zh:'烧垃圾冒出黑烟',bin:'air',why:'虽然烧的是垃圾，冒出的黑烟弄脏的是空气。'},
      {icon:'🐟',en:'A fish in dirty water.',zh:'脏水里的小鱼',bin:'water'},
      {icon:'🧴',en:'A plastic bottle in the sea.',zh:'海里的塑料瓶',bin:'water'},
      {icon:'🛢️',en:'Oil in the river.',zh:'河里的油',bin:'water'},
      {icon:'🗑️',en:'Rubbish on the grass.',zh:'草地上的垃圾',bin:'land'},
      {icon:'🥫',en:'An old can on the ground.',zh:'地上的旧罐子',bin:'land'},
      {icon:'🍌',en:'Banana skins in the park.',zh:'公园里乱扔的香蕉皮',bin:'land'},
      {icon:'📣',en:'The car is honking.',zh:'汽车一直按喇叭',bin:'noise'},
      {icon:'🎶',en:'Very loud music at night.',zh:'晚上放很响的音乐',bin:'noise'},
      {icon:'🚧',en:'Loud machines on the road.',zh:'马路上轰隆隆的机器',bin:'noise'}
    ]
  },
  photos:[{src:'img/pollution-board.jpg',caption:'Nature · Pollution：四种污染和它们带来的后果'}],
  notes:[],
  note:'板书上的手写笔误已按规范写法改正：breath 改为 breathe，hanking 改为 honking，making land noise 改为 making loud noise，noise disturb 改为 noise disturbs，boxies 改为 boxes。工厂产品清单里有一项看着像 school，没能确认是什么，句子里没收。「分一分」里烧垃圾、油污、施工机器等例子是为了练习补充的，不在板书上。'
}
];

window.BOARD_HELPER={svgOf,esc};
