const cardList = document.querySelector('#card-list');
const cartContainer = document.querySelector('#cart-container');

const popup = new Popup();
const cart = new Cart();

data.forEach(item => {
  const product = new Product(item, cardList, popup, cart);
  product.render();
});