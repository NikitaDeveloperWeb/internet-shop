let dataUser = document.querySelector('#user');
let dataProduct = document.querySelector('#product');
let dataOrder = document.querySelector('#order');
// buttons
let dataUserBut = document.querySelector('#userBut');
let dataProductBut = document.querySelector('#prodBut');
let dataOrderBut = document.querySelector('#orderBut');

function renderDataPage() {
  if (stateData === 0) {
    dataUser.style.display = '';
    dataProduct.style.display = 'none';
    dataOrder.style.display = 'none';
  } else if (stateData === 1) {
    dataUser.style.display = 'none';
    dataProduct.style.display = '';
    dataOrder.style.display = 'none';
  } else if (stateData === 2) {
    dataUser.style.display = 'none';
    dataProduct.style.display = 'none';
    dataOrder.style.display = '';
  }
}
renderDataPage();

function changeUser() {
  stateData = 0;
  renderDataPage();
}
function changeProd() {
  stateData = 1;
  renderDataPage();
}
function changeOrder() {
  stateData = 2;
  renderDataPage();
}

dataUserBut.addEventListener('click', () => {
  changeUser();
});
dataProdBut.addEventListener('click', () => {
  changeProd();
});
dataOrderBut.addEventListener('click', () => {
  changeOrder();
});
