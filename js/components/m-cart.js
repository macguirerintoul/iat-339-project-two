class Cart extends HTMLElement {

    static get observedAttributes() {
        return ['image', 'name', 'price'];
    }

    connectedCallback() {
        this.image = this.getAttribute('image');
        this.name = this.getAttribute('name');
        this.price = this.getAttribute('price');
        /*html*/
        var template = `
        <div class="checkout-cart">
          <h3><i class="fa fa-shopping-cart"></i> Cart</h3>
          <div class="items">
            <i class="fas fa-tshirt"></i>
            <a class="link" href="#">Moloch T-Shirt</a>
            <div class="info"> x2</div>
          </div>
          <div>Total: 120</div>
        </div>
        `
        this.innerHTML = template;
    }
};

customElements.define('m-cart', Cart);
