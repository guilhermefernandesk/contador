import React from "react";
import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

//import image1 from '../img/1.jpg'
//carousel
import mato from '../img/2.jpg'
import casa from '../img/3.jpg'

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
            <div className="carousel1">
                <Carousel
                    slide={true}
                    fade={true}
                    controls={true}
                    indicators={true}
                    interval={3000}
                    wrap={true} //reinicio
                >
                    <Carousel.Item>
                        <img
                            className="carousel" //controla altura
                            src={mato}
                            alt="mato One"
                        />
                        <Carousel.Caption>
                            <h3>Primeira imagem</h3>
                            <p>Texto da primeira imagem</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item >
                        <img
                            className="carousel" //controla altura
                            src={casa}
                            alt="casa Two"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
            <h1 className='Contador'>Contador</h1>
            <div style={{fontSize:25}}> 
            {count}
            </div>
            <div style={{padding:15}}>
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