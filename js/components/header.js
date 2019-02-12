class HeaderElement extends HTMLElement {
  connectedCallback() {
    /*html*/
    var template = `
      <div class="logo-container">
        <div>Moloch</div>
        <div>Moloch</div>
        <div>Moloch</div>
      </div>
      <nav>
        <a class="link-item" href="#branding">Merch</a>
        <a class="link-item" href="#interactive_elements">Music</a>
        <a class="link-item" href="#interactive_elements">About</a>
      </nav>
    `
    this.innerHTML = template;
  }
};

customElements.define('m-header', HeaderElement);
