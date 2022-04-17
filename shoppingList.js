import { removeProduct, checkProductId } from "./product.js";
//array para armazenar
export let shoppingList = [];

export function setShoppingList(_shoppingList) {
  shoppingList = _shoppingList;
}

//adciona os produtos para a lista de compras
export function addProductToShoppingList(item) {
  shoppingList.push(item);
}

//renderiza o preço total na tela
export function renderTotalPrice(price) {
  document.getElementById("finalPrice").innerHTML = "R$" + price;
}

//calcula o valor total dos produtos da lista
export function calculateTotalPrice() {
  let totalPrice = 0;
  shoppingList.forEach((product) => {
    totalPrice += product.getTotalPrice();
  });
  renderTotalPrice(totalPrice);
}

//botão para adcionar valor e quantidade aos produtos
export function btnAddQuantityAndPrice() {
  let inputPrice = document.getElementById("productPrice"); //pega o preço do produto do input
  let inputQuantity = document.getElementById("productQuantity"); //pega a quantidade do produto do input
  let id = parseInt(document.getElementById("modalProductId").value);
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

//adciona quantidade quantidade e preço aos produtos
function addQuantityAndPrice(id, price, quantity) {
  let produto = checkProductId(id);
  produto.addProductPrice(price);
  produto.addProductQuantity(quantity);
  calculateTotalPrice();
  //renderLabel(id);
}

//função para criar um li que contenha um checkbox e um botão de remover
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
  label.id = `label${id}`;
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
  li.appendChild(remove);
  li.appendChild(br);
}

//função para renderizar a label
export function renderLabel(id) {
  let label = document.getElementById("label" + id);
  document.getElementById("label" + id).innerHTML = "";
  let product = checkProductId(id);
  let name = product.name;
  let price = product.price;
  let quantity = product.quantity;
  let subTotal = product.getTotalPrice();
  let text = `${quantity} ${name}(s) - Preço un: R$${price} - Sutotal: R$${subTotal}`;
  text = label.appendChild(document.createTextNode(text)).innerHTML;
}

//função para verificar o checkbox
export function isChecked(event) {
  let product = event.currentTarget;
  let id = product.id;
  let name = product.name;
  renderModalName(name);
  if (event.currentTarget.checked) {
    showModalProduct(id);
  }
  let item = checkProductId(+id);
  console.log(item);
  console.log(id);
  item.addChecked(event.currentTarget.checked);
  calculateTotalPrice();
}

//função para aparecer o modal na tela
export function showModalProduct(e) {
  document.getElementById("modalProductId").value = e;
  document.getElementById("openModal").click();
}

//função para renderizar o nome no modal
export function renderModalName(name) {
  document.getElementById("productModalName").innerHTML = name;
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
