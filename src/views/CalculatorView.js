import React from "react";
import { Prediction } from './../components/Prediction';
import { Instructions } from './../components/Instructions';
import { Calculator } from "../components/Calculator";
import './../styles/calculatorview.css'
import { Nav } from "../components/Nav";

const CalculatorView = () =>{
    return <div className="calculator-view">
        <Nav />
        <div>
            <Calculator/>
            <Prediction/>
            <Instructions/>
        </div>
    </div>
}
export {CalculatorView}