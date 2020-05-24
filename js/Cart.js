class Cart {
  constructor(container, popup) {
    this.container = container;
    this.popup = popup;
    this.products = [];
    this.cart = null;

    this.makeOrder = this.makeOrder.bind(this);
  }

  template() {
    const templateString = `<div class="cart">
        <h4 class="d-flex justify-content-between align-items-center mb-3">
          <span class="text-muted">Your cart</span>
          <span class="badge badge-secondary badge-pill" id="total-count"></span>
        </h4>
        <ul class="list-group mb-3" id="cart-product-list">
          
        </ul>
        <ul class="list-group mb-3">
          <li class="list-group-item d-flex justify-content-between">
            <span>Total (USD)</span>
            <strong id="total-amount"></strong>
          </li>
        </ul>

        <div class="card p-2 pull-right">
          <button id="makeOrderBtn" class="btn btn-success">Купить!</button>
        </div>
      </div>
    `;
    var element = document.createElement("div");
    element.insertAdjacentHTML('beforeend', templateString.trim());
    return element.firstChild;
  }

  productTemplate(product) {
    const templateString = `
      <li class="list-group-item d-flex justify-content-between lh-condensed">
        <div>
          <h6 class="my-0"></h6>
          <small class="text-muted">Brief description</small>
        </div>
        <span class="text-muted"></span>
      </li>
    `;
    var element = document.createElement("div");
    element.insertAdjacentHTML('beforeend', templateString.trim());

    element.firstChild.querySelector("h6").textContent = product.name;
    element.firstChild.querySelector("span").textContent = `$${product.cost}`;

    return element.firstChild;
  }

  render() {
    this.cart = this.template();

    this.cart.querySelector("#total-count").textContent = this.products.length;
    this.cart.querySelector("#total-amount").textContent = `$${this.getTotal()}`;

    this.products.forEach(item => {
      this.cart.querySelector("#cart-product-list").appendChild(this.productTemplate(item));
    });

    this.addListeners();

    this.container.appendChild(this.cart);
  }

  remove() {
    this.removeListeners();
    this.cart.remove();
  }

  getTotal() {
    return this.products.reduce((acc, product) => acc + product.cost, 0);
  }

  addProduct(product) {
    this.products.push(product);
    this.update();
  }

  update() {
    this.remove();
    this.render();
  }

  makeOrder() {
    this.popup.render("Покупка совершена!");

    this.products = [];
    this.update();
  }

  removeListeners() {
    this.cart.querySelector("#makeOrderBtn").removeEventListener("click", this.makeOrder);
  }

  addListeners() {
    this.cart.querySelector("#makeOrderBtn").addEventListener("click", this.makeOrder);
  }
}