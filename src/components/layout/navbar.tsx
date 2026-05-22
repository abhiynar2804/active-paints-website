"use client";

import { useState } from "react";
import styles from "../../styles/layout/navbar.module.css";
import logo from "../../../public/Official_logo.png";

const NAV_LINKS = [
  { href: "#about",       label: "About" },
  { href: "#products",    label: "Products" },
  { href: "#colours",     label: "Colours" },
  { href: "#inspiration", label: "Inspiration" },
  { href: "#tools",       label: "Tools" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={`
      sticky top-0 w-full z-[1000] box-border
      flex items-center flex-wrap
      h-[70px] px-[30px]
      bg-[#fafaf2] border-b-2 border-[#C2FEDB]
      shadow-[0_2px_12px_rgba(0,0,0,0.06)]
      max-md:px-[15px]
      max-[480px]:h-[65px] max-[480px]:px-3
    `}>

      {/* ── Brand (left) — order-1 always ── */}
      <div className={`flex items-center gap-3 flex-shrink-0 cursor-pointer order-1 ${styles.brand}`}>
        <div className={styles.logoWrapper}>
          <img src={logo.src} alt="Active Paints" className="h-[55px] w-auto" />
        </div>
        <span className={styles.brandName}>Active Paints</span>
      </div>

      {/* ── Nav links (middle, desktop only) ── */}
      {/* On mobile this becomes the full-screen drawer */}
      <div className={`${styles.menu} ${menuOpen ? styles.menuOpen : ""} order-2`}>
        <ul className="flex list-none m-0 p-0 gap-8 items-center w-full">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href} className="relative">
              <a
                href={href}
                onClick={() => setMenuOpen(false)}
                className={styles.navLink}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* ── CTA (right on desktop, right-of-hamburger on mobile) ── */}
      {/* order-3 desktop | order-3 mobile — sits after brand+menu, before hamburger space */}
      <div className="flex items-center gap-2 ml-auto order-3">
        <button className={styles.ctaBtn}>
          Contact Us
        </button>

        {/* ── Hamburger — right of CTA on mobile ── */}
        <button
          aria-label="Toggle navigation menu"
          onClick={() => setMenuOpen((o) => !o)}
          className={`${styles.hamburger} ${menuOpen ? styles.hamburgerActive : ""}`}
        >
          <span className={menuOpen ? styles.bar1Active : ""} />
          <span className={menuOpen ? styles.bar2Active : ""} />
          <span className={menuOpen ? styles.bar3Active : ""} />
        </button>
      </div>
    </nav>
  );
}