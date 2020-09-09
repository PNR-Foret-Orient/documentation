---
title: Données de l'Atlas
sidebar_label: Données
---
import useBaseUrl from '@docusaurus/useBaseUrl';

Cette page concerne les *données* de l'Atlas, c'est-à-dire les données naturalistes qui viennent de GeoNature. Pour vous renseigner sur les images et le texte des pages sur l'Atlas, merci de vous rendre sur la page [Contenu de l'Atlas](atlasContenu.md).

<img alt="Capture d'écran de la présentation de GeoNature-Atlas" src={useBaseUrl('img/docs/geonatureAtlas4.png')} className="tablet" />

*La carte de la page d'accueil*

* Process for updating Atlas content
  * (automatic, but it can be done manually)
  * (different process for updating geospatial data)
* Note on data dégradé
* TaxHub for managing other images!

Crontab

```
postgres@sig:~$ crontab -l
…
# m h  dom mon dow   command
0 * * * * psql -d geonatureatlas -c "SELECT atlas.refresh_materialized_view_data();"
```
