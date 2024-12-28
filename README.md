# API de Gestion de Formation

Cette API permet de gérer les participants, formateurs, formations, domaines, profils et utilisateurs dans un système de gestion de formation. Elle est construite avec **Node.js**, **Express**, **MongoDB** et **Mongoose**.

## Table des matières
- [Prérequis](#prérequis)
- [Installation](#installation)
- [Configuration](#configuration)
- [Démarrage du serveur](#démarrage-du-serveur)
- [Peuplement de la base de données](#peuplement-de-la-base-de-données)
- [Endpoints](#endpoints)
  - [Participants](#participants)
  - [Formateurs](#formateurs)
  - [Formations](#formations)
  - [Domaines](#domaines)
  - [Profils](#profils)
  - [Utilisateurs](#utilisateurs)
- [Tester l'API](#tester-lapi)
- [Contribuer](#contribuer)
- [License](#license)

---

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants :

- [Node.js](https://nodejs.org/) (version 14 ou supérieure)
- [MongoDB](https://www.mongodb.com/) (local ou MongoDB Atlas)
- [npm](https://www.npmjs.com/) (généralement installé avec Node.js)

---

## Installation

1. Clonez le dépôt :
   ```bash
   git clone <URL_DU_DÉPÔT>
   cd gestion-formation



Installez les dépendances :

bash
Copy
npm install
Configuration
Créez un fichier .env à la racine du projet et ajoutez vos informations de connexion MongoDB :

env
Copy
MONGO_URI=mongodb+srv://<username>:<password>@kanecluster.whxey.mongodb.net/?retryWrites=true&w=majority&appName=kaneCluster
PORT=5000
Remplacez <username> et <password> par vos informations de connexion MongoDB Atlas.

(Optionnel) Si vous utilisez une base de données locale, modifiez la variable MONGO_URI pour pointer vers votre instance MongoDB locale :

env
Copy
MONGO_URI=mongodb://localhost:27017/gestion_formation
Démarrage du serveur
Pour démarrer le serveur, exécutez la commande suivante :

bash
Copy
npm run dev
Le serveur sera accessible à l'adresse http://localhost:5000.

Peuplement de la base de données
Pour peupler la base de données avec des données fictives, exécutez le script de seed :

bash
Copy
node seed.js
Cela ajoutera des participants, formateurs, formations, domaines, profils et utilisateurs à votre base de données.

Endpoints
Participants
GET /api/participants : Récupérer tous les participants.

POST /api/participants : Ajouter un nouveau participant.

GET /api/participants/:id : Récupérer un participant par ID.

PUT /api/participants/:id : Mettre à jour un participant par ID.

DELETE /api/participants/:id : Supprimer un participant par ID.

Formateurs
GET /api/formateurs : Récupérer tous les formateurs.

POST /api/formateurs : Ajouter un nouveau formateur.

GET /api/formateurs/:id : Récupérer un formateur par ID.

PUT /api/formateurs/:id : Mettre à jour un formateur par ID.

DELETE /api/formateurs/:id : Supprimer un formateur par ID.

Formations
GET /api/formations : Récupérer toutes les formations.

POST /api/formations : Ajouter une nouvelle formation.

GET /api/formations/:id : Récupérer une formation par ID.

PUT /api/formations/:id : Mettre à jour une formation par ID.

DELETE /api/formations/:id : Supprimer une formation par ID.

Domaines
GET /api/domaines : Récupérer tous les domaines.

POST /api/domaines : Ajouter un nouveau domaine.

GET /api/domaines/:id : Récupérer un domaine par ID.

PUT /api/domaines/:id : Mettre à jour un domaine par ID.

DELETE /api/domaines/:id : Supprimer un domaine par ID.

Profils
GET /api/profils : Récupérer tous les profils.

POST /api/profils : Ajouter un nouveau profil.

GET /api/profils/:id : Récupérer un profil par ID.

PUT /api/profils/:id : Mettre à jour un profil par ID.

DELETE /api/profils/:id : Supprimer un profil par ID.

Utilisateurs
GET /api/utilisateurs : Récupérer tous les utilisateurs.

POST /api/utilisateurs : Ajouter un nouvel utilisateur.

GET /api/utilisateurs/:id : Récupérer un utilisateur par ID.

PUT /api/utilisateurs/:id : Mettre à jour un utilisateur par ID.

DELETE /api/utilisateurs/:id : Supprimer un utilisateur par ID.

Tester l'API
Vous pouvez tester les endpoints de l'API à l'aide d'outils comme Postman, Insomnia ou Thunder Client (extension pour Visual Studio Code).

Exemple avec Thunder Client
Installez Thunder Client depuis le marketplace de Visual Studio Code.

Créez une nouvelle requête.

Configurez la méthode (GET, POST, etc.) et l'URL (par exemple, http://localhost:5000/api/participants).

Envoyez la requête et vérifiez la réponse.

Contribuer
Les contributions sont les bienvenues ! Si vous souhaitez contribuer à ce projet, veuillez suivre ces étapes :

Fork ce dépôt.

Créez une nouvelle branche :

bash
Copy
git checkout -b feature/YourFeature
Effectuez vos modifications et validez-les :

bash
Copy
git commit -m 'Add some feature'
Poussez vers la branche :

bash
Copy
git push origin feature/YourFeature
Ouvrez une Pull Request.

License
Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus de détails.

Copy

---

### **Résumé**

Ce README fournit des instructions complètes pour installer, configurer, utiliser et contribuer à l'API. Il inclut également des détails sur les endpoints disponibles et des conseils pour tester l'API. Vous pouvez l'ajuster selon vos besoins spécifiques ou ajouter des sections supplémentaires si nécessaire. Si vous avez besoin d'autres modifications ou d'aide, faites-le moi savoir ! 🚀