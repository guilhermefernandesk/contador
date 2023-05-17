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
      <div class="wrapper"> {/*Top menu*/}
        <div class="section">
          <div class="top_navbar">
            <div class="hamburger">
              <a href="#">
                <span onClick={click}>=</span>
              </a>
            </div>
          </div>
        </div>



        <div class="sidebar"> {/*text e menu item*/}
          <ul>

            {/* item */}
            <li>
              <a href="#" class="active">
                <span class="item">Home</span>
              </a>
            </li>
            {/* ------ */}
            <li>
              <a href="#">
                <span class="item">My Dashboard</span>
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