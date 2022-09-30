/**
 * A partir du tableau représentant des cercles dans un plan suivant:
 *
 *
 * const circles = Object.freeze([
 *   {x: 20, y: 10 , r: 10, color: "red"},
 *   {x: 10, y: 10 , r: 20, color: "green"},
 *   {x: 30, y: 25 , r: 15, color: "blue"},
 *   {x: 10, y:5 , r: 5, color: "red"}
 * ]);
 * circles.forEach(Object.freeze);
 *
 *
 * Réalisez les fonctionnalités ci-dessous. La structure de données initiale ne doit pas être modifiée.
 *
 * 1. Retourner toutes les aires des cercles
 * 2. Retourner tous les cercles de couleur rouge
 * 3. Retourner tous les centres des cercles
 * 4. Retourner tous les cercles en opérant une translation de 10 unités sur l'axe des abscisses
 */

const circles = Object.freeze([
  { x: 20, y: 10, r: 10, color: "red" },
  { x: 10, y: 10, r: 10, color: "green" },
  { x: 30, y: 25, r: 15, color: "blue" },
  { x: 10, y: 5, r: 5, color: "red" },
]);
circles.forEach(Object.freeze);

// 1. Retourner toutes les aires des cercles
const areas = circles.map((circle) => Math.PI * circle.r ** 2);
console.log(areas);

// 2. Retourner tous les cercles de couleur rouge
const redCircles = circles.filter((circle) => circle.color === "red");
console.log(redCircles);

// 3. Retourner tous les centres des cercles
const centers = circles.map((circle) => ({ x: circle.x, y: circle.y }));
console.log(centers);

// 4. Retourner tous les cercles en opérant une translation de 10 unités sur l'axe des abscisses
const translatedCircles = circles.map((circle) => ({
  ...circle,
  x: circle.x + 10,
}));
console.log(translatedCircles);
