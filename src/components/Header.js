import React from 'react';

function Header() {
    return (
        <header>

            <div className="burger_menu">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <nav>
                <ul className="navigation">
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                </ul>

            </nav>

        </header>
    )
}

export default Header;