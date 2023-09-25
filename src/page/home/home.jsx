import React from "react";
import Header from "../../Components/header/header";
import Footer from "../../Components/footer/footer";
import "../home/home.css";

function Home() {
  return (
    <div>
      <Header />
      <div className="background-color-view">
        <div className="container">
          <div className="text">
            <h1>
              Melhore o controle
              <br /> de acesso do seu evento
            </h1>
            <div className="texto-central">
              <p>
                Somos uma empresa que chegou para revolucionar o mercado de
                ingressos.
                <br />
                Venha fazer parte dessa nova evolução.
                <br />
                Faça o diferencial no seu evento e melhore a qualidade.
              </p>
              <div className="saibaMais">
                <p>
                  Entre em contato conosco ou forneça seu e-mail, e entraremos
                  em contato com você em breve.
                </p>
                <form>
                  <div className="input-button">
                    <input
                      type="text"
                      required
                      name="emailCliente"
                      placeholder="Digite seu email"
                    />
                    <button type="submit">Enviar</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
