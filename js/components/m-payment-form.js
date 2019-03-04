class PaymentForm extends HTMLElement {
  constructor() {
    super();
    this.template = `
    <h2>Payment Details</h2>
    <form action="/confirmation">
      <div class="col-6">
        <h4>Shipping Info</h4>
        <div class="input-wrapper">
          <label for="name">Name</label><input type="text" id="name">
        </div>
        <div class="input-wrapper">
          <label for="email">Email</label><input type="text" id="email">
        </div>
        <div class="input-wrapper">
          <label for="address">Address</label><input type="text" id="address">
        </div>
        <div class="input-wrapper">
          <label for="city">City</label><input type="text" id="city">
        </div>
        <div class="input-wrapper">
          <label for="province">Province</label><input type="text" id="province">
        </div>
        <div class="input-wrapper">
          <label for="postal">Postal</label><input type="text" id="postal">
        </div>
      </div>
      <div class="col-6">
        <h4>Billing Info</h4>
        <div class="input-wrapper">
          <label>Cards Accepted: </label>
          <div class="cards">
            <input type="radio" name="cardtype" id="visa" aria-label="Visa">
            <i class="fab fa-cc-visa"></i>

            <input type="radio" name="cardtype" id="amex" aria-label="Amex">
            <i class="fab fa-cc-amex"></i>

            <input type="radio" name="cardtype" id="mastercard" aria-label="MasterCard">
            <i class="fab fa-cc-mastercard"></i>

            <input type="radio" name="cardtype" id="discover" aria-label="Discover">
            <i class="fab fa-cc-discover"></i>
          </div>
        </div>
        <div class="input-wrapper">
          <label for="cname">Name on Card</label><input type="text" id="cname">
        </div>
        <div class="input-wrapper">
          <label for="cc">Credit Card</label><input type="text" id="cc">
        </div>
        <div class="input-wrapper">
          <label for="emonth">Exp Month</label><input type="text" id="emonth">
        </div>
        <div class="input-wrapper">
          <label for="eyear">Exp Year</label><input type="text" id="eyear">
        </div>
        <div class="input-wrapper">
          <label for="cvv">CVV</label><input type="text" id="cvv">
        </div>
      </div>
      <button>Checkout</button>
    </form>
    `
  }
    connectedCallback() {
        /*html*/

        this.innerHTML = this.template;
    }
};

customElements.define('m-payment-form', PaymentForm);
