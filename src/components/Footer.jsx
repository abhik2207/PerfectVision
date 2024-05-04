import Instagram from '../assets/instagram.png';
import Facebook from '../assets/facebook.png';
import Twitter from '../assets/twitter.png';
import Logo from '../assets/logo.png';

import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div id="footer">
            <div id="footer-top">
                <div id="footer-left">
                    <img src={Logo} alt="Footer logo" />
                    <h1>Perfect Vision</h1>
                </div>
                <div id="footer-center">
                    <h1>Quick Links</h1>
                    <Link to='/about-us' className='link'>About us</Link>
                    <Link to='/contact-us' className='link'>Review us</Link>
                    <Link to='/how-it-works' className='link'>How our product works</Link>
                </div>
                <div id="footer-right">
                    <h1>Contact us at</h1>
                    <p>+91 1212 3434 90</p>
                    <p>perfectvision@gmail.com</p>
                </div>
            </div>
            <div id="footer-bottom">
                <div id="images">
                    <a href="instagram.com">
                        <img src={Instagram} target="_blank" alt="Instagram" />
                    </a>
                    <a href="facebook.com">
                        <img src={Facebook} target="_blank" alt="Facebook" />
                    </a>
                    <a href="twitter.com">
                        <img src={Twitter} target="_blank" alt="Twitter" />
                    </a>
                </div>
                <div id="copyright">
                    <p>2024 &copy; Perfect Vision | All rights reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;
