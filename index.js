import { btnAddProduct } from "./product.js";
import { btnAddQuantityAndPrice } from "./shoppingList.js";

//botão para adcionar nome do item da lista
let btnAddName = document
  .getElementById("btnAdd")
  .addEventListener("click", btnAddProduct);
//botão para adcionar quantidade e valor do item da lista
let btnAddInfo = document
  .getElementById("btnSave")
  .addEventListener("click", btnAddQuantityAndPrice);
