(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{52:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return u})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return p}));var r=t(2),a=t(6),i=(t(0),t(79)),o=t(81),l={title:"D\xe9pannage"},u={unversionedId:"serveurDepannage",id:"serveurDepannage",isDocsHomePage:!1,title:"D\xe9pannage",description:"La documentation officielle est disponible//docs.geonature.fr/FAQ.html",source:"@site/docs/serveurDepannage.md",permalink:"/documentation/serveurDepannage",editUrl:"https://github.com/PNR-Foret-Orient/documentation/edit/master/docs/serveurDepannage.md",sidebar:"sidebar",previous:{title:"Configuration",permalink:"/documentation/serveurConfiguration"},next:{title:"Sauvegardes",permalink:"/documentation/serveurSauvegardes"}},s=[{value:"Comment d\xe9terminer la source du probl\xe8me",id:"comment-d\xe9terminer-la-source-du-probl\xe8me",children:[{value:"Le probl\xe8me est peut-\xeatre li\xe9 \xe0 l&#39;API si\u2026",id:"le-probl\xe8me-est-peut-\xeatre-li\xe9-\xe0-lapi-si",children:[]},{value:"Le probl\xe8me est peut-\xeatre li\xe9 au frontend si\u2026",id:"le-probl\xe8me-est-peut-\xeatre-li\xe9-au-frontend-si",children:[]}]},{value:"Probl\xe8mes li\xe9s \xe0 l&#39;API",id:"probl\xe8mes-li\xe9s-\xe0-lapi",children:[]},{value:"Probl\xe8mes li\xe9s au frontend",id:"probl\xe8mes-li\xe9s-au-frontend",children:[]}],c={rightToc:s};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"La documentation officielle est disponible : ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"http://docs.geonature.fr/FAQ.html"}),"http://docs.geonature.fr/FAQ.html"),Object(i.b)("br",{parentName:"p"}),"\n","Ce page ne vise pas \xe0 la remplacer, mais plut\xf4t fournir des instructions suppl\xe9mentaires."))),Object(i.b)("p",null,"Si vouz rencontrez des probl\xe8mes avec GeoNature ou ses applications associ\xe9es, vous pouvez essayer les d\xe9marches suivantes."),Object(i.b)("h2",{id:"comment-d\xe9terminer-la-source-du-probl\xe8me"},"Comment d\xe9terminer la source du probl\xe8me"),Object(i.b)("p",null,"Chaque application (GeoNature, TaxHub, Atlas\u2026) utilise un \xab frontend \xbb (la partie d'application qu'on voit) et une \xab API \xbb ou \xab backend \xbb (la partie d'application qui fourni les donn\xe9es depuis la BDD)."),Object(i.b)("h3",{id:"le-probl\xe8me-est-peut-\xeatre-li\xe9-\xe0-lapi-si"},"Le probl\xe8me est peut-\xeatre li\xe9 \xe0 l'API si\u2026"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"vous n'arrivez pas \xe0 vous connecter m\xeame si vous disposez d'un compte utilisateur"),Object(i.b)("li",{parentName:"ul"},"GeoNature ne montre pas les donn\xe9es, comme l'illustre la capture d'\xe9cran suivante")),Object(i.b)("img",{alt:"Capture d'\xe9cran de GeoNature avec un probl\xe8me li\xe9 \xe0 l'API",src:Object(o.a)("img/docs/depannageAPI.png")}),Object(i.b)("h3",{id:"le-probl\xe8me-est-peut-\xeatre-li\xe9-au-frontend-si"},"Le probl\xe8me est peut-\xeatre li\xe9 au frontend si\u2026"),Object(i.b)("p",null,"Vous voyez les erreurs comme les captures d'\xe9cran ci-dessous :"),Object(i.b)("img",{alt:"Capture d'\xe9cran de GeoNature avec un probl\xe8me li\xe9 \xe0 la service apache2",src:Object(o.a)("img/docs/depannageApache1.png")}),Object(i.b)("img",{alt:"Capture d'\xe9cran de GeoNature avec un probl\xe8me li\xe9 \xe0 la service apache2",src:Object(o.a)("img/docs/depannageApache2.png")}),Object(i.b)("h2",{id:"probl\xe8mes-li\xe9s-\xe0-lapi"},"Probl\xe8mes li\xe9s \xe0 l'API"),Object(i.b)("p",null,"Les APIs sont g\xe9r\xe9s par l'application ",Object(i.b)("inlineCode",{parentName:"p"},"supervisor"),". En utilisant la commande ",Object(i.b)("inlineCode",{parentName:"p"},"supervisorctl")," vous pouvez v\xe9rifier l'\xe9tat de chaque service."),Object(i.b)("p",null,"Si tout va bien, vous verrez les r\xe9sultats en-dessous :"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"geonatureadmin@sig:~$ sudo supervisorctl\natlas                            RUNNING   pid 13337, uptime 1:43:43\ngeonature2                       RUNNING   pid 14182, uptime 0:42:15\ntaxhub                           RUNNING   pid 13341, uptime 1:43:43\nusershub2                        RUNNING   pid 14168, uptime 0:42:17\nsupervisor>\n")),Object(i.b)("p",null,"S'il y a un probl\xe8me, vous verrez des r\xe9sultats un peu comme celui-ci :"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"geonatureadmin@sig:~$ sudo supervisorctl\natlas                            RUNNING   pid 13337, uptime 2:49:39\ngeonature2                       FATAL     Exited too quickly (process log may have details)\ntaxhub                           RUNNING   pid 13341, uptime 2:49:39\nusershub2                        RUNNING   pid 14168, uptime 1:48:13\nsupervisor>\n")),Object(i.b)("p",null,"Vous pouvez lire le journal de chaque service avec la commande ",Object(i.b)("inlineCode",{parentName:"p"},"supervisorctl tail <service>")," :"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),'geonatureadmin@sig:~$ sudo supervisorctl tail geonature2\n[2020-07-22 01:35:10 +0200] [32281] [INFO] Starting gunicorn 19.7.0\n[2020-07-22 01:35:10 +0200] [32281] [INFO] Listening at: http://0.0.0.0:8000 (32281)\n[2020-07-22 01:35:10 +0200] [32281] [INFO] Using worker: sync\n[2020-07-22 01:35:10 +0200] [32291] [INFO] Booting worker with pid: 32291\n[2020-07-22 01:35:16 +0200] [32291] [ERROR] Exception in worker process\nTraceback (most recent call last):\n  File "/home/geonatureadmin/geonature/backend/venv/lib/python3.5/site-packages/gunicorn/arbiter.py", line 578, in spawn_worker\n    worker.init_process()\n  File "/home/geonatureadmin/geonature/backend/venv/lib/python3.5/site-packages/gunicorn/workers/base.py", line 126, in init_process\n    self.load_wsgi()\n  File "/home/geonatureadmin/geonature/backend/venv/lib/python3.5/site-packages/gunicorn/workers/base.py", line 135, in load_wsgi\n    self.wsgi = self.app.wsgi()\n  File "/home/geonatureadmin/geonature/backend/venv/lib/python3.5/site-packages/gunicorn/app/base.py", line 67, in wsgi\n    self.callable = self.load()\n  File "/home/geonatureadmin/geonature/backend/venv/lib/python3.5/site-packages/gunicorn/app/wsgiapp.py", line 65, in load\n    return self.load_wsgiapp()\n  File "/home/geonatureadmin/geonature/backend/venv/lib/python3.5/site-packages/gunicorn/app/wsgiapp.py", line 52, in load_wsgiapp\n    return util.import_app(self.app_uri)\n  File "/home/geonatureadmin/geonature/backend/venv/lib/python3.5/site-packages/gunicorn/util.py", line 376, in import_app\n    __import__(module)\n  File "/home/geonatureadmin/geonature/backend/wsgi.py", line 18, in <module>\n    app = get_app(config)\n  File "/home/geonatureadmin/geonature/backend/server.py", line 143, in get_app\n    for conf, manifest, module in list_and_import_gn_modules(app):\n  File "/home/geonatureadmin/geonature/backend/geonature/utils/env.py", line 200, in list_and_import_gn_modules\n    str(f / "config/conf_gn_module.toml"), GnModuleSchemaProdConf\n  File "/home/geonatureadmin/geonature/backend/geonature/utils/utilstoml.py", line 19, in load_and_validate_toml\n    raise GeoNatureError("Missing file {}".format(toml_file))\ngeonature.utils.errors.GeoNatureError: Missing file /home/geonatureadmin/geonature/external_modules/exports/config/conf_gn_module.toml\n[2020-07-22 01:35:16 +0200] [32291] [INFO] Worker exiting (pid: 32291)\n')),Object(i.b)("p",null,"Et vous pouvez d\xe9marrer et red\xe9marrer les services avec les commandes ",Object(i.b)("inlineCode",{parentName:"p"},"supervisorctl start <service>")," et ",Object(i.b)("inlineCode",{parentName:"p"},"supervisorctl restart <service>"),"."),Object(i.b)("h2",{id:"probl\xe8mes-li\xe9s-au-frontend"},"Probl\xe8mes li\xe9s au frontend"),Object(i.b)("p",null,"Il y a beaucoup de raisons pour lesquelles le frontend peut ne pas fonctionner. Il est conseill\xe9 de bien v\xe9rifier les \xe9l\xe9ments suivants :"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Le routeur et le pare-feu du r\xe9seau du serveur"),Object(i.b)("li",{parentName:"ul"},"La configuration du logiciel ",Object(i.b)("inlineCode",{parentName:"li"},"apache2")),Object(i.b)("li",{parentName:"ul"},"La compilation du frontend"),Object(i.b)("li",{parentName:"ul"},"La configuration de ",Object(i.b)("inlineCode",{parentName:"li"},"geonature")," (ex. ",Object(i.b)("inlineCode",{parentName:"li"},"tsconfig.json"),")"),Object(i.b)("li",{parentName:"ul"},"L'\xe9tat de la certification HTTPS")))}p.isMDXComponent=!0},79:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),c=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=c(t),b=r,m=p["".concat(o,".").concat(b)]||p[b]||d[b]||i;return t?a.a.createElement(m,l(l({ref:n},s),{},{components:t})):a.a.createElement(m,l({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=b;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},80:function(e,n,t){"use strict";var r=t(0),a=t(20);n.a=function(){var e=Object(r.useContext)(a.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},81:function(e,n,t){"use strict";t.d(n,"b",(function(){return i})),t.d(n,"a",(function(){return o}));var r=t(80),a=t(82);function i(){var e=Object(r.a)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,i=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,r){var i=void 0===r?{}:r,o=i.forcePrependBaseUrl,l=void 0!==o&&o,u=i.absolute,s=void 0!==u&&u;if(!t)return t;if(t.startsWith("#"))return t;if(Object(a.b)(t))return t;if(l)return n+t;var c=!t.startsWith(n)?n+t.replace(/^\//,""):t;return s?e+c:c}(i,t,e,n)}}}function o(e,n){return void 0===n&&(n={}),(0,i().withBaseUrl)(e,n)}},82:function(e,n,t){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}t.d(n,"b",(function(){return r})),t.d(n,"a",(function(){return a}))}}]);