import React from "react";
import "./navBar.css";

function NavBar(){

    return(
        <nav className="navbar">
            <ul className="nav-items">
                <li>About</li>
                <li>Skills</li>
                <li>Projects</li>
            </ul>
        </nav>
    )
}

export default NavBar;