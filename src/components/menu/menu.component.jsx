import { useState } from "react";
import facebookLogo from "../../assets/logos/img-social-facebook.png";
import instagramLogo from "../../assets/logos/img-social-instagram.png";
import youtubeLogo from "../../assets/logos/img-social-youtube.png";
import logo from "../../assets/logos/img-logo-vitalinea.png";
import burguerMenu from "../../assets/icons/icon_menu.svg";
import "./menu.styles.scss";

const Menu = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt="logo" />
      </div>

      <div className="navbar__menu">
        <button className="navbar__button" onClick={toggleMenu}>
          <img src={burguerMenu} alt="burguer menu icon" />
        </button>
        <div className="navbar__options">
          {menu ? (
            <ul>
              <li>Nuestros productos</li>
              <li>Disfruta cuidarte</li>
              <li>Blog</li>
            </ul>
          ) : null}
        </div>
        <div className="navbar__options--desktop">
          <ul className="navbar__links">
            <li>Nuestros productos</li>
            <li>Disfruta cuidarte</li>
            <li>Blog</li>
          </ul>
          <ul className="navbar__social">
            <li>
              <a href="#">
                <img src={facebookLogo} alt="facebook logo" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={instagramLogo} alt="instagram logo" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={youtubeLogo} alt="youtube logo" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
