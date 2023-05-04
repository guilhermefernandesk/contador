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
                <span onClick={toggleSidebar}>☰</span>
            </a>
            <Sidebar showSidebar={showSidebar}/>
            <a href="#" className="logo">Logo</a>
            <div className="header-right">
                <a href="#">LOGIN</a>
            </div>
        </div>
    )
}

export default Header;

