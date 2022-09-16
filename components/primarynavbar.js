class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
      <!-- HEADER -->
      <div id="header">
          <div id="header-wrapper">
              <div id="logo-wrapper">
                  <a href="index.html">
                      <img src="assets/images/header/Logo.webp" alt="logo" class="logo">
                      <p>FlowerPot</p>
                  </a>
              </div>
              <div id="menu-wrapper">
                  <a class="menu" id="menu-toggle" onclick="menuToggle(), myFunction()">Menu</a>
                  <a href="/compte.html"><img src="assets/images/header/icones/profil.webp" alt="profil" class="profil"></a>
                  <a href="/404.html"><img src="assets/images/header/icones/panier.webp" alt="panier" class="panier"></a>
              </div>
          </div>
          <!-- NAVIGATION  -->
          <div class="fullPageMenu" id="nav">
              <div class="nav">
                  <ul class="li-hidden">
                  <li>
                  <a href="/" data-text="Home">Home</a>
                  <img src="assets/images/header/leaf.webp">
              </li>
              <li>
              <a href="/nos-produits.html" data-text="Products">Products</a>
              <img src="assets/images/header/leaf.webp">
          </li>
              <li>
                  <a href="/contact.html" data-text="Contact">Contact</a>
                  <img src="assets/images/header/leaf.webp">
              </li>
                  </ul>
              </div>
          </div>
      </div>
      `;
    }
}

customElements.define('navbar-primary', Header);
