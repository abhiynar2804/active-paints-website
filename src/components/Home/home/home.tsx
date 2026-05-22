"use client";
import "./home.css";
import image1 from "../../../../../public/20260226_183810.png"

export default function HomeSub() {
    return(
        <>
            <div className="home-scroll">
                <h2>Our Paints & Products </h2>
                <div className="cards">
                    <div className="card">
                        <img src="icon" alt="" />
                        <h4>Interior Paints</h4>
                        <p>Paint for interior wall</p>
                    </div>
                    <div className="card">
                        <img src="icon" alt="" />
                        <h4>Exterior Paints</h4>
                        <p>Paint for exterior wall</p>
                    </div>
                    <div className="card">
                        <img src="icon" alt="" />
                        <h4>Specialty Paints</h4>
                        <p>Paint for specialty applications</p>
                    </div>
                </div>
                <button>View All Products</button>
            </div>

            <div className="feature-section">
                <div className="feature-left">
                    <img src={image1.src} alt="Feature" className="feature-image" />
                </div>
                <div className="feature-right">
                    <h2>Why Choose Our Paints?</h2>
                    <p>We deliver premium quality paints designed for durability, vibrant colors, and environmental sustainability. Our products are trusted by professionals and homeowners worldwide.</p>
                    <ul className="feature-list">
                        <li>✓ 100% eco-friendly & non-toxic</li>
                        <li>✓ Weather-resistant finish</li>
                        <li>✓ Long-lasting color retention</li>
                        <li>✓ Expert customer support</li>
                    </ul>
                    <button className="feature-btn">Learn More</button>
                </div>
            </div>
        </>
    );
}
