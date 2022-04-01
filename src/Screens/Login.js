import React, { useState } from 'react'
import './Login.css';
import styled from "styled-components";
import SignUp from "./SignUp";
import { TransitionGroup, CSSTransition } from 'react-transition-group';

function Login() {
    const [signIn,setSignIn] = useState(!true);
    return (
        <div className="loginScreen">
            <div className="background_login">
                <img className="login_logo" src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
                <button onClick={()=>setSignIn(true)} className="loginScreen_button">Sign In</button>
                <div className="login_gradient"/>
            </div>
            <div className="login_body">
            <>
           <CSSTransition in={signIn} classNames="page" timeout={500}>
                {signIn ? (
                    <SignUp/>
                ) : (
                    <>
                        <h1>Unlimited films,TV programmes and more.</h1>
                        {/* <h1>{t('main.first_line')}</h1> */}
                        <h2>Watch anywhere. Cancel at any time</h2>
                        <h3>Ready to watch? Enter your email to create or restart membership.</h3>
                    <div className="login_input">
                        <form>
                            <input type="email" placeholder="Email Adress"/>
                            <button onClick={()=>setSignIn(true)} className="login_button">Get Started</button>
                        </form>   
                    </div>
                    
                    </>
                )}
            </CSSTransition>
               </>
            </div>
        </div>
    )
}

export default Login
