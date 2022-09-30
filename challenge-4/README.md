# Challenge 4: Callback Training

**Les callbacks sont un sujet absolument fondamental en JS, mais ceux-ci peuvent être difficiles à appréhender au début. Cette série d’exercice devrait vous aider à y voir un peu clair.**

---

### Exercice 1

Créez une fonction `addTwo` qui prend un argument et y ajoute 2.

`console.log(addTwo(3))` devrait sortir `5`

`console.log(addTwo(10))` devrait sortir `12`

### Exercice 2

Créez une fonction `pluralize` qui prend un argument et lui ajoute la letter “s”.

`console.log(pluralize("pizza"))` devrait sortir `pizzas`

### Exercice 3

Créez un fonction `map` qui prend deux argument:

- Un tableau avec des nombres
- Une fonction “callback” qui sera appliquée à chaque élément du tableau.

Faites en sorte que `map` retourne un tableau rempli des résultats de la fonction callback appliquée sur chaque élément du tableau initial.

`console.log(map([1,2,3], addTwo));` devrait sortir `[3, 4, 5]`

> Voila qui est un peu plus intéressant! Ici nous réimplémentons une version basique de la méthode `Array.prototype.map()` native que nous verrons vendredi. Si vous avez saisi comment ceci fonctionne, vous avez compris les callbacks!

### Exercice 4

Créez une fonction `forEach` qui prend un tableau et une fonction callback comme argument. `forEach` execute le callback sur chaque élément du tableau, mais ne retourne rien.

Le bout de code suivant devrait sortir `abcd`

```jsx
let alphabet = "";
const letters = ["a", "b", "c", "d"];
forEach(letters, function (char) {
  alphabet += char;
});
console.log(alphabet);
```

> Il s’agit ici également d’une réimplémentation d’une méthode de tableau native. Notez la différence avec `map`. Là où `map` nous retourne un tableau, `forEach` ne nous retourne rien du tout. En conséquence, tout ce qui doit se passer, doit être défini dans le corps de la fonction callback.

### Exercice 5

Créez un fonction `reduce` qui prend un tableau, un callback et une valeur initiale comme argument. `reduce` doit réduire la totalité des éléments du tableau à une seule valeur. Cette fonction peut par exemple additioner tous les nombres du tableau, les multiplier etc… Utilisez la fonction `forEach` créée dans l’exercice précédent.

le bout de code suivant doit sortir `8`

```jsx
const nums = [4, 1, 3];
const add = function (a, b) {
  return a + b;
};
console.log(reduce(nums, add, 0));
```

> Reduce! Une des fonctions les plus puissantes et imcomprises en JavaScript. Le concept de base est le suivant: vous avez une valeur initiale. Vous executez une fonction callback sur tous les éléments du tableau, puis affectez le resultat à la valeur initiale que vous finissez par retourner.
