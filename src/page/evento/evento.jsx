import { useEffect, useState } from "react";
import Header from "../../Components/header/header";
import Footer from "../../Components/footer/footer";
import "../evento/evento.css";

export default function Evento() {
  const [dados, setDados] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const charactersPerPage = 3;

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((Response) => Response.json())
      .then((data) => setDados(data.results))
      .catch((error) => console.log(error));
  }, []);

  const handleNext = () => {
    if (startIndex + charactersPerPage < dados.length) {
      setStartIndex(startIndex + charactersPerPage);
    }
  };

  const handlePrev = () => {
    if (startIndex - charactersPerPage >= 0) {
      setStartIndex(startIndex - charactersPerPage);
    }
  };

  return (
    <div>
      <Header />
      <div>
        <div className="background-color-view">
          <div className="rick">
            {dados
              .slice(startIndex, startIndex + charactersPerPage)
              .map((evento) => (
                <div key={evento.id}>
                  <h1>{evento.name}</h1>
                  <img src={evento.image} alt={evento.name} />
                </div>
              ))}
          </div>
          <div className="navigation-buttons">
            <button onClick={handlePrev} disabled={startIndex === 0}>
              Anterior
            </button>
            <button
              onClick={handleNext}
              disabled={startIndex + charactersPerPage >= dados.length}
            >
              Próximo
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
