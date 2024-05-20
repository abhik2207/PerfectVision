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
            <div id="nav-right">
                <Link className='link' to="/about-us" title="Learn more about us">About us</Link>
                <Link className='link' to="/pricing" title="View our pricings">Pricing</Link>
                <Link className='link' to="/pricing" title="View our pricings">Pricing</Link>
                <Link className='link' to="/profile" title="Reach out to us" id='capsule'><p>Login</p></Link>
            </div>
        </div>
    )
}

export default Navbar;
