import React from "react";
import { Link, useParams } from "react-router-dom";

import '../components/Header/Header.css'
import { useState } from "react";

import api from '../services/api';
import { useEffect } from "react";

function Home() {
  const { count } = useParams();
  const { name } = useParams();
  const [opcaoSelecionada, setOpcaoSelecionada] = useState("Home");
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projects').then(response => {
      setProjects(response.data);
    });
  }, []);

  async function handleAddProject() {
    const response = await api.post('projects', {
      title: `Novo Projeto ${Date.now()}`,
      owner: "Guilherme Fernandes"
    });
    const project = response.data;
    setProjects([...projects, project])
  };

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
        <input
          type="radio"
          name="s1"
          id="o3"
          value="Aula"
          checked={opcaoSelecionada === "Aula"}
          onChange={(e) => setOpcaoSelecionada(e.target.value)}
        />
        <label for="o3">Aula</label>
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

        {opcaoSelecionada === "Aula" && (
          <div>
            <ul>
              {projects.map(project => <li key={project.id}>{project.title}</li>)}
            </ul>
            <button onClick={handleAddProject}>Add Project</button>
          </div>
        )}
      </div>

    </div>
  );
};

export default Home;