---
title: Contenu de l'Atlas
sidebar_label: Contenu
---
import useBaseUrl from '@docusaurus/useBaseUrl';

Cette page concerne le *contenu* de l'Atlas, c'est-à-dire les images et le texte des pages sur l'Atlas. Pour vous renseigner sur les données naturalistes, merci de vous rendre sur la page [Données de l'Atlas](atlasDonnees.md).

<img alt="Capture d'écran de la présentation de GeoNature-Atlas" src={useBaseUrl('img/docs/geonatureAtlas3.png')} className="tablet" />

*La page « Presentation de l'Atlas »*

## Gestion du contenu et du thème

GeoNature-Atlas fournit quelques fichiers HTML, CSS et JS qui peuvent être modifiés pour [customiser l'application](https://github.com/PnX-SI/GeoNature-atlas/blob/master/docs/installation.rst#configuration-de-lapplication). Dans cette installation, ces fichiers se trouvent dans un [dépôt sur GitHub](https://github.com/PNR-Foret-Orient/documentation).

Pour les modifier, cloner le dépôt Git sur votre machine locale puis modifier les fichiers comme vous voulez. Ensuite, vous devez les pousser (« push ») vers GitHub.

Pour effectuer vos changements sur l'Atlas, il faut d'abord vous connecter au serveur avec SSH en tant que « geonatureadmin ».

Ensuite, lancer les commandes suivantes depuis le chemin `/home/geonatureadmin/atlas/static/custom` :
```
git pull
sudo supervisorctl restart atlas
```

La première commande téléchargera vos modifications, la seconde redémarrera le processus 'Atlas' pour qu'elles soient appliquées.

:::note
L'apparition des modifications peut prendre quelques minutes. Vous pourriez avoir besoin de vider votre cache.
:::

## Pages de contenu

Les pages de contenu se trouve dans le dossier `templates/` du dépôt. Elles sont principalement écrits en HTML mais elles contiennent quelques balises « [Jinja](https://jinja.palletsprojects.com/en/2.11.x/) », un moteur de templates.

Les pages utilisent le framework « [Bootstrap 3](https://getbootstrap.com/docs/3.3/) » pour assister avec la présentation graphique du site.

Si besoin, vous pouvez modifier le fichier CSS `custom.css` qui se trouve dans la racine du dépôt.

### Ajouter une page

Vous pouvez ajouter des pages statiques de présentation, en plus des pages fournies par défaut.

Pour cela, il faut d'abord créer les pages dans le dépôt et les télécharger sur le serveur. Vous devez ensuite modifier le paramètre STATIC_PAGES du fichier `/home/geonatureadmin/atlas/atlas/configuration.py`, puis redémarrer le service Atlas.

### Images

Vous pouvez ajouter des images au dépôt dans le dossier `images/`. Ensuite, vous pouvez employer une balise Jinja pour les utiliser, ex. `{{url_for('static', filename='custom/images/placeholder.jpg') }}`.

:::note
Vous devez redimensionner toutes les images avant des les télécharger sur le serveur. Sinon, ça peut créer des problèmes de vitesse pour les visiteur·euse·s de l'Atlas.
:::

Pour les images des espèces, vous devez les ajouter à TaxHub directement.

## Map

Il existe une page « Carte » avec une carte du parc et les zones différentes que l'on y trouve. Cette carte est statique, c'est-à-dire que ça ne montre pas des données dynamique de GeoNature.

La carte a été générée par l'outil `qgis2web`. Pour la regénérez, utiliser cet outil et mettre l'output dans le dossier `templates/map/`. Si vous utilisez une couche d'OpenStreetMap, vous pourriez besoin de modifier le fichier `index.html` pour que les tuiles sont téléchargés par HTTPS plutôt que HTTP :

```javascript title="templates/map/index.html"
var layer_OSMStandard_0 = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png'…
```

<img alt="Capture d'écran de l'outil qgis2web" src={useBaseUrl('img/docs/geonatureAtlas5.png')} className="tablet" />

*Une capture d'écran de l'outil `qgis2web`.*
