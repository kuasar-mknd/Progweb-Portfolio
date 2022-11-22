//Disons que j’ai envie d’executer une fonction une seule fois lors du chargement d’un fichier JavaScript. Comment s’appelle la technique vue en classe pour faire cela? Donnez un exemple en code

// Solution
// C’est une IIFE (Immediately Invoked Function Expression)
// Je peux l’écrire de cette façon:
(function() {
  console.log("Hello world!");
})();
// Ou de cette façon:
(function() {
  console.log("Hello world!");
}());
// Ou encore de cette façon:
(function() {
  console.log("Hello world!");
}());
function(){console.log("TEST")}


// Path: apptest.js
// Dans le cas où j’ai besoin d’executer une fonction plusieurs fois, comment puis-je faire cela? Donnez un exemple en code

// Solution
// C’est une fonction anonyme
// Je peux l’écrire de cette façon:
(function() {
  console.log("Hello world!");
})();
// Ou de cette façon:
(function() {
  console.log("Hello world!");
}());
// Ou encore de cette façon:
(function() {
  console.log("Hello world!");
}());

// Path: apptest.js
// Qu’est-ce qu’une closure? Donnez un exemple en code

// Solution
// Une closure est une fonction qui retourne une fonction
// Je peux l’écrire de cette façon:
function closure() {
  return function() {
    console.log("Hello world!");
  };
}
// Ou de cette façon:
function closure() {
  return function() {
    console.log("Hello world!");
  }();
}
// Ou encore de cette façon:
function closure() {
  return function() {
    console.log("Hello world!");
  }();
}

// Path: apptest.js
// Qu’est-ce qu’une variable globale? Donnez un exemple en code

// Solution
// Une variable globale est une variable qui n’est pas déclarée dans une fonction
// Je peux l’écrire de cette façon:
var global = "global";
// Ou de cette façon:
var global = "global";
function test() {
  console.log(global);
}
// Ou encore de cette façon:
var global = "global";
function test() {
  console.log(global);
}
test();

// Path: apptest.js
// Qu’est-ce qu’une variable locale? Donnez un exemple en code

// Solution
// Une variable locale est une variable qui est déclarée dans une fonction
// Je peux l’écrire de cette façon:
function test() {
  var local = "local";
  console.log(local);
}
// Ou de cette façon:
function test() {
  var local = "local";
  console.log(local);
}