import React from "react";
import { Link } from "react-router-dom";

import '../components/Cards.css'

import '../Pages/Noticias.css'

import { data } from '../dataNews/data'
import Cards from "../components/Cards";

import galaxia from '../assets/img/1.jpg'



function Noticias() {
    return (
        <div className="App">

            <h3> Notícias</h3>
            <div>
                <img className="conteiner conteiner-cover" alt="destaque" src={galaxia} />
            </div>
            <p> Últimas Notícias</p>
            <div class="grid-container">
                {data.map(cards => (
                    <Cards key={cards.id} cards={cards} />
                ))}
            </div>
        </div>
    );
};

export default Noticias;