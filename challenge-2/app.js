"use strict";

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
      rymScore: 3.59,
    },
    {
      title: "The Wild, the Innocent & the E Street Shuffle",
      year: 1973,
      rymScore: 3.76,
    },
    {
      title: "Born to Run",
      year: 1975,
      rymScore: 3.98,
    },
    {
      title: "Darkness on the Edge of Town",
      year: 1978,
      rymScore: 3.93,
    },
    {
      title: "The River",
      year: 1980,
      rymScore: 3.76,
    },
    {
      title: "Nebraska",
      year: 1982,
      rymScore: 3.87,
    },
    {
      title: "Born in the U.S.A.",
      year: 1984,
      rymScore: 3.71,
    },
    {
      title: "Tunnel of Love",
      year: 1987,
      rymScore: 3.52,
    },
    {
      title: "Human Touch",
      year: 1992,
      rymScore: 2.97,
    },
    {
      title: "The Ghost of Tom Joad",
      year: 1995,
      rymScore: 3.38,
    },
    {
      title: "The Rising",
      year: 2002,
      rymScore: 3.56,
    },
    {
      title: "Devils & Dust",
      year: 2005,
      rymScore: 3.42,
    },
    {
      title: "We Shall Overcome: The Seeger Sessions",
      year: 2006,
      rymScore: 3.7,
    },
    {
      title: "Magic",
      year: 2007,
      rymScore: 3.48,
    },
    {
      title: "Working on a Dream",
      year: 2009,
      rymScore: 2.95,
    },
    {
      title: "Wrecking Ball",
      year: 2012,
      rymScore: 3.27,
    },
    {
      title: "High Hopes",
      year: 2014,
      rymScore: 2.97,
    },
    {
      title: "Western Stars",
      year: 2019,
      rymScore: 3.27,
    },
    {
      title: "Letter to You",
      year: 2020,
      rymScore: 3.42,
    },
  ],
};

/** 1. Manipulation de Strings et conversion de type
 * En utilisant uniquement les données ci-dessus ainsi que des méthodes et opérateurs vus en classe, écrivez deux bouts de code qui afficheront les choses ci-contre dans la console.
 *
 * // 1.
 * "Cher Bruce Springsteen, bienvenue dans votre dashboard."
 *
 * // 2.
 * "Vous aurez 73 ans l'année prochaine."
 *
 */
const dashboardWelcome = `Cher ${user.firstName.trim()} ${user.lastName.replace(
  "$",
  ""
)}, bienvenue dans votre dashboard.`;
const ageUser = `Vous aurez ${parseInt(user.age) + 1} ans l'année prochaine.`;

document.getElementById("dashboardWelcome").innerHTML = dashboardWelcome;
document.getElementById("ageUser").innerHTML = ageUser;

/** 2. Création d’un compte à rebours
 *
 * Écrivez une fonction **countdown** qui retourne un compte à rebours entre le moment présent et la prochaine date de concert exprimée par la propriété **user.nextTourDate**. Le texte doit être formatté de la façon suivante:
 *
 * jours "jours", heures "h" minutes "min" secondes "s"
 * // 5 jours, 22 h 35 min 5 s
 * // 1 jour, 1 h 12 min 55 s
 *
 * Attention, le mot “jour” doit s’accorder au pluriel uniquement si nécessaire. Pour ce faire, utilisez **l’opérateur conditionnel ternaire**. Un lien vers la documentation de l’objet **Date** (indispensable à la réalisation de cet exercice) se trouve dans les ressources.
 *
 */
function countdown() {
  const now = Date.now();
  const difference = user.nextTourDate - now;
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / 1000 / 60) % 60);
  const seconds = Math.floor((difference / 1000) % 60);
  const milliseconds = Math.floor(difference % 1000);

  return `Le prochain concert sera dans ${days} jour${
    days > 1 ? "s" : ""
  }, ${hours} h ${minutes} min ${seconds} s ${milliseconds} ms`;
}

const counterNextShow = document.getElementById("counterNextShow");
counterNextShow.innerHTML = countdown();
setInterval(() => {
  counterNextShow.innerHTML = countdown();
}, 1);

/** 3. Que faire avec des données?
 * Ce programme détermine le nombre d’année moyen entre deux albums de Bruce Springsteen et estime la date de sortie du suivant, si cette tendance est maintenue.
 */
const albums = user.albums;
const years = [];
for (let i = 0; i < albums.length - 1; i++) {
  years.push(albums[i + 1].year - albums[i].year);
}

const average = years.reduce((a, b) => a + b) / years.length;
const nextAlbum = Math.round(albums[albums.length - 1].year + average);

const nextRelease = `Le prochain album de Bruce Springsteen sortira en ${nextAlbum}.`;
document.getElementById("nextRelease").innerHTML = nextRelease;

/** 4. Calcul de la moyenne des notes
 */
const scores = [];
for (let i = 0; i < albums.length; i++) {
  scores.push(albums[i].rymScore);
}

const averageScore = Math.round(scores.reduce((a, b) => a + b) / scores.length * 100) / 100;

const averageScoreText = `La moyenne des notes des albums de Bruce Springsteen est de ${averageScore}.`;
document.getElementById("averageNote").innerHTML = averageScoreText;
