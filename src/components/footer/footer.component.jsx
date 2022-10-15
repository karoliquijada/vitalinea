import danoneLogo from "../../assets/logos/img-logo-danone.png";
import footerLogo from "../../assets/logos/img-logo-footer.jpg";
import "./footer.styles.scss";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="footer__logos">
        <div>
          <img src={danoneLogo} alt="danone logo" />
        </div>
        <div>
          <img src={footerLogo} alt="vitalinea logo" />
        </div>
      </div>
      <div className="footer__terms">
        <a href="">Términos y condiciones |</a>
        <a href="">Políticas de Privacidad |</a>
        <a href="">Aviso de privacidad</a>
      </div>
      <div className="footer__copyright">
        <p>Danone de México 2017 ©. Todos los derechos reservados 2017</p>
      </div>
    </footer>
  );
};

export default Footer;
