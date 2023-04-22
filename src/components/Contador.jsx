import React from "react";
import { useState } from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";


import galaxia from '../img/1.jpg'
import mato from '../img/2.jpg'
import casa from '../img/3.jpg'


const slides = [
    {
        title: "galaxia",
        retrato: galaxia,
    },
    {
        title: "mato",
        retrato: mato,
    },
    {
        title: "casa",
        retrato: casa,
    }
];

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
            <Carousel
                autoPlay={true}
                interval={3000}
                swipeable={true}
                emulateTouch={true}
                infiniteLoop={true}
                showArrows={true}
                showStatus={false}
                showThumbs={false}
            >
                {slides.map((slide) => (
                    <div key={slide.title}>
                        <div className="image-wrapper">
                            <img src={slide.retrato} />
                            {slide.control}
                        </div>
                    </div>
                ))}
            </Carousel>
            <h1 className='Contador'>Contador</h1>
            <div style={{ fontSize: 25 }}>
                {count}
            </div>
            <div style={{ padding: 15 }}>
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