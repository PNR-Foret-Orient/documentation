---
title: Dépannage
---
import useBaseUrl from '@docusaurus/useBaseUrl';

:::info
La documentation officielle est disponible : http://docs.geonature.fr/FAQ.html
Ce page ne vise pas à la remplacer, mais plutôt fournir des instructions supplémentaires.
:::

Si vouz rencontrez des problèmes avec GeoNature ou ses applications associées, vous pouvez essayer les démarches suivantes.

## Comment déterminer la source du problème

Chaque application (GeoNature, TaxHub, Atlas…) utilise un « frontend » (la partie d'application qu'on voit) et une « API » ou « backend » (la partie d'application qui fourni les données depuis la BDD).

### Le problème est peut-être lié à l'API si…

* vous n'arrivez pas à vous connecter même si vous disposez d'un compte utilisateur
* GeoNature ne montre pas les données, comme l'illustre la capture d'écran suivante

<img alt="Capture d'écran de GeoNature avec un problème lié à l'API" src={useBaseUrl('img/docs/depannageAPI.png')} />

### Le problème est peut-être lié au frontend si…

Vous voyez les erreurs comme les captures d'écran ci-dessous :

<img alt="Capture d'écran de GeoNature avec un problème lié à la service apache2" src={useBaseUrl('img/docs/depannageApache1.png')} />

<img alt="Capture d'écran de GeoNature avec un problème lié à la service apache2" src={useBaseUrl('img/docs/depannageApache2.png')} />

## Problèmes liés à l'API

Les APIs sont gérés par l'application `supervisor`. En utilisant la commande `supervisorctl` vous pouvez vérifier l'état de chaque service.

Si tout va bien, vous verrez les résultats en-dessous :

```bash
geonatureadmin@sig:~$ sudo supervisorctl
atlas                            RUNNING   pid 13337, uptime 1:43:43
geonature2                       RUNNING   pid 14182, uptime 0:42:15
taxhub                           RUNNING   pid 13341, uptime 1:43:43
usershub2                        RUNNING   pid 14168, uptime 0:42:17
supervisor>
```

S'il y a un problème, vous verrez des résultats un peu comme celui-ci :

```bash
geonatureadmin@sig:~$ sudo supervisorctl
atlas                            RUNNING   pid 13337, uptime 2:49:39
geonature2                       FATAL     Exited too quickly (process log may have details)
taxhub                           RUNNING   pid 13341, uptime 2:49:39
usershub2                        RUNNING   pid 14168, uptime 1:48:13
supervisor>
```

Vous pouvez lire le journal de chaque service avec la commande `supervisorctl tail <service>` :

```bash
geonatureadmin@sig:~$ sudo supervisorctl tail geonature2
[2020-07-22 01:35:10 +0200] [32281] [INFO] Starting gunicorn 19.7.0
[2020-07-22 01:35:10 +0200] [32281] [INFO] Listening at: http://0.0.0.0:8000 (32281)
[2020-07-22 01:35:10 +0200] [32281] [INFO] Using worker: sync
[2020-07-22 01:35:10 +0200] [32291] [INFO] Booting worker with pid: 32291
[2020-07-22 01:35:16 +0200] [32291] [ERROR] Exception in worker process
Traceback (most recent call last):
  File "/home/geonatureadmin/geonature/backend/venv/lib/python3.5/site-packages/gunicorn/arbiter.py", line 578, in spawn_worker
    worker.init_process()
  File "/home/geonatureadmin/geonature/backend/venv/lib/python3.5/site-packages/gunicorn/workers/base.py", line 126, in init_process
    self.load_wsgi()
  File "/home/geonatureadmin/geonature/backend/venv/lib/python3.5/site-packages/gunicorn/workers/base.py", line 135, in load_wsgi
    self.wsgi = self.app.wsgi()
  File "/home/geonatureadmin/geonature/backend/venv/lib/python3.5/site-packages/gunicorn/app/base.py", line 67, in wsgi
    self.callable = self.load()
  File "/home/geonatureadmin/geonature/backend/venv/lib/python3.5/site-packages/gunicorn/app/wsgiapp.py", line 65, in load
    return self.load_wsgiapp()
  File "/home/geonatureadmin/geonature/backend/venv/lib/python3.5/site-packages/gunicorn/app/wsgiapp.py", line 52, in load_wsgiapp
    return util.import_app(self.app_uri)
  File "/home/geonatureadmin/geonature/backend/venv/lib/python3.5/site-packages/gunicorn/util.py", line 376, in import_app
    __import__(module)
  File "/home/geonatureadmin/geonature/backend/wsgi.py", line 18, in <module>
    app = get_app(config)
  File "/home/geonatureadmin/geonature/backend/server.py", line 143, in get_app
    for conf, manifest, module in list_and_import_gn_modules(app):
  File "/home/geonatureadmin/geonature/backend/geonature/utils/env.py", line 200, in list_and_import_gn_modules
    str(f / "config/conf_gn_module.toml"), GnModuleSchemaProdConf
  File "/home/geonatureadmin/geonature/backend/geonature/utils/utilstoml.py", line 19, in load_and_validate_toml
    raise GeoNatureError("Missing file {}".format(toml_file))
geonature.utils.errors.GeoNatureError: Missing file /home/geonatureadmin/geonature/external_modules/exports/config/conf_gn_module.toml
[2020-07-22 01:35:16 +0200] [32291] [INFO] Worker exiting (pid: 32291)
```

Et vous pouvez démarrer et redémarrer les services avec les commandes `supervisorctl start <service>` et `supervisorctl restart <service>`.

## Problèmes liés au frontend

Il y a beaucoup de raisons pour lesquelles le frontend peut ne pas fonctionner. Il est conseillé de bien vérifier les éléments suivants :

* Le routeur et le pare-feu du réseau du serveur
* La configuration du logiciel `apache2`
* La compilation du frontend
* La configuration de `geonature` (ex. `tsconfig.json`)
* L'état de la certification HTTPS
