# Challenge 9: ShapeShifter

<aside>
💡 Ceci est un petit exercice sur la thématique de la délégation d’événement. Celui-ci ne devrait pas vous prendre énormément de temps.  Si vous souhaitez plus d’entrainement sur cette thématique avant l’examen, [suivez ce tutoriel](https://fr.javascript.info/event-delegation).**

</aside>

Le code donné (que vous pouvez télécharger ci-dessous) génère une grille d’une taille aléatoire entre 1x1 et 24x24. Dans chacune des cellules de cette grille est inséré un élément `<svg>` contenant une de trois formes: cercle, carré ou triangle. Vous n’aurez pas besoin de toucher au html ou au css.

Votre rôle est d’implémenter la fonctionnalité suivante: lorsque le curseur passe sur une des formes (événement `mouseover`) remplacez sa forme actuelle selon les règles ci-dessous:

- Si c’est un cercle, transformez-la en carré
- Si c’est un triangle, transformez-la en cercle
- Si c’est un carré, transformez-la en triangle.

Puisque vous ne connaitrez pas le type de forme et la taille de la grille en avance, vous devrez faire usage de la **délégation** **d’événement** pour arriver à vos fins. L’usage de l’instruction `switch` est recommandée pour implémenter la logique de changement de forme.