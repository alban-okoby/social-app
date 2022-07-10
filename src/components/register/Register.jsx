import React from 'react';
import './Register.css';
import logo from '../../assets/image/logo.jpg';

const Register = () => {
  return (
    <div className="register">
        <div className="wrapper">
            <div className="registerLeft">
                <h3 className="registerLogo">DigitalSouag</h3>
                <span className="registerDescription">
                    Incrivez-vous, pour restez plus proche de vos potes !
                </span>
            </div>
            <div className="registerRight">
                <div className="registerBox">
                    <img src={logo} className='profile_picture'/>
                    <input type="text" placeholder="Username" className="registerInput"/>
                    <input type="email" placeholder="Email" className="registerInput"/>
                    <input type="password" placeholder="Password" className="registerInput"/>
                    <input type="password" placeholder="Repeat password" className="registerInput"/>
                    <button className="registerButton btn ">Inscription</button>
                    <span className="registerAlready">Déjà un compte ?</span>
                    <button className="registerRegisterButton btn btn-success"> Se connecter</button>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Register;