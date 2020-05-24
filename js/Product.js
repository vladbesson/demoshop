class Product {
  constructor(data, container, popup, cart) {
    this.name = data.name;
    this.text = data.text;
    this.cost = data.cost;
    this.container = container;
    this.popup = popup;
    this.product = null;

    this.showProduct = this.showProduct.bind(this);
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
    this.product.querySelector("#product-name").textContent = this.name;
    this.product.querySelector("#product-cost").textContent = this.cost;

    this.addListeners();

    this.container.appendChild(this.product);
  }

  addToCart() {
    alert("Добавление в корзину");
  }

  showProduct() {
    this.popup.render(this.text);
  }

  addListeners() {
    this.product.querySelector("#showProduct").addEventListener("click", this.showProduct);
    this.product.querySelector("#buyProduct").addEventListener("click", this.addToCart);
  }

  removeListeners() {

  }
}