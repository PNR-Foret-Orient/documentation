(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{93:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return d}));var r=n(3),o=n(7),i=(n(0),n(97)),u=n(96),a={title:"Monitoring (module)"},c={unversionedId:"geonatureModuleMonitoring",id:"geonatureModuleMonitoring",isDocsHomePage:!1,title:"Monitoring (module)",description:"R\xe9sum\xe9",source:"@site/docs/geonatureModuleMonitoring.md",slug:"/geonatureModuleMonitoring",permalink:"/documentation/geonatureModuleMonitoring",editUrl:"https://github.com/PNR-Foret-Orient/documentation/edit/master/docs/geonatureModuleMonitoring.md",version:"current",sidebar:"sidebar",previous:{title:"Export (module)",permalink:"/documentation/geonatureModuleExport"},next:{title:"GeoNature Atlas",permalink:"/documentation/atlasApercu"}},s=[{value:"R\xe9sum\xe9",id:"r\xe9sum\xe9",children:[]},{value:"Gestion de sous-modules",id:"gestion-de-sous-modules",children:[]}],l={toc:s};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"r\xe9sum\xe9"},"R\xe9sum\xe9"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://github.com/PnX-SI/gn_module_monitoring"},"https://github.com/PnX-SI/gn_module_monitoring")," :"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},'Ce module permet de g\xe9rer de fa\xe7on g\xe9n\xe9rique des donn\xe9es de protocoles "simples" articul\xe9s en 3 niveaux : des sites (nom, type, localisation) dans lesquels on fait des visites (dates, observateurs) dans lesquelles on peut faire des observations (esp\xe8ces).')),Object(i.b)("p",null,"Allez sur ",Object(i.b)("a",{parentName:"p",href:"https://github.com/PnX-SI/gn_module_monitoring"},"la documentation officielle")," pour comprendre la fonctionnement de ce module et comment cr\xe9er un sous-module."),Object(i.b)("img",{alt:"Capture d'\xe9cran du module",src:Object(u.a)("img/docs/geonatureModuleMonitoring1.png"),className:"tablet"}),Object(i.b)("h2",{id:"gestion-de-sous-modules"},"Gestion de sous-modules"),Object(i.b)("p",null,"Si vous voulez cr\xe9er ou modifier un sous-module, comme les autres fichiers de configuration (ex. de l'atlas), ils se trouvent dans un ",Object(i.b)("a",{parentName:"p",href:"https://github.com/PNR-Foret-Orient/protocoles"},"d\xe9p\xf4t sur GitHub"),"."),Object(i.b)("p",null,"Pour les modifier, cloner le d\xe9p\xf4t Git sur votre machine en local puis modifier les fichiers comme vous voulez. Ensuite, vous devez les d\xe9poser (\xab push \xbb) sur GitHub."),Object(i.b)("p",null,"Pour installer vos sous-modules, il faut d'abord vous connecter au serveur avec SSH en tant que ",Object(i.b)("inlineCode",{parentName:"p"},"geonatureadmin"),"."),Object(i.b)("p",null,"Ensuite, lancer les commandes suivantes depuis le chemin ",Object(i.b)("inlineCode",{parentName:"p"},"/home/geonatureadmin/gn_modules_monitoring/contrib")," :"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"git pull\nsource ~/geonature/backend/venv/bin/activate\nflask monitorings install <mon_chemin_absolu_vers_l_archive>/<protocole> <protocole>\n")),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://github.com/PnX-SI/gn_module_monitoring#cr%C3%A9ation-dun-sous-module"},"En savoir plus")))}d.isMDXComponent=!0},96:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return u}));var r=n(22),o=n(98);function i(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,u=i.forcePrependBaseUrl,a=void 0!==u&&u,c=i.absolute,s=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(a)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+l:l}(i,n,e,t)}}}function u(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,b=d["".concat(u,".").concat(m)]||d[m]||p[m]||i;return n?o.a.createElement(b,a(a({ref:t},s),{},{components:n})):o.a.createElement(b,a({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,u=new Array(i);u[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:r,u[1]=a;for(var s=2;s<i;s++)u[s]=n[s];return o.a.createElement.apply(null,u)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},98:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}))}}]);