import React, {useState, useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
// import loginpic from "../images/signup-image.jpg";
import './css/Login/Login.css';
import { UserContext } from "../App";
import ScrollToFirstComponent from './includes/ScrollToTop/ScrollToFirstComponent';

export default function Login(){

    const {dispatch} = useContext(UserContext);
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const loginUser = async (e) => {
        e.preventDefault();

        const res = await fetch('/signin', {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                email, 
                password
            })
        });

        const data = res.json();

        if(res.status === 400 || !data) {
            window.alert("Invalid Credentials");
        } else {
            dispatch({type:"USER", payload:true})
            window.alert("Login Successfull");
            navigate('/');
        }        
    }

    return (
        <>
            {/* scroll to the first component's position when the page loads */}
            <div ref={ScrollToFirstComponent().firstComponentRef} />
            
            <div className='main'>
                <section className="signin">
                    <div className="container mt-5">
                        <div className="signin-content">
                            <div className="signin-image">
                                <figure>
                                    {/* <img src={loginpic} alt="login pic" /> */}
                                </figure>
                                <NavLink to="/Signup" className="signup-image-link">Create an account</NavLink>
                            </div>

                            <div className="signin-form">
                                <h2 className="form-title">Sign in</h2>
                                <form method="POST" className="register-form" id="login-form">

                                    <div className='form-group'>
                                        <label htmlFor='email'>
                                            <i className="zmdi zmdi-email material-icons-name"></i>
                                        </label>
                                        <input type="email" name="email" id="email" autoComplete='off' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Your Email' />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="your_pass">
                                            <i className="zmdi zmdi-lock"></i>
                                        </label>
                                        <input type="password" name="password" id="password" autoComplete='off' value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Your Password"/>
                                    </div>

                                    <div className="form-group form-button">
                                        <input type="submit" name="signin" id="signin" className="form-submit" value="Log in" onClick={loginUser} />
                                    </div>
                                </form>                                
                            </div>
                        </div>
                    </div>
                </section>  
            </div>     
        </>
    )
}