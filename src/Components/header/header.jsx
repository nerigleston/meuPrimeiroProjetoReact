import React from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import inova from "../../assets/img/inova.png";

function Header() {
  return (
    <header>
      <nav className="container-header">
        <div className="logo">
          <a href="./">
            <img src={inova} alt="Logo" />
          </a>
        </div>
        <div className="nomes"></div>
        <div className="parent-link">
          <a href="/evento">Eventos</a>
          <a href="#">Empresa</a>
          <a href="/sobre">Sobre</a>
          <a href="#">Contato</a>
        </div>
        <div className="icon">
          <a href="https://instagram.com" target="_blank" className="sm-icon">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://facebook.com" target="_blank" className="sm-icon">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://twitter.com" target="_blank" className="sm-icon">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://youtube.com" target="_blank" className="sm-icon">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
