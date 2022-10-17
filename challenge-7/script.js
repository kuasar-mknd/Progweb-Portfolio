"use strict";

/* Règles du jeu
La machine choisi un nombre aléatoire entre 1 et 20 (ou un autre nombre arbitraire). Une joueuse peut entrer un nombre dans l’élément `<input>`. 
Si le nombre entré est égal à celui “choisi” par la machine, la joueuse gagne et le nombre est dévoilé.
Un indice affiche si le nombre est trop petit ou trop grand.
*/

// Déclaration des variables
let randomNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
const input = document.querySelector("input");
const buttonCheck = document.querySelector("#check");
const buttonAgain = document.querySelector("#again");

// Fonction pour vérifier si le nombre entré est égal au nombre aléatoire
function checkNumber() {
  const number = Number(input.value);
  if (number === randomNumber) {
    document.querySelector("h1").textContent = "Bravo !";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector("#answer").textContent = randomNumber;
    document.querySelector("#answer").style.width = "30rem";
    document.querySelector("#highscore").textContent = score;
  } else if (number > randomNumber) {
    document.querySelector("h1").textContent = "Trop grand !";
    score--;
    document.querySelector("#score").textContent = score;
  } else if (number < randomNumber) {
    document.querySelector("h1").textContent = "Trop petit !";
    score--;
    document.querySelector("#score").textContent = score;
  }
}

// Fonction pour recommencer une partie
function again() {
  randomNumber = Math.floor(Math.random() * 20) + 1;
  document.querySelector("h1").textContent = "Devinez le nombre";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector("#answer").textContent = "?";
  document.querySelector("#answer").style.width = "15rem";
  document.querySelector("#score").textContent = 20;
  score = 20;
  input.value = "";
}

// Ajout d'un écouteur d'événement sur le bouton
buttonCheck.addEventListener("click", checkNumber);
buttonAgain.addEventListener("click", again);
