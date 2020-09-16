---
title: Import (module)
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## Résumé

https://github.com/PnX-SI/gn_module_import/blob/master/README.rst :

> Le module permet de traiter un fichier CSV ou GeoJSON sous toute structure de données, d'établir les correspondances nécessaires entre le format source et le format de la synthèse, et de traduire le vocabulaire source vers les nomenclatures SINP. Il stocke et archive les données sources et intègre les données transformées dans la synthèse de GeoNature.


## Configuration

Les droits sur les « mappings » n'est pas attribuer par défaut. Dans cette installation de GeoNature, le groupe `admin` a été fournit avec les droits nécessaire. Si besoin, vous pouvez les changer dans le module « [Admin](https://biodiversite.pnr-foret-orient.fr/geonature/api/permissions_backoffice/users) » de GeoNature.

<img alt="Capture d'écran de l'interface Backoffice de GeoNature" src={useBaseUrl('img/docs/geonatureModuleImport1.png')} className="tablet border" />

*L'interface de la gestion des droits*

## Comment l'utiliser

[La documentation officielle](https://github.com/PnX-SI/gn_module_import#utilisation-du-module-dimports) explique bien les étapes nécessaires.

:::tip
Si quelque chose ne fonctionne pas, ouvrez l'outil « Réseau » des outils de développement de votre navigateur. Il peut vous donner plus d'informations sur les erreurs.
:::

## Captures d'écran

Voilà quelques captures d'écran qui montrent le fonctionnement du module :

<img alt="Capture d'écran de la liste d'imports" src={useBaseUrl('img/docs/geonatureModuleImport2.png')} className="tablet" />

*Liste d'imports*

<img alt="Capture d'écran du téléversement du fichier" src={useBaseUrl('img/docs/geonatureModuleImport3.png')} className="tablet" />

*Téléversement du fichier*

<img alt="Capture d'écran de la correspondance des champs avec le modèle" src={useBaseUrl('img/docs/geonatureModuleImport4.png')} className="tablet" />

*Configuration de la correspondance des champs avec le modèle*

<img alt="Capture d'écran de la correspondance des nomenclatures" src={useBaseUrl('img/docs/geonatureModuleImport5.png')} className="tablet" />

*Configuration des nomenclatures (codes)*

<img alt="Capture d'écran d'un récapitulatif avec une carte" src={useBaseUrl('img/docs/geonatureModuleImport6.png')} className="tablet" />

*Le récapitulatif avant import*

<img alt="Capture d'écran d'un rapport d'erreur(s)" src={useBaseUrl('img/docs/geonatureModuleImport7.png')} className="tablet" />

*Un exemple d'un rapport d'erreur(s)*
