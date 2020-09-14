---
title: Sauvegardes
---
import useBaseUrl from '@docusaurus/useBaseUrl';

Il y a deux éléments principaux qui doivent être sauvegardés :
1. la BDD
2. le répertoire personnel de l'utilisateur `geonatureadmin` : `/home/geonatureadmin/`

La BDD contient toutes les données de GeoNature et ses modules associés. Le répertoire `/home/geonatureadmin/` ne contient pas seulement le code source, mais aussi tous les fichiers médias qui ont été téléchargés. Par exemple, les images des espèces de TaxHub se trouvent dans le chemin `/home/geonatureadmin/taxhub/static/medias`.

En dehors de ces éléments, il y a quelques fichiers de configuration, comme ceux d'`apache2` ou `certbot`. Si il y a une grosse panne, par exemple de disque, il est possible de récréer ces fichiers selon la documentation de GeoNature. Ceci n'est pas le cas avec les données dans la BDD !

Même s'il y a des sauvegardes régulières de l'ensemble du système, il est préférable de faire une une sauvegarde de la BDD avant d'exécuter des scripts qui touchent beaucoup de données. Ex. les scripts de mise à jour.

Pour en savoir plus, lire [la documentation officielle](http://docs.geonature.fr/admin-manual.html#sauvegarde-et-restauration).

## Sauvegarder la BDD

Vous pouvez effectuer une sauvegarde depuis `DBeaver`, `pgadmin4` ou un autre logiciel d'administration des BDDs.

<img alt="Capture d'écran du module validation" src={useBaseUrl('img/docs/serveurSauvegardes1.png')} className="tablet" />

*Exemple du processus de sauvegarde dans DBeaver*

Si vous voulez faire une sauvegarde directement sur le serveur, il faut s'identifer en utilisateur `postgres` :

```
sudo su postgres
pg_dump -Fc geonature2db  > <chemin_de_sauvegarde>
```

:::ATTENTION
La BDD de l'Atlas `geonatureatlas` est differente de GeoNature, elle n'est donc pas incluse dans une sauvegarde de la BDD `geonature2db`. En théorie ce n'est pas un problème parce que les vues de l'Atlas (BDD fille) sont créées à paritr de la BDD mére `geonature2db`. En cas de problème vous pouvez les régénérer.
:::

## Sauvegarder les fichiers

Vous pouvez sauvegarder presque tous les fichies avec les commandes suivantes :

```
sudo su - geonatureadmin
tar --exclude "./.node-gyp" --exclude "./.nvm" --exclude "./.npm" --exclude "./.local" --exclude "./.cache" --exclude "tmp" --exclude "site-packages" --exclude "node_modules" --exclude "./backup" -zcvf /home/`whoami`/backup/`date +%Y%m%d%H%M`.tar.gz ./
```

Certains fichiers sont exclus, comme ceux du cache, des paquets et des bibliothèques qu'on peut télécharger à nouveau.
