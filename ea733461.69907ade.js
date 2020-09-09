(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{77:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var r=n(2),a=n(6),o=(n(0),n(83)),s=n(85),i={title:"Donn\xe9es de l'Atlas",sidebar_label:"Donn\xe9es"},u={unversionedId:"atlasDonnees",id:"atlasDonnees",isDocsHomePage:!1,title:"Donn\xe9es de l'Atlas",description:"Cette page concerne les donn\xe9es de l'Atlas, c'est-\xe0-dire les donn\xe9es naturalistes qui viennent de GeoNature. Pour vous renseigner sur les images et le texte des pages sur l'Atlas, merci de vous rendre sur la page Contenu de l'Atlas.",source:"@site/docs/atlasDonnees.md",slug:"/atlasDonnees",permalink:"/documentation/atlasDonnees",editUrl:"https://github.com/PNR-Foret-Orient/documentation/edit/master/docs/atlasDonnees.md",version:"current",sidebar_label:"Donn\xe9es",sidebar:"sidebar",previous:{title:"Contenu de l'Atlas",permalink:"/documentation/atlasContenu"},next:{title:"GeoNature Citizen",permalink:"/documentation/citizenApercu"}},c=[{value:"Mises \xe0 jour automatiques",id:"mises-\xe0-jour-automatiques",children:[]},{value:"Lancer une mise \xe0 jour manuellement",id:"lancer-une-mise-\xe0-jour-manuellement",children:[]},{value:"D\xe9gradation des donn\xe9es",id:"d\xe9gradation-des-donn\xe9es",children:[]}],l={rightToc:c};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Cette page concerne les ",Object(o.b)("em",{parentName:"p"},"donn\xe9es")," de l'Atlas, c'est-\xe0-dire les donn\xe9es naturalistes qui viennent de GeoNature. Pour vous renseigner sur les images et le texte des pages sur l'Atlas, merci de vous rendre sur la page ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/documentation/atlasContenu"}),"Contenu de l'Atlas"),"."),Object(o.b)("img",{alt:"Capture d'\xe9cran de la pr\xe9sentation de GeoNature-Atlas",src:Object(s.a)("img/docs/geonatureAtlas4.png"),className:"tablet"}),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"La carte de la page d'accueil")),Object(o.b)("h2",{id:"mises-\xe0-jour-automatiques"},"Mises \xe0 jour automatiques"),Object(o.b)("p",null,"Cette installation de GeoNature-Atlas est configur\xe9e d'actualiser automatiquement les \xab vues materialis\xe9es \xbb de la BDD, qui sont responsables des donn\xe9es naturalistes accessibles par l'Atlas. Ce processus d\xe9roule toutes les heures, grace au ",Object(o.b)("inlineCode",{parentName:"p"},"crontab")," :"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),'postgres@sig:~$ crontab -l\n\u2026\n# m h  dom mon dow   command\n0 * * * * psql -d geonatureatlas -c "SELECT atlas.refresh_materialized_view_data();"\n')),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Le processus automatique n'applique que les donn\xe9es naturalistes. Pour rafraichir les donn\xe9es g\xe9ographiques vous devez le faire manuellement."))),Object(o.b)("h2",{id:"lancer-une-mise-\xe0-jour-manuellement"},"Lancer une mise \xe0 jour manuellement"),Object(o.b)("p",null,"Pour mettre \xe0 jour l'atlas manuellement, vous devez vous connecter \xe0 la BDD puis lancer les commandes suivantes :"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"SELECT atlas.refresh_materialized_view_data(); -- actualiser les donn\xe9es naturalistes\nSELECT atlas.refresh_materialized_view_ref_geo(); -- actualiser les donn\xe9es g\xe9ographiques\n")),Object(o.b)("p",null,"Pour en savoir plus, ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/PnX-SI/GeoNature-atlas/blob/master/docs/vues_materialisees_maj.rst#mise-%C3%A0-jour-des-vues-mat%C3%A9rialis%C3%A9es"}),"lisez la documentation officielle")),Object(o.b)("h2",{id:"d\xe9gradation-des-donn\xe9es"},"D\xe9gradation des donn\xe9es"),Object(o.b)("p",null,"(\xe0 faire)"))}d.isMDXComponent=!0},83:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),l=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,b=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?a.a.createElement(b,i(i({ref:t},c),{},{components:n})):a.a.createElement(b,i({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},84:function(e,t,n){"use strict";var r=n(0),a=n(20);t.a=function(){var e=Object(r.useContext)(a.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},85:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return s}));var r=n(84),a=n(86);function o(){var e=Object(r.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,s=o.forcePrependBaseUrl,i=void 0!==s&&s,u=o.absolute,c=void 0!==u&&u;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(i)return t+n;var l=!n.startsWith(t)?t+n.replace(/^\//,""):n;return c?e+l:l}(o,n,e,t)}}}function s(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},86:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))}}]);