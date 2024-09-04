import{S as Y}from"./select-BTu4iD0V.js";import{_ as j}from"./img_none_jl-DXZ5QWNO.js";import{P as G}from"./PageLayoutAccountDetails-CBUEnMAH.js";import{r as l,Q as I,A as Q,d as _,h as z,i as U,f as e,k as F,e as b,l as $,t as c,F as q,g as O,S as H,a as J,b as K}from"./index-DBqQFHFZ.js";import"./return-DQqgQfKM.js";import"./TabPage-B_5fpED4.js";const X={class:"w-screen h-auto bg-[#1A45B1] p-[.2rem]"},Z={class:"w-full flex p-[.2rem]"},V={class:"flex gap-[.2rem] items-center justify-start"},ee=e("h1",null,null,-1),te={class:"flex flex-col h-[calc(100vh-2.9rem)] overflow-auto gap-[.2rem]"},ae={class:"grid grid-cols-2"},se={class:"flex gap-[.1rem]"},le=e("span",{class:"text-[#fff] text-[.2rem]"},"Type:",-1),ne={class:"text-[#fff] text-[.2rem]"},oe={class:"flex gap-[.1rem]"},ie=e("span",{class:"text-[#fff] text-[.2rem]"},"Change Amount:",-1),re={class:"text-[#fff] text-[.2rem]"},ce={class:"flex flex-col gap-[.1rem] leading-none"},me={class:"flex gap-[.1rem] leading-none"},de=e("span",{class:"text-[#fff] text-[.2rem]"},"Amount before change:",-1),ue={class:"text-[#fff] text-[.2rem]"},ve={class:"flex gap-[.1rem] leading-none"},fe=e("span",{class:"text-[#fff] text-[.2rem]"},"Amount after change:",-1),pe={class:"text-[#fff] text-[.2rem]"},_e={class:"flex gap-[.1rem] leading-none"},he=e("span",{class:"text-[#fff] text-[.2rem]"},"Date:",-1),ge={class:"text-[#fff] text-[.2rem]"},xe={class:"flex gap-[.1rem] leading-none"},ye=e("span",{class:"text-[#fff] text-[.2rem]"},"Remark:",-1),Te={class:"text-[#fff] text-[.2rem]"},Se={key:0,class:"flex flex-col items-center h-full overflow-auto w-full/"},we=e("div",{class:"flex flex-col h-full justify-center items-center"},[e("img",{class:"w-[2.5rem]",src:j,alt:""}),e("span",{class:"text-[#6FA4EF] text-[.25rem]"},"Sem Registros")],-1),ke=[we],ze={__name:"AcccountDetails",setup(Me){const x=l(!1),{today:y,yesterday:T,thisWeek:S,lastWeek:w,lastMonth:k,thisMonth:M}=I(),B=K(),C=l([{name:"Today"},{name:"Yesterday"},{name:"This Week"},{name:"Last Week"},{name:"This Month"},{name:"Last Month"}]),E=l([{name:"System Add Money"},{name:"System reduce money"},{name:"Online withdrawal failed"},{name:"Online withdrawal"}]),n=l(""),t=l(""),R=s=>{n.value=s,console.log(n.value),l({Today:()=>a.mutate(y.value),Yesterday:()=>a.mutate(T.value),"This Week":()=>a.mutate(S.value),"Last Week":()=>a.mutate(w.value),"This Month":()=>a.mutate(M.value),"Last Month":()=>a.mutate(k.value)}).value[n.value]()},P=s=>{var d,u,v,f,p,i,g,A,L,D,N,W;t.value=s,console.log(t.value);const r=l({"Online withdrawal failed":1,"System Add Money":2,"System reduce money":3,"Online withdrawal":4}),o=l({Today:{type:r.value[t.value],startTime:(d=y.value)==null?void 0:d.startTime,endTime:(u=y.value)==null?void 0:u.endTime,pageSize:"20",pageNumber:" 1"},Yesterday:{type:r.value[t.value],startTime:(v=T.value)==null?void 0:v.startTime,endTime:(f=T.value)==null?void 0:f.endTime,pageSize:"20",pageNumber:" 1"},"This Week":{type:r.value[t.value],startTime:(p=S.value)==null?void 0:p.startTime,endTime:(i=S.value)==null?void 0:i.endTime,pageSize:"20",pageNumber:" 1"},"Last Week":{type:r.value[t.value],startTime:(g=w.value)==null?void 0:g.startTime,endTime:(A=w.value)==null?void 0:A.endTime,pageSize:"20",pageNumber:" 1"},"This Month":{type:r.value[t.value],startTime:(L=M.value)==null?void 0:L.startTime,endTime:(D=M.value)==null?void 0:D.endTime,pageSize:"20",pageNumber:" 1"},"Last Month":{type:r.value[t.value],startTime:(N=k.value)==null?void 0:N.startTime,endTime:(W=k.value)==null?void 0:W.endTime,pageSize:"20",pageNumber:" 1"}}),m=l({"Online withdrawal failed":()=>a.mutate(o.value[n.value]),"System Add Money":()=>a.mutate(o.value[n.value]),"System reduce money":()=>a.mutate(o.value[n.value]),"Online withdrawal":()=>a.mutate(o.value[n.value])});o.value[n.value]&&m.value[t.value]&&m.value[t.value](),console.log(o.value[n.value])},h=l([]),a=Q({mutationFn:s=>J("api/native/v2/accountChangeRecord.do",s),onSuccess:s=>{h.value=s,x.value=!1,B.commit("setUserRecords",h.value)},onMutate:()=>{x.value=!0},onError:s=>{console.log(`this error: ${s}`)}});return(s,r)=>{const o=Y;return _(),z(G,{title:"Relatório"},{default:U(()=>{var m,d,u,v,f,p;return[e("div",X,[e("div",Z,[e("div",V,[F(o,{pass:C.value,title:"Today",onSelectedItem:R},null,8,["pass"]),ee,F(o,{pass:E.value,widthSize:"3rem",title:"All",onSelectedEvent:P},null,8,["pass"])])]),e("div",te,[(_(!0),b(q,null,$((u=(d=(m=h.value)==null?void 0:m.content)==null?void 0:d.page)==null?void 0:u.rows,(i,g)=>(_(),b("div",{key:g,class:"flex flex-col gap-[.1rem] leading-none p-[.2rem] rounded-[.1rem] odd:bg-[#05309F]"},[e("div",ae,[e("div",se,[le,e("span",ne,c(i.typeCn),1)]),e("div",oe,[ie,e("span",re,c(i.money),1)])]),e("div",ce,[e("div",me,[de,e("span",ue,c(i.beforeMoney),1)]),e("div",ve,[fe,e("span",pe,c(i.afterMoney),1)]),e("div",_e,[he,e("span",ge,c(i.createDatetimetr),1)]),e("div",xe,[ye,e("span",Te,c(i.remark),1)])])]))),128)),((p=(f=(v=h.value)==null?void 0:v.content)==null?void 0:f.page)==null?void 0:p.rows)==0?(_(),b("div",Se,ke)):O("",!0)]),x.value?(_(),z(H,{key:0})):O("",!0)])]}),_:1})}}};export{ze as default};
