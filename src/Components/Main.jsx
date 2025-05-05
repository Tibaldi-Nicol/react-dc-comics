import foto1 from "../assets/img/buy-comics-digital-comics.png";
import foto2 from "../assets/img/buy-comics-merchandise.png";

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



                        <li className="navLinks-card-2"> <img src={foto2} alt="" />

                        </li>



                        <li className="navLinks-card-3">
                            

                        </li>


                        <li className="navLinks-card-4">

                        </li>



                        <li className="navLinks-card-5">

                        </li>


                    </ul>

                </div>
            </div>
        </>
    );
}

export default Main;


