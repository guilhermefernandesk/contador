import React from "react";

import '../components/Cards.css'

import '../Pages/Noticias.css'

import { data } from '../dataNews/data'
import Cards from "../components/Cards";

import galaxia from '../assets/img/1.jpg'

const sortedCards = data.sort((a, b) => b.date - a.date);

function Noticias() {
    return (
        <div className="App">

            <h3> Notícias</h3>
            <div>
                <img className="conteiner conteiner-cover" alt="destaque" src={galaxia} />
            </div>
            <p> Últimas Notícias</p>
            <div class="grid-container">
                {sortedCards.map(cards => (
                    <Cards key={cards.id} cards={cards} />
                ))}
            </div>
        </div>
    );
};

export default Noticias;