import React from "react";
import foto1 from "../assets/img/buy-comics-digital-comics.png";
import foto2 from "../assets/img/buy-comics-merchandise.png";
import foto3 from "../assets/img/buy-comics-shop-locator.png";
import foto4 from "../assets/img/buy-comics-subscriptions.png";
import foto5 from "../assets/img/buy-dc-power-visa.svg";
import ListComics from "./ListComics";

const Main = () => {
  return (
    <div className="main-container">
      {/* Lista dei fumetti */}
      <div className="container-espansione">
        <div className="container-main">
          <ListComics />
        </div>
      </div>

      {/* Sezione extra con immagini */}
      <div className="container-espansione-2">
        <div className="container-main-2">
          <ul>
            <li className="navLinks-card-1">
              <img src={foto1} alt="Digital Comics" />
              <span>DIGITAL COMICS</span>
            </li>
            <li className="navLinks-card-2">
              <img src={foto2} alt="DC Merchandise" />
              <span>DC MERCHANDISE</span>
            </li>
            <li className="navLinks-card-3">
              <img src={foto3} alt="Subscription" />
              <span>SUBSCRIPTION</span>
            </li>
            <li className="navLinks-card-4">
              <img src={foto4} alt="Comic Shop Locator" />
              <span>COMIC SHOP LOCATOR</span>
            </li>
            <li className="navLinks-card-5">
              <img src={foto5} alt="DC Power Visa" />
              <span>DC POWER</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Main;




