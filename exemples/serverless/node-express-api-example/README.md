# Cadre Serverless Node Express API sur AWS

Ce modèle démontre comment développer et déployer un simple service API Node Express fonctionnant sur AWS Lambda en utilisant le Cadre Serverless traditionnel.

## Anatomie du modèle

Ce modèle configure une seule fonction, `api`, qui est responsable de la gestion de toutes les demandes entrantes grâce à l'événement `httpApi`. Pour en savoir plus sur les options de configuration de l'événement `httpApi`, veuillez vous référer à [la documentation de l'événement httpApi](https://www.serverless.com/framework/docs/providers/aws/events/http-api/). Comme l'événement est configuré de manière à accepter toutes les demandes entrantes, le cadre `express` est responsable du routage et de la gestion des demandes en interne. L'implémentation profite du paquet `serverless-http`, qui vous permet d'envelopper les applications `express` existantes. Pour en savoir plus sur `serverless-http`, veuillez vous référer au [répertoire GitHub correspondant](https://github.com/dougmoscrop/serverless-http).

## Utilisation

### Déploiement

Installez les dépendances avec :

```
npm install
```

et ensuite déployez avec :

```
serverless deploy
```

Après avoir exécuté le déploiement, vous devriez voir une sortie similaire à :

```bash
Déploiement du projet node-express-api-example en stage dev (eu-west-3)

✔ Service déployé sur la pile node-express-api-example-project-dev (196s)

point d'entrée: ANY - https://xxxxxxxxxx.execute-api.eu-west-3.amazonaws.com
fonctions :
  api: node-express-api-example-project-dev-api (766 kB)
```

_Note_ : Dans sa forme actuelle, après le déploiement, votre API est publique et peut être invoquée par n'importe qui. Pour les déploiements en production, vous voudrez peut-être configurer un auteur. Pour savoir comment faire, référez-vous à [la documentation de l'événement httpApi](https://www.serverless.com/framework/docs/providers/aws/events/http-api/).

### Invocation

Après un déploiement réussi, vous pouvez appeler l'application créée via HTTP :

```bash
curl https://xxxxxxx.execute-api.eu-west-3.amazonaws.com/
```

Ce qui devrait donner la réponse suivante :

```
{"message":"Bonjour de la racine !"}
```

Appeler le chemin `/hello` avec :

```bash
curl https://xxxxxxx.execute-api.eu-west-3.amazonaws.com/hello
```

Devrait donner la réponse suivante :

```bash
{"message":"Bonjour du chemin !"}
```

Si vous essayez d'invoquer un chemin ou une méthode qui n'a pas de gestionnaire configuré, par exemple avec :

```bash
curl https://xxxxxxx.execute-api.eu-west-3.amazonaws.com/nonexistent
```

Vous devriez recevoir la réponse suivante :

```bash
{"error":"Non trouvé"}
```

### Développement local

Il est également possible d'émuler API Gateway et Lambda localement en utilisant le plugin `serverless-offline`. Pour ce faire, exécutez la commande suivante :

```bash
serverless plugin install -n serverless-offline
```

Il ajoutera le plugin `serverless-offline` aux `devDependencies` dans le fichier `package.json` ainsi qu'à `plugins` dans `serverless.yml`.

Après l'installation, vous pouvez démarrer l'émulation locale avec :

```
serverless offline
```

Pour en savoir plus sur les capacités de `serverless-offline`, veuillez vous référer à son [répertoire GitHub](https://github.com/dherault/serverless-offline).
