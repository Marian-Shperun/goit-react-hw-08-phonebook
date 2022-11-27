"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[40],{8040:function(n,t,e){e.r(t),e.d(t,{default:function(){return bn}});var r,i=e(2791),a=e(9434),o=e(5971),s=e(8989),c=e(3691),l=e(7512),d=e(1421),u=e(168),h=e(8789).ZP.span(r||(r=(0,u.Z)(["\n  position: absolute;\n  top: 10px;\n  left: ","; ;\n"])),(function(n){return n.scroll>=100?"-1500px":"5px"})),v=e(184),f=function(n){var t=n.contacts,e=n.scroll,r=(0,a.I0)();return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("div",{style:{position:"relative",marginBottom:"10px"},children:[(0,v.jsx)("input",{type:"text",name:"filter",placeholder:"Find contacts by name",onChange:function(n){var t=n.target.value;r((0,l.bI)(t))}}),(0,v.jsx)(h,{scroll:e,children:(0,v.jsx)(d.Z,{sx:{mr:1,fontSize:18}})})]}),0===t().length&&(0,v.jsx)("b",{style:{display:"block",marginTop:"15px"},children:"Not found"})]})},m=e(4942),p=e(1048),g=e(2793),x=e(1184),y=e(5682),b=e(2982),j=e(4695),w=e(916),Z=e(2466),C=e(114),k=["sx"];function _(n){var t,e=n.sx,r=function(n){var t={systemProps:{},otherProps:{}};return Object.keys(n).forEach((function(e){C.Gc[e]?t.systemProps[e]=n[e]:t.otherProps[e]=n[e]})),t}((0,w.Z)(n,k)),i=r.systemProps,a=r.otherProps;return t=Array.isArray(e)?[i].concat((0,b.Z)(e)):"function"===typeof e?function(){var n=e.apply(void 0,arguments);return(0,Z.P)(n)?(0,j.Z)({},i,n):i}:(0,j.Z)({},i,e),(0,j.Z)({},a,{sx:t})}var S=e(6863),R=e(8929),F=["component","direction","spacing","divider","children"];function P(n,t){var e=i.Children.toArray(n).filter(Boolean);return e.reduce((function(n,r,a){return n.push(r),a<e.length-1&&n.push(i.cloneElement(t,{key:"separator-".concat(a)})),n}),[])}var N=(0,S.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(n,t){return[t.root]}})((function(n){var t=n.ownerState,e=n.theme,r=(0,g.Z)({display:"flex",flexDirection:"column"},(0,x.k9)({theme:e},(0,x.P$)({values:t.direction,breakpoints:e.breakpoints.values}),(function(n){return{flexDirection:n}})));if(t.spacing){var i=(0,y.hB)(e),a=Object.keys(e.breakpoints.values).reduce((function(n,e){return("object"===typeof t.spacing&&null!=t.spacing[e]||"object"===typeof t.direction&&null!=t.direction[e])&&(n[e]=!0),n}),{}),o=(0,x.P$)({values:t.direction,base:a}),s=(0,x.P$)({values:t.spacing,base:a});"object"===typeof o&&Object.keys(o).forEach((function(n,t,e){if(!o[n]){var r=t>0?o[e[t-1]]:"column";o[n]=r}}));r=(0,Z.Z)(r,(0,x.k9)({theme:e},s,(function(n,e){return{"& > :not(style) + :not(style)":(0,m.Z)({margin:0},"margin".concat((r=e?o[e]:t.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[r])),(0,y.NA)(i,n))};var r})))}return r=(0,x.dt)(e.breakpoints,r)})),M=i.forwardRef((function(n,t){var e=_((0,R.Z)({props:n,name:"MuiStack"})),r=e.component,i=void 0===r?"div":r,a=e.direction,o=void 0===a?"column":a,s=e.spacing,c=void 0===s?0:s,l=e.divider,d=e.children,u=(0,p.Z)(e,F),h={direction:o,spacing:c};return(0,v.jsx)(N,(0,g.Z)({as:i,ownerState:h,ref:t},u,{children:l?P(d,l):d}))})),L=M,A=e(8182),z=e(2554),B=e(4419);function O(n){return String(n).match(/[\d.\-+]*\s*(.*)/)[1]||""}function E(n){return parseFloat(n)}var T=e(2065),I=e(5878),D=e(1217);function H(n){return(0,D.Z)("MuiSkeleton",n)}(0,I.Z)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var X,$,q,G,K,W,J,V,Q=["animation","className","component","height","style","variant","width"],U=(0,z.F4)(K||(K=X||(X=(0,u.Z)(["\n  0% {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0.4;\n  }\n\n  100% {\n    opacity: 1;\n  }\n"])))),Y=(0,z.F4)(W||(W=$||($=(0,u.Z)(["\n  0% {\n    transform: translateX(-100%);\n  }\n\n  50% {\n    /* +0.5s of delay between each loop */\n    transform: translateX(100%);\n  }\n\n  100% {\n    transform: translateX(100%);\n  }\n"])))),nn=(0,S.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:function(n,t){var e=n.ownerState;return[t.root,t[e.variant],!1!==e.animation&&t[e.animation],e.hasChildren&&t.withChildren,e.hasChildren&&!e.width&&t.fitContent,e.hasChildren&&!e.height&&t.heightAuto]}})((function(n){var t=n.theme,e=n.ownerState,r=O(t.shape.borderRadius)||"px",i=E(t.shape.borderRadius);return(0,g.Z)({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:(0,T.Fq)(t.palette.text.primary,"light"===t.palette.mode?.11:.13),height:"1.2em"},"text"===e.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:"".concat(i).concat(r,"/").concat(Math.round(i/.6*10)/10).concat(r),"&:empty:before":{content:'"\\00a0"'}},"circular"===e.variant&&{borderRadius:"50%"},"rounded"===e.variant&&{borderRadius:(t.vars||t).shape.borderRadius},e.hasChildren&&{"& > *":{visibility:"hidden"}},e.hasChildren&&!e.width&&{maxWidth:"fit-content"},e.hasChildren&&!e.height&&{height:"auto"})}),(function(n){return"pulse"===n.ownerState.animation&&(0,z.iv)(J||(J=q||(q=(0,u.Z)(["\n      animation: "," 1.5s ease-in-out 0.5s infinite;\n    "]))),U)}),(function(n){var t=n.ownerState,e=n.theme;return"wave"===t.animation&&(0,z.iv)(V||(V=G||(G=(0,u.Z)(["\n      position: relative;\n      overflow: hidden;\n\n      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */\n      -webkit-mask-image: -webkit-radial-gradient(white, black);\n\n      &::after {\n        animation: "," 1.6s linear 0.5s infinite;\n        background: linear-gradient(\n          90deg,\n          transparent,\n          ",",\n          transparent\n        );\n        content: '';\n        position: absolute;\n        transform: translateX(-100%); /* Avoid flash during server-side hydration */\n        bottom: 0;\n        left: 0;\n        right: 0;\n        top: 0;\n      }\n    "]))),Y,(e.vars||e).palette.action.hover)})),tn=i.forwardRef((function(n,t){var e=(0,R.Z)({props:n,name:"MuiSkeleton"}),r=e.animation,i=void 0===r?"pulse":r,a=e.className,o=e.component,s=void 0===o?"span":o,c=e.height,l=e.style,d=e.variant,u=void 0===d?"text":d,h=e.width,f=(0,p.Z)(e,Q),m=(0,g.Z)({},e,{animation:i,component:s,variant:u,hasChildren:Boolean(f.children)}),x=function(n){var t=n.classes,e=n.variant,r=n.animation,i=n.hasChildren,a=n.width,o=n.height,s={root:["root",e,r,i&&"withChildren",i&&!a&&"fitContent",i&&!o&&"heightAuto"]};return(0,B.Z)(s,H,t)}(m);return(0,v.jsx)(nn,(0,g.Z)({as:s,ref:t,className:(0,A.Z)(x.root,a),ownerState:m},f,{style:(0,g.Z)({width:h,height:c},l)}))})),en=tn,rn=e(1108),an=e(104),on=e(886),sn=["className","component"];var cn=e(5902),ln=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=n.defaultTheme,e=n.defaultClassName,r=void 0===e?"MuiBox-root":e,a=n.generateClassName,o=n.styleFunctionSx,s=void 0===o?an.Z:o,c=(0,rn.ZP)("div",{shouldForwardProp:function(n){return"theme"!==n&&"sx"!==n&&"as"!==n}})(s),l=i.forwardRef((function(n,e){var i=(0,on.Z)(t),o=_(n),s=o.className,l=o.component,d=void 0===l?"div":l,u=(0,w.Z)(o,sn);return(0,v.jsx)(c,(0,j.Z)({as:d,ref:e,className:(0,A.Z)(s,a?a(r):r),theme:i},u))}));return l}({defaultTheme:(0,e(4360).Z)(),defaultClassName:"MuiBox-root",generateClassName:cn.Z.generate}),dn=ln,un=function(){return(0,v.jsx)("div",{style:{width:"100%"},children:(0,v.jsxs)(L,{spacing:1,children:[(0,v.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,v.jsx)(en,{variant:"circular",width:50,height:50}),(0,v.jsx)(en,{variant:"rectangular",width:"193px",height:20,sx:{mr:2,ml:2,borderRadius:1}}),(0,v.jsx)(en,{variant:"rectangular",width:"60px",height:30,sx:{borderRadius:1,ml:"auto"}})]}),(0,v.jsx)("div",{})]})})},hn=function(){return(0,v.jsx)(dn,{component:"p",style:{width:"fit-content"},children:(0,v.jsx)(en,{width:200,height:40,animation:"wave"})})},vn=e(5545),fn="ContactList_contactsList__7leRd",mn="ContactList_contacts-list__item__Dia28",pn="ContactList_contacts-list__number__gfhsF",gn=function(n){var t=n.visibleList,e=n.isLoading,r=(0,a.I0)();return(0,v.jsx)("ul",{className:fn,children:t.map((function(n){var t=n.id,i=n.name,a=n.number;return e?(0,v.jsx)("div",{children:(0,v.jsx)(un,{})},t):(0,v.jsxs)("li",{children:[(0,v.jsxs)("div",{className:mn,children:[(0,v.jsx)("span",{children:(0,v.jsx)(vn.Z,{size:"large"})}),(0,v.jsxs)("p",{style:{width:"90px",marginRight:"auto",marginLeft:"5px",overflow:"hidden"},children:[i,":"]}),(0,v.jsx)("a",{href:"tel:".concat(a),className:pn,children:a})]}),(0,v.jsx)("button",{type:"button",onClick:function(){return r((0,s.GK)(t))},children:"Delete"})]},t)}))})},xn=e(7750),yn=e(6353),bn=function(n){var t=n.contacts,e=n.isLoading,r=n.error,l=n.scroll,d=(0,c.a)(),u=d.isLoggedIn,h=d.user,m=(0,a.v9)(o.J),p=(0,a.I0)();(0,i.useEffect)((function(){u&&p((0,s.yF)())}),[p,u]);var g=function(){var n=m.toLowerCase();return t.filter((function(t){var e,r;return null===t||void 0===t||null===(e=t.name)||void 0===e||null===(r=e.toLowerCase())||void 0===r?void 0:r.includes(n)}))};return(0,v.jsx)(v.Fragment,{children:u?(0,v.jsxs)(v.Fragment,{children:[0===t.length?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("h2",{children:"Contacts"}),e?(0,v.jsx)(hn,{}):(0,v.jsx)(v.Fragment,{children:r?(0,v.jsx)("p",{style:{color:"red"},children:r}):(0,v.jsxs)("p",{children:["Hello ",h.name,". Contact list is empty to add contact Pressing on the button at the bottom"]})})]}):(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("h2",{style:{marginTop:0},children:"Contacts"}),(0,v.jsx)(f,{contacts:g,scroll:l})]}),(0,v.jsx)(gn,{isLoading:e,visibleList:""!==m?g():t}),t.length>0&&(0,v.jsxs)(yn.Kp,{children:[t.length," Contacts recorded"]})]}),(0,v.jsxs)(yn.Nj,{to:"/new-contact",title:"add new contact",children:[(0,v.jsx)("span",{children:(0,v.jsx)(xn.Z,{})}),(0,v.jsx)("span",{className:"btn-text",children:"Add new contact"})]})]}):(0,v.jsx)(yn.$d,{style:{textAlign:"center",color:"white"},children:"Welcome you in the phonebook, for your contacts!"})})}},2554:function(n,t,e){e.d(t,{F4:function(){return d},iv:function(){return l},xB:function(){return c}});var r=e(2791),i=(e(3361),e(9886)),a=(e(2110),e(5438)),o=e(9140),s=e(2561),c=(0,i.w)((function(n,t){var e=n.styles,c=(0,o.O)([e],void 0,(0,r.useContext)(i.T)),l=(0,r.useRef)();return(0,s.j)((function(){var n=t.key+"-global",e=new t.sheet.constructor({key:n,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),r=!1,i=document.querySelector('style[data-emotion="'+n+" "+c.name+'"]');return t.sheet.tags.length&&(e.before=t.sheet.tags[0]),null!==i&&(r=!0,i.setAttribute("data-emotion",n),e.hydrate([i])),l.current=[e,r],function(){e.flush()}}),[t]),(0,s.j)((function(){var n=l.current,e=n[0];if(n[1])n[1]=!1;else{if(void 0!==c.next&&(0,a.My)(t,c.next,!0),e.tags.length){var r=e.tags[e.tags.length-1].nextElementSibling;e.before=r,e.flush()}t.insert("",c,e,!1)}}),[t,c.name]),null}));function l(){for(var n=arguments.length,t=new Array(n),e=0;e<n;e++)t[e]=arguments[e];return(0,o.O)(t)}var d=function(){var n=l.apply(void 0,arguments),t="animation-"+n.name;return{name:t,styles:"@keyframes "+t+"{"+n.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}},5545:function(n,t,e){var r=e(1941);t.Z=void 0;var i=r(e(5649)),a=e(184),o=(0,i.default)((0,a.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20z"}),"AccountCircle");t.Z=o},7750:function(n,t,e){var r=e(1941);t.Z=void 0;var i=r(e(5649)),a=e(184),o=(0,i.default)((0,a.jsx)("path",{d:"M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"PersonAdd");t.Z=o},1421:function(n,t,e){var r=e(1941);t.Z=void 0;var i=r(e(5649)),a=e(184),o=(0,i.default)([(0,a.jsx)("circle",{cx:"10",cy:"8",r:"4"},"0"),(0,a.jsx)("path",{d:"M10.35 14.01C7.62 13.91 2 15.27 2 18v2h9.54c-2.47-2.76-1.23-5.89-1.19-5.99zm9.08 4.01c.36-.59.57-1.28.57-2.02 0-2.21-1.79-4-4-4s-4 1.79-4 4 1.79 4 4 4c.74 0 1.43-.22 2.02-.57L20.59 22 22 20.59l-2.57-2.57zM16 18c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"},"1")],"PersonSearch");t.Z=o}}]);
//# sourceMappingURL=40.b18445d5.chunk.js.map