import './../styles/login.css'
import React from "react";
import { Button } from "./Button";
import { FaGoogle } from "react-icons/fa";
import { Input } from "./Input";


const Login = () => {
    return(<div className="login__box">
        <h2>Inciar sesión</h2>
        <form className="login__form">
            <div>
                <Input label={'Correo electrónico'} type={'text'}/>
                <Input label={'Contraseña'} type={'password'}/>
            </div>
            <div>
                <Button text={'INGRESAR'}/>
                <Button text={'INGRESAR CON GOOGLE'} icon={<FaGoogle size={20}/>} primary={false} />
            </div>
        </form>
    </div>);
}

export {Login}