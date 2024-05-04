import './Navbar.css';
import NavbarLogo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import UserLogo from '../assets/user.png';

function Navbar() {
    return (
        <div id="navbar">
            <div id="nav-left">
                <Link to="/">
                    <div id="nav-logo">
                        <img src={NavbarLogo} title="Back to homepage" alt="Navbar Logo" />
                    </div>
                </Link>
            </div>
            <div id="nav-center">
                <Link className='link' to="/pricing" title="View our pricings" >Pricing</Link>
                <Link className='link' to="/about-us" title="Learn more about us" >About us</Link>
                <Link className='link' to="/contact-us" title="Reach out to us" >Contact us</Link>
                <Link className='link' to="/how-it-works" title="Let us show you" >How it works</Link>
            </div>
            <div id="nav-right">
                <button title='Download out application'>
                    <a href="#">Download</a>
                </button>
                <Link to="/profile">
                    <div id="profile-button">
                        <img src={UserLogo} title="View your profile" alt="Profile Icon" />
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Navbar;
