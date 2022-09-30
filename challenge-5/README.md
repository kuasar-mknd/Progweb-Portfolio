**Les exercices suivants sont proposés afin de vous familiariser avec les callbacks, les méthodes de tableau et le paradigme de [programmation fonctionnelle](https://fr.wikipedia.org/wiki/Programmation_fonctionnelle).** 

---

### Tableau de nombres

A partir du tableau de nombres suivant:

```jsx
const numbers = Object.freeze([3, 14, 15, 92 ,65, 35, 89, 79, 32, 38]);
```

réalisez les fonctionnalités ci-dessous. La structure de données initiale ne doit pas être modifiée ( structure [immutable](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object/freeze) ). *Vos solutions se doivent de rester fonctionnelles même si le tableau initial diffère.*

1. Afficher tous les nombres dans la console
2. Retourner un tableau avec les valeurs doublées
3. Retourner un tableau ne contenant que les valeurs impairs
4. Retourner un tableau ne contenant pas le premier élément
5. Retourner un tableau ne contenant pas le dernier élément
6. Retourner la somme des nombres
7. Retourner le plus grand nombre
8. Indiquer si le tableau contient au moins un nombre multiple de 9
9. Indiquer si le tableau ne contient que des nombres positifs
10. Retourner un tableau contenant les nombres pairs dans les premiers indices et les nombres impairs dans les indices restants
11. Retourner un tableau ordonné du plus petit au plus grand nombre
12. Retourner un tableau ordonné du plus grand au plus petit nombre

---

### Tableau de strings

A partir du tableau de mots suivant:

```jsx
const strings = Object.freeze(["Sator", "Arepo", "Tenet", "Opera", "Rotas"]);
```

Réalisez les fonctionnalités ci-dessous. La structure de données initiale ne doit pas être modifiée.

1. Retourner tous les mots contenant au moins un **r**
2. Indiquer si tous les mots font 5 lettres
3. Retourner un tableau avec un mot de plus en début du tableau
4. Retourner un tableau avec un mot de plus en fin de tableau
5. Retourner un tableau en remplaçant le mot du milieu par le mot **radar** (si le tableau à un nombre de mots pair, remplacer le mot qui se situe à l'indice juste avant le milieu)
6. Retourner la concaténation de tous les mots
7. Retourner le mot qui vient en premier selon l'ordre alphabétique ([localeCompare](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/localeCompare) peut être utile)
8. Indiquer si les chaines du tableau forment un palindrome (si elle sont lues dans l'ordre des indices du tableau).

---

### Tableau d’objets

A partir du tableau représentant des cercles dans un plan suivant:

```jsx
const circles = Object.freeze([
  {x: 20, y: 10 , r: 10, color: "red"},
  {x: 10, y: 10 , r: 20, color: "green"},
  {x: 30, y: 25 , r: 15, color: "blue"},
  {x: 10, y:5 , r: 5, color: "red"}
]);
circles.forEach(Object.freeze);
```

Réalisez les fonctionnalités ci-dessous. La structure de données initiale ne doit pas être modifiée.

1. Retourner toutes les aires des cercles
2. Retourner tous les cercles de couleur rouge
3. Retourner tous les centres des cercles
4. Retourner tous les cercles en opérant une translation de 10 unités sur l'axe des abscisses

### Ressources