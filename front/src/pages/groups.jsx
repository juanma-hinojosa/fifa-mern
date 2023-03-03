import React from "react";
import Groupos from "../img/groups.png"
import Knockout from "../img/knockout.jpg"
import "../../src/styles/groups.css"



const Groups = () => {
    return (
        <div className="groups-content" >
            <div className="groups-wrapper">
                <h4>
                    Llaves y grupos de la Copa Mundial de la FIFA™
                </h4>
            </div>

            <h4>Grupos</h4>
            <div className="foto-wrapper">
                <div className="foto">
                    <img src={Groupos} alt="" />
                </div>
            </div>

            <h4>Fase Eliminatoria</h4>
            <div className="foto-wrapper">
                <div className="foto">
                    <img src={Knockout} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Groups;