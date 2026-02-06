import "./Navbar.css";
import logo from "../../favicon.ico"

export default function Navbar() {
    return (
        <nav>
            {/* Upper (green) bar */}
            <div className="upper-base">
                <div className="upper-left">
                    {/* logo is absolutely positioned so it spans both bars */}
                </div>

                <div className="upper-right">
                    <button className="contact">Contact us</button>
                </div>
            </div>

            {/* Lower (white) bar */}
            <div className="lower-base">
                <div className="lower-left">
                    {/* company name - 'Paints' will appear here visually */}
                </div>

                <div className="middle">
                    <ul>
                        <li><a href="#">Products</a></li>
                        <li><a href="#">Colour</a></li>
                        <li><a href="#">Inspiration</a></li>
                        <li><a href="#">Tools</a></li>
                        <li><a href="#">About</a></li>
                    </ul>
                </div>
            </div>

            {/* Floating logo and company name split across the two bars */}
            <div className="logo-container">
                <img src={logo.src} alt="Logo" />
            </div>

            <div className="company-name">
                <div className="name-top">Active</div>
                <div className="name-bottom">Paints</div>
            </div>
        </nav>
    );
}