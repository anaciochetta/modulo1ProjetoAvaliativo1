import {
  addProductToShoppingList,
  checkProductId,
  calculateTotalPrice,
  //verifyCheckbox,
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
    this.quantity = quantity;
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
  createCheckboxProduct(inputProduct.value, id);
  addInstanceToProducts(id, inputProduct.value);
  manageModalName(inputProduct.value);
  inputProduct.value = "";
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
  checkbox.addEventListener("click", isChecked);

  let label = document.createElement("label");
  label.htmlFor = produto;
  label.appendChild(document.createTextNode(produto));
  label.addEventListener("click", showModalProduct);

  let br = document.createElement("br");

  let remove = document.createElement("input");
  remove.type = "button";
  remove.id = id;
  remove.name = produto;
  remove.innerHTML = "remove";

  ul.appendChild(li);
  li.appendChild(checkbox);
  li.appendChild(label);
  li.appendChild(br);
  li.appendChild(remove);
}

//função para aparecer o modal
export function showModalProduct(e) {
  const label = e.target;
  const li = label.parentElement;
  const id = li.id;
  document.getElementById("modalProductId").value = id;
  document.getElementById("openModal").click();
}

//função para gerenciar o modal
export function manageModalName(name) {
  document.getElementById("productModalName").innerHTML = name;
}

//função para verificar o checkbox
export function isChecked() {}
