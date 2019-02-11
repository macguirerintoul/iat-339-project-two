class HeaderElement extends HTMLElement {
  connectedCallback() {
    var template = `
      <div class="logo-container">
        <div>Moloch</div>
        <div>Moloch</div>
        <div>Moloch</div>
      </div>
    `
    this.innerHTML = template;
  }
};

customElements.define('header-element', HeaderElement);
