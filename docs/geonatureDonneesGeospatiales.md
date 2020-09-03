---
title: Données géospatiales
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## Résumé

Les données géospatiales sont gérées directement dans la BDD `geonature2db` :

* `ref_geo.bib_areas_types` : Une bibliothèque des types de zones (dit « areas ») qu'on peut enregistrer. Ex. Communes, Mailles 10*10, Réserves naturelles…
* `ref_geo.dem` : Un modèle numérique de terrain de la France métropolitaine (dit « DEM »).
* `ref_geo.dem_vector` : Un modèle numérique de terrain en format vectoriel.
* `ref_geo.l_areas` : Une table qui contient tous les zones différentes. La colonne `id_type` correspond aux zones dans la table `ref_geo.bib_areas_types`.
* `ref_geo.li_grids` : Une table qui fournit plus d'informations sur les mailles (dit « grids »). La table est liée à `ref_geo.l_areas` par la clé `id_area`.
* `ref_geo.li_municipalities` : Une table qui fournit plus d'informations sur les municipalitiés (dit « municipalities »). La table est liée à `ref_geo.l_areas` par la clé `id_area`.

Voilà quelques exemples des tables :

<img alt="pgAdmin ref_geo.bib_areas_types" src={useBaseUrl('img/docs/geonatureDonneesGeospatiales1.png')} className="tablet" />

*Exemple de la table `ref_geo.bib_areas_types`*

<img alt="pgAdmin ref_geo.l_areas" src={useBaseUrl('img/docs/geonatureDonneesGeospatiales2.png')} className="tablet" />

*Exemple de la table `ref_geo.l_areas`*

<img alt="pgAdmin ref_geo.li_municipalities" src={useBaseUrl('img/docs/geonatureDonneesGeospatiales3.png')} className="tablet" />

*Exemple de la table `ref_geo.li_municipalities`*

## Comment gérer ces données ?

Vous devez vous connecter directement à la BDD. Si besoin, vous pouvez créer un tunnel SSH pour accéder le port de la BDD (5432) :

```
ssh <adresse IP du serveur> -L 5432:localhost:5432
```

La gestion de la BDD peut être effectuée par n'importe quel outil tant que ça fonctionne avec Postgres. Vous pouvez même utiliser QGIS directement pour voir et modifier les données.

<img alt="QGIS ref_geo.l_areas" src={useBaseUrl('img/docs/geonatureDonneesGeospatiales4.png')} className="tablet" />
