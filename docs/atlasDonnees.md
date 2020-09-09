---
title: Données de l'Atlas
sidebar_label: Données
---
import useBaseUrl from '@docusaurus/useBaseUrl';

Cette page concerne les *données* de l'Atlas, c'est-à-dire les données naturalistes qui viennent de GeoNature. Pour vous renseigner sur les images et le texte des pages sur l'Atlas, merci de vous rendre sur la page [Contenu de l'Atlas](atlasContenu.md).

<img alt="Capture d'écran de la présentation de GeoNature-Atlas" src={useBaseUrl('img/docs/geonatureAtlas4.png')} className="tablet" />

*La carte de la page d'accueil*

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

## Dégradation des données

(à faire)
