const __vite__fileDeps=["assets/LoginForm-CinJjDF0.js","assets/antModal-C__hFu8A.js","assets/index-DBqQFHFZ.js","assets/index-CzbXsIGL.css","assets/getUserInfo-BLnPLUKQ.js","assets/globalConfigInformation-NH4S4bmd.js","assets/Toast-ho9uoSh_.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as p,p as b,r as h,E as y,d as l,e as m,f as e,k as c,i as u,j as v,h as $,g as x,b as w,s as g,v as j,G as C,H as I,T as L}from"./index-DBqQFHFZ.js";import B from"./BottomNavbar-CVlywKpW.js";import{_ as E}from"./antModal-C__hFu8A.js";import{n as N}from"./navigation-2nouF6eo.js";const a=r=>(g("data-v-2c703a6c"),r=r(),j(),r),P={class:"mainDiv flex items-center p-[.2rem] bg-[#05309F] border-b-[.055rem] border-b-[#3A61C2] h-[.9rem] top-0 z-10"},T={class:"flex gap-[.7rem] items-center overflow-x-auto text-white"},S=a(()=>e("div",{class:"flex link-content items-center justify-center relative h-[.9rem]"},[e("span",{class:"text-[.27rem]"},"Eventos")],-1)),V=a(()=>e("div",{class:"flex link-content items-center justify-center relative h-[.9rem]"},[e("span",{class:"text-[.27rem]"},"Mission")],-1)),A=a(()=>e("span",{class:"text-[.27rem]"},"VIP",-1)),D=[A],M=a(()=>e("span",{class:"text-[.27rem]"},"Pendente",-1)),O=[M],R=a(()=>e("span",{class:"text-[.27rem]"},"Juros",-1)),G=[R],H=a(()=>e("span",{class:"text-[.27rem]"},"History",-1)),z=[H],F={__name:"NavBarTab",setup(r){const i=defineAsyncComponent(()=>b(()=>import("./LoginForm-CinJjDF0.js").then(n=>n.L),__vite__mapDeps([0,1,2,3,4,5,6]))),_=w(),t=h(!1),o=n=>{_.state.userInfo.isLogin?N(n):t.value=!t.value};return(n,s)=>{const f=y("router-link"),k=E;return l(),m("div",P,[e("div",T,[c(f,{to:"/event"},{default:u(()=>[S]),_:1}),c(f,{to:"/task"},{default:u(()=>[V]),_:1}),e("div",{class:"flex link-content items-center justify-center relative h-[.9rem]",onClick:s[0]||(s[0]=d=>o("/vip"))},D),e("div",{class:"flex link-content items-center justify-center relative h-[.9rem]",onClick:s[1]||(s[1]=d=>o("/pendente"))},O),e("div",{class:"flex link-content items-center justify-center relative h-[.9rem]",onClick:s[2]||(s[2]=d=>o("/juros"))},G),e("div",{class:"flex link-content items-center justify-center relative h-[.9rem]",onClick:s[3]||(s[3]=d=>o("/records"))},z)]),v(_).state.userInfo.isLogin?x("",!0):(l(),$(k,{key:0,isOpen:t.value,componentPass:v(i),backGrounds:!0},null,8,["isOpen","componentPass"]))])}}},J=p(F,[["__scopeId","data-v-2c703a6c"]]),q={class:"mainDiv2 flex bg-[#1a45b1]"},K={class:"h-[calc(100vh-1.7rem)] pb-[.2rem] w-full overflow-auto"},Q={class:"flex items-center justify-center w-full"},U={key:0,class:"mainDiv"},W={__name:"Layout",setup(r){const i=h("route-forward");return C().beforeEach((t,o,n)=>{t.meta.index>o.meta.index?i.value="route-forward":i.value="route-backward",n()}),(t,o)=>(l(),m("main",null,[c(J),e("div",q,[e("section",K,[e("div",Q,[c(L,{name:i.value,appear:""},{default:u(()=>[t.$slots.default?(l(),m("div",U,[I(t.$slots,"default",{},void 0,!0)])):x("",!0)]),_:3},8,["name"])])])]),c(B)]))}},te=p(W,[["__scopeId","data-v-0bfb7ce1"]]);export{te as L};
