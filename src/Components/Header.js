import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "../Assets/icons_assets/Logo.svg";
import './header.css';

function Header () {
    const navigate = useNavigate();
    
    useEffect(() => {
        const handleClick = () => {
            navigate("/little_lemon");
        }
        document.getElementById('logo').addEventListener('click', handleClick)

        return () => {
            document.getElementById('logo').removeEventListener('click',handleClick)
        }
    })

    const style = {
        cursor: 'pointer'
    }
    return (
        <header className='logo'>
            <Logo style={style} id='logo'/>
        </header>
    );
}

export default Header