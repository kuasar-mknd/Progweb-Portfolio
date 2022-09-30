/**
 * A partir du tableau de nombres suivant:
 *
 *const numbers = Object.freeze([3, 14, 15, 92 ,65, 35, 89, 79, 32, 38]);
 *
 *réalisez les fonctionnalités ci-dessous. La structure de données initiale ne doit pas être modifiée ( structure [immutable](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object/freeze) ). *Vos solutions se doivent de rester fonctionnelles même si le tableau initial diffère.*
 *
 *1. Afficher tous les nombres dans la console
 *2. Retourner un tableau avec les valeurs doublées
 *3. Retourner un tableau ne contenant que les valeurs impairs
 *4. Retourner un tableau ne contenant pas le premier élément
 *5. Retourner un tableau ne contenant pas le dernier élément
 *6. Retourner la somme des nombres
 *7. Retourner le plus grand nombre
 *8. Indiquer si le tableau contient au moins un nombre multiple de 9
 *9. Indiquer si le tableau ne contient que des nombres positifs
 *10. Retourner un tableau contenant les nombres pairs dans les premiers indices et les nombres impairs dans les indices restants
 *11. Retourner un tableau ordonné du plus petit au plus grand nombre
 *12. Retourner un tableau ordonné du plus grand au plus petit nombre
 *
 **/

const numbers = Object.freeze([3, 14, 15, 92, 65, 35, 89, 79, 32, 38]);

// 1. Afficher tous les nombres dans la console
console.log(numbers);

// 2. Retourner un tableau avec les valeurs doublées
const double = numbers.map((number) => number * 2);
console.log(double);

// 3. Retourner un tableau ne contenant que les valeurs impairs
const odd = numbers.filter((number) => number % 2 !== 0);
console.log(odd);

// 4. Retourner un tableau ne contenant pas le premier élément
const withoutFirst = numbers.slice(1);
console.log(withoutFirst);

// 5. Retourner un tableau ne contenant pas le dernier élément
const withoutLast = numbers.slice(0, numbers.length - 1);
console.log(withoutLast);

// 6. Retourner la somme des nombres
const sum = numbers.reduce((acc, number) => acc + number, 0);
console.log(sum);

// 7. Retourner le plus grand nombre
const max = numbers.reduce((acc, number) => (acc > number ? acc : number), 0);
console.log(max);

// 8. Indiquer si le tableau contient au moins un nombre multiple de 9
const multipleOfNine = numbers.some((number) => number % 9 === 0);
console.log(multipleOfNine);

// 9. Indiquer si le tableau ne contient que des nombres positifs
const positive = numbers.every((number) => number > 0);
console.log(positive);

// 10. Retourner un tableau contenant les nombres pairs dans les premiers indices et les nombres impairs dans les indices restants

// 11. Retourner un tableau ordonné du plus petit au plus grand nombre
const ascending = numbers.sort((a, b) => a - b);
console.log(ascending);

// 12. Retourner un tableau ordonné du plus grand au plus petit nombre
const descending = numbers.sort((a, b) => b - a);
console.log(descending);