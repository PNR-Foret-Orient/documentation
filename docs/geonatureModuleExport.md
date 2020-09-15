---
title: Export (module)
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## Résumé

Le module d'export ajoute des fonctionnalités d'export à GeoNature.

<https://github.com/PnX-SI/gn_module_export/blob/master/README.md> :
> Fonctionnalités principales:
  * Interface administrateur de gestion des exports créés dynamiquement à partir de vues dans la base de données de GeoNature
  * Interface utilisateur permettant de réaliser des exports sous forme de fichiers (CSV, JSON, GeoJSON, SHP)
  * API JSON d'interrogation dynamique et filtrable des exports
  * Génération automatique planifiée des fichiers des exports
  * Export sémantique RDF au format Darwin-SW

## Comment l'utiliser

Actuellement le module est configuré pour l'export des données de la synthèse au standard SINP. L'utilisation est assez simple, vous devez sélectionner les donnés que vous voulez exporter, puis choisissez le format désiré. Vous recevrez par mail un lien de téléchargement.

:::caution
Le mail peut être considéré comme du spam. Vérifiez bien vos dossiers !
:::

<img alt="Capture d'écran de la configuration de l'export" src={useBaseUrl('img/docs/geonatureModuleExport1.png')} className="tablet" />

*Configuration de l'export*

<img alt="Capture d'écran d'un mail" src={useBaseUrl('img/docs/geonatureModuleExport2.png')} className="tablet" />

*Exemple d'un mail avec un lien de téléchargement*

## Administration du module

Il est possible de créer un nouvel export. Pour le faire vous devez d'abord créer une vue dans la base de données puis l'enregistrer dans le module Admin : <https://biodiversite.pnr-foret-orient.fr/geonature/api/admin/export/>.

Pour en savoir plus, lire [la documentation officielle](https://github.com/PnX-SI/gn_module_export/blob/master/README.md#administration-du-module).

<img alt="Capture d'écran de DBeaver" src={useBaseUrl('img/docs/geonatureModuleExport3.png')} className="tablet" />

*Exemple d'une vue `v_synthese_shp` dans DBeaver*

<img alt="Capture d'écran XXXXX" src={useBaseUrl('img/docs/geonatureModuleExport4.png')} className="tablet" />

*Le formulaire de création d'un export*
