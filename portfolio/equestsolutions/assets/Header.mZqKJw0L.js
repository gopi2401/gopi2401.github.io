import{j as i}from"./jsx-runtime.PRPpl5vZ.js";import{R as be,r as o}from"./index.RYns6xqu.js";import{c as C}from"./index.LIJsNB3v.js";import{d as we,t as Oe,s as L,e as Pe,f as me,o as ke,g as qe,h as Me,N as en,i as k,l as Ce,q as A,j as X,F as nn,u as tn,S as an,a as sn}from"./Nav.DDDF8_h2.js";import{E as rn,a as Se,b as ge,c as Be,P as ie,u as T}from"./Transition.D89dkZLT.js";import{R as on}from"./index.Cp7Odyem.js";import{a as ln,r as cn}from"./removeClass.D0mFdbeO.js";function G(...e){return e.filter(n=>n!=null).reduce((n,t)=>{if(typeof t!="function")throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return n===null?t:function(...s){n.apply(this,s),t.apply(this,s)}},null)}const dn={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function un(e,n){const t=`offset${e[0].toUpperCase()}${e.slice(1)}`,a=n[t],s=dn[e];return a+parseInt(L(n,s[0]),10)+parseInt(L(n,s[1]),10)}const fn={[rn]:"collapse",[Se]:"collapsing",[ge]:"collapsing",[Be]:"collapse show"},hn=be.forwardRef(({onEnter:e,onEntering:n,onEntered:t,onExit:a,onExiting:s,className:r,children:d,dimension:l="height",in:c=!1,timeout:u=300,mountOnEnter:f=!1,unmountOnExit:x=!1,appear:p=!1,getDimensionValue:y=un,...h},N)=>{const g=typeof l=="function"?l():l,j=o.useMemo(()=>G(m=>{m.style[g]="0"},e),[g,e]),O=o.useMemo(()=>G(m=>{const R=`scroll${g[0].toUpperCase()}${g.slice(1)}`;m.style[g]=`${m[R]}px`},n),[g,n]),w=o.useMemo(()=>G(m=>{m.style[g]=null},t),[g,t]),B=o.useMemo(()=>G(m=>{m.style[g]=`${y(g,m)}px`,Pe(m)},a),[a,y,g]),M=o.useMemo(()=>G(m=>{m.style[g]=null},s),[g,s]);return i.jsx(we,{ref:N,addEndListener:Oe,...h,"aria-expanded":h.role?c:null,onEnter:j,onEntering:O,onEntered:w,onExit:B,onExiting:M,childRef:d.ref,in:c,timeout:u,mountOnEnter:f,unmountOnExit:x,appear:p,children:(m,R)=>be.cloneElement(d,{...R,className:C(r,d.props.className,fn[m],g==="width"&&"collapse-horizontal")})})}),mn=e=>o.forwardRef((n,t)=>i.jsx("div",{...n,ref:t,className:C(n.className,e)}));function gn(){const e=o.useRef(!0),n=o.useRef(()=>e.current);return o.useEffect(()=>(e.current=!0,()=>{e.current=!1}),[]),n.current}function pn(e){const n=o.useRef(null);return o.useEffect(()=>{n.current=e}),n.current}const vn=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",xn=typeof document<"u",fe=xn||vn?o.useLayoutEffect:o.useEffect,En={"aria-label":ie.string,onClick:ie.func,variant:ie.oneOf(["white"])},pe=o.forwardRef(({className:e,variant:n,"aria-label":t="Close",...a},s)=>i.jsx("button",{ref:s,type:"button",className:C("btn-close",n&&`btn-close-${n}`,e),"aria-label":t,...a}));pe.displayName="CloseButton";pe.propTypes=En;function yn(e){const n=o.useRef(e);return n.current=e,n}function bn(e){const n=yn(e);o.useEffect(()=>()=>n.current(),[])}const $e=o.forwardRef(({bsPrefix:e,fluid:n=!1,as:t="div",className:a,...s},r)=>{const d=T(e,"container"),l=typeof n=="string"?`-${n}`:"-fluid";return i.jsx(t,{ref:r,...s,className:C(a,n?`${d}${l}`:d)})});$e.displayName="Container";function Ne(e,n){if(e.contains)return e.contains(n);if(e.compareDocumentPosition)return e===n||!!(e.compareDocumentPosition(n)&16)}const Le=o.createContext(me?window:void 0);Le.Provider;function ve(){return o.useContext(Le)}function le(e){e===void 0&&(e=ke());try{var n=e.activeElement;return!n||!n.nodeName?null:n}catch{return e.body}}function Cn(e=document){const n=e.defaultView;return Math.abs(n.innerWidth-e.documentElement.clientWidth)}const Re=qe("modal-open");class xe{constructor({ownerDocument:n,handleContainerOverflow:t=!0,isRTL:a=!1}={}){this.handleContainerOverflow=t,this.isRTL=a,this.modals=[],this.ownerDocument=n}getScrollbarWidth(){return Cn(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(n){}removeModalAttributes(n){}setContainerStyle(n){const t={overflow:"hidden"},a=this.isRTL?"paddingLeft":"paddingRight",s=this.getElement();n.style={overflow:s.style.overflow,[a]:s.style[a]},n.scrollBarWidth&&(t[a]=`${parseInt(L(s,a)||"0",10)+n.scrollBarWidth}px`),s.setAttribute(Re,""),L(s,t)}reset(){[...this.modals].forEach(n=>this.remove(n))}removeContainerStyle(n){const t=this.getElement();t.removeAttribute(Re),Object.assign(t.style,n.style)}add(n){let t=this.modals.indexOf(n);return t!==-1||(t=this.modals.length,this.modals.push(n),this.setModalAttributes(n),t!==0)||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),t}remove(n){const t=this.modals.indexOf(n);t!==-1&&(this.modals.splice(t,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(n))}isTopModal(n){return!!this.modals.length&&this.modals[this.modals.length-1]===n}}const ce=(e,n)=>me?e==null?(n||ke()).body:(typeof e=="function"&&(e=e()),e&&"current"in e&&(e=e.current),e&&("nodeType"in e||e.getBoundingClientRect)?e:null):null;function Nn(e,n){const t=ve(),[a,s]=o.useState(()=>ce(e,t?.document));if(!a){const r=ce(e);r&&s(r)}return o.useEffect(()=>{},[n,a]),o.useEffect(()=>{const r=ce(e);r!==a&&s(r)},[e,a]),a}function Rn(e){return e.code==="Escape"||e.keyCode===27}function jn(){const e=o.version.split(".");return{major:+e[0],minor:+e[1],patch:+e[2]}}const Tn=["onEnter","onEntering","onEntered","onExit","onExiting","onExited","addEndListener","children"];function wn(e,n){if(e==null)return{};var t={},a=Object.keys(e),s,r;for(r=0;r<a.length;r++)s=a[r],!(n.indexOf(s)>=0)&&(t[s]=e[s]);return t}function On(e){let{onEnter:n,onEntering:t,onEntered:a,onExit:s,onExiting:r,onExited:d,addEndListener:l,children:c}=e,u=wn(e,Tn);const{major:f}=jn(),x=f>=19?c.props.ref:c.ref,p=o.useRef(null),y=Me(p,typeof c=="function"?null:x),h=m=>R=>{m&&p.current&&m(p.current,R)},N=o.useCallback(h(n),[n]),g=o.useCallback(h(t),[t]),j=o.useCallback(h(a),[a]),O=o.useCallback(h(s),[s]),w=o.useCallback(h(r),[r]),B=o.useCallback(h(d),[d]),M=o.useCallback(h(l),[l]);return Object.assign({},u,{nodeRef:p},n&&{onEnter:N},t&&{onEntering:g},a&&{onEntered:j},s&&{onExit:O},r&&{onExiting:w},d&&{onExited:B},l&&{addEndListener:M},{children:typeof c=="function"?(m,R)=>c(m,Object.assign({},R,{ref:y})):o.cloneElement(c,{ref:y})})}const kn=["component"];function Mn(e,n){if(e==null)return{};var t={},a=Object.keys(e),s,r;for(r=0;r<a.length;r++)s=a[r],!(n.indexOf(s)>=0)&&(t[s]=e[s]);return t}const Sn=o.forwardRef((e,n)=>{let{component:t}=e,a=Mn(e,kn);const s=On(a);return i.jsx(t,Object.assign({ref:n},s))});function Bn({in:e,onTransition:n}){const t=o.useRef(null),a=o.useRef(!0),s=k(n);return fe(()=>{if(!t.current)return;let r=!1;return s({in:e,element:t.current,initial:a.current,isStale:()=>r}),()=>{r=!0}},[e,s]),fe(()=>(a.current=!1,()=>{a.current=!0}),[]),t}function $n({children:e,in:n,onExited:t,onEntered:a,transition:s}){const[r,d]=o.useState(!n);n&&r&&d(!1);const l=Bn({in:!!n,onTransition:u=>{const f=()=>{u.isStale()||(u.in?a?.(u.element,u.initial):(d(!0),t?.(u.element)))};Promise.resolve(s(u)).then(f,x=>{throw u.in||d(!0),x})}}),c=Me(l,e.ref);return r&&!n?null:o.cloneElement(e,{ref:c})}function je(e,n,t){return e?i.jsx(Sn,Object.assign({},t,{component:e})):n?i.jsx($n,Object.assign({},t,{transition:n})):i.jsx(en,Object.assign({},t))}const Ln=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function Dn(e,n){if(e==null)return{};var t={},a=Object.keys(e),s,r;for(r=0;r<a.length;r++)s=a[r],!(n.indexOf(s)>=0)&&(t[s]=e[s]);return t}let de;function An(e){return de||(de=new xe({ownerDocument:e?.document})),de}function Fn(e){const n=ve(),t=e||An(n),a=o.useRef({dialog:null,backdrop:null});return Object.assign(a.current,{add:()=>t.add(a.current),remove:()=>t.remove(a.current),isTopModal:()=>t.isTopModal(a.current),setDialogRef:o.useCallback(s=>{a.current.dialog=s},[]),setBackdropRef:o.useCallback(s=>{a.current.backdrop=s},[])})}const De=o.forwardRef((e,n)=>{let{show:t=!1,role:a="dialog",className:s,style:r,children:d,backdrop:l=!0,keyboard:c=!0,onBackdropClick:u,onEscapeKeyDown:f,transition:x,runTransition:p,backdropTransition:y,runBackdropTransition:h,autoFocus:N=!0,enforceFocus:g=!0,restoreFocus:j=!0,restoreFocusOptions:O,renderDialog:w,renderBackdrop:B=v=>i.jsx("div",Object.assign({},v)),manager:M,container:m,onShow:R,onHide:I=()=>{},onExit:z,onExited:Q,onExiting:q,onEnter:ee,onEntering:W,onEntered:Y}=e,V=Dn(e,Ln);const S=ve(),$=Nn(m),E=Fn(M),ne=gn(),te=pn(t),[H,Z]=o.useState(!t),D=o.useRef(null);o.useImperativeHandle(n,()=>E,[E]),me&&!te&&t&&(D.current=le(S?.document)),t&&H&&Z(!1);const _=k(()=>{if(E.add(),se.current=Ce(document,"keydown",Ze),ae.current=Ce(document,"focus",()=>setTimeout(K),!0),R&&R(),N){var v,ye;const oe=le((v=(ye=E.dialog)==null?void 0:ye.ownerDocument)!=null?v:S?.document);E.dialog&&oe&&!Ne(E.dialog,oe)&&(D.current=oe,E.dialog.focus())}}),b=k(()=>{if(E.remove(),se.current==null||se.current(),ae.current==null||ae.current(),j){var v;(v=D.current)==null||v.focus==null||v.focus(O),D.current=null}});o.useEffect(()=>{!t||!$||_()},[t,$,_]),o.useEffect(()=>{H&&b()},[H,b]),bn(()=>{b()});const K=k(()=>{if(!g||!ne()||!E.isTopModal())return;const v=le(S?.document);E.dialog&&v&&!Ne(E.dialog,v)&&E.dialog.focus()}),Ve=k(v=>{v.target===v.currentTarget&&(u?.(v),l===!0&&I())}),Ze=k(v=>{c&&Rn(v)&&E.isTopModal()&&(f?.(v),v.defaultPrevented||I())}),ae=o.useRef(),se=o.useRef(),Je=(...v)=>{Z(!0),Q?.(...v)};if(!$)return null;const Ee=Object.assign({role:a,ref:E.setDialogRef,"aria-modal":a==="dialog"?!0:void 0},V,{style:r,className:s,tabIndex:-1});let re=w?w(Ee):i.jsx("div",Object.assign({},Ee,{children:o.cloneElement(d,{role:"document"})}));re=je(x,p,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!t,onExit:z,onExiting:q,onExited:Je,onEnter:ee,onEntering:W,onEntered:Y,children:re});let J=null;return l&&(J=B({ref:E.setBackdropRef,onClick:Ve}),J=je(y,h,{in:!!t,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:J})),i.jsx(i.Fragment,{children:on.createPortal(i.jsxs(i.Fragment,{children:[J,re]}),$)})});De.displayName="Modal";const In=Object.assign(De,{Manager:xe}),F={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class Ae extends xe{adjustAndStore(n,t,a){const s=t.style[n];t.dataset[n]=s,L(t,{[n]:`${parseFloat(L(t,n))+a}px`})}restore(n,t){const a=t.dataset[n];a!==void 0&&(delete t.dataset[n],L(t,{[n]:a}))}setContainerStyle(n){super.setContainerStyle(n);const t=this.getElement();if(ln(t,"modal-open"),!n.scrollBarWidth)return;const a=this.isRTL?"paddingLeft":"paddingRight",s=this.isRTL?"marginLeft":"marginRight";A(t,F.FIXED_CONTENT).forEach(r=>this.adjustAndStore(a,r,n.scrollBarWidth)),A(t,F.STICKY_CONTENT).forEach(r=>this.adjustAndStore(s,r,-n.scrollBarWidth)),A(t,F.NAVBAR_TOGGLER).forEach(r=>this.adjustAndStore(s,r,n.scrollBarWidth))}removeContainerStyle(n){super.removeContainerStyle(n);const t=this.getElement();cn(t,"modal-open");const a=this.isRTL?"paddingLeft":"paddingRight",s=this.isRTL?"marginLeft":"marginRight";A(t,F.FIXED_CONTENT).forEach(r=>this.restore(a,r)),A(t,F.STICKY_CONTENT).forEach(r=>this.restore(s,r)),A(t,F.NAVBAR_TOGGLER).forEach(r=>this.restore(s,r))}}let ue;function Wn(e){return ue||(ue=new Ae(e)),ue}const Fe=o.createContext({onHide(){}}),Hn=o.forwardRef(({closeLabel:e="Close",closeVariant:n,closeButton:t=!1,onHide:a,children:s,...r},d)=>{const l=o.useContext(Fe),c=k(()=>{l?.onHide(),a?.()});return i.jsxs("div",{ref:d,...r,children:[s,t&&i.jsx(pe,{"aria-label":e,variant:n,onClick:c})]})}),Ie=o.forwardRef(({bsPrefix:e,className:n,as:t,...a},s)=>{e=T(e,"navbar-brand");const r=t||(a.href?"a":"span");return i.jsx(r,{...a,ref:s,className:C(n,e)})});Ie.displayName="NavbarBrand";const We=o.forwardRef(({children:e,bsPrefix:n,...t},a)=>{n=T(n,"navbar-collapse");const s=o.useContext(X);return i.jsx(hn,{in:!!(s&&s.expanded),...t,children:i.jsx("div",{ref:a,className:n,children:e})})});We.displayName="NavbarCollapse";const He=o.forwardRef(({bsPrefix:e,className:n,children:t,label:a="Toggle navigation",as:s="button",onClick:r,...d},l)=>{e=T(e,"navbar-toggler");const{onToggle:c,expanded:u}=o.useContext(X)||{},f=k(x=>{r&&r(x),c&&c()});return s==="button"&&(d.type="button"),i.jsx(s,{...d,ref:l,onClick:f,"aria-label":a,className:C(n,e,!u&&"collapsed"),children:t||i.jsx("span",{className:`${e}-icon`})})});He.displayName="NavbarToggle";const he=new WeakMap,Te=(e,n)=>{if(!e||!n)return;const t=he.get(n)||new Map;he.set(n,t);let a=t.get(e);return a||(a=n.matchMedia(e),a.refCount=0,t.set(a.media,a)),a};function _n(e,n=typeof window>"u"?void 0:window){const t=Te(e,n),[a,s]=o.useState(()=>t?t.matches:!1);return fe(()=>{let r=Te(e,n);if(!r)return s(!1);let d=he.get(n);const l=()=>{s(r.matches)};return r.refCount++,r.addListener(l),l(),()=>{r.removeListener(l),r.refCount--,r.refCount<=0&&d?.delete(r.media),r=void 0}},[e]),a}function Kn(e){const n=Object.keys(e);function t(l,c){return l===c?c:l?`${l} and ${c}`:c}function a(l){return n[Math.min(n.indexOf(l)+1,n.length-1)]}function s(l){const c=a(l);let u=e[c];return typeof u=="number"?u=`${u-.2}px`:u=`calc(${u} - 0.2px)`,`(max-width: ${u})`}function r(l){let c=e[l];return typeof c=="number"&&(c=`${c}px`),`(min-width: ${c})`}function d(l,c,u){let f;typeof l=="object"?(f=l,u=c,c=!0):(c=c||!0,f={[l]:c});let x=o.useMemo(()=>Object.entries(f).reduce((p,[y,h])=>((h==="up"||h===!0)&&(p=t(p,r(y))),(h==="down"||h===!0)&&(p=t(p,s(y))),p),""),[JSON.stringify(f)]);return _n(x,u)}return d}const Gn=Kn({xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1400}),_e=o.forwardRef(({className:e,bsPrefix:n,as:t="div",...a},s)=>(n=T(n,"offcanvas-body"),i.jsx(t,{ref:s,className:C(e,n),...a})));_e.displayName="OffcanvasBody";const Un={[ge]:"show",[Be]:"show"},Ke=o.forwardRef(({bsPrefix:e,className:n,children:t,in:a=!1,mountOnEnter:s=!1,unmountOnExit:r=!1,appear:d=!1,...l},c)=>(e=T(e,"offcanvas"),i.jsx(we,{ref:c,addEndListener:Oe,in:a,mountOnEnter:s,unmountOnExit:r,appear:d,...l,childRef:t.ref,children:(u,f)=>o.cloneElement(t,{...f,className:C(n,t.props.className,(u===ge||u===Se)&&`${e}-toggling`,Un[u])})})));Ke.displayName="OffcanvasToggling";const Ge=o.forwardRef(({bsPrefix:e,className:n,closeLabel:t="Close",closeButton:a=!1,...s},r)=>(e=T(e,"offcanvas-header"),i.jsx(Hn,{ref:r,...s,className:C(n,e),closeLabel:t,closeButton:a})));Ge.displayName="OffcanvasHeader";const Xn=mn("h5"),Ue=o.forwardRef(({className:e,bsPrefix:n,as:t=Xn,...a},s)=>(n=T(n,"offcanvas-title"),i.jsx(t,{ref:s,className:C(e,n),...a})));Ue.displayName="OffcanvasTitle";function zn(e){return i.jsx(Ke,{...e})}function Qn(e){return i.jsx(nn,{...e})}const Xe=o.forwardRef(({bsPrefix:e,className:n,children:t,"aria-labelledby":a,placement:s="start",responsive:r,show:d=!1,backdrop:l=!0,keyboard:c=!0,scroll:u=!1,onEscapeKeyDown:f,onShow:x,onHide:p,container:y,autoFocus:h=!0,enforceFocus:N=!0,restoreFocus:g=!0,restoreFocusOptions:j,onEntered:O,onExit:w,onExiting:B,onEnter:M,onEntering:m,onExited:R,backdropClassName:I,manager:z,renderStaticNode:Q=!1,...q},ee)=>{const W=o.useRef();e=T(e,"offcanvas");const{onToggle:Y}=o.useContext(X)||{},[V,S]=o.useState(!1),$=Gn(r||"xs","up");o.useEffect(()=>{S(r?d&&!$:d)},[d,r,$]);const E=k(()=>{Y?.(),p?.()}),ne=o.useMemo(()=>({onHide:E}),[E]);function te(){return z||(u?(W.current||(W.current=new Ae({handleContainerOverflow:!1})),W.current):Wn())}const H=(b,...K)=>{b&&(b.style.visibility="visible"),M?.(b,...K)},Z=(b,...K)=>{b&&(b.style.visibility=""),R?.(...K)},D=o.useCallback(b=>i.jsx("div",{...b,className:C(`${e}-backdrop`,I)}),[I,e]),_=b=>i.jsx("div",{...b,...q,className:C(n,r?`${e}-${r}`:e,`${e}-${s}`),"aria-labelledby":a,children:t});return i.jsxs(i.Fragment,{children:[!V&&(r||Q)&&_({}),i.jsx(Fe.Provider,{value:ne,children:i.jsx(In,{show:V,ref:ee,backdrop:l,container:y,keyboard:c,autoFocus:h,enforceFocus:N&&!u,restoreFocus:g,restoreFocusOptions:j,onEscapeKeyDown:f,onShow:x,onHide:E,onEnter:H,onEntering:m,onEntered:O,onExit:w,onExiting:B,onExited:Z,manager:te(),transition:zn,backdropTransition:Qn,renderBackdrop:D,renderDialog:_})})]})});Xe.displayName="Offcanvas";const Yn=Object.assign(Xe,{Body:_e,Header:Ge,Title:Ue}),ze=o.forwardRef((e,n)=>{const t=o.useContext(X);return i.jsx(Yn,{ref:n,show:!!(t!=null&&t.expanded),...e,renderStaticNode:!0})});ze.displayName="NavbarOffcanvas";const Qe=o.forwardRef(({className:e,bsPrefix:n,as:t="span",...a},s)=>(n=T(n,"navbar-text"),i.jsx(t,{ref:s,className:C(e,n),...a})));Qe.displayName="NavbarText";const Ye=o.forwardRef((e,n)=>{const{bsPrefix:t,expand:a=!0,variant:s="light",bg:r,fixed:d,sticky:l,className:c,as:u="nav",expanded:f,onToggle:x,onSelect:p,collapseOnSelect:y=!1,...h}=tn(e,{expanded:"onToggle"}),N=T(t,"navbar"),g=o.useCallback((...w)=>{p?.(...w),y&&f&&x?.(!1)},[p,y,f,x]);h.role===void 0&&u!=="nav"&&(h.role="navigation");let j=`${N}-expand`;typeof a=="string"&&(j=`${j}-${a}`);const O=o.useMemo(()=>({onToggle:()=>x?.(!f),bsPrefix:N,expanded:!!f,expand:a}),[N,f,a,x]);return i.jsx(X.Provider,{value:O,children:i.jsx(an.Provider,{value:g,children:i.jsx(u,{ref:n,...h,className:C(c,N,a&&j,s&&`${N}-${s}`,r&&`bg-${r}`,l&&`sticky-${l}`,d&&`fixed-${d}`)})})})});Ye.displayName="Navbar";const P=Object.assign(Ye,{Brand:Ie,Collapse:We,Offcanvas:ze,Text:Qe,Toggle:He}),U="/portfolio/equestsolutions/",tt=()=>{const[e,n]=o.useState(0),[t,a]=o.useState(!1),[s,r]=o.useState(""),[d,l]=o.useState(Number),c=()=>{l(window.innerWidth)};return o.useEffect(()=>{window.addEventListener("resize",c()),a(!0),window.addEventListener("scroll",()=>{n(window.scrollY>50)})},[]),i.jsx(i.Fragment,{children:t&&i.jsx("header",{className:e?"header header-fixed":"header",children:i.jsx(P,{expanded:s,fixed:"top",children:i.jsxs($e,{children:[i.jsx(P.Brand,{children:i.jsx("a",{href:U+"/",children:i.jsx("img",{src:U+"/images/logo-large-1.png",alt:"eQuest Solutions",className:"img-fluid",width:150,height:78})})}),i.jsxs(P.Toggle,{onClick:()=>d<=991?r(s?"":"expanded"):!1,"aria-controls":"navbarScroll",children:[i.jsx("span",{}),i.jsx("span",{}),i.jsx("span",{})]}),i.jsx(P.Collapse,{id:"navbarScroll",children:i.jsxs(sn,{className:"ms-auto my-2 my-lg-0",style:{maxHeight:"calc(100vh - 85px)"},navbarScroll:!0,children:[i.jsx("a",{className:`nav-link ${({isActive:u})=>u?"active":""}`,onClick:()=>d<=991?r(s?"":"expanded"):!1,href:"/",children:"Home"}),i.jsx("a",{className:"nav-link",href:"/services",children:"Services"}),i.jsx("a",{className:"nav-link",href:U+"/about",onClick:()=>d<=991?r(s?"":"expanded"):!1,children:"About us"}),i.jsx("a",{className:"nav-link",href:U+"/blog",onClick:()=>d<=991?r(s?"":"expanded"):!1,children:"Blog"}),i.jsx("a",{rel:"noreferrer",href:"https://forms.gle/vZ2sduLBcvTeZ61L9",className:"nav-link",target:"_blank",children:"Careers"}),i.jsx("button",{href:U+"/contact",className:"header_btn_link",onClick:()=>d<=991?r(s?"":"expanded"):!1,children:"Contact Us"})]})})]})})})})};export{tt as default};
