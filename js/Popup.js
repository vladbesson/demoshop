class Popup {
  constructor() {
    this.popup = null;

    this.close = this.close.bind(this);
  }

  template() {
    const templateString = `<div class="popup">
        <div class="popup__box">
          <button class="popup__close" type="button">x</button>
          <div class="popup__body" id="popup-content"></div>
        </div>
      </div>
    `;
    var element = document.createElement("div");
    element.insertAdjacentHTML('beforeend', templateString.trim());
    return element.firstChild;
  }

  render(content) {
    this.popup = this.template();
    this.popup.querySelector("#popup-content").textContent = content;
    this.addListeners();
    document.querySelector("body").appendChild(this.popup);
  }

  close() {
    this.removeListeners();
    this.popup.remove();
  }

  addListeners() {
    this.popup.querySelector(".popup__close").addEventListener("click", this.close);
  }

  removeListeners() {
    this.popup.querySelector(".popup__close").removeEventListener("click", this.close);
  }
}