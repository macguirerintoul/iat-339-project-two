class CartItem extends HTMLElement {
  static get observedAttributes() {
    return ['src', 'title', 'quantity', 'price'];
  }

  connectedCallback() {
    this.src = this.getAttribute('src');
    this.title = this.getAttribute('title');
    this.quantity = this.getAttribute('quantity');
    this.price = this.getAttribute('price');

    /*html*/
    var template = `
      <div class="image-container">
        <img src="${this.src}" alt="${this.title}"/>
      </div>
      <span class="title">${this.title}</span>
      <span class="quantity">${this.quantity}</span>
      <span class="price">$${this.price}</span>
    `
    this.innerHTML = template;
  }
};

customElements.define('m-cart-item', CartItem);
