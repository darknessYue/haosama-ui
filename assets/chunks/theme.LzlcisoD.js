const __vite__fileDeps=["assets/chunks/VPLocalSearchBox.BMPndifm.js","assets/chunks/framework.CKW_XYlm.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{d as x,o as t,c as z,r as u,n as F,a as e2,t as D,b as y,w as p,e as L,T as F1,_ as A,u as os,i as ls,f as ts,g as j3,h as B,j as O2,k,l as L2,m as h,p as v,q as Y,s as K,v as S2,x as L3,y as o2,z as D1,A as q3,B as f0,C as fs,D as vs,E as _2,F as q,G as Q,H as v0,I as $1,J as S,K as k2,L as m0,M as R1,N as G2,O as n1,P as ms,Q as Q2,R as us,S as g3,U as Hs,V as u0,W as zs,X as hs,Y as ps,Z as H0,$ as W3,a0 as Vs,a1 as ds,a2 as Ms,a3 as z0,a4 as Cs,a5 as Ls,a6 as v3,a7 as gs,a8 as bs,a9 as xs}from"./framework.CKW_XYlm.js";const Ns=x({__name:"VPBadge",props:{text:{},type:{default:"tip"}},setup(c){return(a,e)=>(t(),z("span",{class:F(["VPBadge",a.type])},[u(a.$slots,"default",{},()=>[e2(D(a.text),1)])],2))}}),ks={key:0,class:"VPBackdrop"},Ss=x({__name:"VPBackdrop",props:{show:{type:Boolean}},setup(c){return(a,e)=>(t(),y(F1,{name:"fade"},{default:p(()=>[a.show?(t(),z("div",ks)):L("",!0)]),_:1}))}}),ys=A(Ss,[["__scopeId","data-v-699a7235"]]),P=os;function ws(c,a){let e,r=!1;return()=>{e&&clearTimeout(e),r?e=setTimeout(c,a):(c(),(r=!0)&&setTimeout(()=>r=!1,a))}}function b3(c){return/^\//.test(c)?c:`/${c}`}function G3(c){const{pathname:a,search:e,hash:r,protocol:s}=new URL(c,"http://a.com");if(ls(c)||c.startsWith("#")||!s.startsWith("http")||!ts(a))return c;const{site:n}=P(),i=a.endsWith("/")||a.endsWith(".html")?c:c.replace(/(?:(^\.+)\/)?.*$/,`$1${a.replace(/(\.md)?$/,n.value.cleanUrls?"":".html")}${e}${r}`);return j3(i)}const X3=B(O2?location.hash:"");O2&&window.addEventListener("hashchange",()=>{X3.value=location.hash});function i1({removeCurrent:c=!0,correspondingLink:a=!1}={}){const{site:e,localeIndex:r,page:s,theme:n}=P(),i=k(()=>{var l,f;return{label:(l=e.value.locales[r.value])==null?void 0:l.label,link:((f=e.value.locales[r.value])==null?void 0:f.link)||(r.value==="root"?"/":`/${r.value}/`)}});return{localeLinks:k(()=>Object.entries(e.value.locales).flatMap(([l,f])=>c&&i.value.label===f.label?[]:{text:f.label,link:As(f.link||(l==="root"?"/":`/${l}/`),n.value.i18nRouting!==!1&&a,s.value.relativePath.slice(i.value.link.length-1),!e.value.cleanUrls)+X3.value})),currentLang:i}}function As(c,a,e,r){return a?c.replace(/\/$/,"")+b3(e.replace(/(^|\/)index\.md$/,"$1").replace(/\.md$/,r?".html":"")):c}const _s=c=>(Y("data-v-7b8b6fce"),c=c(),K(),c),Ps={class:"NotFound"},Ts={class:"code"},Bs={class:"title"},Fs=_s(()=>h("div",{class:"divider"},null,-1)),Ds={class:"quote"},$s={class:"action"},Rs=["href","aria-label"],Es=x({__name:"NotFound",setup(c){const{site:a,theme:e}=P(),{localeLinks:r}=i1({removeCurrent:!1}),s=B("/");return L2(()=>{var i;const n=window.location.pathname.replace(a.value.base,"").replace(/(^.*?\/).*$/,"/$1");r.value.length&&(s.value=((i=r.value.find(({link:o})=>o.startsWith(n)))==null?void 0:i.link)||r.value[0].link)}),(n,i)=>{var o,l,f,m,H;return t(),z("div",Ps,[h("p",Ts,D(((o=v(e).notFound)==null?void 0:o.code)??"404"),1),h("h1",Bs,D(((l=v(e).notFound)==null?void 0:l.title)??"PAGE NOT FOUND"),1),Fs,h("blockquote",Ds,D(((f=v(e).notFound)==null?void 0:f.quote)??"But if you don't change your direction, and if you keep looking, you may end up where you are heading."),1),h("div",$s,[h("a",{class:"link",href:v(j3)(s.value),"aria-label":((m=v(e).notFound)==null?void 0:m.linkLabel)??"go to home"},D(((H=v(e).notFound)==null?void 0:H.linkText)??"Take me home"),9,Rs)])])}}}),Us=A(Es,[["__scopeId","data-v-7b8b6fce"]]);function h0(c,a){if(Array.isArray(c))return N1(c);if(c==null)return[];a=b3(a);const e=Object.keys(c).sort((s,n)=>n.split("/").length-s.split("/").length).find(s=>a.startsWith(b3(s))),r=e?c[e]:[];return Array.isArray(r)?N1(r):N1(r.items,r.base)}function Os(c){const a=[];let e=0;for(const r in c){const s=c[r];if(s.items){e=a.push(s);continue}a[e]||a.push({items:[]}),a[e].items.push(s)}return a}function Is(c){const a=[];function e(r){for(const s of r)s.text&&s.link&&a.push({text:s.text,link:s.link,docFooterText:s.docFooterText}),s.items&&e(s.items)}return e(c),a}function x3(c,a){return Array.isArray(a)?a.some(e=>x3(c,e)):S2(c,a.link)?!0:a.items?x3(c,a.items):!1}function N1(c,a){return[...c].map(e=>{const r={...e},s=r.base||a;return s&&r.link&&(r.link=s+r.link),r.items&&(r.items=N1(r.items,s)),r})}function H2(){const{frontmatter:c,page:a,theme:e}=P(),r=L3("(min-width: 960px)"),s=B(!1),n=k(()=>{const w=e.value.sidebar,_=a.value.relativePath;return w?h0(w,_):[]}),i=B(n.value);o2(n,(w,_)=>{JSON.stringify(w)!==JSON.stringify(_)&&(i.value=n.value)});const o=k(()=>c.value.sidebar!==!1&&i.value.length>0&&c.value.layout!=="home"),l=k(()=>f?c.value.aside==null?e.value.aside==="left":c.value.aside==="left":!1),f=k(()=>c.value.layout==="home"?!1:c.value.aside!=null?!!c.value.aside:e.value.aside!==!1),m=k(()=>o.value&&r.value),H=k(()=>o.value?Os(i.value):[]);function V(){s.value=!0}function d(){s.value=!1}function M(){s.value?d():V()}return{isOpen:s,sidebar:i,sidebarGroups:H,hasSidebar:o,hasAside:f,leftAside:l,isSidebarEnabled:m,open:V,close:d,toggle:M}}function js(c,a){let e;D1(()=>{e=c.value?document.activeElement:void 0}),L2(()=>{window.addEventListener("keyup",r)}),q3(()=>{window.removeEventListener("keyup",r)});function r(s){s.key==="Escape"&&c.value&&(a(),e==null||e.focus())}}function qs(c){const{page:a}=P(),e=B(!1),r=k(()=>c.value.collapsed!=null),s=k(()=>!!c.value.link),n=B(!1),i=()=>{n.value=S2(a.value.relativePath,c.value.link)};o2([a,c,X3],i),L2(i);const o=k(()=>n.value?!0:c.value.items?x3(a.value.relativePath,c.value.items):!1),l=k(()=>!!(c.value.items&&c.value.items.length));D1(()=>{e.value=!!(r.value&&c.value.collapsed)}),f0(()=>{(n.value||o.value)&&(e.value=!1)});function f(){r.value&&(e.value=!e.value)}return{collapsed:e,collapsible:r,isLink:s,isActiveLink:n,hasActiveLink:o,hasChildren:l,toggle:f}}function Ws(){const{hasSidebar:c}=H2(),a=L3("(min-width: 960px)"),e=L3("(min-width: 1280px)");return{isAsideEnabled:k(()=>!e.value&&!a.value?!1:c.value?e.value:a.value)}}const N3=[];function p0(c){return typeof c.outline=="object"&&!Array.isArray(c.outline)&&c.outline.label||c.outlineTitle||"On this page"}function Y3(c){const a=[...document.querySelectorAll(".VPDoc :where(h1,h2,h3,h4,h5,h6)")].filter(e=>e.id&&e.hasChildNodes()).map(e=>{const r=Number(e.tagName[1]);return{element:e,title:Gs(e),link:"#"+e.id,level:r}});return Xs(a,c)}function Gs(c){let a="";for(const e of c.childNodes)if(e.nodeType===1){if(e.classList.contains("VPBadge")||e.classList.contains("header-anchor")||e.classList.contains("ignore-header"))continue;a+=e.textContent}else e.nodeType===3&&(a+=e.textContent);return a.trim()}function Xs(c,a){if(a===!1)return[];const e=(typeof a=="object"&&!Array.isArray(a)?a.level:a)||2,[r,s]=typeof e=="number"?[e,e]:e==="deep"?[2,6]:e;c=c.filter(i=>i.level>=r&&i.level<=s),N3.length=0;for(const{element:i,link:o}of c)N3.push({element:i,link:o});const n=[];c:for(let i=0;i<c.length;i++){const o=c[i];if(i===0)n.push(o);else{for(let l=i-1;l>=0;l--){const f=c[l];if(f.level<o.level){(f.children||(f.children=[])).push(o);continue c}}n.push(o)}}return n}function Ys(c,a){const{isAsideEnabled:e}=Ws(),r=ws(n,100);let s=null;L2(()=>{requestAnimationFrame(n),window.addEventListener("scroll",r)}),fs(()=>{i(location.hash)}),q3(()=>{window.removeEventListener("scroll",r)});function n(){if(!e.value)return;const o=window.scrollY,l=window.innerHeight,f=document.body.offsetHeight,m=Math.abs(o+l-f)<1,H=N3.map(({element:d,link:M})=>({link:M,top:Ks(d)})).filter(({top:d})=>!Number.isNaN(d)).sort((d,M)=>d.top-M.top);if(!H.length){i(null);return}if(o<1){i(null);return}if(m){i(H[H.length-1].link);return}let V=null;for(const{link:d,top:M}of H){if(M>o+vs()+4)break;V=d}i(V)}function i(o){s&&s.classList.remove("active"),o==null?s=null:s=c.value.querySelector(`a[href="${decodeURIComponent(o)}"]`);const l=s;l?(l.classList.add("active"),a.value.style.top=l.offsetTop+39+"px",a.value.style.opacity="1"):(a.value.style.top="33px",a.value.style.opacity="0")}}function Ks(c){let a=0;for(;c!==document.body;){if(c===null)return NaN;a+=c.offsetTop,c=c.offsetParent}return a}const Qs=["href","title"],Zs=x({__name:"VPDocOutlineItem",props:{headers:{},root:{type:Boolean}},setup(c){function a({target:e}){const r=e.href.split("#")[1],s=document.getElementById(decodeURIComponent(r));s==null||s.focus({preventScroll:!0})}return(e,r)=>{const s=_2("VPDocOutlineItem",!0);return t(),z("ul",{class:F(["VPDocOutlineItem",e.root?"root":"nested"])},[(t(!0),z(q,null,Q(e.headers,({children:n,link:i,title:o})=>(t(),z("li",null,[h("a",{class:"outline-link",href:i,onClick:a,title:o},D(o),9,Qs),n!=null&&n.length?(t(),y(s,{key:0,headers:n},null,8,["headers"])):L("",!0)]))),256))],2)}}}),V0=A(Zs,[["__scopeId","data-v-3e0f837b"]]),Js=c=>(Y("data-v-9acb7ac5"),c=c(),K(),c),cn={class:"content"},an={class:"outline-title",role:"heading","aria-level":"2"},en={"aria-labelledby":"doc-outline-aria-label"},rn=Js(()=>h("span",{class:"visually-hidden",id:"doc-outline-aria-label"}," Table of Contents for current page ",-1)),sn=x({__name:"VPDocAsideOutline",setup(c){const{frontmatter:a,theme:e}=P(),r=v0([]);$1(()=>{r.value=Y3(a.value.outline??e.value.outline)});const s=B(),n=B();return Ys(s,n),(i,o)=>(t(),z("div",{class:F(["VPDocAsideOutline",{"has-outline":r.value.length>0}]),ref_key:"container",ref:s,role:"navigation"},[h("div",cn,[h("div",{class:"outline-marker",ref_key:"marker",ref:n},null,512),h("div",an,D(v(p0)(v(e))),1),h("nav",en,[rn,S(V0,{headers:r.value,root:!0},null,8,["headers"])])])],2))}}),nn=A(sn,[["__scopeId","data-v-9acb7ac5"]]),on={class:"VPDocAsideCarbonAds"},ln=x({__name:"VPDocAsideCarbonAds",props:{carbonAds:{}},setup(c){const a=()=>null;return(e,r)=>(t(),z("div",on,[S(v(a),{"carbon-ads":e.carbonAds},null,8,["carbon-ads"])]))}}),tn=c=>(Y("data-v-40acd6cc"),c=c(),K(),c),fn={class:"VPDocAside"},vn=tn(()=>h("div",{class:"spacer"},null,-1)),mn=x({__name:"VPDocAside",setup(c){const{theme:a}=P();return(e,r)=>(t(),z("div",fn,[u(e.$slots,"aside-top",{},void 0,!0),u(e.$slots,"aside-outline-before",{},void 0,!0),S(nn),u(e.$slots,"aside-outline-after",{},void 0,!0),vn,u(e.$slots,"aside-ads-before",{},void 0,!0),v(a).carbonAds?(t(),y(ln,{key:0,"carbon-ads":v(a).carbonAds},null,8,["carbon-ads"])):L("",!0),u(e.$slots,"aside-ads-after",{},void 0,!0),u(e.$slots,"aside-bottom",{},void 0,!0)]))}}),un=A(mn,[["__scopeId","data-v-40acd6cc"]]);function Hn(){const{theme:c,page:a}=P();return k(()=>{const{text:e="Edit this page",pattern:r=""}=c.value.editLink||{};let s;return typeof r=="function"?s=r(a.value):s=r.replace(/:path/g,a.value.filePath),{url:s,text:e}})}function zn(){const{page:c,theme:a,frontmatter:e}=P();return k(()=>{var l,f,m,H,V,d,M,w;const r=h0(a.value.sidebar,c.value.relativePath),s=Is(r),n=s.findIndex(_=>S2(c.value.relativePath,_.link)),i=((l=a.value.docFooter)==null?void 0:l.prev)===!1&&!e.value.prev||e.value.prev===!1,o=((f=a.value.docFooter)==null?void 0:f.next)===!1&&!e.value.next||e.value.next===!1;return{prev:i?void 0:{text:(typeof e.value.prev=="string"?e.value.prev:typeof e.value.prev=="object"?e.value.prev.text:void 0)??((m=s[n-1])==null?void 0:m.docFooterText)??((H=s[n-1])==null?void 0:H.text),link:(typeof e.value.prev=="object"?e.value.prev.link:void 0)??((V=s[n-1])==null?void 0:V.link)},next:o?void 0:{text:(typeof e.value.next=="string"?e.value.next:typeof e.value.next=="object"?e.value.next.text:void 0)??((d=s[n+1])==null?void 0:d.docFooterText)??((M=s[n+1])==null?void 0:M.text),link:(typeof e.value.next=="object"?e.value.next.link:void 0)??((w=s[n+1])==null?void 0:w.link)}}})}const n2=x({__name:"VPLink",props:{tag:{},href:{},noIcon:{type:Boolean},target:{},rel:{}},setup(c){const a=c,e=k(()=>a.tag??(a.href?"a":"span")),r=k(()=>a.href&&m0.test(a.href));return(s,n)=>(t(),y(k2(e.value),{class:F(["VPLink",{link:s.href,"vp-external-link-icon":r.value,"no-icon":s.noIcon}]),href:s.href?v(G3)(s.href):void 0,target:s.target??(r.value?"_blank":void 0),rel:s.rel??(r.value?"noreferrer":void 0)},{default:p(()=>[u(s.$slots,"default")]),_:3},8,["class","href","target","rel"]))}}),hn={class:"VPLastUpdated"},pn=["datetime"],Vn=x({__name:"VPDocFooterLastUpdated",setup(c){const{theme:a,page:e,frontmatter:r,lang:s}=P(),n=k(()=>new Date(r.value.lastUpdated??e.value.lastUpdated)),i=k(()=>n.value.toISOString()),o=B("");return L2(()=>{D1(()=>{var l,f,m;o.value=new Intl.DateTimeFormat((f=(l=a.value.lastUpdated)==null?void 0:l.formatOptions)!=null&&f.forceLocale?s.value:void 0,((m=a.value.lastUpdated)==null?void 0:m.formatOptions)??{dateStyle:"short",timeStyle:"short"}).format(n.value)})}),(l,f)=>{var m;return t(),z("p",hn,[e2(D(((m=v(a).lastUpdated)==null?void 0:m.text)||v(a).lastUpdatedText||"Last updated")+": ",1),h("time",{datetime:i.value},D(o.value),9,pn)])}}}),dn=A(Vn,[["__scopeId","data-v-984a4261"]]),Mn=c=>(Y("data-v-3e4e2c1e"),c=c(),K(),c),Cn={key:0,class:"VPDocFooter"},Ln={key:0,class:"edit-info"},gn={key:0,class:"edit-link"},bn=Mn(()=>h("span",{class:"vpi-square-pen edit-link-icon"},null,-1)),xn={key:1,class:"last-updated"},Nn={key:1,class:"prev-next"},kn={class:"pager"},Sn=["innerHTML"],yn=["innerHTML"],wn={class:"pager"},An=["innerHTML"],_n=["innerHTML"],Pn=x({__name:"VPDocFooter",setup(c){const{theme:a,page:e,frontmatter:r}=P(),s=Hn(),n=zn(),i=k(()=>a.value.editLink&&r.value.editLink!==!1),o=k(()=>e.value.lastUpdated&&r.value.lastUpdated!==!1),l=k(()=>i.value||o.value||n.value.prev||n.value.next);return(f,m)=>{var H,V,d,M;return l.value?(t(),z("footer",Cn,[u(f.$slots,"doc-footer-before",{},void 0,!0),i.value||o.value?(t(),z("div",Ln,[i.value?(t(),z("div",gn,[S(n2,{class:"edit-link-button",href:v(s).url,"no-icon":!0},{default:p(()=>[bn,e2(" "+D(v(s).text),1)]),_:1},8,["href"])])):L("",!0),o.value?(t(),z("div",xn,[S(dn)])):L("",!0)])):L("",!0),(H=v(n).prev)!=null&&H.link||(V=v(n).next)!=null&&V.link?(t(),z("nav",Nn,[h("div",kn,[(d=v(n).prev)!=null&&d.link?(t(),y(n2,{key:0,class:"pager-link prev",href:v(n).prev.link},{default:p(()=>{var w;return[h("span",{class:"desc",innerHTML:((w=v(a).docFooter)==null?void 0:w.prev)||"Previous page"},null,8,Sn),h("span",{class:"title",innerHTML:v(n).prev.text},null,8,yn)]}),_:1},8,["href"])):L("",!0)]),h("div",wn,[(M=v(n).next)!=null&&M.link?(t(),y(n2,{key:0,class:"pager-link next",href:v(n).next.link},{default:p(()=>{var w;return[h("span",{class:"desc",innerHTML:((w=v(a).docFooter)==null?void 0:w.next)||"Next page"},null,8,An),h("span",{class:"title",innerHTML:v(n).next.text},null,8,_n)]}),_:1},8,["href"])):L("",!0)])])):L("",!0)])):L("",!0)}}}),Tn=A(Pn,[["__scopeId","data-v-3e4e2c1e"]]),Bn=c=>(Y("data-v-3624018e"),c=c(),K(),c),Fn={class:"container"},Dn=Bn(()=>h("div",{class:"aside-curtain"},null,-1)),$n={class:"aside-container"},Rn={class:"aside-content"},En={class:"content"},Un={class:"content-container"},On={class:"main"},In=x({__name:"VPDoc",setup(c){const{theme:a}=P(),e=R1(),{hasSidebar:r,hasAside:s,leftAside:n}=H2(),i=k(()=>e.path.replace(/[./]+/g,"_").replace(/_html$/,""));return(o,l)=>{const f=_2("Content");return t(),z("div",{class:F(["VPDoc",{"has-sidebar":v(r),"has-aside":v(s)}])},[u(o.$slots,"doc-top",{},void 0,!0),h("div",Fn,[v(s)?(t(),z("div",{key:0,class:F(["aside",{"left-aside":v(n)}])},[Dn,h("div",$n,[h("div",Rn,[S(un,null,{"aside-top":p(()=>[u(o.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":p(()=>[u(o.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":p(()=>[u(o.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":p(()=>[u(o.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":p(()=>[u(o.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":p(()=>[u(o.$slots,"aside-ads-after",{},void 0,!0)]),_:3})])])],2)):L("",!0),h("div",En,[h("div",Un,[u(o.$slots,"doc-before",{},void 0,!0),h("main",On,[S(f,{class:F(["vp-doc",[i.value,v(a).externalLinkIcon&&"external-link-icon-enabled"]])},null,8,["class"])]),S(Tn,null,{"doc-footer-before":p(()=>[u(o.$slots,"doc-footer-before",{},void 0,!0)]),_:3}),u(o.$slots,"doc-after",{},void 0,!0)])])]),u(o.$slots,"doc-bottom",{},void 0,!0)],2)}}}),jn=A(In,[["__scopeId","data-v-3624018e"]]),qn=x({__name:"VPButton",props:{tag:{},size:{default:"medium"},theme:{default:"brand"},text:{},href:{},target:{},rel:{}},setup(c){const a=c,e=k(()=>a.href&&m0.test(a.href)),r=k(()=>a.tag||a.href?"a":"button");return(s,n)=>(t(),y(k2(r.value),{class:F(["VPButton",[s.size,s.theme]]),href:s.href?v(G3)(s.href):void 0,target:a.target??(e.value?"_blank":void 0),rel:a.rel??(e.value?"noreferrer":void 0)},{default:p(()=>[e2(D(s.text),1)]),_:1},8,["class","href","target","rel"]))}}),Wn=A(qn,[["__scopeId","data-v-e0b8bcb6"]]),Gn=["src","alt"],Xn=x({inheritAttrs:!1,__name:"VPImage",props:{image:{},alt:{}},setup(c){return(a,e)=>{const r=_2("VPImage",!0);return a.image?(t(),z(q,{key:0},[typeof a.image=="string"||"src"in a.image?(t(),z("img",G2({key:0,class:"VPImage"},typeof a.image=="string"?a.$attrs:{...a.image,...a.$attrs},{src:v(j3)(typeof a.image=="string"?a.image:a.image.src),alt:a.alt??(typeof a.image=="string"?"":a.image.alt||"")}),null,16,Gn)):(t(),z(q,{key:1},[S(r,G2({class:"dark",image:a.image.dark,alt:a.image.alt},a.$attrs),null,16,["image","alt"]),S(r,G2({class:"light",image:a.image.light,alt:a.image.alt},a.$attrs),null,16,["image","alt"])],64))],64)):L("",!0)}}}),w1=A(Xn,[["__scopeId","data-v-aa3d1b5b"]]),Yn=c=>(Y("data-v-2f0f60e8"),c=c(),K(),c),Kn={class:"container"},Qn={class:"main"},Zn={key:0,class:"name"},Jn=["innerHTML"],ci=["innerHTML"],ai=["innerHTML"],ei={key:0,class:"actions"},ri={key:0,class:"image"},si={class:"image-container"},ni=Yn(()=>h("div",{class:"image-bg"},null,-1)),ii=x({__name:"VPHero",props:{name:{},text:{},tagline:{},image:{},actions:{}},setup(c){const a=n1("hero-image-slot-exists");return(e,r)=>(t(),z("div",{class:F(["VPHero",{"has-image":e.image||v(a)}])},[h("div",Kn,[h("div",Qn,[u(e.$slots,"home-hero-info-before",{},void 0,!0),u(e.$slots,"home-hero-info",{},()=>[e.name?(t(),z("h1",Zn,[h("span",{innerHTML:e.name,class:"clip"},null,8,Jn)])):L("",!0),e.text?(t(),z("p",{key:1,innerHTML:e.text,class:"text"},null,8,ci)):L("",!0),e.tagline?(t(),z("p",{key:2,innerHTML:e.tagline,class:"tagline"},null,8,ai)):L("",!0)],!0),u(e.$slots,"home-hero-info-after",{},void 0,!0),e.actions?(t(),z("div",ei,[(t(!0),z(q,null,Q(e.actions,s=>(t(),z("div",{key:s.link,class:"action"},[S(Wn,{tag:"a",size:"medium",theme:s.theme,text:s.text,href:s.link,target:s.target,rel:s.rel},null,8,["theme","text","href","target","rel"])]))),128))])):L("",!0),u(e.$slots,"home-hero-actions-after",{},void 0,!0)]),e.image||v(a)?(t(),z("div",ri,[h("div",si,[ni,u(e.$slots,"home-hero-image",{},()=>[e.image?(t(),y(w1,{key:0,class:"image-src",image:e.image},null,8,["image"])):L("",!0)],!0)])])):L("",!0)])],2))}}),oi=A(ii,[["__scopeId","data-v-2f0f60e8"]]),li=x({__name:"VPHomeHero",setup(c){const{frontmatter:a}=P();return(e,r)=>v(a).hero?(t(),y(oi,{key:0,class:"VPHomeHero",name:v(a).hero.name,text:v(a).hero.text,tagline:v(a).hero.tagline,image:v(a).hero.image,actions:v(a).hero.actions},{"home-hero-info-before":p(()=>[u(e.$slots,"home-hero-info-before")]),"home-hero-info":p(()=>[u(e.$slots,"home-hero-info")]),"home-hero-info-after":p(()=>[u(e.$slots,"home-hero-info-after")]),"home-hero-actions-after":p(()=>[u(e.$slots,"home-hero-actions-after")]),"home-hero-image":p(()=>[u(e.$slots,"home-hero-image")]),_:3},8,["name","text","tagline","image","actions"])):L("",!0)}}),ti=c=>(Y("data-v-8a114d18"),c=c(),K(),c),fi={class:"box"},vi={key:0,class:"icon"},mi=["innerHTML"],ui=["innerHTML"],Hi=["innerHTML"],zi={key:4,class:"link-text"},hi={class:"link-text-value"},pi=ti(()=>h("span",{class:"vpi-arrow-right link-text-icon"},null,-1)),Vi=x({__name:"VPFeature",props:{icon:{},title:{},details:{},link:{},linkText:{},rel:{},target:{}},setup(c){return(a,e)=>(t(),y(n2,{class:"VPFeature",href:a.link,rel:a.rel,target:a.target,"no-icon":!0,tag:a.link?"a":"div"},{default:p(()=>[h("article",fi,[typeof a.icon=="object"&&a.icon.wrap?(t(),z("div",vi,[S(w1,{image:a.icon,alt:a.icon.alt,height:a.icon.height||48,width:a.icon.width||48},null,8,["image","alt","height","width"])])):typeof a.icon=="object"?(t(),y(w1,{key:1,image:a.icon,alt:a.icon.alt,height:a.icon.height||48,width:a.icon.width||48},null,8,["image","alt","height","width"])):a.icon?(t(),z("div",{key:2,class:"icon",innerHTML:a.icon},null,8,mi)):L("",!0),h("h2",{class:"title",innerHTML:a.title},null,8,ui),a.details?(t(),z("p",{key:3,class:"details",innerHTML:a.details},null,8,Hi)):L("",!0),a.linkText?(t(),z("div",zi,[h("p",hi,[e2(D(a.linkText)+" ",1),pi])])):L("",!0)])]),_:1},8,["href","rel","target","tag"]))}}),di=A(Vi,[["__scopeId","data-v-8a114d18"]]),Mi={key:0,class:"VPFeatures"},Ci={class:"container"},Li={class:"items"},gi=x({__name:"VPFeatures",props:{features:{}},setup(c){const a=c,e=k(()=>{const r=a.features.length;if(r){if(r===2)return"grid-2";if(r===3)return"grid-3";if(r%3===0)return"grid-6";if(r>3)return"grid-4"}else return});return(r,s)=>r.features?(t(),z("div",Mi,[h("div",Ci,[h("div",Li,[(t(!0),z(q,null,Q(r.features,n=>(t(),z("div",{key:n.title,class:F(["item",[e.value]])},[S(di,{icon:n.icon,title:n.title,details:n.details,link:n.link,"link-text":n.linkText,rel:n.rel,target:n.target},null,8,["icon","title","details","link","link-text","rel","target"])],2))),128))])])])):L("",!0)}}),bi=A(gi,[["__scopeId","data-v-67df9223"]]),xi=x({__name:"VPHomeFeatures",setup(c){const{frontmatter:a}=P();return(e,r)=>v(a).features?(t(),y(bi,{key:0,class:"VPHomeFeatures",features:v(a).features},null,8,["features"])):L("",!0)}}),Ni=x({__name:"VPHomeContent",setup(c){const{width:a}=ms({includeScrollbar:!1});return(e,r)=>(t(),z("div",{class:"vp-doc container",style:Q2(v(a)?{"--vp-offset":`calc(50% - ${v(a)/2}px)`}:{})},[u(e.$slots,"default",{},void 0,!0)],4))}}),ki=A(Ni,[["__scopeId","data-v-62e8b085"]]),Si={class:"VPHome"},yi=x({__name:"VPHome",setup(c){const{frontmatter:a}=P();return(e,r)=>{const s=_2("Content");return t(),z("div",Si,[u(e.$slots,"home-hero-before",{},void 0,!0),S(li,null,{"home-hero-info-before":p(()=>[u(e.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":p(()=>[u(e.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":p(()=>[u(e.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":p(()=>[u(e.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":p(()=>[u(e.$slots,"home-hero-image",{},void 0,!0)]),_:3}),u(e.$slots,"home-hero-after",{},void 0,!0),u(e.$slots,"home-features-before",{},void 0,!0),S(xi),u(e.$slots,"home-features-after",{},void 0,!0),v(a).markdownStyles!==!1?(t(),y(ki,{key:0},{default:p(()=>[S(s)]),_:1})):(t(),y(s,{key:1}))])}}}),wi=A(yi,[["__scopeId","data-v-a4995ed0"]]),Ai={},_i={class:"VPPage"};function Pi(c,a){const e=_2("Content");return t(),z("div",_i,[u(c.$slots,"page-top"),S(e),u(c.$slots,"page-bottom")])}const Ti=A(Ai,[["render",Pi]]),Bi=x({__name:"VPContent",setup(c){const{page:a,frontmatter:e}=P(),{hasSidebar:r}=H2();return(s,n)=>(t(),z("div",{class:F(["VPContent",{"has-sidebar":v(r),"is-home":v(e).layout==="home"}]),id:"VPContent"},[v(a).isNotFound?u(s.$slots,"not-found",{key:0},()=>[S(Us)],!0):v(e).layout==="page"?(t(),y(Ti,{key:1},{"page-top":p(()=>[u(s.$slots,"page-top",{},void 0,!0)]),"page-bottom":p(()=>[u(s.$slots,"page-bottom",{},void 0,!0)]),_:3})):v(e).layout==="home"?(t(),y(wi,{key:2},{"home-hero-before":p(()=>[u(s.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":p(()=>[u(s.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":p(()=>[u(s.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":p(()=>[u(s.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":p(()=>[u(s.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":p(()=>[u(s.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":p(()=>[u(s.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":p(()=>[u(s.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":p(()=>[u(s.$slots,"home-features-after",{},void 0,!0)]),_:3})):v(e).layout&&v(e).layout!=="doc"?(t(),y(k2(v(e).layout),{key:3})):(t(),y(jn,{key:4},{"doc-top":p(()=>[u(s.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":p(()=>[u(s.$slots,"doc-bottom",{},void 0,!0)]),"doc-footer-before":p(()=>[u(s.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":p(()=>[u(s.$slots,"doc-before",{},void 0,!0)]),"doc-after":p(()=>[u(s.$slots,"doc-after",{},void 0,!0)]),"aside-top":p(()=>[u(s.$slots,"aside-top",{},void 0,!0)]),"aside-outline-before":p(()=>[u(s.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":p(()=>[u(s.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":p(()=>[u(s.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":p(()=>[u(s.$slots,"aside-ads-after",{},void 0,!0)]),"aside-bottom":p(()=>[u(s.$slots,"aside-bottom",{},void 0,!0)]),_:3}))],2))}}),Fi=A(Bi,[["__scopeId","data-v-c1017b63"]]),Di={class:"container"},$i=["innerHTML"],Ri=["innerHTML"],Ei=x({__name:"VPFooter",setup(c){const{theme:a,frontmatter:e}=P(),{hasSidebar:r}=H2();return(s,n)=>v(a).footer&&v(e).footer!==!1?(t(),z("footer",{key:0,class:F(["VPFooter",{"has-sidebar":v(r)}])},[h("div",Di,[v(a).footer.message?(t(),z("p",{key:0,class:"message",innerHTML:v(a).footer.message},null,8,$i)):L("",!0),v(a).footer.copyright?(t(),z("p",{key:1,class:"copyright",innerHTML:v(a).footer.copyright},null,8,Ri)):L("",!0)])],2)):L("",!0)}}),Ui=A(Ei,[["__scopeId","data-v-fa835bf8"]]);function d0(){const{theme:c,frontmatter:a}=P(),e=v0([]),r=k(()=>e.value.length>0);return $1(()=>{e.value=Y3(a.value.outline??c.value.outline)}),{headers:e,hasLocalNav:r}}const Oi=c=>(Y("data-v-415fc66b"),c=c(),K(),c),Ii=Oi(()=>h("span",{class:"vpi-chevron-right icon"},null,-1)),ji={class:"header"},qi={class:"outline"},Wi=x({__name:"VPLocalNavOutlineDropdown",props:{headers:{},navHeight:{}},setup(c){const a=c,{theme:e}=P(),r=B(!1),s=B(0),n=B(),i=B();us(n,()=>{r.value=!1}),g3("Escape",()=>{r.value=!1}),$1(()=>{r.value=!1});function o(){r.value=!r.value,s.value=window.innerHeight+Math.min(window.scrollY-a.navHeight,0)}function l(m){m.target.classList.contains("outline-link")&&(i.value&&(i.value.style.transition="none"),Hs(()=>{r.value=!1}))}function f(){r.value=!1,window.scrollTo({top:0,left:0,behavior:"smooth"})}return(m,H)=>(t(),z("div",{class:"VPLocalNavOutlineDropdown",style:Q2({"--vp-vh":s.value+"px"}),ref_key:"main",ref:n},[m.headers.length>0?(t(),z("button",{key:0,onClick:o,class:F({open:r.value})},[e2(D(v(p0)(v(e)))+" ",1),Ii],2)):(t(),z("button",{key:1,onClick:f},D(v(e).returnToTopLabel||"Return to top"),1)),S(F1,{name:"flyout"},{default:p(()=>[r.value?(t(),z("div",{key:0,ref_key:"items",ref:i,class:"items",onClick:l},[h("div",ji,[h("a",{class:"top-link",href:"#",onClick:f},D(v(e).returnToTopLabel||"Return to top"),1)]),h("div",qi,[S(V0,{headers:m.headers},null,8,["headers"])])],512)):L("",!0)]),_:1})],4))}}),Gi=A(Wi,[["__scopeId","data-v-415fc66b"]]),Xi=c=>(Y("data-v-51a3d126"),c=c(),K(),c),Yi={class:"container"},Ki=["aria-expanded"],Qi=Xi(()=>h("span",{class:"vpi-align-left menu-icon"},null,-1)),Zi={class:"menu-text"},Ji=x({__name:"VPLocalNav",props:{open:{type:Boolean}},emits:["open-menu"],setup(c){const{theme:a,frontmatter:e}=P(),{hasSidebar:r}=H2(),{headers:s}=d0(),{y:n}=u0(),i=B(0);L2(()=>{i.value=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--vp-nav-height"))}),$1(()=>{s.value=Y3(e.value.outline??a.value.outline)});const o=k(()=>s.value.length===0),l=k(()=>o.value&&!r.value),f=k(()=>({VPLocalNav:!0,"has-sidebar":r.value,empty:o.value,fixed:l.value}));return(m,H)=>v(e).layout!=="home"&&(!l.value||v(n)>=i.value)?(t(),z("div",{key:0,class:F(f.value)},[h("div",Yi,[v(r)?(t(),z("button",{key:0,class:"menu","aria-expanded":m.open,"aria-controls":"VPSidebarNav",onClick:H[0]||(H[0]=V=>m.$emit("open-menu"))},[Qi,h("span",Zi,D(v(a).sidebarMenuLabel||"Menu"),1)],8,Ki)):L("",!0),S(Gi,{headers:v(s),navHeight:i.value},null,8,["headers","navHeight"])])],2)):L("",!0)}}),co=A(Ji,[["__scopeId","data-v-51a3d126"]]);function ao(){const c=B(!1);function a(){c.value=!0,window.addEventListener("resize",s)}function e(){c.value=!1,window.removeEventListener("resize",s)}function r(){c.value?e():a()}function s(){window.outerWidth>=768&&e()}const n=R1();return o2(()=>n.path,e),{isScreenOpen:c,openScreen:a,closeScreen:e,toggleScreen:r}}const eo={},ro={class:"VPSwitch",type:"button",role:"switch"},so={class:"check"},no={key:0,class:"icon"};function io(c,a){return t(),z("button",ro,[h("span",so,[c.$slots.default?(t(),z("span",no,[u(c.$slots,"default",{},void 0,!0)])):L("",!0)])])}const oo=A(eo,[["render",io],["__scopeId","data-v-982caf43"]]),M0=c=>(Y("data-v-17ddf920"),c=c(),K(),c),lo=M0(()=>h("span",{class:"vpi-sun sun"},null,-1)),to=M0(()=>h("span",{class:"vpi-moon moon"},null,-1)),fo=x({__name:"VPSwitchAppearance",setup(c){const{isDark:a,theme:e}=P(),r=n1("toggle-appearance",()=>{a.value=!a.value}),s=k(()=>a.value?e.value.lightModeSwitchTitle||"Switch to light theme":e.value.darkModeSwitchTitle||"Switch to dark theme");return(n,i)=>(t(),y(oo,{title:s.value,class:"VPSwitchAppearance","aria-checked":v(a),onClick:v(r)},{default:p(()=>[lo,to]),_:1},8,["title","aria-checked","onClick"]))}}),K3=A(fo,[["__scopeId","data-v-17ddf920"]]),vo={key:0,class:"VPNavBarAppearance"},mo=x({__name:"VPNavBarAppearance",setup(c){const{site:a}=P();return(e,r)=>v(a).appearance&&v(a).appearance!=="force-dark"?(t(),z("div",vo,[S(K3)])):L("",!0)}}),uo=A(mo,[["__scopeId","data-v-368b1f1d"]]),Q3=B();let C0=!1,m3=0;function Ho(c){const a=B(!1);if(O2){!C0&&zo(),m3++;const e=o2(Q3,r=>{var s,n,i;r===c.el.value||(s=c.el.value)!=null&&s.contains(r)?(a.value=!0,(n=c.onFocus)==null||n.call(c)):(a.value=!1,(i=c.onBlur)==null||i.call(c))});q3(()=>{e(),m3--,m3||ho()})}return zs(a)}function zo(){document.addEventListener("focusin",L0),C0=!0,Q3.value=document.activeElement}function ho(){document.removeEventListener("focusin",L0)}function L0(){Q3.value=document.activeElement}const po={class:"VPMenuLink"},Vo=x({__name:"VPMenuLink",props:{item:{}},setup(c){const{page:a}=P();return(e,r)=>(t(),z("div",po,[S(n2,{class:F({active:v(S2)(v(a).relativePath,e.item.activeMatch||e.item.link,!!e.item.activeMatch)}),href:e.item.link,target:e.item.target,rel:e.item.rel},{default:p(()=>[e2(D(e.item.text),1)]),_:1},8,["class","href","target","rel"])]))}}),E1=A(Vo,[["__scopeId","data-v-5f751537"]]),Mo={class:"VPMenuGroup"},Co={key:0,class:"title"},Lo=x({__name:"VPMenuGroup",props:{text:{},items:{}},setup(c){return(a,e)=>(t(),z("div",Mo,[a.text?(t(),z("p",Co,D(a.text),1)):L("",!0),(t(!0),z(q,null,Q(a.items,r=>(t(),z(q,null,["link"in r?(t(),y(E1,{key:0,item:r},null,8,["item"])):L("",!0)],64))),256))]))}}),go=A(Lo,[["__scopeId","data-v-23bc1769"]]),bo={class:"VPMenu"},xo={key:0,class:"items"},No=x({__name:"VPMenu",props:{items:{}},setup(c){return(a,e)=>(t(),z("div",bo,[a.items?(t(),z("div",xo,[(t(!0),z(q,null,Q(a.items,r=>(t(),z(q,{key:r.text},["link"in r?(t(),y(E1,{key:0,item:r},null,8,["item"])):(t(),y(go,{key:1,text:r.text,items:r.items},null,8,["text","items"]))],64))),128))])):L("",!0),u(a.$slots,"default",{},void 0,!0)]))}}),ko=A(No,[["__scopeId","data-v-f6c1543d"]]),So=c=>(Y("data-v-ad3f6c38"),c=c(),K(),c),yo=["aria-expanded","aria-label"],wo={key:0,class:"text"},Ao=["innerHTML"],_o=So(()=>h("span",{class:"vpi-chevron-down text-icon"},null,-1)),Po={key:1,class:"vpi-more-horizontal icon"},To={class:"menu"},Bo=x({__name:"VPFlyout",props:{icon:{},button:{},label:{},items:{}},setup(c){const a=B(!1),e=B();Ho({el:e,onBlur:r});function r(){a.value=!1}return(s,n)=>(t(),z("div",{class:"VPFlyout",ref_key:"el",ref:e,onMouseenter:n[1]||(n[1]=i=>a.value=!0),onMouseleave:n[2]||(n[2]=i=>a.value=!1)},[h("button",{type:"button",class:"button","aria-haspopup":"true","aria-expanded":a.value,"aria-label":s.label,onClick:n[0]||(n[0]=i=>a.value=!a.value)},[s.button||s.icon?(t(),z("span",wo,[s.icon?(t(),z("span",{key:0,class:F([s.icon,"option-icon"])},null,2)):L("",!0),s.button?(t(),z("span",{key:1,innerHTML:s.button},null,8,Ao)):L("",!0),_o])):(t(),z("span",Po))],8,yo),h("div",To,[S(ko,{items:s.items},{default:p(()=>[u(s.$slots,"default",{},void 0,!0)]),_:3},8,["items"])])],544))}}),Z3=A(Bo,[["__scopeId","data-v-ad3f6c38"]]),Fo=["href","aria-label","innerHTML"],Do=x({__name:"VPSocialLink",props:{icon:{},link:{},ariaLabel:{}},setup(c){const a=c,e=k(()=>typeof a.icon=="object"?a.icon.svg:`<span class="vpi-social-${a.icon}" />`);return(r,s)=>(t(),z("a",{class:"VPSocialLink no-icon",href:r.link,"aria-label":r.ariaLabel??(typeof r.icon=="string"?r.icon:""),target:"_blank",rel:"noopener",innerHTML:e.value},null,8,Fo))}}),$o=A(Do,[["__scopeId","data-v-c6a41ab3"]]),Ro={class:"VPSocialLinks"},Eo=x({__name:"VPSocialLinks",props:{links:{}},setup(c){return(a,e)=>(t(),z("div",Ro,[(t(!0),z(q,null,Q(a.links,({link:r,icon:s,ariaLabel:n})=>(t(),y($o,{key:r,icon:s,link:r,ariaLabel:n},null,8,["icon","link","ariaLabel"]))),128))]))}}),J3=A(Eo,[["__scopeId","data-v-b524acdb"]]),Uo={key:0,class:"group translations"},Oo={class:"trans-title"},Io={key:1,class:"group"},jo={class:"item appearance"},qo={class:"label"},Wo={class:"appearance-action"},Go={key:2,class:"group"},Xo={class:"item social-links"},Yo=x({__name:"VPNavBarExtra",setup(c){const{site:a,theme:e}=P(),{localeLinks:r,currentLang:s}=i1({correspondingLink:!0}),n=k(()=>r.value.length&&s.value.label||a.value.appearance||e.value.socialLinks);return(i,o)=>n.value?(t(),y(Z3,{key:0,class:"VPNavBarExtra",label:"extra navigation"},{default:p(()=>[v(r).length&&v(s).label?(t(),z("div",Uo,[h("p",Oo,D(v(s).label),1),(t(!0),z(q,null,Q(v(r),l=>(t(),y(E1,{key:l.link,item:l},null,8,["item"]))),128))])):L("",!0),v(a).appearance&&v(a).appearance!=="force-dark"?(t(),z("div",Io,[h("div",jo,[h("p",qo,D(v(e).darkModeSwitchLabel||"Appearance"),1),h("div",Wo,[S(K3)])])])):L("",!0),v(e).socialLinks?(t(),z("div",Go,[h("div",Xo,[S(J3,{class:"social-links-list",links:v(e).socialLinks},null,8,["links"])])])):L("",!0)]),_:1})):L("",!0)}}),Ko=A(Yo,[["__scopeId","data-v-5e85c0a5"]]),Qo=c=>(Y("data-v-83fd6a31"),c=c(),K(),c),Zo=["aria-expanded"],Jo=Qo(()=>h("span",{class:"container"},[h("span",{class:"top"}),h("span",{class:"middle"}),h("span",{class:"bottom"})],-1)),cl=[Jo],al=x({__name:"VPNavBarHamburger",props:{active:{type:Boolean}},emits:["click"],setup(c){return(a,e)=>(t(),z("button",{type:"button",class:F(["VPNavBarHamburger",{active:a.active}]),"aria-label":"mobile navigation","aria-expanded":a.active,"aria-controls":"VPNavScreen",onClick:e[0]||(e[0]=r=>a.$emit("click"))},cl,10,Zo))}}),el=A(al,[["__scopeId","data-v-83fd6a31"]]),rl=["innerHTML"],sl=x({__name:"VPNavBarMenuLink",props:{item:{}},setup(c){const{page:a}=P();return(e,r)=>(t(),y(n2,{class:F({VPNavBarMenuLink:!0,active:v(S2)(v(a).relativePath,e.item.activeMatch||e.item.link,!!e.item.activeMatch)}),href:e.item.link,target:e.item.target,rel:e.item.rel,tabindex:"0"},{default:p(()=>[h("span",{innerHTML:e.item.text},null,8,rl)]),_:1},8,["class","href","target","rel"]))}}),nl=A(sl,[["__scopeId","data-v-6f253f13"]]),il=x({__name:"VPNavBarMenuGroup",props:{item:{}},setup(c){const a=c,{page:e}=P(),r=n=>"link"in n?S2(e.value.relativePath,n.link,!!a.item.activeMatch):n.items.some(r),s=k(()=>r(a.item));return(n,i)=>(t(),y(Z3,{class:F({VPNavBarMenuGroup:!0,active:v(S2)(v(e).relativePath,n.item.activeMatch,!!n.item.activeMatch)||s.value}),button:n.item.text,items:n.item.items},null,8,["class","button","items"]))}}),ol=c=>(Y("data-v-25c07daf"),c=c(),K(),c),ll={key:0,"aria-labelledby":"main-nav-aria-label",class:"VPNavBarMenu"},tl=ol(()=>h("span",{id:"main-nav-aria-label",class:"visually-hidden"},"Main Navigation",-1)),fl=x({__name:"VPNavBarMenu",setup(c){const{theme:a}=P();return(e,r)=>v(a).nav?(t(),z("nav",ll,[tl,(t(!0),z(q,null,Q(v(a).nav,s=>(t(),z(q,{key:s.text},["link"in s?(t(),y(nl,{key:0,item:s},null,8,["item"])):(t(),y(il,{key:1,item:s},null,8,["item"]))],64))),128))])):L("",!0)}}),vl=A(fl,[["__scopeId","data-v-25c07daf"]]);function ml(c){const{localeIndex:a,theme:e}=P();function r(s){var M,w,_;const n=s.split("."),i=(M=e.value.search)==null?void 0:M.options,o=i&&typeof i=="object",l=o&&((_=(w=i.locales)==null?void 0:w[a.value])==null?void 0:_.translations)||null,f=o&&i.translations||null;let m=l,H=f,V=c;const d=n.pop();for(const g of n){let b=null;const T=V==null?void 0:V[g];T&&(b=V=T);const E=H==null?void 0:H[g];E&&(b=H=E);const R=m==null?void 0:m[g];R&&(b=m=R),T||(V=b),E||(H=b),R||(m=b)}return(m==null?void 0:m[d])??(H==null?void 0:H[d])??(V==null?void 0:V[d])??""}return r}const ul=["aria-label"],Hl={class:"DocSearch-Button-Container"},zl=h("span",{class:"vp-icon DocSearch-Search-Icon"},null,-1),hl={class:"DocSearch-Button-Placeholder"},pl=h("span",{class:"DocSearch-Button-Keys"},[h("kbd",{class:"DocSearch-Button-Key"}),h("kbd",{class:"DocSearch-Button-Key"},"K")],-1),m6=x({__name:"VPNavBarSearchButton",setup(c){const e=ml({button:{buttonText:"Search",buttonAriaLabel:"Search"}});return(r,s)=>(t(),z("button",{type:"button",class:"DocSearch DocSearch-Button","aria-label":v(e)("button.buttonAriaLabel")},[h("span",Hl,[zl,h("span",hl,D(v(e)("button.buttonText")),1)]),pl],8,ul))}}),Vl={class:"VPNavBarSearch"},dl={id:"local-search"},Ml={key:1,id:"docsearch"},Cl=x({__name:"VPNavBarSearch",setup(c){const a=hs(()=>ps(()=>import("./VPLocalSearchBox.BMPndifm.js"),__vite__mapDeps([0,1]))),e=()=>null,{theme:r}=P(),s=B(!1),n=B(!1);L2(()=>{});function i(){s.value||(s.value=!0,setTimeout(o,16))}function o(){const H=new Event("keydown");H.key="k",H.metaKey=!0,window.dispatchEvent(H),setTimeout(()=>{document.querySelector(".DocSearch-Modal")||o()},16)}function l(H){const V=H.target,d=V.tagName;return V.isContentEditable||d==="INPUT"||d==="SELECT"||d==="TEXTAREA"}const f=B(!1);g3("k",H=>{(H.ctrlKey||H.metaKey)&&(H.preventDefault(),f.value=!0)}),g3("/",H=>{l(H)||(H.preventDefault(),f.value=!0)});const m="local";return(H,V)=>{var d;return t(),z("div",Vl,[v(m)==="local"?(t(),z(q,{key:0},[f.value?(t(),y(v(a),{key:0,onClose:V[0]||(V[0]=M=>f.value=!1)})):L("",!0),h("div",dl,[S(m6,{onClick:V[1]||(V[1]=M=>f.value=!0)})])],64)):v(m)==="algolia"?(t(),z(q,{key:1},[s.value?(t(),y(v(e),{key:0,algolia:((d=v(r).search)==null?void 0:d.options)??v(r).algolia,onVnodeBeforeMount:V[2]||(V[2]=M=>n.value=!0)},null,8,["algolia"])):L("",!0),n.value?L("",!0):(t(),z("div",Ml,[S(m6,{onClick:i})]))],64)):L("",!0)])}}}),Ll=x({__name:"VPNavBarSocialLinks",setup(c){const{theme:a}=P();return(e,r)=>v(a).socialLinks?(t(),y(J3,{key:0,class:"VPNavBarSocialLinks",links:v(a).socialLinks},null,8,["links"])):L("",!0)}}),gl=A(Ll,[["__scopeId","data-v-3a96b8e1"]]),bl=["href","rel","target"],xl={key:1},Nl={key:2},kl=x({__name:"VPNavBarTitle",setup(c){const{site:a,theme:e}=P(),{hasSidebar:r}=H2(),{currentLang:s}=i1(),n=k(()=>{var l;return typeof e.value.logoLink=="string"?e.value.logoLink:(l=e.value.logoLink)==null?void 0:l.link}),i=k(()=>{var l;return typeof e.value.logoLink=="string"||(l=e.value.logoLink)==null?void 0:l.rel}),o=k(()=>{var l;return typeof e.value.logoLink=="string"||(l=e.value.logoLink)==null?void 0:l.target});return(l,f)=>(t(),z("div",{class:F(["VPNavBarTitle",{"has-sidebar":v(r)}])},[h("a",{class:"title",href:n.value??v(G3)(v(s).link),rel:i.value,target:o.value},[u(l.$slots,"nav-bar-title-before",{},void 0,!0),v(e).logo?(t(),y(w1,{key:0,class:"logo",image:v(e).logo},null,8,["image"])):L("",!0),v(e).siteTitle?(t(),z("span",xl,D(v(e).siteTitle),1)):v(e).siteTitle===void 0?(t(),z("span",Nl,D(v(a).title),1)):L("",!0),u(l.$slots,"nav-bar-title-after",{},void 0,!0)],8,bl)],2))}}),Sl=A(kl,[["__scopeId","data-v-c766a0ac"]]),yl={class:"items"},wl={class:"title"},Al=x({__name:"VPNavBarTranslations",setup(c){const{theme:a}=P(),{localeLinks:e,currentLang:r}=i1({correspondingLink:!0});return(s,n)=>v(e).length&&v(r).label?(t(),y(Z3,{key:0,class:"VPNavBarTranslations",icon:"vpi-languages",label:v(a).langMenuLabel||"Change language"},{default:p(()=>[h("div",yl,[h("p",wl,D(v(r).label),1),(t(!0),z(q,null,Q(v(e),i=>(t(),y(E1,{key:i.link,item:i},null,8,["item"]))),128))])]),_:1},8,["label"])):L("",!0)}}),_l=A(Al,[["__scopeId","data-v-5f297e44"]]),Pl=c=>(Y("data-v-af093d9b"),c=c(),K(),c),Tl={class:"wrapper"},Bl={class:"container"},Fl={class:"title"},Dl={class:"content"},$l={class:"content-body"},Rl=Pl(()=>h("div",{class:"divider"},[h("div",{class:"divider-line"})],-1)),El=x({__name:"VPNavBar",props:{isScreenOpen:{type:Boolean}},emits:["toggle-screen"],setup(c){const{y:a}=u0(),{hasSidebar:e}=H2(),{hasLocalNav:r}=d0(),{frontmatter:s}=P(),n=B({});return f0(()=>{n.value={"has-sidebar":e.value,"has-local-nav":r.value,top:s.value.layout==="home"&&a.value===0}}),(i,o)=>(t(),z("div",{class:F(["VPNavBar",n.value])},[h("div",Tl,[h("div",Bl,[h("div",Fl,[S(Sl,null,{"nav-bar-title-before":p(()=>[u(i.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":p(()=>[u(i.$slots,"nav-bar-title-after",{},void 0,!0)]),_:3})]),h("div",Dl,[h("div",$l,[u(i.$slots,"nav-bar-content-before",{},void 0,!0),S(Cl,{class:"search"}),S(vl,{class:"menu"}),S(_l,{class:"translations"}),S(uo,{class:"appearance"}),S(gl,{class:"social-links"}),S(Ko,{class:"extra"}),u(i.$slots,"nav-bar-content-after",{},void 0,!0),S(el,{class:"hamburger",active:i.isScreenOpen,onClick:o[0]||(o[0]=l=>i.$emit("toggle-screen"))},null,8,["active"])])])])]),Rl],2))}}),Ul=A(El,[["__scopeId","data-v-af093d9b"]]),Ol={key:0,class:"VPNavScreenAppearance"},Il={class:"text"},jl=x({__name:"VPNavScreenAppearance",setup(c){const{site:a,theme:e}=P();return(r,s)=>v(a).appearance&&v(a).appearance!=="force-dark"?(t(),z("div",Ol,[h("p",Il,D(v(e).darkModeSwitchLabel||"Appearance"),1),S(K3)])):L("",!0)}}),ql=A(jl,[["__scopeId","data-v-22ce3cf5"]]),Wl=x({__name:"VPNavScreenMenuLink",props:{item:{}},setup(c){const a=n1("close-screen");return(e,r)=>(t(),y(n2,{class:"VPNavScreenMenuLink",href:e.item.link,target:e.item.target,rel:e.item.rel,onClick:v(a)},{default:p(()=>[e2(D(e.item.text),1)]),_:1},8,["href","target","rel","onClick"]))}}),Gl=A(Wl,[["__scopeId","data-v-eb070deb"]]),Xl=x({__name:"VPNavScreenMenuGroupLink",props:{item:{}},setup(c){const a=n1("close-screen");return(e,r)=>(t(),y(n2,{class:"VPNavScreenMenuGroupLink",href:e.item.link,target:e.item.target,rel:e.item.rel,onClick:v(a)},{default:p(()=>[e2(D(e.item.text),1)]),_:1},8,["href","target","rel","onClick"]))}}),g0=A(Xl,[["__scopeId","data-v-122f86b7"]]),Yl={class:"VPNavScreenMenuGroupSection"},Kl={key:0,class:"title"},Ql=x({__name:"VPNavScreenMenuGroupSection",props:{text:{},items:{}},setup(c){return(a,e)=>(t(),z("div",Yl,[a.text?(t(),z("p",Kl,D(a.text),1)):L("",!0),(t(!0),z(q,null,Q(a.items,r=>(t(),y(g0,{key:r.text,item:r},null,8,["item"]))),128))]))}}),Zl=A(Ql,[["__scopeId","data-v-949f5ac9"]]),Jl=c=>(Y("data-v-873e5562"),c=c(),K(),c),ct=["aria-controls","aria-expanded"],at=["innerHTML"],et=Jl(()=>h("span",{class:"vpi-plus button-icon"},null,-1)),rt=["id"],st={key:1,class:"group"},nt=x({__name:"VPNavScreenMenuGroup",props:{text:{},items:{}},setup(c){const a=c,e=B(!1),r=k(()=>`NavScreenGroup-${a.text.replace(" ","-").toLowerCase()}`);function s(){e.value=!e.value}return(n,i)=>(t(),z("div",{class:F(["VPNavScreenMenuGroup",{open:e.value}])},[h("button",{class:"button","aria-controls":r.value,"aria-expanded":e.value,onClick:s},[h("span",{class:"button-text",innerHTML:n.text},null,8,at),et],8,ct),h("div",{id:r.value,class:"items"},[(t(!0),z(q,null,Q(n.items,o=>(t(),z(q,{key:o.text},["link"in o?(t(),z("div",{key:o.text,class:"item"},[S(g0,{item:o},null,8,["item"])])):(t(),z("div",st,[S(Zl,{text:o.text,items:o.items},null,8,["text","items"])]))],64))),128))],8,rt)],2))}}),it=A(nt,[["__scopeId","data-v-873e5562"]]),ot={key:0,class:"VPNavScreenMenu"},lt=x({__name:"VPNavScreenMenu",setup(c){const{theme:a}=P();return(e,r)=>v(a).nav?(t(),z("nav",ot,[(t(!0),z(q,null,Q(v(a).nav,s=>(t(),z(q,{key:s.text},["link"in s?(t(),y(Gl,{key:0,item:s},null,8,["item"])):(t(),y(it,{key:1,text:s.text||"",items:s.items},null,8,["text","items"]))],64))),128))])):L("",!0)}}),tt=x({__name:"VPNavScreenSocialLinks",setup(c){const{theme:a}=P();return(e,r)=>v(a).socialLinks?(t(),y(J3,{key:0,class:"VPNavScreenSocialLinks",links:v(a).socialLinks},null,8,["links"])):L("",!0)}}),b0=c=>(Y("data-v-899d9421"),c=c(),K(),c),ft=b0(()=>h("span",{class:"vpi-languages icon lang"},null,-1)),vt=b0(()=>h("span",{class:"vpi-chevron-down icon chevron"},null,-1)),mt={class:"list"},ut=x({__name:"VPNavScreenTranslations",setup(c){const{localeLinks:a,currentLang:e}=i1({correspondingLink:!0}),r=B(!1);function s(){r.value=!r.value}return(n,i)=>v(a).length&&v(e).label?(t(),z("div",{key:0,class:F(["VPNavScreenTranslations",{open:r.value}])},[h("button",{class:"title",onClick:s},[ft,e2(" "+D(v(e).label)+" ",1),vt]),h("ul",mt,[(t(!0),z(q,null,Q(v(a),o=>(t(),z("li",{key:o.link,class:"item"},[S(n2,{class:"link",href:o.link},{default:p(()=>[e2(D(o.text),1)]),_:2},1032,["href"])]))),128))])],2)):L("",!0)}}),Ht=A(ut,[["__scopeId","data-v-899d9421"]]),zt={class:"container"},ht=x({__name:"VPNavScreen",props:{open:{type:Boolean}},setup(c){const a=B(null),e=H0(O2?document.body:null);return(r,s)=>(t(),y(F1,{name:"fade",onEnter:s[0]||(s[0]=n=>e.value=!0),onAfterLeave:s[1]||(s[1]=n=>e.value=!1)},{default:p(()=>[r.open?(t(),z("div",{key:0,class:"VPNavScreen",ref_key:"screen",ref:a,id:"VPNavScreen"},[h("div",zt,[u(r.$slots,"nav-screen-content-before",{},void 0,!0),S(lt,{class:"menu"}),S(Ht,{class:"translations"}),S(ql,{class:"appearance"}),S(tt,{class:"social-links"}),u(r.$slots,"nav-screen-content-after",{},void 0,!0)])],512)):L("",!0)]),_:3}))}}),pt=A(ht,[["__scopeId","data-v-0121a5e4"]]),Vt={key:0,class:"VPNav"},dt=x({__name:"VPNav",setup(c){const{isScreenOpen:a,closeScreen:e,toggleScreen:r}=ao(),{frontmatter:s}=P(),n=k(()=>s.value.navbar!==!1);return W3("close-screen",e),D1(()=>{O2&&document.documentElement.classList.toggle("hide-nav",!n.value)}),(i,o)=>n.value?(t(),z("header",Vt,[S(Ul,{"is-screen-open":v(a),onToggleScreen:v(r)},{"nav-bar-title-before":p(()=>[u(i.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":p(()=>[u(i.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":p(()=>[u(i.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":p(()=>[u(i.$slots,"nav-bar-content-after",{},void 0,!0)]),_:3},8,["is-screen-open","onToggleScreen"]),S(pt,{open:v(a)},{"nav-screen-content-before":p(()=>[u(i.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":p(()=>[u(i.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3},8,["open"])])):L("",!0)}}),Mt=A(dt,[["__scopeId","data-v-70105386"]]),x0=c=>(Y("data-v-e516d8cd"),c=c(),K(),c),Ct=["role","tabindex"],Lt=x0(()=>h("div",{class:"indicator"},null,-1)),gt=x0(()=>h("span",{class:"vpi-chevron-right caret-icon"},null,-1)),bt=[gt],xt={key:1,class:"items"},Nt=x({__name:"VPSidebarItem",props:{item:{},depth:{}},setup(c){const a=c,{collapsed:e,collapsible:r,isLink:s,isActiveLink:n,hasActiveLink:i,hasChildren:o,toggle:l}=qs(k(()=>a.item)),f=k(()=>o.value?"section":"div"),m=k(()=>s.value?"a":"div"),H=k(()=>o.value?a.depth+2===7?"p":`h${a.depth+2}`:"p"),V=k(()=>s.value?void 0:"button"),d=k(()=>[[`level-${a.depth}`],{collapsible:r.value},{collapsed:e.value},{"is-link":s.value},{"is-active":n.value},{"has-active":i.value}]);function M(_){"key"in _&&_.key!=="Enter"||!a.item.link&&l()}function w(){a.item.link&&l()}return(_,g)=>{const b=_2("VPSidebarItem",!0);return t(),y(k2(f.value),{class:F(["VPSidebarItem",d.value])},{default:p(()=>[_.item.text?(t(),z("div",G2({key:0,class:"item",role:V.value},Vs(_.item.items?{click:M,keydown:M}:{},!0),{tabindex:_.item.items&&0}),[Lt,_.item.link?(t(),y(n2,{key:0,tag:m.value,class:"link",href:_.item.link,rel:_.item.rel,target:_.item.target},{default:p(()=>[(t(),y(k2(H.value),{class:"text",innerHTML:_.item.text},null,8,["innerHTML"]))]),_:1},8,["tag","href","rel","target"])):(t(),y(k2(H.value),{key:1,class:"text",innerHTML:_.item.text},null,8,["innerHTML"])),_.item.collapsed!=null?(t(),z("div",{key:2,class:"caret",role:"button","aria-label":"toggle section",onClick:w,onKeydown:ds(w,["enter"]),tabindex:"0"},bt,32)):L("",!0)],16,Ct)):L("",!0),_.item.items&&_.item.items.length?(t(),z("div",xt,[_.depth<5?(t(!0),z(q,{key:0},Q(_.item.items,T=>(t(),y(b,{key:T.text,item:T,depth:_.depth+1},null,8,["item","depth"]))),128)):L("",!0)])):L("",!0)]),_:1},8,["class"])}}}),kt=A(Nt,[["__scopeId","data-v-e516d8cd"]]),N0=c=>(Y("data-v-c75087ba"),c=c(),K(),c),St=N0(()=>h("div",{class:"curtain"},null,-1)),yt={class:"nav",id:"VPSidebarNav","aria-labelledby":"sidebar-aria-label",tabindex:"-1"},wt=N0(()=>h("span",{class:"visually-hidden",id:"sidebar-aria-label"}," Sidebar Navigation ",-1)),At=x({__name:"VPSidebar",props:{open:{type:Boolean}},setup(c){const{sidebarGroups:a,hasSidebar:e}=H2(),r=c,s=B(null),n=H0(O2?document.body:null);return o2([r,s],()=>{var i;r.open?(n.value=!0,(i=s.value)==null||i.focus()):n.value=!1},{immediate:!0,flush:"post"}),(i,o)=>v(e)?(t(),z("aside",{key:0,class:F(["VPSidebar",{open:i.open}]),ref_key:"navEl",ref:s,onClick:o[0]||(o[0]=Ms(()=>{},["stop"]))},[St,h("nav",yt,[wt,u(i.$slots,"sidebar-nav-before",{},void 0,!0),(t(!0),z(q,null,Q(v(a),l=>(t(),z("div",{key:l.text,class:"group"},[S(kt,{item:l,depth:0},null,8,["item"])]))),128)),u(i.$slots,"sidebar-nav-after",{},void 0,!0)])],2)):L("",!0)}}),_t=A(At,[["__scopeId","data-v-c75087ba"]]),Pt=x({__name:"VPSkipLink",setup(c){const a=R1(),e=B();o2(()=>a.path,()=>e.value.focus());function r({target:s}){const n=document.getElementById(decodeURIComponent(s.hash).slice(1));if(n){const i=()=>{n.removeAttribute("tabindex"),n.removeEventListener("blur",i)};n.setAttribute("tabindex","-1"),n.addEventListener("blur",i),n.focus(),window.scrollTo(0,0)}}return(s,n)=>(t(),z(q,null,[h("span",{ref_key:"backToTop",ref:e,tabindex:"-1"},null,512),h("a",{href:"#VPContent",class:"VPSkipLink visually-hidden",onClick:r}," Skip to content ")],64))}}),Tt=A(Pt,[["__scopeId","data-v-a9b6e631"]]),Bt=x({__name:"Layout",setup(c){const{isOpen:a,open:e,close:r}=H2(),s=R1();o2(()=>s.path,r),js(a,r);const{frontmatter:n}=P(),i=z0(),o=k(()=>!!i["home-hero-image"]);return W3("hero-image-slot-exists",o),(l,f)=>{const m=_2("Content");return v(n).layout!==!1?(t(),z("div",{key:0,class:F(["Layout",v(n).pageClass])},[u(l.$slots,"layout-top",{},void 0,!0),S(Tt),S(ys,{class:"backdrop",show:v(a),onClick:v(r)},null,8,["show","onClick"]),S(Mt,null,{"nav-bar-title-before":p(()=>[u(l.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":p(()=>[u(l.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":p(()=>[u(l.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":p(()=>[u(l.$slots,"nav-bar-content-after",{},void 0,!0)]),"nav-screen-content-before":p(()=>[u(l.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":p(()=>[u(l.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3}),S(co,{open:v(a),onOpenMenu:v(e)},null,8,["open","onOpenMenu"]),S(_t,{open:v(a)},{"sidebar-nav-before":p(()=>[u(l.$slots,"sidebar-nav-before",{},void 0,!0)]),"sidebar-nav-after":p(()=>[u(l.$slots,"sidebar-nav-after",{},void 0,!0)]),_:3},8,["open"]),S(Fi,null,{"page-top":p(()=>[u(l.$slots,"page-top",{},void 0,!0)]),"page-bottom":p(()=>[u(l.$slots,"page-bottom",{},void 0,!0)]),"not-found":p(()=>[u(l.$slots,"not-found",{},void 0,!0)]),"home-hero-before":p(()=>[u(l.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":p(()=>[u(l.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":p(()=>[u(l.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":p(()=>[u(l.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":p(()=>[u(l.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":p(()=>[u(l.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":p(()=>[u(l.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":p(()=>[u(l.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":p(()=>[u(l.$slots,"home-features-after",{},void 0,!0)]),"doc-footer-before":p(()=>[u(l.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":p(()=>[u(l.$slots,"doc-before",{},void 0,!0)]),"doc-after":p(()=>[u(l.$slots,"doc-after",{},void 0,!0)]),"doc-top":p(()=>[u(l.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":p(()=>[u(l.$slots,"doc-bottom",{},void 0,!0)]),"aside-top":p(()=>[u(l.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":p(()=>[u(l.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":p(()=>[u(l.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":p(()=>[u(l.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":p(()=>[u(l.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":p(()=>[u(l.$slots,"aside-ads-after",{},void 0,!0)]),_:3}),S(Ui),u(l.$slots,"layout-bottom",{},void 0,!0)],2)):(t(),y(m,{key:1}))}}}),Ft=A(Bt,[["__scopeId","data-v-7b5849c2"]]),Dt={Layout:Ft,enhanceApp:({app:c})=>{c.component("Badge",Ns)}};var k0=typeof global=="object"&&global&&global.Object===Object&&global,$t=typeof self=="object"&&self&&self.Object===Object&&self,r2=k0||$t||Function("return this")(),i2=r2.Symbol,S0=Object.prototype,Rt=S0.hasOwnProperty,Et=S0.toString,q2=i2?i2.toStringTag:void 0;function Ut(c){var a=Rt.call(c,q2),e=c[q2];try{c[q2]=void 0;var r=!0}catch{}var s=Et.call(c);return r&&(a?c[q2]=e:delete c[q2]),s}var Ot=Object.prototype,It=Ot.toString;function jt(c){return It.call(c)}var qt="[object Null]",Wt="[object Undefined]",u6=i2?i2.toStringTag:void 0;function P2(c){return c==null?c===void 0?Wt:qt:u6&&u6 in Object(c)?Ut(c):jt(c)}function T2(c){return c!=null&&typeof c=="object"}var Gt="[object Symbol]";function U1(c){return typeof c=="symbol"||T2(c)&&P2(c)==Gt}function y0(c,a){for(var e=-1,r=c==null?0:c.length,s=Array(r);++e<r;)s[e]=a(c[e],e,c);return s}var g2=Array.isArray,Xt=1/0,H6=i2?i2.prototype:void 0,z6=H6?H6.toString:void 0;function w0(c){if(typeof c=="string")return c;if(g2(c))return y0(c,w0)+"";if(U1(c))return z6?z6.call(c):"";var a=c+"";return a=="0"&&1/c==-Xt?"-0":a}var Yt=/\s/;function Kt(c){for(var a=c.length;a--&&Yt.test(c.charAt(a)););return a}var Qt=/^\s+/;function Zt(c){return c&&c.slice(0,Kt(c)+1).replace(Qt,"")}function V2(c){var a=typeof c;return c!=null&&(a=="object"||a=="function")}var h6=NaN,Jt=/^[-+]0x[0-9a-f]+$/i,cf=/^0b[01]+$/i,af=/^0o[0-7]+$/i,ef=parseInt;function p6(c){if(typeof c=="number")return c;if(U1(c))return h6;if(V2(c)){var a=typeof c.valueOf=="function"?c.valueOf():c;c=V2(a)?a+"":a}if(typeof c!="string")return c===0?c:+c;c=Zt(c);var e=cf.test(c);return e||af.test(c)?ef(c.slice(2),e?2:8):Jt.test(c)?h6:+c}function A0(c){return c}var rf="[object AsyncFunction]",sf="[object Function]",nf="[object GeneratorFunction]",of="[object Proxy]";function _0(c){if(!V2(c))return!1;var a=P2(c);return a==sf||a==nf||a==rf||a==of}var u3=r2["__core-js_shared__"],V6=function(){var c=/[^.]+$/.exec(u3&&u3.keys&&u3.keys.IE_PROTO||"");return c?"Symbol(src)_1."+c:""}();function lf(c){return!!V6&&V6 in c}var tf=Function.prototype,ff=tf.toString;function B2(c){if(c!=null){try{return ff.call(c)}catch{}try{return c+""}catch{}}return""}var vf=/[\\^$.*+?()[\]{}|]/g,mf=/^\[object .+?Constructor\]$/,uf=Function.prototype,Hf=Object.prototype,zf=uf.toString,hf=Hf.hasOwnProperty,pf=RegExp("^"+zf.call(hf).replace(vf,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Vf(c){if(!V2(c)||lf(c))return!1;var a=_0(c)?pf:mf;return a.test(B2(c))}function df(c,a){return c==null?void 0:c[a]}function F2(c,a){var e=df(c,a);return Vf(e)?e:void 0}var k3=F2(r2,"WeakMap");function Mf(c,a,e){switch(e.length){case 0:return c.call(a);case 1:return c.call(a,e[0]);case 2:return c.call(a,e[0],e[1]);case 3:return c.call(a,e[0],e[1],e[2])}return c.apply(a,e)}var Cf=800,Lf=16,gf=Date.now;function bf(c){var a=0,e=0;return function(){var r=gf(),s=Lf-(r-e);if(e=r,s>0){if(++a>=Cf)return arguments[0]}else a=0;return c.apply(void 0,arguments)}}function xf(c){return function(){return c}}var A1=function(){try{var c=F2(Object,"defineProperty");return c({},"",{}),c}catch{}}(),Nf=A1?function(c,a){return A1(c,"toString",{configurable:!0,enumerable:!1,value:xf(a),writable:!0})}:A0,kf=bf(Nf);function P0(c,a){for(var e=-1,r=c==null?0:c.length;++e<r&&a(c[e],e,c)!==!1;);return c}var Sf=9007199254740991,yf=/^(?:0|[1-9]\d*)$/;function wf(c,a){var e=typeof c;return a=a??Sf,!!a&&(e=="number"||e!="symbol"&&yf.test(c))&&c>-1&&c%1==0&&c<a}function T0(c,a,e){a=="__proto__"&&A1?A1(c,a,{configurable:!0,enumerable:!0,value:e,writable:!0}):c[a]=e}function B0(c,a){return c===a||c!==c&&a!==a}var Af=Object.prototype,_f=Af.hasOwnProperty;function F0(c,a,e){var r=c[a];(!(_f.call(c,a)&&B0(r,e))||e===void 0&&!(a in c))&&T0(c,a,e)}function Pf(c,a,e,r){var s=!e;e||(e={});for(var n=-1,i=a.length;++n<i;){var o=a[n],l=void 0;l===void 0&&(l=c[o]),s?T0(e,o,l):F0(e,o,l)}return e}var d6=Math.max;function Tf(c,a,e){return a=d6(a===void 0?c.length-1:a,0),function(){for(var r=arguments,s=-1,n=d6(r.length-a,0),i=Array(n);++s<n;)i[s]=r[a+s];s=-1;for(var o=Array(a+1);++s<a;)o[s]=r[s];return o[a]=e(i),Mf(c,this,o)}}var Bf=9007199254740991;function D0(c){return typeof c=="number"&&c>-1&&c%1==0&&c<=Bf}function c4(c){return c!=null&&D0(c.length)&&!_0(c)}var Ff=Object.prototype;function $0(c){var a=c&&c.constructor,e=typeof a=="function"&&a.prototype||Ff;return c===e}function Df(c,a){for(var e=-1,r=Array(c);++e<c;)r[e]=a(e);return r}var $f="[object Arguments]";function M6(c){return T2(c)&&P2(c)==$f}var R0=Object.prototype,Rf=R0.hasOwnProperty,Ef=R0.propertyIsEnumerable,E0=M6(function(){return arguments}())?M6:function(c){return T2(c)&&Rf.call(c,"callee")&&!Ef.call(c,"callee")};function Uf(){return!1}var U0=typeof exports=="object"&&exports&&!exports.nodeType&&exports,C6=U0&&typeof module=="object"&&module&&!module.nodeType&&module,Of=C6&&C6.exports===U0,L6=Of?r2.Buffer:void 0,If=L6?L6.isBuffer:void 0,O0=If||Uf,jf="[object Arguments]",qf="[object Array]",Wf="[object Boolean]",Gf="[object Date]",Xf="[object Error]",Yf="[object Function]",Kf="[object Map]",Qf="[object Number]",Zf="[object Object]",Jf="[object RegExp]",cv="[object Set]",av="[object String]",ev="[object WeakMap]",rv="[object ArrayBuffer]",sv="[object DataView]",nv="[object Float32Array]",iv="[object Float64Array]",ov="[object Int8Array]",lv="[object Int16Array]",tv="[object Int32Array]",fv="[object Uint8Array]",vv="[object Uint8ClampedArray]",mv="[object Uint16Array]",uv="[object Uint32Array]",O={};O[nv]=O[iv]=O[ov]=O[lv]=O[tv]=O[fv]=O[vv]=O[mv]=O[uv]=!0;O[jf]=O[qf]=O[rv]=O[Wf]=O[sv]=O[Gf]=O[Xf]=O[Yf]=O[Kf]=O[Qf]=O[Zf]=O[Jf]=O[cv]=O[av]=O[ev]=!1;function Hv(c){return T2(c)&&D0(c.length)&&!!O[P2(c)]}function a4(c){return function(a){return c(a)}}var I0=typeof exports=="object"&&exports&&!exports.nodeType&&exports,X2=I0&&typeof module=="object"&&module&&!module.nodeType&&module,zv=X2&&X2.exports===I0,H3=zv&&k0.process,E2=function(){try{var c=X2&&X2.require&&X2.require("util").types;return c||H3&&H3.binding&&H3.binding("util")}catch{}}(),g6=E2&&E2.isTypedArray,hv=g6?a4(g6):Hv,pv=Object.prototype,Vv=pv.hasOwnProperty;function j0(c,a){var e=g2(c),r=!e&&E0(c),s=!e&&!r&&O0(c),n=!e&&!r&&!s&&hv(c),i=e||r||s||n,o=i?Df(c.length,String):[],l=o.length;for(var f in c)(a||Vv.call(c,f))&&!(i&&(f=="length"||s&&(f=="offset"||f=="parent")||n&&(f=="buffer"||f=="byteLength"||f=="byteOffset")||wf(f,l)))&&o.push(f);return o}function q0(c,a){return function(e){return c(a(e))}}var dv=q0(Object.keys,Object),Mv=Object.prototype,Cv=Mv.hasOwnProperty;function Lv(c){if(!$0(c))return dv(c);var a=[];for(var e in Object(c))Cv.call(c,e)&&e!="constructor"&&a.push(e);return a}function gv(c){return c4(c)?j0(c):Lv(c)}function bv(c){var a=[];if(c!=null)for(var e in Object(c))a.push(e);return a}var xv=Object.prototype,Nv=xv.hasOwnProperty;function kv(c){if(!V2(c))return bv(c);var a=$0(c),e=[];for(var r in c)r=="constructor"&&(a||!Nv.call(c,r))||e.push(r);return e}function Sv(c){return c4(c)?j0(c,!0):kv(c)}var yv=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,wv=/^\w*$/;function Av(c,a){if(g2(c))return!1;var e=typeof c;return e=="number"||e=="symbol"||e=="boolean"||c==null||U1(c)?!0:wv.test(c)||!yv.test(c)||a!=null&&c in Object(a)}var Z2=F2(Object,"create");function _v(){this.__data__=Z2?Z2(null):{},this.size=0}function Pv(c){var a=this.has(c)&&delete this.__data__[c];return this.size-=a?1:0,a}var Tv="__lodash_hash_undefined__",Bv=Object.prototype,Fv=Bv.hasOwnProperty;function Dv(c){var a=this.__data__;if(Z2){var e=a[c];return e===Tv?void 0:e}return Fv.call(a,c)?a[c]:void 0}var $v=Object.prototype,Rv=$v.hasOwnProperty;function Ev(c){var a=this.__data__;return Z2?a[c]!==void 0:Rv.call(a,c)}var Uv="__lodash_hash_undefined__";function Ov(c,a){var e=this.__data__;return this.size+=this.has(c)?0:1,e[c]=Z2&&a===void 0?Uv:a,this}function y2(c){var a=-1,e=c==null?0:c.length;for(this.clear();++a<e;){var r=c[a];this.set(r[0],r[1])}}y2.prototype.clear=_v;y2.prototype.delete=Pv;y2.prototype.get=Dv;y2.prototype.has=Ev;y2.prototype.set=Ov;function Iv(){this.__data__=[],this.size=0}function O1(c,a){for(var e=c.length;e--;)if(B0(c[e][0],a))return e;return-1}var jv=Array.prototype,qv=jv.splice;function Wv(c){var a=this.__data__,e=O1(a,c);if(e<0)return!1;var r=a.length-1;return e==r?a.pop():qv.call(a,e,1),--this.size,!0}function Gv(c){var a=this.__data__,e=O1(a,c);return e<0?void 0:a[e][1]}function Xv(c){return O1(this.__data__,c)>-1}function Yv(c,a){var e=this.__data__,r=O1(e,c);return r<0?(++this.size,e.push([c,a])):e[r][1]=a,this}function z2(c){var a=-1,e=c==null?0:c.length;for(this.clear();++a<e;){var r=c[a];this.set(r[0],r[1])}}z2.prototype.clear=Iv;z2.prototype.delete=Wv;z2.prototype.get=Gv;z2.prototype.has=Xv;z2.prototype.set=Yv;var J2=F2(r2,"Map");function Kv(){this.size=0,this.__data__={hash:new y2,map:new(J2||z2),string:new y2}}function Qv(c){var a=typeof c;return a=="string"||a=="number"||a=="symbol"||a=="boolean"?c!=="__proto__":c===null}function I1(c,a){var e=c.__data__;return Qv(a)?e[typeof a=="string"?"string":"hash"]:e.map}function Zv(c){var a=I1(this,c).delete(c);return this.size-=a?1:0,a}function Jv(c){return I1(this,c).get(c)}function cm(c){return I1(this,c).has(c)}function am(c,a){var e=I1(this,c),r=e.size;return e.set(c,a),this.size+=e.size==r?0:1,this}function b2(c){var a=-1,e=c==null?0:c.length;for(this.clear();++a<e;){var r=c[a];this.set(r[0],r[1])}}b2.prototype.clear=Kv;b2.prototype.delete=Zv;b2.prototype.get=Jv;b2.prototype.has=cm;b2.prototype.set=am;var em="Expected a function";function e4(c,a){if(typeof c!="function"||a!=null&&typeof a!="function")throw new TypeError(em);var e=function(){var r=arguments,s=a?a.apply(this,r):r[0],n=e.cache;if(n.has(s))return n.get(s);var i=c.apply(this,r);return e.cache=n.set(s,i)||n,i};return e.cache=new(e4.Cache||b2),e}e4.Cache=b2;var rm=500;function sm(c){var a=e4(c,function(r){return e.size===rm&&e.clear(),r}),e=a.cache;return a}var nm=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,im=/\\(\\)?/g,om=sm(function(c){var a=[];return c.charCodeAt(0)===46&&a.push(""),c.replace(nm,function(e,r,s,n){a.push(s?n.replace(im,"$1"):r||e)}),a});function lm(c){return c==null?"":w0(c)}function r4(c,a){return g2(c)?c:Av(c,a)?[c]:om(lm(c))}var tm=1/0;function W0(c){if(typeof c=="string"||U1(c))return c;var a=c+"";return a=="0"&&1/c==-tm?"-0":a}function fm(c,a){a=r4(a,c);for(var e=0,r=a.length;c!=null&&e<r;)c=c[W0(a[e++])];return e&&e==r?c:void 0}function s4(c,a){for(var e=-1,r=a.length,s=c.length;++e<r;)c[s+e]=a[e];return c}var b6=i2?i2.isConcatSpreadable:void 0;function vm(c){return g2(c)||E0(c)||!!(b6&&c&&c[b6])}function mm(c,a,e,r,s){var n=-1,i=c.length;for(e||(e=vm),s||(s=[]);++n<i;){var o=c[n];e(o)?s4(s,o):s[s.length]=o}return s}function um(c){var a=c==null?0:c.length;return a?mm(c):[]}function Hm(c){return kf(Tf(c,void 0,um),c+"")}var G0=q0(Object.getPrototypeOf,Object),zm="[object Object]",hm=Function.prototype,pm=Object.prototype,X0=hm.toString,Vm=pm.hasOwnProperty,dm=X0.call(Object);function Mm(c){if(!T2(c)||P2(c)!=zm)return!1;var a=G0(c);if(a===null)return!0;var e=Vm.call(a,"constructor")&&a.constructor;return typeof e=="function"&&e instanceof e&&X0.call(e)==dm}function Cm(c,a,e){var r=-1,s=c.length;a<0&&(a=-a>s?0:s+a),e=e>s?s:e,e<0&&(e+=s),s=a>e?0:e-a>>>0,a>>>=0;for(var n=Array(s);++r<s;)n[r]=c[r+a];return n}function Lm(){this.__data__=new z2,this.size=0}function gm(c){var a=this.__data__,e=a.delete(c);return this.size=a.size,e}function bm(c){return this.__data__.get(c)}function xm(c){return this.__data__.has(c)}var Nm=200;function km(c,a){var e=this.__data__;if(e instanceof z2){var r=e.__data__;if(!J2||r.length<Nm-1)return r.push([c,a]),this.size=++e.size,this;e=this.__data__=new b2(r)}return e.set(c,a),this.size=e.size,this}function I2(c){var a=this.__data__=new z2(c);this.size=a.size}I2.prototype.clear=Lm;I2.prototype.delete=gm;I2.prototype.get=bm;I2.prototype.has=xm;I2.prototype.set=km;var Y0=typeof exports=="object"&&exports&&!exports.nodeType&&exports,x6=Y0&&typeof module=="object"&&module&&!module.nodeType&&module,Sm=x6&&x6.exports===Y0,N6=Sm?r2.Buffer:void 0;N6&&N6.allocUnsafe;function ym(c,a){return c.slice()}function wm(c,a){for(var e=-1,r=c==null?0:c.length,s=0,n=[];++e<r;){var i=c[e];a(i,e,c)&&(n[s++]=i)}return n}function K0(){return[]}var Am=Object.prototype,_m=Am.propertyIsEnumerable,k6=Object.getOwnPropertySymbols,Pm=k6?function(c){return c==null?[]:(c=Object(c),wm(k6(c),function(a){return _m.call(c,a)}))}:K0,Tm=Object.getOwnPropertySymbols,Bm=Tm?function(c){for(var a=[];c;)s4(a,Pm(c)),c=G0(c);return a}:K0;function Fm(c,a,e){var r=a(c);return g2(c)?r:s4(r,e(c))}function Q0(c){return Fm(c,Sv,Bm)}var S3=F2(r2,"DataView"),y3=F2(r2,"Promise"),w3=F2(r2,"Set"),S6="[object Map]",Dm="[object Object]",y6="[object Promise]",w6="[object Set]",A6="[object WeakMap]",_6="[object DataView]",$m=B2(S3),Rm=B2(J2),Em=B2(y3),Um=B2(w3),Om=B2(k3),t2=P2;(S3&&t2(new S3(new ArrayBuffer(1)))!=_6||J2&&t2(new J2)!=S6||y3&&t2(y3.resolve())!=y6||w3&&t2(new w3)!=w6||k3&&t2(new k3)!=A6)&&(t2=function(c){var a=P2(c),e=a==Dm?c.constructor:void 0,r=e?B2(e):"";if(r)switch(r){case $m:return _6;case Rm:return S6;case Em:return y6;case Um:return w6;case Om:return A6}return a});var Im=Object.prototype,jm=Im.hasOwnProperty;function qm(c){var a=c.length,e=new c.constructor(a);return a&&typeof c[0]=="string"&&jm.call(c,"index")&&(e.index=c.index,e.input=c.input),e}var P6=r2.Uint8Array;function n4(c){var a=new c.constructor(c.byteLength);return new P6(a).set(new P6(c)),a}function Wm(c,a){var e=n4(c.buffer);return new c.constructor(e,c.byteOffset,c.byteLength)}var Gm=/\w*$/;function Xm(c){var a=new c.constructor(c.source,Gm.exec(c));return a.lastIndex=c.lastIndex,a}var T6=i2?i2.prototype:void 0,B6=T6?T6.valueOf:void 0;function Ym(c){return B6?Object(B6.call(c)):{}}function Km(c,a){var e=n4(c.buffer);return new c.constructor(e,c.byteOffset,c.length)}var Qm="[object Boolean]",Zm="[object Date]",Jm="[object Map]",cu="[object Number]",au="[object RegExp]",eu="[object Set]",ru="[object String]",su="[object Symbol]",nu="[object ArrayBuffer]",iu="[object DataView]",ou="[object Float32Array]",lu="[object Float64Array]",tu="[object Int8Array]",fu="[object Int16Array]",vu="[object Int32Array]",mu="[object Uint8Array]",uu="[object Uint8ClampedArray]",Hu="[object Uint16Array]",zu="[object Uint32Array]";function hu(c,a,e){var r=c.constructor;switch(a){case nu:return n4(c);case Qm:case Zm:return new r(+c);case iu:return Wm(c);case ou:case lu:case tu:case fu:case vu:case mu:case uu:case Hu:case zu:return Km(c);case Jm:return new r;case cu:case ru:return new r(c);case au:return Xm(c);case eu:return new r;case su:return Ym(c)}}var pu="[object Map]";function Vu(c){return T2(c)&&t2(c)==pu}var F6=E2&&E2.isMap,du=F6?a4(F6):Vu,Mu="[object Set]";function Cu(c){return T2(c)&&t2(c)==Mu}var D6=E2&&E2.isSet,Lu=D6?a4(D6):Cu,gu=1,Z0="[object Arguments]",bu="[object Array]",xu="[object Boolean]",Nu="[object Date]",ku="[object Error]",J0="[object Function]",Su="[object GeneratorFunction]",yu="[object Map]",wu="[object Number]",c8="[object Object]",Au="[object RegExp]",_u="[object Set]",Pu="[object String]",Tu="[object Symbol]",Bu="[object WeakMap]",Fu="[object ArrayBuffer]",Du="[object DataView]",$u="[object Float32Array]",Ru="[object Float64Array]",Eu="[object Int8Array]",Uu="[object Int16Array]",Ou="[object Int32Array]",Iu="[object Uint8Array]",ju="[object Uint8ClampedArray]",qu="[object Uint16Array]",Wu="[object Uint32Array]",U={};U[Z0]=U[bu]=U[Fu]=U[Du]=U[xu]=U[Nu]=U[$u]=U[Ru]=U[Eu]=U[Uu]=U[Ou]=U[yu]=U[wu]=U[c8]=U[Au]=U[_u]=U[Pu]=U[Tu]=U[Iu]=U[ju]=U[qu]=U[Wu]=!0;U[ku]=U[J0]=U[Bu]=!1;function k1(c,a,e,r,s,n){var i,o=a&gu;if(e&&(i=s?e(c,r,s,n):e(c)),i!==void 0)return i;if(!V2(c))return c;var l=g2(c);if(l)i=qm(c);else{var f=t2(c),m=f==J0||f==Su;if(O0(c))return ym(c);if(f==c8||f==Z0||m&&!s)i={};else{if(!U[f])return s?c:{};i=hu(c,f)}}n||(n=new I2);var H=n.get(c);if(H)return H;n.set(c,i),Lu(c)?c.forEach(function(M){i.add(k1(M,a,e,M,c,n))}):du(c)&&c.forEach(function(M,w){i.set(w,k1(M,a,e,w,c,n))});var V=Q0,d=l?void 0:V(c);return P0(d||c,function(M,w){d&&(w=M,M=c[w]),F0(i,w,k1(M,a,e,w,c,n))}),i}function Gu(c){return function(a,e,r){for(var s=-1,n=Object(a),i=r(a),o=i.length;o--;){var l=i[++s];if(e(n[l],l,n)===!1)break}return a}}var Xu=Gu();function Yu(c,a){return c&&Xu(c,a,gv)}function Ku(c,a){return function(e,r){if(e==null)return e;if(!c4(e))return c(e,r);for(var s=e.length,n=-1,i=Object(e);++n<s&&r(i[n],n,i)!==!1;);return e}}var Qu=Ku(Yu),z3=function(){return r2.Date.now()},Zu="Expected a function",Ju=Math.max,cH=Math.min;function aH(c,a,e){var r,s,n,i,o,l,f=0,m=!1,H=!1,V=!0;if(typeof c!="function")throw new TypeError(Zu);a=p6(a)||0,V2(e)&&(m=!!e.leading,H="maxWait"in e,n=H?Ju(p6(e.maxWait)||0,a):n,V="trailing"in e?!!e.trailing:V);function d($){var G=r,l2=s;return r=s=void 0,f=$,i=c.apply(l2,G),i}function M($){return f=$,o=setTimeout(g,a),m?d($):i}function w($){var G=$-l,l2=$-f,c2=a-G;return H?cH(c2,n-l2):c2}function _($){var G=$-l,l2=$-f;return l===void 0||G>=a||G<0||H&&l2>=n}function g(){var $=z3();if(_($))return b($);o=setTimeout(g,w($))}function b($){return o=void 0,V&&r?d($):(r=s=void 0,i)}function T(){o!==void 0&&clearTimeout(o),f=0,r=l=s=o=void 0}function E(){return o===void 0?i:b(z3())}function R(){var $=z3(),G=_($);if(r=arguments,s=this,l=$,G){if(o===void 0)return M(l);if(H)return clearTimeout(o),o=setTimeout(g,a),d(l)}return o===void 0&&(o=setTimeout(g,a)),i}return R.cancel=T,R.flush=E,R}function eH(c){var a=c==null?0:c.length;return a?c[a-1]:void 0}function rH(c){return typeof c=="function"?c:A0}function sH(c,a){var e=g2(c)?P0:Qu;return e(c,rH(a))}function nH(c,a){return a.length<2?c:fm(c,Cm(a,0,-1))}function iH(c,a){return a=r4(a,c),c=nH(c,a),c==null||delete c[W0(eH(a))]}function oH(c){return Mm(c)?void 0:c}var lH=1,tH=2,fH=4,vH=Hm(function(c,a){var e={};if(c==null)return e;var r=!1;a=y0(a,function(n){return n=r4(n,c),r||(r=n.length>1),n}),Pf(c,Q0(c),e),r&&(e=k1(e,lH|tH|fH,oH));for(var s=a.length;s--;)iH(e,a[s]);return e}),mH="Expected a function";function uH(c,a,e){var r=!0,s=!0;if(typeof c!="function")throw new TypeError(mH);return V2(e)&&(r="leading"in e?!!e.leading:r,s="trailing"in e?!!e.trailing:s),aH(c,a,{leading:r,maxWait:a,trailing:s})}function HH(c){return a=>{sH(c,e=>{a.use(e)})}}const i4=c=>(c.install=a=>{const e=(c==null?void 0:c.name)||"UnnamedComponent";a.component(e,c)},c);function $6(c,a){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(c);a&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(c,s).enumerable})),e.push.apply(e,r)}return e}function C(c){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?$6(Object(e),!0).forEach(function(r){X(c,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):$6(Object(e)).forEach(function(r){Object.defineProperty(c,r,Object.getOwnPropertyDescriptor(e,r))})}return c}function _1(c){"@babel/helpers - typeof";return _1=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_1(c)}function zH(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function hH(c,a){for(var e=0;e<a.length;e++){var r=a[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(c,r.key,r)}}function pH(c,a,e){return a&&hH(c.prototype,a),Object.defineProperty(c,"prototype",{writable:!1}),c}function X(c,a,e){return a in c?Object.defineProperty(c,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[a]=e,c}function o4(c,a){return dH(c)||CH(c,a)||a8(c,a)||gH()}function o1(c){return VH(c)||MH(c)||a8(c)||LH()}function VH(c){if(Array.isArray(c))return A3(c)}function dH(c){if(Array.isArray(c))return c}function MH(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function CH(c,a){var e=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(e!=null){var r=[],s=!0,n=!1,i,o;try{for(e=e.call(c);!(s=(i=e.next()).done)&&(r.push(i.value),!(a&&r.length===a));s=!0);}catch(l){n=!0,o=l}finally{try{!s&&e.return!=null&&e.return()}finally{if(n)throw o}}return r}}function a8(c,a){if(c){if(typeof c=="string")return A3(c,a);var e=Object.prototype.toString.call(c).slice(8,-1);if(e==="Object"&&c.constructor&&(e=c.constructor.name),e==="Map"||e==="Set")return Array.from(c);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return A3(c,a)}}function A3(c,a){(a==null||a>c.length)&&(a=c.length);for(var e=0,r=new Array(a);e<a;e++)r[e]=c[e];return r}function LH(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function gH(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var R6=function(){},l4={},e8={},r8=null,s8={mark:R6,measure:R6};try{typeof window<"u"&&(l4=window),typeof document<"u"&&(e8=document),typeof MutationObserver<"u"&&(r8=MutationObserver),typeof performance<"u"&&(s8=performance)}catch{}var bH=l4.navigator||{},E6=bH.userAgent,U6=E6===void 0?"":E6,d2=l4,j=e8,O6=r8,z1=s8;d2.document;var h2=!!j.documentElement&&!!j.head&&typeof j.addEventListener=="function"&&typeof j.createElement=="function",n8=~U6.indexOf("MSIE")||~U6.indexOf("Trident/"),h1,p1,V1,d1,M1,v2="___FONT_AWESOME___",_3=16,i8="fa",o8="svg-inline--fa",w2="data-fa-i2svg",P3="data-fa-pseudo-element",xH="data-fa-pseudo-element-pending",t4="data-prefix",f4="data-icon",I6="fontawesome-i2svg",NH="async",kH=["HTML","HEAD","STYLE","SCRIPT"],l8=function(){try{return!0}catch{return!1}}(),I="classic",W="sharp",v4=[I,W];function l1(c){return new Proxy(c,{get:function(e,r){return r in e?e[r]:e[I]}})}var c1=l1((h1={},X(h1,I,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),X(h1,W,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),h1)),a1=l1((p1={},X(p1,I,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),X(p1,W,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),p1)),e1=l1((V1={},X(V1,I,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),X(V1,W,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),V1)),SH=l1((d1={},X(d1,I,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),X(d1,W,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),d1)),yH=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,t8="fa-layers-text",wH=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,AH=l1((M1={},X(M1,I,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),X(M1,W,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),M1)),f8=[1,2,3,4,5,6,7,8,9,10],_H=f8.concat([11,12,13,14,15,16,17,18,19,20]),PH=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],x2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},r1=new Set;Object.keys(a1[I]).map(r1.add.bind(r1));Object.keys(a1[W]).map(r1.add.bind(r1));var TH=[].concat(v4,o1(r1),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",x2.GROUP,x2.SWAP_OPACITY,x2.PRIMARY,x2.SECONDARY]).concat(f8.map(function(c){return"".concat(c,"x")})).concat(_H.map(function(c){return"w-".concat(c)})),Y2=d2.FontAwesomeConfig||{};function BH(c){var a=j.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function FH(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}if(j&&typeof j.querySelector=="function"){var DH=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];DH.forEach(function(c){var a=o4(c,2),e=a[0],r=a[1],s=FH(BH(e));s!=null&&(Y2[r]=s)})}var v8={styleDefault:"solid",familyDefault:"classic",cssPrefix:i8,replacementClass:o8,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Y2.familyPrefix&&(Y2.cssPrefix=Y2.familyPrefix);var U2=C(C({},v8),Y2);U2.autoReplaceSvg||(U2.observeMutations=!1);var N={};Object.keys(v8).forEach(function(c){Object.defineProperty(N,c,{enumerable:!0,set:function(e){U2[c]=e,K2.forEach(function(r){return r(N)})},get:function(){return U2[c]}})});Object.defineProperty(N,"familyPrefix",{enumerable:!0,set:function(a){U2.cssPrefix=a,K2.forEach(function(e){return e(N)})},get:function(){return U2.cssPrefix}});d2.FontAwesomeConfig=N;var K2=[];function $H(c){return K2.push(c),function(){K2.splice(K2.indexOf(c),1)}}var p2=_3,s2={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function RH(c){if(!(!c||!h2)){var a=j.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var e=j.head.childNodes,r=null,s=e.length-1;s>-1;s--){var n=e[s],i=(n.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(r=n)}return j.head.insertBefore(a,r),c}}var EH="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function s1(){for(var c=12,a="";c-- >0;)a+=EH[Math.random()*62|0];return a}function j2(c){for(var a=[],e=(c||[]).length>>>0;e--;)a[e]=c[e];return a}function m4(c){return c.classList?j2(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function m8(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function UH(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,'="').concat(m8(c[e]),'" ')},"").trim()}function j1(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,": ").concat(c[e].trim(),";")},"")}function u4(c){return c.size!==s2.size||c.x!==s2.x||c.y!==s2.y||c.rotate!==s2.rotate||c.flipX||c.flipY}function OH(c){var a=c.transform,e=c.containerWidth,r=c.iconWidth,s={transform:"translate(".concat(e/2," 256)")},n="translate(".concat(a.x*32,", ").concat(a.y*32,") "),i="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),o="rotate(".concat(a.rotate," 0 0)"),l={transform:"".concat(n," ").concat(i," ").concat(o)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:s,inner:l,path:f}}function IH(c){var a=c.transform,e=c.width,r=e===void 0?_3:e,s=c.height,n=s===void 0?_3:s,i=c.startCentered,o=i===void 0?!1:i,l="";return o&&n8?l+="translate(".concat(a.x/p2-r/2,"em, ").concat(a.y/p2-n/2,"em) "):o?l+="translate(calc(-50% + ".concat(a.x/p2,"em), calc(-50% + ").concat(a.y/p2,"em)) "):l+="translate(".concat(a.x/p2,"em, ").concat(a.y/p2,"em) "),l+="scale(".concat(a.size/p2*(a.flipX?-1:1),", ").concat(a.size/p2*(a.flipY?-1:1),") "),l+="rotate(".concat(a.rotate,"deg) "),l}var jH=`:root, :host {
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
}`;function u8(){var c=i8,a=o8,e=N.cssPrefix,r=N.replacementClass,s=jH;if(e!==c||r!==a){var n=new RegExp("\\.".concat(c,"\\-"),"g"),i=new RegExp("\\--".concat(c,"\\-"),"g"),o=new RegExp("\\.".concat(a),"g");s=s.replace(n,".".concat(e,"-")).replace(i,"--".concat(e,"-")).replace(o,".".concat(r))}return s}var j6=!1;function h3(){N.autoAddCss&&!j6&&(RH(u8()),j6=!0)}var qH={mixout:function(){return{dom:{css:u8,insertCss:h3}}},hooks:function(){return{beforeDOMElementCreation:function(){h3()},beforeI2svg:function(){h3()}}}},m2=d2||{};m2[v2]||(m2[v2]={});m2[v2].styles||(m2[v2].styles={});m2[v2].hooks||(m2[v2].hooks={});m2[v2].shims||(m2[v2].shims=[]);var a2=m2[v2],H8=[],WH=function c(){j.removeEventListener("DOMContentLoaded",c),P1=1,H8.map(function(a){return a()})},P1=!1;h2&&(P1=(j.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(j.readyState),P1||j.addEventListener("DOMContentLoaded",WH));function GH(c){h2&&(P1?setTimeout(c,0):H8.push(c))}function t1(c){var a=c.tag,e=c.attributes,r=e===void 0?{}:e,s=c.children,n=s===void 0?[]:s;return typeof c=="string"?m8(c):"<".concat(a," ").concat(UH(r),">").concat(n.map(t1).join(""),"</").concat(a,">")}function q6(c,a,e){if(c&&c[a]&&c[a][e])return{prefix:a,iconName:e,icon:c[a][e]}}var p3=function(a,e,r,s){var n=Object.keys(a),i=n.length,o=e,l,f,m;for(r===void 0?(l=1,m=a[n[0]]):(l=0,m=r);l<i;l++)f=n[l],m=o(m,a[f],f,a);return m};function XH(c){for(var a=[],e=0,r=c.length;e<r;){var s=c.charCodeAt(e++);if(s>=55296&&s<=56319&&e<r){var n=c.charCodeAt(e++);(n&64512)==56320?a.push(((s&1023)<<10)+(n&1023)+65536):(a.push(s),e--)}else a.push(s)}return a}function T3(c){var a=XH(c);return a.length===1?a[0].toString(16):null}function YH(c,a){var e=c.length,r=c.charCodeAt(a),s;return r>=55296&&r<=56319&&e>a+1&&(s=c.charCodeAt(a+1),s>=56320&&s<=57343)?(r-55296)*1024+s-56320+65536:r}function W6(c){return Object.keys(c).reduce(function(a,e){var r=c[e],s=!!r.icon;return s?a[r.iconName]=r.icon:a[e]=r,a},{})}function B3(c,a){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=e.skipHooks,s=r===void 0?!1:r,n=W6(a);typeof a2.hooks.addPack=="function"&&!s?a2.hooks.addPack(c,W6(a)):a2.styles[c]=C(C({},a2.styles[c]||{}),n),c==="fas"&&B3("fa",a)}var C1,L1,g1,D2=a2.styles,KH=a2.shims,QH=(C1={},X(C1,I,Object.values(e1[I])),X(C1,W,Object.values(e1[W])),C1),H4=null,z8={},h8={},p8={},V8={},d8={},ZH=(L1={},X(L1,I,Object.keys(c1[I])),X(L1,W,Object.keys(c1[W])),L1);function JH(c){return~TH.indexOf(c)}function cz(c,a){var e=a.split("-"),r=e[0],s=e.slice(1).join("-");return r===c&&s!==""&&!JH(s)?s:null}var M8=function(){var a=function(n){return p3(D2,function(i,o,l){return i[l]=p3(o,n,{}),i},{})};z8=a(function(s,n,i){if(n[3]&&(s[n[3]]=i),n[2]){var o=n[2].filter(function(l){return typeof l=="number"});o.forEach(function(l){s[l.toString(16)]=i})}return s}),h8=a(function(s,n,i){if(s[i]=i,n[2]){var o=n[2].filter(function(l){return typeof l=="string"});o.forEach(function(l){s[l]=i})}return s}),d8=a(function(s,n,i){var o=n[2];return s[i]=i,o.forEach(function(l){s[l]=i}),s});var e="far"in D2||N.autoFetchSvg,r=p3(KH,function(s,n){var i=n[0],o=n[1],l=n[2];return o==="far"&&!e&&(o="fas"),typeof i=="string"&&(s.names[i]={prefix:o,iconName:l}),typeof i=="number"&&(s.unicodes[i.toString(16)]={prefix:o,iconName:l}),s},{names:{},unicodes:{}});p8=r.names,V8=r.unicodes,H4=q1(N.styleDefault,{family:N.familyDefault})};$H(function(c){H4=q1(c.styleDefault,{family:N.familyDefault})});M8();function z4(c,a){return(z8[c]||{})[a]}function az(c,a){return(h8[c]||{})[a]}function N2(c,a){return(d8[c]||{})[a]}function C8(c){return p8[c]||{prefix:null,iconName:null}}function ez(c){var a=V8[c],e=z4("fas",c);return a||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function M2(){return H4}var h4=function(){return{prefix:null,iconName:null,rest:[]}};function q1(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.family,r=e===void 0?I:e,s=c1[r][c],n=a1[r][c]||a1[r][s],i=c in a2.styles?c:null;return n||i||null}var G6=(g1={},X(g1,I,Object.keys(e1[I])),X(g1,W,Object.keys(e1[W])),g1);function W1(c){var a,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.skipLookups,s=r===void 0?!1:r,n=(a={},X(a,I,"".concat(N.cssPrefix,"-").concat(I)),X(a,W,"".concat(N.cssPrefix,"-").concat(W)),a),i=null,o=I;(c.includes(n[I])||c.some(function(f){return G6[I].includes(f)}))&&(o=I),(c.includes(n[W])||c.some(function(f){return G6[W].includes(f)}))&&(o=W);var l=c.reduce(function(f,m){var H=cz(N.cssPrefix,m);if(D2[m]?(m=QH[o].includes(m)?SH[o][m]:m,i=m,f.prefix=m):ZH[o].indexOf(m)>-1?(i=m,f.prefix=q1(m,{family:o})):H?f.iconName=H:m!==N.replacementClass&&m!==n[I]&&m!==n[W]&&f.rest.push(m),!s&&f.prefix&&f.iconName){var V=i==="fa"?C8(f.iconName):{},d=N2(f.prefix,f.iconName);V.prefix&&(i=null),f.iconName=V.iconName||d||f.iconName,f.prefix=V.prefix||f.prefix,f.prefix==="far"&&!D2.far&&D2.fas&&!N.autoFetchSvg&&(f.prefix="fas")}return f},h4());return(c.includes("fa-brands")||c.includes("fab"))&&(l.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(l.prefix="fad"),!l.prefix&&o===W&&(D2.fass||N.autoFetchSvg)&&(l.prefix="fass",l.iconName=N2(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||i==="fa")&&(l.prefix=M2()||"fas"),l}var rz=function(){function c(){zH(this,c),this.definitions={}}return pH(c,[{key:"add",value:function(){for(var e=this,r=arguments.length,s=new Array(r),n=0;n<r;n++)s[n]=arguments[n];var i=s.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(o){e.definitions[o]=C(C({},e.definitions[o]||{}),i[o]),B3(o,i[o]);var l=e1[I][o];l&&B3(l,i[o]),M8()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,r){var s=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(s).map(function(n){var i=s[n],o=i.prefix,l=i.iconName,f=i.icon,m=f[2];e[o]||(e[o]={}),m.length>0&&m.forEach(function(H){typeof H=="string"&&(e[o][H]=f)}),e[o][l]=f}),e}}]),c}(),X6=[],$2={},R2={},sz=Object.keys(R2);function nz(c,a){var e=a.mixoutsTo;return X6=c,$2={},Object.keys(R2).forEach(function(r){sz.indexOf(r)===-1&&delete R2[r]}),X6.forEach(function(r){var s=r.mixout?r.mixout():{};if(Object.keys(s).forEach(function(i){typeof s[i]=="function"&&(e[i]=s[i]),_1(s[i])==="object"&&Object.keys(s[i]).forEach(function(o){e[i]||(e[i]={}),e[i][o]=s[i][o]})}),r.hooks){var n=r.hooks();Object.keys(n).forEach(function(i){$2[i]||($2[i]=[]),$2[i].push(n[i])})}r.provides&&r.provides(R2)}),e}function F3(c,a){for(var e=arguments.length,r=new Array(e>2?e-2:0),s=2;s<e;s++)r[s-2]=arguments[s];var n=$2[c]||[];return n.forEach(function(i){a=i.apply(null,[a].concat(r))}),a}function A2(c){for(var a=arguments.length,e=new Array(a>1?a-1:0),r=1;r<a;r++)e[r-1]=arguments[r];var s=$2[c]||[];s.forEach(function(n){n.apply(null,e)})}function u2(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return R2[c]?R2[c].apply(null,a):void 0}function D3(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,e=c.prefix||M2();if(a)return a=N2(e,a)||a,q6(L8.definitions,e,a)||q6(a2.styles,e,a)}var L8=new rz,iz=function(){N.autoReplaceSvg=!1,N.observeMutations=!1,A2("noAuto")},oz={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return h2?(A2("beforeI2svg",a),u2("pseudoElements2svg",a),u2("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot;N.autoReplaceSvg===!1&&(N.autoReplaceSvg=!0),N.observeMutations=!0,GH(function(){tz({autoReplaceSvgRoot:e}),A2("watch",a)})}},lz={icon:function(a){if(a===null)return null;if(_1(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:N2(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var e=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],r=q1(a[0]);return{prefix:r,iconName:N2(r,e)||e}}if(typeof a=="string"&&(a.indexOf("".concat(N.cssPrefix,"-"))>-1||a.match(yH))){var s=W1(a.split(" "),{skipLookups:!0});return{prefix:s.prefix||M2(),iconName:N2(s.prefix,s.iconName)||s.iconName}}if(typeof a=="string"){var n=M2();return{prefix:n,iconName:N2(n,a)||a}}}},J={noAuto:iz,config:N,dom:oz,parse:lz,library:L8,findIconDefinition:D3,toHtml:t1},tz=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot,r=e===void 0?j:e;(Object.keys(a2.styles).length>0||N.autoFetchSvg)&&h2&&N.autoReplaceSvg&&J.dom.i2svg({node:r})};function G1(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(r){return t1(r)})}}),Object.defineProperty(c,"node",{get:function(){if(h2){var r=j.createElement("div");return r.innerHTML=c.html,r.children}}}),c}function fz(c){var a=c.children,e=c.main,r=c.mask,s=c.attributes,n=c.styles,i=c.transform;if(u4(i)&&e.found&&!r.found){var o=e.width,l=e.height,f={x:o/l/2,y:.5};s.style=j1(C(C({},n),{},{"transform-origin":"".concat(f.x+i.x/16,"em ").concat(f.y+i.y/16,"em")}))}return[{tag:"svg",attributes:s,children:a}]}function vz(c){var a=c.prefix,e=c.iconName,r=c.children,s=c.attributes,n=c.symbol,i=n===!0?"".concat(a,"-").concat(N.cssPrefix,"-").concat(e):n;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:C(C({},s),{},{id:i}),children:r}]}]}function p4(c){var a=c.icons,e=a.main,r=a.mask,s=c.prefix,n=c.iconName,i=c.transform,o=c.symbol,l=c.title,f=c.maskId,m=c.titleId,H=c.extra,V=c.watchable,d=V===void 0?!1:V,M=r.found?r:e,w=M.width,_=M.height,g=s==="fak",b=[N.replacementClass,n?"".concat(N.cssPrefix,"-").concat(n):""].filter(function(c2){return H.classes.indexOf(c2)===-1}).filter(function(c2){return c2!==""||!!c2}).concat(H.classes).join(" "),T={children:[],attributes:C(C({},H.attributes),{},{"data-prefix":s,"data-icon":n,class:b,role:H.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(w," ").concat(_)})},E=g&&!~H.classes.indexOf("fa-fw")?{width:"".concat(w/_*16*.0625,"em")}:{};d&&(T.attributes[w2]=""),l&&(T.children.push({tag:"title",attributes:{id:T.attributes["aria-labelledby"]||"title-".concat(m||s1())},children:[l]}),delete T.attributes.title);var R=C(C({},T),{},{prefix:s,iconName:n,main:e,mask:r,maskId:f,transform:i,symbol:o,styles:C(C({},E),H.styles)}),$=r.found&&e.found?u2("generateAbstractMask",R)||{children:[],attributes:{}}:u2("generateAbstractIcon",R)||{children:[],attributes:{}},G=$.children,l2=$.attributes;return R.children=G,R.attributes=l2,o?vz(R):fz(R)}function Y6(c){var a=c.content,e=c.width,r=c.height,s=c.transform,n=c.title,i=c.extra,o=c.watchable,l=o===void 0?!1:o,f=C(C(C({},i.attributes),n?{title:n}:{}),{},{class:i.classes.join(" ")});l&&(f[w2]="");var m=C({},i.styles);u4(s)&&(m.transform=IH({transform:s,startCentered:!0,width:e,height:r}),m["-webkit-transform"]=m.transform);var H=j1(m);H.length>0&&(f.style=H);var V=[];return V.push({tag:"span",attributes:f,children:[a]}),n&&V.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),V}function mz(c){var a=c.content,e=c.title,r=c.extra,s=C(C(C({},r.attributes),e?{title:e}:{}),{},{class:r.classes.join(" ")}),n=j1(r.styles);n.length>0&&(s.style=n);var i=[];return i.push({tag:"span",attributes:s,children:[a]}),e&&i.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),i}var V3=a2.styles;function $3(c){var a=c[0],e=c[1],r=c.slice(4),s=o4(r,1),n=s[0],i=null;return Array.isArray(n)?i={tag:"g",attributes:{class:"".concat(N.cssPrefix,"-").concat(x2.GROUP)},children:[{tag:"path",attributes:{class:"".concat(N.cssPrefix,"-").concat(x2.SECONDARY),fill:"currentColor",d:n[0]}},{tag:"path",attributes:{class:"".concat(N.cssPrefix,"-").concat(x2.PRIMARY),fill:"currentColor",d:n[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:n}},{found:!0,width:a,height:e,icon:i}}var uz={found:!1,width:512,height:512};function Hz(c,a){!l8&&!N.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function R3(c,a){var e=a;return a==="fa"&&N.styleDefault!==null&&(a=M2()),new Promise(function(r,s){if(u2("missingIconAbstract"),e==="fa"){var n=C8(c)||{};c=n.iconName||c,a=n.prefix||a}if(c&&a&&V3[a]&&V3[a][c]){var i=V3[a][c];return r($3(i))}Hz(c,a),r(C(C({},uz),{},{icon:N.showMissingIcons&&c?u2("missingIconAbstract")||{}:{}}))})}var K6=function(){},E3=N.measurePerformance&&z1&&z1.mark&&z1.measure?z1:{mark:K6,measure:K6},W2='FA "6.5.1"',zz=function(a){return E3.mark("".concat(W2," ").concat(a," begins")),function(){return g8(a)}},g8=function(a){E3.mark("".concat(W2," ").concat(a," ends")),E3.measure("".concat(W2," ").concat(a),"".concat(W2," ").concat(a," begins"),"".concat(W2," ").concat(a," ends"))},V4={begin:zz,end:g8},S1=function(){};function Q6(c){var a=c.getAttribute?c.getAttribute(w2):null;return typeof a=="string"}function hz(c){var a=c.getAttribute?c.getAttribute(t4):null,e=c.getAttribute?c.getAttribute(f4):null;return a&&e}function pz(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(N.replacementClass)}function Vz(){if(N.autoReplaceSvg===!0)return y1.replace;var c=y1[N.autoReplaceSvg];return c||y1.replace}function dz(c){return j.createElementNS("http://www.w3.org/2000/svg",c)}function Mz(c){return j.createElement(c)}function b8(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.ceFn,r=e===void 0?c.tag==="svg"?dz:Mz:e;if(typeof c=="string")return j.createTextNode(c);var s=r(c.tag);Object.keys(c.attributes||[]).forEach(function(i){s.setAttribute(i,c.attributes[i])});var n=c.children||[];return n.forEach(function(i){s.appendChild(b8(i,{ceFn:r}))}),s}function Cz(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var y1={replace:function(a){var e=a[0];if(e.parentNode)if(a[1].forEach(function(s){e.parentNode.insertBefore(b8(s),e)}),e.getAttribute(w2)===null&&N.keepOriginalSource){var r=j.createComment(Cz(e));e.parentNode.replaceChild(r,e)}else e.remove()},nest:function(a){var e=a[0],r=a[1];if(~m4(e).indexOf(N.replacementClass))return y1.replace(a);var s=new RegExp("".concat(N.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var n=r[0].attributes.class.split(" ").reduce(function(o,l){return l===N.replacementClass||l.match(s)?o.toSvg.push(l):o.toNode.push(l),o},{toNode:[],toSvg:[]});r[0].attributes.class=n.toSvg.join(" "),n.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",n.toNode.join(" "))}var i=r.map(function(o){return t1(o)}).join(`
`);e.setAttribute(w2,""),e.innerHTML=i}};function Z6(c){c()}function x8(c,a){var e=typeof a=="function"?a:S1;if(c.length===0)e();else{var r=Z6;N.mutateApproach===NH&&(r=d2.requestAnimationFrame||Z6),r(function(){var s=Vz(),n=V4.begin("mutate");c.map(s),n(),e()})}}var d4=!1;function N8(){d4=!0}function U3(){d4=!1}var T1=null;function J6(c){if(O6&&N.observeMutations){var a=c.treeCallback,e=a===void 0?S1:a,r=c.nodeCallback,s=r===void 0?S1:r,n=c.pseudoElementsCallback,i=n===void 0?S1:n,o=c.observeMutationsRoot,l=o===void 0?j:o;T1=new O6(function(f){if(!d4){var m=M2();j2(f).forEach(function(H){if(H.type==="childList"&&H.addedNodes.length>0&&!Q6(H.addedNodes[0])&&(N.searchPseudoElements&&i(H.target),e(H.target)),H.type==="attributes"&&H.target.parentNode&&N.searchPseudoElements&&i(H.target.parentNode),H.type==="attributes"&&Q6(H.target)&&~PH.indexOf(H.attributeName))if(H.attributeName==="class"&&hz(H.target)){var V=W1(m4(H.target)),d=V.prefix,M=V.iconName;H.target.setAttribute(t4,d||m),M&&H.target.setAttribute(f4,M)}else pz(H.target)&&s(H.target)})}}),h2&&T1.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Lz(){T1&&T1.disconnect()}function gz(c){var a=c.getAttribute("style"),e=[];return a&&(e=a.split(";").reduce(function(r,s){var n=s.split(":"),i=n[0],o=n.slice(1);return i&&o.length>0&&(r[i]=o.join(":").trim()),r},{})),e}function bz(c){var a=c.getAttribute("data-prefix"),e=c.getAttribute("data-icon"),r=c.innerText!==void 0?c.innerText.trim():"",s=W1(m4(c));return s.prefix||(s.prefix=M2()),a&&e&&(s.prefix=a,s.iconName=e),s.iconName&&s.prefix||(s.prefix&&r.length>0&&(s.iconName=az(s.prefix,c.innerText)||z4(s.prefix,T3(c.innerText))),!s.iconName&&N.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=c.firstChild.data)),s}function xz(c){var a=j2(c.attributes).reduce(function(s,n){return s.name!=="class"&&s.name!=="style"&&(s[n.name]=n.value),s},{}),e=c.getAttribute("title"),r=c.getAttribute("data-fa-title-id");return N.autoA11y&&(e?a["aria-labelledby"]="".concat(N.replacementClass,"-title-").concat(r||s1()):(a["aria-hidden"]="true",a.focusable="false")),a}function Nz(){return{iconName:null,title:null,titleId:null,prefix:null,transform:s2,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function c0(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=bz(c),r=e.iconName,s=e.prefix,n=e.rest,i=xz(c),o=F3("parseNodeAttributes",{},c),l=a.styleParser?gz(c):[];return C({iconName:r,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:s,transform:s2,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:n,styles:l,attributes:i}},o)}var kz=a2.styles;function k8(c){var a=N.autoReplaceSvg==="nest"?c0(c,{styleParser:!1}):c0(c);return~a.extra.classes.indexOf(t8)?u2("generateLayersText",c,a):u2("generateSvgReplacementMutation",c,a)}var C2=new Set;v4.map(function(c){C2.add("fa-".concat(c))});Object.keys(c1[I]).map(C2.add.bind(C2));Object.keys(c1[W]).map(C2.add.bind(C2));C2=o1(C2);function a0(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!h2)return Promise.resolve();var e=j.documentElement.classList,r=function(H){return e.add("".concat(I6,"-").concat(H))},s=function(H){return e.remove("".concat(I6,"-").concat(H))},n=N.autoFetchSvg?C2:v4.map(function(m){return"fa-".concat(m)}).concat(Object.keys(kz));n.includes("fa")||n.push("fa");var i=[".".concat(t8,":not([").concat(w2,"])")].concat(n.map(function(m){return".".concat(m,":not([").concat(w2,"])")})).join(", ");if(i.length===0)return Promise.resolve();var o=[];try{o=j2(c.querySelectorAll(i))}catch{}if(o.length>0)r("pending"),s("complete");else return Promise.resolve();var l=V4.begin("onTree"),f=o.reduce(function(m,H){try{var V=k8(H);V&&m.push(V)}catch(d){l8||d.name==="MissingIcon"&&console.error(d)}return m},[]);return new Promise(function(m,H){Promise.all(f).then(function(V){x8(V,function(){r("active"),r("complete"),s("pending"),typeof a=="function"&&a(),l(),m()})}).catch(function(V){l(),H(V)})})}function Sz(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;k8(c).then(function(e){e&&x8([e],a)})}function yz(c){return function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(a||{}).icon?a:D3(a||{}),s=e.mask;return s&&(s=(s||{}).icon?s:D3(s||{})),c(r,C(C({},e),{},{mask:s}))}}var wz=function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,s=r===void 0?s2:r,n=e.symbol,i=n===void 0?!1:n,o=e.mask,l=o===void 0?null:o,f=e.maskId,m=f===void 0?null:f,H=e.title,V=H===void 0?null:H,d=e.titleId,M=d===void 0?null:d,w=e.classes,_=w===void 0?[]:w,g=e.attributes,b=g===void 0?{}:g,T=e.styles,E=T===void 0?{}:T;if(a){var R=a.prefix,$=a.iconName,G=a.icon;return G1(C({type:"icon"},a),function(){return A2("beforeDOMElementCreation",{iconDefinition:a,params:e}),N.autoA11y&&(V?b["aria-labelledby"]="".concat(N.replacementClass,"-title-").concat(M||s1()):(b["aria-hidden"]="true",b.focusable="false")),p4({icons:{main:$3(G),mask:l?$3(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:R,iconName:$,transform:C(C({},s2),s),symbol:i,title:V,maskId:m,titleId:M,extra:{attributes:b,styles:E,classes:_}})})}},Az={mixout:function(){return{icon:yz(wz)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=a0,e.nodeCallback=Sz,e}}},provides:function(a){a.i2svg=function(e){var r=e.node,s=r===void 0?j:r,n=e.callback,i=n===void 0?function(){}:n;return a0(s,i)},a.generateSvgReplacementMutation=function(e,r){var s=r.iconName,n=r.title,i=r.titleId,o=r.prefix,l=r.transform,f=r.symbol,m=r.mask,H=r.maskId,V=r.extra;return new Promise(function(d,M){Promise.all([R3(s,o),m.iconName?R3(m.iconName,m.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(w){var _=o4(w,2),g=_[0],b=_[1];d([e,p4({icons:{main:g,mask:b},prefix:o,iconName:s,transform:l,symbol:f,maskId:H,title:n,titleId:i,extra:V,watchable:!0})])}).catch(M)})},a.generateAbstractIcon=function(e){var r=e.children,s=e.attributes,n=e.main,i=e.transform,o=e.styles,l=j1(o);l.length>0&&(s.style=l);var f;return u4(i)&&(f=u2("generateAbstractTransformGrouping",{main:n,transform:i,containerWidth:n.width,iconWidth:n.width})),r.push(f||n.icon),{children:r,attributes:s}}}},_z={mixout:function(){return{layer:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.classes,n=s===void 0?[]:s;return G1({type:"layer"},function(){A2("beforeDOMElementCreation",{assembler:e,params:r});var i=[];return e(function(o){Array.isArray(o)?o.map(function(l){i=i.concat(l.abstract)}):i=i.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(N.cssPrefix,"-layers")].concat(o1(n)).join(" ")},children:i}]})}}}},Pz={mixout:function(){return{counter:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.title,n=s===void 0?null:s,i=r.classes,o=i===void 0?[]:i,l=r.attributes,f=l===void 0?{}:l,m=r.styles,H=m===void 0?{}:m;return G1({type:"counter",content:e},function(){return A2("beforeDOMElementCreation",{content:e,params:r}),mz({content:e.toString(),title:n,extra:{attributes:f,styles:H,classes:["".concat(N.cssPrefix,"-layers-counter")].concat(o1(o))}})})}}}},Tz={mixout:function(){return{text:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.transform,n=s===void 0?s2:s,i=r.title,o=i===void 0?null:i,l=r.classes,f=l===void 0?[]:l,m=r.attributes,H=m===void 0?{}:m,V=r.styles,d=V===void 0?{}:V;return G1({type:"text",content:e},function(){return A2("beforeDOMElementCreation",{content:e,params:r}),Y6({content:e,transform:C(C({},s2),n),title:o,extra:{attributes:H,styles:d,classes:["".concat(N.cssPrefix,"-layers-text")].concat(o1(f))}})})}}},provides:function(a){a.generateLayersText=function(e,r){var s=r.title,n=r.transform,i=r.extra,o=null,l=null;if(n8){var f=parseInt(getComputedStyle(e).fontSize,10),m=e.getBoundingClientRect();o=m.width/f,l=m.height/f}return N.autoA11y&&!s&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,Y6({content:e.innerHTML,width:o,height:l,transform:n,title:s,extra:i,watchable:!0})])}}},Bz=new RegExp('"',"ug"),e0=[1105920,1112319];function Fz(c){var a=c.replace(Bz,""),e=YH(a,0),r=e>=e0[0]&&e<=e0[1],s=a.length===2?a[0]===a[1]:!1;return{value:T3(s?a[0]:a),isSecondary:r||s}}function r0(c,a){var e="".concat(xH).concat(a.replace(":","-"));return new Promise(function(r,s){if(c.getAttribute(e)!==null)return r();var n=j2(c.children),i=n.filter(function(G){return G.getAttribute(P3)===a})[0],o=d2.getComputedStyle(c,a),l=o.getPropertyValue("font-family").match(wH),f=o.getPropertyValue("font-weight"),m=o.getPropertyValue("content");if(i&&!l)return c.removeChild(i),r();if(l&&m!=="none"&&m!==""){var H=o.getPropertyValue("content"),V=~["Sharp"].indexOf(l[2])?W:I,d=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?a1[V][l[2].toLowerCase()]:AH[V][f],M=Fz(H),w=M.value,_=M.isSecondary,g=l[0].startsWith("FontAwesome"),b=z4(d,w),T=b;if(g){var E=ez(w);E.iconName&&E.prefix&&(b=E.iconName,d=E.prefix)}if(b&&!_&&(!i||i.getAttribute(t4)!==d||i.getAttribute(f4)!==T)){c.setAttribute(e,T),i&&c.removeChild(i);var R=Nz(),$=R.extra;$.attributes[P3]=a,R3(b,d).then(function(G){var l2=p4(C(C({},R),{},{icons:{main:G,mask:h4()},prefix:d,iconName:T,extra:$,watchable:!0})),c2=j.createElementNS("http://www.w3.org/2000/svg","svg");a==="::before"?c.insertBefore(c2,c.firstChild):c.appendChild(c2),c2.outerHTML=l2.map(function(is){return t1(is)}).join(`