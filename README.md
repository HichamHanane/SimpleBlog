# SimpleBlog



##  Description du projet

SimpleBlog est une application de blog minimaliste construite avec React. Elle permet aux utilisateurs de parcourir une liste d'articles, de consulter le contenu complet de chaque article et d'en publier de nouveaux via un formulaire. Ce projet a pour but de consolider les compétences fondamentales de React en utilisant des composants fonctionnels, la gestion d'état (`useState`), les effets de bord (`useEffect`), et le routage.

---

## ✨ Fonctionnalités principales

* **Affichage des articles :** Voir une liste de titres d'articles, récupérés depuis une API simulée.
* **Détails de l'article :** Cliquer sur un article pour afficher son contenu complet sur une page dédiée.
* **Ajout d'un nouvel article :** Publier un nouvel article via un formulaire simple.
* **Validation de formulaire :** Afficher un message d'erreur si l'utilisateur tente de soumettre un formulaire avec des champs vides.
* **Gestion d'état :** Utilisation de `useState` pour gérer les données du formulaire et les articles.
* **Communication avec une API :** Utilisation de `fetch` et `useEffect` pour récupérer les articles au chargement de l'application.

---

## Technologies utilisées

* **React :** Bibliothèque JavaScript pour la construction d'interfaces utilisateur.
* **React Router DOM :** Pour gérer la navigation entre les différentes pages (liste, détail, formulaire).
* **CSS :** Pour le style de l'application.
* **API simulée :** [JSONPlaceholder](https://jsonplaceholder.typicode.com/) pour la récupération des données d'articles.

---

##  Instructions pour le lancement

Pour faire fonctionner ce projet en local, suivez ces étapes :

1.  **Clonez le dépôt :**
    ```sh
    git clone [URL_DE_VOTRE_DEPOT]
    cd simpleblog
    ```

2.  **Installez les dépendances :**
    ```sh
    npm install
    ```

3.  **Lancez l'application :**
    ```sh
    npm run dev
    ```

L'application sera alors disponible à l'adresse `http://localhost:5173` (ou un port similaire).

---

##  Prochaines étapes

* Implémenter le routage avec `react-router-dom`.
* Créer les composants React et passer les données via `props`.
* Mettre en place la logique de formulaire et la gestion d'état avec `useState`.
* Utiliser `useEffect` pour faire les requêtes `fetch` à l'API.
