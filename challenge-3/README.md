# Challenge 3: The check please!

**Créez un logiciel qui génère des factures incluant taxe et pourboire, en fonction des données sortant d’une caisse enregistreuse.**

Voici les données de base:

```jsx
const register = [
  {
    tableID: 0,
    orders: [
      {
        item: "coffee",
        qty: 3,
        price: 3.5,
      },
      {
        item: "salad",
        qty: 3,
        price: 8,
      },
      {
        item: "steak",
        qty: 3,
        price: 28,
      },
      {
        item: "ice cream",
        qty: 3,
        price: 5,
      },
    ],
  },
  {
    tableID: 1,
    orders: [
      {
        item: "coffee",
        qty: 2,
        price: 3.5,
      },
      {
        item: "salad",
        qty: 2,
        price: 8,
      },
      {
        item: "steak",
        qty: 2,
        price: 28,
      },
      {
        item: "ice cream",
        qty: 2,
        price: 5,
      },
    ],
  },
];
```

Le but de votre programme est de recracher les données ci-dessous dans la console de votre navigateur.

### 1. Créez une fonction getSubtotal

Cette fonction doit retourner un nombre contenant le prix total des commandes pour une seule table (sous-total).

### 2. Calculez les pourboires et la TVA

Créez une fonction **calcPercentage** retournant le produit du sous-total d’une table et d’un pourcentage. En Suisse, la TVA est de 7.6%, mais la fonction être suffisament générique pour traîter un % de pourboire arbitraire. Le montant doit être arrondi au 10ème.

### 3. Créez une fonction qui génère une facture

Créez une fonction **createBill** retournant un objet avec les propriétés subtotal, tax et tip. Le total doit être arrondi au 10ème et sous forme de string préfixée de “CHF”.

### 4. Générez les factures pour toutes les tables

### 🧑‍🎨 5. Ajoutez une fonctionnalité interessante à ce logiciel.

Quelques idées:

- Rendez les pouboires plus flexibles
- Créez un mode “split the bill” en fonction du nombre de personnes à une table
