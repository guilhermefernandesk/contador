//yarn add @material-ui/core

//yarn add @material-ui/icons

import React from "react";
import { useState } from 'react';

import '../components/Sidebar.css'
import galaxia from '../assets/img/1.jpg'

// import SearchIcon from '@material-ui/icons/Search';

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
    const [opcaoSelecionada, setOpcaoSelecionada] = useState('');

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
        setShowBuscaContainer(!showBuscaContainer);
        setShowSobreContainer(false);
        setShowCamadasContainer(false); // oculta a outra div, se ela estiver aberta
    };

    function handleOpcaoSelecionada(event) {
        setOpcaoSelecionada(event.target.value);
    }

    function renderizarCampoDeEntrada() {
        switch (opcaoSelecionada) {
            case 'inscricao':
                return (
                    <div className="input-group" style={{ display: "flex" }}>
                        <input className="form-control" type="text" placeholder="Inscrição Cadastral" />
                        <button className="search-btn">
                            {/* <SearchIcon /> */}
                        </button>

                    </div>
                );
            case 'n-reduzido':
                return (
                    <div className="input-group" style={{ display: "flex" }}>
                        <input className="form-control" type="text" placeholder="Nº inscr. reduzido" />
                        <button className="search-btn">
                            {/* <SearchIcon /> */}
                        </button>
                    </div>
                );
            case 'endereco':
                return (
                    <div className="input-group" style={{ display: "flex" }}>
                        <input className="form-control" type="text" placeholder="Logradouro" />
                        <input className="form-control" type="text" placeholder="Endereço" />
                        <button className="search-btn">
                            {/* <SearchIcon /> */}
                        </button>
                    </div>
                );
            default:
                return null;
        }
    }



    return (
        <div className={`sidebar ${showSidebar ? "show" : ""}`}>
            <div className="container">
                <img src={galaxia} alt="logo" className="logo-sidebar"></img>
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
                            <div className="input-group">
                                <select value={opcaoSelecionada} onChange={handleOpcaoSelecionada}>
                                    <option value="" selected disabled>Busca por...</option>
                                    <option value="inscricao">Inscrição Cadastral</option>
                                    <option value="n-reduzido">Nº inscr. reduzido</option>
                                    <option value="endereco">Endereço</option>
                                </select>
                            </div>
                            {renderizarCampoDeEntrada()}
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
