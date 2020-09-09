(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{77:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(6),l=(n(0),n(83)),s=n(85),i={title:"Donn\xe9es de l'Atlas",sidebar_label:"Donn\xe9es"},o={unversionedId:"atlasDonnees",id:"atlasDonnees",isDocsHomePage:!1,title:"Donn\xe9es de l'Atlas",description:"Cette page concerne les donn\xe9es de l'Atlas, c'est-\xe0-dire les donn\xe9es naturalistes qui viennent de GeoNature. Pour vous renseigner sur les images et le texte des pages sur l'Atlas, merci de vous rendre sur la page Contenu de l'Atlas.",source:"@site/docs/atlasDonnees.md",slug:"/atlasDonnees",permalink:"/documentation/atlasDonnees",editUrl:"https://github.com/PNR-Foret-Orient/documentation/edit/master/docs/atlasDonnees.md",version:"current",sidebar_label:"Donn\xe9es",sidebar:"sidebar",previous:{title:"Contenu de l'Atlas",permalink:"/documentation/atlasContenu"},next:{title:"GeoNature Citizen",permalink:"/documentation/citizenApercu"}},c=[{value:"Quelles sont les donn\xe9es visibles sur l&#39;Atlas ?",id:"quelles-sont-les-donn\xe9es-visibles-sur-latlas-",children:[]},{value:"D\xe9gradation des donn\xe9es",id:"d\xe9gradation-des-donn\xe9es",children:[]},{value:"Mises \xe0 jour automatiques",id:"mises-\xe0-jour-automatiques",children:[]},{value:"Lancer une mise \xe0 jour manuellement",id:"lancer-une-mise-\xe0-jour-manuellement",children:[]}],u={rightToc:c};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Cette page concerne les ",Object(l.b)("em",{parentName:"p"},"donn\xe9es")," de l'Atlas, c'est-\xe0-dire les donn\xe9es naturalistes qui viennent de GeoNature. Pour vous renseigner sur les images et le texte des pages sur l'Atlas, merci de vous rendre sur la page ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/documentation/atlasContenu"}),"Contenu de l'Atlas"),"."),Object(l.b)("img",{alt:"Capture d'\xe9cran de la pr\xe9sentation de GeoNature-Atlas",src:Object(s.a)("img/docs/geonatureAtlas4.png"),className:"tablet"}),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"La carte de la page d'accueil")),Object(l.b)("h2",{id:"quelles-sont-les-donn\xe9es-visibles-sur-latlas-"},"Quelles sont les donn\xe9es visibles sur l'Atlas ?"),Object(l.b)("p",null,"Pour info, l'Atlas :"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"filtre les donn\xe9es non-diffusable (avec le code \xab 4\xa0\xbb)"),Object(l.b)("li",{parentName:"ul"},"inclut seulement les donn\xe9es \xab pr\xe9sentes \xbb (avec le code \xab Pr \xbb)")),Object(l.b)("h2",{id:"d\xe9gradation-des-donn\xe9es"},"D\xe9gradation des donn\xe9es"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"GeoNature-atlas fournit un m\xe9canisme de d\xe9gration des donn\xe9es bas\xe9 sur les standards du SINP. Connect\xe9 \xe0 GeoNature version 2, l'atlas utilise le champs ",Object(l.b)("inlineCode",{parentName:"p"},"id_nomenclature_diffusion_level")," de la table ",Object(l.b)("inlineCode",{parentName:"p"},"gn_synthese.synthese")," pour construire la vue atlas.vm_observations et remplir la g\xe9ometrie adapt\xe9e en se basant sur r\xe9f\xe9rentiel g\xe9ographique de GeoNature. Pour des raisons de performance et de lisibilit\xe9, GeoNature-atlas affiche le centro\xefde de la g\xe9ometrie \xe0 laquelle l'observation est d\xe9grad\xe9e.")),Object(l.b)("p",null,"\xc0 partir des donn\xe9es bruts pr\xe9sentes dans GeoNature, l'atlas applique le floutage suivant :"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Niveau"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Visible?"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"0"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Oui"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Diffusion standard")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"1"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Oui"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Diffusion flout\xe9e de la DEE par rattachement \xe0 la commune")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"2"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Oui"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Diffusion flout\xe9e par rattachement \xe0 la maille 10 x 10 km")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"3"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Non"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Diffusion flout\xe9e par rattachement au d\xe9partement")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"4"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Non"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Aucune diffusion (cas exceptionnel), correspond \xe0 une donn\xe9e de sensibilit\xe9 4")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"5"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Oui"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Diffusion telle quelle : si une donn\xe9e pr\xe9cise existe, elle doit \xeatre diffus\xe9e telle quelle (non d\xe9grad\xe9e)")))),Object(l.b)("div",{className:"admonition admonition-info alert alert--info"},Object(l.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(l.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(l.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},"Les donn\xe9es au niveau 3 ne sont pas visibles parce que le centro\xefde du d\xe9partement ne se trouve pas sur le territoire du parc."))),Object(l.b)("p",null,"Pour en savoir plus, lisez la ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/PnX-SI/GeoNature-atlas/blob/master/docs/degradation_donnees.rst"}),"documentation officielle"),"."),Object(l.b)("h2",{id:"mises-\xe0-jour-automatiques"},"Mises \xe0 jour automatiques"),Object(l.b)("p",null,"Cette installation de GeoNature-Atlas est configur\xe9e d'actualiser automatiquement les \xab vues materialis\xe9es \xbb de la BDD, qui sont responsables des donn\xe9es naturalistes accessibles par l'Atlas. Ce processus d\xe9roule toutes les heures, grace au ",Object(l.b)("inlineCode",{parentName:"p"},"crontab")," :"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),'postgres@sig:~$ crontab -l\n\u2026\n# m h  dom mon dow   command\n0 * * * * psql -d geonatureatlas -c "SELECT atlas.refresh_materialized_view_data();"\n')),Object(l.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(l.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(l.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(l.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},"Le processus automatique n'applique que les donn\xe9es naturalistes. Pour rafraichir les donn\xe9es g\xe9ographiques vous devez le faire manuellement."))),Object(l.b)("h2",{id:"lancer-une-mise-\xe0-jour-manuellement"},"Lancer une mise \xe0 jour manuellement"),Object(l.b)("p",null,"Pour mettre \xe0 jour l'atlas manuellement, vous devez vous connecter \xe0 la BDD puis lancer les commandes suivantes :"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"SELECT atlas.refresh_materialized_view_data(); -- actualiser les donn\xe9es naturalistes\nSELECT atlas.refresh_materialized_view_ref_geo(); -- actualiser les donn\xe9es g\xe9ographiques\n")),Object(l.b)("p",null,"Pour en savoir plus, ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/PnX-SI/GeoNature-atlas/blob/master/docs/vues_materialisees_maj.rst#mise-%C3%A0-jour-des-vues-mat%C3%A9rialis%C3%A9es"}),"lisez la documentation officielle")))}b.isMDXComponent=!0},83:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),b=u(n),p=a,m=b["".concat(s,".").concat(p)]||b[p]||d[p]||l;return n?r.a.createElement(m,i(i({ref:t},c),{},{components:n})):r.a.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,s=new Array(l);s[0]=p;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<l;c++)s[c]=n[c];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},84:function(e,t,n){"use strict";var a=n(0),r=n(20);t.a=function(){var e=Object(a.useContext)(r.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},85:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return s}));var a=n(84),r=n(86);function l(){var e=Object(a.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,l=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var l=void 0===a?{}:a,s=l.forcePrependBaseUrl,i=void 0!==s&&s,o=l.absolute,c=void 0!==o&&o;if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(i)return t+n;var u=!n.startsWith(t)?t+n.replace(/^\//,""):n;return c?e+u:u}(l,n,e,t)}}}function s(e,t){return void 0===t&&(t={}),(0,l().withBaseUrl)(e,t)}},86:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))}}]);