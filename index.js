import {
  Product,
  btnAddProduct,
  createObjectProduct,
  ajustProductName,
  addInstanceToProducts,
  createCheckboxProduct,
  showModalProduct,
} from "./product.js";
import {
  addProductToShoppingList,
  checkProductId,
  calculateTotalPrice,
  btnAddQuantityAndPrice,
} from "./shoppingList.js";

//armazena os produtos da lista de compras
export let shoppingList = [];

//botão para adcionar nome do item da lista
let btnAddName = document
  .getElementById("btnAdd")
  .addEventListener("click", btnAddProduct);
//botão para adcionar quantidade e valor do item da lista
let btnAddInfo = document
  .getElementById("btnSave")
  .addEventListener("click", btnAddQuantityAndPrice);
