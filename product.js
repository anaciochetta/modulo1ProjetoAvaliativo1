import {
  addProductToShoppingList,
  checkProductId,
  calculateTotalPrice,
  addTotalPrice,
  removeTotalPrice,
} from "./shoppingList.js";
import { shoppingList } from "./index.js";

//cria os produtos individuais com nome e preço
export class Product {
  id = 0;
  name = "";
  quantity = 0;
  price = 0;
  totalPrice = 0;

  constructor({ id, name, quantity, price, totalPrice }) {
    this.id = id;
    this.name = name;
    this.quantity = quantity;
    this.price = price;
    this.totalPrice = totalPrice;
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
  addTotalPrice(productTotalPrice) {
    this.totalPrice = productTotalPrice;
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
  return id;
}

//função para colocar o nome no produto novo
export function addInstanceToProducts(id, name) {
  let produto = checkProductId(id);
  produto.addProductName(name);
}

//função para deixar o nome sem acento e tudo minusculo
export function ajustProductName(item) {
  const parsed = item
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

  return parsed;
}

//função para criar um li que contenha um checkbox
export function createCheckboxProduct(produto, id) {
  let ul = document.getElementById("listOfProducts");
  let li = document.createElement("li");
  li.id = id;

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = id;
  checkbox.name = produto;
  checkbox.checked = false;
  checkbox.addEventListener("change", isChecked);

  let label = document.createElement("label");
  label.htmlFor = produto;
  label.appendChild(document.createTextNode(produto));

  let remove = document.createElement("input");
  remove.type = "button";
  remove.id = id;
  remove.name = produto;
  remove.value = "X";
  remove.addEventListener("click", removeProduct);

  let br = document.createElement("br");

  ul.appendChild(li);
  li.appendChild(checkbox);
  li.appendChild(label);
  li.appendChild(br);
  li.appendChild(remove);
}

//função para aparecer o modal
export function showModalProduct(e) {
  document.getElementById("modalProductId").value = e;
  document.getElementById("openModal").click();
}

//função para gerenciar o modal
export function manageModalName(name) {
  document.getElementById("productModalName").innerHTML = name;
}

//função para verificar o checkbox
export function isChecked(event) {
  let product = event.currentTarget;
  let id = product.id;
  let name = product.name;
  manageModalName(name);
  if (event.currentTarget.checked) {
    showModalProduct(id);
  } else {
    removeTotalPrice(id);
  }
}

//função para remover o produto da lista
export function removeProduct(product) {
  let button = product.target;
  let element = button.parentElement;
  let id = element.id;
  let updatedShopingList = removeProductShoppingList(shoppingList, id);
  console.log(updatedShopingList);
  product.target.parentElement.remove();
  removeTotalPrice(id);
  return updatedShopingList;
}

//função para remover o produto do array
export function removeProductShoppingList(arr, product) {
  return arr.filter(function (ele) {
    return ele.id != product;
  });
}

export function updateArray() {
  shoppingList.push(...updatedShopingList);
  console.log(shoppingList);
}
