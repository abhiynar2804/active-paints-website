"use client";
import { useState } from "react";
import "./Navbar.css";
import logo from "../../favicon.ico";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            {/* Logo and Brand Section */}
            <div className="navbar-brand">
                <div className="logo-wrapper">
                    <img src={logo.src} alt="Active Paints" className="logo" />
                </div>
                <div className="brand-text">
                    <h1 className="brand-name">Active Paints</h1>
                    <p className="brand-tagline">Premium Colors & Finishes</p>
                </div>
            </div>

            {/* Navigation Links */}
            <div className={`navbar-menu ${menuOpen ? "active" : ""}`}>
                <ul className="nav-links">
                    <li><a href="#about">About</a></li>
                    <li><a href="#products">Products</a></li>
                    <li><a href="#colours">Colours</a></li>
                    <li><a href="#inspiration">Inspiration</a></li>
                    <li><a href="#tools">Tools</a></li>
                </ul>
            </div>

            {/* CTA Button */}
            <button className="cta-btn">Contact Us</button>

            {/* Mobile Hamburger Menu */}
            <button
                className={`hamburger ${menuOpen ? "active" : ""}`}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle navigation menu"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
        </nav>
    );
}

/*
=== OLD CODE (COMMENTED OUT) ===

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
*/