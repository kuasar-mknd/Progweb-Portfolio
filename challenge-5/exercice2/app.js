/**
 * A partir du tableau de mots suivant:
 *
 *
 * const strings = Object.freeze(["Sator", "Arepo", "Tenet", "Opera", "Rotas"]);
 *
 *
 * Réalisez les fonctionnalités ci-dessous. La structure de données initiale ne doit pas être modifiée.
 *
 * 1. Retourner tous les mots contenant au moins un **r**
 * 2. Indiquer si tous les mots font 5 lettres
 * 3. Retourner un tableau avec un mot de plus en début du tableau
 * 4. Retourner un tableau avec un mot de plus en fin de tableau
 * 5. Retourner un tableau en remplaçant le mot du milieu par le mot **radar** (si le tableau à un nombre de mots pair, remplacer le mot qui se situe à l'indice juste avant le milieu)
 * 6. Retourner la concaténation de tous les mots
 * 7. Retourner le mot qui vient en premier selon l'ordre alphabétique ([localeCompare](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/localeCompare) peut être utile)
 * 8. Indiquer si les chaines du tableau forment un palindrome (si elle sont lues dans l'ordre des indices du tableau).
 *
 */

const strings = Object.freeze(["Sator", "Arepo", "Tenet", "Opera", "Rotas"]);

// 1. Retourner tous les mots contenant au moins un **r**
const withR = strings.filter((string) => string.includes("r"));
console.log(withR);

// 2. Indiquer si tous les mots font 5 lettres
const fiveLetters = strings.every((string) => string.length === 5);
console.log(fiveLetters);

// 3. Retourner un tableau avec un mot de plus en début du tableau
const addFirst = ["radar", ...strings];
console.log(addFirst);

// 4. Retourner un tableau avec un mot de plus en fin de tableau
const addLast = [...strings, "radar"];
console.log(addLast);

// 5. Retourner un tableau en remplaçant le mot du milieu par le mot **radar** (si le tableau à un nombre de mots pair, remplacer le mot qui se situe à l'indice juste avant le milieu)
const middle = Math.floor(strings.length / 2);
const replaceMiddle = [...strings];
replaceMiddle[middle] = "radar";
console.log(replaceMiddle);

// 6. Retourner la concaténation de tous les mots
const concat = strings.reduce((acc, string) => acc + string, "");
console.log(concat);

// 7. Retourner le mot qui vient en premier selon l'ordre alphabétique ([localeCompare](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/localeCompare) peut être utile)
const first = strings.reduce((acc, string) =>
  acc.localeCompare(string) < 0 ? acc : string
);
console.log(first);

// 8. Indiquer si les chaines du tableau forment un palindrome (si elle sont lues dans l'ordre des indices du tableau).
const palindrome = strings.reduce(
  (acc, string, index) => acc && string === strings[strings.length - index - 1],
  true
);
console.log(palindrome);
