import React from "react";
import { Link } from "react-router-dom";

import '../components/noticias.css'

import { data } from '../dataNews/data'
import News from "../components/News";



function Noticias() {
    return (
        <div className="App">
            <h1>Noticias Page</h1>
            <Link to="/">
                <button>CONTADOR PAGE</button>
            </Link>

            <div class="grid-container">
                {data.map(news => (
                    <News key={news.id} news={news} />
                ))}
            </div>
        </div>
    );
};

export default Noticias;