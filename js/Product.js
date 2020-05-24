class Product {
  constructor(data, container, renderPopup, addToCart) {
    this.data = data;
    this.container = container;
    this.renderPopup = renderPopup;
    this.addToCart = addToCart;

    this.product = null;
    this.showProduct = this.showProduct.bind(this);
    this.addProductToCart = this.addProductToCart.bind(this);
  }

  template() {
    const templateString = `<div class="col-lg-6" style="margin-bottom: 20px;">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title"></h5>
          <p></p>
          <button href="#" class="btn btn-primary">Подробнее</button>
          <button href="#" class="btn btn-warning">В корзину</button>
        </div>
      </div>
    </div>`;
    var element = document.createElement("div");
    element.insertAdjacentHTML('beforeend', templateString.trim());
    return element.firstChild;
  }

  render() {
    this.product = this.template();

    this.product.querySelector("h5").textContent = this.data.name;
    this.product.querySelector("p").textContent = this.data.cost;

    this.setLesteners();

    this.container.appendChild(this.product);
  }

  showProduct() {
    this.renderPopup(this.data.text);
  }

  addProductToCart() {
    this.addToCart(this.data);
  }

  setLesteners() {
    this.product.querySelector(".btn-primary").addEventListener("click", this.showProduct);
    this.product.querySelector(".btn-warning").addEventListener("click", this.addProductToCart);
  }

  removeListeners() {

  }
}