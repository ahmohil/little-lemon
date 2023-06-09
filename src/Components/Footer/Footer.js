import './Footer.css'
import logo from '../../Assets/icons_assets/footer-logo.PNG'
import { MdLocationPin } from 'react-icons/md'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { MdOutlineEmail } from 'react-icons/md'
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer role="contentinfo" aria-label="Footer">
      <div className='footer-container'>
      <img src={logo} alt='Footer Logo Little Lemon' className='footerLogo' aria-hidden="true"></img>
      <div className='sitemap' role="navigation" aria-label="Sitemap">
        <strong className='footer-heading'> Sitemap</strong>
        <ul >
          <li><Link to="/little-lemon" className='nav-link'>Home</Link></li>
          <li><Link to="/about" className='nav-link'>About</Link></li>
          <li><Link to="/menu" className='nav-link'>Menu</Link></li>
          <li><Link to="/booking" className='nav-link'>Reservations</Link></li>
          <li><Link to="/order-online" className='nav-link'>Order Online</Link></li>
          <li><Link to="/login" className='nav-link'>Login</Link></li>
        </ul>
      </div>
      <div className='contact-us' role="navigation" aria-label="Contact Us">
        <strong className='footer-heading'>Contact Us</strong>
        <ul>
          <li><span><MdLocationPin /> <i>678 Pisa Ave, Chicago, IL 60611</i></span></li>
          <li><span><BsFillTelephoneFill /> (312) 593-2744</span></li>
          <li><span><MdOutlineEmail /> <i>info@llchicago.com</i></span></li>
        </ul>
      </div>
      <div className='contact' role="navigation" aria-label="Social Media Links">
        <strong className='footer-heading'>Social Media Links</strong>
        <div className='social-links'>
          <FaFacebook />
          <FaTwitter />
          <FaYoutube />
          <FaInstagram />
        </div>
      </div>
      </div>
    </footer>
  );
}


export default Footer;