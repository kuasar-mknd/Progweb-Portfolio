# Challenge 2: Born to Run

## Un API nous renvoie des données (un peu sales) sous forme d’objet littéral que nous stockons dans une constante:

```jsx
const user = {
  firstName: "   Bruce",
  lastName: "$pringsteen",
  age: "72 years old",
  isBoss: true,
  nextTourDate: new Date("Jun 13, 2023 20:00").getTime(),
  albums: [
    {
      title: "Greetings from Asbury Park, NJ",
      year: 1973,
      rymScore: 3.59
    },
    {
      title: "The Wild, the Innocent & the E Street Shuffle",
      year: 1973,
      rymScore: 3.76
    },
    {
      title: "Born to Run",
      year: 1975,
      rymScore: 3.98
    },
    {
      title: "Darkness on the Edge of Town",
      year: 1978,
      rymScore: 3.93
    },
    {
      title: "The River",
      year: 1980,
      rymScore: 3.76
    },
    {
      title: "Nebraska",
      year: 1982,
      rymScore: 3.87
    },
    {
      title: "Born in the U.S.A.",
      year: 1984,
      rymScore: 3.71
    },
    {
      title: "Tunnel of Love",
      year: 1987,
      rymScore: 3.52
    },
    {
      title: "Human Touch",
      year: 1992,
      rymScore: 2.97
    },
    {
      title: "The Ghost of Tom Joad",
      year: 1995,
      rymScore: 3.38
    },
    {
      title: "The Rising",
      year: 2002,
      rymScore: 3.56
    },
    {
      title: "Devils & Dust",
      year: 2005,
      rymScore: 3.42
    },
    {
      title: "We Shall Overcome: The Seeger Sessions",
      year: 2006,
      rymScore: 3.7
    },
    {
      title: "Magic",
      year: 2007,
      rymScore: 3.48
    },
    {
      title: "Working on a Dream",
      year: 2009,
      rymScore: 2.95
    },
    {
      title: "Wrecking Ball",
      year: 2012,
      rymScore: 3.27
    },
    {
      title: "High Hopes",
      year: 2014,
      rymScore: 2.97
    },
    {
      title: "Western Stars",
      year: 2019,
      rymScore: 3.27
    },
    {
      title: "Letter to You",
      year: 2020,
      rymScore: 3.42
    }
  ]
};
```

---

### 1. Manipulation de Strings et conversion de type

En utilisant uniquement les données ci-dessus ainsi que des méthodes et opérateurs vus en classe, écrivez deux bouts de code qui afficheront les choses ci-contre dans la console.

```jsx
// 1.
"Cher Bruce Springsteen, bienvenue dans votre dashboard."

// 2.
"Vous aurez 73 ans l'année prochaine." 
```

---

### 2. Création d’un compte à rebours

Écrivez une fonction **countdown** qui retourne un compte à rebours entre le moment présent et la prochaine date de concert exprimée par la propriété **user.nextTourDate**. Le compte n’a pas besoin de se mettre à jour tout seul. Le texte doit être formatté de la façon suivante: 

```jsx
jours "jours", heures "h" minutes "min" secondes "s"
// 5 jours, 22 h 35 min 5 s
// 1 jour, 1 h 12 min 55 s
```

Attention, le mot “jour” doit s’accorder au pluriel uniquement si nécessaire. Pour ce faire, utilisez **l’opérateur conditionnel ternaire**. Un lien vers la documentation de l’objet **Date** (indispensable à la réalisation de cet exercice) se trouve dans les ressources. 

---

### 3. 🧑‍🎨  Que faire avec des données?

Que pouvez vous faire avec les données de la discographie de Bruce Springsteen (propriété user.albums)? Créez un petit programme qui fait quelque chose d’amusant ou d’utile avec.

Expliquez dans un commentaire ce que fait votre programme.  Par exemple:  

> Ce programme détermine le nombre d’années moyen entre deux albums de Bruce Springsteen et estime la date de sortie du suivant, si cette tendance est maintenue.
> 

Les données d’album se trouvent dans un tableau et la propriété rymScore se réfère au score donné à l’album par les utilisateur.trice.s de la plateforme Rate Your Music.

 

[](https://rateyourmusic.com/artist/bruce-springsteen)