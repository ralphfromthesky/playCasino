import{r as e,u as v,L as y,M as m,ai as q,N as I,aj as A,ak as M,al as R,am as F,A as T,an as S,c as K,a as x,ao as P,b as W,ap as b,P as D,K as C}from"./index-DBqQFHFZ.js";const k=W(),Q=()=>{const t=e({});return{query:v({queryKey:["userDetails"],staleTime:6e3,refetchInterval:18e5,enabled:!0,queryFn:async()=>await x("/api/userCenter/info/getAccInfo.do"),select:s=>{t.value=s,k.commit("setUserInfo",t.value)},onError:s=>{console.log(`error: ${s}`)}}),userData:t,getPending:()=>{const s=e([]);return{usePending:v({enabled:!1,queryFn:async()=>await P("/api/native/v2/getWaitPickTasks.do"),queryKey:["pendente"],select:c=>(s.value=c.data.content,c.data),onError:()=>{}}),pendingData:s}}}},U=()=>{const[t]=y(m,q),[n]=y(m,I),[a]=y(m,A),[s]=y(m,M),[r]=y(m,R),[c]=y(m,F),o=e([]),f=e(!0),g=e({secType:1,startTime:t.startDate,endTime:t.endDate}),w=e({secType:1,startTime:a.startDate,endTime:a.endDate}),p=e({secType:1,startTime:n.startDate,endTime:n.endDate}),d=e({secType:1,startTime:s.startDate,endTime:s.endDate}),h=e({secType:1,startTime:r.startDate,endTime:r.endDate}),u=e({secType:1,startTime:c.startDate,endTime:c.endDate}),i=T({mutationFn:async l=>b("/api/native/v2/getActPage.do",l),onSuccess:l=>{o.value=l,l.data.content.rows?f.value=!1:l.data.content.rows==0&&(f.value=!0)},onError:l=>console.log(`this erro: ${l}`)});return{historyData:o,userHistory:i,hasData:f,today:g,month:p,week:w,lastMonth:d,lastWeek:h,yesterdays:u}},E=()=>{const t=e([]),n=v({queryFn:async()=>P("/api/native/v2/lunbo.do?code=5"),queryKey:["banner"],enabled:!0,select:a=>{a.data&&(t.value=a.data.content)}});return{bannerImage:t,useBanner:n}},G=()=>{const t=e([]),n=v({queryFn:async()=>P("/api/userCenter/getSecurityInfo.do"),queryKey:["secure"],enabled:!0,select:a=>{a.data&&(t.value=a.data,k.commit("setUserProfile",a.data))}});return{securityData:t,useSecurity:n}},L=()=>{const t=e(!1),n=e("Operation success"),a=e(""),s=e({lang:"en",whatsapp:"",facebook:"",telegram:"",email:"",birthday:""}),r=S();return{mutateProfile:T({mutationFn:async o=>b("/api/native/v2/updateAccountInfo2.do",o),onMutate:o=>{},onSuccess:o=>{r.invalidateQueries({queryKey:["secure"]}),t.value=!0,o.data.success?D.info(n.value):o.data.msg&&(a.value=o.data.msg,D.info(o.data.msg)),setTimeout(()=>{t.value=!1},3e3)}}),obj:s,updated:t,msgInfo:a}},j=()=>{const t=S(),n=e(""),a=e(!1),s=e(!1),r=e(!1),c=e(!1),o=u=>{let i=0;return u.length>=6&&i++,/[A-Z]/.test(u)&&i++,/[0-9]/.test(u)&&i++,/[^A-Za-z0-9]/.test(u)&&i++,i},f=()=>{s.value=!s.value},g=()=>{r.value=!r.value},w=()=>{c.value=!c.value},p=K(()=>o(d.value.opwd)),d=e({opwd:"",pwd:"",confirmPwd:""}),h=T({mutationFn:async()=>C("/api/native/v2/updateLoginPwd.do",d.value),onSuccess:u=>{n.value=u.msg||"Operaton Success",a.value=!0,t.invalidateQueries({queryKey:["secure"]}),setTimeout(()=>{a.value=!1},3e3)},onSettled:()=>{d.value={opwd:"",pwd:"",confirmPwd:""}}});return{changeUserPw:d,changePwd:h,msg:n,showPwdNotif:a,passwordStrength:p,showPw:f,hideShow:s,showPwNew:g,hideShowNew:r,confirmShow:c,showConfirm:w}};export{G as a,L as b,j as c,E as d,U as g,Q as u};
