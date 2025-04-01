import React from "react";
import "./../styles/prediction.css"

const Prediction = () =>{
    return(
        <div className="prediction__container">
            <h2 className="prediction__title">
                Índice de Calidad del Aire (AQI): <span className="aqi-value">120</span> <br />
                <span className="aqi-status">(Moderadamente malo)</span>
            </h2>
             <div className="prediction__image">
                <img src="https://th.bing.com/th/id/R.90b29f502a0592a90a55e25b4a642f5f?rik=jlZQQdBCg6wacA&riu=http%3a%2f%2fyourbodyyourair.org%2fwp-content%2fuploads%2f2021%2f06%2fmeter-spanish3-700x685.png&ehk=WMQuAbhZyrI9maZKez7pNuje%2faEJzNpPmnenpfEbusc%3d&risl=&pid=ImgRaw&r=0" alt="Índice de Calidad del Aire" />
            </div>
            <p className="prediction__description">
                La calidad del aire es aceptable, pero puede ser preocupante para personas sensibles, como niños, 
                ancianos y personas con enfermedades respiratorias. Se recomienda evitar actividades al aire libre prolongadas.
            </p>
        </div>
    )
}

export {Prediction}