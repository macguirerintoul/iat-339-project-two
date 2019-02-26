class ContactForm extends HTMLElement {
  connectedCallback() {
    /*html*/
    var template = `
    <form action="#">
      <div class="col-12">
        <p>Here, you can contact Moloch Merch about products and orders, or let us know if you have questions, comments, or concerns. Your feedback is important to us.</p>
        <div class="input-wrapper">
          <label for="name">Name</label><input type="text" id="name">
        </div>
        <div class="input-wrapper">
          <label for="email">Email</label><input type="text" id="email">
        </div>
        <div class="input-wrapper">
          <label for="product">Product (if applicable)</label><input type="text" id="product">
        </div>
        <div class="input-wrapper">
          <label for="comment">Comment</label><textarea id="comment" rows="10"></textarea>
        </div>
      </div>

      <button type="submit">Submit</button>
    </form>
    `
    this.innerHTML = template;
  }
};

customElements.define('m-contact-form', ContactForm);
