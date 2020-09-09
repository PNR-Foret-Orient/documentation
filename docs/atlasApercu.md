---
title: GeoNature Atlas
sidebar_label: Aperçu
---
import useBaseUrl from '@docusaurus/useBaseUrl';

:::note
Status : configuré et harmonisé (2020-09-08)
:::

## Résumé

GeoNature-Atlas et un atlas « Faune-Flore basé sur les données présentes dans la synthèse de GeoNature ». Il est destiné au grand public.

<img alt="Capture d'écran de l'Accueil GeoNature-Atlas" src={useBaseUrl('img/docs/geonatureAtlas1.png')} className="tablet" />

*La page d'accueil*

<img alt="Capture d'écran d'une commune sur GeoNature-Atlas" src={useBaseUrl('img/docs/geonatureAtlas2.png')} className="tablet" />

*Exemple d'une page d'une commune*

## Paramètres de configuration

Les paramètres se trouve dans le répertoire `/home/geonatureadmin/atlas/atlas/configuration`.

Contrairement aux [fichiers de configuration de GeoNature Mobile](mobileApercu.md#mettre-à-jour-la-configuration), ces fichiers ne sont pas dans un dépôt de GitHub. Ceci est dû au fait que les fichiers contiennent des secrets qui ne peuvent pas être publics. En raison du pare-feu du réseau, de les avoir dans un dépôt privé n'est pas simple. Donc, ils doivent être modifiés sur place.

## Redirection

Le serveur est configuré de rediriger des utilisateur·rice·s vers l'Atlas (/atlas) depuis l'URL racine (/). Pour en savoir plus, allez à [Serveur: Configuration](serveurConfiguration.md#redirection).
