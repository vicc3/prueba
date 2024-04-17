import React from "react";
import './Login.css'
import '../../App.css'
import video from '../../material/video_rayo.mp4'
import { Link, NavLink } from "react-router-dom";
import logo from '../../material/rust-eze.png'
import { FaUserShield } from 'react-icons/fa'
import { BsFillShieldLockFill } from 'react-icons/bs'
import { AiOutlineSwapRight } from 'react-icons/ai'

const Login = () => {
    return (
        <div classname = 'loginPage flex'>
        <div classname = 'container flex'>
            
            <div classname='videoDiv'>
            <video src={video} autoPlay muted loop></video>

                <div className="textDive">
                <h2 className="title">Prendan sus motores...</h2>   
                <p>"Soy veloz... kuchow"</p> 
                </div>

                <div className="footerDiv flex">
                    <span classname='text'>Don't have an account?</span>
                    <Link to={'/register'}>
                    <button className="btn">Sing Up</button>
                    </Link>
                </div>
            </div>

        <div className="formDiv flex">
            <div className="headerDiv">
            <img src={logo} alt='Logo Image'/>
            <h3> welcome to the race...</h3>
            </div>

        <form action='' classname='form grid'>
            <span className="showMessage">Login status</span>

            <div className="inputDiv">
            <label htmlFor="username">Username:</label>
            <div classname='input flex'>
                <FaUserShield className='icon'/>
                <input type='text' id='username' placeholder="Enter Username:"/>
            </div>
            </div>

            <div className="inputDiv">
            <label htmlFor="password">Password:</label>
            <div classname='input flex'>
                <BsFillShieldLockFill className='icon'/>
                <input type='password' id='password' placeholder="Enter password:"/>
            </div>
            </div>

            <button type = 'submit' className = 'btn flex'>
            <span>LogIn</span>
            <AiOutlineSwapRight classname='icon'/>
            </button>

            <span className="forgotPassword">
                Olvidaste tu password? <a href=''>Clickea aqui</a>
            </span>

        </form>

        </div>

        </div>
        </div>
    )
}
export default Login