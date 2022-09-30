# Challenge 1: JavaScript vs. Java vs. PHP

## **Vous avez déjà de bonnes bases de programmation, mais n’avez néanmoins jamais fait de JavaScript. Dans l’optique de découvrir la différence entre les langages vus par le passé et celui que nous allons étudier ensemble, faisons un petit exercice de traduction.**

### 1. Java vers JavaScript

```java
/******************************************************************************
 *  Execution:    java nom_du_fichier.java
 *
 *  Compte jusqu'à 23 moutons dans le terminal.
 *
 *  1er Mouton
 *  2e Mouton
 *  3e Mouton
 *  4e Mouton
 *  ...
 *  23e Mouton
 *
 ******************************************************************************/

public class CompteMoutons {
    public static void main(String[] args) {
        // Affiche le cas ordinal spécial pour "premier"
        System.out.println("1er Mouton");
        // compte de 2 à 23
        int i = 2;
        while (i <= 23) {
            System.out.println(i + "e Mouton");
            i = i + 1;
        }
    }
}
```

Découvrez ce que fait le petit programme Java ci-dessus, puis **traduisez-le en JavaScript**. Pour ce faire, vous devrez vous documenter sur les sujets suivants:

- Les variables
- Les fonctions
- Les boucles
- Afficher un message dans la console

Utilisez les ressources du cours pour trouver réponse à vos questions, en particulier la documentation MDN. Nous parlerons de ces sujets en classe dans les cours à venir.

[Ressources](https://www.notion.so/92b4f9c7621f47269116d22efa615e57)

Le programme JavaScript que vous écrirez devra être executé dans le navigateur.

---

### 2. PHP vers JavaScript

```bash
<?php
    function calculerSurface($rayon) {
       return pi() * $rayon * $rayon;
    }
    echo(calculerSurface(4));

```

Découvrez ce que fait ce bête petit programme PHP et traduisez-le en JavaScript. Pour ce faire, vous devrez découvrir les méthodes de la librairie [Math](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math).

---

### 3. 🧑‍🎨 Traduisez votre propre code

Choisissez un bout de code que vous avez écrit dans un cours précédent et tentez de la traduire en JavaScript. Le code à traduire est libre, mais essayez de choisir quelque chose qui vous forcerait à aller un peu plus loin qu’un simple “Hello World”.

# Challenge 1 : Correction

```jsx
"use strict";

function compteMouton() {
  console.log("1er Mouton");
  let i = 2;
  while (i <= 23) {
    console.log(i + "e mouton");
    i += 1;
  }
}

function calculerSurface(rayon) {
  return Math.PI * rayon * rayon;
}

compteMouton();
console.log(calculerSurface(1));
```
