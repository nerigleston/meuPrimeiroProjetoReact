import React from "react";
import "./footer.css";
function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="footer-content">
          <h4>Empresa</h4>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/sobre">Sobre</a>
            </li>
            <li>
              <a href="#">Serviço</a>
            </li>
            <li>
              <a href="#">Tutorial</a>
            </li>
          </ul>
        </div>
        <div className="footer-content">
          <h4>Sobre</h4>
          <ul>
            <li>
              <a href="#">Quem somos</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Termos</a>
            </li>
            <li>
              <a href="#">Segurança</a>
            </li>
          </ul>
        </div>
        <div className="footer-content">
          <h4>Serviço</h4>
          <ul>
            <li>
              <a href="#">Shows</a>
            </li>
            <li>
              <a href="#">Teatro</a>
            </li>
            <li>
              <a href="#">Futebol</a>
            </li>
            <li>
              <a href="#">Cinema</a>
            </li>
          </ul>
        </div>
        <div className="footer-content">
          <h4>Cidades</h4>
          <ul>
            <li>
              <a href="#">João Pessoa</a>
            </li>
            <li>
              <a href="#">Recife</a>
            </li>
            <li>
              <a href="#">Campina</a>
            </li>
            <li>
              <a href="#">São Paulo</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
