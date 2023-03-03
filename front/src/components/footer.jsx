import React from "react";
import "../../src/styles/footer.css";


const Footer = () => {
    return(
        <div className="footer-content">
            <p>
                Proyecto Final UTN
                <a href="https://github.com/juanma-hinojosa" target="_blank" rel="noopener noreferrer">Juan Hinojosa.</a>
                <a href="https://www.linkedin.com/in/juan-hinojosa-b07b05209/" target="_blank" rel="noopener noreferrer">Linkedin</a>
                <a href="https://kaleidoscopic-biscotti-540699.netlify.app/" target="_blank" rel="noopener noreferrer">Portafolio</a>
            </p>
        </div>
    )
}

export default Footer;