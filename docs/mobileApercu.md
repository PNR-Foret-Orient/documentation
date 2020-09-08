---
title: GeoNature Mobile
sidebar_label: Aperçu
---
import useBaseUrl from '@docusaurus/useBaseUrl';

:::note
Status : configuré (2020-08-28)
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

Heureusement, l'interface de l'application est assez intuitive. Voilà quelques captures d'écran pour illustrer comment l'application fonctionne :

<img alt="1. Observateur et date" src={useBaseUrl('img/docs/mobileUtilisation1.png')} className="mobile" />
<img alt="2. Pointage" src={useBaseUrl('img/docs/mobileUtilisation2.png')} className="mobile" />
<img alt="3. Taxons" src={useBaseUrl('img/docs/mobileUtilisation3.png')} className="mobile" />
<img alt="4. Informations" src={useBaseUrl('img/docs/mobileUtilisation4.png')} className="mobile" />
<img alt="5. Dénombrement" src={useBaseUrl('img/docs/mobileUtilisation5.png')} className="mobile" />
<img alt="6. Bilan de la saisie" src={useBaseUrl('img/docs/mobileUtilisation6.png')} className="mobile" />

Pour en savoir plus, veuillez vous rendre sur [la documentation officielle](https://github.com/PnX-SI/gn_mobile_occtax/blob/master/docs/installation-fr.md#utilisation).

## Fonds de carte

Par défaut, l'application ne fournit pas les fonds de carte. Pour les ajouter, il faut les créer et puis les ajouter sur le terminal mobile vous-même. Les paramètres de l'application vous indiquent les chemins nécessaires de la mémoire interne et la carte externe (si disponible).

Vous devez également préciser les fonds et les couches cartographiques (si besoin) dans les fichiers de configuration, qui se trouvent sur le serveur SIG.

Pour en savoir plus, veuillez vous rendre sur [la documentation officielle](https://github.com/PnX-SI/gn_mobile_occtax/blob/master/docs/installation-fr.md#installer-et-configurer-les-applications).

## Mettre à jour la configuration

Les fichiers de configuration se trouvent dans le dépôt : https://github.com/PNR-Foret-Orient/mobile-configuration

Pour les mettre à jour, vous pouvez tout d'abord les modifier comme vous voulez, et ensuite les télécharger sur le serveur en utilisant la commande : `git pull` depuis le chemin indiqué dans le README.
