import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="login">
        <div className="wrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">DigitalSouag</h3>
                <span className="loginDescription">
                    Connecte toi, pour un monde plus proche avec tes amis
                </span>
            </div>
            <div className="loginRight">
                <div className="loginBox"></div>
            </div>
        </div>
    </div>
  )
}

export default Login;