import { Link,  } from "react-router-dom";
import React from "react";
import "../../src/styles/navbar.css"

const Navbar = () => {
    return(
        <nav className="navbar-wrapper">
            <Link to="/" className="link" >INICIO</Link>
            <Link to="/highlights" className="link" >MOMENTOS DESTACADOS</Link>
            <Link to="/groups" className="link" >FASE ELIMINATORIA</Link>
            <Link to="/volunter" className="link" >VOLUNTARIOS</Link>
            
        </nav>
    )
}

export default Navbar;