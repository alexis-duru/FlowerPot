class Newsletter extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <link href="https://cdn-images.mailchimp.com/embedcode/classic-071822.css" rel="stylesheet" type="text/css">

<div class='newsletter'>
    <div class="wrapper-row">
        <div class="newsletter-content">
            <div class="newsletter-left">
                <p class="text-white">Ne ratez pas nos  <span class="text-dark">actualités</span>,<br> recevez notre newsletter !</p>
            </div>
            <div class="nexsletter-right">
                        <!-- Button trigger modal -->
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <p>Je M'inscris <span class="text-green">*</span> </p>
                    <img src="assets/images/newsletterlogo.png" alt="newsletterlogo">
                    
                </button>
                <div><small>*Vous acceptez que vos coordonnées soient utilisées pour vous contacter.</small></div>
            
            </div>
        </div>
    </div>

</div>          

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
    <div class="modal-content">
        <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
                    <!-- Begin Mailchimp Signup Form -->

            <div id="mc_embed_signup">
                <form action="https://gmail.us17.list-manage.com/subscribe/post?u=d37bc1023c71abfb267aed26f&amp;id=cfc3a54052&amp;f_id=001352e0f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                    <div id="mc_embed_signup_scroll">
                    <h2>Subscribe</h2>
                    <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
            <div class="mc-field-group">
                <label for="mce-EMAIL">Email Address  <span class="asterisk">*</span>
            </label>
                <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" required>
                <span id="mce-EMAIL-HELPERTEXT" class="helper_text"></span>
            </div>
                <div id="mce-responses" class="clear foot">
                    <div class="response" id="mce-error-response" style="display:none"></div>
                    <div class="response" id="mce-success-response" style="display:none"></div>
                </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_d37bc1023c71abfb267aed26f_cfc3a54052" tabindex="-1" value=""></div>
                    <div class="optionalParent">
                        <div class="clear foot">
                            <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button">
                            <p class="brandingLogo"><a href="http://eepurl.com/h-5M0P" title="Mailchimp - email marketing made easy and fun"><img src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg"></a></p>
                        </div>
                    </div>
                </div>
            </form>
            </div>
            <script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script><script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';fnames[5]='BIRTHDAY';ftypes[5]='birthday';}(jQuery));var $mcj = jQuery.noConflict(true);</script>
            <!--End mc_embed_signup-->
        </div>
        <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
        </div>
    </div>
    </div>
</div>


      `;
    }
  }
  
  customElements.define('newsletter-component', Newsletter);