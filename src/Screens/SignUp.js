import React, { useState } from 'react'
import './SignUp.css';
import axios from '../axios';
import {login} from "../features/userSlice";
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState({});
    const dispatch = useDispatch();
    const register = async (e) => {
        e.preventDefault();
        try {
            const newUser = {email,password};
            console.log(newUser);
            await axios.post('/users/register',newUser);
            const loginRes = await axios.post("/users/login",newUser);
            localStorage.setItem("auth-token",loginRes.data.token); 
            dispatch(login(newUser))
        } catch(err) {
            const error = err.response.data;
            setError(error);
            console.log(error);
        }
    };
    const signIn = async (e) => {
        e.preventDefault();
        try {
        const loginUser = {email,password};
        const loginRes = await axios.post("users/login",loginUser);
        localStorage.setItem("auth-token",loginRes.data.token);
        dispatch(login(loginUser));
        } catch(err) {
            const error = err.response.data;
            setError(error);
            console.log(error)
        }
    }
    return (
        <div className="signupScreen">
            <form>
                <h1>Sign In</h1>
                <input placeholder={error ? "Email" : error.email} value={email} onChange={(e)=>setEmail(e.target.value)} type="email"/>
                <input placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} type="password"/>
                <button type="submit" onClick={signIn}>Sign In</button>
                <h4><span style={{color:"grey"}}>New to Netflix?</span><span className="link_btn" onClick={register}> Sign Up now.</span></h4>
            </form>
        </div>
    )
}
export default SignUp
