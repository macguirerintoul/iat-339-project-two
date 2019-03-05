class FooterElement extends HTMLElement {
  connectedCallback() {
    /*html*/
    var template = ` 
      <footer>
        <div>
            © 2019 | Developed by Macguire + Josh
        </div>
      </footer>
    `
    this.innerHTML = template;
  }
};

customElements.define('m-footer', FooterElement);
