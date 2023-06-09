import React from "react";
import { Link, useParams } from "react-router-dom";

import '../components/Header/Header.css'
import { useState } from "react";



function Home() {
  const { count } = useParams();
  const { name } = useParams();
  const [opcaoSelecionada, setOpcaoSelecionada] = useState("Home");

  return (
    <div>

      <div className="sub-header">
        <input
          type="radio"
          name="s1"
          id="o1"
          value="Home"
          checked={opcaoSelecionada === "Home"}
          onChange={(e) => setOpcaoSelecionada(e.target.value)}
        />
        <label for="o1">Home</label>
        <input
          type="radio"
          name="s1"
          id="o2"
          value="Sobre"
          checked={opcaoSelecionada === "Sobre"}
          onChange={(e) => setOpcaoSelecionada(e.target.value)}
        />
        <label for="o2">Sobre</label>
      </div>


      <div>
        {opcaoSelecionada === "Home" && (
          <div>
            <h1>Home Page</h1>
            <p>Contador: {count} </p>
            <p>Nome: {name} </p>
            <Link to="/noticias">
              <button>NEWS PAGE</button>
            </Link>
          </div>
        )}

        {opcaoSelecionada === "Sobre" && (
          <div className="conteudo-lista">
            <label>N° Inscrição</label>
            <input id="nInscricao" name="nInscricao" />
          </div>
        )}
      </div>

    </div>
  );
};

export default Home;