import {
  addProductToShoppingList,
  calculateTotalPrice,
  shoppingList,
  setShoppingList,
  createCheckboxProduct,
  removeProductShoppingList,
} from "./shoppingList.js";

//cria os produtos individuais com nome e preço
export class Product {
  id = 0;
  name = "";
  quantity = 0;
  price = 0;
  checked = false;

  constructor({ id, name, quantity, price, checked }) {
    this.id = id;
    this.name = name;
    this.quantity = quantity;
    this.price = price;
    this.checked = checked;
  }

  addProductName(item) {
    this.name = item;
  }

  addProductPrice(productPrice) {
    this.price = productPrice;
  }

  addProductQuantity(productQuantity) {
    this.quantity = productQuantity;
  }
  addChecked(productChecked) {
    this.checked = productChecked;
  }
  getTotalPrice() {
    if (!this.checked || !this.price || !this.quantity) {
      return 0;
    }
    return this.price * this.quantity;
  }
}

export function btnAddProduct() {
  let inputProduct = document.getElementById("productName"); //pega o nome do produto do input
  if (!inputProduct.value) {
    return window.alert("Insira um valor!");
  }
  let id = createObjectProduct();
  createCheckboxProduct(inputProduct.value, id);
  addInstanceToProducts(id, inputProduct.value);
  inputProduct.value = "";
}

//cria um novo objeto referente ao produto inserido no input
export function createObjectProduct() {
  let id = Math.floor(Math.random() * 100); //cria o id
  let item = new Product({ id: id });
  addProductToShoppingList(item); //coloca o objeto do produto novo no array
  console.log(shoppingList);
  return id;
}

// função para checkar o id e retornar o produto
export let checkProductId = (id) =>
  shoppingList.find((productId) => productId.id === id);

//função para colocar o nome no produto novo
export function addInstanceToProducts(id, name) {
  let produto = checkProductId(id);
  produto.addProductName(name);
}

//função para remover o produto da lista
export function removeProduct(product) {
  let button = product.target;
  let element = button.parentElement;
  let id = element.id;
  let updatedShopingList = removeProductShoppingList(shoppingList, id);
  setShoppingList(updatedShopingList);
  product.target.parentElement.remove();
  calculateTotalPrice();
  return updatedShopingList;
}
