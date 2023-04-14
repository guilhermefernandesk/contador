import React from "react";
import { Link, useParams } from "react-router-dom";

function Home() {
  const { count } = useParams();
  const { name } = useParams();

  return (
    <div className='App'>
      <h1>Home Page</h1>
      <p>Contador: {count} </p>
      <p>Nome: {name} </p>
      <Link to="/">
        <button>BACK PAGE</button>
      </Link>
    </div>
  );
};

export default Home;