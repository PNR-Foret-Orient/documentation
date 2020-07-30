---
title: GeoNature Mobile
sidebar_label: Aperçu
---
import useBaseUrl from '@docusaurus/useBaseUrl';

:::note
Status : en cours de configuration (2020-07-24)
:::

Certaines fonctionnalités de GeoNature sont disponibles sur les terminals mobiles Android grâce aux applications `Occtax` et `Sync`. Ces applications ne sont pas sur Google Play donc elles doivent être installées manuellement. NB: L'application `Occtax` a besoin de l'application `Sync` pour fonctionner.

## Installation

:::info
Ce guide suppose que vous savez comment fonctionne le terminal et que vous pouvez adapter les instructions pour vos besoins.
:::

:::caution
Il faut installer l'utilitaire `ADB` (Android Debug Bridge) avant de continuer. Sous Linux vous pouvez peut-être utiliser `sudo apt install android-tools-adb` pour le faire.

De plus, vous devez activer le *Débogage USB* dans les options développeur de votre terminal mobile.
:::

Télécharger le fichier `.apk` le plus récent pour chaque appli. Il n'existe pas une version spécifique au PnrFO donc il est conseillé d'utiliser le « *flavour* » `generic`.

* `Sync` : <https://github.com/PnX-SI/gn_mobile_core/releases>
* `Occtax` : <https://github.com/PnX-SI/gn_mobile_occtax/releases>

Brancher le terminal mobile que vous voulez utiliser. Vous pouvez vérifier qu'il est bien connecté en utilisant la commande  `adb devices`. Si tout va bien, vous pouvez installer les applications :
```bash
adb install ./sync-1.0.0-generic-release.apk
adb install ./occtax-1.0.0-generic-release.apk
```
Si les commandes réussissent, vous devriez voir les applications sur le terminal mobile :

<img alt="Capture d'écran après l'installation" src={useBaseUrl('img/docs/mobileScreenshot1.png')} className="mobile" />

### Configuration

Afin d'utiliser les applications avec l'installation GeoNature du PnrFO, il faut changer les paramètres dans l'application `Sync` pour que l'application utilise le bon serveur.

* URL de GeoNature : `https://biodiversite.pnr-foret-orient.fr/geonature`
* URL de TaxHub : `https://biodiversite.pnr-foret-orient.fr/taxhub`

<img alt="Capture d'écran des paramètres" src={useBaseUrl('img/docs/mobileScreenshot2.png')} className="mobile" />

Après vous avez ajouté les deux URLs, appuyez sur la flèche de retour. Si tout va bien, après quelques instants l'application vous demandera de vous connecter.

Si vous disposez d'un compte utilisateur avec les droits nécessaires, l'application fera bientôt une synchronisation initiale.

<img alt="Capture d'écran de la synchronisation" src={useBaseUrl('img/docs/mobileScreenshot3.png')} className="mobile" />

En supposant que la synchronisation se termine avec succès, votre terminal mobile est désormais prêt à l'emploi !

## Dépannage

Si l'application plante, vous pouvez peut-être trouver la raison avec le journal d'événements. Pour ce faire, branchez le terminal mobile et puis utilisez la commande `adb logcat | grep fr.geonature`.

Ce journal d'événements peut vous donner une explication que vous pouvez ensuite partager avec les développeuses·eurs.

## Utilisation

(à faire)