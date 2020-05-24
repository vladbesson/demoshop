class Product {
  constructor(item, container, popup, cart) {
    this.item = item;
    this.container = container;
    this.cart = cart;
    this.popup = popup;
    this.product = null;

    this.showProduct = this.showProduct.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  template() {
    const templateString = `<div class="col-lg-6" style="margin-bottom: 20px;">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title" id="product-name"></h5>
          <p id="product-cost"></p>
          <button href="#" id="showProduct" class="btn btn-primary">Подробнее</button>
          <button href="#" id="buyProduct" class="btn btn-warning">В корзину</button>
        </div>
      </div>
    </div>`;
    var element = document.createElement("div");
    element.insertAdjacentHTML('beforeend', templateString.trim());
    return element.firstChild;
  }

  render() {
    this.product = this.template();
    this.product.querySelector("#product-name").textContent = this.item.name;
    this.product.querySelector("#product-cost").textContent = this.item.cost;

    this.addListeners();

    this.container.appendChild(this.product);
  }

  addToCart() {
    this.cart.addProduct(this.item);
  }

  showProduct() {
    this.popup.render(this.item.text);
  }

  addListeners() {
    this.product.querySelector("#showProduct").addEventListener("click", this.showProduct);
    this.product.querySelector("#buyProduct").addEventListener("click", this.addToCart);
  }

  removeListeners() {

  }
}