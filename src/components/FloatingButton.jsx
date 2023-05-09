import React from "react";
import { useState } from 'react';


import '../components/FloatingButton.css'

const itensCheckbox = [
    {
        id: 'area-especial',
        label: 'Área especial'
    },
    {
        id: 'bairros',
        label: 'Bairros'
    },
    {
        id: 'benfeitoria',
        label: 'Benfeitoria'
    },
    {
        id: 'edificacao',
        label: 'Edificação'
    },
    {
        id: 'eixo',
        label: 'Eixo'
    },
    {
        id: 'hidrografia',
        label: 'Hidrografia'
    },
    {
        id: 'logradouro',
        label: 'Logradouro'
    },
    {
        id: 'lote',
        label: 'Lote'
    },
    {
        id: 'lote-selecionado',
        label: 'Lote Selecionado'
    },
    {
        id: 'mancha-urbana',
        label: 'Mancha Urbana'
    },
    {
        id: 'ponto-interesse',
        label: 'Ponto de Interesse'
    },
    {
        id: 'quadra',
        label: 'Quadra'
    },
    {
        id: 'setores',
        label: 'Setores'
    },

];

function FloatingButton() {
    const [showList, setShowList] = useState(false);

    function handleButtonClick() {
        setShowList(!showList);
    }


    return (
        <div class="floating-button">
            <button onClick={handleButtonClick}>Camadas</button>
            {showList && (
                <div className="float-container">
                {itensCheckbox.map((item) => (
                    <ul key={item.id}>
                        <label htmlFor={item.id}>
                            <input id={item.id} type="checkbox" />
                            {item.label}
                        </label>
                    </ul>
                ))}
            </div>
            )}
        </div>
    )
}

export default FloatingButton;

