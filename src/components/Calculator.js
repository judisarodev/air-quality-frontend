import React from 'react'
import "./../styles/calculator.css"
const Calculator = () => {
    return (
        <div className='calculator__main-box'>
            <h2>Calculadora de riesgos</h2>
            <div className="calculator__input-group">
                <label className="calculator__label">CO2 (Dióxido de Carbono)</label>
                <input type="text" className="calculator__min-box" placeholder="ppm" />
            </div>
            <div className="calculator__input-group">
                <label className="calculator__label">PM2.5</label>
                <input type="text" className="calculator__min-box" placeholder="µg/m³" />
            </div>
            <div className='calculator__input-group'>
                <label className='calculator__label'>PM10</label>
                <input type="text" className='calculator__min-box' placeholder='µg/m³'/>
            </div>
            <div className='calculator__input-group'>
                <label className = 'calculator__label'>O3(Ozono)</label>
                <input type='text' className = 'calculator__min-box' placeholder='ppb'/>
            </div>
            <div className='calculator__input-group'>
                <label className = 'calculator__label'>NOx(Óxidos de Nitrógeno)</label>
                <input type='text' className = 'calculator__min-box' placeholder='ppb'/>
            </div>
            <div className='calculator__input-group'>
                <label className = 'calculator__label'>Temperatura</label>
                <input type='text' className = 'calculator__min-box' placeholder='°C'/>
            </div>
            <div className='calculator__button'>
                <button>CALCULAR</button>
            </div>

        </div>
        
    )
}

export {Calculator}