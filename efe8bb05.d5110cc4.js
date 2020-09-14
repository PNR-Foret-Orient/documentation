(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{78:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return u})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return d}));var n=r(2),a=r(6),o=(r(0),r(85)),c=r(86),u={title:"Modules de base (Synth\xe8se, OccTax, OccHab)",sidebar_label:"Modules de base"},s={unversionedId:"geonatureModulesBase",id:"geonatureModulesBase",isDocsHomePage:!1,title:"Modules de base (Synth\xe8se, OccTax, OccHab)",description:"GeoNature fournit quelques modules par d\xe9faut : Synth\xe8se, OccTax et OccHab. Pour en savoir plus, consulter la documentation officielle.",source:"@site/docs/geonatureModulesBase.md",slug:"/geonatureModulesBase",permalink:"/documentation/geonatureModulesBase",editUrl:"https://github.com/PNR-Foret-Orient/documentation/edit/master/docs/geonatureModulesBase.md",version:"current",sidebar_label:"Modules de base",sidebar:"sidebar",previous:{title:"Donn\xe9es g\xe9ospatiales",permalink:"/documentation/geonatureDonneesGeospatiales"},next:{title:"Dashboard (module)",permalink:"/documentation/geonatureModuleDashboard"}},i=[{value:"Syth\xe8se",id:"syth\xe8se",children:[]},{value:"OccTax",id:"occtax",children:[]},{value:"OccHab",id:"occhab",children:[]}],l={rightToc:i};function d(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"GeoNature fournit quelques modules par d\xe9faut : Synth\xe8se, OccTax et OccHab. Pour en savoir plus, consulter ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://docs.geonature.fr/user-manual.html"}),"la documentation officielle"),"."),Object(o.b)("h2",{id:"syth\xe8se"},"Syth\xe8se"),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://docs.geonature.fr/user-manual.html#synthese"}),"http://docs.geonature.fr/user-manual.html#synthese")," :"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Ce module permet de consulter, rechercher et exporter les donn\xe9es provenant des diff\xe9rentes sources et protocoles avec leur tronc commun, bas\xe9 sur le standard Occurrences de taxon du SINP")),Object(o.b)("img",{alt:"Capture d'\xe9cran de Synth\xe8se",src:Object(c.a)("img/docs/geonatureModulesBaseSynthese.png"),className:"tablet"}),Object(o.b)("h2",{id:"occtax"},"OccTax"),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://docs.geonature.fr/user-manual.html#occtax"}),"http://docs.geonature.fr/user-manual.html#occtax")," :"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Ce module permet de saisir des donn\xe9es selon le standard Occurrence de taxon du SINP")),Object(o.b)("img",{alt:"Capture d'\xe9cran d'OccTax",src:Object(c.a)("img/docs/geonatureModulesBaseOccTax.png"),className:"tablet"}),Object(o.b)("h2",{id:"occhab"},"OccHab"),Object(o.b)("p",null,"Un module de saisie d'occurrences d'habitats selon le standard Occurence d'habitat du SINP."),Object(o.b)("img",{alt:"Capture d'\xe9cran d'OccHab",src:Object(c.a)("img/docs/geonatureModulesBaseOccHab.png"),className:"tablet"}))}d.isMDXComponent=!0},84:function(e,t,r){"use strict";var n=r(0),a=r(20);t.a=function(){var e=Object(n.useContext)(a.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},85:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=a.a.createContext({}),l=function(e){var t=a.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},d=function(e){var t=l(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),d=l(r),p=n,f=d["".concat(c,".").concat(p)]||d[p]||b[p]||o;return r?a.a.createElement(f,u(u({ref:t},i),{},{components:r})):a.a.createElement(f,u({ref:t},i))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=p;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:n,c[1]=u;for(var i=2;i<o;i++)c[i]=r[i];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},86:function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return c}));var n=r(84),a=r(87);function o(){var e=Object(n.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var o=void 0===n?{}:n,c=o.forcePrependBaseUrl,u=void 0!==c&&c,s=o.absolute,i=void 0!==s&&s;if(!r)return r;if(r.startsWith("#"))return r;if(Object(a.b)(r))return r;if(u)return t+r;var l=!r.startsWith(t)?t+r.replace(/^\//,""):r;return i?e+l:l}(o,r,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},87:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return a}))}}]);