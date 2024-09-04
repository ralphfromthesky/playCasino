import{u as _}from"./globalConfigInformation-NH4S4bmd.js";import{P as C}from"./PageLayout-DGDKa4Zl.js";import{r as i,d as f,h as b,i as P,b as y,f as e,j as u,e as O,k as d,g as F}from"./index-DBqQFHFZ.js";import{e as c}from"./vue3-otp-input.esm-E77deVMh.js";import"./getUserInfo-BLnPLUKQ.js";import"./return-DQqgQfKM.js";const p="/images/eye.png",q={class:"bg-[#1a45b1] w-screen"},B={class:"p-[.2rem]"},I=e("div",{class:"flex flex-col space-y-[.3rem] my-[.3rem]"},[e("div",{class:"flex justify-center w-full"},[e("span",{class:"text-[.22rem] text-[#04BE02] text-center"},"É o seu primeiro saque. Você precisa configurar uma senha de saque")]),e("div",{class:"flex w-full"},[e("span",{class:"text-[.3rem] text-white"},"Defina sua senha de saque")])],-1),k={class:"flex flex-col gap-[.4rem]"},S={key:0,class:"flex flex-col gap-[.1rem]"},j=e("div",{class:"flex justify-between"},[e("span",{class:"text-[.22rem] text-white"},"Enter Old Password"),e("img",{src:p,class:"w-[.4rem] h-[.36rem]",alt:""})],-1),N={class:"flex flex-col gap-[.1rem]"},A=e("div",{class:"flex justify-between"},[e("span",{class:"text-[.22rem] text-white"},"Nova Senha de Saque"),e("img",{src:p,class:"w-[.4rem] h-[.36rem]",alt:""})],-1),V={class:"flex flex-col gap-[.1rem]"},E=e("div",{class:"flex justify-between"},[e("span",{class:"text-[.22rem] text-white"},"Nova Senha de Saque"),e("img",{src:p,class:"w-[.4rem] h-[.36rem]",alt:""})],-1),U=e("div",{class:"mt-[.3rem] leading-[1.1]"},[e("span",{class:"text-[.22rem] text-[#FFAA09]"},"Atenção: A senha de saque protege seus fundos e é extremamente importante. Mantenha-a em segredo para evitar qualquer perda financeira.")],-1),K={__name:"WithdrawPasswordPage",setup(G){const{withdrawPassword:v}=_(),l=y().state.withdrawConfig.content.bankInfo,s=i(""),a=i(""),o=i(""),w=t=>{s.value=t},h=t=>{a.value=t},x=t=>{o.value=t};function g(){s.value===""||a.value===""||(l==null?void 0:l.receiptPwd)!==null&&o.value===""?console.log("Password cannot be empty!"):s.value!==a.value?console.log("Password do not match!"):v.mutate({pwd:s.value,confirmPwd:a.value,opwd:o.value?o.value:void 0})}return(t,n)=>(f(),b(C,{title:"Senha de Saque"},{default:P(()=>{var m;return[e("div",q,[e("div",B,[I,e("div",k,[((m=u(l))==null?void 0:m.receiptPwd)!==null?(f(),O("div",S,[j,d(u(c),{tabindex:"1",ref:"otpInput","input-classes":"otpInputs !text-[.7rem] caret-transparent",conditionalClass:["one","two","three","four","five","six"],separator:"",inputmode:"numeric","input-type":"password","num-inputs":6,value:o.value,"onUpdate:value":n[0]||(n[0]=r=>o.value=r),"should-auto-focus":!1,"should-focus-order":!0,onOnChange:x,onOnComplete:t.handleOnComplete},null,8,["value","onOnComplete"])])):F("",!0),e("div",N,[A,d(u(c),{tabindex:"1",ref:"otpInput","input-classes":"otpInputs !text-[.7rem] caret-transparent",conditionalClass:["one","two","three","four","five","six"],separator:"",inputmode:"numeric","input-type":"password","num-inputs":6,value:s.value,"onUpdate:value":n[1]||(n[1]=r=>s.value=r),"should-auto-focus":!1,"should-focus-order":!0,onOnChange:w,onOnComplete:t.handleOnComplete},null,8,["value","onOnComplete"])]),e("div",V,[E,d(u(c),{tabindex:"2",ref:"otpInput","input-classes":"otpInputs !text-[.7rem] caret-transparent",conditionalClass:["one","two","three","four","five","six"],separator:"",inputmode:"numeric","input-type":"password","num-inputs":6,value:a.value,"onUpdate:value":n[2]||(n[2]=r=>a.value=r),"should-auto-focus":!1,"should-focus-order":!0,onOnChange:h,onOnComplete:t.handleOnComplete},null,8,["value","onOnComplete"])])]),U]),e("div",{class:"flex items-center justify-center fixed bottom-0 p-[.2rem] w-[7.3rem] bg-[#05309F]"},[e("button",{onClick:g,class:"w-[6rem] h-[.7rem] bg-[#FFF0BB] border-[#FFF0BB] text-[#05309F] rounded-[.15rem]"},"Confirmar")])])]}),_:1}))}};export{K as default};
