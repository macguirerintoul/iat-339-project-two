(function() {
  const template = document.createElement('template');
  template.innerHTML = `
    <div class="sidebar">
      <h2>Updates</h2>
      <slot></slot>
    </div>
  `

  class Sidebar extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  };

  window.customElements.define('m-sidebar', Sidebar);
})();
