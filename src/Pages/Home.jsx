import React from "react";
import { Link, useParams } from "react-router-dom";

import Header from "../components/Header";
import FloatingButton from "../components/FloatingButton";


function Home() {
  const { count } = useParams();
  const { name } = useParams();

  return (
    <div>
      <div>
        <Header/>
        <FloatingButton/>
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