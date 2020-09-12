---
title: Données de l'Atlas
sidebar_label: Données
---
import useBaseUrl from '@docusaurus/useBaseUrl';

Cette page concerne les *données* de l'Atlas, c'est-à-dire les données naturalistes qui viennent de GeoNature. Pour vous renseigner sur les images et le texte des pages sur l'Atlas, merci de vous rendre sur la page [Contenu de l'Atlas](atlasContenu.md).

<img alt="Capture d'écran de la présentation de GeoNature-Atlas" src={useBaseUrl('img/docs/geonatureAtlas4.png')} className="tablet" />

*La carte de la page d'accueil*

## Quelles sont les données visibles sur l'Atlas ?

Pour info, l'Atlas :
* filtre les données non-diffusable (avec le code « 4 ») - [voir le code](https://github.com/PnX-SI/GeoNature-atlas/blob/3e595c81db9e0490cf4367b024cc97defd3a9668/data/gn2/atlas_synthese.sql#L35)
* inclut seulement les données « présentes » (avec le code « Pr ») - [voir le code](https://github.com/PnX-SI/GeoNature-atlas/blob/3e595c81db9e0490cf4367b024cc97defd3a9668/data/gn2/atlas_synthese.sql#L36)
* inclut seulement les données dans le territoire du parc - [voir le code](https://github.com/PnX-SI/GeoNature-atlas/blob/3e595c81db9e0490cf4367b024cc97defd3a9668/data/atlas.sql#L33)

:::info
Le « territoire » correspond aux données qui se trouvent dans la table `ref_geo.l_areas` de `geonature2db` avec le type « (15) Parcs naturels régionaux ». Si vous voulez mettre à jour le périmètre (ex. l’élargissement du parc), vous devez modifier les données géospatiales dans cette table puis [actualiser les vues materialisées](#lancer-une-mise-à-jour-manuellement).
:::

## Dégradation des données

Selon la documentation officielle, « GeoNature-atlas fournit un mécanisme de dégration des données basé sur les standards du SINP. Connecté à GeoNature version 2, l'atlas utilise le champs `id_nomenclature_diffusion_level` de la table `gn_synthese.synthese` pour construire la vue atlas.vm_observations et remplir la géometrie adaptée en se basant sur référentiel géographique de GeoNature. Pour des raisons de performance et de lisibilité, GeoNature-atlas affiche le centroïde de la géometrie à laquelle l'observation est dégradée. »

À partir des données bruts présentes dans GeoNature, l'atlas applique le floutage suivant :

Niveau | Visible? | Description
------ | -------- | -----------
0 | Oui | Diffusion standard | à la maille, à la ZNIEFF, à la commune, à l’espace protégé (statut par défaut).
1 | Oui | Diffusion floutée de la DEE par rattachement à la commune
2 | Oui | Diffusion floutée par rattachement à la maille 10 x 10 km
3 | Non | Diffusion floutée par rattachement au département
4 | Non | Aucune diffusion (cas exceptionnel), correspond à une donnée de sensibilité 4
5 | Oui | Diffusion telle quelle : si une donnée précise existe, elle doit être diffusée telle quelle (non dégradée)

:::caution
Les données au niveau 3 ne sont pas visibles parce que le centroïde du département ne se trouve pas sur le territoire du parc.
:::

Pour en savoir plus, lisez la [documentation officielle](https://github.com/PnX-SI/GeoNature-atlas/blob/master/docs/degradation_donnees.rst).

## Mises à jour automatiques

Cette installation de GeoNature-Atlas est configurée d'actualiser automatiquement les « vues materialisées » de la BDD, qui sont responsables des données naturalistes accessibles par l'Atlas. Ce processus déroule toutes les heures, grace au `crontab` :

```
postgres@sig:~$ crontab -l
…
# m h  dom mon dow   command
0 * * * * psql -d geonatureatlas -c "SELECT atlas.refresh_materialized_view_data();"
```

:::note
Le processus automatique n'applique que les données naturalistes. Pour rafraichir les données géographiques vous devez le faire manuellement.
:::

## Lancer une mise à jour manuellement

Pour mettre à jour l'atlas manuellement, vous devez vous connecter à la BDD puis lancer les commandes suivantes :

```
SELECT atlas.refresh_materialized_view_data(); -- actualiser les données naturalistes
SELECT atlas.refresh_materialized_view_ref_geo(); -- actualiser les données géographiques
```

Pour en savoir plus, [lisez la documentation officielle](https://github.com/PnX-SI/GeoNature-atlas/blob/master/docs/vues_materialisees_maj.rst#mise-à-jour-des-vues-matérialisées)
