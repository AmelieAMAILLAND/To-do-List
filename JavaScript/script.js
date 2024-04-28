const listContainer = document.getElementById("list-container");
const btnAdd = document.getElementById("btnAdd");
const inputBox = document.getElementById("inputBox");

// Ajouter une balise <li> à <ul> quand on clique sur le bouton "Add"
btnAdd.addEventListener("click", function () {
    // Récupérer le contenu de l'élément "inputBox"
    const task = inputBox.value.trim(); // Trim pour supprimer les espaces blancs inutiles

    if (task !== "") {
        // Créer un nouvel élément <li> et lui attribuer le contenu de la tâche
        const li = document.createElement("li");
        li.textContent = task;
        li.classList.add("unchecked"); // Ajouter la classe "unchecked" par défaut

        // Créer un bouton de suppression
        const deleteButton = document.createElement("button");
        deleteButton.id = "bin";

        // Ajouter un gestionnaire d'événement pour le clic sur le bouton de suppression
        deleteButton.addEventListener("click", function() {
            // Supprimer l'élément <li> parent lorsque le bouton est cliqué
            li.remove();
        });

        // Ajouter le bouton de suppression à l'élément <li>
        li.appendChild(deleteButton);

        // Ajouter l'élément <li> à la liste
        listContainer.appendChild(li);

        //Clear l'input
        inputBox.value = "";
    } 
    else {
        // Gérer le cas où l'input est vide ou contient uniquement des espaces
        alert("Veuillez saisir une tâche valide.");
    }
});

// Utilisation de l'événement de délégation pour détecter les clics
listContainer.addEventListener("click", function(event) {
    const clickedElement = event.target;
    if (clickedElement.tagName === 'LI') {
        // Changer la classe de l'élément cliqué
        clickedElement.classList.toggle("unchecked");
        clickedElement.classList.toggle("checked");
    }
});


