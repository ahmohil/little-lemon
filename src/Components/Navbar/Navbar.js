

import './Navbar.css'
import Logo from '../../Assets/icons_assets/Logo.svg'
import {Link} from 'react-router-dom';

function Navbar(){
    
    
    return(
        <div className='header'>
            <div className='logo'>
                <img src={Logo}/>
            </div>
            <div className='navbar'>
                <ul>
                    <li><Link to="/" className='nav-link'>Home</Link></li>
                    <li><Link to="/about" className='nav-link'>About</Link></li>
                    <li><Link to="/menu" className='nav-link'>Menu</Link></li>
                    <li><Link to="/booking" className='nav-link'>Reservations</Link></li>
                    <li><Link to="/order-online" className='nav-link'>Order Online</Link></li>
                    <li><Link to="/login" className='nav-link'>Login</Link></li>
                </ul>
            </div>
            <div className='socialLinks'>
                
            </div>
        </div>
 
    )
}


export default Navbar;