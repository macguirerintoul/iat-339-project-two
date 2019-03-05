(function() {
  const template = document.createElement('template');

  template.innerHTML = `
    <div class="checkout-cart">
      <h3><i class="fa fa-shopping-cart"></i> Cart</h3>
      <slot name="cart-items"></slot>
      <slot name="total"></slot>
    </div>
  `;

  class Cart extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  };

  customElements.define('m-cart', Cart);
})();
