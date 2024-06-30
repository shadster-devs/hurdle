exports.id=112,exports.ids=[112],exports.modules={9952:e=>{e.exports={"settings-modal":"Settings_settings-modal__McENi","settings-modal-top-bar":"Settings_settings-modal-top-bar__XzZ2c","settings-modal-title":"Settings_settings-modal-title__kPWVZ","settings-list":"Settings_settings-list__EOnE8",setting:"Settings_setting__xn07j","setting-name":"Settings_setting-name__3LUBQ","setting-input-dropdown":"Settings_setting-input-dropdown__rl1Nc","setting-input-checkbox":"Settings_setting-input-checkbox__o3uZh","settings-modal-button-container":"Settings_settings-modal-button-container__xnv46","settings-modal-button":"Settings_settings-modal-button__OkQwH",backdrop:"Settings_backdrop__x0D30","settings-modal-close-button":"Settings_settings-modal-close-button__IF9_z"}},6656:e=>{e.exports={toast:"Toast_toast__Lgdrn","toast-success":"Toast_toast-success__QCDVI","toast-error":"Toast_toast-error__9wzpp","toast-info":"Toast_toast-info__eZB8W","toast-warning":"Toast_toast-warning__YKxqt","toast-s":"Toast_toast-s__xDi3B","toast-m":"Toast_toast-m__3zDKV","toast-l":"Toast_toast-l__dpWCA","toast-container":"Toast_toast-container__kfstM","toast-close-button":"Toast_toast-close-button__uiBkQ","close-icon":"Toast_close-icon__3eXHe"}},1961:(e,t,a)=>{"use strict";a.d(t,{G:()=>h,U:()=>p});var r=a(997),s=a(6689),o=a.n(s),i=a(595),l=a(2143),n=a(5936),c=a(1890),u=a(3002);let d=(0,s.createContext)(void 0),h=()=>{let e=(0,s.useContext)(d);if(!e)throw Error("useGame must be used within a GameProvider");return e},p=({children:e})=>{let{settings:t}=(0,l.r)(),[a,s]=o().useState(u.id[t.difficulty]);o().useEffect(()=>{s(u.id[t.difficulty])},[t.difficulty]);let{addToast:h}=(0,c.p)(),[p,m]=o().useState((0,i.Um)()),[y,g]=o().useState((0,i.b9)()),[b,f]=o().useState(0),[w,k]=o().useState(0),[v,x]=o().useState(u.XI.Started),[j,_]=o().useState(!1),[S,z]=o().useState((0,i.Fs)()),[T,E]=o().useState(a.timeLimit),[C,q]=o().useState(T),[B,N]=o().useState(u.RS);o().useEffect(()=>{q(T)},[T]),o().useEffect(()=>{C<=0&&0!==T&&x(u.XI.TimeUp)},[C]),o().useEffect(()=>{v===u.XI.Won||v===u.XI.TimeUp||v===u.XI.Lost?(_(!0),f(0),k(0)):_(!1)},[v]);let F=e=>{let t=u.RS;e.forEach(e=>{let a=u.oM[e];a&&(t={...t,[a]:!0})}),N(t)};o().useEffect(()=>{F(a.features),E(a.timeLimit),U()},[a]);let U=()=>{m((0,i.Um)()),g((0,i.b9)()),z((0,i.Fs)()),x(u.XI.Started),k(0),f(0),q(T)};return o().useEffect(()=>{let e={...S};y.forEach(t=>{t.forEach(t=>{"empty"!==t.status&&(e[t.letter]=t.status)})}),z(e)},[y]),r.jsx(d.Provider,{value:{config:a,targetWord:p,board:y,handleBoardKeyPress:e=>{if(v===u.XI.Started){if(e.key>="a"&&e.key<="z"){if(w<5){let t=[...y];t[b][w]={letter:e.key,status:"empty"},g(t),k(w+1)}}else if("Backspace"===e.key){if(w>0){let e=[...y];e[b][w-1]={letter:"",status:u.z3.EMPTY},g(e),k(w-1)}}else if("Enter"===e.key&&5===w){let e=[...y],t=e[b].map(e=>e.letter).join("");if(!n.Z.includes(t)){h("Please enter a valid word!","error","m");return}for(let a=0;a<5;a++)t[a]===p[a]?e[b][a].status=u.z3.CORRECT:p.includes(t[a])?e[b][a].status=u.z3.PRESENT:e[b][a].status=u.z3.ABSENT;g(e),f(b+1),k(0),t===p?(x(u.XI.Won),k(0),f(0)):5===b&&(x(u.XI.Lost),k(0),f(0))}}},keyBoardData:S,featureState:B,currentGameStatus:v,isGameOver:j,setIsGameOver:_,timeLeft:C,setTimeLeft:q,giveUp:()=>{x(u.XI.Lost)},resetGame:U},children:e})}},2143:(e,t,a)=>{"use strict";a.d(t,{m:()=>n,r:()=>l});var r=a(997),s=a(6689),o=a(595);let i=(0,s.createContext)(void 0),l=()=>{let e=(0,s.useContext)(i);if(!e)throw Error("useSettings must be used within a SettingsProvider");return e},n=({children:e})=>{let[t,a]=(0,s.useState)((0,o.Ok)()),[l,n]=(0,s.useState)(!1);return r.jsx(i.Provider,{value:{settings:t,updateSettings:e=>{a(t=>({...t,...e}))},isSettingsOpen:l,closeSettings:()=>n(!1),openSettings:()=>n(!0),resetSettings:()=>a((0,o.Ok)())},children:e})}},1890:(e,t,a)=>{"use strict";a.d(t,{V:()=>l,p:()=>i});var r=a(997),s=a(6689);let o=(0,s.createContext)(void 0),i=()=>{let e=(0,s.useContext)(o);if(!e)throw Error("useToast must be used within a ToastProvider");return e},l=({children:e})=>{let[t,a]=(0,s.useState)([]),i=e=>{a(t=>t.filter(t=>t.id!==e))};return r.jsx(o.Provider,{value:{addToast:(e,r,s="m")=>{let o=Math.random().toString(36).substring(7);a([...t,{id:o,message:e,type:r,size:s}]),setTimeout(()=>i(o),3e3)},removeToast:i,toasts:t},children:e})}},3112:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>k});var r,s=a(997);a(6961);var o=a(1890),i=a(6689),l=a.n(i),n=a(6656),c=a.n(n);function u(){return(u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)({}).hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(null,arguments)}let d=function(e){return i.createElement("svg",u({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",viewBox:"0 0 19 18"},e),r||(r=i.createElement("path",{stroke:"currentColor",strokeLinecap:"square",strokeLinejoin:"round",strokeWidth:1.2,d:"M15 5 5 15M5 5l10 10"})))},h=()=>{let{toasts:e,removeToast:t}=(0,o.p)();return s.jsx("div",{className:c()["toast-container"],children:e.map(e=>(0,s.jsxs)("div",{className:`${c().toast} ${c()[`toast-${e.type}`]} ${c()[`toast-${e.size}`]}`,children:[e.message,s.jsx("button",{className:c()["toast-close-button"],onClick:()=>t(e.id),children:s.jsx(d,{})})]},e.id))})};var p=a(2143),m=a(9952),y=a.n(m),g=a(3002);let b=e=>{let{settings:t,updateSettings:a,closeSettings:r,isSettingsOpen:o,resetSettings:i}=(0,p.r)(),[n,c]=l().useState(t);if(!o)return null;let u=(e,t)=>{let a="checkbox"===e.target.type?e.target.checked:e.target.value;c({...n,[t]:a})};return s.jsx("div",{className:y().backdrop,children:(0,s.jsxs)("div",{className:y()["settings-modal"],children:[(0,s.jsxs)("div",{className:y()["settings-modal-top-bar"],children:[s.jsx("div",{className:y()["settings-modal-title"],children:"Settings"}),s.jsx("button",{className:y()["settings-modal-close-button"],onClick:r,children:s.jsx(d,{})})]}),(0,s.jsxs)("div",{className:y()["settings-list"],children:[(0,s.jsxs)("div",{className:y().setting,children:[s.jsx("div",{className:y()["setting-name"],children:"Change Theme"}),s.jsx("select",{className:y()["setting-input-dropdown"],value:n.theme,onChange:e=>u(e,"theme"),children:g.np.map(e=>s.jsx("option",{value:e,children:e.charAt(0).toUpperCase()+e.slice(1)},e))})]}),(0,s.jsxs)("div",{className:y().setting,children:[s.jsx("div",{className:y()["setting-name"],children:"Change Difficulty"}),s.jsx("select",{className:y()["setting-input-dropdown"],value:n.difficulty,onChange:e=>u(e,"difficulty"),children:g.l9.map(e=>s.jsx("option",{value:e,children:e.charAt(0).toUpperCase()+e.slice(1)},e))})]}),(0,s.jsxs)("div",{className:y().setting,children:[s.jsx("div",{className:y()["setting-name"],children:"Turn on animation?"}),s.jsx("input",{type:"checkbox",className:y()["setting-input-checkbox"],checked:n.animation,onChange:e=>u(e,"animation")})]})]}),(0,s.jsxs)("div",{className:y()["settings-modal-button-container"],children:[s.jsx("button",{className:y()["settings-modal-button"],onClick:()=>{a(n),r()},children:"Save"}),s.jsx("button",{className:y()["settings-modal-button"],onClick:i,children:"Cancel"})]})]})})},f=({children:e})=>{let{settings:t}=(0,p.r)();return s.jsx("div",{className:"dark"===t.theme?"dark-theme":"light-theme",children:e})};var w=a(1961);function k({Component:e,pageProps:t}){return s.jsx(o.V,{children:s.jsx(p.m,{children:s.jsx(w.U,{children:(0,s.jsxs)(f,{children:[s.jsx(e,{...t}),s.jsx(h,{}),s.jsx(b,{})]})})})})}},3002:(e,t,a)=>{"use strict";var r,s;a.d(t,{RS:()=>n,XI:()=>r,id:()=>u,l9:()=>c,np:()=>o,oM:()=>l,sg:()=>i,z3:()=>s});let o=["light","dark"];(function(e){e.Started="started",e.Won="won",e.Lost="lost",e.TimeUp="time-up",e.Waiting="waiting"})(r||(r={})),function(e){e.PRESENT="present",e.CORRECT="correct",e.ABSENT="absent",e.EMPTY="empty"}(s||(s={}));let i={present:"orange",correct:"green",absent:"red",empty:"grey"},l={countDown:"showCountDown",keyBoard:"showKeyBoard",wordleTitle:"showWordleTitle",timer:"showTimer",flyingTiles:"isFlyingTiles",giveUpButton:"showGiveUpButton",pulsingEffect:"showPulsingEffect",blurredTiles:"isBlurredTiles"},n={showCountDown:!1,showKeyBoard:!1,showWordleTitle:!1,showTimer:!1,isFlyingTiles:!1,showGiveUpButton:!1,showPulsingEffect:!1,isBlurredTiles:!1},c=["easy","normal","hard","nightmare","hell"],u={easy:{features:["wordleTitle","keyBoard","giveUpButton"],allowedTileColors:["present","absent","empty","correct"],timeLimit:0,timerWarningStartFrom:0,countDownStartFrom:0,giveUpButtonAppearFrom:0,pulsingEffectStartFrom:0},normal:{features:["keyBoard","wordleTitle","timer","giveUpButton"],allowedTileColors:["present","absent","empty","correct"],timeLimit:18e4,timerWarningStartFrom:3e4,countDownStartFrom:0,giveUpButtonAppearFrom:6e4,pulsingEffectStartFrom:0},hard:{features:["timer","wordleTitle","giveUpButton"],timeLimit:6e4,allowedTileColors:["present","empty","correct"],timerWarningStartFrom:15e3,countDownStartFrom:0,giveUpButtonAppearFrom:3e4,pulsingEffectStartFrom:0},nightmare:{features:["timer","giveUpButton","blurredTiles","pulsingEffect"],allowedTileColors:["present","empty","correct"],timeLimit:3e4,timerWarningStartFrom:15e3,countDownStartFrom:0,giveUpButtonAppearFrom:1e4,pulsingEffectStartFrom:1e4},hell:{features:["countDown","timer","flyingTiles","pulsingEffect","blurredTiles","giveUpButton"],allowedTileColors:["present","empty","correct"],timeLimit:3e4,timerWarningStartFrom:3e4,countDownStartFrom:1e4,giveUpButtonAppearFrom:1e4,pulsingEffectStartFrom:15e3}}},595:(e,t,a)=>{"use strict";a.d(t,{Fs:()=>c,Ok:()=>u,Sg:()=>o,Um:()=>l,b9:()=>n,vQ:()=>i});var r=a(5936),s=a(3002);let o=e=>e.map(e=>e.map(e=>{switch(e.status){case s.z3.CORRECT:return`🟩`;case s.z3.PRESENT:return`🟧`;case s.z3.ABSENT:return`🟥`;default:return""}}).join("")).join("\n"),i=e=>{let t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)},l=()=>r.Z[Math.floor(Math.random()*r.Z.length)],n=()=>Array(6).fill("").map(()=>[,,,,,].fill({letter:"",status:s.z3.EMPTY})),c=()=>Array.from({length:26},(e,t)=>String.fromCharCode(97+t).toLowerCase()).reduce((e,t)=>(e[t]=s.z3.EMPTY,e),{}),u=()=>({theme:"dark",animation:!0,difficulty:"normal"})},5936:(e,t,a)=>{"use strict";a.d(t,{Z:()=>r});let r=["cigar","rebut","sissy","humph","awake","blush","focal","evade","naval","serve","heath","dwarf","model","karma","stink","grade","quiet","bench","abate","feign","major","death","fresh","crust","stool","colon","abase","marry","react","batty","pride","floss","helix","croak","staff","paper","unfed","whelp","trawl","outdo","adobe","crazy","sower","repay","digit","crate","cluck","spike","mimic","pound","maxim","linen","unmet","flesh","booby","forth","first","stand","belly","ivory","seedy","print","yearn","drain","bribe","stout","panel","crass","flume","offal","agree","error","swirl","argue","bleed","delta","flick","totem","wooer","front","shrub","parry","biome","lapel","start","greet","goner","golem","lusty","loopy","round","audit","lying","gamma","labor","islet","civic","forge","corny","moult","basic","salad","agate","spicy","spray","essay","fjord","spend","kebab","guild","aback","motor","alone","hatch","hyper","thumb","dowry","ought","belch","dutch","pilot","tweed","comet","jaunt","enema","steed","abyss","growl","fling","dozen","boozy","erode","world","gouge","click","briar","great","altar","pulpy","blurt","coast","duchy","groin","fixer","group","rogue","badly","smart","pithy","gaudy","chill","heron","vodka","finer","surer","radio","rouge","perch","retch","wrote","clock","tilde","store","prove","bring","solve","cheat","grime","exult","usher","epoch","triad","break","rhino","viral","conic","masse","sonic","vital","trace","using","peach","champ","baton","brake","pluck","craze","gripe","weary","picky","acute","ferry","aside","tapir","troll","unify","rebus","boost","truss","siege","tiger","banal","slump","crank","gorge","query","drink","favor","abbey","tangy","panic","solar","shire","proxy","point","robot","prick","wince","crimp","knoll","sugar","whack","mount","perky","could","wrung","light","those","moist","shard","pleat","aloft","skill","elder","frame","humor","pause","ulcer","ultra","robin","cynic","agora","aroma","caulk","shake","pupal","dodge","swill","tacit","other","thorn","trove","bloke","vivid","spill","chant","choke","rupee","nasty","mourn","ahead","brine","cloth","hoard","sweet","month","lapse","watch","today","focus","smelt","tease","cater","movie","lynch","saute","allow","renew","their","slosh","purge","chest","depot","epoxy","nymph","found","shall","harry","stove","lowly","snout","trope","fewer","shawl","natal","fibre","comma","foray","scare","stair","black","squad","royal","chunk","mince","slave","shame","cheek","ample","flair","foyer","cargo","oxide","plant","olive","inert","askew","heist","shown","zesty","hasty","trash","fella","larva","forgo","story","hairy","train","homer","badge","midst","canny","fetus","butch","farce","slung","tipsy","metal","yield","delve","being","scour","glass","gamer","scrap","money","hinge","album","vouch","asset","tiara","crept","bayou","atoll","manor","creak","showy","phase","froth","depth","gloom","flood","trait","girth","piety","payer","goose","float","donor","atone","primo","apron","blown","cacao","loser","input","gloat","awful","brink","smite","beady","rusty","retro","droll","gawky","hutch","pinto","gaily","egret","lilac","sever","field","fluff","hydro","flack","agape","wench","voice","stead","stalk","berth","madam","night","bland","liver","wedge","augur","roomy","wacky","flock","angry","bobby","trite","aphid","tryst","midge","power","elope","cinch","motto","stomp","upset","bluff","cramp","quart","coyly","youth","rhyme","buggy","alien","smear","unfit","patty","cling","glean","label","hunky","khaki","poker","gruel","twice","twang","shrug","treat","unlit","waste","merit","woven","octal","needy","clown","widow","irony","ruder","gauze","chief","onset","prize","fungi","charm","gully","inter","whoop","taunt","leery","class","theme","lofty","tibia","booze","alpha","thyme","eclat","doubt","parer","chute","stick","trice","alike","sooth","recap","saint","liege","glory","grate","admit","brisk","soggy","usurp","scald","scorn","leave","twine","sting","bough","marsh","sloth","dandy","vigor","howdy","enjoy","valid","ionic","equal","unset","floor","catch","spade","stein","exist","quirk","denim","grove","spiel","mummy","fault","foggy","flout","carry","sneak","libel","waltz","aptly","piney","inept","aloud","photo","dream","stale","vomit","ombre","fanny","unite","snarl","baker","there","glyph","pooch","hippy","spell","folly","louse","gulch","vault","godly","threw","fleet","grave","inane","shock","crave","spite","valve","skimp","claim","rainy","musty","pique","daddy","quasi","arise","aging","valet","opium","avert","stuck","recut","mulch","genre","plume","rifle","count","incur","total","wrest","mocha","deter","study","lover","safer","rivet","funny","smoke","mound","undue","sedan","pagan","swine","guile","gusty","equip","tough","canoe","chaos","covet","human","udder","lunch","blast","stray","manga","melee","lefty","quick","paste","given","octet","risen","groan","leaky","grind","carve","loose","sadly","spilt","apple","slack","honey","final","sheen","eerie","minty","slick","derby","wharf","spelt","coach","erupt","singe","price","spawn","fairy","jiffy","filmy","stack","chose","sleep","ardor","nanny","niece","woozy","handy","grace","ditto","stank","cream","usual","diode","valor","angle","ninja","muddy","chase","reply","prone","spoil","heart","shade","diner","arson","onion","sleet","dowel","couch","palsy","bowel","smile","evoke","creek","lance","eagle","idiot","siren","built","embed","award","dross","annul","goody","frown","patio","laden","humid","elite","lymph","edify","might","reset","visit","gusto","purse","vapor","crock","write","sunny","loath","chaff","slide","queer","venom","stamp","sorry","still","acorn","aping","pushy","tamer","hater","mania","awoke","brawn","swift","exile","birch","lucky","freer","risky","ghost","plier","lunar","winch","snare","nurse","house","borax","nicer","lurch","exalt","about","savvy","toxin","tunic","pried","inlay","chump","lanky","cress","eater","elude","cycle","kitty","boule","moron","tenet","place","lobby","plush","vigil","index","blink","clung","qualm","croup","clink","juicy","stage","decay","nerve","flier","shaft","crook","clean","china","ridge","vowel","gnome","snuck","icing","spiny","rigor","snail","flown","rabid","prose","thank","poppy","budge","fiber","moldy","dowdy","kneel","track","caddy","quell","dumpy","paler","swore","rebar","scuba","splat","flyer","horny","mason","doing","ozone","amply","molar","ovary","beset","queue","cliff","magic","truce","sport","fritz","edict","twirl","verse","llama","eaten","range","whisk","hovel","rehab","macaw","sigma","spout","verve","sushi","dying","fetid","brain","buddy","thump","scion","candy","chord","basin","march","crowd","arbor","gayly","musky","stain","dally","bless","bravo","stung","title","ruler","kiosk","blond","ennui","layer","fluid","tatty","score","cutie","zebra","barge","matey","bluer","aider","shook","river","privy","betel","frisk","bongo","begun","azure","weave","genie","sound","glove","braid","scope","wryly","rover","assay","ocean","bloom","irate","later","woken","silky","wreck","dwelt","slate","smack","solid","amaze","hazel","wrist","jolly","globe","flint","rouse","civil","vista","relax","cover","alive","beech","jetty","bliss","vocal","often","dolly","eight","joker","since","event","ensue","shunt","diver","poser","worst","sweep","alley","creed","anime","leafy","bosom","dunce","stare","pudgy","waive","choir","stood","spoke","outgo","delay","bilge","ideal","clasp","seize","hotly","laugh","sieve","block","meant","grape","noose","hardy","shied","drawl","daisy","putty","strut","burnt","tulip","crick","idyll","vixen","furor","geeky","cough","naive","shoal","stork","bathe","aunty","check","prime","brass","outer","furry","razor","elect","evict","imply","demur","quota","haven","cavil","swear","crump","dough","gavel","wagon","salon","nudge","harem","pitch","sworn","pupil","excel","stony","cabin","unzip","queen","trout","polyp","earth","storm","until","taper","enter","child","adopt","minor","fatty","husky","brave","filet","slime","glint","tread","steal","regal","guest","every","murky","share","spore","hoist","buxom","inner","otter","dimly","level","sumac","donut","stilt","arena","sheet","scrub","fancy","slimy","pearl","silly","porch","dingo","sepia","amble","shady","bread","friar","reign","dairy","quill","cross","brood","tuber","shear","posit","blank","villa","shank","piggy","freak","which","among","fecal","shell","would","algae","large","rabbi","agony","amuse","bushy","copse","swoon","knife","pouch","ascot","plane","crown","urban","snide","relay","abide","viola","rajah","straw","dilly","crash","amass","third","trick","tutor","woody","blurb","grief","disco","where","sassy","beach","sauna","comic","clued","creep","caste","graze","snuff","frock","gonad","drunk","prong","lurid","steel","halve","buyer","vinyl","utile","smell","adage","worry","tasty","local","trade","finch","ashen","modal","gaunt","clove","enact","adorn","roast","speck","sheik","missy","grunt","snoop","party","touch","mafia","emcee","array","south","vapid","jelly","skulk","angst","tubal","lower","crest","sweat","cyber","adore","tardy","swami","notch","groom","roach","hitch","young","align","ready","frond","strap","puree","realm","venue","swarm","offer","seven","dryer","diary","dryly","drank","acrid","heady","theta","junto","pixie","quoth","bonus","shalt","penne","amend","datum","build","piano","shelf","lodge","suing","rearm","coral","ramen","worth","psalm","infer","overt","mayor","ovoid","glide","usage","poise","randy","chuck","prank","fishy","tooth","ether","drove","idler","swath","stint","while","begat","apply","slang","tarot","radar","credo","aware","canon","shift","timer","bylaw","serum","three","steak","iliac","shirk","blunt","puppy","penal","joist","bunny","shape","beget","wheel","adept","stunt","stole","topaz","chore","fluke","afoot","bloat","bully","dense","caper","sneer","boxer","jumbo","lunge","space","avail","short","slurp","loyal","flirt","pizza","conch","tempo","droop","plate","bible","plunk","afoul","savoy","steep","agile","stake","dwell","knave","beard","arose","motif","smash","broil","glare","shove","baggy","mammy","swamp","along","rugby","wager","quack","squat","snaky","debit","mange","skate","ninth","joust","tramp","spurn","medal","micro","rebel","flank","learn","nadir","maple","comfy","remit","gruff","ester","least","mogul","fetch","cause","oaken","aglow","meaty","gaffe","shyly","racer","prowl","thief","stern","poesy","rocky","tweet","waist","spire","grope","havoc","patsy","truly","forty","deity","uncle","swish","giver","preen","bevel","lemur","draft","slope","annoy","lingo","bleak","ditty","curly","cedar","dirge","grown","horde","drool","shuck","crypt","cumin","stock","gravy","locus","wider","breed","quite","chafe","cache","blimp","deign","fiend","logic","cheap","elide","rigid","false","renal","pence","rowdy","shoot","blaze","envoy","posse","brief","never","abort","mouse","mucky","sulky","fiery","media","trunk","yeast","clear","skunk","scalp","bitty","cider","koala","duvet","segue","creme","super","grill","after","owner","ember","reach","nobly","empty","speed","gipsy","recur","smock","dread","merge","burst","kappa","amity","shaky","hover","carol","snort","synod","faint","haunt","flour","chair","detox","shrew","tense","plied","quark","burly","novel","waxen","stoic","jerky","blitz","beefy","lyric","hussy","towel","quilt","below","bingo","wispy","brash","scone","toast","easel","saucy","value","spice","honor","route","sharp","bawdy","radii","skull","phony","issue","lager","swell","urine","gassy","trial","flora","upper","latch","wight","brick","retry","holly","decal","grass","shack","dogma","mover","defer","sober","optic","crier","vying","nomad","flute","hippo","shark","drier","obese","bugle","tawny","chalk","feast","ruddy","pedal","scarf","cruel","bleat","tidal","slush","semen","windy","dusty","sally","igloo","nerdy","jewel","shone","whale","hymen","abuse","fugue","elbow","crumb","pansy","welsh","syrup","terse","suave","gamut","swung","drake","freed","afire","shirt","grout","oddly","tithe","plaid","dummy","broom","blind","torch","enemy","again","tying","pesky","alter","gazer","noble","ethos","bride","extol","decor","hobby","beast","idiom","utter","these","sixth","alarm","erase","elegy","spunk","piper","scaly","scold","hefty","chick","sooty","canal","whiny","slash","quake","joint","swept","prude","heavy","wield","femme","lasso","maize","shale","screw","spree","smoky","whiff","scent","glade","spent","prism","stoke","riper","orbit","cocoa","guilt","humus","shush","table","smirk","wrong","noisy","alert","shiny","elate","resin","whole","hunch","pixel","polar","hotel","sword","cleat","mango","rumba","puffy","filly","billy","leash","clout","dance","ovate","facet","chili","paint","liner","curio","salty","audio","snake","fable","cloak","navel","spurt","pesto","balmy","flash","unwed","early","churn","weedy","stump","lease","witty","wimpy","spoof","saner","blend","salsa","thick","warty","manic","blare","squib","spoon","probe","crepe","knack","force","debut","order","haste","teeth","agent","widen","icily","slice","ingot","clash","juror","blood","abode","throw","unity","pivot","slept","troop","spare","sewer","parse","morph","cacti","tacky","spool","demon","moody","annex","begin","fuzzy","patch","water","lumpy","admin","omega","limit","tabby","macho","aisle","skiff","basis","plank","verge","botch","crawl","lousy","slain","cubic","raise","wrack","guide","foist","cameo","under","actor","revue","fraud","harpy","scoop","climb","refer","olden","clerk","debar","tally","ethic","cairn","tulle","ghoul","hilly","crude","apart","scale","older","plain","sperm","briny","abbot","rerun","quest","crisp","bound","befit","drawn","suite","itchy","cheer","bagel","guess","broad","axiom","chard","caput","leant","harsh","curse","proud","swing","opine","taste","lupus","gumbo","miner","green","chasm","lipid","topic","armor","brush","crane","mural","abled","habit","bossy","maker","dusky","dizzy","lithe","brook","jazzy","fifty","sense","giant","surly","legal","fatal","flunk","began","prune","small","slant","scoff","torus","ninny","covey","viper","taken","moral","vogue","owing","token","entry","booth","voter","chide","elfin","ebony","neigh","minim","melon","kneed","decoy","voila","ankle","arrow","mushy","tribe","cease","eager","birth","graph","odder","terra","weird","tried","clack","color","rough","weigh","uncut","ladle","strip","craft","minus","dicey","titan","lucid","vicar","dress","ditch","gypsy","pasta","taffy","flame","swoop","aloof","sight","broke","teary","chart","sixty","wordy","sheer","leper","nosey","bulge","savor","clamp","funky","foamy","toxic","brand","plumb","dingy","butte","drill","tripe","bicep","tenor","krill","worse","drama","hyena","think","ratio","cobra","basil","scrum","bused","phone","court","camel","proof","heard","angel","petal","pouty","throb","maybe","fetal","sprig","spine","shout","cadet","macro","dodgy","satyr","rarer","binge","trend","nutty","leapt","amiss","split","myrrh","width","sonar","tower","baron","fever","waver","spark","belie","sloop","expel","smote","baler","above","north","wafer","scant","frill","awash","snack","scowl","frail","drift","limbo","fence","motel","ounce","wreak","revel","talon","prior","knelt","cello","flake","debug","anode","crime","salve","scout","imbue","pinky","stave","vague","chock","fight","video","stone","teach","cleft","frost","prawn","booty","twist","apnea","stiff","plaza","ledge","tweak","board","grant","medic","bacon","cable","brawl","slunk","raspy","forum","drone","women","mucus","boast","toddy","coven","tumor","truer","wrath","stall","steam","axial","purer","daily","trail","niche","mealy","juice","nylon","plump","merry","flail","papal","wheat","berry","cower","erect","brute","leggy","snipe","sinew","skier","penny","jumpy","rally","umbra","scary","modem","gross","avian","greed","satin","tonic","parka","sniff","livid","stark","trump","giddy","reuse","taboo","avoid","quote","devil","liken","gloss","gayer","beret","noise","gland","dealt","sling","rumor","opera","thigh","tonga","flare","wound","white","bulky","etude","horse","circa","paddy","inbox","fizzy","grain","exert","surge","gleam","belle","salvo","crush","fruit","sappy","taker","tract","ovine","spiky","frank","reedy","filth","spasm","heave","mambo","right","clank","trust","lumen","borne","spook","sauce","amber","lathe","carat","corer","dirty","slyly","affix","alloy","taint","sheep","kinky","wooly","mauve","flung","yacht","fried","quail","brunt","grimy","curvy","cagey","rinse","deuce","state","grasp","milky","bison","graft","sandy","baste","flask","hedge","girly","swash","boney","coupe","endow","abhor","welch","blade","tight","geese","miser","mirth","cloud","cabal","leech","close","tenth","pecan","droit","grail","clone","guise","ralph","tango","biddy","smith","mower","payee","serif","drape","fifth","spank","glaze","allot","truck","kayak","virus","testy","tepee","fully","zonal","metro","curry","grand","banjo","axion","bezel","occur","chain","nasal","gooey","filer","brace","allay","pubic","raven","plead","gnash","flaky","munch","dully","eking","thing","slink","hurry","theft","shorn","pygmy","ranch","wring","lemon","shore","mamma","froze","newer","style","moose","antic","drown","vegan","chess","guppy","union","lever","lorry","image","cabby","druid","exact","truth","dopey","spear","cried","chime","crony","stunk","timid","batch","gauge","rotor","crack","curve","latte","witch","bunch","repel","anvil","soapy","meter","broth","madly","dried","scene","known","magma","roost","woman","thong","punch","pasty","downy","knead","whirl","rapid","clang","anger","drive","goofy","email","music","stuff","bleep","rider","mecca","folio","setup","verso","quash","fauna","gummy","happy","newly","fussy","relic","guava","ratty","fudge","femur","chirp","forte","alibi","whine","petty","golly","plait","fleck","felon","gourd","brown","thrum","ficus","stash","decry","wiser","junta","visor","daunt","scree","impel","await","press","whose","turbo","stoop","speak","mangy","eying","inlet","crone","pulse","mossy","staid","hence","pinch","teddy","sully","snore","ripen","snowy","attic","going","leach","mouth","hound","clump","tonal","bigot","peril","piece","blame","haute","spied","undid","intro","basal","shine","gecko","rodeo","guard","steer","loamy","scamp","scram","manly","hello","vaunt","organ","feral","knock","extra","condo","adapt","willy","polka","rayon","skirt","faith","torso","match","mercy","tepid","sleek","riser","twixt","peace","flush","catty","login","eject","roger","rival","untie","refit","aorta","adult","judge","rower","artsy","rural","shave"]},6961:()=>{}};