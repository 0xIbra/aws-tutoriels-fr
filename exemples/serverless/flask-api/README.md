API Flask sur AWS Lambda
------------------------

Ce guide vous montrera comment déployer une API Flask sur AWS Lambda avec le framework Serverless.

**Prérequis:**

1. Avoir un compte AWS.
2. Avoir Node.js et NPM installés.
3. Avoir Serverless Framework installé.

**Étapes:**

1. Clonez le dépôt contenant l'exemple de l'API Flask.
2. Naviguez jusqu'au dossier contenant l'exemple de l'API Flask.
3. Installez les dépendances nécessaires avec la commande `npm install`.
4. Déployez l'API avec la commande `sls deploy`.

Une fois le déploiement terminé, vous devriez voir l'URL de votre API dans la console. Vous pouvez maintenant faire des requêtes à votre API Flask déployée sur AWS Lambda.

----------------------------------------------

**Note sur la configuration de Serverless:**

Dans le fichier `serverless.yml`, une seule fonction est configurée pour l'API Flask, malgré la présence de plusieurs routes API. C'est parce que Flask gère le routage une fois que la requête atteint l'application. Ainsi, une seule fonction AWS Lambda est nécessaire pour faire le pont entre l'API Gateway AWS et notre application Flask.
