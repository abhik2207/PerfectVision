import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import './PricingPage.css';

function PricingPage() {
    return (
        <div id="pricing-page">
            <Navbar />
            
            <div id="cards-container">
                <div className="card">
                    <div className="plan-title">
                        <p>Popular</p>
                    </div>
                    <div className="plan-price">
                        <h1>At just<br/>₹1299 /-</h1>
                    </div>
                    <div className="plan-detail">
                        <ul>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ratione.</li>
                            <li>Cum delectus possimus velit itaque saepe omnis pariatur maxime est?</li>
                            <li>Non ratione ab earum tempora et consectetur cumque laboriosam sed.</li>
                            <li>Pariatur ex molestiae eaque commodi animi! Porro facere iste atque.</li>
                        </ul>
                    </div>
                    <div className="plan-button">
                        <button>Purchase</button>
                    </div>
                </div>
                <div className="card">
                    <div className="plan-title">
                        <p>Popular</p>
                    </div>
                    <div className="plan-price">
                        <h1>At just<br/>₹1299 /-</h1>
                    </div>
                    <div className="plan-detail">
                        <ul>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ratione.</li>
                            <li>Cum delectus possimus velit itaque saepe omnis pariatur maxime est?</li>
                            <li>Non ratione ab earum tempora et consectetur cumque laboriosam sed.</li>
                            <li>Pariatur ex molestiae eaque commodi animi! Porro facere iste atque.</li>
                        </ul>
                    </div>
                    <div className="plan-button">
                        <button>Purchase</button>
                    </div>
                </div>
                <div className="card">
                    <div className="plan-title">
                        <p>Popular</p>
                    </div>
                    <div className="plan-price">
                        <h1>At just<br/>₹1299 /-</h1>
                    </div>
                    <div className="plan-detail">
                        <ul>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ratione.</li>
                            <li>Cum delectus possimus velit itaque saepe omnis pariatur maxime est?</li>
                            <li>Non ratione ab earum tempora et consectetur cumque laboriosam sed.</li>
                            <li>Pariatur ex molestiae eaque commodi animi! Porro facere iste atque.</li>
                        </ul>
                    </div>
                    <div className="plan-button">
                        <button>Purchase</button>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default PricingPage;
