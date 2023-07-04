// Header component ------------------------------------------------------
class Header extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <header app-navbar>
            <div class="logo">
                <a title="Arifa's Corner" href="./index.html">
                    <img src="./images/LOGO_LogoNavbar.png" alt="Arifa's Corner Logo">
                </a>
                <label for="navbutton" class="icon">
                    <span class="fa fa-bars"></span>
                </label>
                <input type="checkbox" id="navbutton">
                <ul>
                    <li>
                        <label for="navbutton-1" class="show">About</label>
                        <a title="About Us" href="./about.html">About</a>
                    </li>
                    <li>
                        <label for="navbutton-2" class="show">Books +</label>
                        <a title="Books" href="./books.html">Books</a>
                        <input type="checkbox" id="navbutton-2">
                        <ul>
                            <li><a title="A Fine Feast" href="#">A Fine Feast</a></li>
                            <li><a title="Book 2" href="#">Book 2</a></li>
                            <li><a title="Book 3" href="#">Book 3</a></li>
                            <li><a title="Poem 1" href="#">Poem 1</a></li>
                            <li><a title="Poem 2" href="#">Poem 2</a></li>
                        </ul>
                    </li>
                    <li>
                        <label for="navbutton-3" class="show">Blog +</label>
                        <a title="Blog" href="./blog.html">Blog</a>
                        <input type="checkbox" id="navbutton-3">
                        <ul>
                            <li><a title="Blogpost #1" href="#">Blogpost #1</a></li>
                            <li><a title="Blogpost #2" href="#">Blogpost #2</a></li>
                            <li><a title="Blogpost #3" href="#">Blogpost #3</a></li>
                        </ul>
                    </li>
                    <li>
                        <label for="navbutton-4" class="show">Activities +</label>
                        <a title="Activities" href="./activities.html">Activities</a>
                        <input type="checkbox" id="navbutton-4">
                        <ul>
                            <li><a title="Activity #1" href="#">Activity #1</a></li>
                            <li><a title="Activity #2" href="#">Activity #2</a></li>
                            <li><a title="Activity #3" href="#">Activity #3</a></li>
                        </ul>
                    </li>
                    <li>
                        <label for="navbutton-5" class="show">Contact</label>
                        <a title="Contact" href="./contact.html">Contact</a>
                    </li>
                </ul>
            </div>
            <!------------------- Navbar section --------------------------->
        </header>
        ` 
    }
}

customElements.define('app-navbar', Header);



// Subscribe component ------------------------------------------------------
// class Subscribe extends HTMLElement{
//     connectedCallback(){
//         this.innerHTML = `
//         <app-subscribe>
//             <section>
//                 <div id="subscribe-container" class="subscribe-container">
//                     <div id="left" class="left">
//                         <div class="left-info">
//                             <h1>Subscribe to Arifa</h1>
//                             <p>Subscribe to Arifa's newsletter for the latest news, blogspots and activities.</p>
//                         </div>
    
//                         <form id="sub-form">
//                             <div class="form-item">
//                                 <label for="email">
//                                     <p>Email address</p>
//                                     <p id="invalid-email" class="invalid-email">Valid email required</p>
//                                 </label>
//                                 <input type="email" name="email" id="email" placeholder="email@company.com">
//                             </div>
//                             <div class="form-item">
//                                 <button id="submit-btn" type="submit">Subscribe to monthly newsletter</button>
//                             </div>
//                         </form>
//                     </div>
    
//                     <div id="right" class="right">
//                         <picture>
//                             <source media="(max-width:768px)" srcset="./images/subscribe.png">
//                             <img src="./images/subscribe.png" alt="Image of a postbox" title="Image of a postbox">
//                         </picture>
//                     </div>
    
//                     <div id="confirmed-message" class="confirmed-message">
//                         <img src="./images/icon-success.svg" alt="success icon" title="circle with a tick success icon">
//                         <h2>Thank you for subscribing to Arifa's Newslestter!</h2>
//                         <p>A confirmation email has been sent to <span id="user-email"></span>
//                             <br>Please open the email and click on the link to confirm your subscription.
//                         </p>
//                         <button id="dismiss-message">Dismiss message</button>
//                     </div>
//             </section>
//         </app-subscribe>
//         `
//     }
// }

// customElements.define('app-subscribe', Subscribe);


// Footer component ------------------------------------------------------
class Footer extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <footer class="app-footer">
            <section class="body-footer">
                <div class="footer">
                    <div class="footer-container">
                        <div class="footer-wrapper">
                            <div class="footer-widget">
                                <a href="./index.html">
                                    <img src="./images/LOGO_LogoFooter.png" class="footer-logo" alt="Arifa's Corner Logo"
                                        title="Arifa's Corner Homepage">
                                </a>
                                <p class="footer-description"> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Facere
                                    eveniet quaerat soluta alias inventore ipsum asperiores.
                                </p>
                                <ul class="socials">
                                    <li>
                                        <a href="#" title="Facebook"><i class="fa-brands fa-facebook-f"
                                                aria-hidden="true"></i></a>
                                    </li>
                                    <li>
                                        <a href="#" title="Instagram"><i class="fa-brands fa-instagram"
                                                aria-hidden="true"></i></a>
                                    </li>
                                    <li>
                                        <a href="#" title="LinkedIn"><i class="fa-brands fa-linkedin-in"
                                                aria-hidden="true"></i></a>
                                    </li>
                                    <li>
                                        <a href="#" title="YouTube"><i class="fa fa-play" aria-hidden="true"></i></a>
                                    </li>
                                </ul>
                            </div>
                            <div class="footer-widget">
                                <h4>quick links</h4>
                                <ul class="footer-links">
                                    <li><a href="./index.html">home</a></li>
                                    <li><a href="./about.html">about</a></li>
                                    <li><a href="./books.html">books</a></li>
                                    <li><a href="./blog.html">blog</a></li>
                                    <li><a href="./activities.html">activities</a></li>
                                    <li><a href="./contact.html">contact</a></li>
                                </ul>
                            </div>
                            <div class="footer-widget">
                                <h4>quick links</h4>
                                <ul class="footer-links">
                                    <li><a href="#">videos</a></li>
                                    <li><a href="#">image gallery</a></li>
                                    <li><a href="#">appearances</a></li>
                                    <li><a href="#">subscribe</a></li>
                                </ul>
                            </div>
                            <div class="footer-widget">
                                <h4>get help</h4>
                                <ul class="footer-links">
                                    <li><a href="#">privacy policy</a></li>
                                    <li><a href="#">social media policy</a></li>
                                    <li><a href="#">FAQ</a></li>
                                    <li><a href="#">terms &amp; conditions</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="copyright-wrapper">
                            <p>Designed &amp; Developed by
                                <a href="#" target="blank">Nekhat Azam</a> for Arifa Afzal
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
        `
    }
}

customElements.define('app-footer', Footer);