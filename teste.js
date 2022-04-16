//coisas que não sei se vou usar

class shoppingList {
  products;
  totalPrice;

  constructor() {
    this.products = [];
    this.totalPrice = totalPrice;
  }
  addProductToShoppingList(item) {
    this.products.push(item.nome);
  }
  calculateTotalPrice() {
    let finalPriceList = 0;
    this.products.forEach((item) => {
      finalPriceList += item.totalPrice;
    });
    return finalPriceList;
  }
}
//check o nome do produto
const checkProductName = (name) =>
  shoppingList.find((productName) => productName.name === name);

//teste pra ver se está funcionando
const arroz = new Product("arroz");
const banana = new Product("banana");

arroz.addProductPrice(10);
banana.addProductPrice(20);

console.log(arroz);
console.log(banana);

addProductToShoppingList(arroz);
addProductToShoppingList(banana);

console.log(shoppingList);

console.log(calculateTotalPrice());

//botão que não funciona de jeito nenhum
const btn = document
  .getElementById("btnAdd")
  .addEventListener("click", btnAddProduct());

let algo = document.getElementById("productName").value;

/////////////

//função para instanciar o novo objeto/item da lista
function addInstanceToProducts(id) {
  let idProduto = checkProductId(id);
}

//função para filtrar os id nos array global
function filterItem() {}

//modal
var myModal = document.getElementById("myModal");

myModal.addEventListener("shown.bs.modal", function () {
  myInput.focus();
});


label.addEventListener("click", () => {
  console.log("funcona"); //clica no nome e faz algo
}

