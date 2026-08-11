"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, MessageCircle } from "lucide-react";

import styles from "../../Styles/layout/Navbar.module.css";
import logo from "../../../public/logo.png";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/products#colour-palette", label: "Colours" },
  // { href: "#inspiration", label: "Inspiration" },
  // { href: "#tools", label: "Tools" },
];

const PHONE_NUMBER = "+91XXXXXXXXXX";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav
      className="sticky top-0 w-full z-[1000] box-border flex items-center flex-wrap h-[72px] px-4 md:px-8 bg-[#fafaf2]/95 backdrop-blur border-b border-[#d7f3e4] shadow-sm"
      aria-label="Main navigation"
    >
      {/* Brand */}
      <Link
        href="/"
        className={`flex items-center gap-3 flex-shrink-0 order-1 ${styles.brand}`}
      >
        <div className={styles.logoWrapper}>
          <Image
            src={logo}
            alt="Active Paints logo"
            width={56}
            height={56}
            priority
            className="h-[52px] w-auto"
          />
        </div>

        <span className={styles.brandName}>Active Paints</span>
      </Link>

      {/* Desktop + Mobile Menu */}
      <div className={`${styles.menu} ${menuOpen ? styles.menuOpen : ""} order-2`}>
        <ul className="flex list-none m-0 p-0 gap-8 items-center w-full">
          {NAV_LINKS.map(({ href, label }) => {
            const isActive = pathname === href;

            return (
              <li key={href} className="relative">
                <Link
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`${styles.navLink} ${
                    isActive
                      ? "text-blue-700 font-semibold after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-blue-700"
                      : "text-gray-700 hover:text-blue-700"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}

          {/* Mobile quick actions */}
          <li className="md:hidden w-full pt-6 border-t border-gray-200 mt-4">
            <div className="flex flex-col gap-3">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="flex items-center justify-center gap-2 rounded-xl border border-blue-700 px-4 py-3 text-blue-700 font-semibold"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>

              <a
                href={`https://wa.me/${PHONE_NUMBER.replace(/\\D/g, "")}?text=Hello%20Active%20Paints,%20I%20would%20like%20a%20paint%20quotation.`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-green-600 px-4 py-3 text-white font-semibold"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
          </li>
        </ul>
      </div>

      {/* Desktop CTA */}
      <div className="hidden md:flex items-center gap-3 ml-auto order-3">
        <a
          href={`tel:${PHONE_NUMBER}`}
          className="inline-flex items-center gap-2 rounded-full border border-blue-700 px-4 py-2 text-sm font-medium text-blue-700 hover:bg-blue-50 transition-colors duration-300"
        >
          <Phone className="w-4 h-4" />
          Call
        </a>

        <Link
          href="/contact"
          className="inline-flex items-center rounded-full bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-800 transition-colors duration-300 shadow-sm"
        >
          Get Quote
        </Link>
      </div>

      {/* Mobile actions */}
      <div className="flex items-center gap-2 ml-auto md:hidden order-3">
        <Link
          href="/contact"
          className="rounded-full bg-blue-700 px-4 py-2 text-sm font-semibold text-white"
        >
          Quote
        </Link>

        <button
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
          className={`${styles.hamburger} ${
            menuOpen ? styles.hamburgerActive : ""
          }`}
        >
          <span className={menuOpen ? styles.bar1Active : ""} />
          <span className={menuOpen ? styles.bar2Active : ""} />
          <span className={menuOpen ? styles.bar3Active : ""} />
        </button>
      </div>
    </nav>
  );
}