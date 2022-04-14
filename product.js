import {
  addProductToShoppingList,
  checkProductId,
  calculateTotalPrice,
} from "./shoppingList.js";
import { shoppingList } from "./index.js";

//cria os produtos individuais com nome e preço
export class Product {
  id = 0;
  name = "";
  quantity = 0;
  price = 0;

  constructor({ id, name, quantity, price }) {
    this.id = id;
    this.name = name;
    this.name = quantity;
    this.price = price;
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
}

export function btnAddProduct() {
  let inputProduct = document.getElementById("productName"); //pega o nome do produto do input
  if (!inputProduct.value) {
    return window.alert("Insira um valor!");
  }
  let id = createObjectProduct();
  createCheckboxProduct(inputProduct.value);
  addInstanceToProducts(id, inputProduct.value);
  inputProduct.value = "";
  manageModal(inputProduct.value);
}

//cria um novo objeto referente ao produto inserido no input
export function createObjectProduct() {
  const id = Math.floor(Math.random() * 100); //cria o id
  const item = new Product({ id: id });
  addProductToShoppingList(item); //coloca o objeto do produto novo no array
  return id;
}

//função para colocar o nome no produto novo
export function addInstanceToProducts(id, name) {
  let produto = checkProductId(id);
  console.log(produto);
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
  checkbox.id = produto;
  checkbox.name = produto;
  checkbox.checked = false;

  let label = document.createElement("label");
  label.htmlFor = produto;
  label.appendChild(document.createTextNode(produto));
  label.addEventListener("click", showModalProduct);

  let br = document.createElement("br");

  ul.appendChild(li);
  li.appendChild(checkbox);
  li.appendChild(label);
  li.appendChild(br);
}

//função para aparecer o modal
export function showModalProduct() {
  document.getElementById("openModal").click();
}

//função para gerenciar o modal
export function manageModal(productName) {
  let name = document.getElementById("productModalName").value;
  name = productName;
  console.log(productName);
  console.log(name);
}

//função para ver se está check na lista
export function verifyCheckbox(id) {
  let checkbox = document.getElementById(id);
  if (checkbox.checked) {
    console.log("ok");
  } else {
    console.log("não ok");
  }
}
