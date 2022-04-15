import {
  Product,
  btnAddProduct,
  createObjectProduct,
  ajustProductName,
  createCheckboxProduct,
  addInstanceToProducts,
  showModalProduct,
} from "./product.js";
import { shoppingList } from "./index.js";

//adciona os produtos para a lista de compras
export function addProductToShoppingList(item) {
  shoppingList.push(item);
}

// função para checkar o id e retornar o produto
export const checkProductId = (id) =>
  shoppingList.find((productId) => productId.id === id);

//calcula o valor total dos produtos da lista
export function calculateTotalPrice() {
  let finalPriceList = 0;
  shoppingList.forEach((item) => {
    finalPriceList = item.price * item.quantity;
  });
  document.getElementById("finalPrice").innerHTML = "R$" + finalPriceList;
}

//adciona valor e quantidade aos produtos
export function btnAddQuantityAndPrice() {
  let inputPrice = document.getElementById("productPrice"); //pega o preço do produto do input
  let inputQuantity = document.getElementById("productQuantity"); //pega a quantidade do produto do input
  const id = parseInt(document.getElementById("modalProductId").value);
  addQuantityAndPrice(id, inputPrice.value, inputQuantity.value);
  if (!inputPrice.value) {
    return window.alert("Insira o valor do produto desejado!");
  }
  if (!inputQuantity.value) {
    return window.alert("Insira a quantidade do produto desejado!");
  }
  inputPrice.value = "";
  inputQuantity.value = "";
}
function addQuantityAndPrice(id, price, quantity) {
  let produto = checkProductId(id);
  produto.addProductPrice(price);
  produto.addProductQuantity(quantity);
}
