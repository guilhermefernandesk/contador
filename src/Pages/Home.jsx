import React from "react";
import { Link, useParams } from "react-router-dom";

import '../components/Sidebar.css'

function Home() {
  const { count } = useParams();
  const { name } = useParams();

  const click = () => {
    document.querySelector("body").classList.toggle("active");
  };


  return (
    <div>
      
      <div className="nav-links">
          <ul>
            <li><a href="#" target="_blank">Home</a></li>
            <li><a href="#" target="_blank">Sobre</a></li>
            <li><a href="#" target="_blank">Contato</a></li>
          </ul>
        </div>

      <div className="wrapper">
        <div className="section">
          <div className="navbar">
            <div className="nav-btn">
              <a href="#">
                <span onClick={click}>=</span>
              </a>
            </div>
          </div>
        </div>
        <div className="sidebar">
          <ul>
            <li>
              <a href="#" className="active">
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>My Dashboard</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>Contato</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h1>Home Page</h1>
        <p>Contador: {count} </p>
        <p>Nome: {name} </p>
        <Link to="/noticias">
          <button>NEWS PAGE</button>
        </Link>
      </div>

    </div>
  );
};

export default Home;