# MOBIUSpack_questions

Vous trouverez dans ce repository les réponses aux trois questions demandées :

1. **Création d'un Composant customElement** : créer un customElement en JavaScript qui affiche un message de bienvenue personnalisé : le composant doit accepter un attribut name provenant d'un champ input et afficher le message en temps réel.

    
Pour la réalisation de cette question, il existe deux versions :
   - une simple avec une fonction javascript appelé dans le `onclick` du button
   - une qui implémentant une class permettant de définir ensuite le `customElements`, appelé dans l'index.html avec la balise `<custom-element id ="message"></custom-element>`. Ce composant créer un span avec un message lors du click du bouton `welcomeButton`.

      - Leurs codes javascript sont présents dans le dossier customElement

2. **Triage des Réponses d'une API** : imaginez que vous recevez des données d'une API sous forme d'un objet contenant un tableau d'objets, où chaque objet a des propriétés telles que name, age et id. Écrivez une fonction JavaScript qui trie ces objets en ordre croissant ou décroissant basé sur une propriété spécifiée en paramètre.

    - *présent dans le fichier triageAPI.js*
   

3. **Animation CSS Infinité** : créer une animation CSS qui fait tourner un élément carré autour de son centre de façon infinie et modifie la couleur du carré de façon cyclique

   - *présente dans le fichier squareAnimation.css*

Pour mettre en pratique la question 1 et 3, il y a le fichier `index.html` utilisant le javascript de la question 1 et l'animation CSS de la question 3.
La question 2 a été testé en créant un objet JSON.
