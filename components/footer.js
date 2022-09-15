class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <div class="footer">
      <div class="user_footer">
      <div class="reseaux">
          <div class="wrapper-reseaux">
              <div class = "logo">
                  <img src="assets/images/Logo_blanc.svg" alt="Logo Marque Blanc">
                  <h2>FlowerPot</h2>
              </div>
              <div class = "txt">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae distinctio modi, odit eum officia minima, atque accusamus praesentium impedit iure dolor, earum necessitatibus quasi fuga asperiores saepe? Exercitationem, rem aut. </p>
              </div>
              <div class="links">
                <a href="https://www.facebook.com/" target="_blank"><img src="assets/images/Icon_Face_Blanc.svg" alt="Logo Facebook Blanc"></a>
                <a href="https://www.instagram.com/" target="_blank"><img src="assets/images/Icon_Insta_Blanc.svg" alt="Logo Instagram Blanc"></a>
              </div>
          </div>
      </div>
          
      <div class="infos">
          <ul class="list_info">
              <li>
                  <h3>BESOIN D'AIDE ?</h3>
                  <ul>
                    <li><a href="tel:+33505050505">+33 5 05 05 05 05</a> </li>
                    <li><a href="mailto:example@gmail.com">example@gmail.com</a> </li>
                    
                 </ul>
             </li>
            <li>
                <h3>LIENS RAPIDES</h3>
                <ul>
                    <li><a href="/">Accueil</a> </li>
                    <li><a href="/nos-produits.html">Nos produits</a></li>
                    <li><a href="/contact.html">Contact</a></li>
                </ul>
            </li>
            <li>
                <h3>LIENS UTILES</h3>
                <ul>
                    <li><a href="/mentions-legales.html">Mentions légales</a> </li>
                    <li><a href="/politique-de-confidentialite.html">Politique de confidentialité</a></li>
                </ul>
              </li>
          </ul>
      </div>
  </div>
  <div class="line"></div>
  <div class="right">
      
      <p class="right_p">© 2022 - FlowerPot - Tous droits réservés</p>
      <p class="right_p">Une réalisation ecv-m1-2022</p>
  </div>

</div>
      `;
    }
  }
  
  customElements.define('footer-component', Footer);
