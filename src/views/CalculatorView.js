import React from "react";
import { Prediction } from './../components/Prediction';
import { Instructions } from './../components/Instructions';
import { Calculator } from "../components/Calculator";
import './../styles/calculatorview.css'

const CalculatorView = () =>{
    return <div className="calculator-view">
        <Calculator/>
        <Prediction/>
        <Instructions/>
    </div>
}
export {CalculatorView}