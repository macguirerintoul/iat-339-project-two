class HeaderElement extends HTMLElement {
  connectedCallback() {
    /*html*/
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

customElements.define('m-header', HeaderElement);
