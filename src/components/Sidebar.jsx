import React from "react";
import { useState } from 'react';

import '../components/Sidebar.css'

const itensCheckbox = [
    {
        id: 'area_especial',
        label: 'Área especial'
    },
    {
        id: 'bairros',
        label: 'Bairros'
    },

];

function Sidebar({ showSidebar }) {
    const [showCamadasContainer, setShowCamadasContainer] = useState(false);
    const [showSobreContainer, setShowSobreContainer] = useState(false);

    const toggleCamadasContainer = () => {
        setShowCamadasContainer(!showCamadasContainer);
        setShowSobreContainer(false); // oculta a outra div, se ela estiver aberta
    };
    const toggleSobreContainer = () => {
        setShowSobreContainer(!showSobreContainer);
        setShowCamadasContainer(false); // oculta a outra div, se ela estiver aberta
    };


    return (
        <div className={`sidebar ${showSidebar ? "show" : ""}`}>
            <div className="container">
                <img src="" alt="logo" className="logo-sidebar"></img>
                <hr></hr>
                <ul>
                    <li className="active" onClick={toggleCamadasContainer}>
                        Camadas
                    </li>
                    {showCamadasContainer && (
                        <div className="text-container">
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
                    <li onClick={toggleSobreContainer}>
                        Sobre
                    </li>
                    {showSobreContainer &&(
                    <div className="text-container">
                        Projeto de Recadastramento Imobiliário
                    </div>
                    )}
                </ul>

            </div>
        </div>
    )
}

export default Sidebar;
