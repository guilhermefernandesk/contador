import React from "react";
import { Link } from "react-router-dom";

import '../components/Cards.css'

import { data } from '../dataNews/data'
import Cards from "../components/Cards";



function Noticias() {
    return (
        <div className="App">
            <h1>Noticias Page</h1>
            <Link to="/">
                <button>CONTADOR PAGE</button>
            </Link>

            <div class="grid-container">
                {data.map(cards => (
                    <Cards key={cards.id} cards={cards} />
                ))}
            </div>
        </div>
    );
};

export default Noticias;