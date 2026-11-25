// Data, state and small helpers
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const M=[
{n:"Maya",r:"Mom",g:"#e6a65c",hr:72,rec:81,st:6240,sg:8000,k:1380,kg:1800,bed:"23:10",wake:"06:40",dv:["Smart watch","Phone"],ml:[["Metformin 500 mg","8:00 pm"],["Vitamin D","9:00 pm"]],goal:"Maintain"},
{n:"Arif",r:"Dad",g:"#6f9fc0",hr:78,rec:64,st:4100,sg:7000,k:1900,kg:2100,bed:"00:30",wake:"06:10",dv:["Smart ring","Phone"],ml:[["Amlodipine 5 mg","9:00 pm"]],goal:"Lose"},
{n:"Rafi",r:"Son",g:"#7ab36a",hr:66,rec:90,st:11800,sg:10000,k:2100,kg:2600,bed:"23:50",wake:"07:20",dv:["Fit band","Phone"],ml:[],goal:"Gain"},
{n:"Nila",r:"Daughter",g:"#a08be0",hr:70,rec:76,st:7300,sg:9000,k:1500,kg:1900,bed:"22:40",wake:"06:30",dv:["Smart watch","Phone"],ml:[["Iron tablet","1:00 pm"]],goal:"Maintain"},
{n:"Dadi",r:"Grandma",g:"#e08a7a",hr:76,rec:58,st:2900,sg:4000,k:1450,kg:1600,bed:"21:50",wake:"05:50",dv:["Fit band","Phone"],ml:[["Insulin","7:30 pm"],["Calcium","8:00 pm"]],goal:"Maintain"}];
let cur=0;const raf=[];try{const s=JSON.parse(localStorage.getItem("rxp"));if(s&&s.length)M.splice(0,M.length,...s)}catch(e){}const save=()=>{try{localStorage.setItem("rxp",JSON.stringify(M))}catch(e){}};
const hrs=m=>{const[a,b]=m.bed.split(":").map(Number),[c,d]=m.wake.split(":").map(Number);let x=(c*60+d)-(a*60+b);if(x<0)x+=1440;return(x/60).toFixed(1)};
const tgt=m=>Math.round(m.kg*({Lose:.85,Gain:1.15,Maintain:1})[m.goal]);
