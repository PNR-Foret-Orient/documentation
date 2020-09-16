---
title: Fonds de carte (mobile)
sidebar_label: Fonds de carte
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## Fonds de carte

Par défaut, l'application ne fournit pas les fonds de carte. Pour les ajouter, il faut les créer et les ajouter vous-même sur le terminal mobile. Les paramètres de l'application vous indiquent les chemins nécessaires de la mémoire interne et la carte externe (si disponible).

Vous devez également préciser les fonds et les couches cartographiques (si besoin) dans les fichiers de configuration, qui se trouvent sur le serveur SIG.

Pour en savoir plus, veuillez vous rendre sur [la documentation officielle](https://github.com/PnX-SI/gn_mobile_occtax/blob/master/docs/installation-fr.md#installer-et-configurer-les-applications).

<img alt="Capture d'écran d'une carte sur l'appli" src={useBaseUrl('img/docs/mobileCarte1.png')} className="mobile" />

*Exemple d'un fond de carte sur 'OccTax'*

## Créer un fichier MBTiles

De nombreux formats peuvent être utilisés comme fond de carte. MBTiles est une option assez typique. Il y a beaucoup d'options pour créer un fichier MBTiles, mais une option simple est d'utiliser un outil intégré dans QGIS.

Voilà une capture d'écran de l'outil :

<img alt="QGIS « Generate XYZ Tiles » " src={useBaseUrl('img/docs/mobileCarte2.png')} className="tablet" />

Une capture d'écran disponible dans Google Drive vous montre le fonctionnement de cet outil.

:::note
Renseignez-vous de la configuration des applis mobiles pour assurer que vous avez créé un fichier MBTiles qui correspond aux niveaux de zoom minimum et maximum .
:::

## Installer un fond de carte

:::note
Une capture d'écran de ce processus est disponible dans Google Drive.
:::

Tout d'abord vous devez faire les changements nécessaires dans le fichier `occtax/settings.json` qui se trouve sur [GitHub](https://github.com/PNR-Foret-Orient/mobile-configuration). Vous voudrez probablement ajouter ou modifier les couches (« layers ») :

```json title="occtax/settings.json"
  …
  "layers": [
    {
      "label": "PnrFO",
      "source": "pnrfo.mbtiles"
    }
  ],
  …
```

Mettre à jour ces changements sur le serveur avec `git pull` et `sudo supervisorctl restart atlas`.

Ensuite, le fichier `.mbtiles` doit être transféré vers le terminal mobile.
* Si vous avez une carte SD : `<carte sd>/Android/data/fr.geonature.occtax/files/`
* Sinon : `<mémoire interne>/Android/data/fr.geonature.occtax/files/`

<img alt="Capture d'écran d'Android File Transfer" src={useBaseUrl('img/docs/mobileCarte3.png')} className="tablet" />

*Android File Transfer*
