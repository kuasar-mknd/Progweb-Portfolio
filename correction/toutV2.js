//Écrire dans la console, doc : https://developer.mozilla.org/fr/docs/Web/API/Console
console.log('Ton texte');
//Écrire dans la console avec une variable
let maVariable = 'Mon texte';
console.log(maVariable);
//Écrire dans la console avec une variable et une chaîne de caractères
let maVariable = 'Mon texte';
console.log('Ma variable contient : ' + maVariable);
//Faire un tableau, doc : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array
let monTableau = ['un', 'deux', 'trois'];
//Insérer un élément dans un tableau
let monTableau = ['un', 'deux', 'trois'];
let maVariable = 'quatre';
monTableau.push(maVariable);
//Afficher le contenu d'un tableau dans la console avec une boucle
let monTableau = ['un', 'deux', 'trois'];
for (let i = 0; i < monTableau.length; i++) {
    console.log(monTableau[i]);
}
//Précise qu'une chaine de caractère est un nombre entier, doc : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number/isInteger
parseInt('123');

//Précise qu'une chaine de caractère est un nombre à virgule
parseFloat('123.45');

//Précise qu'une chaine de caractère est un nombre à virgule avec 2 chiffres après la virgule (arrondi), doc : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number/toFixed
parseFloat('123.45').toFixed(2);

//Les méthodes de l'objet Math, doc : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math
Math.random(); //Génère un nombre aléatoire entre 0 et 1
Math.floor(Math.random() * 10); //Génère un nombre aléatoire entre 0 et 10
Math.floor(Math.random() * 10) + 1; //Génère un nombre aléatoire entre 1 et 10

//Les méthodes de l'objet Date (date et heure), doc : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date
let maDate = new Date();
maDate.getFullYear(); //Récupère l'année
maDate.getMonth(); //Récupère le mois
maDate.getDate(); //Récupère le jour
maDate.getDay(); //Récupère le jour de la semaine
maDate.getHours(); //Récupère l'heure
maDate.getMinutes(); //Récupère les minutes
maDate.getSeconds(); //Récupère les secondes
maDate.getMilliseconds(); //Récupère les millisecondes
maDate.getTime(); //Récupère le nombre de millisecondes écoulées depuis le 1er janvier 1970

//Les méthodes de l'objet String (chaîne de caractères), doc : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String
let maChaine = 'Ma chaîne de caractères';
maChaine.length; //Récupère la longueur de la chaîne
maChaine.indexOf('chaîne'); //Récupère l'index de la chaîne
maChaine.slice(3, 8); //Récupère une partie de la chaîne
maChaine.slice(3); //Récupère une partie de la chaîne à partir de l'index 3
maChaine.slice(-3); //Récupère une partie de la chaîne à partir de la fin

//Les méthodes de l'objet Array, doc : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array
let monTableau = ['un', 'deux', 'trois'];
monTableau.length; //Récupère la longueur du tableau
monTableau.indexOf('deux'); //Récupère l'index de l'élément
monTableau.push('quatre'); //Insère un élément à la fin du tableau
monTableau.pop(); //Supprime le dernier élément du tableau
monTableau.unshift('zéro'); //Insère un élément au début du tableau
monTableau.shift(); //Supprime le premier élément du tableau
monTableau.slice(1, 2); //Récupère une partie du tableau
monTableau.slice(1); //Récupère une partie du tableau à partir de l'index 1
monTableau.slice(-2); //Récupère une partie du tableau à partir de la fin

//Les méthodes de l'objet Number (à utiliser avec parseInt ou parseFloat), doc : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number
let monNombre = 123.456;
monNombre.toFixed(2); //Arrondit le nombre à 2 chiffres après la virgule
//arrondi au 5 centimes le plus proche
function arrondi(nombre) {
    return Math.round(nombre * 20) / 20;
}


//map() : permet de parcourir un tableau et de créer un nouveau tableau, doc : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/map
let monTableau = ['un', 'deux', 'trois'];
let monNouveauTableau = monTableau.map(function(element) {
    return element;
});

//filter() : permet de parcourir un tableau et de créer un nouveau tableau avec les éléments qui correspondent à une condition, doc : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/filter
let monTableau = ['un', 'deux', 'trois'];
let monNouveauTableau = monTableau.filter(function(element) {
    return element == 'deux';
});

//reduce() : permet de parcourir un tableau et de créer une valeur finale, doc : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/reduce
let monTableau = ['un', 'deux', 'trois'];
let maValeur = monTableau.reduce(function(valeurPrecedente, valeurCourante) {
    return valeurPrecedente + valeurCourante;
});

//forEach() : permet de parcourir un tableau, doc : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/forEach
let monTableau = ['un', 'deux', 'trois'];
monTableau.forEach(function(element) {
    console.log(element);
});

//find() : permet de parcourir un tableau et de récupérer le premier élément qui correspond à une condition, doc : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/find
let monTableau = ['un', 'deux', 'trois'];
let monElement = monTableau.find(function(element) {
    return element == 'deux';
});

//findIndex() : permet de parcourir un tableau et de récupérer l'index du premier élément qui correspond à une condition, doc : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/findIndex
let monTableau = ['un', 'deux', 'trois'];
let monIndex = monTableau.findIndex(function(element) {
    return element == 'deux';
});

//includes() : permet de vérifier si un tableau contient un élément, doc : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/includes
let monTableau = ['un', 'deux', 'trois'];
monTableau.includes('deux'); //Retourne true

//some() : permet de vérifier si un tableau contient un élément qui correspond à une condition, doc : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/some
let monTableau = ['un', 'deux', 'trois'];
monTableau.some(function(element) {
    return element == 'deux';
}); //Retourne true

//every() : permet de vérifier si tous les éléments d'un tableau correspondent à une condition, doc : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/every
let monTableau = ['un', 'deux', 'trois'];
monTableau.every(function(element) {
    return element == 'deux';
}); //Retourne false

//sort() : permet de trier un tableau, doc : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/sort
let monTableau = ['un', 'deux', 'trois'];
monTableau.sort(); //Tri le tableau par ordre alphabétique

//reverse() : permet de renverser un tableau, doc : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/reverse
let monTableau = ['un', 'deux', 'trois'];
monTableau.reverse(); //Inverse l'ordre des éléments du tableau

//join() : permet de créer une chaîne de caractères à partir d'un tableau, doc : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/join
let monTableau = ['un', 'deux', 'trois'];
monTableau.join(); //Retourne une chaîne de caractères avec les éléments du tableau séparés par une virgule
monTableau.join('-'); //Retourne une chaîne de caractères avec les éléments du tableau séparés par un tiret

//split() : permet de créer un tableau à partir d'une chaîne de caractères, doc : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/split
let maChaine = 'un-deux-trois';
maChaine.split(); //Retourne un tableau avec les éléments de la chaîne de caractères séparés par une virgule
maChaine.split('-'); //Retourne un tableau avec les éléments de la chaîne de caractères séparés par un tiret

//replace() : permet de remplacer une chaîne de caractères par une autre, doc : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/replace
let maChaine = 'un-deux-trois';
maChaine.replace('deux', 'quatre'); //Remplace la chaîne 'deux' par la chaîne 'quatre'

//toUpperCase() : permet de mettre une chaîne de caractères en majuscules, doc : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/toUpperCase
let maChaine = 'un-deux-trois';
maChaine.toUpperCase(); //Retourne la chaîne de caractères en majuscules


//Les boucles
//for sert à répéter un bloc de code un nombre défini de fois
for(let i = 0; i < 10; i++) {
    console.log(i);
} //Affiche les nombres de 0 à 9

//for...in sert à parcourir les propriétés d'un objet, doc : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/for...in
let monTableau = ['un', 'deux', 'trois'];
for(let index in monTableau) {
    console.log(monTableau[index]);
} //Affiche les éléments du tableau

//for...of sert à parcourir les éléments d'un tableau, doc : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/for...of
let monTableau = ['un', 'deux', 'trois'];
for(let element of monTableau) {
    console.log(element);
} //Affiche les éléments du tableau

//while sert à répéter une action tant qu'une condition est vraie
let i = 0;
while(i < 10) {
    console.log(i);
    i++;
} //Affiche les nombres de 0 à 9

//do...while sert à faire une boucle au moins une fois
let i = 0;
do {
    console.log(i);
    i++;
} while(i < 10); //Affiche les nombres de 0 à 9

//forEach sert à parcourir un tableau
let monTableau = ['un', 'deux', 'trois'];
monTableau.forEach(function(element) {
    console.log(element);
}); //Affiche les éléments du tableau

//map sert à créer un nouveau tableau à partir d'un tableau existant, doc : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/map
let monTableau = ['un', 'deux', 'trois'];
let monNouveauTableau = monTableau.map(function(element) {
    return element;
})
console.log(monNouveauTableau); //Affiche les éléments du tableau

//Une fonction est un bloc de code qui peut être appelé plusieurs fois, doc : https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Fonctions
function maFonction() {
    console.log('Bonjour !');
}
maFonction(); //Affiche 'Bonjour !'

//Une fonction peut prendre des paramètres
function maFonction(parametre1, parametre2) {
    console.log(parametre1 + parametre2);
}
maFonction('Bonjour', ' !'); //Affiche 'Bonjour !'


//Les classes permettent de créer des objets réutilisables et personnalisables (comme des templates) 
//et de les instancier (comme des objets) pour les utiliser dans notre code (comme des variables), doc : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Classes
const myfunction = (param) => {
    param = param + 1;
    return param;
  };

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }
} //Création de la classe Person

const person1 = new Person('John', 25); //Création d'un objet à partir de la classe Person

person1.sayHello(); //Affiche 'Hello, my name is John and I'm 25 years old.'

//Les classes peuvent hériter des propriétés et méthodes d'autres classes, doc : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Classes

class Student extends Person {
    constructor(name, age, school) {
        super(name, age);
        this.school = school;
    }
    sayHello() {
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old. I'm a student at ${this.school}.`);
    }
} //Création de la classe Student qui hérite de la classe Person

const student1 = new Student('John', 25, 'Harvard'); //Création d'un objet à partir de la classe Student

student1.sayHello(); //Affiche 'Hello, my name is John and I'm 25 years old. I'm a student at Harvard.'

//Caractère d'échappement, doc : https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Litt%C3%A9raux_gabarits
//Les caractères d'échappement permettent d'afficher des caractères spéciaux
console.log('Ceci est un \'apostrophe\''); //Affiche 'Ceci est un 'apostrophe''
console.log('Ceci est un \"guillemet\"'); //Affiche 'Ceci est un "guillemet"'
console.log('Ceci est un \\'); //Affiche 'Ceci est un \'
console.log('Ceci est un \t'); //Affiche 'Ceci est un \t'
console.log('Ceci est un \n'); //Affiche 'Ceci est un \n'

//Les opérateurs, doc : https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Expressions_et_Op%C3%A9rateurs
//Les opérateurs permettent de réaliser des opérations mathématiques
let a = 5;
let b = 2;
let c = a + b; //Addition
let d = a - b; //Soustraction
let e = a * b; //Multiplication
let f = a / b; //Division
let g = a % b; //Modulo
let h = a ** b; //Exposant

//Les opérateurs de comparaison
//Les opérateurs de comparaison permettent de comparer deux valeurs
let a = 5;
let b = 2;
let c = a == b; //Vérifie si a est égal à b
let d = a != b; //Vérifie si a est différent de b
let e = a > b; //Vérifie si a est supérieur à b
let f = a < b; //Vérifie si a est inférieur à b
let g = a >= b; //Vérifie si a est supérieur ou égal à b
let h = a <= b; //Vérifie si a est inférieur ou égal à b

//Les opérateurs logiques
//Les opérateurs logiques permettent de combiner des conditions
let a = 5;
let b = 2;
let c = a == 5 && b == 2; //Vérifie si a est égal à 5 ET b est égal à 2
let d = a == 5 || b == 2; //Vérifie si a est égal à 5 OU b est égal à 2
let e = !(a == 5); //Vérifie si a n'est pas égal à 5

//Les opérateurs ternaires
//Les opérateurs ternaires permettent de faire des conditions en une ligne
let a = 5;
let b = 2;
let c = a == 5 ? 'a est égal à 5' : 'a n\'est pas égal à 5'; //Si a est égal à 5, c est égal à 'a est égal à 5', sinon c est égal à 'a n'est pas égal à 5'

//Les opérateurs d'affectation
//Les opérateurs d'affectation permettent d'affecter une valeur à une variable
let a = 5;
a += 2; //a = a + 2
a -= 2; //a = a - 2
a *= 2; //a = a * 2
a /= 2; //a = a / 2
a %= 2; //a = a % 2
a **= 2; //a = a puissance 2

//Les opérateurs d'incrémentation et de décrémentation
//Les opérateurs d'incrémentation et de décrémentation permettent d'incrémenter ou de décrémenter une variable
let a = 5;
a++; //a = a + 1
a--; //a = a - 1

//Les conditions
//Les conditions permettent d'exécuter du code si une condition est remplie
let a = 5;
let b = 2;
if (a == 5) {
    console.log('a est égal à 5');
} else if (a == 6) {
    console.log('a est égal à 6');
} else {
    console.log('a n\'est pas égal à 5 ni à 6');
} //Affiche 'a est égal à 5'

//Les conditions peuvent être combinées avec des opérateurs logiques
let a = 5;
let b = 2;
if (a == 5 && b == 2) {
    console.log('a est égal à 5 ET b est égal à 2');
}  else if (a == 5 || b == 2) {
    console.log('a est égal à 5 OU b est égal à 2');
} else {
    console.log('a n\'est pas égal à 5 ET b n\'est pas égal à 2');
} 

//Les conditions peuvent être combinées avec des opérateurs ternaires
let a = 5;
let b = 2;
if (a == 5 ? 'a est égal à 5' : 'a n\'est pas égal à 5') {
    console.log('a est égal à 5');
} else {
    console.log('a n\'est pas égal à 5');
} //Affiche 'a est égal à 5'

//Les conditions peuvent être combinées avec des opérateurs d'affectation
let a = 5;
let b = 2;
if (a == 5) {
    a += 2;
    console.log('a est égal à 5');
} else {
    a -= 2;
    console.log('a n\'est pas égal à 5');
} //Si a est égal à 5, a est incrémenté de 2, sinon a est décrémenté de 2

//Un objet et ces propriétés, doc : https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Travailler_avec_les_objets
const QuelquesChose = {
    propriete1: "chaine 1",
    propriete2: "chaine 2",
    tableau1: [1, 2, 3, 4, 5],
    propriete3: 1234
  };

//querySelectorAll permet de sélectionner plusieurs éléments, doc : https://developer.mozilla.org/fr/docs/Web/API/Document/querySelectorAll
const plusieursElementsASelectionner = document.querySelectorAll(".nomDeLaClasse"); //Sélectionne tous les éléments ayant la classe 'nomDeLaClasse'
const plusieursElementsASelectionner = document.querySelectorAll("#nomDeLidentifiant"); //Sélectionne tous les éléments ayant l'identifiant 'nomDeL'identifiant'

//innerHTML permet de modifier le contenu d'un élément HTML (texte, balises, etc...), doc : https://developer.mozilla.org/fr/docs/Web/API/Element/innerHTML
const unSeulElementASelectionner = document.querySelector(".nomDeLaClasse");
unSeulElementASelectionner.innerHTML = "Nouveau contenu"; //Modifie le contenu de l'élément ayant la classe 'nomDeLaClasse'

//addEventListener permet d'ajouter un événement à un élément HTML, doc : https://developer.mozilla.org/fr/docs/Web/API/EventTarget/addEventListener
const unSeulElementASelectionner = document.querySelector(".nomDeLaClasse");
unSeulElementASelectionner.addEventListener("click", function() {
    console.log("Clic sur l'élément ayant la classe 'nomDeLaClasse'");
});

//addEventListener permet d'ajouter un événement à un élément HTML quand la souris passe dessus -> lien vers la documentation https://developer.mozilla.org/fr/docs/Web/API/Element/mouseover_event 
const unSeulElementASelectionner = document.querySelector(".nomDeLaClasse");
unSeulElementASelectionner.addEventListener("mouseover", function() {
    console.log("La souris passe sur l'élément ayant la classe 'nomDeLaClasse'");
});

//addEventListener permet d'ajouter un événement à un élément HTML quand la souris sort de l'élément, doc : https://developer.mozilla.org/fr/docs/Web/API/Element/mouseout_event
const unSeulElementASelectionner = document.querySelector(".nomDeLaClasse");
unSeulElementASelectionner.addEventListener("mouseout", function() {
    console.log("La souris sort de l'élément ayant la classe 'nomDeLaClasse'");
});

//addEventListener permet d'ajouter un événement à un élément HTML quand une touche du clavier est enfoncée, doc : https://developer.mozilla.org/fr/docs/Web/API/Document/keydown_event
const unSeulElementASelectionner = document.querySelector(".nomDeLaClasse");
unSeulElementASelectionner.addEventListener("keydown", function() {
    console.log("Une touche du clavier est enfoncée");
});

//addEventListener permet d'ajouter un événement à un élément HTML quand une touche du clavier est relâchée, doc : https://developer.mozilla.org/fr/docs/Web/API/Document/keyup_event
const unSeulElementASelectionner = document.querySelector(".nomDeLaClasse");
unSeulElementASelectionner.addEventListener("keyup", function() {
    console.log("Une touche du clavier est relâchée");
});

//addEventListener permet d'ajouter un événement à un élément HTML quand la touche enter est enfoncée, doc : https://developer.mozilla.org/fr/docs/Web/API/Document/keypress_event
const unSeulElementASelectionner = document.querySelector(".nomDeLaClasse");
unSeulElementASelectionner.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
        console.log("La touche enter est enfoncée");
    }
});

//tableau des touches du clavier (keyCode)
https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode

//méthode setAttribute permet de modifier un attribut d'un élément HTML
const unSeulElementASelectionner = document.querySelector(".nomDeLaClasse");
unSeulElementASelectionner.setAttribute("attribut", "valeur"); //Modifie l'attribut 'attribut' de l'élément ayant la classe 'nomDeLaClasse'

//méthode getAttribute permet de récupérer la valeur d'un attribut d'un élément HTML
const unSeulElementASelectionner = document.querySelector(".nomDeLaClasse");
unSeulElementASelectionner.getAttribute("attribut"); //Récupère la valeur de l'attribut 'attribut' de l'élément ayant la classe 'nomDeLaClasse'

//méthode removeAttribute permet de supprimer un attribut d'un élément HTML
const unSeulElementASelectionner = document.querySelector(".nomDeLaClasse");
unSeulElementASelectionner.removeAttribute("attribut"); //Supprime l'attribut 'attribut' de l'élément ayant la classe 'nomDeLaClasse'

//insertAdjacentHTML permet de modifier le contenu d'un élément HTML (texte, balises, etc...) avant ou après l'élément
const unSeulElementASelectionner = document.querySelector(".nomDeLaClasse");
unSeulElementASelectionner.insertAdjacentHTML("beforebegin", "Nouveau contenu"); //Modifie le contenu de l'élément ayant la classe 'nomDeLaClasse' avant l'élément
unSeulElementASelectionner.insertAdjacentHTML("afterbegin", "Nouveau contenu"); //Modifie le contenu de l'élément ayant la classe 'nomDeLaClasse' au début de l'élément
unSeulElementASelectionner.insertAdjacentHTML("beforeend", "Nouveau contenu"); //Modifie le contenu de l'élément ayant la classe 'nomDeLaClasse' à la fin de l'élément
unSeulElementASelectionner.insertAdjacentHTML("afterend", "Nouveau contenu"); //Modifie le contenu de l'élément ayant la classe 'nomDeLaClasse' après l'élément

//before permet d'insérer du contenu avant un élément HTML
const unSeulElementASelectionner = document.querySelector(".nomDeLaClasse");
unSeulElementASelectionner.before("Contenu à insérer avant l'élément ayant la classe 'nomDeLaClasse'");

//after permet d'insérer du contenu après un élément HTML
const unSeulElementASelectionner = document.querySelector(".nomDeLaClasse");
unSeulElementASelectionner.after("Contenu à insérer après l'élément ayant la classe 'nomDeLaClasse'");

//prepend permet d'insérer du contenu au début d'un élément HTML
const unSeulElementASelectionner = document.querySelector(".nomDeLaClasse");
unSeulElementASelectionner.prepend("Contenu à insérer au début de l'élément ayant la classe 'nomDeLaClasse'");

//append permet d'insérer du contenu à la fin d'un élément HTML
const unSeulElementASelectionner = document.querySelector(".nomDeLaClasse");
unSeulElementASelectionner.append("Contenu à insérer à la fin de l'élément ayant la classe 'nomDeLaClasse'");

//objet Set permet de créer un tableau sans doublons
const tableau = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const tableauSansDoublons = [...new Set(tableau)];
console.log(tableauSansDoublons); //Affiche [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//Objet Map permet de créer un tableau avec des clés et des valeurs
const tableau = new Map();
tableau.set("clé1", "valeur1");
tableau.set("clé2", "valeur2");
tableau.set("clé3", "valeur3");
tableau.set("clé4", "valeur4");
tableau.set("clé5", "valeur5");
console.log(tableau); //Affiche Map(5) {"clé1" => "valeur1", "clé2" => "valeur2", "clé3" => "valeur3", "clé4" => "valeur4", "clé5" => "valeur5"}

//Un closure est une fonction qui se rappelle d'une variable déclarée dans son contexte parent
function closure() {
    const variable = "valeur";
    return function() {
        console.log(variable);
    }
}
const fonction = closure();
fonction(); //Affiche "valeur"

//Une fonction fléchée est une fonction anonyme
const fonction = () => {
    console.log("Une fonction anonyme");
}
fonction(); //Affiche "Une fonction anonyme"

//Une fonction fléchée peut être écrite sur une seule ligne
const fonction = () => console.log("Une fonction anonyme");
fonction(); //Affiche "Une fonction anonyme"

//Une fonction fléchée peut être écrite sur une seule ligne avec un seul paramètre
const fonction = parametre => console.log(parametre);
fonction("Une fonction anonyme"); //Affiche "Une fonction anonyme"

//Une fonction fléchée peut être écrite sur une seule ligne avec plusieurs paramètres
const fonction = (parametre1, parametre2) => console.log(parametre1, parametre2);
fonction("Une", "fonction anonyme"); //Affiche "Une fonction anonyme"

//Une fonction fléchée peut être écrite sur une seule ligne avec un seul paramètre et un seul retour
const fonction = parametre => parametre;
console.log(fonction("Une fonction anonyme")); //Affiche "Une fonction anonyme"

//Une fonction fléchée peut être écrite sur une seule ligne avec plusieurs paramètres et un seul retour
const fonction = (parametre1, parametre2) => parametre1 + parametre2;
console.log(fonction("Une ", "fonction anonyme")); //Affiche "Une fonction anonyme"

//Un callback est une fonction qui est appelée dans une autre fonction (Exemple tiré de MDN)
function greeting(name) {
    alert(`Hello, ${name}`);
  }
  
  function processUserInput(callback) {
    const name = prompt("Please enter your name.");
    callback(name);
  }
  
  processUserInput(greeting);

  //Un call permet d'appeler une fonction avec un autre objet comme contexte
  function Product(name, price) {
    this.name = name;
    this.price = price;
  }
  
  function Food(name, price) {
    Product.call(this, name, price);
    this.category = 'food';
  }
  
  console.log(new Food('cheese', 5).name);
  // expected output: "cheese"

  //Un apply permet d'appeler une fonction avec un autre objet comme contexte et des arguments sous forme de tableau
  const numbers = [5, 6, 2, 3, 7];

  //Retourn le plus grand nombre d'un tableau
  const max = Math.max.apply(null, numbers);
  
  console.log(max);
  // expected output: 7
  
  //Retourn le plus petit nombre d'un tableau
  const min = Math.min.apply(null, numbers);
  
  console.log(min);
  // expected output: 2
  
  //Un bind permet de créer une nouvelle fonction avec un autre objet comme contexte
    const module = {
    x: 42,
    getX: function() {
        return this.x;
        }
    }

    //On ne récupère pas le getX de module mais une copie de la fonction avec le contexte de module
    const unboundGetX = module.getX;
    console.log(unboundGetX()); // Affiche undefined

    //On récupère le getX de module avec le contexte de module
    const boundGetX = unboundGetX.bind(module);
    console.log(boundGetX()); // Affiche 42

//childelement permet de récupérer tous les enfants d'un élément HTML
const unSeulElementASelectionner = document.querySelector(".nomDeLaClasse");
const tousLesEnfants = unSeulElementASelectionner.childelement;
console.log(tousLesEnfants); //Affiche tous les enfants de l'élément ayant la classe 'nomDeLaClasse'

//parentElement permet de récupérer le parent d'un élément HTML
const unSeulElementASelectionner = document.querySelector(".nomDeLaClasse");
const leParent = unSeulElementASelectionner.parentElement;
console.log(leParent); //Affiche le parent de l'élément ayant la classe 'nomDeLaClasse'

//nextElementSibling permet de récupérer le frère suivant d'un élément HTML
const unSeulElementASelectionner = document.querySelector(".nomDeLaClasse");
const leFrereSuivant = unSeulElementASelectionner.nextElementSibling;
console.log(leFrereSuivant); //Affiche le frère suivant de l'élément ayant la classe 'nomDeLaClasse'

//previousElementSibling permet de récupérer le frère précédent d'un élément HTML
const unSeulElementASelectionner = document.querySelector(".nomDeLaClasse");
const leFrerePrecedent = unSeulElementASelectionner.previousElementSibling;
console.log(leFrerePrecedent); //Affiche le frère précédent de l'élément ayant la classe 'nomDeLaClasse'

//firstElementChild permet de récupérer le premier enfant d'un élément HTML
const unSeulElementASelectionner = document.querySelector(".nomDeLaClasse");
const lePremierEnfant = unSeulElementASelectionner.firstElementChild;
console.log(lePremierEnfant); //Affiche le premier enfant de l'élément ayant la classe 'nomDeLaClasse'

//lastElementChild permet de récupérer le dernier enfant d'un élément HTML
const unSeulElementASelectionner = document.querySelector(".nomDeLaClasse");
const leDernierEnfant = unSeulElementASelectionner.lastElementChild;
console.log(leDernierEnfant); //Affiche le dernier enfant de l'élément ayant la classe 'nomDeLaClasse'

//Try catch permet de gérer les erreurs
try {
    //On tente de faire quelque chose
} catch (error) {
    //Si une erreur est survenue, on la gère
}
//Exemple de try catch tiré de bank.io
btnLogin.addEventListener("click", function (e) {
  try {
    //e.preventDefault(); //On empêche le comportement par défaut du bouton (ici, le rechargement de la page) 
    //pour éviter de perdre les données du formulaire si une erreur survient lors de la connexion
    e.preventDefault();
    currentAccount = matchUser(inputLoginUsername.value, +inputLoginPin.value);
    displayAccount(currentAccount);
    message(`Welcome ${currentAccount.owner}`);
    displaySummary(currentAccount);
    writeMovementList(currentAccount);
  } catch (err) {
    //Si une erreur est survenue, on l'affiche à l'utilisateur
    message(err.message, true);
  }
});

//Une erreur peut être lancée avec throw
throw new Error("Une erreur est survenue");

//Une erreur peut être lancée avec throw et un message personnalisé
throw new Error("Une erreur est survenue : " + message);

//Freeze permet de rendre un objet non modifiable
const obj = {
    prop: 42
    };

    Object.freeze(obj);

    obj.prop = 33;
    // Throws an error in strict mode

    console.log(obj.prop);
    // expected output: 42

const writeMovementList = (acc) => {
    //Vider le contenu d'une balise HTML, on peut aussi utiliser innerHTML = ""
    while(containerMovements.firstChild !== null){
        containerMovements.removeChild(containerMovements.firstChild);
    }
    //On parcourt le tableau des mouvements de l'utilisateur et on les affiche dans la page HTML
    acc.movements.forEach((mov, i) => {
      
      const type = mov > 0 ? "deposit" : "withdrawal";
      containerMovements.insertAdjacentHTML(`afterbegin`, `
      <div class="movements__row">
      `//On affiche le numéro du mouvement et le type de mouvement (dépôt ou retrait) dans la page HTML
      `    <div class="movements__type movements__type--${type}">${i+1} ${type}</div>
          <div class="movements__value">CHF ${mov}</div>
      </div>
      `);
      
    });
    
};

//classList permet de récupérer la liste des classes d'un élément HTML
const unSeulElementASelectionner = document.querySelector(".nomDeLaClasse");
const lesClasses = unSeulElementASelectionner.classList;
console.log(lesClasses); //Affiche la liste des classes de l'élément ayant la classe 'nomDeLaClasse'

//classList.add permet d'ajouter une classe à un élément HTML
const unSeulElementASelectionner = document.querySelector(".nomDeLaClasse");
unSeulElementASelectionner.classList.add("nomDeLaClasseAajouter");
console.log(unSeulElementASelectionner); //Affiche l'élément ayant la classe 'nomDeLaClasse' avec la classe 'nomDeLaClasseAajouter' ajoutée

//classList.remove permet de supprimer une classe à un élément HTML
const unSeulElementASelectionner = document.querySelector(".nomDeLaClasse");
unSeulElementASelectionner.classList.remove("nomDeLaClasseAajouter");
console.log(unSeulElementASelectionner); //Affiche l'élément ayant la classe 'nomDeLaClasse' avec la classe 'nomDeLaClasseAajouter' supprimée

//classList.contains permet de savoir si un élément HTML contient une classe
const unSeulElementASelectionner = document.querySelector(".nomDeLaClasse");
const contientLaClasse = unSeulElementASelectionner.classList.contains("nomDeLaClasseAajouter");
console.log(contientLaClasse); //Affiche true si l'élément ayant la classe 'nomDeLaClasse' contient la classe 'nomDeLaClasseAajouter', false sinon

//classList.toggle permet d'ajouter ou de supprimer une classe à un élément HTML
const unSeulElementASelectionner = document.querySelector(".nomDeLaClasse");
unSeulElementASelectionner.classList.toggle("nomDeLaClasseAajouter");
console.log(unSeulElementASelectionner); //Affiche l'élément ayant la classe 'nomDeLaClasse' avec la classe 'nomDeLaClasseAajouter' ajoutée ou supprimée

//classList.replace permet de remplacer une classe par une autre
const unSeulElementASelectionner = document.querySelector(".nomDeLaClasse");
unSeulElementASelectionner.classList.replace("nomDeLaClasseAremplacer", "nomDeLaClasseAajouter");
console.log(unSeulElementASelectionner); //Affiche l'élément ayant la classe 'nomDeLaClasse' avec la classe 'nomDeLaClasseAremplacer' remplacée par la classe 'nomDeLaClasseAajouter'

//classList.item permet de récupérer une classe à un élément HTML
const unSeulElementASelectionner = document.querySelector(".nomDeLaClasse");
const laClasse = unSeulElementASelectionner.classList.item(0);
console.log(laClasse); //Affiche la classe à l'index 0 de l'élément ayant la classe 'nomDeLaClasse'

//classList.value permet de récupérer toutes les classes d'un élément HTML
const unSeulElementASelectionner = document.querySelector(".nomDeLaClasse");
const lesClasses = unSeulElementASelectionner.classList.value;
console.log(lesClasses); //Affiche toutes les classes de l'élément ayant la classe 'nomDeLaClasse'

//classList.length permet de récupérer le nombre de classes d'un élément HTML
const unSeulElementASelectionner = document.querySelector(".nomDeLaClasse");
const nbClasses = unSeulElementASelectionner.classList.length;
console.log(nbClasses); //Affiche le nombre de classes de l'élément ayant la classe 'nomDeLaClasse'

//classList.forEach permet de parcourir toutes les classes d'un élément HTML
const unSeulElementASelectionner = document.querySelector(".nomDeLaClasse");
unSeulElementASelectionner.classList.forEach((classe) => {
    console.log(classe); //Affiche toutes les classes de l'élément ayant la classe 'nomDeLaClasse'
})

//classList.toString permet de récupérer toutes les classes d'un élément HTML
const unSeulElementASelectionner = document.querySelector(".nomDeLaClasse");
const lesClasses = unSeulElementASelectionner.classList.toString();
console.log(lesClasses); //Affiche toutes les classes de l'élément ayant la classe 'nomDeLaClasse'

//Corrigé exercice 4 : CallBack training

"use strict";

// Exercice 4.1
const addTwo = (num) => num + 2;
//// Test:
// console.log(addTwo(3)) // -> 5
// console.log(addTwo(10)) // -> 12

// Exercice 4.2
const addS = (word) => word + "s";
//// Test:
// console.log(pluralize("pizza")) // -> "pizzas"

// Exercice 4.3
const map = (array, callback) => {
  const newArr = [];
  for (let i = 0; i < array.length; i++) {
    newArr.push(callback(array[i]));
  }
  return newArr;
};
//// Test:
// console.log(map([1,2,3], addTwo)); // -> [3, 4, 5]

// Exercice 4.4
const forEach = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
};
//// Test:
// let alphabet = "";
// const letters = ["a", "b", "c", "d"];
// forEach(letters, (char) => alphabet += char);
// console.log(alphabet); // -> "abcd"

// Exercice 5
const reduce = (array, callback, initialValue) => {
  let accum;
  if (initialValue !== undefined) {
    accum = initialValue;
  } else {
    accum = array[0];
    array.shift();
  }
  forEach(array, (el) => (accum = callback(accum, el)));
  return accum;
};
//// Test:
// const nums = [4, 1, 3];
// const add = (a, b) => a + b;
// console.log(reduce(nums, add, 0)); // -> 8

//Corrigé exercice 8

// ACCOUNT DATA
const account1 = {
    owner: "Anna Anderson",
    username: "aa",
    movements: [200, 450, -400.5, 3000, -650, -130, 70, 1300],
    pin: 1234
  };
  
  const account2 = {
    owner: "Bijan Bell",
    username: "bb",
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    pin: 1111
  };
  
  const account3 = {
    owner: "Celeste Carter",
    username: "cc",
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    pin: 0o000
  };
  
  const accounts = [account1, account2, account3];
  
  // ELEMENTS
  const labelWelcome = document.querySelector(".welcome");
  const labelDate = document.querySelector(".date");
  const labelBalance = document.querySelector(".balance__value");
  const labelSumIn = document.querySelector(".summary__value--in");
  const labelSumOut = document.querySelector(".summary__value--out");
  
  const containerApp = document.querySelector(".app");
  const containerMovements = document.querySelector(".movements");
  
  const btnLogin = document.querySelector(".login__btn");
  const btnTransfer = document.querySelector(".form__btn--transfer");
  
  const inputLoginUsername = document.querySelector(".login__input--user");
  const inputLoginPin = document.querySelector(".login__input--pin");
  const inputTransferTo = document.querySelector(".form__input--to");
  const inputTransferAmount = document.querySelector(".form__input--amount");
  
  let currentAccount;
  
  const matchUser = (username, pin) => {
    const matchedAccount = accounts.find((acc) => username === acc.username);
    if (matchedAccount && matchedAccount.pin === pin) {
      return matchedAccount;
    } else {
      throw new Error("Couldn't match user");
    }
  };
  
  const calcSummary = (acc) => {
    const income = acc.movements
      .filter((mov) => mov > 0)
      .reduce((acc, mov) => acc + mov);
  
    const expenses = Math.abs(
      acc.movements.filter((mov) => mov < 0).reduce((acc, mov) => acc + mov)
    );
    return {
      income,
      expenses,
      balance: income - expenses
    };
  };
  
  const message = (text, error) => {
    labelWelcome.textContent = text;
    error
      ? (labelWelcome.style.color = "var(--withdrawal)")
      : (labelWelcome.style.color = "var(--deposit)");
  };
  
  const createMovementElement = (mov, i) => {
    const type = mov > 0 ? "deposit" : "withdrawal";
    const html = `<div class="movements__row">
      <div class="movements__type movements__type--${type}">${i} ${type}</div>
      <div class="movements__value">CHF ${mov}</div>
    </div>`;
    return html;
  };
  
  const displayAccount = (acc) => {
    const summary = calcSummary(acc);
    if (acc) {
      containerMovements.innerHTML = "";
      containerApp.style.opacity = "100";
      labelBalance.textContent = `CHF ${summary.balance}`;
      labelSumIn.textContent = `CHF ${summary.income}`;
      labelSumOut.textContent = `CHF ${summary.expenses}`;
      acc.movements.forEach((mov, i) => {
        const movementElement = createMovementElement(mov, i + 1);
        containerMovements.insertAdjacentHTML("afterbegin", movementElement);
      });
    } else {
      throw new Error("No account to display");
    }
  };
  
  // from = objet || to = string || amount = string
  const transfer = (from, to, amount) => {
    const destination = accounts.find((acc) => acc.username === to);
    const cleanAmount = +amount;
    const { balance } = calcSummary(from);
    if (destination && cleanAmount > 0 && cleanAmount <= balance) {
      from.movements.push(-cleanAmount);
      destination.movements.push(cleanAmount);
      message(`Transfered CHF ${cleanAmount} to ${destination.owner}`)
      displayAccount(from);
  
    } else {
      throw new Error("Couldn't Transfer")
    }
  };
  
  btnLogin.addEventListener("click", function (e) {
    try {
      e.preventDefault();
      currentAccount = matchUser(inputLoginUsername.value, +inputLoginPin.value);
      displayAccount(currentAccount);
      message(`Welcome ${currentAccount.owner}`);
    } catch (err) {
      message(err.message, true);
    }
  });
  
  btnTransfer.addEventListener("click", function (e) {
    e.preventDefault(e);
    try {
      transfer(currentAccount, inputTransferTo.value, inputTransferAmount.value);
    } catch(e) {
      message(e.message, true)
    }
  });

//Corrigé exercice 9
container.addEventListener("mouseover", (e) => {
    if (!e.target.children[0] || e.target.children[0].tagName !== "svg") return;
    const type = e.target.children[0].dataset.shape;
    switch (type) {
      case "circle":
        e.target.innerHTML = square;
        break;
      case "triangle":
        e.target.innerHTML = circle;
        break;
      case "square":
        e.target.innerHTML = triangle;
        break;
    }
  });

