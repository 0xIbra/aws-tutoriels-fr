AWS Lambda - node.js S3 file processing
---------------------------------------

Exemple d'une fonction lambda qui est declenchée a chaque fois qu'un fichier est déposé sur S3 a un endroit specifique, cette fonction compresse le fichier pour reduire la taille, ensuite re-depose le fichier au meme endroit sur S3.

Ce guide va vous aider a configurer des fonctions lambda similaires.

### Prérequis

1. Un compte AWS.
2. Node.js et NPM installés sur votre machine.
3. Serverless Framework installé sur votre machine.

---

### Instructions

1. Clonez le dépôt contenant l'exemple de traitement de fichiers S3 avec Node.js.
2. Naviguez jusqu'au dossier contenant l'exemple.
3. Exécutez npm install pour installer les dépendances nécessaires.
4. Modifiez le fichier serverless.yml pour spécifier le nom de votre bucket S3 à la ligne 12.
5. Déployez la fonction avec la commande sls deploy.

---

Une fois le déploiement terminé, votre fonction Lambda sera déclenchée chaque fois qu'une image est ajoutée à votre bucket S3.  
La fonction Lambda compresse alors l'image avant de la réenregistrer dans le bucket.
