import React from "react";
import { useState } from 'react';

import Sidebar from "./Sidebar";
import '../components/Header.css'

function Header() {
    const [showSidebar, setShowSidebar] = useState(false);
    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    return (
        <div className="header">
            <a href="#" className="btn">
                <button onClick={toggleSidebar}>=</button>
            </a>
            <Sidebar showSidebar={showSidebar}/>
            <a href="#" className="logo">Logo</a>
            <div className="header-right">
                <a href="#">Login</a>
            </div>
        </div>
    )
}

export default Header;

