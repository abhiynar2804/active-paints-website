"use client";
import { useState } from "react";
import "./Navbar.css";
import logo from "../../favicon.ico"

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav>
            <div className="upper-base">
                <div className="upper-left">
                </div>

                <div className="upper-right">
                    <button className="contact">Contact us</button>
                </div>
            </div>

            <div className="lower-base">
                <div className="logo-container">
                    <img src={logo.src} alt="Logo" />
                </div>

                <div className="company-name">
                    <div className="name-top">Active</div>
                    <div className="name-bottom">Paints</div>
                </div>

                <div className={`middle ${menuOpen ? 'open' : ''}`}>
                    <ul>
                        <li><a href="#products">Products</a></li>
                        <li><a href="#colours">Colours</a></li>
                        <li><a href="#inspiration">Inspiration</a></li>
                        <li><a href="#tools">Tools</a></li>
                        <li><a href="#about">About</a></li>
                    </ul>
                </div>

                <button 
                    className={`hamburger ${menuOpen ? 'active' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    );
}