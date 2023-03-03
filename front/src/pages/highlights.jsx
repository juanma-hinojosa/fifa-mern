import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../src/styles/highlights.css";
import Banner from "../img/bannerHigh.jpg";

const Highlights = () => {
    const [datos, setDatos] = useState([]);

    //Variable LOCAL de MONGO DB
    const URL = "http://localhost:3001/lista";  
    


    // Variable Global
    // const URL = "https://backfinal-production-03d9.up.railway.app/lista";

    const getVideos = async () => {
        try {
            const { data } = await axios.get(URL);
            setDatos(data.datos)
            console.log(data.datos);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getVideos()
    }, []);

    return (
        <div className="highlights-content" >
            <div className="banner-wrapper">
                <div className="banner-title">
                    <h4>La casa de los mejores momentos de Catar 2022™</h4>
                    <p>FIFA+ es el sitio donde encontrarás lo más destacado de cada partido en la Copa Mundial de la FIFA, minutos después del pitido final. No te pierdas lo mejor de Catar 22™. Todos los goles, toda la acción, en un solo lugar. También disponible con lenguaje de señas para personas con discapacidad auditiva.</p>
                </div>
                <div className="banner-img">
                    <img src={Banner} alt="" />
                </div>
            </div>

            <div className="video-title">
                <h4>El Camino del Campeon</h4>

            </div>

            <div className="videos-content">

                {datos.map(dato =>
                    <div className="video">
                        <iframe width="" height="205" src={dato.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <h2>
                            {dato.fecha}
                        </h2>
                        <p>
                            {dato.review}
                        </p>
                    </div>

                )}
            </div>


            <div className="video-final">
                <h4>Argentina vs Francia | Final | Copa Mundial de la FIFA Catar 2022</h4>
                <div className="video-final-content">
                    <div className="video-final-parrafo">
                        <h2>18 dic 2022</h2>
                        <p>
                            La selección albiceleste derrotó por penales al elenco galo luego de igualar 3 a 3 en un encuentro para el infarto y, de esta manera, se consagró campeona del mundo por tercera vez
                        </p>
                    </div>
                    <div className="video">
                        <iframe src="https://www.youtube.com/embed/cqsuf8VSxuE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Highlights;