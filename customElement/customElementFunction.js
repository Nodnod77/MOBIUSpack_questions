

/*
Création d'un Composant customElement : créer un customElement en JavaScript qui affiche un message de bienvenue
personnalisé : le composant doit accepter un attribut name provenant d'un champ input et afficher le message en
temps réel.
 */

const customElement = ()=> {
    const nameInput = document.getElementById("name").value;
    console.log("name input", nameInput);
    const messageElement = document.querySelector('#message');
    if (!nameInput){
        var message = "Veuillez rentrer votre nom ";
        messageElement.textContent = message + nameInput ;
        return
    }
    var message = "Bienvenue ";
    messageElement.textContent = message + nameInput ;
}



