var N=(l,s,t)=>{if(!s.has(l))throw TypeError("Cannot "+t)};var c=(l,s,t)=>(N(l,s,"read from private field"),t?t.call(l):s.get(l)),d=(l,s,t)=>{if(s.has(l))throw TypeError("Cannot add the same private member more than once");s instanceof WeakSet?s.add(l):s.set(l,t)};import{r as T,y as C,z as $,c as r,a as e,t as a,b as v,A as g,F as E,D as P,E as R,G as k,o as u,H as W}from"./index.37d3ff32.js";const j=e("h1",{class:"bg-purple-500 sm:bg-gray-500 md:bg-red-500 lg:bg-yellow-500 xl:bg-green-500 2xl:bg-blue-500 pt-14"},"\u3000",-1),M=e("div",{class:"text-center sm:text-left"},"\u6587\u5B57\u7F6E\u4E2D\u5C07\u6703\u5728\u624B\u6A5F\u4E0A\u751F\u6548\uFF0C\u800C\u7576\u87A2\u5E55\u5927\u65BC\u7B49\u65BC 640px \u6642\uFF0C\u5C07\u6703\u9760\u5DE6\u5C0D\u9F4A",-1),V={class:"flex"},H={class:"w-5/12 mx-auto my-5 bg-red-300"},J={class:"text-2xl font-semibold text-center"},Q=e("img",{src:P,alt:"facebook",width:"50",class:"mx-auto mt-5"},null,-1),q={class:"flex flex-col gap-2 my-5 md:justify-around md:flex-row"},K=["onClick"],X=["onClick"],Y=["onClick"],Z={key:0,class:"w-full max-w-sm p-4 mx-auto"},ee=k('<div class="flex space-x-4 animate-pulse"><div class="flex-1 py-1 space-y-4"><div class="w-12 h-12 bg-blue-400 rounded-full"></div><div class="w-3/4 h-4 bg-blue-400 rounded"></div><div class="space-y-2"><div class="h-4 bg-blue-400 rounded"></div><div class="w-5/6 h-4 bg-blue-400 rounded"></div></div></div></div>',1),oe=[ee],te={key:1,class:"w-full max-w-sm p-4 mx-auto"},se={key:0,class:"w-12 h-12 bg-blue-400 rounded-full"},le=["src"],ie={class:"font-bold"},ne={class:"font-normal"},ae={class:"font-bold"},ce={class:"font-normal"},de={class:"font-bold"},re={class:"font-normal"},ue={class:"w-5/12 mx-auto my-5 bg-blue-300"},ge={class:"text-2xl font-semibold text-center"},me=e("img",{src:R,alt:"facebook",width:"50",class:"mx-auto mt-5"},null,-1),he={class:"flex flex-col my-5 md:justify-around md:flex-row"},_e=["onClick"],pe=k('<div class="w-full max-w-sm p-4 mx-auto"><div class="flex space-x-4 animate-pulse"><div class="flex-1 py-1 space-y-4"><div class="w-12 h-12 bg-red-400 rounded-full"></div><div class="w-3/4 h-4 bg-red-400 rounded"></div><div class="space-y-2"><div class="h-4 bg-red-400 rounded"></div><div class="w-5/6 h-4 bg-red-400 rounded"></div></div></div></div></div>',1),be={class:"w-full max-w-sm p-4 mx-auto"},fe={key:0,class:"w-12 h-12 bg-red-400 rounded-full"},ve=["src"],xe={class:"font-bold"},we={class:"font-normal"},ke={class:"font-bold"},ye={class:"font-normal"},Fe={class:"font-bold"},Be={class:"font-normal"},Ce=e("div",{class:"w-5/12 mx-auto my-5 bg-green-300"},[e("h1",{class:"text-2xl font-semibold text-center"},"Cookie\u4F7F\u7528\u72C0\u614B:")],-1),Oe=k('<div class="flex items-center justify-center bg-fixed bg-center bg-no-repeat bg-cover bg-bg-pattern"><div class="flex flex-col items-center px-5 py-10 text-white lg:flex-row"><h2 class="text-3xl font-black">What We Do</h2><div class="w-10 mx-5 mt-5 border-t-2 lg:mt-0 lg:transform lg:rotate-90"><hr></div><p class="mt-5 lg:mt-0 lg:mr-5">We provide expert financial advice for businesses and individuals</p><a href="#" class="py-3 mt-10 font-black transition duration-500 ease-in-out bg-blue-400 rounded-lg px-7 hover:bg-white hover:text-blue-400 lg:mt-0">See All Services</a></div></div>',1),De={__name:"about",setup(l){var m,h,_,p,b,f;W();const s=T(sessionStorage.getItem("isOpen")),t=C({id:"",name:"",email:"",picture:null,isOpen:!1,status:"\u672A\u767B\u5165",authorized:!1}),i=C({id:"",name:"",email:"",picture:null,isOpen:!1,status:"\u672A\u767B\u5165"});$(()=>{FB.getLoginStatus(n=>{console.log("Mounted res",n),B(n),n.status==="connected"?(console.log("\u81C9\u66F8\u767B\u5165"),console.log("token",n.authResponse.accessToken),x()):(console.log("\u81C9\u66F8\u672A\u767B\u5165"),t.isOpen=!1,sessionStorage.setItem("isOpen",!1))});const o=window.location.search.slice(1);console.log("1121213",window.location.search.slice(1)),window.localStorage&&window.localStorage.setItem("x-admin-oauth-code",o),window.addEventListener("storage",O())});const O=o=>{console.log("e",o)},y=()=>{FB.login(o=>{console.log("\u81C9\u66F8\u767B\u5165",o),o.authResponse?(console.log("Welcome!  Fetching your information.... "),console.log("res",o),x(),FB.api("/me",function(n){console.log("FB API \u767B\u5165\u5F8C\u7528\u6236\u8CC7\u6599",n),console.log("Good to see you, "+n.name+".")})):console.log("User cancelled login or did not fully authorize.")},{scope:"email, public_profile",return_scopes:!0,auth_type:"reauthorize"})},S=()=>{i.isOpen=!0,FB.logout(o=>{console.log(o),t.status="\u767B\u51FA",t.isOpen=!1})},x=()=>{t.status="\u767B\u5165",t.isOpen=!0,FB.api("/me?fields=name,id,email,gender,link,locale,picture",function(o){console.log("res in graphAPI",o),t.id=o.id,t.name=o.name,t.email=o.email,t.picture=o.picture.data.url})};class L{constructor(){d(this,m,"https://www.facebook.com/v14.0/dialog/oauth");d(this,h,"code");d(this,_,"1086201878989989");d(this,p,"email,public_profile");d(this,b,window.location.origin);d(this,f,btoa(JSON.stringify({type:"FBOauth",ts:Date.now()})))}get getLoginUrl(){return`${c(this,m)}?client_id=${c(this,_)}&redirect_uri=${c(this,b)}&state=${c(this,f)}&scope=${c(this,p)}&response_type=${c(this,h)}`}}m=new WeakMap,h=new WeakMap,_=new WeakMap,p=new WeakMap,b=new WeakMap,f=new WeakMap;const F=new L,B=o=>{console.log("\u81C9\u66F8\u72C0\u614B\u78BA\u8A8D",o),o.status==="connected"?(console.log("\u81C9\u66F8\u5DF2\u7D93\u767B\u5165\u4E86"),t.authorized=!0,x()):(o.status,t.authorized=!1,y())},I=()=>{FB.getLoginStatus(o=>{B(o)})},D=()=>{console.log("\u6253\u958B\u7DB2\u9801"),console.log(F.getLoginUrl),window.open(F.getLoginUrl,"Facebook Login",540,540)},U=()=>{i.isOpen&&gapi.auth2.getAuthInstance().signOut().then(()=>{i.status="\u767B\u51FA",i.isOpen=!1,sessionStorage.setItem("isOpen",!1)})},w=(o,n,z)=>{const A=new Date(z).toUTCString(),G=encodeURI(o)+"="+encodeURI(n)+";expires="+A+";";document.cookie=G};return w("sport","basketball",Date.UTC(2022,7,23)),w("icecream","vanilla",Date.UTC(2017,8,1)),(o=>{w(o,"",-1)})("sport"),(o,n)=>(u(),r(E,null,[j,e("h1",null,a(s.value),1),M,e("div",V,[e("div",H,[e("h1",J,"Facebook\u767B\u5165\u72C0\u614B: "+a(t.status),1),Q,e("div",q,[e("button",{class:"px-5 py-3 mb-3 font-semibold text-white transition duration-500 ease-in-out bg-blue-400 rounded-lg hover:bg-blue-700 md:mb-0",onClick:v(I,["prevent"])},"Login from Facebook API",8,K),e("button",{class:"px-5 py-3 mb-3 font-semibold text-white transition duration-500 ease-in-out bg-blue-400 rounded-lg hover:bg-blue-700 md:mb-0",onClick:v(D,["prevent"])},"Login Facebook use Oauth2.0",8,X),e("button",{class:"px-5 py-3 font-semibold text-white transition duration-500 ease-in-out bg-blue-400 rounded-lg hover:bg-blue-700",onClick:v(S,["prevent"])},"Logout from Facebook",8,Y)]),t.isOpen?(u(),r("div",te,[e("ul",null,[e("li",null,[t.picture===null?(u(),r("div",se)):(u(),r("img",{key:1,src:t.picture,alt:""},null,8,le))]),e("li",ie,[g("FB ID: "),e("span",ne,a(t.id),1)]),e("li",ae,[g("Name: "),e("span",ce,a(t.name),1)]),e("li",de,[g("Email: "),e("span",re,a(t.email),1)])])])):(u(),r("div",Z,oe))]),e("div",ue,[e("h1",ge,"Google\u767B\u5165\u72C0\u614B: "+a(i.status),1),me,e("div",he,[e("button",{class:"px-5 py-3 font-semibold text-white transition duration-500 ease-in-out bg-red-400 rounded-lg hover:bg-red-700",onClick:v(U,["prevent"])},"Logout from Google",8,_e)]),pe,e("div",be,[e("ul",null,[e("li",null,[i.picture===null?(u(),r("div",fe)):(u(),r("img",{key:1,src:i.picture,alt:""},null,8,ve))]),e("li",xe,[g("FB ID: "),e("span",we,a(i.id),1)]),e("li",ke,[g("Name: "),e("span",ye,a(i.name),1)]),e("li",Fe,[g("Email: "),e("span",Be,a(i.email),1)])])])]),Ce]),Oe],64))}};export{De as default};
