import React from "react";
import './../styles/login.css'

const Login = () => {
    return(<div className="login__box">
        <form className="login__form">
            <label>Correo electrónico</label>
            <input type="text"/>

            <label>Contraseña</label>
            <input type="password"/>

            <button>INGRESA CON GOOGLE</button>
            <button>INGRESAR</button>
        </form>
    </div>);
}

export {Login}