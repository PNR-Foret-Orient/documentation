---
title: LPO
---
import useBaseUrl from '@docusaurus/useBaseUrl';

:::note
Status : en attendant des discussions avec la LPO (2020-08-19).
:::

Le PnrFO est un partenaire de la [LPO Champagne-Ardenne](http://champagne-ardenne.lpo.fr) (LPO CA).

La LPO Champagne-Ardenne entretient « [un portail interactif](https://www.faune-champagne-ardenne.org)  consacré à la collecte et à la diffusion d’observations naturalistes en Champagne-Ardenne ». Comme des autres LPOs, le portail est basé sur le système « VisioNature ».

<img alt="Capture d'écran de VisioNature" src={useBaseUrl('img/docs/visionature.png')} />

On voudrait avoir les moyennes pour transférer des données naturalistes de VisioNature à GeoNature. Idéalement ce sera une passerelle technique automatique mais si ce n'est pas réalisable il suffira d'avoir un processus manuel pour le faire.

Heureusement il semble que la LPO Auvergne-Rhône-Alpes (LPO AuRA) est en train de deviser un processus manuel. Ce processus exige :

1. Un [export des données](https://framagit.org/lpo/Client_API_VN/) de VisioNature à une BDD locale (Postgres)
2. L'utilisation [des scripts](https://framagit.org/lpoaura/geonature/gn_vn2synthese/-/tree/develop) `gn_vn2synthese` pour transferer les données reçues depuis l'API de VisioNature vers la synthèse de GeoNature.

Pour en savoir plus des démarches nécessaires on a envoyé un mail au développeur qui a créé les scripts, parce que il semble qu'ils soient toujours en développement.
