# Challenge 7: Guess My Number

**Avec les bases de manipulation DOM vues en cours aujourd’hui et les connaissances en JS acquises les semaines précédentes, vous devriez être en mesure d’implémenter la logique du petit jeu “Guess My Number”. Votre code n’a pas besoin d’être particulièrement élaboré, un style procédural fera tout à fait l’affaire pour cet exercice. Partez du template ci-joint et implémentez les fonctionnalités suivantes, sans toucher au HTML ou au CSS:**

### Règles du jeu

La machine choisi un nombre aléatoire entre 1 et 20 (ou un autre nombre arbitraire). Une joueuse peut entrer un nombre dans l’élément `<input>`. Si le nombre entré est égal à celui “choisi” par la machine, la joueuse gagne et le nombre est dévoilé.

Un indice affiche si le nombre est trop petit ou trop grand. 

### Interface

**Écran de base**

![Screenshot 2022-10-12 at 13.51.19.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6074201f-0501-4c51-bb9f-f8d6ca28d768/Screenshot_2022-10-12_at_13.51.19.png)

Le score est de 20 et on soustrait 1 à chaque réponse. Le high-score commence logiquement à 0. 

**Click “Check!”: aucun nombre n’est entré**

![02.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4048720d-7d06-4bb6-8a17-08b73afa05e4/02.png)

Lorsque aucun nombre (ou un nombre invalide) est entré, déduire un point et mettre un message d’erreur dans l’espace dédié aux indices. 

**Click “Check!”: la réponse est fausse**

![04.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/281e4294-5c3a-4ac1-8a09-764044f512f2/04.png)

Le message d’indice peut indiquer “too high”

![03.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c18a7abc-f358-4d32-871f-324fc9507c2c/03.png)

ou “too low”

**Click “Check!”: La réponse est juste**

![05.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/740b55a2-3d8d-4c85-b303-61690794f488/05.png)

### Reset

Implémentez un reset du jeu lorsque le bouton “Again!” est cliqué. Tout doit être remis à zéro sauf le high score. 

![06.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f3b44880-6b92-4a62-8d96-28a1e8b28b50/06.png)