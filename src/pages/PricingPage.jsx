import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import './PricingPage.css';

function PricingPage() {
    return (
        <div id="pricing-page">
            <Navbar />
            <div id="pricing">
                <div id="pricing-left">
                    <p>At just</p>
                    <h1>₹1129/-</h1>
                </div>
                <div id="pricing-right">
                    <h1>We provide you with</h1>
                    <ul>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, quia eos. Nesciunt a hic nemo!</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, quia eos. Nesciunt a hic nemo!</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, quia eos. Nesciunt a hic nemo!</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, quia eos. Nesciunt a hic nemo!</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, quia eos. Nesciunt a hic nemo!</li>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default PricingPage;
