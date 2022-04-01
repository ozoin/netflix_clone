import React from 'react'
import './ProfileScreen.css';
import Nav from '../Components/Nav';
import {selectUser,login,logout} from "../features/userSlice";
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
function ProfileScreen() {
    const user = useSelector(selectUser);
    const history = useHistory();
    const dispatch = useDispatch();
    const signOut = () => {
        localStorage.setItem('auth-token','');
        dispatch(logout());
    };
    return (
        <div className="profileScreen">
            <Nav/>
            <div className="profile_body">
                <h1>Edit profile</h1>
                <div className="profile_info">
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png" />
                    <div className="profile_details">
                        <h2>{user.email}</h2>
                        <div className="plans">
                            <h3>Plans</h3>
                            <button onClick={signOut} className="signOut">Sign Out</button>
                        </div>
                    </div>    
                </div>    
            </div>
        </div>
    )
}

export default ProfileScreen
