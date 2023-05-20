import React from "react";
import '../Header/Header.css'

const Header = () => {
    return (
        <header className="header-fixed">
            <div className="header-limiter">
                <h1><a href="#">Logo</a></h1>
                <nav>
                    <a href="#">HOME</a>
                    <a href="#">SOBRE</a>
                    <a href="#">SOBRE</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;