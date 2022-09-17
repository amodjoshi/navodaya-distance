"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1852],{1852:(j,$,f)=>{f.r($),f.d($,{Tab1PageModule:()=>N});var S=f(7479),y=f(6895),z=f(4719),C=f(581),_=f(8564),s=f(7489),o=f(6738),b=f(452),h=(()=>{return(a=h||(h={}))[a.simple=0]="simple",a[a.medium=1]="medium",a[a.tough=2]="tough",h;var a})();let P=(()=>{class a{constructor(){this.difficulty=0}simple(){return this.difficulty=h.simple,s.bind(s.sample([this.schoolGirls,this.villagePop,this.fruitMortality,this.mangoTypes,this.multiItems]),this)()}schoolGirls(){let t=this.randSchool();const n=100*s.random(1,9),e=10*s.random(1,9);t+=` \u0936\u093e\u0933\u0946\u0924 ${n} \u0935\u093f\u0926\u094d\u092f\u093e\u0930\u094d\u0925\u0940\u0902 \u0906\u0939\u0947\u0924 . \u0924\u094d\u092f\u093e \u092a\u0948\u0915\u0940 ${e} % \u0935\u093f\u0926\u094d\u092f\u093e\u0930\u094d\u0925\u0940\u0902 \u092e\u0941\u0932\u0940 \u0906\u0939\u0947\u0924, \u0924\u0930 \u0915\u093f\u0924\u0940 \u092e\u0941\u0932\u0940 \u0936\u093e\u0933\u0946\u0924 \u0906\u0939\u0947\u0924?`;const i=n*e/100;return{sum:t,ans:i,spoofs:s.sampleSize([i+10,i+100,i-100,i-10,n/100*(e/10)],4)}}villagePop(){const t=this.randVillage(),n=100*s.random(1,9),e=s.random(1,9)*(n/100),r=e/(n/100);return{sum:`${t} \u092a\u093e\u0921\u093e \u0917\u093e\u0935\u093e\u091a\u0940 \u0932\u094b\u0915\u0938\u0902\u0916\u094d\u092f\u093e ${n} \u0906\u0939\u0947. \u0924\u094d\u092f\u093e \u092a\u0948\u0915\u0940  ${e} \u0938\u094d\u0924\u094d\u0930\u093f\u092f\u093e \u0906\u0939\u0947\u0924, \u0924\u0930 \u0924\u094d\u092f\u093e \u0917\u093e\u0935\u093e\u0924 \u0915\u093f\u0924\u0940 \u091f\u0915\u094d\u0915\u0947 \u0938\u094d\u0924\u094d\u0930\u093f\u092f\u093e \u0906\u0939\u0947\u0924 ?`,ans:r,spoofs:s.sampleSize([r+10,3*r,r+20,2*r,r+30],4)}}fruitMortality(){const t=this.randName(),n=this.randFruit(),e=100*s.random(1,9),i=10*s.random(1,9),m=e*i/100;return{sum:`${t} \u0915\u0922\u0947 ${e} ${n} \u0906\u0939\u0947\u0924 . \u0924\u094d\u092f\u093e \u092a\u0948\u0915\u0940 ${i} \u091f\u0915\u094d\u0915\u0947 \u0916\u0930\u093e\u092c \u091d\u093e\u0932\u0947. \u0915\u093f\u0924\u0940 \u092b\u0933\u0947 \u0916\u0930\u093e\u092c \u091d\u093e\u0932\u0947?`,ans:m,spoofs:s.sampleSize([m+10,m-10,m+20,m-20,2*m,m/10,m+30],4)}}mangoTypes(){const t=this.randName(),n=this.randPairMangoes();let{v1:e,v2:i,ans:r}=function l(d){let c,u,g,v;return c=s.sample([500,1e3]),v=100*s.random(1,5),g=c-v,u=100*v/c,d===h.medium&&(c=100*s.random(1,10),u=s.random(0,100),v=u*c/100,g=c-v),{v1:g,v2:v,ans:u}}(this.difficulty);return{sum:`${t} \u0915\u0922\u0947 ${e} ${n[0]} \u0935 ${i} ${n[1]} \u0906\u0939\u0947\u0924. \u0924\u094d\u092f\u093e \u092a\u0948\u0915\u0940 \u0915\u093f\u0924\u0940 \u091f\u0915\u094d\u0915\u0947 \u0906\u0902\u092c\u093e ${n[1]} \u0906\u0939\u0947?`,ans:r,spoofs:s.sampleSize([r+10,r-10,r+20,r-20,2*r,r/10,r+30],4)}}multiItems(){const t=this.randName(),n=this.randItems(),e=5*s.random(1,5)*10,i=5*s.random(1,5)*10,r=1e3-(e+i),m=s.random(1,3),c=100*(1===m&&e||2===m&&i||3===m&&r)/1e3;return{sum:`${t} \u0915\u0922\u0947 ${e} ${n[0]}, ${i} ${n[1]} \u0935 ${r} ${n[2]} \u0906\u0939\u0947\u0924. \u0924\u094d\u092f\u093e \u092a\u0948\u0915\u0940 \u0915\u093f\u0924\u0940 \u091f\u0915\u094d\u0915\u0947 ${1===m&&n[0]||2===m&&n[1]||3===m&&n[2]} \u0906\u0939\u0947?`,ans:c,spoofs:s.sampleSize([c+10,c+40,c+20,4*c,2*c,3*c,c+30],4)}}medium(){return this.difficulty=h.medium,s.bind(s.sample([this.mangoTypes,this.moneyDistribution]),this)()}moneyDistribution(){const t=this.randFamilyName(),n=100*s.random(1,10),e=s.sample([2,4,5,10]),i=e*n,r=100*n/i;return{sum:`${t} \u0915\u0941\u091f\u0941\u0902\u092c\u093e \u091a\u094d\u092f\u093e ${e} \u0938\u0926\u0938\u094d\u092f\u093e\u0902\u0928\u093e \u0930\u0941 ${i} \u0938\u093e\u0930\u0916\u0947 \u0935\u093e\u091f\u0932\u0947, \u0924\u0930 \u092a\u094d\u0930\u0924\u094d\u092f\u0947\u0915\u0940 \u092e\u093e\u0923\u0938\u093e\u0932\u093e \u0915\u093f\u0924\u0940 \u091f\u0915\u094d\u0915\u0947 \u0930\u0941\u092a\u092f\u0947 \u092e\u093f\u0933\u0924\u0940\u0932?`,ans:r,spoofs:s.sampleSize([r+10,r>10?r-10:r+40,r+20,r>20?r-20:r+50,2*r,r/10,r+30],4)}}tough(){return this.difficulty=h.tough,this.simple()}randSchool(){return s.join([this.randVillage(),s.sample(["\u092a\u093e\u0921\u094d\u092f\u093e\u091a\u094d\u092f\u093e","\u0917\u093e\u0935\u093e\u091a\u094d\u092f\u093e"]),s.sample(["\u091d\u093f\u0932\u094d\u0932\u093e \u092a\u0930\u093f\u0937\u0926","\u092e\u093e\u0927\u094d\u092f\u092e\u093f\u0915","\u092a\u094d\u0930\u093e\u0925\u092e\u093f\u0915"])]," ")}randVillage(){return s.sample(["\u0935\u093f\u0932\u093e\u0924","\u0921\u094b\u0932\u093e\u0930","\u0908\u092d\u093e\u0921","\u0930\u092f\u0924","\u092a\u093e\u091f\u093f\u0932"])}randName(){return s.sample(["\u090a\u0930\u094d\u0935\u0940","\u0928\u0943\u091a\u093e\u0932\u0940","\u0930\u0942\u0926\u094d\u0930","\u0938\u0941\u092e\u0940\u0924","\u0915\u093f\u0902\u091c\u0932","\u092e\u0940\u0924"])}randFruit(){return s.sample(["\u0906\u0902\u092c\u0947","\u091a\u093f\u0915\u0942","\u0928\u093e\u0930\u0933","\u092a\u092a\u0908"])}randPairMangoes(){return s.sampleSize(["\u0915\u0947\u0938\u0930","\u092a\u093e\u092f\u0930\u0940","\u0939\u093e\u092a\u0942\u0938","\u092c\u0926\u093e\u092e","\u0930\u093e\u091c\u093e\u092a\u0941\u0930\u0940"],2)}randItems(){let t=s.random(1,3),n=s.sampleSize(["\u0915\u0947\u0938\u0930","\u092a\u093e\u092f\u0930\u0940","\u0939\u093e\u092a\u0942\u0938","\u092c\u0926\u093e\u092e","\u0930\u093e\u091c\u093e\u092a\u0941\u0930\u0940"],3),e=s.sampleSize(["\u092a\u0947\u0922\u0947","\u091c\u093f\u0932\u0947\u092c\u0940","\u0932\u093e\u0921\u0942","\u092e\u094b\u0926\u0915","\u0915\u0930\u0902\u091c\u0940","\u092c\u0930\u094d\u092b\u0940"],3),i=s.sampleSize(["\u092c\u091f\u093e\u091f\u0947","\u0915\u093e\u0902\u0926\u0947","\u0915\u093e\u0915\u0921\u094d\u092f\u093e","\u0915\u094b\u092c\u0940","\u092b\u094d\u0932\u0949\u0935\u0930"],3);return 1===t&&n||2===t&&e||3===t&&i}randFamilyName(){return s.sample(["\u0927\u094b\u0921\u0940","\u091c\u094b\u0936\u0940","\u0915\u093e\u091f\u0947\u0932\u093e","\u0916\u0947\u092c\u0932\u093e","\u0926\u0941\u092c\u0933\u093e"])}}return a.\u0275fac=function(t){return new(t||a)},a.\u0275prov=o.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})(),T=(()=>{class a{constructor(t){this._per=t,this.dist_units=["mm","cm","m","km"],this.time_units=["sec","min","hr","day","weeks"],this.time_mul=[60,60,24,7],this.time_units_mr=["\u0938\u0947\u0915\u0902\u0926","\u092e\u093f\u0928\u093f\u091f\u093e\u0924","\u0924\u093e\u0938\u093e\u0924","\u0926\u093f\u0935\u0938\u093e\u0924","\u0906\u0920\u0935\u0921\u094d\u092f\u093e\u0924"]}simple(){return this.difficulty=h.simple,s.bind(s.sample([this.multiHops,this.calcDist,this.calcSpeed,this.calcTime,this.calcConv,this.convertTime,this.convertDist]),this)()}multiHops(){const t=s.random(1,10),n=this.dist_units[s.random(0,s.size(this.dist_units)-1)],e=s.random(0,s.size(this.time_units)-2),i=this.time_units[e],r=s.random(1,100),m=s.random(e+1,s.size(this.time_units)-1),d=this.time_units_mr[m],u=t*r*s.reduce(s.slice(this.time_mul,e,m),(v,V)=>v*V,1);return{sum:`\u090f\u0915\u093e \u092e\u0941\u0902\u0917\u0940\u091a\u093e \u0935\u0947\u0917 ${t} ${n}/${i} \u0906\u0939\u0947.         ${r} ${d} \u092e\u0927\u094d\u092f\u0947  \u0924\u0940\u0928\u0947 \u0915\u093f\u0924\u0940 \u0905\u0902\u0924\u0930 \u092a\u093e\u0930 \u092a\u093e\u0921\u0932\u0947 \u0905\u0938\u0947\u0932?`,ans:u,spoofs:s.shuffle([u+10,u+100,u-10,u-100])}}calcSpeed(){const t=this.randVehicle(),n=100*s.random(1,10),e=2*s.random(1,5);return{sum:`\u090f\u0915 ${t} ${n*e} \u0915\u093f\u0932\u094b\u092e\u0940\u091f\u0930 \u0905\u0902\u0924\u0930 ${e} \u0924\u093e\u0938\u093e\u0924 \u092a\u0942\u0930\u094d\u0923 \u0915\u0930\u0924\u0947. \u0924\u094d\u092f\u093e ${t} \u091a\u093e \u0935\u0947\u0917(\u0938\u094d\u092a\u0940\u0921) \u0915\u093f\u0924\u0940?`,ans:n,spoofs:s.sampleSize([n+10,n+20,n+100,n+200,n+300,n+400,n-10,n-20],4)}}calcDist(){const t=this.randVehicle(),n=100*s.random(1,10),e=2*s.random(1,5),i=n*e;return{sum:`\u090f\u0915 ${t} \u091a\u093e \u0935\u0947\u0917(\u0938\u094d\u092a\u0940\u0921) ${n} \u0915\u093f\u0932\u094b\u092e\u0940\u091f\u0930 \u092a\u094d\u0930\u0924\u0940 \u0924\u093e\u0938 \u0906\u0939\u0947. ${e} \u0924\u093e\u0938\u093e\u0924 \u0924\u094d\u092f\u093e ${t} \u0928\u0947 \u0915\u093f\u0924\u0940 \u0905\u0902\u0924\u0930 \u092a\u093e\u0930 \u092a\u093e\u0921\u0932\u0947?`,ans:i,spoofs:s.sampleSize([i+10,i+20,i+100,i+200,i+300,i+400,i-10,i-20],4)}}calcTime(){const t=this.randVehicle(),n=100*s.random(1,10),e=2*s.random(1,5);return{sum:`\u090f\u0915 ${t} \u091a\u093e \u0935\u0947\u0917(\u0938\u094d\u092a\u0940\u0921) ${n} \u0915\u093f\u0932\u094b\u092e\u0940\u091f\u0930 \u092a\u094d\u0930\u0924\u0940 \u0924\u093e\u0938 \u0906\u0939\u0947. ${t} \u0928\u0947 ${n*e} \u0915\u093f\u0932\u094b\u092e\u0940\u091f\u0930 \u0915\u093f\u0924\u0940 \u0924\u093e\u0938\u093e\u0924 \u092a\u093e\u0930 \u092a\u093e\u0921\u0932\u0947?`,ans:e,spoofs:s.sampleSize([e+10,e+2,e+1,e+20,e+30,e+40,e-1,e-2],4)}}calcConv(){const n=s.sample([{mr:"\u0915\u093f\u0932\u094b\u092e\u0940\u091f\u0930",up:[],dn:[{mr:"\u092e\u0940\u091f\u0930",factor:1e3},{mr:"\u0938\u0947\u0902\u091f\u0940\u092e\u0940\u091f\u0930",factor:1e5},{mr:"\u092e\u093f\u0932\u0940\u092e\u0940\u091f\u0930",factor:1e6}]},{mr:"\u092e\u0940\u091f\u0930",up:[{mr:"\u0915\u093f\u0932\u094b\u092e\u0940\u091f\u0930",factor:1e3}],dn:[{mr:"\u0938\u0947\u0902\u091f\u0940\u092e\u0940\u091f\u0930",factor:100},{mr:"\u092e\u093f\u0932\u0940\u092e\u0940\u091f\u0930",factor:1e3}]},{mr:"\u0938\u0947\u0902\u091f\u0940\u092e\u0940\u091f\u0930",up:[{mr:"\u092e\u0940\u091f\u0930",factor:100},{mr:"\u0915\u093f\u0932\u094b\u092e\u0940\u091f\u0930",factor:1e5}],dn:[{mr:"\u092e\u093f\u0932\u0940\u092e\u0940\u091f\u0930",factor:10}]},{mr:"\u092e\u093f\u0932\u0940\u092e\u0940\u091f\u0930",up:[{mr:"\u0938\u0947\u0902\u091f\u0940\u092e\u0940\u091f\u0930",factor:10},{mr:"\u092e\u0940\u091f\u0930",factor:1e3},{mr:"\u0915\u093f\u0932\u094b\u092e\u0940\u091f\u0930",factor:1e6}],dn:[]}]),e=s.size(n.up)>0,i=s.size(n.dn)>0;let l,m="";if(e&&i){const d=s.random(0,1),c=s.sample(d?n.up:n.dn),u=c.factor<1e6?1e4:1e6,g=d?s.random(1,10)*u:s.random(1,10);l=d?g/c.factor:g*c.factor,m=`${g} ${n.mr} = ? ${c.mr}`}else if(e){const d=s.sample(n.up),c=d.factor<1e6?1e4:1e6,u=s.random(1,10)*c;l=u/d.factor,m=`${u} ${n.mr} = ? ${d.mr}`}else{const d=s.sample(n.dn),c=s.random(1,10);l=c*d.factor,m=`${c} ${n.mr} = ? ${d.mr}`}return{sum:m,ans:l,spoofs:s.sampleSize([10*l,100*l,1e3*l,l/10,l/100,1e4*l],4)}}convertTime(){const t=this.randVehicle(),n=s.sample(s.range(0,1e3,36)),e=10*s.random(1,5),i=n*e*1e3/3600;return{sum:`\u090f\u0915 ${t} \u091a\u093e \u0935\u0947\u0917(\u0938\u094d\u092a\u0940\u0921) ${n} \u0915\u093f\u0932\u094b\u092e\u0940\u091f\u0930 \u092a\u094d\u0930\u0924\u0940 \u0924\u093e\u0938 \u0906\u0939\u0947. ${e} \u0938\u0947\u0915\u0902\u0926\u093e\u0924 \u0924\u094d\u092f\u093e ${t} \u0928\u0947 \u0915\u093f\u0924\u0940 \u092e\u0940\u091f\u0930 \u0905\u0902\u0924\u0930 \u092a\u093e\u0930 \u092a\u093e\u0921\u0932\u0947?`,ans:i,spoofs:s.sampleSize([i+10,i+20,i+100,i+200,i+300,i+400,i-10,i-20],4)}}convertDist(){const t=this.randVehicle(),n=s.sample(s.range(0,1e3,36)),e=10*s.random(1,5);return{sum:`\u090f\u0915 ${t} \u091a\u093e \u0935\u0947\u0917(\u0938\u094d\u092a\u0940\u0921) ${n} \u0915\u093f\u0932\u094b\u092e\u0940\u091f\u0930 \u092a\u094d\u0930\u0924\u0940 \u0924\u093e\u0938 \u0906\u0939\u0947. ${n*e*1e3/3600} \u092e\u0940\u091f\u0930 \u0905\u0902\u0924\u0930 \u0924\u094d\u092f\u093e ${t} \u0932\u093e \u092a\u093e\u0930 \u092a\u093e\u0921\u093e\u092f\u0932\u093e \u0915\u093f\u0924\u0940 \u0938\u0947\u0915\u0902\u0926 \u0932\u093e\u0917\u0924\u0940\u0932 ??`,ans:e,spoofs:s.sampleSize([e+10,e+20,e+100,e+200,e+300,e+400,e-10,e-20],4)}}randVehicle(){return s.sample(["\u0917\u093e\u0921\u0940","\u091f\u094d\u0930\u0947\u0928","\u0935\u093f\u092e\u093e\u0928"])}medium(){return this.difficulty=h.medium,s.bind(s.sample([this.calcDistMed]),this)()}calcDistMed(){const t=this.randVehicle(),n=60*s.random(1,5),e=2*s.random(1,5),i=6*s.random(1,11),m=n*(e+i/60);return{sum:`\u090f\u0915 ${t} \u091a\u093e \u0935\u0947\u0917(\u0938\u094d\u092a\u0940\u0921) ${n} \u0915\u093f\u0932\u094b\u092e\u0940\u091f\u0930 \u092a\u094d\u0930\u0924\u0940 \u0924\u093e\u0938 \u0906\u0939\u0947. ${e} \u0924\u093e\u0938\u093e\u0924 \u0906\u0923\u093f ${i} \u092e\u093f\u0928\u093f\u091f\u0947 \u0928\u0902\u0924\u0930, \u0924\u094d\u092f\u093e ${t} \u0928\u0947 \u0915\u093f\u0924\u0940 \u0905\u0902\u0924\u0930 \u092a\u093e\u0930 \u092a\u093e\u0921\u0932\u0947?`,ans:m,spoofs:s.sampleSize([m+10,m+20,m+100,m+200,m+300,m+400,m-10,m-20],4)}}tough(){return this.difficulty=h.tough,this.medium()}}return a.\u0275fac=function(t){return new(t||a)(o.LFG(P))},a.\u0275prov=o.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})(),A=(()=>{class a{constructor(){this.difficulty=0}simple(){return this.difficulty=h.simple,s.bind(s.sample([this.basicProfitLoss]),this)()}basicProfitLoss(){const t=this.randName(),n=s.random(1,10),e=this.randFruit(),i=s.random(20,98),r=s.random(i+1,100),m=s.random(1,i-1),d=s.random(0,1)?m:r,u=d-i;return{sum:`${t} \u0928\u0947 ${n} \u0921\u091d\u0928 ${e} \u0930\u0942 ${i} \u0932\u093e \u0918\u0947\u0924\u0932\u0902. ${t} \u0928\u0947 \u092e\u0917 \u0930\u0941 ${d} \u0932\u093e \u0935\u093f\u0915\u0932\u0902 . ${t} \u091a\u093e \u0915\u093f\u0924\u0940 \u0924\u094b\u091f\u093e \u0915\u093f\u0902\u0935\u093e \u0928\u092b\u093e \u091d\u093e\u0932\u093e?`,ans:u,spoofs:s.sampleSize([u+10,u+20,u+100,-1*u,u-100,u-10,u-20,u+2,u-2,u-4],4)}}medium(){return this.difficulty=h.medium,this.simple()}tough(){return this.difficulty=h.tough,this.simple()}randSchool(){return s.join([this.randVillage(),s.sample(["\u092a\u093e\u0921\u094d\u092f\u093e\u091a\u094d\u092f\u093e","\u0917\u093e\u0935\u093e\u091a\u094d\u092f\u093e"]),s.sample(["\u091d\u093f\u0932\u094d\u0932\u093e \u092a\u0930\u093f\u0937\u0926","\u092e\u093e\u0927\u094d\u092f\u092e\u093f\u0915","\u092a\u094d\u0930\u093e\u0925\u092e\u093f\u0915"])]," ")}randVillage(){return s.sample(["\u0935\u093f\u0932\u093e\u0924","\u0921\u094b\u0932\u093e\u0930","\u0908\u092d\u093e\u0921","\u0930\u092f\u0924","\u092a\u093e\u091f\u093f\u0932"])}randName(){return s.sample(["\u090a\u0930\u094d\u0935\u0940","\u0928\u0943\u091a\u093e\u0932\u0940","\u0930\u0942\u0926\u094d\u0930","\u0938\u0941\u092e\u0940\u0924","\u0915\u093f\u0902\u091c\u0932","\u092e\u0940\u0924"])}randFruit(){return s.sample(["\u0906\u0902\u092c\u0947","\u091a\u093f\u0915\u0942","\u0928\u093e\u0930\u0933","\u092a\u092a\u0908"])}randPairMangoes(){return s.sampleSize(["\u0915\u0947\u0938\u0930","\u092a\u093e\u092f\u0930\u0940","\u0939\u093e\u092a\u0942\u0938","\u092c\u0926\u093e\u092e","\u0930\u093e\u091c\u093e\u092a\u0941\u0930\u0940"],2)}randItems(){let t=s.random(1,3),n=s.sampleSize(["\u0915\u0947\u0938\u0930","\u092a\u093e\u092f\u0930\u0940","\u0939\u093e\u092a\u0942\u0938","\u092c\u0926\u093e\u092e","\u0930\u093e\u091c\u093e\u092a\u0941\u0930\u0940"],3),e=s.sampleSize(["\u092a\u0947\u0922\u0947","\u091c\u093f\u0932\u0947\u092c\u0940","\u0932\u093e\u0921\u0942","\u092e\u094b\u0926\u0915","\u0915\u0930\u0902\u091c\u0940","\u092c\u0930\u094d\u092b\u0940"],3),i=s.sampleSize(["\u092c\u091f\u093e\u091f\u0947","\u0915\u093e\u0902\u0926\u0947","\u0915\u093e\u0915\u0921\u094d\u092f\u093e","\u0915\u094b\u092c\u0940","\u092b\u094d\u0932\u0949\u0935\u0930"],3);return 1===t&&n||2===t&&e||3===t&&i}}return a.\u0275fac=function(t){return new(t||a)},a.\u0275prov=o.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})(),D=(()=>{class a{constructor(){this.difficulty=0}simple(){return this.difficulty=h.simple,s.bind(s.sample([this.mulSeries,this.subAddSeries,this.mulByZero,this.fracToDeci,this.smallBig,this.fracAddSeries,this.multiplyAddSeries]),this)()}mulSeries(){const t=s.random(1,5),n=s.range(t,t+4),e=s.take(n,3),i=s.last(n),r=s.range(5,105,5);let l=[s.sample(r)],d=s.chain(e).map(u=>{const g=l.pop()*u;return l.push(g),g}).flatten().value();const c=i*l.pop();return{sum:s.join(d,",")+",_",ans:c,spoofs:s.sampleSize([c+10,c+20,c+100,-1*c,c-100,c-10,c-20,c+2,c-2,c-4],4)}}subAddSeries(){const t=s.random(0,1)?s.range(100,1100,100):s.range(10,110,10),n=s.random(0,6);let e,i;return e=s.random(0,1)?s.reverse(s.slice(t,n,n+4)):s.slice(t,n,n+4),i=s.last(e),{sum:s.join(s.take(e,3),",")+",_",ans:i,spoofs:s.sampleSize([i+10,i+20,i+100,-1*i,i-100,i-10,i-20,i+2,i-2,i-4],4)}}mulByZero(){let t=s.sampleSize(s.range(1,100),3),n=s.reduce(t,(r,m)=>r*m,1);t.push(0);let e=s.shuffle(t);return{sum:s.join(e,"x"),ans:0,spoofs:s.sampleSize([10,20,100,n,2,n+10,n+100],4)}}fracToDeci(){const n=s.sample([{num:1,den:10},{num:2,den:4},{num:2,den:8},{num:1,den:2},{num:1,den:4},{num:1,den:5},{num:2,den:10},{num:3,den:15},{num:4,den:20},{num:3,den:12},{num:2,den:16},{num:1,den:8}]),e=n.num/n.den;return{sum:n.num+"/"+n.den,ans:e,spoofs:s.sampleSize([s.round(e+.1,3),s.round(e+.2,3),s.round(e+.3,3),s.round(e+.4,3),s.round(e-.1,3),s.round(e-.2,3),s.round(e-.3,3)],4)}}smallBig(){const t=s.sampleSize([{n:9,desc:"\u092e\u094b\u0920\u093e \u090f\u0915"},{n:10,desc:"\u091b\u094b\u091f\u093e \u0926\u094b\u0928"},{n:99,desc:"\u092e\u094b\u0920\u093e \u0926\u094b\u0928"},{n:100,desc:"\u091b\u094b\u091f\u093e \u0924\u0940\u0928"},{n:999,desc:"\u092e\u094b\u0920\u093e \u0924\u0940\u0928"},{n:1e3,desc:"\u091b\u094b\u091f\u093e \u091a\u093e\u0930"},{n:9999,desc:"\u092e\u094b\u0920\u093e \u091a\u093e\u0930"},{n:1e4,desc:"\u091b\u094b\u091f\u093e \u092a\u093e\u091a"},{n:99999,desc:"\u092e\u094b\u0920\u093e \u092a\u093e\u091a"},{n:1e5,desc:"\u091b\u094b\u091f\u093e \u0938\u0939\u093e"},{n:999999,desc:"\u092e\u094b\u0920\u093e \u0938\u0939\u093e"}],2),n=s.head(t),e=s.last(t),i=s.random(0,1),r=i?"\u092e\u0927\u094d\u092f\u0947  \u0915\u093f\u0924\u0940 \u092b\u0930\u0915 \u0906\u0939\u0947":"\u091a\u0940  \u092c\u0947\u0930\u0940\u091c \u0915\u093f\u0924\u0940 \u0939\u094b\u0924\u0947 ",m=i?Math.abs(n.n-e.n):n.n+e.n;return{sum:`\u0938\u0917\u0933\u094d\u092f\u093e\u0924 ${n.desc} \u0905\u0902\u0915 \u0906\u0923\u093f \u0938\u0917\u0933\u094d\u092f\u093e\u0924 ${e.desc} ${r}?`,ans:m,spoofs:s.sampleSize([m+10,m+20,m+100,m-100,m-10,m-20,m+2,m-2,m-4],4)}}fracAddSeries(){let t=[];const n=s.random(1,9);t.push((10*n+n)/10),t.push((100*n+n)/100),t.push((1e3*n+n)/1e3),t.push((1e3*n+100*n+n)/1e3),t.push((1e3*n+10*n+n)/1e3),t.push((1e3*n+100*+n+10*n+n)/1e3);const e=s.sampleSize(t,4),i=s.chain(e).reduce((r,m)=>r+m,0).round(3).value();return{sum:s.join(e,"+"),ans:i,spoofs:s.sampleSize([s.round(i+10,3),s.round(i+.2,3),s.round(i+.1,3),s.round(i-.3,3),s.round(i-10,3),s.round(i-20,3),s.round(i+2,3),s.round(i-2,3),s.round(i-4,3)],4)}}multiplyAddSeries(){const t=s.random(1,10),n=s.range(t,10*t+t,t),e=s.random(4,6),i=`${t} \u091a\u094d\u092f\u093e \u092a\u0939\u093f\u0932\u094d\u092f\u093e ${e} \u092a\u091f\u093e\u0902\u091a\u0940/\u092a\u093e\u0922\u094d\u092f\u093e  \u091a\u094d\u092f\u093e  \u092c\u0947\u0930\u0940\u091c \u0915\u093f\u0924\u0940 \u0906\u0939\u0947?`,r=s.reduce(s.take(n,e),(m,l)=>m+l,0);return{sum:i,ans:r,spoofs:s.sampleSize([r+10,r+20,r+30,r-10,r-20,r+2,r-2,r-4],4)}}medium(){return this.difficulty=h.medium,this.simple()}tough(){return this.difficulty=h.tough,this.simple()}}return a.\u0275fac=function(t){return new(t||a)},a.\u0275prov=o.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})(),G=(()=>{class a{constructor(t,n,e,i){this._dist=t,this._per=n,this._profit=e,this._numplay=i,this.services=[this._dist,this._numplay,this._per,this._profit]}generate(t){console.log(`generate:segment=${t.segment}`);const n=s.isEqual(t.segment,"dist-time"),e=s.isEqual(t.segment,"percentage"),i=s.isEqual(t.segment,"profit-loss"),r=s.isEqual(t.segment,"num-play"),m=s.isEqual(t.segment,"random"),l=s.sample(this.services);return n&&this.callAsPerSev(t.sev,this._dist)||e&&this.callAsPerSev(t.sev,this._per)||i&&this.callAsPerSev(t.sev,this._profit)||r&&this.callAsPerSev(t.sev,this._numplay)||m&&this.callAsPerSev(t.sev,l)}callAsPerSev(t,n){return 0===t&&n.simple()||1===t&&n.medium()||2===t&&n.tough()}}return a.\u0275fac=function(t){return new(t||a)(o.LFG(T),o.LFG(P),o.LFG(A),o.LFG(D))},a.\u0275prov=o.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})();var M=f(106),F=f(9687);const Z=[{path:"",component:(()=>{class a{constructor(t,n,e,i){this._sp=t,this._gen=n,this._events=e,this._logger=i,this.sum="",this.spoofs=[-1,-1,-1,-1],this.ans_btn_idx=-1,this.mCorrects=0,this.mDone=0,this.mCorrects=0,this.mDone=0}ionViewWillEnter(){this.mSettingsCfg=this._sp.load(),this.mSettingsCfg&&(this.mCorrects=this.mSettingsCfg.numCorrect,this.mDone=this.mSettingsCfg.numAttempted)}ionViewDidEnter(){this.mSettingsCfg&&this.mSettingsCfg.isSessionActive&&this.generate()}onAnsClick(t){this.mDone+=1,this.mSettingsCfg.numAttempted=this.mDone,s.isEqual(this.ans_btn_idx,t)?this.mCorrects+=1:this.logSum(this.spoofs[t]),this.mSettingsCfg.numCorrect=this.mCorrects,this._sp.save(this.mSettingsCfg),this.mDone<this.mSettingsCfg.numSums?this.generate():(this.mSettingsCfg.isSessionActive=!1,this._sp.save(this.mSettingsCfg))}generate(){this.mSum=this._gen.generate(this.mSettingsCfg),this.sum=this.mSum.sum,this.ans_btn_idx=s.random(0,3),this.mSum.spoofs[this.ans_btn_idx]=this.mSum.ans,this.spoofs=this.mSum.spoofs}isDisabled(){let t=!1;return this.mSettingsCfg&&(t=this.mDone==this.mSettingsCfg.numSums),!s.get(this.mSettingsCfg,"isSessionActive",!1)||t}calcScore(){let t="";if(this.mSettingsCfg){let n=this.mSettingsCfg.numSums,i=s.round(100*this.mCorrects/(this.mSettingsCfg.numAttempted||1),0);t=`Score = ${this.mCorrects}/${n},Correct = ${i}%`}return t}calcDone(){let t="";return this.mSettingsCfg&&(t=`Done = ${s.round(100*this.mDone/this.mSettingsCfg.numSums,0)}%`),t}logSum(t){this._logger.log({sum:this.mSum.sum,ans:this.mSum.ans,pressed:t})}}return a.\u0275fac=function(t){return new(t||a)(o.Y36(b.m),o.Y36(G),o.Y36(M.n),o.Y36(F.i))},a.\u0275cmp=o.Xpm({type:a,selectors:[["app-tab1"]],decls:29,vars:13,consts:[[3,"translucent"],[3,"fullscreen"],[1,"main"],[1,"ion-align-self-center","ion-text-center"],["color","primary","expand","full",3,"disabled","click"],[1,"score"],[1,"ion-align-self-center"]],template:function(t,n){1&t&&(o.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),o._uU(3," Home "),o.qZA()()(),o.TgZ(4,"ion-content",1)(5,"ion-grid")(6,"ion-row",2)(7,"ion-col",3),o._uU(8),o.qZA()(),o.TgZ(9,"ion-row")(10,"ion-col")(11,"ion-button",4),o.NdJ("click",function(){return n.onAnsClick(0)}),o._uU(12),o.qZA()(),o.TgZ(13,"ion-col")(14,"ion-button",4),o.NdJ("click",function(){return n.onAnsClick(1)}),o._uU(15),o.qZA()()(),o.TgZ(16,"ion-row")(17,"ion-col")(18,"ion-button",4),o.NdJ("click",function(){return n.onAnsClick(2)}),o._uU(19),o.qZA()(),o.TgZ(20,"ion-col")(21,"ion-button",4),o.NdJ("click",function(){return n.onAnsClick(3)}),o._uU(22),o.qZA()()(),o.TgZ(23,"ion-row",5)(24,"ion-col",6),o._uU(25),o.qZA()(),o.TgZ(26,"ion-row",5)(27,"ion-col",6),o._uU(28),o.qZA()()()()),2&t&&(o.Q6J("translucent",!0),o.xp6(4),o.Q6J("fullscreen",!0),o.xp6(4),o.hij(" ",n.sum," "),o.xp6(3),o.Q6J("disabled",n.isDisabled()),o.xp6(1),o.hij("",n.spoofs[0]," "),o.xp6(2),o.Q6J("disabled",n.isDisabled()),o.xp6(1),o.hij("",n.spoofs[1]," "),o.xp6(3),o.Q6J("disabled",n.isDisabled()),o.xp6(1),o.hij("",n.spoofs[2]," "),o.xp6(2),o.Q6J("disabled",n.isDisabled()),o.xp6(1),o.hij("",n.spoofs[3]," "),o.xp6(3),o.Oqu(n.calcScore()),o.xp6(3),o.Oqu(n.calcDone()))},dependencies:[S.YG,S.wI,S.W2,S.jY,S.Gu,S.Nd,S.sr,S.wd],styles:["ion-grid[_ngcontent-%COMP%]{height:100%}ion-grid[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]{height:50%;font-size:1.5em}ion-grid[_ngcontent-%COMP%]   .score[_ngcontent-%COMP%]{height:12.5%;text-align:center;font-size:1.5em}"]}),a})()}];let k=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=o.oAB({type:a}),a.\u0275inj=o.cJS({imports:[_.Bz.forChild(Z),_.Bz]}),a})(),N=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=o.oAB({type:a}),a.\u0275inj=o.cJS({imports:[S.Pc,y.ez,z.u5,C.e,k]}),a})()}}]);