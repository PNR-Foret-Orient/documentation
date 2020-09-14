(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{69:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return u})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(2),i=r(6),a=(r(0),r(85)),o=r(86),u={title:"Configuration"},c={unversionedId:"serveurConfiguration",id:"serveurConfiguration",isDocsHomePage:!1,title:"Configuration",description:"GeoNature a \xe9t\xe9 install\xe9 sur l'infrastructure informatique du Parc pour assurer une bonne performance compte tenu du faible d\xe9bit.",source:"@site/docs/serveurConfiguration.md",slug:"/serveurConfiguration",permalink:"/documentation/serveurConfiguration",editUrl:"https://github.com/PNR-Foret-Orient/documentation/edit/master/docs/serveurConfiguration.md",version:"current",sidebar:"sidebar",previous:{title:"Captures d'\xe9cran",permalink:"/documentation/captures"},next:{title:"D\xe9pannage",permalink:"/documentation/serveurDepannage"}},s=[{value:"O\xf9 se trouve GeoNature ?",id:"o\xf9-se-trouve-geonature-",children:[]},{value:"Gestion de HTTPS",id:"gestion-de-https",children:[]},{value:"Redirection",id:"redirection",children:[{value:"Pourquoi une redirection au lieu d&#39;installer l&#39;Atlas directement \xe0 la racine ?",id:"pourquoi-une-redirection-au-lieu-dinstaller-latlas-directement-\xe0-la-racine-",children:[]}]}],l={rightToc:s};function p(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"GeoNature a \xe9t\xe9 install\xe9 sur l'infrastructure informatique du Parc pour assurer une bonne performance compte tenu du faible d\xe9bit."),Object(a.b)("h2",{id:"o\xf9-se-trouve-geonature-"},"O\xf9 se trouve GeoNature ?"),Object(a.b)("p",null,"GeoNature est sur le serveur SIG du parc. Le syst\xe8me AYLAN a un pare-feu qui est en charge d'envoyer les requ\xeates HTTP et HTTPS vers le serveur SIG (192.168.3.134)."),Object(a.b)("img",{alt:"Diagramme du r\xe9seau",src:Object(o.a)("img/docs/reseau.png")}),Object(a.b)("p",null,"Les applications web sont disponible suivant ces liens :"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"GeoNature ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"http://biodiversite.pnr-foret-orient.fr/geonature"}),"http://biodiversite.pnr-foret-orient.fr/geonature")),Object(a.b)("li",{parentName:"ul"},"TaxHub ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"http://biodiversite.pnr-foret-orient.fr/taxhub/"}),"http://biodiversite.pnr-foret-orient.fr/taxhub/")),Object(a.b)("li",{parentName:"ul"},"UsersHub ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"http://biodiversite.pnr-foret-orient.fr/usershub"}),"http://biodiversite.pnr-foret-orient.fr/usershub")),Object(a.b)("li",{parentName:"ul"},"Atlas ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"http://biodiversite.pnr-foret-orient.fr/atlas/"}),"http://biodiversite.pnr-foret-orient.fr/atlas/"))),Object(a.b)("h2",{id:"gestion-de-https"},"Gestion de HTTPS"),Object(a.b)("p",null,"La certification HTTPS s'appuie sur ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://letsencrypt.org/fr/"}),"Let's Encrypt"),". Le logiciel ",Object(a.b)("inlineCode",{parentName:"p"},"certbot")," est en charge de la cr\xe9ation et du renouvellement du certificat. Avec ",Object(a.b)("inlineCode",{parentName:"p"},"cron")," et ",Object(a.b)("inlineCode",{parentName:"p"},"systemd/timers"),", le renouvellement est automatique. En cas de probl\xe8me, un mail sera envoy\xe9 \xe0 la personne responsable du SIG du parc."),Object(a.b)("h2",{id:"redirection"},"Redirection"),Object(a.b)("p",null,"Le serveur est configur\xe9 de rediriger les visiteur\xb7euse\xb7s \xe0 la racine du serveur (",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://biodiversite.pnr-foret-orient.fr/"}),"https://biodiversite.pnr-foret-orient.fr/"),") vers l'Atlas : (",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://biodiversite.pnr-foret-orient.fr/atlas/"}),"https://biodiversite.pnr-foret-orient.fr/atlas/"),")."),Object(a.b)("p",null,"Si besoin, la redirection peut \xeatre modifi\xe9e ou supprim\xe9e."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-markup",metastring:'title="/etc/apache2/sites-available/000-default-le-ssl.conf"',title:'"/etc/apache2/sites-available/000-default-le-ssl.conf"'}),"RewriteEngine on\nRewriteRule ^/$ atlas/ [END,NE,R=permanent]\n")),Object(a.b)("h3",{id:"pourquoi-une-redirection-au-lieu-dinstaller-latlas-directement-\xe0-la-racine-"},"Pourquoi une redirection au lieu d'installer l'Atlas directement \xe0 la racine ?"),Object(a.b)("p",null,"Dans cette installation de GeoNature, tous les outils se trouvent sur un seul serveur et un seul nom de domaine. Si l'Atlas se trouve \xe0 la racine, cela peut interf\xe9rer avec les autres outils et compliquer le renouvellement des certificats HTTPS."))}p.isMDXComponent=!0},84:function(e,t,r){"use strict";var n=r(0),i=r(20);t.a=function(){var e=Object(n.useContext)(i.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},85:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=i.a.createContext({}),l=function(e){var t=i.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},p=function(e){var t=l(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=l(r),d=n,f=p["".concat(o,".").concat(d)]||p[d]||b[d]||a;return r?i.a.createElement(f,u(u({ref:t},s),{},{components:r})):i.a.createElement(f,u({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=d;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:n,o[1]=u;for(var s=2;s<a;s++)o[s]=r[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},86:function(e,t,r){"use strict";r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return o}));var n=r(84),i=r(87);function a(){var e=Object(n.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var a=void 0===n?{}:n,o=a.forcePrependBaseUrl,u=void 0!==o&&o,c=a.absolute,s=void 0!==c&&c;if(!r)return r;if(r.startsWith("#"))return r;if(Object(i.b)(r))return r;if(u)return t+r;var l=!r.startsWith(t)?t+r.replace(/^\//,""):r;return s?e+l:l}(a,r,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},87:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return i}))}}]);