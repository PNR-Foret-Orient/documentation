---
title: Monitoring (module)
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## Résumé

https://github.com/PnX-SI/gn_module_monitoring :

> Ce module permet de gérer de façon générique des données de protocoles "simples" articulés en 3 niveaux : des sites (nom, type, localisation) dans lesquels on fait des visites (dates, observateurs) dans lesquelles on peut faire des observations (espèces).

Allez sur [la documentation officielle](https://github.com/PnX-SI/gn_module_monitoring) pour comprendre la fonctionnement de ce module et comment créer un sous-module.

<img alt="Capture d'écran du module" src={useBaseUrl('img/docs/geonatureModuleMonitoring1.png')} className="tablet" />

## Gestion de sous-modules

Si vous voulez créer ou modifier un sous-module, comme les autres fichiers de configuration (ex. de l'atlas), ils se trouvent dans un [dépôt sur GitHub](https://github.com/PNR-Foret-Orient/protocoles).

Pour les modifier, cloner le dépôt Git sur votre machine en local puis modifier les fichiers comme vous voulez. Ensuite, vous devez les déposer (« push ») sur GitHub.

Pour installer vos sous-modules, il faut d'abord vous connecter au serveur avec SSH en tant que `geonatureadmin`.

Ensuite, lancer les commandes suivantes depuis le chemin `/home/geonatureadmin/gn_modules_monitoring/contrib` :

```
git pull
source ~/geonature/backend/venv/bin/activate
flask monitorings install <mon_chemin_absolu_vers_l_archive>/<protocole> <protocole>
```

[En savoir plus](https://github.com/PnX-SI/gn_module_monitoring#création-dun-sous-module)
