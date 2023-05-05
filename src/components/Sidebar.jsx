import React from "react";
import { useState } from 'react';

import '../components/Sidebar.css'

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

function Sidebar({ showSidebar }) {
    const [showCamadasContainer, setShowCamadasContainer] = useState(false);
    const [showSobreContainer, setShowSobreContainer] = useState(false);
    const [showBuscaContainer, setShowBuscaContainer] = useState(false);
    const toggleCamadasContainer = () => {
        setShowCamadasContainer(!showCamadasContainer);
        setShowBuscaContainer(false);
        setShowSobreContainer(false); // oculta a outra div, se ela estiver aberta
    };
    const toggleSobreContainer = () => {
        setShowSobreContainer(!showSobreContainer);
        setShowBuscaContainer(false);
        setShowCamadasContainer(false); // oculta a outra div, se ela estiver aberta
    };
    const toggleBuscaContainer = () => {
        setShowBuscaContainer(!showSobreContainer);
        setShowSobreContainer(false);
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
                    <li onClick={toggleBuscaContainer}>
                        Busca Imóvel
                    </li>
                    {showBuscaContainer && (
                        <div className="text-container">
                            <div>
                                <select>
                                    <option value="tipo" selected disabled>Busca por...</option>
                                    <option value="inscricao">Inscrição Cadastral</option>
                                    <option value="n-reduzido">Nº inscr. reduzido</option>
                                    <option value="endereco">Endereço</option>
                                </select>
                            </div>
                        </div>
                    )}


                    <li onClick={toggleSobreContainer}>
                        Sobre
                    </li>
                    {showSobreContainer && (
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
