import React from 'react';
import { Button } from "reactstrap";

function Header(props) {
    return (
        <header>

           <Button onClick={props.onToggleHandler} type="button" color="primary">
               burger
           </Button>
            <nav>
                <ul className="navigation">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>

            </nav>

        </header>
    )
}

export default Header;