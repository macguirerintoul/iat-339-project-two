class HeaderElement extends HTMLElement {
  connectedCallback() {
    /*html*/
    var template = `
    <header>
      <div class="logo-container">
        <div class="logo">
          <div>Moloch</div>
          <div>Moloch</div>
          <div>Moloch</div>
        </div>
        <a class="cart" href="/checkout/">
          <i class="fas fa-shopping-cart"></i> 1
        </a>
      </div>
      <nav>
        <a class="link-item" href="/iat-339-project-two/">Home</a>
        <a class="link-item" href="/iat-339-project-two/music/">Music</a>
        <a class="link-item" href="/iat-339-project-two/about/">About</a>
        <a class="link-item" href="/iat-339-project-two/contact/">Contact</a>
        <a class="link-item" href="/iat-339-project-two/styleguide/">Style Guide</a>
      </nav>
    </header>
    `
    this.innerHTML = template;
  }
};

customElements.define('m-header', HeaderElement);
