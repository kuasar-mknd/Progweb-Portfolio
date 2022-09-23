/* Consigne
 * Ecrire une fonction permettant d'insérer un élément dans un tableau de 20 cases de sorte
 * qu'après chaque insertion les valeurs du tableau soient toujours dans ordre croissant.
 * Exemple :
 * insertion de 5 => {5}
 * insertion de 2 => {2, 5}
 * insertion de 7 => {2, 5, 7}
 * insertion de 1 => {1, 2, 5, 7}
 * insertion de 3 => {1, 2, 3, 4, 7}
 * ... et ainsi de suite
*/


function insertionDansTableau(tableau, element) {
    tableau.push(element);
    tableau.sort();
}

const tableau = [];
insertionDansTableau(tableau, 5);
console.log(tableau);
insertionDansTableau(tableau, 2);
console.log(tableau);
insertionDansTableau(tableau, 7);
console.log(tableau);
insertionDansTableau(tableau, 1);
console.log(tableau);
insertionDansTableau(tableau, 3);
console.log(tableau);