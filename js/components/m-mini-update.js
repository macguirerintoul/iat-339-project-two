class MiniUpdate extends HTMLElement {
  connectedCallback() {
    /*html*/
    var template = `
    <div class="mini-update">
      <h4>Title goes here</h4>
      <p>Some text about the news. We are proud to announce...</p>
    </div>
    `
    this.innerHTML = template;
  }
};

customElements.define('m-mini-update', MiniUpdate);
