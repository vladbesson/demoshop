class Cart {
  constructor(container, renderPopup) {
    this.container = container;
    this.renderPopup = renderPopup;
    this.products = [];
    this.cart = null;

    this.makeOrder = this.makeOrder.bind(this);
  }

  template() {
    const templateString = `<div class="cart">
        <h4 class="d-flex justify-content-between align-items-center mb-3">
          <span class="text-muted">Your cart</span>
          <span class="badge badge-secondary badge-pill" id="cart-product-count"></span>
        </h4>
        <ul class="list-group mb-3">
          
          
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

  templateProduct() {
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
    return element.firstChild;
  }

  render() {
    this.cart = this.template();

    this.cart.querySelector("#cart-product-count").textContent = this.products.length;
    this.cart.querySelector("#total-amount").textContent = this.getTotalAmount();

    this.products.forEach(item => {
      const product = this.templateProduct();
      product.querySelector("h6").textContent = item.name;
      product.querySelector("span").textContent = `$${item.cost}`;

      this.setLesteners();

      this.cart.querySelector("ul").appendChild(product);
    });

    this.container.appendChild(this.cart);
  }

  addProduct(product) {
    this.products.push(product);
    this.update();
  }

  remove() {
    this.removeListeners();
    this.cart.remove();
  }

  update() {
    this.remove();
    this.render();
  }

  getTotalAmount() {
    return this.products.reduce((acc, item) => {
      return acc = acc + item.cost;
    }, 0)
  }

  makeOrder() {
    this.renderPopup("Покупка совершена!");

    this.products = [];
    this.update();
  }

  removeListeners() {
    this.cart.querySelector("#makeOrderBtn").removeEventListener("click", this.makeOrder);
  }

  setLesteners() {
    this.cart.querySelector("#makeOrderBtn").addEventListener("click", this.makeOrder);
  }

}