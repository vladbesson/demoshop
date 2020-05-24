const cardList = document.querySelector('#card-list');
const cartContainer = document.querySelector('#cart-container');

function renderPopup(text) {
  popup.render(text);
}

function addToCart(product) {
  cart.addProduct(product);
}


const popup = new Popup();

const cart = new Cart(cartContainer, renderPopup);
cart.render();

data.forEach(item => {
  const product = new Product(item, cardList, renderPopup, addToCart);
  product.render();
});