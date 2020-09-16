---
title: Contenu de l'Atlas
sidebar_label: Contenu
---
import useBaseUrl from '@docusaurus/useBaseUrl';

Cette page concerne le *contenu* de l'Atlas, c'est-à-dire les images et le texte des pages sur l'Atlas. Pour vous renseigner sur les données naturalistes, merci de vous rendre sur la page [Données de l'Atlas](atlasDonnees.md).

<img alt="Capture d'écran de la présentation de GeoNature-Atlas" src={useBaseUrl('img/docs/geonatureAtlas3.png')} className="tablet" />

*La page « Présentation de l'Atlas »*

## Gestion du contenu et du thème

GeoNature-Atlas fournit quelques fichiers HTML, CSS et JS qui peuvent être modifiés pour [customiser l'application](https://github.com/PnX-SI/GeoNature-atlas/blob/master/docs/installation.rst#configuration-de-lapplication). Dans cette installation, ces fichiers se trouvent dans un [dépôt sur GitHub](https://github.com/PNR-Foret-Orient/documentation).

Pour les modifier, cloner le dépôt Git sur votre machine en local puis modifier les fichiers comme vous voulez. Ensuite, vous devez les déposer (« push ») sur GitHub.

Pour effectuer vos changements sur l'Atlas, il faut d'abord vous connecter au serveur avec SSH en tant que `geonatureadmin`.

Ensuite, lancer les commandes suivantes depuis le chemin `/home/geonatureadmin/atlas/static/custom` :
```
git pull
sudo supervisorctl restart atlas
```

La première commande télécharge vos modifications, la seconde redémarre le processus pour qu'elles soient appliquées.

:::note
L'apparition des modifications peut prendre quelques minutes. Auquel cas, vider votre cache.
:::

## Pages de contenu

Les pages de contenu se trouve dans le dossier `templates/` du dépôt. Elles sont principalement écrites en HTML mais elles contiennent quelques balises « [Jinja](https://jinja.palletsprojects.com/en/2.11.x/) », un moteur de templates.

Les pages utilisent le framework « [Bootstrap 3](https://getbootstrap.com/docs/3.3/) » pour la partie graphique du site.

Si besoin, vous pouvez modifier le fichier CSS `custom.css` qui se trouve dans la racine du dépôt.

### Ajouter une page

Vous pouvez ajouter des pages statiques de présentation, en plus des pages fournies par défaut.

Pour cela, il faut d'abord créer les pages dans le dépôt et les télécharger sur le serveur. Vous devez ensuite modifier le paramètre STATIC_PAGES du fichier `/home/geonatureadmin/atlas/atlas/configuration.py`, puis redémarrer le service `atlas`.

### Images

Vous pouvez ajouter des images au dépôt dans le dossier `images/`. Ensuite, vous pouvez employer une balise Jinja pour les utiliser, ex. `{{url_for('static', filename='custom/images/placeholder.jpg') }}`.

:::caution
Vous devez redimensionner toutes les images avant des les télécharger sur le serveur. Sinon, des problèmes de lenteur peuvent apparaître pour les visiteur·euse·s de l'Atlas.
:::

Pour les images des espèces, vous devez les ajouter à TaxHub directement.

## Carte

Il existe une page « Carte » avec une carte du parc reprenant les contours administratifs et les zones écologiques sensibles. Cette carte est statique, c'est-à-dire qu'elle est indépendante de GeoNature.

La carte a été générée par l'outil `qgis2web`. Pour la modifier, utiliser cet outil et mettre les nouveaux fichiers dans le dossier `templates/map/`. Si vous utilisez une couche d'OpenStreetMap, vous pourriez besoin de modifier le fichier `index.html` pour que les tuiles soient téléchargées via HTTPS plutôt que HTTP :

```javascript title="templates/map/index.html"
var layer_OSMStandard_0 = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png'…
```

<img alt="Capture d'écran de l'outil qgis2web" src={useBaseUrl('img/docs/geonatureAtlas5.png')} className="tablet" />

*Une capture d'écran de l'outil `qgis2web`.*
