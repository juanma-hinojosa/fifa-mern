import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import "../styles/volunter.css";
import banner from "../img/box-volunter.jpg";

const Volunter = () => {
    // const URL = "http://localhost:3001/crear";

    const URL = "https://backfinal-production-03d9.up.railway.app/crear"


    const [inputs, setInputs] = useState({
        nombre: "",
        apellido: "",
        pais: "",
        opinion: ""
    })

    const handleChange = async (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = async () => {
        //Enviamos Datos
        await axios.post(URL, inputs)

        //Vaciamos, Seteamos, Limpiamos los Inputs
        setInputs({
            nombre: "",
            apellido: "",
            pais: "",
            opinion: ""
        })
    }

    return (
        <div className="volunter-wrapper">
            <div className="banner-volunter">
                <div className="parrafo">
                    <h4>Volunteers - El motor de la Copa Mundial de la FIFA™</h4>
                    <p>El programa de voluntariado de la FIFA tiene un gran valor. El valor de crear algo memorable. Es poder decir "fue gracias a mí". Implica lograr una gran conexión con todo el mundo para crear experiencias inolvidables e irrepetibles para Catar y para todo el mundo, que quedarán para siempre en tu memoria y en la de los aficionados. Para que la magia surja necesitamos personas como tú, que nos unes de maneras novedosas, generando recuerdos imborrables y un legado del que sentirnos orgullosos. Conviértete en una pieza clave del engranaje futbolístico. Este es tu momento.</p>
                </div>

            </div>

            <div className="ventajas-banner">
                <div className="text-banner">
                    <h4>Una experiencia única con ventajas exclusivas</h4>
                    <p>En el programa de voluntariado de la Copa Mundial de la FIFA Catar 2022™ no se ofrece remuneración alguna, pero resulta increíblemente gratificante en muchos otros aspectos.</p>
                    <p>Ventajas:</p>

                    <li>
                        <ul>• Un uniforme exclusivo de adidas diseñado para el torneo.</ul>
                        <ul>• Acceso a una comunidad global.</ul>
                        <ul>• Formar parte de un equipo y aprender de los profesionales más destacados del mundo del deporte.</ul>
                        <ul>• Un certificado de reconocimiento de tu labor como voluntario y un obsequio.</ul>
                    </li>

                    <p>Y, lo que es más importante, poder afirmar con orgullo que has formado parte de la mayor competición futbolística del mundo.</p>
                </div>

                <div className="img-banner">
                    <img src={banner} alt="" />
                </div>
            </div>

            <div className = "formulario" >
                <h4>Dejanos tus datos y tu pasion por el futbol</h4>
                {/* Esto OBJECT se va encargar de mapear e iterar nuestro imputs */}
                {Object.keys(inputs).map((key, index) => (
                    <Form.Group className="mb-3" key={index}>
                        <Form.Label id="form">
                            {key}
                        </Form.Label>
                        <Form.Control
                            name={key}
                            value={inputs[key]}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                ))}


                <div className="text-center w-100">
                    <Button variant="primary" type="submit" onClick={handleClick}>
                        Enviar Datos
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Volunter;