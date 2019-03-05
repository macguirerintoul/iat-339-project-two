class ProductListing extends HTMLElement {

    static get observedAttributes() {
        return ['image', 'name', 'price'];
    }

    connectedCallback() {
        this.image = this.getAttribute('image');
        this.name = this.getAttribute('name');
        this.price = this.getAttribute('price');
        /*html*/
        var template = `
        <a href="/product/?p=${this.name}&i=${this.image}&d=${this.price}">
          <figure>
            <img src="${this.image}" alt="${this.name}">
            <figcaption>${this.name}</figcaption>
          </figure>
          <div class="price">$${this.price}</div>
        </a>
        <button>add to cart</button>
        `
        this.innerHTML = template;
    }
};

customElements.define('m-product-listing', ProductListing);
