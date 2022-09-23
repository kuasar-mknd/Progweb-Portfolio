"use strict";

const register = [
  {
    tableID: 0,
    orders: [
      {
        item: "coffee",
        qty: 3,
        price: 3.55,
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

/**
 * ### 1. Créez une fonction getSubtotal
 *
 * Cette fonction doit retourner un nombre contenant le prix total des commandes pour une seule table (sous-total).
 *
 * ### 2. Calculez les pourboires et la TVA
 *
 * Créez une fonction **calcPercentage** retournant le produit du sous-total d’une table et d’un pourcentage. En Suisse, la TVA est de 7.6%, mais la fonction être suffisament générique pour traîter un % de pourboire arbitraire. Le montant doit être arrondi au 10ème.
 *
 * ### 3. Créez une fonction qui génère une facture
 *
 * Créez une fonction **createBill** retournant un objet avec les propriétés subtotal, tax et tip. Le total doit être arrondi au 10ème et sous forme de string préfixée de “CHF”.
 *
 * ### 4. Générez les factures pour toutes les tables
 *
 * ### 🧑‍🎨 5. Ajoutez une fonctionnalité interessante à ce logiciel.
 *
 * Quelques idées:
 *
 * - Rendez les pouboires plus flexible
 * - Créez un mode “split the bill” en fonction du nombre de personnes à une table
 */

// 1. Créez une fonction getSubtotal
// Cette fonction doit retourner un nombre contenant le prix total des commandes pour une seule table (sous-total).
const getSubtotal = (table) => {
  let subtotal = 0;
  for (let i = 0; i < table.orders.length; i++) {
    subtotal += table.orders[i].qty * table.orders[i].price;
  }
  return subtotal;
};

// 2. Calculez les pourboires et la TVA
// Créez une fonction calcPercentage retournant le produit du sous-total d’une table et d’un pourcentage. En Suisse, la TVA est de 7.6%, mais la fonction être suffisament générique pour traîter un % de pourboire arbitraire. Le montant doit être arrondi au 10ème.
const calcPercentage = (subtotal, percentage) => {
  return Math.round(subtotal * percentage * 10) / 10;
};

// 3. Créez une fonction qui génère une facture
// Créez une fonction createBill retournant un objet avec les propriétés subtotal, tax et tip. Le total doit être arrondi au 10ème et sous forme de string préfixée de “CHF”.

const createBill = (table, tipPercentage) => {
  const subtotal = getSubtotal(table);
  const tip = calcPercentage(subtotal, tipPercentage);
  const tax = calcPercentage(subtotal, 0.076);
  const total = subtotal + tip + tax;
  return {
    subtotal: subtotal,
    tip: tip,
    tax: tax,
    total: Math.round(total * 20) / 20,
  };
};

// 4. Générez les factures pour toutes les tables
for (let i = 0; i < register.length; i++) {
  const table = register[i];
  const bill = createBill(table);
  console.log(bill);
}

//Création et affichage en html des factures avec range input pour le pourboire
const billContainer = document.querySelector(".bills");
for (let i = 0; i < register.length; i++) {
  const table = register[i];
  const tips = 0.1;
  const bill = createBill(table, tips);
  billContainer.innerHTML += `
    <div class="bill">
        <h2>Table ${table.tableID}</h2>
        <p>Sous total: CHF ${bill.subtotal}</p>
        <p>Tax: CHF ${bill.tax}</p>
        <p class="tips">Pourboire: CHF ${bill.tip} soit ${Math.round(
    tips * 100
  )}%</p>
        <input type="range" min="0" max="1" value="${tips}" step="0.01" class="tip">
        <br>
        <p class="total">Total: CHF ${bill.total}</p>
        <label for="split">Nombre de personnes</label>
        <input type="number" min="1" class="split">
        <p class="split-total">Total par personne: CHF ${bill.total}</p>
    </div>
    `;
}

//update the bill when range input is changed
const tipInputs = document.querySelectorAll(".tip");
const tipsInputs = document.querySelectorAll(".tips");
const splitTotals = document.querySelectorAll(".total");
for (let i = 0; i < tipInputs.length; i++) {
  tipInputs[i].addEventListener("input", (e) => {
    const table = register[i];
    const tips = e.target.value;
    const bill = createBill(table, tips);
    tipsInputs[i].innerHTML = `Pourboire: CHF ${bill.tip} soit ${Math.round(
      tips * 100
    )}%`;
    splitTotals[i].innerHTML = `Total: CHF ${bill.total}`;
  });
}

//update the bill when split input is changed
const splitInputs = document.querySelectorAll(".split");
for (let i = 0; i < splitInputs.length; i++) {
  const splitInput = splitInputs[i];
  splitInput.addEventListener("input", (e) => {
    let split = splitInput.value;
    split<1?split=1:split;
    const table = register[i];
    const bill = createBill(table, 0.1);
    const billElement = splitInput.parentElement;
    billElement.querySelector(
      ".split-total"
    ).textContent = `Total par personne: CHF ${
      Math.round((bill.total / split) * 20) / 20
    }`;
    splitInput.value = split;
  });
}
