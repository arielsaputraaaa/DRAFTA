const KEY='stg3',CNT={l1:1,l2h:2,l2v:2,l3:3,l4:4},ch='BroadcastChannel'in window?new BroadcastChannel(KEY):null;
const box=()=>({type:'none',key:'',title:'Judul Konten',sub:'Subjudul',anim:'up',fit:'cover',snd:false,h:1});
const DEF=()=>({nl:1,nr:1,wl:50,ar:{l:40,r:40,t:30,b:30,g:24},rp:0,ts:12,boxes:[0,1,2,3,4,5].map(box),
 cm:{on:true,user:'@username',text:'Tulis komentar penonton di sini. Semangat terus!',sp:14},
 tm:{on:true,pos:'tc',label:'TIMER',col:'#f5c06f',left:300,dur:300,end:0,run:false,mode:'down',style:'badge',sz:100,ds:false,st:0},
 bg:{t:'anim',an:'aurora',c1:'#0b2a66',c2:'#10204a',key:'',mt:''},
 th:{ac:'#f5c06f',bd:'#d4ab4c',pn:'#111827'},sc:{cur:'draft',tr:'slidel',dur:900}});
const mg=(d,s)=>{if(s)for(const k in d)if(k in s)d[k]=d[k]&&typeof d[k]=='object'?mg(d[k],s[k]):s[k];return d};
const loadS=()=>{try{return mg(DEF(),JSON.parse(localStorage[KEY]))}catch(e){return DEF()}};
const saveS=S=>{localStorage[KEY]=JSON.stringify(S);ch&&ch.postMessage(S)};
const DB=()=>new Promise(r=>{const q=indexedDB.open('stg',1);q.onupgradeneeded=()=>q.result.createObjectStore('f');q.onsuccess=()=>r(q.result)});
const put=async(k,v)=>{const d=await DB();return new Promise(r=>{const t=d.transaction('f','readwrite');t.objectStore('f').put(v,k);t.oncomplete=r})};
const get=async k=>{const d=await DB();return new Promise(r=>{const q=d.transaction('f').objectStore('f').get(k);q.onsuccess=()=>r(q.result)})};
