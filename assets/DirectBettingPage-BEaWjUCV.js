import{_ as ae}from"./antCalendar-DUIYZT2T.js";import{_ as oe}from"./Cartier_copy-Bb4365ez.js";import{_ as ne}from"./img_none_jl-DXZ5QWNO.js";import ie from"./PageLayoutTab-B3Xesah3.js";import{r as i,A as ce,o as le,d as n,h as re,i as me,f as e,k as de,e as c,l as _e,t as a,F as xe,g as fe,a9 as X,C as pe}from"./index-DBqQFHFZ.js";import"./search-BSWYG2gD.js";import"./return-DQqgQfKM.js";import"./TabPage-B_5fpED4.js";import"./TabContainer-DjhXv05H.js";const ge={class:"w-screen"},he={class:"flex gap-[.2rem] px-[.2rem] pt-[.2rem]"},ve={class:"flex flex-col h-[calc(100vh-4.1rem)] p-[.2rem] overflow-auto"},ue={class:"flex items-center bg-[#870000] absolute top-0 left-0 rounded-tl-[.05rem] rounded-br-[.05rem] px-[.1rem] py-[.05rem]"},we={class:"text-[.15rem] text-white"},De={class:"grid grid-cols-2 gap-[.2rem]"},Be={class:"flex flex-col gap-[.1rem]"},ye={class:"flex items-center gap-[.1rem]"},Me={class:"flex items-center text-[#fff] text-[.2rem]"},be=e("span",{class:"flex items-center text-[#fff] text-[.2rem]"},[e("img",{src:oe,alt:"",class:"w-[.3rem]"})],-1),Le={class:"flex items-center gap-[.1rem]"},Ne={class:"flex items-center text-[#fff] text-[.2rem]"},Se={class:"flex flex-col gap-[.1rem] justify-end"},Te={class:"flex items-center gap-[.1rem]"},We=e("span",{class:"flex items-center text-[#fff] text-[.2rem]"},"Profit and Loss",-1),Ee={class:"flex items-center text-[#fff] text-[.2rem]"},Ye={key:0,class:"flex flex-col items-center h-full overflow-auto w-full/"},Fe=e("div",{class:"flex flex-col h-full justify-center items-center"},[e("img",{class:"w-[2.5rem]",src:ne,alt:""}),e("span",{class:"text-[#6FA4EF] text-[.25rem]"},"Sem Registros")],-1),ke=[Fe],Ce={class:"flex gap-[.2rem] fixed bottom-0 bg-[#05309F] h-[1.7rem] w-full p-[.2rem] items-center border-t-[.02rem] border-t-[#3a61c2]"},Pe={class:"flex gap-[.2rem]"},je=e("div",{class:"flex flex-col gap-[.1rem] w-fit leading-none"},[e("div",{class:"flex gap-[.5rem] items-center"},[e("div",{class:"flex items-center text-nowrap"},[e("span",{class:"text-[.2rem] text-white"},"Effective Bets")])]),e("div",{class:"flex gap-[.5rem] items-center"},[e("div",{class:"flex items-center text-nowrap"},[e("span",{class:"text-[.2rem] text-white"},"Other Effective Bets")])]),e("div",{class:"flex gap-[.5rem] items-center"},[e("div",{class:"flex items-center text-nowrap"},[e("span",{class:"text-[.2rem] text-white"},"Total Effective Bets")])])],-1),Ae={class:"flex flex-col gap-[.1rem] leading-none"},ze={class:"flex gap-[.5rem] items-center"},Oe={class:"flex items-center"},Ve={class:"text-[.2rem] text-white"},Ie={class:"flex gap-[.5rem] items-center"},Re={class:"flex items-center"},$e={class:"text-[.2rem] text-white"},qe={class:"flex gap-[.5rem] items-center"},Ge={class:"flex items-center"},He={class:"text-[.2rem] text-white"},Je={class:"flex gap-[.2rem]"},Ke=e("div",{class:"flex flex-col gap-[.1rem] leading-none"},[e("div",{class:"flex gap-[.5rem] items-center"},[e("div",{class:"flex items-center text-nowrap"},[e("span",{class:"text-[.2rem] text-white"},"Direct Subordinate Win/Win")])]),e("div",{class:"flex gap-[.5rem] items-center"},[e("div",{class:"flex items-center text-nowrap"},[e("span",{class:"text-[.2rem] text-white"},"Other subordinate's winnings")])]),e("div",{class:"flex gap-[.5rem] items-center"},[e("div",{class:"flex items-center text-nowrap"},[e("span",{class:"text-[.2rem] text-white"},"Total Win&Lose")])])],-1),Qe={class:"flex flex-col gap-[.1rem] leading-none"},Ue={class:"flex gap-[.5rem] items-center"},Xe={class:"flex items-center"},Ze={class:"text-[.2rem] text-white"},et={class:"flex gap-[.5rem] items-center"},tt={class:"flex items-center"},st={class:"text-[.2rem] text-white"},at={class:"flex gap-[.5rem] items-center"},ot={class:"flex items-center"},nt={class:"text-[.2rem] text-white"},ht={__name:"DirectBettingPage",setup(it){const l=i(),r=i(),Z=s=>{l.value=X(s).format("YYYY-DD-MM")+" 00:00:00"},ee=s=>{r.value=X(s).format("YYYY-MM-DD")+" 23:59:59",m.mutate({startTime:l.value,endTime:r.value,id:"",pageSize:"100",pageNumber:"1",lan:"en"})},t=i([]),m=ce({mutationFn:s=>pe("api/native/v2/getDirectSubBets.do",s),onSuccess:s=>{t.value=s},onError:s=>{console.log(`this error: ${s}`)}});return le(()=>{m.mutate({startTime:"2024-06-13 00:00:00",endTime:"2024-06-13 23:59:59",id:"",pageSize:"100",pageNumber:"1",lan:"en"})}),(s,ct)=>{const te=ae;return n(),re(ie,{title:"Invite"},{default:me(()=>{var d,_,x,f,p,g,h,v,u,w,D,B,y,M,b,L,N,S,T,W,E,Y,F,k,C,P,j,A,z,O,V,I,R,$,q,G,H,J,K,Q,U;return[e("div",ge,[e("div",he,[e("div",null,[de(te,{onStartDate:Z,onEndDate:ee})])]),e("div",ve,[(n(!0),c(xe,null,_e((_=(d=t.value)==null?void 0:d.content)==null?void 0:_.rows,(o,se)=>(n(),c("div",{key:se,class:"flex flex-col gap-[.1rem] leading-none p-[.25rem] rounded-[.1rem] odd:bg-[#05309F] relative"},[e("div",ue,[e("span",we,"V"+a(o.level),1)]),e("div",De,[e("div",Be,[e("div",ye,[e("span",Me,a(o.promotionCode?o.promotionCode:"-"),1),be]),e("div",Le,[e("span",Ne,"Total number of bets "+a(o.totalBetTimes)+" (times)",1)])]),e("div",Se,[e("div",Te,[We,e("span",Ee,a(o.winLostMoney),1)])])])]))),128)),((p=(f=(x=t.value)==null?void 0:x.content)==null?void 0:f.rows)==null?void 0:p.length)==0?(n(),c("div",Ye,ke)):fe("",!0)]),e("div",Ce,[e("div",Pe,[je,e("div",Ae,[e("div",ze,[e("div",Oe,[e("span",Ve,a((v=(h=(g=t.value)==null?void 0:g.content)==null?void 0:h.aggsData)!=null&&v.directValidBetNum?(D=(w=(u=t.value)==null?void 0:u.content)==null?void 0:w.aggsData)==null?void 0:D.directValidBetNum:0),1)])]),e("div",Ie,[e("div",Re,[e("span",$e,a((M=(y=(B=t.value)==null?void 0:B.content)==null?void 0:y.aggsData)!=null&&M.otherBetNum?(N=(L=(b=t.value)==null?void 0:b.content)==null?void 0:L.aggsData)==null?void 0:N.otherBetNum:0),1)])]),e("div",qe,[e("div",Ge,[e("span",He,a((W=(T=(S=t.value)==null?void 0:S.content)==null?void 0:T.aggsData)!=null&&W.allBetNum?(F=(Y=(E=t.value)==null?void 0:E.content)==null?void 0:Y.aggsData)==null?void 0:F.allBetNum:0),1)])])])]),e("div",Je,[Ke,e("div",Qe,[e("div",Ue,[e("div",Xe,[e("span",Ze,a((P=(C=(k=t.value)==null?void 0:k.content)==null?void 0:C.aggsData)!=null&&P.directWinLostMoney?(z=(A=(j=t.value)==null?void 0:j.content)==null?void 0:A.aggsData)==null?void 0:z.directWinLostMoney:0),1)])]),e("div",et,[e("div",tt,[e("span",st,a((I=(V=(O=t.value)==null?void 0:O.content)==null?void 0:V.aggsData)!=null&&I.otherWinLostMoney?(q=($=(R=t.value)==null?void 0:R.content)==null?void 0:$.aggsData)==null?void 0:q.otherWinLostMoney:0),1)])]),e("div",at,[e("div",ot,[e("span",nt,a((J=(H=(G=t.value)==null?void 0:G.content)==null?void 0:H.aggsData)!=null&&J.allWinLostMoney?(U=(Q=(K=t.value)==null?void 0:K.content)==null?void 0:Q.aggsData)==null?void 0:U.allWinLostMoney:0),1)])])])])])])]}),_:1})}}};export{ht as default};
