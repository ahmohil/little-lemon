import './Footer.css'
import logo from '../../Assets/icons_assets/footer-logo.PNG'
import {MdLocationPin} from 'react-icons/md'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {MdOutlineEmail} from 'react-icons/md'
import {FaFacebook, FaTwitter, FaYoutube, FaInstagram} from 'react-icons/fa'

function Footer(){
     return(
        <footer>
           <img src={logo} alt='Footer Logo Little Lemon' className='footerLogo'></img>
           <div className='sitemap'>
                <strong className='footer-heading'> Sitemap</strong>
                <ul>
                    <li><a href="#Home">Home</a></li>
                    <li><a href="#afds">About</a></li>
                    <li><a href="#fdad">Menu</a></li>
                    <li><a href="#dsf">Reservations</a></li>
                    <li><a href="#dfs">Order Online</a></li>
                    <li><a href="#dfsaf">Login</a></li>
                </ul>
           </div>
           <div className='contact-us'>
              <strong className='footer-heading'>Contact Us</strong>
              <ul>
              <li><span><MdLocationPin /> <i>678 Pisa Ave, Chicago, IL 60611</i></span></li>
              <li><span><BsFillTelephoneFill/> (312) 593-2744</span></li>
              <li><span><MdOutlineEmail /> <i>info@llchicago.com</i></span></li>
              </ul>
           </div>   
           <div className='contact'>
               <strong className='footer-heading'>Social Media Links</strong>
               
               <FaFacebook /> 
               <FaTwitter />
               <FaYoutube />
               <FaInstagram />
           </div>
        </footer>
     )

}

export default Footer;