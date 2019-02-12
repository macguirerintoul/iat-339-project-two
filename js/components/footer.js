class FooterElement extends HTMLElement {
  connectedCallback() {
    /*html*/
    var template = ` 
      <footer>
        <div>
          <h4>Contact Us</h4>
          <ul>
            <li>merch@moloch.com</li>
          </ul>
        </div>
      </footer>
    `
    this.innerHTML = template;
  }
};

customElements.define('m-footer', FooterElement);
