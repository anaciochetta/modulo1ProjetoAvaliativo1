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
  return finalPriceList;
}

//adciona valor e quantidade aos produtos
