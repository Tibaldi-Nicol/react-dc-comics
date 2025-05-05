import logo1 from "../assets/img/footer-facebook.png";
import logo2 from "../assets/img/footer-periscope.png";
import logo3 from "../assets/img/footer-pinterest.png";
import logo4 from "../assets/img/footer-twitter.png";
import logo5 from "../assets/img/footer-youtube.png";

function Footer() {
    return (
        <>
            <div className="Container-espansione-3">
                <div className="container-footer">
                    <div className="Footer-image">
                        <div className="footer-links-container">
                            <div className="footer-column">
                                <h3>DC COMICS</h3>
                                <ul>
                                    <li><a href="#">Characters</a></li>
                                    <li><a href="#">Comics</a></li>
                                    <li><a href="#">Movies</a></li>
                                    <li><a href="#">TV</a></li>
                                    <li><a href="#">Games</a></li>
                                    <li><a href="#">Videos</a></li>
                                    <li><a href="#">News</a></li>
                                </ul>
                            </div>

                            <div className="footer-column">
                                <h3>DC</h3>
                                <ul>
                                    <li><a href="#">Terms Of Use</a></li>
                                    <li><a href="#">Privacy Policy (New)</a></li>
                                    <li><a href="#">Ad Choices</a></li>
                                    <li><a href="#">Advertising</a></li>
                                    <li><a href="#">Jobs</a></li>
                                    <li><a href="#">Subscriptions</a></li>
                                    <li><a href="#">Talent Workshops</a></li>
                                    <li><a href="#">CPSC Certificates</a></li>
                                    <li><a href="#">Ratings</a></li>
                                    <li><a href="#">Shop Help</a></li>
                                    <li><a href="#">Contact Us</a></li>
                                </ul>
                            </div>

                            <div className="footer-column">
                                <h3>SITES</h3>
                                <ul>
                                    <li><a href="#">DC</a></li>
                                    <li><a href="#">MAD Magazine</a></li>
                                    <li><a href="#">DC Kids</a></li>
                                    <li><a href="#">DC Universe Infinite</a></li>
                                    <li><a href="#">DC Power Visa</a></li>
                                </ul>
                            </div>

                            <div className="footer-column shop-column">
                                <h3>SHOP</h3>
                                <ul>
                                    <li><a href="#">Shop DC</a></li>
                                    <li><a href="#">Shop DC Collectibles</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="Footer-logo">
                          
                        </div>
                    </div>
                </div>
            </div>

           

           <div className="footer-espansione">
            <footer>

                <div className="Pulsante"> SIGN-UP NOW!

                </div>

                <div className="FOLLOW"> FOLLOW US

                </div>

                <div className="logo-footer"><img src={logo1} alt="" /></div>
                <div className="logo-footer"><img src={logo2} alt="" /></div>
                <div className="logo-footer"><img src={logo3} alt="" /></div>
                <div className="logo-footer"><img src={logo4} alt="" /></div>
                <div className="logo-footer"><img src={logo5} alt="" /></div>


            </footer>
            </div>
        </>
    );
}

export default Footer;