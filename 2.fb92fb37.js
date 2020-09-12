/*! For license information please see 2.fb92fb37.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{100:function(e,t,a){"use strict";var n=a(0);t.a=function(e){void 0===e&&(e=!0),Object(n.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])}},101:function(e,t,a){"use strict";a.d(t,"b",(function(){return r}));var n=a(0),r={desktop:"desktop",mobile:"mobile"};t.a=function(){var e="undefined"!=typeof window;function t(){if(e)return window.innerWidth>996?r.desktop:r.mobile}var a=Object(n.useState)(t),o=a[0],c=a[1];return Object(n.useEffect)((function(){if(e)return window.addEventListener("resize",a),function(){return window.removeEventListener("resize",a)};function a(){c(t())}}),[]),o}},102:function(e,t,a){"use strict";var n=a(86),r=a(94),o=a(87),c=a(88);t.a=function(){var e=Object(n.a)().siteConfig,t=(e=void 0===e?{}:e).themeConfig,a=(t=void 0===t?{}:t).navbar,l=(a=void 0===a?{}:a).logo,i=void 0===l?{}:l,s=Object(r.a)().isDarkTheme,u=Object(o.a)(i.href||"/"),d={};i.target?d={target:i.target}:Object(c.a)(u)||(d={rel:"noopener noreferrer",target:"_blank"});var f=i.srcDark&&s?i.srcDark:i.src;return{logoLink:u,logoLinkProps:d,logoImageUrl:Object(o.a)(f),logoAlt:i.alt}}},103:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(93),c=a(86),l=a(87),i=a(9),s="light",u="dark",d=function(e){return e===u?u:s},f=function(){return i.a.canUseDOM?d(document.documentElement.getAttribute("data-theme")):s},m=function(e){try{localStorage.setItem("theme",d(e))}catch(t){console.error(t)}},h=function(){var e=Object(c.a)().siteConfig,t=(e=void 0===e?{}:e).themeConfig,a=(t=void 0===t?{}:t).colorMode,r=(a=void 0===a?{}:a).disableSwitch,o=void 0!==r&&r,l=Object(n.useState)(f),i=l[0],h=l[1],v=Object(n.useCallback)((function(){h(s),m(s)}),[]),b=Object(n.useCallback)((function(){h(u),m(u)}),[]);return Object(n.useEffect)((function(){document.documentElement.setAttribute("data-theme",d(i))}),[i]),Object(n.useEffect)((function(){if(!o)try{var e=localStorage.getItem("theme");null!==e&&h(d(e))}catch(t){console.error(t)}}),[h]),Object(n.useEffect)((function(){o||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;h(t?u:s)}))}),[]),{isDarkTheme:i===u,setLightTheme:v,setDarkTheme:b}},v=a(96);var b=function(e){var t=h(),a=t.isDarkTheme,n=t.setLightTheme,o=t.setDarkTheme;return r.a.createElement(v.a.Provider,{value:{isDarkTheme:a,setLightTheme:n,setDarkTheme:o}},e.children)},g=function(){var e=Object(n.useState)({}),t=e[0],a=e[1],r=Object(n.useCallback)((function(e,t){try{localStorage.setItem("docusaurus.tab."+e,t)}catch(a){console.error(a)}}),[]);return Object(n.useEffect)((function(){try{for(var e={},t=0;t<localStorage.length;t+=1){var n=localStorage.key(t);if(n.startsWith("docusaurus.tab."))e[n.substring("docusaurus.tab.".length)]=localStorage.getItem(n)}a(e)}catch(r){console.error(r)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){a((function(a){var n;return Object.assign({},a,((n={})[e]=t,n))})),r(e,t)}}},p=function(){var e=Object(c.a)().siteConfig.themeConfig.announcementBar,t=Object(n.useState)(!0),a=t[0],r=t[1],o=Object(n.useCallback)((function(){localStorage.setItem("docusaurus.announcement.dismiss","true"),r(!0)}),[]);return Object(n.useEffect)((function(){if(e){var t=e.id,a=localStorage.getItem("docusaurus.announcement.id");"annoucement-bar"===a&&(a="announcement-bar");var n=t!==a;localStorage.setItem("docusaurus.announcement.id",t),n&&localStorage.setItem("docusaurus.announcement.dismiss","false"),(n||"false"===localStorage.getItem("docusaurus.announcement.dismiss"))&&r(!1)}}),[]),{isAnnouncementBarClosed:a,closeAnnouncementBar:o}},k=a(97);var E=function(e){var t=g(),a=t.tabGroupChoices,n=t.setTabGroupChoices,o=p(),c=o.isAnnouncementBarClosed,l=o.closeAnnouncementBar;return r.a.createElement(k.a.Provider,{value:{tabGroupChoices:a,setTabGroupChoices:n,isAnnouncementBarClosed:c,closeAnnouncementBar:l}},e.children)},O=a(89),j=a(98),y=a(47),_=a.n(y);var w=function(){var e,t=Object(c.a)().siteConfig,a=(t=void 0===t?{}:t).themeConfig,n=(a=void 0===a?{}:a).announcementBar,o=void 0===n?{}:n,l=o.content,i=o.backgroundColor,s=o.textColor,u=o.isCloseable,d=Object(j.a)(),f=d.isAnnouncementBarClosed,m=d.closeAnnouncementBar;return!l||u&&f?null:r.a.createElement("div",{className:_.a.announcementBar,style:{backgroundColor:i,color:s},role:"banner"},r.a.createElement("div",{className:Object(O.a)(_.a.announcementBarContent,(e={},e[_.a.announcementBarCloseable]=u,e)),dangerouslySetInnerHTML:{__html:l}}),u?r.a.createElement("button",{type:"button",className:_.a.announcementBarClose,onClick:m,"aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")):null)},C=a(2),N=a(90),S=function(){return null},T=a(108),L=a.n(T),B=a(48),x=a.n(B),I=function(e){var t=e.icon,a=e.style;return r.a.createElement("span",{className:Object(O.a)(x.a.toggle,x.a.dark),style:a},t)},P=function(e){var t=e.icon,a=e.style;return r.a.createElement("span",{className:Object(O.a)(x.a.toggle,x.a.light),style:a},t)},D=function(e){var t=Object(c.a)(),a=t.siteConfig.themeConfig.colorMode.switchConfig,n=a.darkIcon,o=a.darkIconStyle,l=a.lightIcon,i=a.lightIconStyle,s=t.isClient;return r.a.createElement(L.a,Object(C.a)({disabled:!s,icons:{checked:r.a.createElement(I,{icon:n,style:o}),unchecked:r.a.createElement(P,{icon:l,style:i})}},e))},M=a(94),A=a(91);var X=function(e){var t=Object(n.useState)(e),a=t[0],r=t[1];return Object(n.useEffect)((function(){var e=function(){return r(window.location.hash)};return window.addEventListener("hashchange",e),function(){return window.removeEventListener("hashchange",e)}}),[]),[a,r]},F=a(99),U=function(e){var t=Object(n.useState)(!0),a=t[0],r=t[1],o=Object(n.useState)(!1),c=o[0],l=o[1],i=Object(n.useState)(0),s=i[0],u=i[1],d=Object(n.useState)(0),f=d[0],m=d[1],h=Object(n.useCallback)((function(e){null!==e&&m(e.getBoundingClientRect().height)}),[]),v=Object(A.useLocation)(),b=X(v.hash),g=b[0],p=b[1];return Object(F.a)((function(t){var a=t.scrollY;if(e&&(0===a&&r(!0),!(a<f))){if(c)return l(!1),r(!1),void u(a);var n=document.documentElement.scrollHeight-f,o=window.innerHeight;s&&a>=s?r(!1):a+o<n&&r(!0),u(a)}}),[s,f]),Object(n.useEffect)((function(){e&&(r(!0),p(v.hash))}),[v]),Object(n.useEffect)((function(){e&&g&&l(!0)}),[g]),{navbarRef:h,isNavbarVisible:a}},R=a(100),V=a(101),H=a(102),G=a(49),W=a.n(G),Y=a(6),K=a(95),z={default:function(){return K.a},docsVersion:function(){return a(113).default},docsVersionDropdown:function(){return a(117).default}};function J(e){var t=e.type,a=Object(Y.a)(e,["type"]),n=function(e){void 0===e&&(e="default");var t=z[e];if(!t)throw new Error("No NavbarItem component found for type="+e+".");return t()}(t);return r.a.createElement(n,a)}var q=function(){var e,t,a=Object(c.a)(),o=a.siteConfig.themeConfig,l=o.navbar,i=(l=void 0===l?{}:l).title,s=void 0===i?"":i,u=l.items,d=void 0===u?[]:u,f=l.hideOnScroll,m=void 0!==f&&f,h=o.colorMode,v=(h=void 0===h?{}:h).disableSwitch,b=void 0!==v&&v,g=a.isClient,p=Object(n.useState)(!1),k=p[0],E=p[1],j=Object(n.useState)(!1),y=j[0],_=j[1],w=Object(M.a)(),T=w.isDarkTheme,L=w.setLightTheme,B=w.setDarkTheme,x=U(m),I=x.navbarRef,P=x.isNavbarVisible,A=Object(H.a)(),X=A.logoLink,F=A.logoLinkProps,G=A.logoImageUrl,Y=A.logoAlt;Object(R.a)(k);var K=Object(n.useCallback)((function(){E(!0)}),[E]),z=Object(n.useCallback)((function(){E(!1)}),[E]),q=Object(n.useCallback)((function(e){return e.target.checked?B():L()}),[L,B]),Q=Object(V.a)();Object(n.useEffect)((function(){Q===V.b.desktop&&E(!1)}),[Q]);var Z=function(e){return{leftItems:e.filter((function(e){var t;return"left"===(null!==(t=e.position)&&void 0!==t?t:"right")})),rightItems:e.filter((function(e){var t;return"right"===(null!==(t=e.position)&&void 0!==t?t:"right")}))}}(d),$=Z.leftItems,ee=Z.rightItems;return r.a.createElement("nav",{ref:I,className:Object(O.a)("navbar","navbar--light","navbar--fixed-top",(e={"navbar-sidebar--show":k},e[W.a.navbarHideable]=m,e[W.a.navbarHidden]=!P,e))},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},null!=d&&0!==d.length&&r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:K,onKeyDown:K},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(N.a,Object(C.a)({className:"navbar__brand",to:X},F),null!=G&&r.a.createElement("img",{key:g,className:"navbar__logo",src:G,alt:Y}),null!=s&&r.a.createElement("strong",{className:Object(O.a)("navbar__title",(t={},t[W.a.hideLogoText]=y,t))},s)),$.map((function(e,t){return r.a.createElement(J,Object(C.a)({},e,{key:t}))}))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},ee.map((function(e,t){return r.a.createElement(J,Object(C.a)({},e,{key:t}))})),!b&&r.a.createElement(D,{className:W.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:T,onChange:q}),r.a.createElement(S,{handleSearchBarToggle:_,isSearchBarExpanded:y}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:z}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(N.a,Object(C.a)({className:"navbar__brand",onClick:z,to:X},F),null!=G&&r.a.createElement("img",{key:g,className:"navbar__logo",src:G,alt:Y}),null!=s&&r.a.createElement("strong",{className:"navbar__title"},s)),!b&&k&&r.a.createElement(D,{"aria-label":"Dark mode toggle in sidebar",checked:T,onChange:q})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},d.map((function(e,t){return r.a.createElement(J,Object(C.a)({mobile:!0},e,{onClick:z,key:t}))})))))))},Q=a(50),Z=a.n(Q);function $(e){var t=e.to,a=e.href,n=e.label,o=e.prependBaseUrlToHref,c=Object(Y.a)(e,["to","href","label","prependBaseUrlToHref"]),i=Object(l.a)(t),s=Object(l.a)(a,{forcePrependBaseUrl:!0});return r.a.createElement(N.a,Object(C.a)({className:"footer__link-item"},a?{target:"_blank",rel:"noopener noreferrer",href:o?s:a}:{to:i},c),n)}var ee=function(e){var t=e.url,a=e.alt;return r.a.createElement("img",{className:"footer__logo",alt:a,src:t})};var te=function(){var e=Object(c.a)().siteConfig,t=(void 0===e?{}:e).themeConfig,a=(void 0===t?{}:t).footer,n=a||{},o=n.copyright,i=n.links,s=void 0===i?[]:i,u=n.logo,d=void 0===u?{}:u,f=Object(l.a)(d.src);return a?r.a.createElement("footer",{className:Object(O.a)("footer",{"footer--dark":"dark"===a.style})},r.a.createElement("div",{className:"container"},s&&s.length>0&&r.a.createElement("div",{className:"row footer__links"},s.map((function(e,t){return r.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?r.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement($,e))}))):null)}))),(d||o)&&r.a.createElement("div",{className:"text--center"},d&&d.src&&r.a.createElement("div",{className:"margin-bottom--sm"},d.href?r.a.createElement("a",{href:d.href,target:"_blank",rel:"noopener noreferrer",className:Z.a.footerLogoLink},r.a.createElement(ee,{alt:d.alt,url:f})):r.a.createElement(ee,{alt:d.alt,url:f})),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:o}})))):null};a(51);function ae(e){var t=e.children;return r.a.createElement(b,null,r.a.createElement(E,null,t))}t.a=function(e){var t=Object(c.a)().siteConfig,a=void 0===t?{}:t,n=a.favicon,i=a.title,s=a.themeConfig.image,u=a.url,d=e.children,f=e.title,m=e.noFooter,h=e.description,v=e.image,b=e.keywords,g=e.permalink,p=f?f+" | "+i:i,k=v||s,E=Object(l.a)(k,{absolute:!0}),O=Object(l.a)(n);return r.a.createElement(ae,null,r.a.createElement(o.a,null,r.a.createElement("html",{lang:"en"}),p&&r.a.createElement("title",null,p),p&&r.a.createElement("meta",{property:"og:title",content:p}),n&&r.a.createElement("link",{rel:"shortcut icon",href:O}),h&&r.a.createElement("meta",{name:"description",content:h}),h&&r.a.createElement("meta",{property:"og:description",content:h}),b&&b.length&&r.a.createElement("meta",{name:"keywords",content:b.join(",")}),k&&r.a.createElement("meta",{property:"og:image",content:E}),k&&r.a.createElement("meta",{property:"twitter:image",content:E}),k&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+p}),g&&r.a.createElement("meta",{property:"og:url",content:u+g}),g&&r.a.createElement("link",{rel:"canonical",href:u+g}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),r.a.createElement(w,null),r.a.createElement(q,null),r.a.createElement("div",{className:"main-wrapper"},d),!m&&r.a.createElement(te,null))}},104:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(103);t.default=function(){return r.a.createElement(o.a,{title:"Page Not Found"},r.a.createElement("div",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("h1",{className:"hero__title"},"Page Not Found"),r.a.createElement("p",null,"We could not find what you were looking for."),r.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}},108:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),o=a(0),c=f(o),l=f(a(109)),i=f(a(7)),s=f(a(110)),u=f(a(111)),d=a(112);function f(e){return e&&e.__esModule?e:{default:e}}var m=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleClick=a.handleClick.bind(a),a.handleTouchStart=a.handleTouchStart.bind(a),a.handleTouchMove=a.handleTouchMove.bind(a),a.handleTouchEnd=a.handleTouchEnd.bind(a),a.handleFocus=a.handleFocus.bind(a),a.handleBlur=a.handleBlur.bind(a),a.previouslyChecked=!(!e.checked&&!e.defaultChecked),a.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var a=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:a})}},{key:"handleTouchStart",value:function(e){this.startX=(0,d.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var a=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>a?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<a&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var a=this.props.icons;return a?void 0===a[e]?t.defaultProps.icons[e]:a[e]:null}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,r=(t.icons,function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["className","icons"])),o=(0,l.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},a);return c.default.createElement("div",{className:o,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},c.default.createElement("div",{className:"react-toggle-track"},c.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),c.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),c.default.createElement("div",{className:"react-toggle-thumb"}),c.default.createElement("input",n({},r,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(o.PureComponent);t.default=m,m.displayName="Toggle",m.defaultProps={icons:{checked:c.default.createElement(s.default,null),unchecked:c.default.createElement(u.default,null)}},m.propTypes={checked:i.default.bool,disabled:i.default.bool,defaultChecked:i.default.bool,onChange:i.default.func,onFocus:i.default.func,onBlur:i.default.func,className:i.default.string,name:i.default.string,value:i.default.string,id:i.default.string,"aria-labelledby":i.default.string,"aria-label":i.default.string,icons:i.default.oneOfType([i.default.bool,i.default.shape({checked:i.default.node,unchecked:i.default.node})])}},109:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var c=r.apply(null,n);c&&e.push(c)}else if("object"===o)for(var l in n)a.call(n,l)&&n[l]&&e.push(l)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},110:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),o=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return o.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},o.default.createElement("title",null,"switch-check"),o.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},111:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),o=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return o.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},o.default.createElement("title",null,"switch-x"),o.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},112:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var a=t[0];return{x:a.clientX,y:a.clientY}}var n=e.pageX;if(void 0!==n)return{x:n,y:e.pageY}}return{x:0,y:0}}},113:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return s}));var n=a(2),r=a(6),o=a(0),c=a.n(o),l=a(95),i=a(92);function s(e){var t=e.label,a=e.to,o=e.docsPluginId,s=Object(r.a)(e,["label","to","docsPluginId"]),u=Object(i.useActiveVersion)(o),d=Object(i.useLatestVersion)(o),f=null!=u?u:d,m=null!=t?t:f.label,h=null!=a?a:function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))}(f).path;return c.a.createElement(l.a,Object(n.a)({},s,{label:m,to:h}))}},117:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return u}));var n=a(2),r=a(6),o=a(0),c=a.n(o),l=a(95),i=a(92),s=function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))};function u(e){var t,a=e.mobile,o=e.docsPluginId,u=Object(r.a)(e,["mobile","docsPluginId"]),d=Object(i.useActiveDocContext)(o),f=Object(i.useVersions)(o),m=Object(i.useLatestVersion)(o);var h=null!==(t=d.activeVersion)&&void 0!==t?t:m,v=a?"Versions":h.label,b=a?void 0:s(h).path;return c.a.createElement(l.a,Object(n.a)({},u,{mobile:a,label:v,to:b,items:function(){if(!(f.length<=2))return f.map((function(e){var t=(null==d?void 0:d.alternateDocVersions[e.name])||s(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:function(){return e===(null==d?void 0:d.activeVersion)}}}))}()}))}},94:function(e,t,a){"use strict";var n=a(0),r=a(96);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/theme-classic#usethemecontext.");return e}},95:function(e,t,a){"use strict";var n,r=a(2),o=a(6),c=a(0),l=a.n(c),i=a(89),s=a(90),u=a(87);var d=function(){if(void 0!==n)return n;var e=!1,t={get passive(){e=!0}},a=function(){};return window.addEventListener("t",a,t),window.removeEventListener("t",a,t),n=e,e},f=c.useLayoutEffect,m=function(e){var t=Object(c.useRef)(e);return f((function(){t.current=e})),t},h=["mousedown","touchstart"],v=function(e){if("touchstart"===e)return d()?{passive:!0}:void 0};var b=function(e,t){var a=m(t);Object(c.useEffect)((function(){if(t){var n=function(t){e.current&&a.current&&!e.current.contains(t.target)&&a.current(t)};return h.forEach((function(e){document.addEventListener(e,n,v(e))})),function(){h.forEach((function(e){document.removeEventListener(e,n,v(e))}))}}}),[!t])};function g(e){var t=e.activeBasePath,a=e.activeBaseRegex,n=e.to,c=e.href,i=e.label,d=e.activeClassName,f=void 0===d?"navbar__link--active":d,m=e.prependBaseUrlToHref,h=Object(o.a)(e,["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"]),v=Object(u.a)(n),b=Object(u.a)(t),g=Object(u.a)(c,{forcePrependBaseUrl:!0});return l.a.createElement(s.a,Object(r.a)({},c?{target:"_blank",rel:"noopener noreferrer",href:m?g:c}:Object.assign({isNavLink:!0,activeClassName:f,to:v},t||a?{isActive:function(e,t){return a?new RegExp(a).test(t.pathname):t.pathname.startsWith(b)}}:null),h),i)}function p(e){var t=e.items,a=e.position,n=e.className,s=Object(o.a)(e,["items","position","className"]),u=l.a.useRef(null),d=l.a.useRef(null),f=Object(c.useState)(!1),m=f[0],h=f[1];function v(e){if(e){var t,a,n=null==d||null===(t=d.current)||void 0===t||null===(a=t.firstChild)||void 0===a?void 0:a.firstChild;n&&n.focus()}h(e)}b(u,(function(){return v(!1)}));var p=function(e,t){return void 0===t&&(t=!1),Object(i.a)({"navbar__item navbar__link":!t,dropdown__link:t},e)};return t?l.a.createElement("div",{ref:u,className:Object(i.a)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===a,"dropdown--right":"right"===a,"dropdown--show":m})},l.a.createElement(g,Object(r.a)({className:p(n)},s,{onClick:s.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){("Enter"===e.key&&!s.to||"Tab"===e.key)&&(e.preventDefault(),v(!0))}}),s.label),l.a.createElement("ul",{ref:d,className:"dropdown__menu"},t.map((function(e,a){var n=e.className,c=Object(o.a)(e,["className"]);return l.a.createElement("li",{key:a},l.a.createElement(g,Object(r.a)({onKeyDown:function(e){a===t.length-1&&"Tab"===e.key&&(e.preventDefault(),v(!1))},activeClassName:"dropdown__link--active",className:p(n,!0)},c)))})))):l.a.createElement(g,Object(r.a)({className:p(n)},s))}function k(e){var t=e.items,a=(e.position,e.className),n=Object(o.a)(e,["items","position","className"]),c=function(e,t){return void 0===t&&(t=!1),Object(i.a)("menu__link",{"menu__link--sublist":t},e)};return t?l.a.createElement("li",{className:"menu__list-item"},l.a.createElement(g,Object(r.a)({className:c(a,!0)},n),n.label),l.a.createElement("ul",{className:"menu__list"},t.map((function(e,t){var a=e.className,i=Object(o.a)(e,["className"]);return l.a.createElement("li",{className:"menu__list-item",key:t},l.a.createElement(g,Object(r.a)({activeClassName:"menu__link--active",className:c(a)},i,{onClick:n.onClick})))})))):l.a.createElement("li",{className:"menu__list-item"},l.a.createElement(g,Object(r.a)({className:c(a)},n)))}t.a=function(e){var t=e.mobile,a=void 0!==t&&t,n=Object(o.a)(e,["mobile"]),r=a?k:p;return l.a.createElement(r,n)}},96:function(e,t,a){"use strict";var n=a(0),r=a.n(n).a.createContext(void 0);t.a=r},97:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},98:function(e,t,a){"use strict";var n=a(0),r=a(97);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},99:function(e,t,a){"use strict";var n=a(0),r=a(9),o=function(){return{scrollX:r.a.canUseDOM?window.pageXOffset:0,scrollY:r.a.canUseDOM?window.pageYOffset:0}};t.a=function(e,t){void 0===t&&(t=[]);var a=Object(n.useState)(o()),r=a[0],c=a[1],l=function(){var t=o();c(t),e&&e(t)};return Object(n.useEffect)((function(){return window.addEventListener("scroll",l),function(){return window.removeEventListener("scroll",l,{passive:!0})}}),t),r}}}]);