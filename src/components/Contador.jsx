import React from "react";
import { useState } from 'react';

function Contador({ history }) {
    //contador começa em 0
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");
   

    //funcao chamada para incrementar o botao
    function incrementar() {
        setCount(count + 1);
    }
    //funcao chamada para decrementar o botao
    function decrementar() {
        if (count > 0)
            setCount(count - 1);
    }
    const onClick = () => {
        history.push('/home/' + count + '/' + name);
    }

    return (
        <div className='App'> {/*classe CSS de estilo "App"*/}
            <h1 className='Contador'>Contador</h1>
            {count}
            <div>
                <button className='decrementar' onClick={decrementar} >-</button>
                <button className='incrementar' onClick={incrementar}>+</button>
            </div>
            <form onSubmit={onClick}>
                <input
                    type="text" required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nome"
                />
               
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    );
}

export default Contador;