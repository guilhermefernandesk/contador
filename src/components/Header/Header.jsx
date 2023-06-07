import React from "react";
import '../Header/Header.css'

const Header = () => {
    return (
        <div className="sub-header">
            <input
                type="radio"
                name="s1"
                id="o1"
                value="Home"
                checked />
            <label for="o1">Home</label>
            <input
                type="radio"
                name="s1"
                id="o2"
                value="Sobre"
            />
            <label for="o2">Sobre</label>
        </div>

    );
};

export default Header;