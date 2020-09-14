(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{64:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var i=n(2),a=n(6),r=(n(0),n(85)),o=n(86),l={title:"GeoNature Mobile",sidebar_label:"Aper\xe7u"},c={unversionedId:"mobileApercu",id:"mobileApercu",isDocsHomePage:!1,title:"GeoNature Mobile",description:"Certaines fonctionnalit\xe9s de GeoNature sont disponibles sur les terminals mobiles Android gr\xe2ce aux applications Occtax et Sync. Ces applications ne sont pas sur Google Play donc elles doivent \xeatre install\xe9es manuellement. NB: L'application Occtax a besoin de l'application Sync pour fonctionner.",source:"@site/docs/mobileApercu.md",slug:"/mobileApercu",permalink:"/documentation/mobileApercu",editUrl:"https://github.com/PNR-Foret-Orient/documentation/edit/master/docs/mobileApercu.md",version:"current",sidebar_label:"Aper\xe7u",sidebar:"sidebar",previous:{title:"GeoNature Citizen",permalink:"/documentation/citizenApercu"},next:{title:"Fonds de carte (mobile)",permalink:"/documentation/mobileCarte"}},s=[{value:"Installation",id:"installation",children:[{value:"Configuration",id:"configuration",children:[]}]},{value:"D\xe9pannage",id:"d\xe9pannage",children:[]},{value:"Utilisation",id:"utilisation",children:[]},{value:"Mettre \xe0 jour la configuration",id:"mettre-\xe0-jour-la-configuration",children:[]}],u={rightToc:s};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Certaines fonctionnalit\xe9s de GeoNature sont disponibles sur les terminals mobiles Android gr\xe2ce aux applications ",Object(r.b)("inlineCode",{parentName:"p"},"Occtax")," et ",Object(r.b)("inlineCode",{parentName:"p"},"Sync"),". Ces applications ne sont pas sur Google Play donc elles doivent \xeatre install\xe9es manuellement. NB: L'application ",Object(r.b)("inlineCode",{parentName:"p"},"Occtax")," a besoin de l'application ",Object(r.b)("inlineCode",{parentName:"p"},"Sync")," pour fonctionner."),Object(r.b)("h2",{id:"installation"},"Installation"),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Ce guide suppose que vous savez comment fonctionne le terminal et que vous pouvez adapter les instructions pour vos besoins."),Object(r.b)("p",{parentName:"div"},"Il faut installer l'utilitaire ",Object(r.b)("inlineCode",{parentName:"p"},"ADB")," (Android Debug Bridge) avant de continuer. Sous Linux vous pouvez peut-\xeatre utiliser ",Object(r.b)("inlineCode",{parentName:"p"},"sudo apt install android-tools-adb")," pour le faire."),Object(r.b)("p",{parentName:"div"},"De plus, vous devez activer le ",Object(r.b)("em",{parentName:"p"},"D\xe9bogage USB")," dans les options d\xe9veloppeur de votre terminal mobile."))),Object(r.b)("p",null,"T\xe9l\xe9charger le fichier ",Object(r.b)("inlineCode",{parentName:"p"},".apk")," le plus r\xe9cent pour chaque appli. Il n'existe pas une version sp\xe9cifique au PnrFO donc il est conseill\xe9 d'utiliser le \xab ",Object(r.b)("em",{parentName:"p"},"flavour")," \xbb ",Object(r.b)("inlineCode",{parentName:"p"},"generic"),"."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Sync")," : ",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/PnX-SI/gn_mobile_core/releases"}),"https://github.com/PnX-SI/gn_mobile_core/releases")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Occtax")," : ",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/PnX-SI/gn_mobile_occtax/releases"}),"https://github.com/PnX-SI/gn_mobile_occtax/releases"))),Object(r.b)("p",null,"Brancher le terminal mobile que vous voulez utiliser. Vous pouvez v\xe9rifier qu'il est bien connect\xe9 en utilisant la commande  ",Object(r.b)("inlineCode",{parentName:"p"},"adb devices"),". Si tout va bien, vous pouvez installer les applications :"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),"adb install ./sync-1.0.0-generic-release.apk\nadb install ./occtax-1.0.0-generic-release.apk\n")),Object(r.b)("p",null,"Si les commandes r\xe9ussissent, vous devriez voir les applications sur le terminal mobile :"),Object(r.b)("img",{alt:"Capture d'\xe9cran apr\xe8s l'installation",src:Object(o.a)("img/docs/mobileScreenshot1.png"),className:"mobile"}),Object(r.b)("h3",{id:"configuration"},"Configuration"),Object(r.b)("p",null,"Afin d'utiliser les applications avec l'installation GeoNature du PnrFO, il faut changer les param\xe8tres dans l'application ",Object(r.b)("inlineCode",{parentName:"p"},"Sync")," pour que l'application utilise le bon serveur."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"URL de GeoNature : ",Object(r.b)("inlineCode",{parentName:"li"},"https://biodiversite.pnr-foret-orient.fr/geonature")),Object(r.b)("li",{parentName:"ul"},"URL de TaxHub : ",Object(r.b)("inlineCode",{parentName:"li"},"https://biodiversite.pnr-foret-orient.fr/taxhub"))),Object(r.b)("img",{alt:"Capture d'\xe9cran des param\xe8tres",src:Object(o.a)("img/docs/mobileScreenshot2.png"),className:"mobile"}),Object(r.b)("p",null,"Apr\xe8s vous avez ajout\xe9 les deux URLs, appuyez sur la fl\xe8che de retour. Si tout va bien, apr\xe8s quelques instants l'application vous demandera de vous connecter."),Object(r.b)("p",null,"Si vous disposez d'un compte utilisateur avec les droits n\xe9cessaires, l'application fera bient\xf4t une synchronisation initiale."),Object(r.b)("img",{alt:"Capture d'\xe9cran de la synchronisation",src:Object(o.a)("img/docs/mobileScreenshot3.png"),className:"mobile"}),Object(r.b)("p",null,"En supposant que la synchronisation se termine avec succ\xe8s, votre terminal mobile est d\xe9sormais pr\xeat \xe0 l'emploi !"),Object(r.b)("h2",{id:"d\xe9pannage"},"D\xe9pannage"),Object(r.b)("p",null,"Si l'application plante, vous pouvez peut-\xeatre trouver la raison avec le journal d'\xe9v\xe9nements. Pour ce faire, branchez le terminal mobile et puis utilisez la commande ",Object(r.b)("inlineCode",{parentName:"p"},"adb logcat | grep fr.geonature"),"."),Object(r.b)("p",null,"Ce journal d'\xe9v\xe9nements peut vous donner une explication que vous pouvez ensuite partager avec les d\xe9veloppeuses\xb7eurs."),Object(r.b)("h2",{id:"utilisation"},"Utilisation"),Object(r.b)("p",null,"Heureusement, l'interface de l'application est assez intuitive. Voil\xe0 quelques captures d'\xe9cran pour illustrer comment l'application fonctionne :"),Object(r.b)("img",{alt:"1. Observateur et date",src:Object(o.a)("img/docs/mobileUtilisation1.png"),className:"mobile"}),Object(r.b)("img",{alt:"2. Pointage",src:Object(o.a)("img/docs/mobileUtilisation2.png"),className:"mobile"}),Object(r.b)("img",{alt:"3. Taxons",src:Object(o.a)("img/docs/mobileUtilisation3.png"),className:"mobile"}),Object(r.b)("img",{alt:"4. Informations",src:Object(o.a)("img/docs/mobileUtilisation4.png"),className:"mobile"}),Object(r.b)("img",{alt:"5. D\xe9nombrement",src:Object(o.a)("img/docs/mobileUtilisation5.png"),className:"mobile"}),Object(r.b)("img",{alt:"6. Bilan de la saisie",src:Object(o.a)("img/docs/mobileUtilisation6.png"),className:"mobile"}),Object(r.b)("p",null,"Pour en savoir plus, veuillez vous rendre sur ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/PnX-SI/gn_mobile_occtax/blob/master/docs/installation-fr.md#utilisation"}),"la documentation officielle"),"."),Object(r.b)("h2",{id:"mettre-\xe0-jour-la-configuration"},"Mettre \xe0 jour la configuration"),Object(r.b)("p",null,"Les fichiers de configuration se trouvent dans le d\xe9p\xf4t : ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/PNR-Foret-Orient/mobile-configuration"}),"https://github.com/PNR-Foret-Orient/mobile-configuration")),Object(r.b)("p",null,"Pour les mettre \xe0 jour, vous pouvez tout d'abord les modifier comme vous voulez, et ensuite les t\xe9l\xe9charger sur le serveur en utilisant la commande : ",Object(r.b)("inlineCode",{parentName:"p"},"git pull")," depuis le chemin indiqu\xe9 dans le README."))}b.isMDXComponent=!0},84:function(e,t,n){"use strict";var i=n(0),a=n(20);t.a=function(){var e=Object(i.useContext)(a.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},85:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=u(n),m=i,d=b["".concat(o,".").concat(m)]||b[m]||p[m]||r;return n?a.a.createElement(d,l(l({ref:t},s),{},{components:n})):a.a.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},86:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}));var i=n(84),a=n(87);function r(){var e=Object(i.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,r=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,i){var r=void 0===i?{}:i,o=r.forcePrependBaseUrl,l=void 0!==o&&o,c=r.absolute,s=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(l)return t+n;var u=!n.startsWith(t)?t+n.replace(/^\//,""):n;return s?e+u:u}(r,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,r().withBaseUrl)(e,t)}},87:function(e,t,n){"use strict";function i(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!i(e)}n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return a}))}}]);