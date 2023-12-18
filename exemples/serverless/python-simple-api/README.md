API Python Simple sur AWS Lambda
--------------------------------

Ce guide vous montrera comment déployer différentes fonctions Python sur AWS Lambda avec le framework Serverless. Dans ce cas, chaque fonction représente une route dans l'API.

**Prérequis:**

1. Avoir un compte AWS.
2. Avoir Node.js et NPM installés.
3. Avoir Serverless Framework installé.

**Étapes:**

1. Clonez le dépôt contenant l'exemple de l'API Python Simple.
2. Naviguez jusqu'au dossier contenant l'exemple de l'API Python Simple.
3. Installez les dépendances nécessaires avec la commande `npm install`.
4. Déployez l'API avec la commande `sls deploy`.

Une fois le déploiement terminé, vous devriez voir l'URL de votre API dans la console. Vous pouvez maintenant faire des requêtes à votre API Python Simple déployée sur AWS Lambda.

----------------------------------------------

**Note sur la configuration de Serverless:**

La configuration de Serverless pour cet exemple est définie dans le fichier `serverless.yml`. Ce fichier spécifie le nom du service, la version du framework, le fournisseur (dans ce cas, AWS), le runtime (Python 3.10), le stage (dev), la région (eu-west-3) et la taille de la mémoire (128 Mo).

