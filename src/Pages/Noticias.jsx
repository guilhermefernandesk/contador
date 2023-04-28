//npm install react-paginate
import React from "react";
import { useState } from 'react';

import '../components/Cards.css'

import '../Pages/Noticias.css'

import { data } from '../dataNews/data'
import Cards from "../components/Cards";

import galaxia from '../assets/img/1.jpg'

import ReactPaginate from 'react-paginate';



function Noticias() {
    data.sort((a, b) => b.date - a.date);

    const [paginaAtual, setpaginaAtual] = useState(0);

    const CardsPorPagina = 6;
    const indexUltimoCard = (paginaAtual + 1) * CardsPorPagina;
    const indexPrimeiroCard = indexUltimoCard - CardsPorPagina;
    const currentCards = data.slice(indexPrimeiroCard, indexUltimoCard);


    const MostraCards = currentCards.map(cards => (
        <Cards key={cards.id} cards={cards} />
    ));

    const handlePageChange = ({ selected }) => {
        setpaginaAtual(selected);
    };
    const pageCount = Math.ceil(data.length / CardsPorPagina);




    return (
        <div className="App">

            <h3> Notícias</h3>
            <div>
                <img className="conteiner conteiner-cover" alt="destaque" src={galaxia} />
                {/* {MostraNoticiaDestaque} */}
            </div>
            <p> Últimas Notícias</p>
            <div class="grid-container">
                {MostraCards}
            </div>
            <div>
                <ReactPaginate
                    previousLabel={'Voltar'}
                    nextLabel={'Proximo'}
                    breakLabel={'...'}
                    pageCount={pageCount}
                    onPageChange={handlePageChange}
                    containerClassName={'pagination'}
                    activeClassName={'active'}
                />
            </div>
        </div>
    );
};

export default Noticias;