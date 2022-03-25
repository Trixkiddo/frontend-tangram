// Objectif : Créer des boutons pour changer de modèle avec une animation

// On vise toutes les class ".js-get-shape" (renvoie un array)
const buttons = document.querySelectorAll(".js-get-shape");
// On vise la destination : le tangram
const tangram = document.querySelector(".container-general");

// Itération sur chaque bouton
buttons.forEach((button)=> {
  button.addEventListener("click", (event) => { // A chaque click,
    tangram.classList.remove("pomme", "sapin", "cygne", "tortue", "flèche", "danseur", "chat", "lapin", "abstrait", "danseur2"); // on supprime la class du conteneur (si la class n'existe pas, ça ne renvoie pas d'erreur)
    tangram.classList.add(button.innerHTML.toLowerCase()); // et on va chercher l'html présent dans chaque bouton, on le force en minuscules sinon ça ne marche pô
    // on ajoute à tangram (conteneur) la class cliquée
  })
})
