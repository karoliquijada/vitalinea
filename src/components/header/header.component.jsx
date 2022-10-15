import headerImage from "../../assets/products/img-bote-fresa.png";
import stampCalorias from "../../assets/stamps/img-100-kcal.png";
import stampSello from "../../assets/stamps/img-sello-avalado.png";
import arrow from "../../assets/icons/flecha.png";
import bgStrawberry2 from "../../assets/strawberry/img-fresas-2.png";
import bgStrawberry4 from "../../assets/strawberry/img-fresas-4.png";
import "./header.styles.scss";

const Header = () => {
  return (
    <header id="header" className="header">
      <div className="header_img">
        <img src={headerImage} alt="bebida fresa" />
      </div>

      <div className="header_flavors">
        <span>Sabores:</span>
        <span className="header_flavors--flavor">Fresa</span>
        <span className="header_flavors--flavor">Guayaba</span>
        <span className="header_flavors--flavor">Toronja</span>
      </div>

      <div className="header_text">
        <h1 className="header_text--title">Vitalínea® Bebible Fresa 217 gr.</h1>
        <p className="header_text--description">
          ¡La presentación ideal para llevar contigo! Vitalínea bebible es la opción si eres de las personas que siempre están activas y
          quieren probar algo sano, rico y práctico.
        </p>
      </div>

      <a className="header_button">Comprar en Walmart</a>

      <div className="header_stamps">
        <img src={stampSello} alt="sello" />
        <img src={stampCalorias} alt="calorias" />
      </div>

      <div className="header_arrow">
        <img src={arrow} alt="arrow icon" />
      </div>
    </header>
  );
};

export default Header;
