import foto1 from "../assets/img/buy-comics-digital-comics.png";
import foto2 from "../assets/img/buy-comics-merchandise.png";
import foto3 from "../assets/img/buy-comics-shop-locator.png";
import foto4 from "../assets/img/buy-comics-subscriptions.png";
import foto5 from "../assets/img/buy-dc-power-visa.svg";  



function Main() {
    return (
        <>
            {/* Prima sezione espansione */}
            <div className="container-espansione">
                <div className="container-main">
                    <h5>--Content goes here--</h5>
                </div>
            </div>

            {/* Seconda sezione espansione */}
            <div className="container-espansione-2">

                <div className="container-main-2">

                    <ul>


                        <li className="navLinks-card-1"> <img src={foto1} alt="" /> <span>DIGITAL COMICS</span>
                        
                        </li>



                        <li className="navLinks-card-2"> <img src={foto2} alt="" /> <span>DC MERCHANDISE</span>

                        </li>



                        <li className="navLinks-card-3"><img src={foto3} alt="" /><span>SUBSCRIPTION</span>
                            

                        </li>


                        <li className="navLinks-card-4"><img src={foto4} alt="" /><span>COMIC SHOP LOCATOR</span>

                        </li>



                        <li className="navLinks-card-5"><img src={foto5} alt="" /><span>DC POWER</span>

                        </li>


                    </ul>

                </div>
            </div>
        </>
    );
}

export default Main;


