const __vite__fileDeps=["assets/chunks/VPLocalSearchBox.FMiWf2LM.js","assets/chunks/framework.DMtq9Ahk.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{d as x,o as t,c as z,r as H,n as F,a as e2,t as $,b as w,w as p,e as g,T as $1,_ as A,u as Hs,i as zs,f as hs,g as W3,h as B,j as I2,k as S,l as L2,m as h,p as f,q as Y,s as K,v as k2,x as b3,y as o2,z as D1,A as j3,B as p0,C as ps,D as Vs,E as _2,F as q,G as Q,H as V0,I as R1,J as k,K as S2,L as d0,M as E1,N as j2,O as n1,P as ds,Q as Q2,R as Ms,S as x3,U as Cs,V as M0,W as Ls,X as gs,Y as bs,Z as C0,$ as X3,a0 as xs,a1 as Ns,a2 as Ss,a3 as L0,a4 as ks,a5 as ys,a6 as ws,a7 as As,a8 as u3,a9 as _s}from"./framework.DMtq9Ahk.js";const Ps=x({__name:"VPBadge",props:{text:{},type:{default:"tip"}},setup(c){return(a,e)=>(t(),z("span",{class:F(["VPBadge",a.type])},[H(a.$slots,"default",{},()=>[e2($(a.text),1)])],2))}}),Ts={key:0,class:"VPBackdrop"},Bs=x({__name:"VPBackdrop",props:{show:{type:Boolean}},setup(c){return(a,e)=>(t(),w($1,{name:"fade"},{default:p(()=>[a.show?(t(),z("div",Ts)):g("",!0)]),_:1}))}}),Fs=A(Bs,[["__scopeId","data-v-699a7235"]]),P=Hs;function $s(c,a){let e,r=!1;return()=>{e&&clearTimeout(e),r?e=setTimeout(c,a):(c(),(r=!0)&&setTimeout(()=>r=!1,a))}}function N3(c){return/^\//.test(c)?c:`/${c}`}function Y3(c){const{pathname:a,search:e,hash:r,protocol:s}=new URL(c,"http://a.com");if(zs(c)||c.startsWith("#")||!s.startsWith("http")||!hs(a))return c;const{site:n}=P(),i=a.endsWith("/")||a.endsWith(".html")?c:c.replace(/(?:(^\.+)\/)?.*$/,`$1${a.replace(/(\.md)?$/,n.value.cleanUrls?"":".html")}${e}${r}`);return W3(i)}const K3=B(I2?location.hash:"");I2&&window.addEventListener("hashchange",()=>{K3.value=location.hash});function i1({removeCurrent:c=!0,correspondingLink:a=!1}={}){const{site:e,localeIndex:r,page:s,theme:n}=P(),i=S(()=>{var l,m;return{label:(l=e.value.locales[r.value])==null?void 0:l.label,link:((m=e.value.locales[r.value])==null?void 0:m.link)||(r.value==="root"?"/":`/${r.value}/`)}});return{localeLinks:S(()=>Object.entries(e.value.locales).flatMap(([l,m])=>c&&i.value.label===m.label?[]:{text:m.label,link:Ds(m.link||(l==="root"?"/":`/${l}/`),n.value.i18nRouting!==!1&&a,s.value.relativePath.slice(i.value.link.length-1),!e.value.cleanUrls)+K3.value})),currentLang:i}}function Ds(c,a,e,r){return a?c.replace(/\/$/,"")+N3(e.replace(/(^|\/)index\.md$/,"$1").replace(/\.md$/,r?".html":"")):c}const Rs=c=>(Y("data-v-7b8b6fce"),c=c(),K(),c),Es={class:"NotFound"},Os={class:"code"},Is={class:"title"},Us=Rs(()=>h("div",{class:"divider"},null,-1)),Gs={class:"quote"},qs={class:"action"},Ws=["href","aria-label"],js=x({__name:"NotFound",setup(c){const{site:a,theme:e}=P(),{localeLinks:r}=i1({removeCurrent:!1}),s=B("/");return L2(()=>{var i;const n=window.location.pathname.replace(a.value.base,"").replace(/(^.*?\/).*$/,"/$1");r.value.length&&(s.value=((i=r.value.find(({link:o})=>o.startsWith(n)))==null?void 0:i.link)||r.value[0].link)}),(n,i)=>{var o,l,m,v,u;return t(),z("div",Es,[h("p",Os,$(((o=f(e).notFound)==null?void 0:o.code)??"404"),1),h("h1",Is,$(((l=f(e).notFound)==null?void 0:l.title)??"PAGE NOT FOUND"),1),Us,h("blockquote",Gs,$(((m=f(e).notFound)==null?void 0:m.quote)??"But if you don't change your direction, and if you keep looking, you may end up where you are heading."),1),h("div",qs,[h("a",{class:"link",href:f(W3)(s.value),"aria-label":((v=f(e).notFound)==null?void 0:v.linkLabel)??"go to home"},$(((u=f(e).notFound)==null?void 0:u.linkText)??"Take me home"),9,Ws)])])}}}),Xs=A(js,[["__scopeId","data-v-7b8b6fce"]]);function g0(c,a){if(Array.isArray(c))return S1(c);if(c==null)return[];a=N3(a);const e=Object.keys(c).sort((s,n)=>n.split("/").length-s.split("/").length).find(s=>a.startsWith(N3(s))),r=e?c[e]:[];return Array.isArray(r)?S1(r):S1(r.items,r.base)}function Ys(c){const a=[];let e=0;for(const r in c){const s=c[r];if(s.items){e=a.push(s);continue}a[e]||a.push({items:[]}),a[e].items.push(s)}return a}function Ks(c){const a=[];function e(r){for(const s of r)s.text&&s.link&&a.push({text:s.text,link:s.link,docFooterText:s.docFooterText}),s.items&&e(s.items)}return e(c),a}function S3(c,a){return Array.isArray(a)?a.some(e=>S3(c,e)):k2(c,a.link)?!0:a.items?S3(c,a.items):!1}function S1(c,a){return[...c].map(e=>{const r={...e},s=r.base||a;return s&&r.link&&(r.link=s+r.link),r.items&&(r.items=S1(r.items,s)),r})}function z2(){const{frontmatter:c,page:a,theme:e}=P(),r=b3("(min-width: 960px)"),s=B(!1),n=S(()=>{const _=e.value.sidebar,y=a.value.relativePath;return _?g0(_,y):[]}),i=B(n.value);o2(n,(_,y)=>{JSON.stringify(_)!==JSON.stringify(y)&&(i.value=n.value)});const o=S(()=>c.value.sidebar!==!1&&i.value.length>0&&c.value.layout!=="home"),l=S(()=>m?c.value.aside==null?e.value.aside==="left":c.value.aside==="left":!1),m=S(()=>c.value.layout==="home"?!1:c.value.aside!=null?!!c.value.aside:e.value.aside!==!1),v=S(()=>o.value&&r.value),u=S(()=>o.value?Ys(i.value):[]);function V(){s.value=!0}function d(){s.value=!1}function L(){s.value?d():V()}return{isOpen:s,sidebar:i,sidebarGroups:u,hasSidebar:o,hasAside:m,leftAside:l,isSidebarEnabled:v,open:V,close:d,toggle:L}}function Qs(c,a){let e;D1(()=>{e=c.value?document.activeElement:void 0}),L2(()=>{window.addEventListener("keyup",r)}),j3(()=>{window.removeEventListener("keyup",r)});function r(s){s.key==="Escape"&&c.value&&(a(),e==null||e.focus())}}function Zs(c){const{page:a}=P(),e=B(!1),r=S(()=>c.value.collapsed!=null),s=S(()=>!!c.value.link),n=B(!1),i=()=>{n.value=k2(a.value.relativePath,c.value.link)};o2([a,c,K3],i),L2(i);const o=S(()=>n.value?!0:c.value.items?S3(a.value.relativePath,c.value.items):!1),l=S(()=>!!(c.value.items&&c.value.items.length));D1(()=>{e.value=!!(r.value&&c.value.collapsed)}),p0(()=>{(n.value||o.value)&&(e.value=!1)});function m(){r.value&&(e.value=!e.value)}return{collapsed:e,collapsible:r,isLink:s,isActiveLink:n,hasActiveLink:o,hasChildren:l,toggle:m}}function Js(){const{hasSidebar:c}=z2(),a=b3("(min-width: 960px)"),e=b3("(min-width: 1280px)");return{isAsideEnabled:S(()=>!e.value&&!a.value?!1:c.value?e.value:a.value)}}const k3=[];function b0(c){return typeof c.outline=="object"&&!Array.isArray(c.outline)&&c.outline.label||c.outlineTitle||"On this page"}function Q3(c){const a=[...document.querySelectorAll(".VPDoc :where(h1,h2,h3,h4,h5,h6)")].filter(e=>e.id&&e.hasChildNodes()).map(e=>{const r=Number(e.tagName[1]);return{element:e,title:cn(e),link:"#"+e.id,level:r}});return an(a,c)}function cn(c){let a="";for(const e of c.childNodes)if(e.nodeType===1){if(e.classList.contains("VPBadge")||e.classList.contains("header-anchor")||e.classList.contains("ignore-header"))continue;a+=e.textContent}else e.nodeType===3&&(a+=e.textContent);return a.trim()}function an(c,a){if(a===!1)return[];const e=(typeof a=="object"&&!Array.isArray(a)?a.level:a)||2,[r,s]=typeof e=="number"?[e,e]:e==="deep"?[2,6]:e;c=c.filter(i=>i.level>=r&&i.level<=s),k3.length=0;for(const{element:i,link:o}of c)k3.push({element:i,link:o});const n=[];c:for(let i=0;i<c.length;i++){const o=c[i];if(i===0)n.push(o);else{for(let l=i-1;l>=0;l--){const m=c[l];if(m.level<o.level){(m.children||(m.children=[])).push(o);continue c}}n.push(o)}}return n}function en(c,a){const{isAsideEnabled:e}=Js(),r=$s(n,100);let s=null;L2(()=>{requestAnimationFrame(n),window.addEventListener("scroll",r)}),ps(()=>{i(location.hash)}),j3(()=>{window.removeEventListener("scroll",r)});function n(){if(!e.value)return;const o=window.scrollY,l=window.innerHeight,m=document.body.offsetHeight,v=Math.abs(o+l-m)<1,u=k3.map(({element:d,link:L})=>({link:L,top:rn(d)})).filter(({top:d})=>!Number.isNaN(d)).sort((d,L)=>d.top-L.top);if(!u.length){i(null);return}if(o<1){i(null);return}if(v){i(u[u.length-1].link);return}let V=null;for(const{link:d,top:L}of u){if(L>o+Vs()+4)break;V=d}i(V)}function i(o){s&&s.classList.remove("active"),o==null?s=null:s=c.value.querySelector(`a[href="${decodeURIComponent(o)}"]`);const l=s;l?(l.classList.add("active"),a.value.style.top=l.offsetTop+39+"px",a.value.style.opacity="1"):(a.value.style.top="33px",a.value.style.opacity="0")}}function rn(c){let a=0;for(;c!==document.body;){if(c===null)return NaN;a+=c.offsetTop,c=c.offsetParent}return a}const sn=["href","title"],nn=x({__name:"VPDocOutlineItem",props:{headers:{},root:{type:Boolean}},setup(c){function a({target:e}){const r=e.href.split("#")[1],s=document.getElementById(decodeURIComponent(r));s==null||s.focus({preventScroll:!0})}return(e,r)=>{const s=_2("VPDocOutlineItem",!0);return t(),z("ul",{class:F(["VPDocOutlineItem",e.root?"root":"nested"])},[(t(!0),z(q,null,Q(e.headers,({children:n,link:i,title:o})=>(t(),z("li",null,[h("a",{class:"outline-link",href:i,onClick:a,title:o},$(o),9,sn),n!=null&&n.length?(t(),w(s,{key:0,headers:n},null,8,["headers"])):g("",!0)]))),256))],2)}}}),x0=A(nn,[["__scopeId","data-v-3e0f837b"]]),on=c=>(Y("data-v-9acb7ac5"),c=c(),K(),c),ln={class:"content"},tn={class:"outline-title",role:"heading","aria-level":"2"},fn={"aria-labelledby":"doc-outline-aria-label"},mn=on(()=>h("span",{class:"visually-hidden",id:"doc-outline-aria-label"}," Table of Contents for current page ",-1)),vn=x({__name:"VPDocAsideOutline",setup(c){const{frontmatter:a,theme:e}=P(),r=V0([]);R1(()=>{r.value=Q3(a.value.outline??e.value.outline)});const s=B(),n=B();return en(s,n),(i,o)=>(t(),z("div",{class:F(["VPDocAsideOutline",{"has-outline":r.value.length>0}]),ref_key:"container",ref:s,role:"navigation"},[h("div",ln,[h("div",{class:"outline-marker",ref_key:"marker",ref:n},null,512),h("div",tn,$(f(b0)(f(e))),1),h("nav",fn,[mn,k(x0,{headers:r.value,root:!0},null,8,["headers"])])])],2))}}),un=A(vn,[["__scopeId","data-v-9acb7ac5"]]),Hn={class:"VPDocAsideCarbonAds"},zn=x({__name:"VPDocAsideCarbonAds",props:{carbonAds:{}},setup(c){const a=()=>null;return(e,r)=>(t(),z("div",Hn,[k(f(a),{"carbon-ads":e.carbonAds},null,8,["carbon-ads"])]))}}),hn=c=>(Y("data-v-40acd6cc"),c=c(),K(),c),pn={class:"VPDocAside"},Vn=hn(()=>h("div",{class:"spacer"},null,-1)),dn=x({__name:"VPDocAside",setup(c){const{theme:a}=P();return(e,r)=>(t(),z("div",pn,[H(e.$slots,"aside-top",{},void 0,!0),H(e.$slots,"aside-outline-before",{},void 0,!0),k(un),H(e.$slots,"aside-outline-after",{},void 0,!0),Vn,H(e.$slots,"aside-ads-before",{},void 0,!0),f(a).carbonAds?(t(),w(zn,{key:0,"carbon-ads":f(a).carbonAds},null,8,["carbon-ads"])):g("",!0),H(e.$slots,"aside-ads-after",{},void 0,!0),H(e.$slots,"aside-bottom",{},void 0,!0)]))}}),Mn=A(dn,[["__scopeId","data-v-40acd6cc"]]);function Cn(){const{theme:c,page:a}=P();return S(()=>{const{text:e="Edit this page",pattern:r=""}=c.value.editLink||{};let s;return typeof r=="function"?s=r(a.value):s=r.replace(/:path/g,a.value.filePath),{url:s,text:e}})}function Ln(){const{page:c,theme:a,frontmatter:e}=P();return S(()=>{var l,m,v,u,V,d,L,_;const r=g0(a.value.sidebar,c.value.relativePath),s=Ks(r),n=s.findIndex(y=>k2(c.value.relativePath,y.link)),i=((l=a.value.docFooter)==null?void 0:l.prev)===!1&&!e.value.prev||e.value.prev===!1,o=((m=a.value.docFooter)==null?void 0:m.next)===!1&&!e.value.next||e.value.next===!1;return{prev:i?void 0:{text:(typeof e.value.prev=="string"?e.value.prev:typeof e.value.prev=="object"?e.value.prev.text:void 0)??((v=s[n-1])==null?void 0:v.docFooterText)??((u=s[n-1])==null?void 0:u.text),link:(typeof e.value.prev=="object"?e.value.prev.link:void 0)??((V=s[n-1])==null?void 0:V.link)},next:o?void 0:{text:(typeof e.value.next=="string"?e.value.next:typeof e.value.next=="object"?e.value.next.text:void 0)??((d=s[n+1])==null?void 0:d.docFooterText)??((L=s[n+1])==null?void 0:L.text),link:(typeof e.value.next=="object"?e.value.next.link:void 0)??((_=s[n+1])==null?void 0:_.link)}}})}const n2=x({__name:"VPLink",props:{tag:{},href:{},noIcon:{type:Boolean},target:{},rel:{}},setup(c){const a=c,e=S(()=>a.tag??(a.href?"a":"span")),r=S(()=>a.href&&d0.test(a.href));return(s,n)=>(t(),w(S2(e.value),{class:F(["VPLink",{link:s.href,"vp-external-link-icon":r.value,"no-icon":s.noIcon}]),href:s.href?f(Y3)(s.href):void 0,target:s.target??(r.value?"_blank":void 0),rel:s.rel??(r.value?"noreferrer":void 0)},{default:p(()=>[H(s.$slots,"default")]),_:3},8,["class","href","target","rel"]))}}),gn={class:"VPLastUpdated"},bn=["datetime"],xn=x({__name:"VPDocFooterLastUpdated",setup(c){const{theme:a,page:e,frontmatter:r,lang:s}=P(),n=S(()=>new Date(r.value.lastUpdated??e.value.lastUpdated)),i=S(()=>n.value.toISOString()),o=B("");return L2(()=>{D1(()=>{var l,m,v;o.value=new Intl.DateTimeFormat((m=(l=a.value.lastUpdated)==null?void 0:l.formatOptions)!=null&&m.forceLocale?s.value:void 0,((v=a.value.lastUpdated)==null?void 0:v.formatOptions)??{dateStyle:"short",timeStyle:"short"}).format(n.value)})}),(l,m)=>{var v;return t(),z("p",gn,[e2($(((v=f(a).lastUpdated)==null?void 0:v.text)||f(a).lastUpdatedText||"Last updated")+": ",1),h("time",{datetime:i.value},$(o.value),9,bn)])}}}),Nn=A(xn,[["__scopeId","data-v-984a4261"]]),Sn=c=>(Y("data-v-3e4e2c1e"),c=c(),K(),c),kn={key:0,class:"VPDocFooter"},yn={key:0,class:"edit-info"},wn={key:0,class:"edit-link"},An=Sn(()=>h("span",{class:"vpi-square-pen edit-link-icon"},null,-1)),_n={key:1,class:"last-updated"},Pn={key:1,class:"prev-next"},Tn={class:"pager"},Bn=["innerHTML"],Fn=["innerHTML"],$n={class:"pager"},Dn=["innerHTML"],Rn=["innerHTML"],En=x({__name:"VPDocFooter",setup(c){const{theme:a,page:e,frontmatter:r}=P(),s=Cn(),n=Ln(),i=S(()=>a.value.editLink&&r.value.editLink!==!1),o=S(()=>e.value.lastUpdated&&r.value.lastUpdated!==!1),l=S(()=>i.value||o.value||n.value.prev||n.value.next);return(m,v)=>{var u,V,d,L;return l.value?(t(),z("footer",kn,[H(m.$slots,"doc-footer-before",{},void 0,!0),i.value||o.value?(t(),z("div",yn,[i.value?(t(),z("div",wn,[k(n2,{class:"edit-link-button",href:f(s).url,"no-icon":!0},{default:p(()=>[An,e2(" "+$(f(s).text),1)]),_:1},8,["href"])])):g("",!0),o.value?(t(),z("div",_n,[k(Nn)])):g("",!0)])):g("",!0),(u=f(n).prev)!=null&&u.link||(V=f(n).next)!=null&&V.link?(t(),z("nav",Pn,[h("div",Tn,[(d=f(n).prev)!=null&&d.link?(t(),w(n2,{key:0,class:"pager-link prev",href:f(n).prev.link},{default:p(()=>{var _;return[h("span",{class:"desc",innerHTML:((_=f(a).docFooter)==null?void 0:_.prev)||"Previous page"},null,8,Bn),h("span",{class:"title",innerHTML:f(n).prev.text},null,8,Fn)]}),_:1},8,["href"])):g("",!0)]),h("div",$n,[(L=f(n).next)!=null&&L.link?(t(),w(n2,{key:0,class:"pager-link next",href:f(n).next.link},{default:p(()=>{var _;return[h("span",{class:"desc",innerHTML:((_=f(a).docFooter)==null?void 0:_.next)||"Next page"},null,8,Dn),h("span",{class:"title",innerHTML:f(n).next.text},null,8,Rn)]}),_:1},8,["href"])):g("",!0)])])):g("",!0)])):g("",!0)}}}),On=A(En,[["__scopeId","data-v-3e4e2c1e"]]),In=c=>(Y("data-v-3624018e"),c=c(),K(),c),Un={class:"container"},Gn=In(()=>h("div",{class:"aside-curtain"},null,-1)),qn={class:"aside-container"},Wn={class:"aside-content"},jn={class:"content"},Xn={class:"content-container"},Yn={class:"main"},Kn=x({__name:"VPDoc",setup(c){const{theme:a}=P(),e=E1(),{hasSidebar:r,hasAside:s,leftAside:n}=z2(),i=S(()=>e.path.replace(/[./]+/g,"_").replace(/_html$/,""));return(o,l)=>{const m=_2("Content");return t(),z("div",{class:F(["VPDoc",{"has-sidebar":f(r),"has-aside":f(s)}])},[H(o.$slots,"doc-top",{},void 0,!0),h("div",Un,[f(s)?(t(),z("div",{key:0,class:F(["aside",{"left-aside":f(n)}])},[Gn,h("div",qn,[h("div",Wn,[k(Mn,null,{"aside-top":p(()=>[H(o.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":p(()=>[H(o.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":p(()=>[H(o.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":p(()=>[H(o.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":p(()=>[H(o.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":p(()=>[H(o.$slots,"aside-ads-after",{},void 0,!0)]),_:3})])])],2)):g("",!0),h("div",jn,[h("div",Xn,[H(o.$slots,"doc-before",{},void 0,!0),h("main",Yn,[k(m,{class:F(["vp-doc",[i.value,f(a).externalLinkIcon&&"external-link-icon-enabled"]])},null,8,["class"])]),k(On,null,{"doc-footer-before":p(()=>[H(o.$slots,"doc-footer-before",{},void 0,!0)]),_:3}),H(o.$slots,"doc-after",{},void 0,!0)])])]),H(o.$slots,"doc-bottom",{},void 0,!0)],2)}}}),Qn=A(Kn,[["__scopeId","data-v-3624018e"]]),Zn=x({__name:"VPButton",props:{tag:{},size:{default:"medium"},theme:{default:"brand"},text:{},href:{},target:{},rel:{}},setup(c){const a=c,e=S(()=>a.href&&d0.test(a.href)),r=S(()=>a.tag||a.href?"a":"button");return(s,n)=>(t(),w(S2(r.value),{class:F(["VPButton",[s.size,s.theme]]),href:s.href?f(Y3)(s.href):void 0,target:a.target??(e.value?"_blank":void 0),rel:a.rel??(e.value?"noreferrer":void 0)},{default:p(()=>[e2($(s.text),1)]),_:1},8,["class","href","target","rel"]))}}),Jn=A(Zn,[["__scopeId","data-v-e0b8bcb6"]]),ci=["src","alt"],ai=x({inheritAttrs:!1,__name:"VPImage",props:{image:{},alt:{}},setup(c){return(a,e)=>{const r=_2("VPImage",!0);return a.image?(t(),z(q,{key:0},[typeof a.image=="string"||"src"in a.image?(t(),z("img",j2({key:0,class:"VPImage"},typeof a.image=="string"?a.$attrs:{...a.image,...a.$attrs},{src:f(W3)(typeof a.image=="string"?a.image:a.image.src),alt:a.alt??(typeof a.image=="string"?"":a.image.alt||"")}),null,16,ci)):(t(),z(q,{key:1},[k(r,j2({class:"dark",image:a.image.dark,alt:a.image.alt},a.$attrs),null,16,["image","alt"]),k(r,j2({class:"light",image:a.image.light,alt:a.image.alt},a.$attrs),null,16,["image","alt"])],64))],64)):g("",!0)}}}),A1=A(ai,[["__scopeId","data-v-aa3d1b5b"]]),ei=c=>(Y("data-v-2f0f60e8"),c=c(),K(),c),ri={class:"container"},si={class:"main"},ni={key:0,class:"name"},ii=["innerHTML"],oi=["innerHTML"],li=["innerHTML"],ti={key:0,class:"actions"},fi={key:0,class:"image"},mi={class:"image-container"},vi=ei(()=>h("div",{class:"image-bg"},null,-1)),ui=x({__name:"VPHero",props:{name:{},text:{},tagline:{},image:{},actions:{}},setup(c){const a=n1("hero-image-slot-exists");return(e,r)=>(t(),z("div",{class:F(["VPHero",{"has-image":e.image||f(a)}])},[h("div",ri,[h("div",si,[H(e.$slots,"home-hero-info-before",{},void 0,!0),H(e.$slots,"home-hero-info",{},()=>[e.name?(t(),z("h1",ni,[h("span",{innerHTML:e.name,class:"clip"},null,8,ii)])):g("",!0),e.text?(t(),z("p",{key:1,innerHTML:e.text,class:"text"},null,8,oi)):g("",!0),e.tagline?(t(),z("p",{key:2,innerHTML:e.tagline,class:"tagline"},null,8,li)):g("",!0)],!0),H(e.$slots,"home-hero-info-after",{},void 0,!0),e.actions?(t(),z("div",ti,[(t(!0),z(q,null,Q(e.actions,s=>(t(),z("div",{key:s.link,class:"action"},[k(Jn,{tag:"a",size:"medium",theme:s.theme,text:s.text,href:s.link,target:s.target,rel:s.rel},null,8,["theme","text","href","target","rel"])]))),128))])):g("",!0),H(e.$slots,"home-hero-actions-after",{},void 0,!0)]),e.image||f(a)?(t(),z("div",fi,[h("div",mi,[vi,H(e.$slots,"home-hero-image",{},()=>[e.image?(t(),w(A1,{key:0,class:"image-src",image:e.image},null,8,["image"])):g("",!0)],!0)])])):g("",!0)])],2))}}),Hi=A(ui,[["__scopeId","data-v-2f0f60e8"]]),zi=x({__name:"VPHomeHero",setup(c){const{frontmatter:a}=P();return(e,r)=>f(a).hero?(t(),w(Hi,{key:0,class:"VPHomeHero",name:f(a).hero.name,text:f(a).hero.text,tagline:f(a).hero.tagline,image:f(a).hero.image,actions:f(a).hero.actions},{"home-hero-info-before":p(()=>[H(e.$slots,"home-hero-info-before")]),"home-hero-info":p(()=>[H(e.$slots,"home-hero-info")]),"home-hero-info-after":p(()=>[H(e.$slots,"home-hero-info-after")]),"home-hero-actions-after":p(()=>[H(e.$slots,"home-hero-actions-after")]),"home-hero-image":p(()=>[H(e.$slots,"home-hero-image")]),_:3},8,["name","text","tagline","image","actions"])):g("",!0)}}),hi=c=>(Y("data-v-8a114d18"),c=c(),K(),c),pi={class:"box"},Vi={key:0,class:"icon"},di=["innerHTML"],Mi=["innerHTML"],Ci=["innerHTML"],Li={key:4,class:"link-text"},gi={class:"link-text-value"},bi=hi(()=>h("span",{class:"vpi-arrow-right link-text-icon"},null,-1)),xi=x({__name:"VPFeature",props:{icon:{},title:{},details:{},link:{},linkText:{},rel:{},target:{}},setup(c){return(a,e)=>(t(),w(n2,{class:"VPFeature",href:a.link,rel:a.rel,target:a.target,"no-icon":!0,tag:a.link?"a":"div"},{default:p(()=>[h("article",pi,[typeof a.icon=="object"&&a.icon.wrap?(t(),z("div",Vi,[k(A1,{image:a.icon,alt:a.icon.alt,height:a.icon.height||48,width:a.icon.width||48},null,8,["image","alt","height","width"])])):typeof a.icon=="object"?(t(),w(A1,{key:1,image:a.icon,alt:a.icon.alt,height:a.icon.height||48,width:a.icon.width||48},null,8,["image","alt","height","width"])):a.icon?(t(),z("div",{key:2,class:"icon",innerHTML:a.icon},null,8,di)):g("",!0),h("h2",{class:"title",innerHTML:a.title},null,8,Mi),a.details?(t(),z("p",{key:3,class:"details",innerHTML:a.details},null,8,Ci)):g("",!0),a.linkText?(t(),z("div",Li,[h("p",gi,[e2($(a.linkText)+" ",1),bi])])):g("",!0)])]),_:1},8,["href","rel","target","tag"]))}}),Ni=A(xi,[["__scopeId","data-v-8a114d18"]]),Si={key:0,class:"VPFeatures"},ki={class:"container"},yi={class:"items"},wi=x({__name:"VPFeatures",props:{features:{}},setup(c){const a=c,e=S(()=>{const r=a.features.length;if(r){if(r===2)return"grid-2";if(r===3)return"grid-3";if(r%3===0)return"grid-6";if(r>3)return"grid-4"}else return});return(r,s)=>r.features?(t(),z("div",Si,[h("div",ki,[h("div",yi,[(t(!0),z(q,null,Q(r.features,n=>(t(),z("div",{key:n.title,class:F(["item",[e.value]])},[k(Ni,{icon:n.icon,title:n.title,details:n.details,link:n.link,"link-text":n.linkText,rel:n.rel,target:n.target},null,8,["icon","title","details","link","link-text","rel","target"])],2))),128))])])])):g("",!0)}}),Ai=A(wi,[["__scopeId","data-v-67df9223"]]),_i=x({__name:"VPHomeFeatures",setup(c){const{frontmatter:a}=P();return(e,r)=>f(a).features?(t(),w(Ai,{key:0,class:"VPHomeFeatures",features:f(a).features},null,8,["features"])):g("",!0)}}),Pi=x({__name:"VPHomeContent",setup(c){const{width:a}=ds({includeScrollbar:!1});return(e,r)=>(t(),z("div",{class:"vp-doc container",style:Q2(f(a)?{"--vp-offset":`calc(50% - ${f(a)/2}px)`}:{})},[H(e.$slots,"default",{},void 0,!0)],4))}}),Ti=A(Pi,[["__scopeId","data-v-62e8b085"]]),Bi={class:"VPHome"},Fi=x({__name:"VPHome",setup(c){const{frontmatter:a}=P();return(e,r)=>{const s=_2("Content");return t(),z("div",Bi,[H(e.$slots,"home-hero-before",{},void 0,!0),k(zi,null,{"home-hero-info-before":p(()=>[H(e.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":p(()=>[H(e.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":p(()=>[H(e.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":p(()=>[H(e.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":p(()=>[H(e.$slots,"home-hero-image",{},void 0,!0)]),_:3}),H(e.$slots,"home-hero-after",{},void 0,!0),H(e.$slots,"home-features-before",{},void 0,!0),k(_i),H(e.$slots,"home-features-after",{},void 0,!0),f(a).markdownStyles!==!1?(t(),w(Ti,{key:0},{default:p(()=>[k(s)]),_:1})):(t(),w(s,{key:1}))])}}}),$i=A(Fi,[["__scopeId","data-v-a4995ed0"]]),Di={},Ri={class:"VPPage"};function Ei(c,a){const e=_2("Content");return t(),z("div",Ri,[H(c.$slots,"page-top"),k(e),H(c.$slots,"page-bottom")])}const Oi=A(Di,[["render",Ei]]),Ii=x({__name:"VPContent",setup(c){const{page:a,frontmatter:e}=P(),{hasSidebar:r}=z2();return(s,n)=>(t(),z("div",{class:F(["VPContent",{"has-sidebar":f(r),"is-home":f(e).layout==="home"}]),id:"VPContent"},[f(a).isNotFound?H(s.$slots,"not-found",{key:0},()=>[k(Xs)],!0):f(e).layout==="page"?(t(),w(Oi,{key:1},{"page-top":p(()=>[H(s.$slots,"page-top",{},void 0,!0)]),"page-bottom":p(()=>[H(s.$slots,"page-bottom",{},void 0,!0)]),_:3})):f(e).layout==="home"?(t(),w($i,{key:2},{"home-hero-before":p(()=>[H(s.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":p(()=>[H(s.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":p(()=>[H(s.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":p(()=>[H(s.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":p(()=>[H(s.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":p(()=>[H(s.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":p(()=>[H(s.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":p(()=>[H(s.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":p(()=>[H(s.$slots,"home-features-after",{},void 0,!0)]),_:3})):f(e).layout&&f(e).layout!=="doc"?(t(),w(S2(f(e).layout),{key:3})):(t(),w(Qn,{key:4},{"doc-top":p(()=>[H(s.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":p(()=>[H(s.$slots,"doc-bottom",{},void 0,!0)]),"doc-footer-before":p(()=>[H(s.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":p(()=>[H(s.$slots,"doc-before",{},void 0,!0)]),"doc-after":p(()=>[H(s.$slots,"doc-after",{},void 0,!0)]),"aside-top":p(()=>[H(s.$slots,"aside-top",{},void 0,!0)]),"aside-outline-before":p(()=>[H(s.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":p(()=>[H(s.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":p(()=>[H(s.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":p(()=>[H(s.$slots,"aside-ads-after",{},void 0,!0)]),"aside-bottom":p(()=>[H(s.$slots,"aside-bottom",{},void 0,!0)]),_:3}))],2))}}),Ui=A(Ii,[["__scopeId","data-v-c1017b63"]]),Gi={class:"container"},qi=["innerHTML"],Wi=["innerHTML"],ji=x({__name:"VPFooter",setup(c){const{theme:a,frontmatter:e}=P(),{hasSidebar:r}=z2();return(s,n)=>f(a).footer&&f(e).footer!==!1?(t(),z("footer",{key:0,class:F(["VPFooter",{"has-sidebar":f(r)}])},[h("div",Gi,[f(a).footer.message?(t(),z("p",{key:0,class:"message",innerHTML:f(a).footer.message},null,8,qi)):g("",!0),f(a).footer.copyright?(t(),z("p",{key:1,class:"copyright",innerHTML:f(a).footer.copyright},null,8,Wi)):g("",!0)])],2)):g("",!0)}}),Xi=A(ji,[["__scopeId","data-v-fa835bf8"]]);function N0(){const{theme:c,frontmatter:a}=P(),e=V0([]),r=S(()=>e.value.length>0);return R1(()=>{e.value=Q3(a.value.outline??c.value.outline)}),{headers:e,hasLocalNav:r}}const Yi=c=>(Y("data-v-415fc66b"),c=c(),K(),c),Ki=Yi(()=>h("span",{class:"vpi-chevron-right icon"},null,-1)),Qi={class:"header"},Zi={class:"outline"},Ji=x({__name:"VPLocalNavOutlineDropdown",props:{headers:{},navHeight:{}},setup(c){const a=c,{theme:e}=P(),r=B(!1),s=B(0),n=B(),i=B();Ms(n,()=>{r.value=!1}),x3("Escape",()=>{r.value=!1}),R1(()=>{r.value=!1});function o(){r.value=!r.value,s.value=window.innerHeight+Math.min(window.scrollY-a.navHeight,0)}function l(v){v.target.classList.contains("outline-link")&&(i.value&&(i.value.style.transition="none"),Cs(()=>{r.value=!1}))}function m(){r.value=!1,window.scrollTo({top:0,left:0,behavior:"smooth"})}return(v,u)=>(t(),z("div",{class:"VPLocalNavOutlineDropdown",style:Q2({"--vp-vh":s.value+"px"}),ref_key:"main",ref:n},[v.headers.length>0?(t(),z("button",{key:0,onClick:o,class:F({open:r.value})},[e2($(f(b0)(f(e)))+" ",1),Ki],2)):(t(),z("button",{key:1,onClick:m},$(f(e).returnToTopLabel||"Return to top"),1)),k($1,{name:"flyout"},{default:p(()=>[r.value?(t(),z("div",{key:0,ref_key:"items",ref:i,class:"items",onClick:l},[h("div",Qi,[h("a",{class:"top-link",href:"#",onClick:m},$(f(e).returnToTopLabel||"Return to top"),1)]),h("div",Zi,[k(x0,{headers:v.headers},null,8,["headers"])])],512)):g("",!0)]),_:1})],4))}}),co=A(Ji,[["__scopeId","data-v-415fc66b"]]),ao=c=>(Y("data-v-51a3d126"),c=c(),K(),c),eo={class:"container"},ro=["aria-expanded"],so=ao(()=>h("span",{class:"vpi-align-left menu-icon"},null,-1)),no={class:"menu-text"},io=x({__name:"VPLocalNav",props:{open:{type:Boolean}},emits:["open-menu"],setup(c){const{theme:a,frontmatter:e}=P(),{hasSidebar:r}=z2(),{headers:s}=N0(),{y:n}=M0(),i=B(0);L2(()=>{i.value=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--vp-nav-height"))}),R1(()=>{s.value=Q3(e.value.outline??a.value.outline)});const o=S(()=>s.value.length===0),l=S(()=>o.value&&!r.value),m=S(()=>({VPLocalNav:!0,"has-sidebar":r.value,empty:o.value,fixed:l.value}));return(v,u)=>f(e).layout!=="home"&&(!l.value||f(n)>=i.value)?(t(),z("div",{key:0,class:F(m.value)},[h("div",eo,[f(r)?(t(),z("button",{key:0,class:"menu","aria-expanded":v.open,"aria-controls":"VPSidebarNav",onClick:u[0]||(u[0]=V=>v.$emit("open-menu"))},[so,h("span",no,$(f(a).sidebarMenuLabel||"Menu"),1)],8,ro)):g("",!0),k(co,{headers:f(s),navHeight:i.value},null,8,["headers","navHeight"])])],2)):g("",!0)}}),oo=A(io,[["__scopeId","data-v-51a3d126"]]);function lo(){const c=B(!1);function a(){c.value=!0,window.addEventListener("resize",s)}function e(){c.value=!1,window.removeEventListener("resize",s)}function r(){c.value?e():a()}function s(){window.outerWidth>=768&&e()}const n=E1();return o2(()=>n.path,e),{isScreenOpen:c,openScreen:a,closeScreen:e,toggleScreen:r}}const to={},fo={class:"VPSwitch",type:"button",role:"switch"},mo={class:"check"},vo={key:0,class:"icon"};function uo(c,a){return t(),z("button",fo,[h("span",mo,[c.$slots.default?(t(),z("span",vo,[H(c.$slots,"default",{},void 0,!0)])):g("",!0)])])}const Ho=A(to,[["render",uo],["__scopeId","data-v-982caf43"]]),S0=c=>(Y("data-v-17ddf920"),c=c(),K(),c),zo=S0(()=>h("span",{class:"vpi-sun sun"},null,-1)),ho=S0(()=>h("span",{class:"vpi-moon moon"},null,-1)),po=x({__name:"VPSwitchAppearance",setup(c){const{isDark:a,theme:e}=P(),r=n1("toggle-appearance",()=>{a.value=!a.value}),s=S(()=>a.value?e.value.lightModeSwitchTitle||"Switch to light theme":e.value.darkModeSwitchTitle||"Switch to dark theme");return(n,i)=>(t(),w(Ho,{title:s.value,class:"VPSwitchAppearance","aria-checked":f(a),onClick:f(r)},{default:p(()=>[zo,ho]),_:1},8,["title","aria-checked","onClick"]))}}),Z3=A(po,[["__scopeId","data-v-17ddf920"]]),Vo={key:0,class:"VPNavBarAppearance"},Mo=x({__name:"VPNavBarAppearance",setup(c){const{site:a}=P();return(e,r)=>f(a).appearance&&f(a).appearance!=="force-dark"?(t(),z("div",Vo,[k(Z3)])):g("",!0)}}),Co=A(Mo,[["__scopeId","data-v-368b1f1d"]]),J3=B();let k0=!1,H3=0;function Lo(c){const a=B(!1);if(I2){!k0&&go(),H3++;const e=o2(J3,r=>{var s,n,i;r===c.el.value||(s=c.el.value)!=null&&s.contains(r)?(a.value=!0,(n=c.onFocus)==null||n.call(c)):(a.value=!1,(i=c.onBlur)==null||i.call(c))});j3(()=>{e(),H3--,H3||bo()})}return Ls(a)}function go(){document.addEventListener("focusin",y0),k0=!0,J3.value=document.activeElement}function bo(){document.removeEventListener("focusin",y0)}function y0(){J3.value=document.activeElement}const xo={class:"VPMenuLink"},No=x({__name:"VPMenuLink",props:{item:{}},setup(c){const{page:a}=P();return(e,r)=>(t(),z("div",xo,[k(n2,{class:F({active:f(k2)(f(a).relativePath,e.item.activeMatch||e.item.link,!!e.item.activeMatch)}),href:e.item.link,target:e.item.target,rel:e.item.rel},{default:p(()=>[e2($(e.item.text),1)]),_:1},8,["class","href","target","rel"])]))}}),O1=A(No,[["__scopeId","data-v-5f751537"]]),So={class:"VPMenuGroup"},ko={key:0,class:"title"},yo=x({__name:"VPMenuGroup",props:{text:{},items:{}},setup(c){return(a,e)=>(t(),z("div",So,[a.text?(t(),z("p",ko,$(a.text),1)):g("",!0),(t(!0),z(q,null,Q(a.items,r=>(t(),z(q,null,["link"in r?(t(),w(O1,{key:0,item:r},null,8,["item"])):g("",!0)],64))),256))]))}}),wo=A(yo,[["__scopeId","data-v-23bc1769"]]),Ao={class:"VPMenu"},_o={key:0,class:"items"},Po=x({__name:"VPMenu",props:{items:{}},setup(c){return(a,e)=>(t(),z("div",Ao,[a.items?(t(),z("div",_o,[(t(!0),z(q,null,Q(a.items,r=>(t(),z(q,{key:r.text},["link"in r?(t(),w(O1,{key:0,item:r},null,8,["item"])):(t(),w(wo,{key:1,text:r.text,items:r.items},null,8,["text","items"]))],64))),128))])):g("",!0),H(a.$slots,"default",{},void 0,!0)]))}}),To=A(Po,[["__scopeId","data-v-f6c1543d"]]),Bo=c=>(Y("data-v-ad3f6c38"),c=c(),K(),c),Fo=["aria-expanded","aria-label"],$o={key:0,class:"text"},Do=["innerHTML"],Ro=Bo(()=>h("span",{class:"vpi-chevron-down text-icon"},null,-1)),Eo={key:1,class:"vpi-more-horizontal icon"},Oo={class:"menu"},Io=x({__name:"VPFlyout",props:{icon:{},button:{},label:{},items:{}},setup(c){const a=B(!1),e=B();Lo({el:e,onBlur:r});function r(){a.value=!1}return(s,n)=>(t(),z("div",{class:"VPFlyout",ref_key:"el",ref:e,onMouseenter:n[1]||(n[1]=i=>a.value=!0),onMouseleave:n[2]||(n[2]=i=>a.value=!1)},[h("button",{type:"button",class:"button","aria-haspopup":"true","aria-expanded":a.value,"aria-label":s.label,onClick:n[0]||(n[0]=i=>a.value=!a.value)},[s.button||s.icon?(t(),z("span",$o,[s.icon?(t(),z("span",{key:0,class:F([s.icon,"option-icon"])},null,2)):g("",!0),s.button?(t(),z("span",{key:1,innerHTML:s.button},null,8,Do)):g("",!0),Ro])):(t(),z("span",Eo))],8,Fo),h("div",Oo,[k(To,{items:s.items},{default:p(()=>[H(s.$slots,"default",{},void 0,!0)]),_:3},8,["items"])])],544))}}),c4=A(Io,[["__scopeId","data-v-ad3f6c38"]]),Uo=["href","aria-label","innerHTML"],Go=x({__name:"VPSocialLink",props:{icon:{},link:{},ariaLabel:{}},setup(c){const a=c,e=S(()=>typeof a.icon=="object"?a.icon.svg:`<span class="vpi-social-${a.icon}" />`);return(r,s)=>(t(),z("a",{class:"VPSocialLink no-icon",href:r.link,"aria-label":r.ariaLabel??(typeof r.icon=="string"?r.icon:""),target:"_blank",rel:"noopener",innerHTML:e.value},null,8,Uo))}}),qo=A(Go,[["__scopeId","data-v-c6a41ab3"]]),Wo={class:"VPSocialLinks"},jo=x({__name:"VPSocialLinks",props:{links:{}},setup(c){return(a,e)=>(t(),z("div",Wo,[(t(!0),z(q,null,Q(a.links,({link:r,icon:s,ariaLabel:n})=>(t(),w(qo,{key:r,icon:s,link:r,ariaLabel:n},null,8,["icon","link","ariaLabel"]))),128))]))}}),a4=A(jo,[["__scopeId","data-v-b524acdb"]]),Xo={key:0,class:"group translations"},Yo={class:"trans-title"},Ko={key:1,class:"group"},Qo={class:"item appearance"},Zo={class:"label"},Jo={class:"appearance-action"},cl={key:2,class:"group"},al={class:"item social-links"},el=x({__name:"VPNavBarExtra",setup(c){const{site:a,theme:e}=P(),{localeLinks:r,currentLang:s}=i1({correspondingLink:!0}),n=S(()=>r.value.length&&s.value.label||a.value.appearance||e.value.socialLinks);return(i,o)=>n.value?(t(),w(c4,{key:0,class:"VPNavBarExtra",label:"extra navigation"},{default:p(()=>[f(r).length&&f(s).label?(t(),z("div",Xo,[h("p",Yo,$(f(s).label),1),(t(!0),z(q,null,Q(f(r),l=>(t(),w(O1,{key:l.link,item:l},null,8,["item"]))),128))])):g("",!0),f(a).appearance&&f(a).appearance!=="force-dark"?(t(),z("div",Ko,[h("div",Qo,[h("p",Zo,$(f(e).darkModeSwitchLabel||"Appearance"),1),h("div",Jo,[k(Z3)])])])):g("",!0),f(e).socialLinks?(t(),z("div",cl,[h("div",al,[k(a4,{class:"social-links-list",links:f(e).socialLinks},null,8,["links"])])])):g("",!0)]),_:1})):g("",!0)}}),rl=A(el,[["__scopeId","data-v-5e85c0a5"]]),sl=c=>(Y("data-v-83fd6a31"),c=c(),K(),c),nl=["aria-expanded"],il=sl(()=>h("span",{class:"container"},[h("span",{class:"top"}),h("span",{class:"middle"}),h("span",{class:"bottom"})],-1)),ol=[il],ll=x({__name:"VPNavBarHamburger",props:{active:{type:Boolean}},emits:["click"],setup(c){return(a,e)=>(t(),z("button",{type:"button",class:F(["VPNavBarHamburger",{active:a.active}]),"aria-label":"mobile navigation","aria-expanded":a.active,"aria-controls":"VPNavScreen",onClick:e[0]||(e[0]=r=>a.$emit("click"))},ol,10,nl))}}),tl=A(ll,[["__scopeId","data-v-83fd6a31"]]),fl=["innerHTML"],ml=x({__name:"VPNavBarMenuLink",props:{item:{}},setup(c){const{page:a}=P();return(e,r)=>(t(),w(n2,{class:F({VPNavBarMenuLink:!0,active:f(k2)(f(a).relativePath,e.item.activeMatch||e.item.link,!!e.item.activeMatch)}),href:e.item.link,target:e.item.target,rel:e.item.rel,tabindex:"0"},{default:p(()=>[h("span",{innerHTML:e.item.text},null,8,fl)]),_:1},8,["class","href","target","rel"]))}}),vl=A(ml,[["__scopeId","data-v-6f253f13"]]),ul=x({__name:"VPNavBarMenuGroup",props:{item:{}},setup(c){const a=c,{page:e}=P(),r=n=>"link"in n?k2(e.value.relativePath,n.link,!!a.item.activeMatch):n.items.some(r),s=S(()=>r(a.item));return(n,i)=>(t(),w(c4,{class:F({VPNavBarMenuGroup:!0,active:f(k2)(f(e).relativePath,n.item.activeMatch,!!n.item.activeMatch)||s.value}),button:n.item.text,items:n.item.items},null,8,["class","button","items"]))}}),Hl=c=>(Y("data-v-25c07daf"),c=c(),K(),c),zl={key:0,"aria-labelledby":"main-nav-aria-label",class:"VPNavBarMenu"},hl=Hl(()=>h("span",{id:"main-nav-aria-label",class:"visually-hidden"},"Main Navigation",-1)),pl=x({__name:"VPNavBarMenu",setup(c){const{theme:a}=P();return(e,r)=>f(a).nav?(t(),z("nav",zl,[hl,(t(!0),z(q,null,Q(f(a).nav,s=>(t(),z(q,{key:s.text},["link"in s?(t(),w(vl,{key:0,item:s},null,8,["item"])):(t(),w(ul,{key:1,item:s},null,8,["item"]))],64))),128))])):g("",!0)}}),Vl=A(pl,[["__scopeId","data-v-25c07daf"]]);function dl(c){const{localeIndex:a,theme:e}=P();function r(s){var L,_,y;const n=s.split("."),i=(L=e.value.search)==null?void 0:L.options,o=i&&typeof i=="object",l=o&&((y=(_=i.locales)==null?void 0:_[a.value])==null?void 0:y.translations)||null,m=o&&i.translations||null;let v=l,u=m,V=c;const d=n.pop();for(const M of n){let b=null;const T=V==null?void 0:V[M];T&&(b=V=T);const E=u==null?void 0:u[M];E&&(b=u=E);const R=v==null?void 0:v[M];R&&(b=v=R),T||(V=b),E||(u=b),R||(v=b)}return(v==null?void 0:v[d])??(u==null?void 0:u[d])??(V==null?void 0:V[d])??""}return r}const Ml=["aria-label"],Cl={class:"DocSearch-Button-Container"},Ll=h("span",{class:"vp-icon DocSearch-Search-Icon"},null,-1),gl={class:"DocSearch-Button-Placeholder"},bl=h("span",{class:"DocSearch-Button-Keys"},[h("kbd",{class:"DocSearch-Button-Key"}),h("kbd",{class:"DocSearch-Button-Key"},"K")],-1),p6=x({__name:"VPNavBarSearchButton",setup(c){const e=dl({button:{buttonText:"Search",buttonAriaLabel:"Search"}});return(r,s)=>(t(),z("button",{type:"button",class:"DocSearch DocSearch-Button","aria-label":f(e)("button.buttonAriaLabel")},[h("span",Cl,[Ll,h("span",gl,$(f(e)("button.buttonText")),1)]),bl],8,Ml))}}),xl={class:"VPNavBarSearch"},Nl={id:"local-search"},Sl={key:1,id:"docsearch"},kl=x({__name:"VPNavBarSearch",setup(c){const a=gs(()=>bs(()=>import("./VPLocalSearchBox.FMiWf2LM.js"),__vite__mapDeps([0,1]))),e=()=>null,{theme:r}=P(),s=B(!1),n=B(!1);L2(()=>{});function i(){s.value||(s.value=!0,setTimeout(o,16))}function o(){const u=new Event("keydown");u.key="k",u.metaKey=!0,window.dispatchEvent(u),setTimeout(()=>{document.querySelector(".DocSearch-Modal")||o()},16)}function l(u){const V=u.target,d=V.tagName;return V.isContentEditable||d==="INPUT"||d==="SELECT"||d==="TEXTAREA"}const m=B(!1);x3("k",u=>{(u.ctrlKey||u.metaKey)&&(u.preventDefault(),m.value=!0)}),x3("/",u=>{l(u)||(u.preventDefault(),m.value=!0)});const v="local";return(u,V)=>{var d;return t(),z("div",xl,[f(v)==="local"?(t(),z(q,{key:0},[m.value?(t(),w(f(a),{key:0,onClose:V[0]||(V[0]=L=>m.value=!1)})):g("",!0),h("div",Nl,[k(p6,{onClick:V[1]||(V[1]=L=>m.value=!0)})])],64)):f(v)==="algolia"?(t(),z(q,{key:1},[s.value?(t(),w(f(e),{key:0,algolia:((d=f(r).search)==null?void 0:d.options)??f(r).algolia,onVnodeBeforeMount:V[2]||(V[2]=L=>n.value=!0)},null,8,["algolia"])):g("",!0),n.value?g("",!0):(t(),z("div",Sl,[k(p6,{onClick:i})]))],64)):g("",!0)])}}}),yl=x({__name:"VPNavBarSocialLinks",setup(c){const{theme:a}=P();return(e,r)=>f(a).socialLinks?(t(),w(a4,{key:0,class:"VPNavBarSocialLinks",links:f(a).socialLinks},null,8,["links"])):g("",!0)}}),wl=A(yl,[["__scopeId","data-v-3a96b8e1"]]),Al=["href","rel","target"],_l={key:1},Pl={key:2},Tl=x({__name:"VPNavBarTitle",setup(c){const{site:a,theme:e}=P(),{hasSidebar:r}=z2(),{currentLang:s}=i1(),n=S(()=>{var l;return typeof e.value.logoLink=="string"?e.value.logoLink:(l=e.value.logoLink)==null?void 0:l.link}),i=S(()=>{var l;return typeof e.value.logoLink=="string"||(l=e.value.logoLink)==null?void 0:l.rel}),o=S(()=>{var l;return typeof e.value.logoLink=="string"||(l=e.value.logoLink)==null?void 0:l.target});return(l,m)=>(t(),z("div",{class:F(["VPNavBarTitle",{"has-sidebar":f(r)}])},[h("a",{class:"title",href:n.value??f(Y3)(f(s).link),rel:i.value,target:o.value},[H(l.$slots,"nav-bar-title-before",{},void 0,!0),f(e).logo?(t(),w(A1,{key:0,class:"logo",image:f(e).logo},null,8,["image"])):g("",!0),f(e).siteTitle?(t(),z("span",_l,$(f(e).siteTitle),1)):f(e).siteTitle===void 0?(t(),z("span",Pl,$(f(a).title),1)):g("",!0),H(l.$slots,"nav-bar-title-after",{},void 0,!0)],8,Al)],2))}}),Bl=A(Tl,[["__scopeId","data-v-c766a0ac"]]),Fl={class:"items"},$l={class:"title"},Dl=x({__name:"VPNavBarTranslations",setup(c){const{theme:a}=P(),{localeLinks:e,currentLang:r}=i1({correspondingLink:!0});return(s,n)=>f(e).length&&f(r).label?(t(),w(c4,{key:0,class:"VPNavBarTranslations",icon:"vpi-languages",label:f(a).langMenuLabel||"Change language"},{default:p(()=>[h("div",Fl,[h("p",$l,$(f(r).label),1),(t(!0),z(q,null,Q(f(e),i=>(t(),w(O1,{key:i.link,item:i},null,8,["item"]))),128))])]),_:1},8,["label"])):g("",!0)}}),Rl=A(Dl,[["__scopeId","data-v-5f297e44"]]),El=c=>(Y("data-v-af093d9b"),c=c(),K(),c),Ol={class:"wrapper"},Il={class:"container"},Ul={class:"title"},Gl={class:"content"},ql={class:"content-body"},Wl=El(()=>h("div",{class:"divider"},[h("div",{class:"divider-line"})],-1)),jl=x({__name:"VPNavBar",props:{isScreenOpen:{type:Boolean}},emits:["toggle-screen"],setup(c){const{y:a}=M0(),{hasSidebar:e}=z2(),{hasLocalNav:r}=N0(),{frontmatter:s}=P(),n=B({});return p0(()=>{n.value={"has-sidebar":e.value,"has-local-nav":r.value,top:s.value.layout==="home"&&a.value===0}}),(i,o)=>(t(),z("div",{class:F(["VPNavBar",n.value])},[h("div",Ol,[h("div",Il,[h("div",Ul,[k(Bl,null,{"nav-bar-title-before":p(()=>[H(i.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":p(()=>[H(i.$slots,"nav-bar-title-after",{},void 0,!0)]),_:3})]),h("div",Gl,[h("div",ql,[H(i.$slots,"nav-bar-content-before",{},void 0,!0),k(kl,{class:"search"}),k(Vl,{class:"menu"}),k(Rl,{class:"translations"}),k(Co,{class:"appearance"}),k(wl,{class:"social-links"}),k(rl,{class:"extra"}),H(i.$slots,"nav-bar-content-after",{},void 0,!0),k(tl,{class:"hamburger",active:i.isScreenOpen,onClick:o[0]||(o[0]=l=>i.$emit("toggle-screen"))},null,8,["active"])])])])]),Wl],2))}}),Xl=A(jl,[["__scopeId","data-v-af093d9b"]]),Yl={key:0,class:"VPNavScreenAppearance"},Kl={class:"text"},Ql=x({__name:"VPNavScreenAppearance",setup(c){const{site:a,theme:e}=P();return(r,s)=>f(a).appearance&&f(a).appearance!=="force-dark"?(t(),z("div",Yl,[h("p",Kl,$(f(e).darkModeSwitchLabel||"Appearance"),1),k(Z3)])):g("",!0)}}),Zl=A(Ql,[["__scopeId","data-v-22ce3cf5"]]),Jl=x({__name:"VPNavScreenMenuLink",props:{item:{}},setup(c){const a=n1("close-screen");return(e,r)=>(t(),w(n2,{class:"VPNavScreenMenuLink",href:e.item.link,target:e.item.target,rel:e.item.rel,onClick:f(a)},{default:p(()=>[e2($(e.item.text),1)]),_:1},8,["href","target","rel","onClick"]))}}),ct=A(Jl,[["__scopeId","data-v-eb070deb"]]),at=x({__name:"VPNavScreenMenuGroupLink",props:{item:{}},setup(c){const a=n1("close-screen");return(e,r)=>(t(),w(n2,{class:"VPNavScreenMenuGroupLink",href:e.item.link,target:e.item.target,rel:e.item.rel,onClick:f(a)},{default:p(()=>[e2($(e.item.text),1)]),_:1},8,["href","target","rel","onClick"]))}}),w0=A(at,[["__scopeId","data-v-122f86b7"]]),et={class:"VPNavScreenMenuGroupSection"},rt={key:0,class:"title"},st=x({__name:"VPNavScreenMenuGroupSection",props:{text:{},items:{}},setup(c){return(a,e)=>(t(),z("div",et,[a.text?(t(),z("p",rt,$(a.text),1)):g("",!0),(t(!0),z(q,null,Q(a.items,r=>(t(),w(w0,{key:r.text,item:r},null,8,["item"]))),128))]))}}),nt=A(st,[["__scopeId","data-v-949f5ac9"]]),it=c=>(Y("data-v-873e5562"),c=c(),K(),c),ot=["aria-controls","aria-expanded"],lt=["innerHTML"],tt=it(()=>h("span",{class:"vpi-plus button-icon"},null,-1)),ft=["id"],mt={key:1,class:"group"},vt=x({__name:"VPNavScreenMenuGroup",props:{text:{},items:{}},setup(c){const a=c,e=B(!1),r=S(()=>`NavScreenGroup-${a.text.replace(" ","-").toLowerCase()}`);function s(){e.value=!e.value}return(n,i)=>(t(),z("div",{class:F(["VPNavScreenMenuGroup",{open:e.value}])},[h("button",{class:"button","aria-controls":r.value,"aria-expanded":e.value,onClick:s},[h("span",{class:"button-text",innerHTML:n.text},null,8,lt),tt],8,ot),h("div",{id:r.value,class:"items"},[(t(!0),z(q,null,Q(n.items,o=>(t(),z(q,{key:o.text},["link"in o?(t(),z("div",{key:o.text,class:"item"},[k(w0,{item:o},null,8,["item"])])):(t(),z("div",mt,[k(nt,{text:o.text,items:o.items},null,8,["text","items"])]))],64))),128))],8,ft)],2))}}),ut=A(vt,[["__scopeId","data-v-873e5562"]]),Ht={key:0,class:"VPNavScreenMenu"},zt=x({__name:"VPNavScreenMenu",setup(c){const{theme:a}=P();return(e,r)=>f(a).nav?(t(),z("nav",Ht,[(t(!0),z(q,null,Q(f(a).nav,s=>(t(),z(q,{key:s.text},["link"in s?(t(),w(ct,{key:0,item:s},null,8,["item"])):(t(),w(ut,{key:1,text:s.text||"",items:s.items},null,8,["text","items"]))],64))),128))])):g("",!0)}}),ht=x({__name:"VPNavScreenSocialLinks",setup(c){const{theme:a}=P();return(e,r)=>f(a).socialLinks?(t(),w(a4,{key:0,class:"VPNavScreenSocialLinks",links:f(a).socialLinks},null,8,["links"])):g("",!0)}}),A0=c=>(Y("data-v-899d9421"),c=c(),K(),c),pt=A0(()=>h("span",{class:"vpi-languages icon lang"},null,-1)),Vt=A0(()=>h("span",{class:"vpi-chevron-down icon chevron"},null,-1)),dt={class:"list"},Mt=x({__name:"VPNavScreenTranslations",setup(c){const{localeLinks:a,currentLang:e}=i1({correspondingLink:!0}),r=B(!1);function s(){r.value=!r.value}return(n,i)=>f(a).length&&f(e).label?(t(),z("div",{key:0,class:F(["VPNavScreenTranslations",{open:r.value}])},[h("button",{class:"title",onClick:s},[pt,e2(" "+$(f(e).label)+" ",1),Vt]),h("ul",dt,[(t(!0),z(q,null,Q(f(a),o=>(t(),z("li",{key:o.link,class:"item"},[k(n2,{class:"link",href:o.link},{default:p(()=>[e2($(o.text),1)]),_:2},1032,["href"])]))),128))])],2)):g("",!0)}}),Ct=A(Mt,[["__scopeId","data-v-899d9421"]]),Lt={class:"container"},gt=x({__name:"VPNavScreen",props:{open:{type:Boolean}},setup(c){const a=B(null),e=C0(I2?document.body:null);return(r,s)=>(t(),w($1,{name:"fade",onEnter:s[0]||(s[0]=n=>e.value=!0),onAfterLeave:s[1]||(s[1]=n=>e.value=!1)},{default:p(()=>[r.open?(t(),z("div",{key:0,class:"VPNavScreen",ref_key:"screen",ref:a,id:"VPNavScreen"},[h("div",Lt,[H(r.$slots,"nav-screen-content-before",{},void 0,!0),k(zt,{class:"menu"}),k(Ct,{class:"translations"}),k(Zl,{class:"appearance"}),k(ht,{class:"social-links"}),H(r.$slots,"nav-screen-content-after",{},void 0,!0)])],512)):g("",!0)]),_:3}))}}),bt=A(gt,[["__scopeId","data-v-0121a5e4"]]),xt={key:0,class:"VPNav"},Nt=x({__name:"VPNav",setup(c){const{isScreenOpen:a,closeScreen:e,toggleScreen:r}=lo(),{frontmatter:s}=P(),n=S(()=>s.value.navbar!==!1);return X3("close-screen",e),D1(()=>{I2&&document.documentElement.classList.toggle("hide-nav",!n.value)}),(i,o)=>n.value?(t(),z("header",xt,[k(Xl,{"is-screen-open":f(a),onToggleScreen:f(r)},{"nav-bar-title-before":p(()=>[H(i.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":p(()=>[H(i.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":p(()=>[H(i.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":p(()=>[H(i.$slots,"nav-bar-content-after",{},void 0,!0)]),_:3},8,["is-screen-open","onToggleScreen"]),k(bt,{open:f(a)},{"nav-screen-content-before":p(()=>[H(i.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":p(()=>[H(i.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3},8,["open"])])):g("",!0)}}),St=A(Nt,[["__scopeId","data-v-70105386"]]),_0=c=>(Y("data-v-e516d8cd"),c=c(),K(),c),kt=["role","tabindex"],yt=_0(()=>h("div",{class:"indicator"},null,-1)),wt=_0(()=>h("span",{class:"vpi-chevron-right caret-icon"},null,-1)),At=[wt],_t={key:1,class:"items"},Pt=x({__name:"VPSidebarItem",props:{item:{},depth:{}},setup(c){const a=c,{collapsed:e,collapsible:r,isLink:s,isActiveLink:n,hasActiveLink:i,hasChildren:o,toggle:l}=Zs(S(()=>a.item)),m=S(()=>o.value?"section":"div"),v=S(()=>s.value?"a":"div"),u=S(()=>o.value?a.depth+2===7?"p":`h${a.depth+2}`:"p"),V=S(()=>s.value?void 0:"button"),d=S(()=>[[`level-${a.depth}`],{collapsible:r.value},{collapsed:e.value},{"is-link":s.value},{"is-active":n.value},{"has-active":i.value}]);function L(y){"key"in y&&y.key!=="Enter"||!a.item.link&&l()}function _(){a.item.link&&l()}return(y,M)=>{const b=_2("VPSidebarItem",!0);return t(),w(S2(m.value),{class:F(["VPSidebarItem",d.value])},{default:p(()=>[y.item.text?(t(),z("div",j2({key:0,class:"item",role:V.value},xs(y.item.items?{click:L,keydown:L}:{},!0),{tabindex:y.item.items&&0}),[yt,y.item.link?(t(),w(n2,{key:0,tag:v.value,class:"link",href:y.item.link,rel:y.item.rel,target:y.item.target},{default:p(()=>[(t(),w(S2(u.value),{class:"text",innerHTML:y.item.text},null,8,["innerHTML"]))]),_:1},8,["tag","href","rel","target"])):(t(),w(S2(u.value),{key:1,class:"text",innerHTML:y.item.text},null,8,["innerHTML"])),y.item.collapsed!=null?(t(),z("div",{key:2,class:"caret",role:"button","aria-label":"toggle section",onClick:_,onKeydown:Ns(_,["enter"]),tabindex:"0"},At,32)):g("",!0)],16,kt)):g("",!0),y.item.items&&y.item.items.length?(t(),z("div",_t,[y.depth<5?(t(!0),z(q,{key:0},Q(y.item.items,T=>(t(),w(b,{key:T.text,item:T,depth:y.depth+1},null,8,["item","depth"]))),128)):g("",!0)])):g("",!0)]),_:1},8,["class"])}}}),Tt=A(Pt,[["__scopeId","data-v-e516d8cd"]]),P0=c=>(Y("data-v-c75087ba"),c=c(),K(),c),Bt=P0(()=>h("div",{class:"curtain"},null,-1)),Ft={class:"nav",id:"VPSidebarNav","aria-labelledby":"sidebar-aria-label",tabindex:"-1"},$t=P0(()=>h("span",{class:"visually-hidden",id:"sidebar-aria-label"}," Sidebar Navigation ",-1)),Dt=x({__name:"VPSidebar",props:{open:{type:Boolean}},setup(c){const{sidebarGroups:a,hasSidebar:e}=z2(),r=c,s=B(null),n=C0(I2?document.body:null);return o2([r,s],()=>{var i;r.open?(n.value=!0,(i=s.value)==null||i.focus()):n.value=!1},{immediate:!0,flush:"post"}),(i,o)=>f(e)?(t(),z("aside",{key:0,class:F(["VPSidebar",{open:i.open}]),ref_key:"navEl",ref:s,onClick:o[0]||(o[0]=Ss(()=>{},["stop"]))},[Bt,h("nav",Ft,[$t,H(i.$slots,"sidebar-nav-before",{},void 0,!0),(t(!0),z(q,null,Q(f(a),l=>(t(),z("div",{key:l.text,class:"group"},[k(Tt,{item:l,depth:0},null,8,["item"])]))),128)),H(i.$slots,"sidebar-nav-after",{},void 0,!0)])],2)):g("",!0)}}),Rt=A(Dt,[["__scopeId","data-v-c75087ba"]]),Et=x({__name:"VPSkipLink",setup(c){const a=E1(),e=B();o2(()=>a.path,()=>e.value.focus());function r({target:s}){const n=document.getElementById(decodeURIComponent(s.hash).slice(1));if(n){const i=()=>{n.removeAttribute("tabindex"),n.removeEventListener("blur",i)};n.setAttribute("tabindex","-1"),n.addEventListener("blur",i),n.focus(),window.scrollTo(0,0)}}return(s,n)=>(t(),z(q,null,[h("span",{ref_key:"backToTop",ref:e,tabindex:"-1"},null,512),h("a",{href:"#VPContent",class:"VPSkipLink visually-hidden",onClick:r}," Skip to content ")],64))}}),Ot=A(Et,[["__scopeId","data-v-a9b6e631"]]),It=x({__name:"Layout",setup(c){const{isOpen:a,open:e,close:r}=z2(),s=E1();o2(()=>s.path,r),Qs(a,r);const{frontmatter:n}=P(),i=L0(),o=S(()=>!!i["home-hero-image"]);return X3("hero-image-slot-exists",o),(l,m)=>{const v=_2("Content");return f(n).layout!==!1?(t(),z("div",{key:0,class:F(["Layout",f(n).pageClass])},[H(l.$slots,"layout-top",{},void 0,!0),k(Ot),k(Fs,{class:"backdrop",show:f(a),onClick:f(r)},null,8,["show","onClick"]),k(St,null,{"nav-bar-title-before":p(()=>[H(l.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":p(()=>[H(l.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":p(()=>[H(l.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":p(()=>[H(l.$slots,"nav-bar-content-after",{},void 0,!0)]),"nav-screen-content-before":p(()=>[H(l.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":p(()=>[H(l.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3}),k(oo,{open:f(a),onOpenMenu:f(e)},null,8,["open","onOpenMenu"]),k(Rt,{open:f(a)},{"sidebar-nav-before":p(()=>[H(l.$slots,"sidebar-nav-before",{},void 0,!0)]),"sidebar-nav-after":p(()=>[H(l.$slots,"sidebar-nav-after",{},void 0,!0)]),_:3},8,["open"]),k(Ui,null,{"page-top":p(()=>[H(l.$slots,"page-top",{},void 0,!0)]),"page-bottom":p(()=>[H(l.$slots,"page-bottom",{},void 0,!0)]),"not-found":p(()=>[H(l.$slots,"not-found",{},void 0,!0)]),"home-hero-before":p(()=>[H(l.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":p(()=>[H(l.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":p(()=>[H(l.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":p(()=>[H(l.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":p(()=>[H(l.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":p(()=>[H(l.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":p(()=>[H(l.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":p(()=>[H(l.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":p(()=>[H(l.$slots,"home-features-after",{},void 0,!0)]),"doc-footer-before":p(()=>[H(l.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":p(()=>[H(l.$slots,"doc-before",{},void 0,!0)]),"doc-after":p(()=>[H(l.$slots,"doc-after",{},void 0,!0)]),"doc-top":p(()=>[H(l.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":p(()=>[H(l.$slots,"doc-bottom",{},void 0,!0)]),"aside-top":p(()=>[H(l.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":p(()=>[H(l.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":p(()=>[H(l.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":p(()=>[H(l.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":p(()=>[H(l.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":p(()=>[H(l.$slots,"aside-ads-after",{},void 0,!0)]),_:3}),k(Xi),H(l.$slots,"layout-bottom",{},void 0,!0)],2)):(t(),w(v,{key:1}))}}}),Ut=A(It,[["__scopeId","data-v-7b5849c2"]]),Gt={Layout:Ut,enhanceApp:({app:c})=>{c.component("Badge",Ps)}};var T0=typeof global=="object"&&global&&global.Object===Object&&global,qt=typeof self=="object"&&self&&self.Object===Object&&self,r2=T0||qt||Function("return this")(),i2=r2.Symbol,B0=Object.prototype,Wt=B0.hasOwnProperty,jt=B0.toString,q2=i2?i2.toStringTag:void 0;function Xt(c){var a=Wt.call(c,q2),e=c[q2];try{c[q2]=void 0;var r=!0}catch{}var s=jt.call(c);return r&&(a?c[q2]=e:delete c[q2]),s}var Yt=Object.prototype,Kt=Yt.toString;function Qt(c){return Kt.call(c)}var Zt="[object Null]",Jt="[object Undefined]",V6=i2?i2.toStringTag:void 0;function P2(c){return c==null?c===void 0?Jt:Zt:V6&&V6 in Object(c)?Xt(c):Qt(c)}function T2(c){return c!=null&&typeof c=="object"}var cf="[object Symbol]";function I1(c){return typeof c=="symbol"||T2(c)&&P2(c)==cf}function F0(c,a){for(var e=-1,r=c==null?0:c.length,s=Array(r);++e<r;)s[e]=a(c[e],e,c);return s}var g2=Array.isArray,af=1/0,d6=i2?i2.prototype:void 0,M6=d6?d6.toString:void 0;function $0(c){if(typeof c=="string")return c;if(g2(c))return F0(c,$0)+"";if(I1(c))return M6?M6.call(c):"";var a=c+"";return a=="0"&&1/c==-af?"-0":a}var ef=/\s/;function rf(c){for(var a=c.length;a--&&ef.test(c.charAt(a)););return a}var sf=/^\s+/;function nf(c){return c&&c.slice(0,rf(c)+1).replace(sf,"")}function m2(c){var a=typeof c;return c!=null&&(a=="object"||a=="function")}var C6=NaN,of=/^[-+]0x[0-9a-f]+$/i,lf=/^0b[01]+$/i,tf=/^0o[0-7]+$/i,ff=parseInt;function L6(c){if(typeof c=="number")return c;if(I1(c))return C6;if(m2(c)){var a=typeof c.valueOf=="function"?c.valueOf():c;c=m2(a)?a+"":a}if(typeof c!="string")return c===0?c:+c;c=nf(c);var e=lf.test(c);return e||tf.test(c)?ff(c.slice(2),e?2:8):of.test(c)?C6:+c}function D0(c){return c}var mf="[object AsyncFunction]",vf="[object Function]",uf="[object GeneratorFunction]",Hf="[object Proxy]";function R0(c){if(!m2(c))return!1;var a=P2(c);return a==vf||a==uf||a==mf||a==Hf}var z3=r2["__core-js_shared__"],g6=function(){var c=/[^.]+$/.exec(z3&&z3.keys&&z3.keys.IE_PROTO||"");return c?"Symbol(src)_1."+c:""}();function zf(c){return!!g6&&g6 in c}var hf=Function.prototype,pf=hf.toString;function B2(c){if(c!=null){try{return pf.call(c)}catch{}try{return c+""}catch{}}return""}var Vf=/[\\^$.*+?()[\]{}|]/g,df=/^\[object .+?Constructor\]$/,Mf=Function.prototype,Cf=Object.prototype,Lf=Mf.toString,gf=Cf.hasOwnProperty,bf=RegExp("^"+Lf.call(gf).replace(Vf,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function xf(c){if(!m2(c)||zf(c))return!1;var a=R0(c)?bf:df;return a.test(B2(c))}function Nf(c,a){return c==null?void 0:c[a]}function F2(c,a){var e=Nf(c,a);return xf(e)?e:void 0}var y3=F2(r2,"WeakMap"),b6=Object.create,Sf=function(){function c(){}return function(a){if(!m2(a))return{};if(b6)return b6(a);c.prototype=a;var e=new c;return c.prototype=void 0,e}}();function kf(c,a,e){switch(e.length){case 0:return c.call(a);case 1:return c.call(a,e[0]);case 2:return c.call(a,e[0],e[1]);case 3:return c.call(a,e[0],e[1],e[2])}return c.apply(a,e)}function yf(c,a){var e=-1,r=c.length;for(a||(a=Array(r));++e<r;)a[e]=c[e];return a}var wf=800,Af=16,_f=Date.now;function Pf(c){var a=0,e=0;return function(){var r=_f(),s=Af-(r-e);if(e=r,s>0){if(++a>=wf)return arguments[0]}else a=0;return c.apply(void 0,arguments)}}function Tf(c){return function(){return c}}var _1=function(){try{var c=F2(Object,"defineProperty");return c({},"",{}),c}catch{}}(),Bf=_1?function(c,a){return _1(c,"toString",{configurable:!0,enumerable:!1,value:Tf(a),writable:!0})}:D0,Ff=Pf(Bf);function E0(c,a){for(var e=-1,r=c==null?0:c.length;++e<r&&a(c[e],e,c)!==!1;);return c}var $f=9007199254740991,Df=/^(?:0|[1-9]\d*)$/;function Rf(c,a){var e=typeof c;return a=a??$f,!!a&&(e=="number"||e!="symbol"&&Df.test(c))&&c>-1&&c%1==0&&c<a}function O0(c,a,e){a=="__proto__"&&_1?_1(c,a,{configurable:!0,enumerable:!0,value:e,writable:!0}):c[a]=e}function I0(c,a){return c===a||c!==c&&a!==a}var Ef=Object.prototype,Of=Ef.hasOwnProperty;function U0(c,a,e){var r=c[a];(!(Of.call(c,a)&&I0(r,e))||e===void 0&&!(a in c))&&O0(c,a,e)}function o1(c,a,e,r){var s=!e;e||(e={});for(var n=-1,i=a.length;++n<i;){var o=a[n],l=void 0;l===void 0&&(l=c[o]),s?O0(e,o,l):U0(e,o,l)}return e}var x6=Math.max;function If(c,a,e){return a=x6(a===void 0?c.length-1:a,0),function(){for(var r=arguments,s=-1,n=x6(r.length-a,0),i=Array(n);++s<n;)i[s]=r[a+s];s=-1;for(var o=Array(a+1);++s<a;)o[s]=r[s];return o[a]=e(i),kf(c,this,o)}}var Uf=9007199254740991;function G0(c){return typeof c=="number"&&c>-1&&c%1==0&&c<=Uf}function e4(c){return c!=null&&G0(c.length)&&!R0(c)}var Gf=Object.prototype;function r4(c){var a=c&&c.constructor,e=typeof a=="function"&&a.prototype||Gf;return c===e}function qf(c,a){for(var e=-1,r=Array(c);++e<c;)r[e]=a(e);return r}var Wf="[object Arguments]";function N6(c){return T2(c)&&P2(c)==Wf}var q0=Object.prototype,jf=q0.hasOwnProperty,Xf=q0.propertyIsEnumerable,W0=N6(function(){return arguments}())?N6:function(c){return T2(c)&&jf.call(c,"callee")&&!Xf.call(c,"callee")};function Yf(){return!1}var j0=typeof exports=="object"&&exports&&!exports.nodeType&&exports,S6=j0&&typeof module=="object"&&module&&!module.nodeType&&module,Kf=S6&&S6.exports===j0,k6=Kf?r2.Buffer:void 0,Qf=k6?k6.isBuffer:void 0,X0=Qf||Yf,Zf="[object Arguments]",Jf="[object Array]",cm="[object Boolean]",am="[object Date]",em="[object Error]",rm="[object Function]",sm="[object Map]",nm="[object Number]",im="[object Object]",om="[object RegExp]",lm="[object Set]",tm="[object String]",fm="[object WeakMap]",mm="[object ArrayBuffer]",vm="[object DataView]",um="[object Float32Array]",Hm="[object Float64Array]",zm="[object Int8Array]",hm="[object Int16Array]",pm="[object Int32Array]",Vm="[object Uint8Array]",dm="[object Uint8ClampedArray]",Mm="[object Uint16Array]",Cm="[object Uint32Array]",I={};I[um]=I[Hm]=I[zm]=I[hm]=I[pm]=I[Vm]=I[dm]=I[Mm]=I[Cm]=!0;I[Zf]=I[Jf]=I[mm]=I[cm]=I[vm]=I[am]=I[em]=I[rm]=I[sm]=I[nm]=I[im]=I[om]=I[lm]=I[tm]=I[fm]=!1;function Lm(c){return T2(c)&&G0(c.length)&&!!I[P2(c)]}function s4(c){return function(a){return c(a)}}var Y0=typeof exports=="object"&&exports&&!exports.nodeType&&exports,X2=Y0&&typeof module=="object"&&module&&!module.nodeType&&module,gm=X2&&X2.exports===Y0,h3=gm&&T0.process,E2=function(){try{var c=X2&&X2.require&&X2.require("util").types;return c||h3&&h3.binding&&h3.binding("util")}catch{}}(),y6=E2&&E2.isTypedArray,bm=y6?s4(y6):Lm,xm=Object.prototype,Nm=xm.hasOwnProperty;function K0(c,a){var e=g2(c),r=!e&&W0(c),s=!e&&!r&&X0(c),n=!e&&!r&&!s&&bm(c),i=e||r||s||n,o=i?qf(c.length,String):[],l=o.length;for(var m in c)(a||Nm.call(c,m))&&!(i&&(m=="length"||s&&(m=="offset"||m=="parent")||n&&(m=="buffer"||m=="byteLength"||m=="byteOffset")||Rf(m,l)))&&o.push(m);return o}function Q0(c,a){return function(e){return c(a(e))}}var Sm=Q0(Object.keys,Object),km=Object.prototype,ym=km.hasOwnProperty;function wm(c){if(!r4(c))return Sm(c);var a=[];for(var e in Object(c))ym.call(c,e)&&e!="constructor"&&a.push(e);return a}function U1(c){return e4(c)?K0(c):wm(c)}function Am(c){var a=[];if(c!=null)for(var e in Object(c))a.push(e);return a}var _m=Object.prototype,Pm=_m.hasOwnProperty;function Tm(c){if(!m2(c))return Am(c);var a=r4(c),e=[];for(var r in c)r=="constructor"&&(a||!Pm.call(c,r))||e.push(r);return e}function n4(c){return e4(c)?K0(c,!0):Tm(c)}var Bm=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Fm=/^\w*$/;function $m(c,a){if(g2(c))return!1;var e=typeof c;return e=="number"||e=="symbol"||e=="boolean"||c==null||I1(c)?!0:Fm.test(c)||!Bm.test(c)||a!=null&&c in Object(a)}var Z2=F2(Object,"create");function Dm(){this.__data__=Z2?Z2(null):{},this.size=0}function Rm(c){var a=this.has(c)&&delete this.__data__[c];return this.size-=a?1:0,a}var Em="__lodash_hash_undefined__",Om=Object.prototype,Im=Om.hasOwnProperty;function Um(c){var a=this.__data__;if(Z2){var e=a[c];return e===Em?void 0:e}return Im.call(a,c)?a[c]:void 0}var Gm=Object.prototype,qm=Gm.hasOwnProperty;function Wm(c){var a=this.__data__;return Z2?a[c]!==void 0:qm.call(a,c)}var jm="__lodash_hash_undefined__";function Xm(c,a){var e=this.__data__;return this.size+=this.has(c)?0:1,e[c]=Z2&&a===void 0?jm:a,this}function y2(c){var a=-1,e=c==null?0:c.length;for(this.clear();++a<e;){var r=c[a];this.set(r[0],r[1])}}y2.prototype.clear=Dm;y2.prototype.delete=Rm;y2.prototype.get=Um;y2.prototype.has=Wm;y2.prototype.set=Xm;function Ym(){this.__data__=[],this.size=0}function G1(c,a){for(var e=c.length;e--;)if(I0(c[e][0],a))return e;return-1}var Km=Array.prototype,Qm=Km.splice;function Zm(c){var a=this.__data__,e=G1(a,c);if(e<0)return!1;var r=a.length-1;return e==r?a.pop():Qm.call(a,e,1),--this.size,!0}function Jm(c){var a=this.__data__,e=G1(a,c);return e<0?void 0:a[e][1]}function cv(c){return G1(this.__data__,c)>-1}function av(c,a){var e=this.__data__,r=G1(e,c);return r<0?(++this.size,e.push([c,a])):e[r][1]=a,this}function h2(c){var a=-1,e=c==null?0:c.length;for(this.clear();++a<e;){var r=c[a];this.set(r[0],r[1])}}h2.prototype.clear=Ym;h2.prototype.delete=Zm;h2.prototype.get=Jm;h2.prototype.has=cv;h2.prototype.set=av;var J2=F2(r2,"Map");function ev(){this.size=0,this.__data__={hash:new y2,map:new(J2||h2),string:new y2}}function rv(c){var a=typeof c;return a=="string"||a=="number"||a=="symbol"||a=="boolean"?c!=="__proto__":c===null}function q1(c,a){var e=c.__data__;return rv(a)?e[typeof a=="string"?"string":"hash"]:e.map}function sv(c){var a=q1(this,c).delete(c);return this.size-=a?1:0,a}function nv(c){return q1(this,c).get(c)}function iv(c){return q1(this,c).has(c)}function ov(c,a){var e=q1(this,c),r=e.size;return e.set(c,a),this.size+=e.size==r?0:1,this}function b2(c){var a=-1,e=c==null?0:c.length;for(this.clear();++a<e;){var r=c[a];this.set(r[0],r[1])}}b2.prototype.clear=ev;b2.prototype.delete=sv;b2.prototype.get=nv;b2.prototype.has=iv;b2.prototype.set=ov;var lv="Expected a function";function i4(c,a){if(typeof c!="function"||a!=null&&typeof a!="function")throw new TypeError(lv);var e=function(){var r=arguments,s=a?a.apply(this,r):r[0],n=e.cache;if(n.has(s))return n.get(s);var i=c.apply(this,r);return e.cache=n.set(s,i)||n,i};return e.cache=new(i4.Cache||b2),e}i4.Cache=b2;var tv=500;function fv(c){var a=i4(c,function(r){return e.size===tv&&e.clear(),r}),e=a.cache;return a}var mv=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,vv=/\\(\\)?/g,uv=fv(function(c){var a=[];return c.charCodeAt(0)===46&&a.push(""),c.replace(mv,function(e,r,s,n){a.push(s?n.replace(vv,"$1"):r||e)}),a});function Hv(c){return c==null?"":$0(c)}function o4(c,a){return g2(c)?c:$m(c,a)?[c]:uv(Hv(c))}var zv=1/0;function Z0(c){if(typeof c=="string"||I1(c))return c;var a=c+"";return a=="0"&&1/c==-zv?"-0":a}function hv(c,a){a=o4(a,c);for(var e=0,r=a.length;c!=null&&e<r;)c=c[Z0(a[e++])];return e&&e==r?c:void 0}function l4(c,a){for(var e=-1,r=a.length,s=c.length;++e<r;)c[s+e]=a[e];return c}var w6=i2?i2.isConcatSpreadable:void 0;function pv(c){return g2(c)||W0(c)||!!(w6&&c&&c[w6])}function Vv(c,a,e,r,s){var n=-1,i=c.length;for(e||(e=pv),s||(s=[]);++n<i;){var o=c[n];e(o)?l4(s,o):s[s.length]=o}return s}function dv(c){var a=c==null?0:c.length;return a?Vv(c):[]}function Mv(c){return Ff(If(c,void 0,dv),c+"")}var t4=Q0(Object.getPrototypeOf,Object),Cv="[object Object]",Lv=Function.prototype,gv=Object.prototype,J0=Lv.toString,bv=gv.hasOwnProperty,xv=J0.call(Object);function Nv(c){if(!T2(c)||P2(c)!=Cv)return!1;var a=t4(c);if(a===null)return!0;var e=bv.call(a,"constructor")&&a.constructor;return typeof e=="function"&&e instanceof e&&J0.call(e)==xv}function Sv(c,a,e){var r=-1,s=c.length;a<0&&(a=-a>s?0:s+a),e=e>s?s:e,e<0&&(e+=s),s=a>e?0:e-a>>>0,a>>>=0;for(var n=Array(s);++r<s;)n[r]=c[r+a];return n}function kv(){this.__data__=new h2,this.size=0}function yv(c){var a=this.__data__,e=a.delete(c);return this.size=a.size,e}function wv(c){return this.__data__.get(c)}function Av(c){return this.__data__.has(c)}var _v=200;function Pv(c,a){var e=this.__data__;if(e instanceof h2){var r=e.__data__;if(!J2||r.length<_v-1)return r.push([c,a]),this.size=++e.size,this;e=this.__data__=new b2(r)}return e.set(c,a),this.size=e.size,this}function U2(c){var a=this.__data__=new h2(c);this.size=a.size}U2.prototype.clear=kv;U2.prototype.delete=yv;U2.prototype.get=wv;U2.prototype.has=Av;U2.prototype.set=Pv;function Tv(c,a){return c&&o1(a,U1(a),c)}function Bv(c,a){return c&&o1(a,n4(a),c)}var c8=typeof exports=="object"&&exports&&!exports.nodeType&&exports,A6=c8&&typeof module=="object"&&module&&!module.nodeType&&module,Fv=A6&&A6.exports===c8,_6=Fv?r2.Buffer:void 0,P6=_6?_6.allocUnsafe:void 0;function $v(c,a){if(a)return c.slice();var e=c.length,r=P6?P6(e):new c.constructor(e);return c.copy(r),r}function Dv(c,a){for(var e=-1,r=c==null?0:c.length,s=0,n=[];++e<r;){var i=c[e];a(i,e,c)&&(n[s++]=i)}return n}function a8(){return[]}var Rv=Object.prototype,Ev=Rv.propertyIsEnumerable,T6=Object.getOwnPropertySymbols,f4=T6?function(c){return c==null?[]:(c=Object(c),Dv(T6(c),function(a){return Ev.call(c,a)}))}:a8;function Ov(c,a){return o1(c,f4(c),a)}var Iv=Object.getOwnPropertySymbols,e8=Iv?function(c){for(var a=[];c;)l4(a,f4(c)),c=t4(c);return a}:a8;function Uv(c,a){return o1(c,e8(c),a)}function r8(c,a,e){var r=a(c);return g2(c)?r:l4(r,e(c))}function Gv(c){return r8(c,U1,f4)}function s8(c){return r8(c,n4,e8)}var w3=F2(r2,"DataView"),A3=F2(r2,"Promise"),_3=F2(r2,"Set"),B6="[object Map]",qv="[object Object]",F6="[object Promise]",$6="[object Set]",D6="[object WeakMap]",R6="[object DataView]",Wv=B2(w3),jv=B2(J2),Xv=B2(A3),Yv=B2(_3),Kv=B2(y3),t2=P2;(w3&&t2(new w3(new ArrayBuffer(1)))!=R6||J2&&t2(new J2)!=B6||A3&&t2(A3.resolve())!=F6||_3&&t2(new _3)!=$6||y3&&t2(new y3)!=D6)&&(t2=function(c){var a=P2(c),e=a==qv?c.constructor:void 0,r=e?B2(e):"";if(r)switch(r){case Wv:return R6;case jv:return B6;case Xv:return F6;case Yv:return $6;case Kv:return D6}return a});var Qv=Object.prototype,Zv=Qv.hasOwnProperty;function Jv(c){var a=c.length,e=new c.constructor(a);return a&&typeof c[0]=="string"&&Zv.call(c,"index")&&(e.index=c.index,e.input=c.input),e}var E6=r2.Uint8Array;function m4(c){var a=new c.constructor(c.byteLength);return new E6(a).set(new E6(c)),a}function cu(c,a){var e=a?m4(c.buffer):c.buffer;return new c.constructor(e,c.byteOffset,c.byteLength)}var au=/\w*$/;function eu(c){var a=new c.constructor(c.source,au.exec(c));return a.lastIndex=c.lastIndex,a}var O6=i2?i2.prototype:void 0,I6=O6?O6.valueOf:void 0;function ru(c){return I6?Object(I6.call(c)):{}}function su(c,a){var e=a?m4(c.buffer):c.buffer;return new c.constructor(e,c.byteOffset,c.length)}var nu="[object Boolean]",iu="[object Date]",ou="[object Map]",lu="[object Number]",tu="[object RegExp]",fu="[object Set]",mu="[object String]",vu="[object Symbol]",uu="[object ArrayBuffer]",Hu="[object DataView]",zu="[object Float32Array]",hu="[object Float64Array]",pu="[object Int8Array]",Vu="[object Int16Array]",du="[object Int32Array]",Mu="[object Uint8Array]",Cu="[object Uint8ClampedArray]",Lu="[object Uint16Array]",gu="[object Uint32Array]";function bu(c,a,e){var r=c.constructor;switch(a){case uu:return m4(c);case nu:case iu:return new r(+c);case Hu:return cu(c,e);case zu:case hu:case pu:case Vu:case du:case Mu:case Cu:case Lu:case gu:return su(c,e);case ou:return new r;case lu:case mu:return new r(c);case tu:return eu(c);case fu:return new r;case vu:return ru(c)}}function xu(c){return typeof c.constructor=="function"&&!r4(c)?Sf(t4(c)):{}}var Nu="[object Map]";function Su(c){return T2(c)&&t2(c)==Nu}var U6=E2&&E2.isMap,ku=U6?s4(U6):Su,yu="[object Set]";function wu(c){return T2(c)&&t2(c)==yu}var G6=E2&&E2.isSet,Au=G6?s4(G6):wu,_u=1,Pu=2,Tu=4,n8="[object Arguments]",Bu="[object Array]",Fu="[object Boolean]",$u="[object Date]",Du="[object Error]",i8="[object Function]",Ru="[object GeneratorFunction]",Eu="[object Map]",Ou="[object Number]",o8="[object Object]",Iu="[object RegExp]",Uu="[object Set]",Gu="[object String]",qu="[object Symbol]",Wu="[object WeakMap]",ju="[object ArrayBuffer]",Xu="[object DataView]",Yu="[object Float32Array]",Ku="[object Float64Array]",Qu="[object Int8Array]",Zu="[object Int16Array]",Ju="[object Int32Array]",cH="[object Uint8Array]",aH="[object Uint8ClampedArray]",eH="[object Uint16Array]",rH="[object Uint32Array]",O={};O[n8]=O[Bu]=O[ju]=O[Xu]=O[Fu]=O[$u]=O[Yu]=O[Ku]=O[Qu]=O[Zu]=O[Ju]=O[Eu]=O[Ou]=O[o8]=O[Iu]=O[Uu]=O[Gu]=O[qu]=O[cH]=O[aH]=O[eH]=O[rH]=!0;O[Du]=O[i8]=O[Wu]=!1;function k1(c,a,e,r,s,n){var i,o=a&_u,l=a&Pu,m=a&Tu;if(e&&(i=s?e(c,r,s,n):e(c)),i!==void 0)return i;if(!m2(c))return c;var v=g2(c);if(v){if(i=Jv(c),!o)return yf(c,i)}else{var u=t2(c),V=u==i8||u==Ru;if(X0(c))return $v(c,o);if(u==o8||u==n8||V&&!s){if(i=l||V?{}:xu(c),!o)return l?Uv(c,Bv(i,c)):Ov(c,Tv(i,c))}else{if(!O[u])return s?c:{};i=bu(c,u,o)}}n||(n=new U2);var d=n.get(c);if(d)return d;n.set(c,i),Au(c)?c.forEach(function(y){i.add(k1(y,a,e,y,c,n))}):ku(c)&&c.forEach(function(y,M){i.set(M,k1(y,a,e,M,c,n))});var L=m?l?s8:Gv:l?n4:U1,_=v?void 0:L(c);return E0(_||c,function(y,M){_&&(M=y,y=c[M]),U0(i,M,k1(y,a,e,M,c,n))}),i}function sH(c){return function(a,e,r){for(var s=-1,n=Object(a),i=r(a),o=i.length;o--;){var l=i[++s];if(e(n[l],l,n)===!1)break}return a}}var nH=sH();function iH(c,a){return c&&nH(c,a,U1)}function oH(c,a){return function(e,r){if(e==null)return e;if(!e4(e))return c(e,r);for(var s=e.length,n=-1,i=Object(e);++n<s&&r(i[n],n,i)!==!1;);return e}}var lH=oH(iH),p3=function(){return r2.Date.now()},tH="Expected a function",fH=Math.max,mH=Math.min;function vH(c,a,e){var r,s,n,i,o,l,m=0,v=!1,u=!1,V=!0;if(typeof c!="function")throw new TypeError(tH);a=L6(a)||0,m2(e)&&(v=!!e.leading,u="maxWait"in e,n=u?fH(L6(e.maxWait)||0,a):n,V="trailing"in e?!!e.trailing:V);function d(D){var j=r,l2=s;return r=s=void 0,m=D,i=c.apply(l2,j),i}function L(D){return m=D,o=setTimeout(M,a),v?d(D):i}function _(D){var j=D-l,l2=D-m,c2=a-j;return u?mH(c2,n-l2):c2}function y(D){var j=D-l,l2=D-m;return l===void 0||j>=a||j<0||u&&l2>=n}function M(){var D=p3();if(y(D))return b(D);o=setTimeout(M,_(D))}function b(D){return o=void 0,V&&r?d(D):(r=s=void 0,i)}function T(){o!==void 0&&clearTimeout(o),m=0,r=l=s=o=void 0}function E(){return o===void 0?i:b(p3())}function R(){var D=p3(),j=y(D);if(r=arguments,s=this,l=D,j){if(o===void 0)return L(l);if(u)return clearTimeout(o),o=setTimeout(M,a),d(l)}return o===void 0&&(o=setTimeout(M,a)),i}return R.cancel=T,R.flush=E,R}function uH(c){var a=c==null?0:c.length;return a?c[a-1]:void 0}function HH(c){return typeof c=="function"?c:D0}function zH(c,a){var e=g2(c)?E0:lH;return e(c,HH(a))}function hH(c,a){return a.length<2?c:hv(c,Sv(a,0,-1))}function pH(c,a){return a=o4(a,c),c=hH(c,a),c==null||delete c[Z0(uH(a))]}function VH(c){return Nv(c)?void 0:c}var dH=1,MH=2,CH=4,LH=Mv(function(c,a){var e={};if(c==null)return e;var r=!1;a=F0(a,function(n){return n=o4(n,c),r||(r=n.length>1),n}),o1(c,s8(c),e),r&&(e=k1(e,dH|MH|CH,VH));for(var s=a.length;s--;)pH(e,a[s]);return e}),gH="Expected a function";function bH(c,a,e){var r=!0,s=!0;if(typeof c!="function")throw new TypeError(gH);return m2(e)&&(r="leading"in e?!!e.leading:r,s="trailing"in e?!!e.trailing:s),vH(c,a,{leading:r,maxWait:a,trailing:s})}function xH(c){return e=>{zH(c,r=>{e.use(r)})}}const v4=c=>(c.install=a=>{const e=(c==null?void 0:c.name)||"UnnamedComponent";a.component(e,c)},c);function q6(c,a){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(c);a&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(c,s).enumerable})),e.push.apply(e,r)}return e}function C(c){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?q6(Object(e),!0).forEach(function(r){X(c,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):q6(Object(e)).forEach(function(r){Object.defineProperty(c,r,Object.getOwnPropertyDescriptor(e,r))})}return c}function P1(c){"@babel/helpers - typeof";return P1=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},P1(c)}function NH(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function SH(c,a){for(var e=0;e<a.length;e++){var r=a[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(c,r.key,r)}}function kH(c,a,e){return a&&SH(c.prototype,a),Object.defineProperty(c,"prototype",{writable:!1}),c}function X(c,a,e){return a in c?Object.defineProperty(c,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[a]=e,c}function u4(c,a){return wH(c)||_H(c,a)||l8(c,a)||TH()}function l1(c){return yH(c)||AH(c)||l8(c)||PH()}function yH(c){if(Array.isArray(c))return P3(c)}function wH(c){if(Array.isArray(c))return c}function AH(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function _H(c,a){var e=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(e!=null){var r=[],s=!0,n=!1,i,o;try{for(e=e.call(c);!(s=(i=e.next()).done)&&(r.push(i.value),!(a&&r.length===a));s=!0);}catch(l){n=!0,o=l}finally{try{!s&&e.return!=null&&e.return()}finally{if(n)throw o}}return r}}function l8(c,a){if(c){if(typeof c=="string")return P3(c,a);var e=Object.prototype.toString.call(c).slice(8,-1);if(e==="Object"&&c.constructor&&(e=c.constructor.name),e==="Map"||e==="Set")return Array.from(c);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return P3(c,a)}}function P3(c,a){(a==null||a>c.length)&&(a=c.length);for(var e=0,r=new Array(a);e<a;e++)r[e]=c[e];return r}function PH(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function TH(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var W6=function(){},H4={},t8={},f8=null,m8={mark:W6,measure:W6};try{typeof window<"u"&&(H4=window),typeof document<"u"&&(t8=document),typeof MutationObserver<"u"&&(f8=MutationObserver),typeof performance<"u"&&(m8=performance)}catch{}var BH=H4.navigator||{},j6=BH.userAgent,X6=j6===void 0?"":j6,d2=H4,G=t8,Y6=f8,h1=m8;d2.document;var p2=!!G.documentElement&&!!G.head&&typeof G.addEventListener=="function"&&typeof G.createElement=="function",v8=~X6.indexOf("MSIE")||~X6.indexOf("Trident/"),p1,V1,d1,M1,C1,v2="___FONT_AWESOME___",T3=16,u8="fa",H8="svg-inline--fa",w2="data-fa-i2svg",B3="data-fa-pseudo-element",FH="data-fa-pseudo-element-pending",z4="data-prefix",h4="data-icon",K6="fontawesome-i2svg",$H="async",DH=["HTML","HEAD","STYLE","SCRIPT"],z8=function(){try{return!0}catch{return!1}}(),U="classic",W="sharp",p4=[U,W];function t1(c){return new Proxy(c,{get:function(e,r){return r in e?e[r]:e[U]}})}var c1=t1((p1={},X(p1,U,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),X(p1,W,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),p1)),a1=t1((V1={},X(V1,U,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),X(V1,W,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),V1)),e1=t1((d1={},X(d1,U,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),X(d1,W,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),d1)),RH=t1((M1={},X(M1,U,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),X(M1,W,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),M1)),EH=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,h8="fa-layers-text",OH=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,IH=t1((C1={},X(C1,U,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),X(C1,W,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),C1)),p8=[1,2,3,4,5,6,7,8,9,10],UH=p8.concat([11,12,13,14,15,16,17,18,19,20]),GH=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],x2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},r1=new Set;Object.keys(a1[U]).map(r1.add.bind(r1));Object.keys(a1[W]).map(r1.add.bind(r1));var qH=[].concat(p4,l1(r1),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",x2.GROUP,x2.SWAP_OPACITY,x2.PRIMARY,x2.SECONDARY]).concat(p8.map(function(c){return"".concat(c,"x")})).concat(UH.map(function(c){return"w-".concat(c)})),Y2=d2.FontAwesomeConfig||{};function WH(c){var a=G.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function jH(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}if(G&&typeof G.querySelector=="function"){var XH=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];XH.forEach(function(c){var a=u4(c,2),e=a[0],r=a[1],s=jH(WH(e));s!=null&&(Y2[r]=s)})}var V8={styleDefault:"solid",familyDefault:"classic",cssPrefix:u8,replacementClass:H8,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Y2.familyPrefix&&(Y2.cssPrefix=Y2.familyPrefix);var O2=C(C({},V8),Y2);O2.autoReplaceSvg||(O2.observeMutations=!1);var N={};Object.keys(V8).forEach(function(c){Object.defineProperty(N,c,{enumerable:!0,set:function(e){O2[c]=e,K2.forEach(function(r){return r(N)})},get:function(){return O2[c]}})});Object.defineProperty(N,"familyPrefix",{enumerable:!0,set:function(a){O2.cssPrefix=a,K2.forEach(function(e){return e(N)})},get:function(){return O2.cssPrefix}});d2.FontAwesomeConfig=N;var K2=[];function YH(c){return K2.push(c),function(){K2.splice(K2.indexOf(c),1)}}var V2=T3,s2={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function KH(c){if(!(!c||!p2)){var a=G.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var e=G.head.childNodes,r=null,s=e.length-1;s>-1;s--){var n=e[s],i=(n.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(r=n)}return G.head.insertBefore(a,r),c}}var QH="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function s1(){for(var c=12,a="";c-- >0;)a+=QH[Math.random()*62|0];return a}function G2(c){for(var a=[],e=(c||[]).length>>>0;e--;)a[e]=c[e];return a}function V4(c){return c.classList?G2(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function d8(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ZH(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,'="').concat(d8(c[e]),'" ')},"").trim()}function W1(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,": ").concat(c[e].trim(),";")},"")}function d4(c){return c.size!==s2.size||c.x!==s2.x||c.y!==s2.y||c.rotate!==s2.rotate||c.flipX||c.flipY}function JH(c){var a=c.transform,e=c.containerWidth,r=c.iconWidth,s={transform:"translate(".concat(e/2," 256)")},n="translate(".concat(a.x*32,", ").concat(a.y*32,") "),i="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),o="rotate(".concat(a.rotate," 0 0)"),l={transform:"".concat(n," ").concat(i," ").concat(o)},m={transform:"translate(".concat(r/2*-1," -256)")};return{outer:s,inner:l,path:m}}function cz(c){var a=c.transform,e=c.width,r=e===void 0?T3:e,s=c.height,n=s===void 0?T3:s,i=c.startCentered,o=i===void 0?!1:i,l="";return o&&v8?l+="translate(".concat(a.x/V2-r/2,"em, ").concat(a.y/V2-n/2,"em) "):o?l+="translate(calc(-50% + ".concat(a.x/V2,"em), calc(-50% + ").concat(a.y/V2,"em)) "):l+="translate(".concat(a.x/V2,"em, ").concat(a.y/V2,"em) "),l+="scale(".concat(a.size/V2*(a.flipX?-1:1),", ").concat(a.size/V2*(a.flipY?-1:1),") "),l+="rotate(".concat(a.rotate,"deg) "),l}var az=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function M8(){var c=u8,a=H8,e=N.cssPrefix,r=N.replacementClass,s=az;if(e!==c||r!==a){var n=new RegExp("\\.".concat(c,"\\-"),"g"),i=new RegExp("\\--".concat(c,"\\-"),"g"),o=new RegExp("\\.".concat(a),"g");s=s.replace(n,".".concat(e,"-")).replace(i,"--".concat(e,"-")).replace(o,".".concat(r))}return s}var Q6=!1;function V3(){N.autoAddCss&&!Q6&&(KH(M8()),Q6=!0)}var ez={mixout:function(){return{dom:{css:M8,insertCss:V3}}},hooks:function(){return{beforeDOMElementCreation:function(){V3()},beforeI2svg:function(){V3()}}}},u2=d2||{};u2[v2]||(u2[v2]={});u2[v2].styles||(u2[v2].styles={});u2[v2].hooks||(u2[v2].hooks={});u2[v2].shims||(u2[v2].shims=[]);var a2=u2[v2],C8=[],rz=function c(){G.removeEventListener("DOMContentLoaded",c),T1=1,C8.map(function(a){return a()})},T1=!1;p2&&(T1=(G.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(G.readyState),T1||G.addEventListener("DOMContentLoaded",rz));function sz(c){p2&&(T1?setTimeout(c,0):C8.push(c))}function f1(c){var a=c.tag,e=c.attributes,r=e===void 0?{}:e,s=c.children,n=s===void 0?[]:s;return typeof c=="string"?d8(c):"<".concat(a," ").concat(ZH(r),">").concat(n.map(f1).join(""),"</").concat(a,">")}function Z6(c,a,e){if(c&&c[a]&&c[a][e])return{prefix:a,iconName:e,icon:c[a][e]}}var d3=function(a,e,r,s){var n=Object.keys(a),i=n.length,o=e,l,m,v;for(r===void 0?(l=1,v=a[n[0]]):(l=0,v=r);l<i;l++)m=n[l],v=o(v,a[m],m,a);return v};function nz(c){for(var a=[],e=0,r=c.length;e<r;){var s=c.charCodeAt(e++);if(s>=55296&&s<=56319&&e<r){var n=c.charCodeAt(e++);(n&64512)==56320?a.push(((s&1023)<<10)+(n&1023)+65536):(a.push(s),e--)}else a.push(s)}return a}function F3(c){var a=nz(c);return a.length===1?a[0].toString(16):null}function iz(c,a){var e=c.length,r=c.charCodeAt(a),s;return r>=55296&&r<=56319&&e>a+1&&(s=c.charCodeAt(a+1),s>=56320&&s<=57343)?(r-55296)*1024+s-56320+65536:r}function J6(c){return Object.keys(c).reduce(function(a,e){var r=c[e],s=!!r.icon;return s?a[r.iconName]=r.icon:a[e]=r,a},{})}function $3(c,a){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=e.skipHooks,s=r===void 0?!1:r,n=J6(a);typeof a2.hooks.addPack=="function"&&!s?a2.hooks.addPack(c,J6(a)):a2.styles[c]=C(C({},a2.styles[c]||{}),n),c==="fas"&&$3("fa",a)}var L1,g1,b1,$2=a2.styles,oz=a2.shims,lz=(L1={},X(L1,U,Object.values(e1[U])),X(L1,W,Object.values(e1[W])),L1),M4=null,L8={},g8={},b8={},x8={},N8={},tz=(g1={},X(g1,U,Object.keys(c1[U])),X(g1,W,Object.keys(c1[W])),g1);function fz(c){return~qH.indexOf(c)}function mz(c,a){var e=a.split("-"),r=e[0],s=e.slice(1).join("-");return r===c&&s!==""&&!fz(s)?s:null}var S8=function(){var a=function(n){return d3($2,function(i,o,l){return i[l]=d3(o,n,{}),i},{})};L8=a(function(s,n,i){if(n[3]&&(s[n[3]]=i),n[2]){var o=n[2].filter(function(l){return typeof l=="number"});o.forEach(function(l){s[l.toString(16)]=i})}return s}),g8=a(function(s,n,i){if(s[i]=i,n[2]){var o=n[2].filter(function(l){return typeof l=="string"});o.forEach(function(l){s[l]=i})}return s}),N8=a(function(s,n,i){var o=n[2];return s[i]=i,o.forEach(function(l){s[l]=i}),s});var e="far"in $2||N.autoFetchSvg,r=d3(oz,function(s,n){var i=n[0],o=n[1],l=n[2];return o==="far"&&!e&&(o="fas"),typeof i=="string"&&(s.names[i]={prefix:o,iconName:l}),typeof i=="number"&&(s.unicodes[i.toString(16)]={prefix:o,iconName:l}),s},{names:{},unicodes:{}});b8=r.names,x8=r.unicodes,M4=j1(N.styleDefault,{family:N.familyDefault})};YH(function(c){M4=j1(c.styleDefault,{family:N.familyDefault})});S8();function C4(c,a){return(L8[c]||{})[a]}function vz(c,a){return(g8[c]||{})[a]}function N2(c,a){return(N8[c]||{})[a]}function k8(c){return b8[c]||{prefix:null,iconName:null}}function uz(c){var a=x8[c],e=C4("fas",c);return a||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function M2(){return M4}var L4=function(){return{prefix:null,iconName:null,rest:[]}};function j1(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.family,r=e===void 0?U:e,s=c1[r][c],n=a1[r][c]||a1[r][s],i=c in a2.styles?c:null;return n||i||null}var c0=(b1={},X(b1,U,Object.keys(e1[U])),X(b1,W,Object.keys(e1[W])),b1);function X1(c){var a,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.skipLookups,s=r===void 0?!1:r,n=(a={},X(a,U,"".concat(N.cssPrefix,"-").concat(U)),X(a,W,"".concat(N.cssPrefix,"-").concat(W)),a),i=null,o=U;(c.includes(n[U])||c.some(function(m){return c0[U].includes(m)}))&&(o=U),(c.includes(n[W])||c.some(function(m){return c0[W].includes(m)}))&&(o=W);var l=c.reduce(function(m,v){var u=mz(N.cssPrefix,v);if($2[v]?(v=lz[o].includes(v)?RH[o][v]:v,i=v,m.prefix=v):tz[o].indexOf(v)>-1?(i=v,m.prefix=j1(v,{family:o})):u?m.iconName=u:v!==N.replacementClass&&v!==n[U]&&v!==n[W]&&m.rest.push(v),!s&&m.prefix&&m.iconName){var V=i==="fa"?k8(m.iconName):{},d=N2(m.prefix,m.iconName);V.prefix&&(i=null),m.iconName=V.iconName||d||m.iconName,m.prefix=V.prefix||m.prefix,m.prefix==="far"&&!$2.far&&$2.fas&&!N.autoFetchSvg&&(m.prefix="fas")}return m},L4());return(c.includes("fa-brands")||c.includes("fab"))&&(l.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(l.prefix="fad"),!l.prefix&&o===W&&($2.fass||N.autoFetchSvg)&&(l.prefix="fass",l.iconName=N2(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||i==="fa")&&(l.prefix=M2()||"fas"),l}var Hz=function(){function c(){NH(this,c),this.definitions={}}return kH(c,[{key:"add",value:function(){for(var e=this,r=arguments.length,s=new Array(r),n=0;n<r;n++)s[n]=arguments[n];var i=s.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(o){e.definitions[o]=C(C({},e.definitions[o]||{}),i[o]),$3(o,i[o]);var l=e1[U][o];l&&$3(l,i[o]),S8()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,r){var s=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(s).map(function(n){var i=s[n],o=i.prefix,l=i.iconName,m=i.icon,v=m[2];e[o]||(e[o]={}),v.length>0&&v.forEach(function(u){typeof u=="string"&&(e[o][u]=m)}),e[o][l]=m}),e}}]),c}(),a0=[],D2={},R2={},zz=Object.keys(R2);function hz(c,a){var e=a.mixoutsTo;return a0=c,D2={},Object.keys(R2).forEach(function(r){zz.indexOf(r)===-1&&delete R2[r]}),a0.forEach(function(r){var s=r.mixout?r.mixout():{};if(Object.keys(s).forEach(function(i){typeof s[i]=="function"&&(e[i]=s[i]),P1(s[i])==="object"&&Object.keys(s[i]).forEach(function(o){e[i]||(e[i]={}),e[i][o]=s[i][o]})}),r.hooks){var n=r.hooks();Object.keys(n).forEach(function(i){D2[i]||(D2[i]=[]),D2[i].push(n[i])})}r.provides&&r.provides(R2)}),e}function D3(c,a){for(var e=arguments.length,r=new Array(e>2?e-2:0),s=2;s<e;s++)r[s-2]=arguments[s];var n=D2[c]||[];return n.forEach(function(i){a=i.apply(null,[a].concat(r))}),a}function A2(c){for(var a=arguments.length,e=new Array(a>1?a-1:0),r=1;r<a;r++)e[r-1]=arguments[r];var s=D2[c]||[];s.forEach(function(n){n.apply(null,e)})}function H2(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return R2[c]?R2[c].apply(null,a):void 0}function R3(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,e=c.prefix||M2();if(a)return a=N2(e,a)||a,Z6(y8.definitions,e,a)||Z6(a2.styles,e,a)}var y8=new Hz,pz=function(){N.autoReplaceSvg=!1,N.observeMutations=!1,A2("noAuto")},Vz={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return p2?(A2("beforeI2svg",a),H2("pseudoElements2svg",a),H2("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot;N.autoReplaceSvg===!1&&(N.autoReplaceSvg=!0),N.observeMutations=!0,sz(function(){Mz({autoReplaceSvgRoot:e}),A2("watch",a)})}},dz={icon:function(a){if(a===null)return null;if(P1(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:N2(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var e=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],r=j1(a[0]);return{prefix:r,iconName:N2(r,e)||e}}if(typeof a=="string"&&(a.indexOf("".concat(N.cssPrefix,"-"))>-1||a.match(EH))){var s=X1(a.split(" "),{skipLookups:!0});return{prefix:s.prefix||M2(),iconName:N2(s.prefix,s.iconName)||s.iconName}}if(typeof a=="string"){var n=M2();return{prefix:n,iconName:N2(n,a)||a}}}},J={noAuto:pz,config:N,dom:Vz,parse:dz,library:y8,findIconDefinition:R3,toHtml:f1},Mz=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot,r=e===void 0?G:e;(Object.keys(a2.styles).length>0||N.autoFetchSvg)&&p2&&N.autoReplaceSvg&&J.dom.i2svg({node:r})};function Y1(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(r){return f1(r)})}}),Object.defineProperty(c,"node",{get:function(){if(p2){var r=G.createElement("div");return r.innerHTML=c.html,r.children}}}),c}function Cz(c){var a=c.children,e=c.main,r=c.mask,s=c.attributes,n=c.styles,i=c.transform;if(d4(i)&&e.found&&!r.found){var o=e.width,l=e.height,m={x:o/l/2,y:.5};s.style=W1(C(C({},n),{},{"transform-origin":"".concat(m.x+i.x/16,"em ").concat(m.y+i.y/16,"em")}))}return[{tag:"svg",attributes:s,children:a}]}function Lz(c){var a=c.prefix,e=c.iconName,r=c.children,s=c.attributes,n=c.symbol,i=n===!0?"".concat(a,"-").concat(N.cssPrefix,"-").concat(e):n;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:C(C({},s),{},{id:i}),children:r}]}]}function g4(c){var a=c.icons,e=a.main,r=a.mask,s=c.prefix,n=c.iconName,i=c.transform,o=c.symbol,l=c.title,m=c.maskId,v=c.titleId,u=c.extra,V=c.watchable,d=V===void 0?!1:V,L=r.found?r:e,_=L.width,y=L.height,M=s==="fak",b=[N.replacementClass,n?"".concat(N.cssPrefix,"-").concat(n):""].filter(function(c2){return u.classes.indexOf(c2)===-1}).filter(function(c2){return c2!==""||!!c2}).concat(u.classes).join(" "),T={children:[],attributes:C(C({},u.attributes),{},{"data-prefix":s,"data-icon":n,class:b,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(_," ").concat(y)})},E=M&&!~u.classes.indexOf("fa-fw")?{width:"".concat(_/y*16*.0625,"em")}:{};d&&(T.attributes[w2]=""),l&&(T.children.push({tag:"title",attributes:{id:T.attributes["aria-labelledby"]||"title-".concat(v||s1())},children:[l]}),delete T.attributes.title);var R=C(C({},T),{},{prefix:s,iconName:n,main:e,mask:r,maskId:m,transform:i,symbol:o,styles:C(C({},E),u.styles)}),D=r.found&&e.found?H2("generateAbstractMask",R)||{children:[],attributes:{}}:H2("generateAbstractIcon",R)||{children:[],attributes:{}},j=D.children,l2=D.attributes;return R.children=j,R.attributes=l2,o?Lz(R):Cz(R)}function e0(c){var a=c.content,e=c.width,r=c.height,s=c.transform,n=c.title,i=c.extra,o=c.watchable,l=o===void 0?!1:o,m=C(C(C({},i.attributes),n?{title:n}:{}),{},{class:i.classes.join(" ")});l&&(m[w2]="");var v=C({},i.styles);d4(s)&&(v.transform=cz({transform:s,startCentered:!0,width:e,height:r}),v["-webkit-transform"]=v.transform);var u=W1(v);u.length>0&&(m.style=u);var V=[];return V.push({tag:"span",attributes:m,children:[a]}),n&&V.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),V}function gz(c){var a=c.content,e=c.title,r=c.extra,s=C(C(C({},r.attributes),e?{title:e}:{}),{},{class:r.classes.join(" ")}),n=W1(r.styles);n.length>0&&(s.style=n);var i=[];return i.push({tag:"span",attributes:s,children:[a]}),e&&i.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),i}var M3=a2.styles;function E3(c){var a=c[0],e=c[1],r=c.slice(4),s=u4(r,1),n=s[0],i=null;return Array.isArray(n)?i={tag:"g",attributes:{class:"".concat(N.cssPrefix,"-").concat(x2.GROUP)},children:[{tag:"path",attributes:{class:"".concat(N.cssPrefix,"-").concat(x2.SECONDARY),fill:"currentColor",d:n[0]}},{tag:"path",attributes:{class:"".concat(N.cssPrefix,"-").concat(x2.PRIMARY),fill:"currentColor",d:n[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:n}},{found:!0,width:a,height:e,icon:i}}var bz={found:!1,width:512,height:512};function xz(c,a){!z8&&!N.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function O3(c,a){var e=a;return a==="fa"&&N.styleDefault!==null&&(a=M2()),new Promise(function(r,s){if(H2("missingIconAbstract"),e==="fa"){var n=k8(c)||{};c=n.iconName||c,a=n.prefix||a}if(c&&a&&M3[a]&&M3[a][c]){var i=M3[a][c];return r(E3(i))}xz(c,a),r(C(C({},bz),{},{icon:N.showMissingIcons&&c?H2("missingIconAbstract")||{}:{}}))})}var r0=function(){},I3=N.measurePerformance&&h1&&h1.mark&&h1.measure?h1:{mark:r0,measure:r0},W2='FA "6.5.1"',Nz=function(a){return I3.mark("".concat(W2," ").concat(a," begins")),function(){return w8(a)}},w8=function(a){I3.mark("".concat(W2," ").concat(a," ends")),I3.measure("".concat(W2," ").concat(a),"".concat(W2," ").concat(a," begins"),"".concat(W2," ").concat(a," ends"))},b4={begin:Nz,end:w8},y1=function(){};function s0(c){var a=c.getAttribute?c.getAttribute(w2):null;return typeof a=="string"}function Sz(c){var a=c.getAttribute?c.getAttribute(z4):null,e=c.getAttribute?c.getAttribute(h4):null;return a&&e}function kz(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(N.replacementClass)}function yz(){if(N.autoReplaceSvg===!0)return w1.replace;var c=w1[N.autoReplaceSvg];return c||w1.replace}function wz(c){return G.createElementNS("http://www.w3.org/2000/svg",c)}function Az(c){return G.createElement(c)}function A8(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.ceFn,r=e===void 0?c.tag==="svg"?wz:Az:e;if(typeof c=="string")return G.createTextNode(c);var s=r(c.tag);Object.keys(c.attributes||[]).forEach(function(i){s.setAttribute(i,c.attributes[i])});var n=c.children||[];return n.forEach(function(i){s.appendChild(A8(i,{ceFn:r}))}),s}function _z(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var w1={replace:function(a){var e=a[0];if(e.parentNode)if(a[1].forEach(function(s){e.parentNode.insertBefore(A8(s),e)}),e.getAttribute(w2)===null&&N.keepOriginalSource){var r=G.createComment(_z(e));e.parentNode.replaceChild(r,e)}else e.remove()},nest:function(a){var e=a[0],r=a[1];if(~V4(e).indexOf(N.replacementClass))return w1.replace(a);var s=new RegExp("".concat(N.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var n=r[0].attributes.class.split(" ").reduce(function(o,l){return l===N.replacementClass||l.match(s)?o.toSvg.push(l):o.toNode.push(l),o},{toNode:[],toSvg:[]});r[0].attributes.class=n.toSvg.join(" "),n.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",n.toNode.join(" "))}var i=r.map(function(o){return f1(o)}).join(`
`);e.setAttribute(w2,""),e.innerHTML=i}};function n0(c){c()}function _8(c,a){var e=typeof a=="function"?a:y1;if(c.length===0)e();else{var r=n0;N.mutateApproach===$H&&(r=d2.requestAnimationFrame||n0),r(function(){var s=yz(),n=b4.begin("mutate");c.map(s),n(),e()})}}var x4=!1;function P8(){x4=!0}function U3(){x4=!1}var B1=null;function i0(c){if(Y6&&N.observeMutations){var a=c.treeCallback,e=a===void 0?y1:a,r=c.nodeCallback,s=r===void 0?y1:r,n=c.pseudoElementsCallback,i=n===void 0?y1:n,o=c.observeMutationsRoot,l=o===void 0?G:o;B1=new Y6(function(m){if(!x4){var v=M2();G2(m).forEach(function(u){if(u.type==="childList"&&u.addedNodes.length>0&&!s0(u.addedNodes[0])&&(N.searchPseudoElements&&i(u.target),e(u.target)),u.type==="attributes"&&u.target.parentNode&&N.searchPseudoElements&&i(u.target.parentNode),u.type==="attributes"&&s0(u.target)&&~GH.indexOf(u.attributeName))if(u.attributeName==="class"&&Sz(u.target)){var V=X1(V4(u.target)),d=V.prefix,L=V.iconName;u.target.setAttribute(z4,d||v),L&&u.target.setAttribute(h4,L)}else kz(u.target)&&s(u.target)})}}),p2&&B1.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Pz(){B1&&B1.disconnect()}function Tz(c){var a=c.getAttribute("style"),e=[];return a&&(e=a.split(";").reduce(function(r,s){var n=s.split(":"),i=n[0],o=n.slice(1);return i&&o.length>0&&(r[i]=o.join(":").trim()),r},{})),e}function Bz(c){var a=c.getAttribute("data-prefix"),e=c.getAttribute("data-icon"),r=c.innerText!==void 0?c.innerText.trim():"",s=X1(V4(c));return s.prefix||(s.prefix=M2()),a&&e&&(s.prefix=a,s.iconName=e),s.iconName&&s.prefix||(s.prefix&&r.length>0&&(s.iconName=vz(s.prefix,c.innerText)||C4(s.prefix,F3(c.innerText))),!s.iconName&&N.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=c.firstChild.data)),s}function Fz(c){var a=G2(c.attributes).reduce(function(s,n){return s.name!=="class"&&s.name!=="style"&&(s[n.name]=n.value),s},{}),e=c.getAttribute("title"),r=c.getAttribute("data-fa-title-id");return N.autoA11y&&(e?a["aria-labelledby"]="".concat(N.replacementClass,"-title-").concat(r||s1()):(a["aria-hidden"]="true",a.focusable="false")),a}function $z(){return{iconName:null,title:null,titleId:null,prefix:null,transform:s2,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function o0(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=Bz(c),r=e.iconName,s=e.prefix,n=e.rest,i=Fz(c),o=D3("parseNodeAttributes",{},c),l=a.styleParser?Tz(c):[];return C({iconName:r,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:s,transform:s2,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:n,styles:l,attributes:i}},o)}var Dz=a2.styles;function T8(c){var a=N.autoReplaceSvg==="nest"?o0(c,{styleParser:!1}):o0(c);return~a.extra.classes.indexOf(h8)?H2("generateLayersText",c,a):H2("generateSvgReplacementMutation",c,a)}var C2=new Set;p4.map(function(c){C2.add("fa-".concat(c))});Object.keys(c1[U]).map(C2.add.bind(C2));Object.keys(c1[W]).map(C2.add.bind(C2));C2=l1(C2);function l0(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!p2)return Promise.resolve();var e=G.documentElement.classList,r=function(u){return e.add("".concat(K6,"-").concat(u))},s=function(u){return e.remove("".concat(K6,"-").concat(u))},n=N.autoFetchSvg?C2:p4.map(function(v){return"fa-".concat(v)}).concat(Object.keys(Dz));n.includes("fa")||n.push("fa");var i=[".".concat(h8,":not([").concat(w2,"])")].concat(n.map(function(v){return".".concat(v,":not([").concat(w2,"])")})).join(", ");if(i.length===0)return Promise.resolve();var o=[];try{o=G2(c.querySelectorAll(i))}catch{}if(o.length>0)r("pending"),s("complete");else return Promise.resolve();var l=b4.begin("onTree"),m=o.reduce(function(v,u){try{var V=T8(u);V&&v.push(V)}catch(d){z8||d.name==="MissingIcon"&&console.error(d)}return v},[]);return new Promise(function(v,u){Promise.all(m).then(function(V){_8(V,function(){r("active"),r("complete"),s("pending"),typeof a=="function"&&a(),l(),v()})}).catch(function(V){l(),u(V)})})}function Rz(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;T8(c).then(function(e){e&&_8([e],a)})}function Ez(c){return function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(a||{}).icon?a:R3(a||{}),s=e.mask;return s&&(s=(s||{}).icon?s:R3(s||{})),c(r,C(C({},e),{},{mask:s}))}}var Oz=function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,s=r===void 0?s2:r,n=e.symbol,i=n===void 0?!1:n,o=e.mask,l=o===void 0?null:o,m=e.maskId,v=m===void 0?null:m,u=e.title,V=u===void 0?null:u,d=e.titleId,L=d===void 0?null:d,_=e.classes,y=_===void 0?[]:_,M=e.attributes,b=M===void 0?{}:M,T=e.styles,E=T===void 0?{}:T;if(a){var R=a.prefix,D=a.iconName,j=a.icon;return Y1(C({type:"icon"},a),function(){return A2("beforeDOMElementCreation",{iconDefinition:a,params:e}),N.autoA11y&&(V?b["aria-labelledby"]="".concat(N.replacementClass,"-title-").concat(L||s1()):(b["aria-hidden"]="true",b.focusable="false")),g4({icons:{main:E3(j),mask:l?E3(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:R,iconName:D,transform:C(C({},s2),s),symbol:i,title:V,maskId:v,titleId:L,extra:{attributes:b,styles:E,classes:y}})})}},Iz={mixout:function(){return{icon:Ez(Oz)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=l0,e.nodeCallback=Rz,e}}},provides:function(a){a.i2svg=function(e){var r=e.node,s=r===void 0?G:r,n=e.callback,i=n===void 0?function(){}:n;return l0(s,i)},a.generateSvgReplacementMutation=function(e,r){var s=r.iconName,n=r.title,i=r.titleId,o=r.prefix,l=r.transform,m=r.symbol,v=r.mask,u=r.maskId,V=r.extra;return new Promise(function(d,L){Promise.all([O3(s,o),v.iconName?O3(v.iconName,v.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(_){var y=u4(_,2),M=y[0],b=y[1];d([e,g4({icons:{main:M,mask:b},prefix:o,iconName:s,transform:l,symbol:m,maskId:u,title:n,titleId:i,extra:V,watchable:!0})])}).catch(L)})},a.generateAbstractIcon=function(e){var r=e.children,s=e.attributes,n=e.main,i=e.transform,o=e.styles,l=W1(o);l.length>0&&(s.style=l);var m;return d4(i)&&(m=H2("generateAbstractTransformGrouping",{main:n,transform:i,containerWidth:n.width,iconWidth:n.width})),r.push(m||n.icon),{children:r,attributes:s}}}},Uz={mixout:function(){return{layer:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.classes,n=s===void 0?[]:s;return Y1({type:"layer"},function(){A2("beforeDOMElementCreation",{assembler:e,params:r});var i=[];return e(function(o){Array.isArray(o)?o.map(function(l){i=i.concat(l.abstract)}):i=i.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(N.cssPrefix,"-layers")].concat(l1(n)).join(" ")},children:i}]})}}}},Gz={mixout:function(){return{counter:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.title,n=s===void 0?null:s,i=r.classes,o=i===void 0?[]:i,l=r.attributes,m=l===void 0?{}:l,v=r.styles,u=v===void 0?{}:v;return Y1({type:"counter",content:e},function(){return A2("beforeDOMElementCreation",{content:e,params:r}),gz({content:e.toString(),title:n,extra:{attributes:m,styles:u,classes:["".concat(N.cssPrefix,"-layers-counter")].concat(l1(o))}})})}}}},qz={mixout:function(){return{text:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.transform,n=s===void 0?s2:s,i=r.title,o=i===void 0?null:i,l=r.classes,m=l===void 0?[]:l,v=r.attributes,u=v===void 0?{}:v,V=r.styles,d=V===void 0?{}:V;return Y1({type:"text",content:e},function(){return A2("beforeDOMElementCreation",{content:e,params:r}),e0({content:e,transform:C(C({},s2),n),title:o,extra:{attributes:u,styles:d,classes:["".concat(N.cssPrefix,"-layers-text")].concat(l1(m))}})})}}},provides:function(a){a.generateLayersText=function(e,r){var s=r.title,n=r.transform,i=r.extra,o=null,l=null;if(v8){var m=parseInt(getComputedStyle(e).fontSize,10),v=e.getBoundingClientRect();o=v.width/m,l=v.height/m}return N.autoA11y&&!s&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,e0({content:e.innerHTML,width:o,height:l,transform:n,title:s,extra:i,watchable:!0})])}}},Wz=new RegExp('"',"ug"),t0=[1105920,1112319];function jz(c){var a=c.replace(Wz,""),e=iz(a,0),r=e>=t0[0]&&e<=t0[1],s=a.length===2?a[0]===a[1]:!1;return{value:F3(s?a[0]:a),isSecondary:r||s}}function f0(c,a){var e="".concat(FH).concat(a.replace(":","-"));return new Promise(function(r,s){if(c.getAttribute(e)!==null)return r();var n=G2(c.children),i=n.filter(function(j){return j.getAttribute(B3)===a})[0],o=d2.getComputedStyle(c,a),l=o.getPropertyValue("font-family").match(OH),m=o.getPropertyValue("font-weight"),v=o.getPropertyValue("content");if(i&&!l)return c.removeChild(i),r();if(l&&v!=="none"&&v!==""){var u=o.getPropertyValue("content"),V=~["Sharp"].indexOf(l[2])?W:U,d=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?a1[V][l[2].toLowerCase()]:IH[V][m],L=jz(u),_=L.value,y=L.isSecondary,M=l[0].startsWith("FontAwesome"),b=C4(d,_),T=b;if(M){var E=uz(_);E.iconName&&E.prefix&&(b=E.iconName,d=E.prefix)}if(b&&!y&&(!i||i.getAttribute(z4)!==d||i.getAttribute(h4)!==T)){c.setAttribute(e,T),i&&c.removeChild(i);var R=$z(),D=R.extra;D.attributes[B3]=a,O3(b,d).then(function(j){var l2=g4(C(C({},R),{},{icons:{main:j,mask:L4()},prefix:d,iconName:T,extra:D,watchable:!0})),c2=G.createElementNS("http://www.w3.org/2000/svg","svg");a==="::before"?c.insertBefore(c2,c.firstChild):c.appendChild(c2),c2.outerHTML=l2.map(function(us){return f1(us)}).join(`