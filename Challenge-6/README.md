# 📌 Challenge 6: Poll Maker

**Pour le dernier challenge de ce “chapitre”, vous allez créer un petit système permettant de créer un nombre arbitraire de sondages. Plutôt que de vous proposer une marche à suivre, vous trouverez ci-dessous quelques spécifications. Le reste de la solution doit venir de vous. Gardez en tête qu’il n’y a pas UNE solution optimale. Faites usage de tout ce que nous avons vu en cours jusqu’à présent, mais privilégiez les closures là où cela aurait du sens.**

### Spécification

1. Le système doit pouvoir créer des sondages à partir d’objets prenant la forme ci-dessous, c’est à dire un objet avec une propriété `question` et une propriété `options` contenant un tableau avec les différentes réponses possibles.

```jsx
const examplePrompt = {
  question: "What is your favorite programming language?",
  options: ["1. JavaScript", "2. PHP", "3. Java", "4. Assembly"],
};
```

1. On doit pouvoir répondre au sondage via un appel de fonction prenant un comme paramètre le numéro de réponse. Par exemple:

```jsx
exampleAnswer(1); // Ajoute un vote à l'option 1 (JavaScript)
```

1. On doit pouvoir créer un nombre arbitraire de sondages, tous indépendants les uns des autres, et ce au sein du même programme. La création de sondage doit pouvoir se faire très simplement.
2. À chaque vote, on reçoit dans la console les informations ci-dessous. La façon dont sont organisées ces informations est libre, mais je souhaiterais que ce soit facilement compréhensible.

```jsx
Question
Option 1: votes
Option 2: votes
...
```

![ça ressemble à ça chez moi](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/20842737-0ce6-45f3-87db-fcdbd6b791be/Screenshot_2022-10-04_at_16.06.06.png)

ça ressemble à ça chez moi

1. Les variable propres à un sondage doivent être privées.
2. Si le paramètre de la réponse ne correspond pas à une des options du sondage, il faut l’indiquer dans la console en faisant péter une erreur avec `console.error(message)`

### Tests

1. Utilisez les définitions de sondage suivantes:

```jsx
const languagePrompt = {
  question: "What is your favorite programming language",
  options: [
    "1. JavaScript",
    "2. PHP",
    "3. Java",
    "4. Assembly",
    "5. Rust",
    "6. TypeScript",
  ],
};

const coursePrompt = {
  question: "Ce challenge est-il difficile?",
  options: ["Oui", "Non"],
};
```

1. L’appel de fonction `coursePoll(1)` (le nom de la fonction peut être différent) doit vous recracher les informations sur le sondage, avec un vote de plus comptabilisé pour la réponse `oui` .

   ![ça ressemble à ça chez moi, mais ça peut avoir une tête différente chez vous. ](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a8991767-ab31-4e73-af0c-7c113be26ba9/Screenshot_2022-10-04_at_16.28.31.png)

   ça ressemble à ça chez moi, mais ça peut avoir une tête différente chez vous.

2. Les appel de fonction `coursePoll(”1”)`, `coursePoll(-1)`, `coursePoll(0)` et `coursePoll(3)` doivent vous recracher une erreur.

   ![Le message peut être différent, voire plus précis chez vous. ](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ca53535a-5438-4290-8f8e-5aed1170e432/Screenshot_2022-10-04_at_16.31.39.png)

   Le message peut être différent, voire plus précis chez vous.

3. Vérifiez qu’une réponse sur un sondage n’a aucune influence sur l’autre.

### 🧑‍🎨 Aller plus loin

Vous pouvez ajouter à ce système une fonctionnalité permettant de déterminer quelle option a gagné.
