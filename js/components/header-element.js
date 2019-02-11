class HeaderComponent extends HTMLElement {
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

customElements.define('header-component', HeaderComponent);
