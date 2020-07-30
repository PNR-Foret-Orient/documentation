---
title: Configuration
---
import useBaseUrl from '@docusaurus/useBaseUrl';

GeoNature a été installé sur l'infrastructure du parc pour assurer une bonne performance compte tenu de la vitesse de l'Internet au parc. 

## Où se trouve GeoNature ?

GeoNature est sur le serveur SIG du parc. Le système AYLAN a un pare-feu qui est configuré d'envoyer les requêtes HTTP et HTTPS vers le serveur SIG (192.168.3.134).

<img alt="Diagramme du réseau" src={useBaseUrl('img/docs/reseau.png')} />

Les sites sont disponible aux liens suivants :
* GeoNature <http://biodiversite.pnr-foret-orient.fr/geonature>
* TaxHub <http://biodiversite.pnr-foret-orient.fr/taxhub/>
* UsersHub <http://biodiversite.pnr-foret-orient.fr/usershub>
* Atlas <http://biodiversite.pnr-foret-orient.fr/atlas/>

## Gestion de HTTPS

La certification HTTPS est grâce au service [Let's Encrypt](https://letsencrypt.org/fr/). Le logiciel `certbot` est responsable de la création et le renouvellement du certificat. Avec `cron` et `systemd/timers`, le renouvellement est automatique. En cas de problème, un mail sera envoyé à la personne responsable du SIG du parc.
