import React, {Component} from 'react'
import './css/login.css'

const button = {
    background: '#bad6db',
    padding: '20px auto',
    borderRadius: '10px',
    fontSize: '25px',
    cursor: 'pointer',
    
}

class Login extends Component{
    render(){
        return(
            <div className="login-clase1">
            <h1>LOGIN</h1>
            <br/>
                <form>
                    <label>Correo Electronico</label><br/>
                    <input type="email"/><br/>

                    <label>Contraseña</label><br/>
                    <input type="password"/><br/>

                    <input type="submit" style ={button} Value="Iniciar Sesión"/>
                </form>
            </div>
        );
    }
}

export default Login;