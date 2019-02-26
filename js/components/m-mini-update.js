class MiniUpdate extends HTMLElement {
  connectedCallback() {
    /*html*/
    var template = `
    <div class="mini-update">
      <h4>` + this.getAttribute('title') + `</h4>
      <p>` + this.getAttribute('description') + `</p>
    </div>
    `
    this.innerHTML = template;
  }
};

customElements.define('m-mini-update', MiniUpdate);
