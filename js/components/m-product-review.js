class ProductReview extends HTMLElement {

    static get observedAttributes() {
        return ['title', 'rating', 'review'];
    }

    connectedCallback() {
        this.title = this.getAttribute('title');
        this.rating = this.getAttribute('rating');
        this.review = this.getAttribute('review');

        this.stars = '';

        for (let index = 0; index < this.rating; index++) {
            this.stars += `<i class="fas fa-star"></i>`;
        }

        for (let index = 0; index < 5 - this.rating; index++) {
            this.stars += `<i class="far fa-star"></i>`;
        }

        /*html*/
        var template = `
        <div class="review">
            <h3>${this.title}</h3>
            <div class="rating">
                ${this.stars}
            </div>
            <p>${this.review}</p>
        </div>
        `
        this.innerHTML = template;
    }
};

customElements.define('m-product-review', ProductReview);
