import React from "react";
import "./navBar.css";
import { Link } from "react-router-dom";


function NavBar(){

    return(
        <nav className="navbar">
            <ul className="nav-items">
                {/* Want more routing? Add it here! */}
                <li><Link to="/">Home</Link></li>
                <li><Link to="/skills">Skills</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                {/* <li><Link to="/resume">Resume</Link></li> */}
            </ul>
        </nav>
    )
}

export default NavBar;