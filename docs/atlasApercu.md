---
title: GeoNature Atlas
sidebar_label: Aperçu
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## Résumé

GeoNature-Atlas est un atlas « Faune-Flore basé sur les données présentes dans la synthèse de GeoNature ». C'est le portail destiné au grand public.

<img alt="Capture d'écran de l'Accueil GeoNature-Atlas" src={useBaseUrl('img/docs/geonatureAtlas1.png')} className="tablet" />

*La page d'accueil*

<img alt="Capture d'écran d'une commune sur GeoNature-Atlas" src={useBaseUrl('img/docs/geonatureAtlas2.png')} className="tablet" />

*Exemple d'une page d'une commune*

## Paramètres de configuration

Les paramètres se trouvent dans le répertoire `/home/geonatureadmin/atlas/atlas/configuration`.

Contrairement aux [fichiers de configuration de GeoNature Mobile](mobileApercu.md#mettre-à-jour-la-configuration), ces fichiers ne sont pas dans un dépôt de GitHub. Ceci est dû au fait que les fichiers contiennent des informations qui ne doivent pas être publiques. Le pare-feu du réseau empêche l'utilisation simple d'un dépôt privé donc les fichiers doivent être modifiés sur place.

## Redirection

Le serveur est chargé de rediriger des utilisateur·rice·s vers l'Atlas (/atlas) depuis l'URL racine (/). Pour en savoir plus, allez à [Serveur: Configuration](serveurConfiguration.md#redirection).
