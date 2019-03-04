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
        <a class="product-listing" href="/product/?p=${this.name}&i=${this.image}">
            <figure>
                <img src="${this.image}" alt="${this.name}">
                <figcaption>${this.name}</figcaption>
            </figure>
            <div class="price">$${this.price}</div>
            <div class="buy"></div>
        </a>
        `
        this.innerHTML = template;
    }
};

customElements.define('m-product-listing', ProductListing);
