---
title: Configuration
---
import useBaseUrl from '@docusaurus/useBaseUrl';

GeoNature a été installé sur l'infrastructure informatique du Parc pour assurer une bonne performance compte tenu du faible débit.

## Où se trouve GeoNature ?

GeoNature est sur le serveur SIG du parc. Le système AYLAN a un pare-feu qui est en charge d'envoyer les requêtes HTTP et HTTPS vers le serveur SIG (192.168.3.134).

<img alt="Diagramme du réseau" src={useBaseUrl('img/docs/reseau.png')} />

Les applications web sont disponible suivant ces liens :
* GeoNature <http://biodiversite.pnr-foret-orient.fr/geonature>
* TaxHub <http://biodiversite.pnr-foret-orient.fr/taxhub/>
* UsersHub <http://biodiversite.pnr-foret-orient.fr/usershub>
* Atlas <http://biodiversite.pnr-foret-orient.fr/atlas/>

## Gestion de HTTPS

La certification HTTPS s'appuie sur [Let's Encrypt](https://letsencrypt.org/fr/). Le logiciel `certbot` est en charge de la création et du renouvellement du certificat. Avec `cron` et `systemd/timers`, le renouvellement est automatique. En cas de problème, un mail sera envoyé à la personne responsable du SIG du parc.

## Redirection

Le serveur est configuré de rediriger les visiteur·euse·s à la racine du serveur (<https://biodiversite.pnr-foret-orient.fr/>) vers l'Atlas : (<https://biodiversite.pnr-foret-orient.fr/atlas/>).

Si besoin, la redirection peut être modifiée ou supprimée.

```markup title="/etc/apache2/sites-available/000-default-le-ssl.conf"
RewriteEngine on
RewriteRule ^/$ atlas/ [END,NE,R=permanent]
```

### Pourquoi une redirection au lieu d'installer l'Atlas directement à la racine ?

Dans cette installation de GeoNature, tous les outils se trouvent sur un seul serveur et un seul nom de domaine. Si l'Atlas se trouve à la racine, cela peut interférer avec les autres outils et compliquer le renouvellement des certificats HTTPS.
