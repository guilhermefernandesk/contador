import React from "react";
import { Link } from "react-router-dom";
import { useState } from 'react';

function Contador() {
    //contador começa em 0
    const [count, setCount] = useState(0);
    //funcao chamada para incrementar o botao
    function incrementar() {
        setCount(count + 1);
    }
    //funcao chamada para decrementar o botao
    function decrementar() {
        if (count > 0)
            setCount(count - 1);
    }

    return (
        <div className='App'> {/*classe CSS de estilo "App"*/}
            <h1 className='Contador'>Contador</h1>
            {count}
            <div>
                <button className='decrementar' onClick={decrementar} >-</button>
                <button className='incrementar' onClick={incrementar}>+</button>
            </div>
            <Link to="/home">
                <button> GO HOME</button>
            </Link>

        </div>
    );
}

export default Contador;