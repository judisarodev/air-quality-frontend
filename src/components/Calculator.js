import React from 'react'
import "./../styles/calculator.css"
import { Input } from './Input'
import { Button } from './Button'
const Calculator = () => {
    return (
        <div className="calculator__main-box">
            <h2>Calculadora de riesgos</h2>
            <form className="calculator__form">
                <Input label={'CO2 (Dióxido de Carbono)'} type={'text'} placeholder={'ppm'} />
                <Input label={'PM2.5'} type={'text'} placeholder={'µg/m³'} />
                <Input label={'PM10'} type={'text'} placeholder={'µg/m³'} />
                <Input label={'O3 (Ozono)'} type={'text'} placeholder={'ppb'} />
                <Input label={'NOx (Óxidos de Nitrógeno)'} type={'text'} placeholder={'ppb'} />
                <Input label={'Temperatura'} type={'text'} placeholder={'°C'} />
                <div className="calculator__button">
                    <Button text={'CALCULAR'} />
                </div>
            </form>
        </div>
    )
}

export {Calculator}