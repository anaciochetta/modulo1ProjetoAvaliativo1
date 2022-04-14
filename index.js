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
} from "./shoppingList.js";

//armazena os produtos da lista de compras
export let shoppingList = [];

//botão e função para pegar o nome do item da lista
let btnAdd = document
  .getElementById("btnAdd")
  .addEventListener("click", btnAddProduct);

console.log(shoppingList);
