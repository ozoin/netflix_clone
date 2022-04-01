import React, { useState, useEffect } from 'react'
import './Nav.css';
import { Link, useHistory } from 'react-router-dom';
function Nav() {
    const [show,handleShow] = useState(false);
    const history = useHistory();
    const transitionNavbar = () => {
        window.scrollY>100 ? handleShow(true) : handleShow(false);
    }
    useEffect(() => {
        window.addEventListener("scroll",transitionNavbar);
        return () => window.removeEventListener('scroll' , transitionNavbar);
    }, [])
    return (
        <div className={`nav ${show && "nav_black"}`}>
            <div className="nav_content">
                <img className="nav_logo" onClick={()=>history.push('/')} src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt=""/>
                <img className="nav_avatar" onClick={()=> history.push('/profile')}  src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png" />
            </div>
        </div>
    )
}

export default Nav
