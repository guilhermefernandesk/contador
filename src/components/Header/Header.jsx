import React from "react";
import '../Header/Header.css'

const Header = () => {
    return (
        <header className="header-fixed">
            <div className="header-limiter">
                <h1><a>Logo</a></h1>
                <nav>
                    <a>HOME</a>
                    <a>SOBRE</a>
                    <a>SOBRE</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;