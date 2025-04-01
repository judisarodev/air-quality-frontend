import React from "react";
import { Login } from "../components/Login";
import { TimeLine } from "../components/TimeLine";
import './../styles/mainview.css'

const MainView = () =>{
    return(<>
        <div className="main-view__content-container">
            <Login/>
            <TimeLine />
        </div>
        
    </>)
}

export {MainView}