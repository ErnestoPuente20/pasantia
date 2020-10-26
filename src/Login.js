import React, {useState, useEffect} from 'react'
import './css/login.css';

import 'antd/dist/antd.css';
import { Button, Input } from 'antd';
import{UserOutlined} from '@ant-design/icons'


const Login = () => {
    const [login, setLogin] = useState(true);

        // useEffect(() => {
        //     setLogin(true)
        // })

        const register = () => setLogin(!login);

        return(
            login ?
            <div className="login-clase1">
            <h1>LOGIN</h1>
            <br/>
                <form>
                    <label>Correo Electronico</label><br/>
                    <Input placeholder="Correo" prefix={<UserOutlined />} size="large"/><br/>

                    <label>Contraseña</label><br/>
                    <Input.Password placeholder="Contraseña" size="large"/><br/>

                    {/* <input type="submit" style ={button} Value="Iniciar Sesión"/> */}
                    <Button type="primary" size="large">Iniciar Sesion</Button>
                    <Button className="register" type="primary" size="large" onClick={register}>Registro</Button>
                </form>
            </div>

            : 
            
            <div className="login-clase1">
            <h1>REGISTRO</h1>
            <br/>
                <form>

                    <Input placeholder="Nombre"  size="large"/><br/>

                    <Input placeholder="Apellido"  size="large"/><br/>

                    <Input placeholder="Edad"  size="large"/><br/>

                    <Input placeholder="Correo Electronico"  size="large"/><br/>

                    <Input.Password placeholder="Contraseña" size="large"/><br/>

                    {/* <input type="submit" style ={button} Value="Iniciar Sesión"/> */}
                    <Button type="primary" size="large">Registrarse</Button>
                    <Button className="register" type="primary" size="large" onClick={register}>Login</Button>
                </form>
            </div>
        );
    
}

export default Login;