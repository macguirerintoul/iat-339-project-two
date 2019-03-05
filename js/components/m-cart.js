class Cart extends HTMLElement {

  connectedCallback() {
    /*html*/
    var template = `
      <div class="checkout-cart">
        <h3><i class="fa fa-shopping-cart"></i> Cart</h3>
        <slot name="cart-items"></slot>
        <slot name="total"></slot>
      </div>
    `
    this.innerHTML = template;
  }
};

customElements.define('m-cart', Cart);

// <i class="fas fa-tshirt"></i>
// <a class="link" href="#">Moloch T-Shirt</a>
// <div class="info"> x2</div> -->
