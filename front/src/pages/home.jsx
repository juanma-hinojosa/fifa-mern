import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import Card from 'react-bootstrap/Card';
// import { Row, Col } from "react-bootstrap";
import axios from "axios";
import "../../src/styles/home.css"

const Home = () => {
    const [datos, setDatos] = useState([]);
    
    //Variable Local MONGO DB
    const URL = "http://localhost:3001/datos";

    //Variable GLobal 
    // const URL = "https://backfinal-production-03d9.up.railway.app/datos"


    const getPersonas = async () => {
        try {
            const { data } = await axios.get(URL);
            setDatos(data.datos)
            console.log(data.datos);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getPersonas()
    }, []);

    return (
        <div className="home-section " >
            <div className="home-wrapper">
                <div className="home-content">
                    <div className="parragrafo-wrapper">
                        Recorramos Juntos la consagracion de la Seleccion Argentina, La Scaloneta, Leo Messi y la alegria de todo un pais y un inolvidable mundial que nos dejo Qatar
                    </div>

                    <div className="link-content">
                        <Link to="/highlights" className="link" >Mejores Momentos</Link>
                    </div>

                </div>
            </div>

            <div className="link-wrapper">
                <div className="parragrafo-wrapper">
                    <p>
                        Quieres unirte a una experiencia unica junto a la FIFA?
                    </p>
                    <p>
                        Inicia sesion o registrate
                    </p>
                </div>
                <div className="link-content">
                    <Link to="/volunter" className="link" >Inscribirse Ya</Link>
                </div>
            </div>

            <div className="testimonios">
                <div className="title-wrapper">
                    <h4>
                    Que Significa el Futbol y el Mundial para los hinchas de todo el mundo

                    </h4>
                </div>

                <div className="persona-wrapper">
                    {
                        datos.map(dato => 
                            <div className="persona-content">
                        
                            <div className="nombre-content">
                                {dato.nombre} {dato.apellido}
                            </div>
    
                            <div className="pais">
                                {dato.pais}
                            </div>
    
                            <div className="opinion">
                                {dato.opinion}
                            </div>
                        </div>        
                        )
                    }
                    
                </div>
            </div>


        </div>
    )
}

export default Home;