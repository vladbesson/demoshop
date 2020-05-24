const cardList = document.querySelector('#card-list');
const cartContainer = document.querySelector('#cart-container');

const popup = new Popup();

data.forEach(item => {
  const product = new Product(item, cardList, popup);
  product.render();
});