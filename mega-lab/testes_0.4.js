const fs=require('fs');const html=fs.readFileSync('mega-lab-04.html','utf8');
const js=html.split('<script>')[1].split('</script>')[0];const m={exports:{}};new Function('module',js)(m);const L=m.exports;
let ok=0,fail=0;const t=(n,c,x='')=>{c?ok++:(fail++,console.log('FALHA',n,x))};
const r=L.rng(11),base=[];for(let c=1;c<=1500;c++)base.push({c,d:'',n:L.pickRandom(r)});
// 19.1 frequencia soma 6
t('freq soma 6 por concurso',L.freq(base).reduce((a,b)=>a+b)===6*base.length);
// 19.2 paridade
t('pares+impares=6',base.every(x=>x.n.filter(v=>v%2==0).length+x.n.filter(v=>v%2).length===6));
// 19.3 associacao = busca direta
const a=L.assocLookup(base,[11,24]);const direct=base.filter(x=>x.n.includes(11)&&x.n.includes(24)).length;t('par = busca direta',a.count===direct);
const tp=L.topAssoc(base,2,1).list[0];const [p1,p2]=tp[0].split('-').map(Number);t('top par confere',tp[1]===base.filter(x=>x.n.includes(p1)&&x.n.includes(p2)).length);
const tt=L.topAssoc(base,3,1).list[0];const tri=tt[0].split('-').map(Number);t('top trio confere',tt[1]===base.filter(x=>tri.every(v=>x.n.includes(v))).length);
t('quadra sob demanda',L.assocLookup(base,[1,2,3,4]).count===base.filter(x=>[1,2,3,4].every(v=>x.n.includes(v))).length);
// 19.4 incremental = recalculo
let inc={base:[]};for(let i=0;i<base.length;i+=100)inc=L.merge(inc.base,base.slice(i,i+100));
t('incremental = completo',JSON.stringify(L.freq(inc.base))===JSON.stringify(L.freq(base)));
// 19.5 idempotencia
const again=L.merge(inc.base,base);t('idempotente',again.add===0&&again.base.length===1500);
const conf=L.merge(inc.base,[{c:5,n:[1,2,3,4,5,6]}]);t('divergencia registrada e original mantido',conf.conflicts[0]===5&&conf.base[4].n.join()===base[4].n.join());
// 19.6 geometria sem ambiguidade
for(const[k,G]of Object.entries(L.GEO)){const sz=Array(G.k).fill(0);let okk=true;for(let x=1;x<=60;x++){const g=G.reg(x);if(!(g>=0&&g<G.k&&Number.isInteger(g)))okk=false;else sz[g]++}t('geo '+k,okk&&sz.reduce((a,b)=>a+b)===60,sz.join(','));console.log('geo',k,sz.join(','))}
// 19.7 combinatoria
t('C(60,6)',L.C(60,6)===50063860);t('C(60,2)',L.C(60,2)===1770);t('C(60,3)',L.C(60,3)===34220);t('C(60,4)',L.C(60,4)===487635);t('C(60,5)',L.C(60,5)===5461512);
t('quina 1 em 154518',Math.round(L.TOTAL/(L.C(6,5)*L.C(54,1)))===154518);t('quadra 1 em 2332',Math.round(L.TOTAL/(L.C(6,4)*L.C(54,2)))===2332);
const sumP=o=>Object.values(o).reduce((a,b)=>a+b,0);for(const k of ['par','primo','fib','rep']){const e=L.expected(k);t('exato soma 1 '+k,Math.abs(sumP(e.p)-1)<1e-9)}
const mc=L.monteCarlo('par');t('monte carlo par 3 ~ exato',Math.abs(mc[3]-0.3293)<0.01,mc[3]);
// 19.8 reproducao
const e1=L.experiment(base,'freq',100,300),e2=L.experiment(base,'freq',100,300);t('reprodutivel',JSON.stringify(e1)===JSON.stringify(e2));
// 19.9 sem futuro
const fut=base.map(x=>({...x}));for(let i=1400;i<1500;i++)fut[i]={c:fut[i].c,n:[1,2,3,4,5,6]};
['freq','late','cold','pairs','repeat'].forEach(h=>t('sem futuro '+h,L.pickFor(base,1400,h,100).join()===L.pickFor(fut,1400,h,100).join()));
// hipoteses em base aleatoria
['freq','late','cold','pairs','repeat'].forEach((h,i)=>{const e=L.experiment(base,h,100,500,i);console.log('hip',h,e.decision,'z',e.z.toFixed(2),'lim',e.zc.toFixed(2));t('nao acha padrao no acaso '+h,e.decision!=='CANDIDATO')});
t('bonferroni sobe',L.experiment(base,'freq',100,300,9).zc>L.experiment(base,'freq',100,300,0).zc);
// qui-quadrado em base aleatoria nao rejeita
for(const k of Object.keys(L.FEAT)){const o=L.observed(base,k),e=L.expected(k),cs=L.chiSquare(o.h,o.n,e.p);console.log('dist',k,'p',cs.p.toFixed(3));t('qui2 acaso '+k,cs.p>0.001)}
// falacia
const lf=L.lateFallacy(base,20);console.log('falacia',lf.rate.toFixed(4),lf.cases);t('falacia ~10%',Math.abs(lf.rate-0.1)<0.02);
// gerador
const g=L.generate(L.rng(3),{qt:10,mode:'div',maxOv:1,fixed:[],exc:[1,2],common:true});t('gerador 10 div',g.cards.length===10&&g.cards.every((c,i)=>g.cards.every((d,j)=>i===j||L.hits(c,d)<=1)&&!c.includes(1)));
const gf=L.generate(L.rng(3),{qt:5,mode:'div',maxOv:2,fixed:[7,33]});t('gerador fixas',gf.cards.length===5&&gf.cards.every(c=>c.includes(7)&&c.includes(33)));
// IA
const ia=L.iaPick(base,'est',4,[10,44],L.rng(1));t('ia est 4 sem humano',ia.length===4&&!ia.includes(10));
const im=L.iaPick(base,'mista',4,[10,44],L.rng(1));t('ia mista 4 unicas',im.length===4&&new Set(im).size===4&&!im.includes(10)&&!im.includes(44),im);
const s=L.simulateIA(base,'est');console.log('sim ia',s.mean.toFixed(3));t('sim ia ~0.6',Math.abs(s.mean-0.6)<0.03);
// regimes
const rc=L.regimeCompare(base,750);console.log('regime p',rc.p.toFixed(3));t('regime acaso',rc.p>0.001);
t('lacunas',L.gaps([{c:1},{c:4},{c:5}]).join()==='2,3');
console.log('OK',ok,'FALHAS',fail);
