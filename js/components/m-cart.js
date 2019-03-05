(function() {
  const template = document.createElement('template');

  template.innerHTML = `
    <h3><i class="fa fa-shopping-cart"></i> Cart</h3>
    <slot name="cart-items"></slot>
    <slot name="total">Total: $99.69</slot>
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
