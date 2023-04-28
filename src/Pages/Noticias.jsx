import React from "react";
import { useState } from 'react';

import '../components/Cards.css'

import '../Pages/Noticias.css'

import { data } from '../dataNews/data'
import Cards from "../components/Cards";

import galaxia from '../assets/img/1.jpg'

function Noticias() {
    const MaisRecente = data.sort((a, b) => b.date - a.date);

    const [paginaAtual, setpaginaAtual] = useState(1);

    const CardsPorPagina = 6;
    const indexUltimoCard = paginaAtual * CardsPorPagina;
    const indexPrimeiroCard = indexUltimoCard - CardsPorPagina;
    const currentCards = data.slice(indexPrimeiroCard, indexUltimoCard);

    const nextPage = () => setpaginaAtual(paginaAtual + 1);
    const prevPage = () => setpaginaAtual(paginaAtual - 1);

    return (
        <div className="App">

            <h3> Notícias</h3>
            <div>
                <img className="conteiner conteiner-cover" alt="destaque" src={galaxia} />
            </div>
            <p> Últimas Notícias</p>
            <div class="grid-container">
                {currentCards.map(cards => (
                    <Cards key={cards.id} cards={cards} />
                ))}
            </div>
            <div>
                <button onClick={prevPage} disabled={paginaAtual === 1}>
                    Previous Page
                </button>
                <button onClick={nextPage} disabled={indexUltimoCard >= data.length}>
                    Next Page
                </button>
            </div>
        </div>
    );
};

export default Noticias;