class HeaderElement extends HTMLElement {
  connectedCallback() {
    /*html*/
    var template = `
    <header>
      <div class="logo-container">
        <div>Moloch</div>
        <div>Moloch</div>
        <div>Moloch</div>
      </div>
      <nav>
        <a class="link-item" href="/">Home</a>
        <a class="link-item" href="/music/">Music</a>
        <a class="link-item" href="/about/">About</a>
        <a class="link-item" href="/styleguide/">Style Guide</a>
      </nav>
    </header>
    `
    this.innerHTML = template;
  }
};

customElements.define('m-header', HeaderElement);
