import Instagram from '../assets/instagram.png';
import Facebook from '../assets/facebook.png';
import Twitter from '../assets/twitter.png';
import Logo from '../assets/logo.png';

import './Footer.css';

function Footer() {
    return (
        <div id='footer'>
            <div id="footer-top">
                <div id="footer1">
                    <div id="footer1a">
                        <img src={Logo} alt="Footer Logo" />
                        <p>Perfect Vision</p>
                    </div>
                    <div id="footer1b">
                        <h1>Reach out to us at</h1>
                        <p>+91 1212 3434 90</p>
                        <p>perfectvision@gmail.com</p>
                    </div>
                </div>
                <div id="footer2">
                    <h1>Information</h1>
                    <p className='link'>About us</p>
                    <p className='link'>More search</p>
                    <p className='link'>Blog</p>
                    <p className='link'>Testimonials</p>
                    <p className='link'>Events</p>
                </div>
                <div id="footer3">
                    <h1>Helpful Links</h1>
                    <p className='link'>Services</p>
                    <p className='link'>Supports</p>
                    <p className='link'>Terms & conditions</p>
                    <p className='link'>Privacy Policy</p>
                    <p className='link'>Our standards</p>
                </div>
                <div id="footer4">
                    <h1>Contact us</h1>
                    <textarea rows={1} type="text" placeholder='Enter your query' />
                    <button>Send</button>
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
