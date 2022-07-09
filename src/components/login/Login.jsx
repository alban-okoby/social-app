import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="login">
        <div className="wrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">DigitalSouag</h3>
                <span className="loginDescription">
                    Reste connecté, pour un monde plus proche avec des potes !
                </span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input type="email" placeholder="Email" className="loginInput"/>
                    <input type="password" placeholder="password" className="loginInput"/>
                    <button className="loginButton">Se connecter</button>
                    <span className="loginForgot">Mot de passe oublié </span>
                    <button className="loginRegisterButton"> Créer un nouveau compte</button>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Login;