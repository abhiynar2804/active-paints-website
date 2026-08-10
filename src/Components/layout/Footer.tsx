"use client";

import styles from "../../Styles/layout/Footer.module.css";
import logo from "../../../public/Official_logo.png";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] text-[#ecf0f1] pt-12 pb-4 border-t-[3px] border-[#e74c3c] font-sans">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Top Grid */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <Image
                src={logo}
                alt="Active Paints logo"
                width={140}
                height={70}
                className="h-auto w-auto"
              />
              <div className="leading-tight">
                <div className="text-xl font-bold text-[#e74c3c]">Active</div>
                <div className="text-xl font-bold text-[#ecf0f1]">Paints</div>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-[#bdc3c7] mb-6">
              Premium quality paints for residential and commercial use. Trusted
              by professionals worldwide.
            </p>

            <div>
              <h4
                className={`text-base font-semibold mb-3 text-[#ecf0f1] ${styles.sectionHeading}`}
              >
                Follow Us
              </h4>
              <div className="flex gap-3">
                {[
                  {
                    href: "https://www.facebook.com/share/1KMUQqdUsE/",
                    label: "Facebook",
                    icon: "f",
                  },
                  {
                    href: "https://www.instagram.com/activepaintofficial/",
                    label: "Instagram",
                    icon: "📷",
                  },
                  { href: "#twitter", label: "Twitter", icon: "𝕏" },
                  { href: "#linkedin", label: "LinkedIn", icon: "in" },
                ].map(({ href, label, icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={styles.socialLink}
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Our Products */}
          <div>
            <h4
              className={`text-[1.05rem] font-bold mb-5 text-[#ecf0f1] pb-2 ${styles.sectionHeading}`}
            >
              Our Products
            </h4>
            <FooterLinks
              links={[
                { href: "/products", label: "Paint Collections" },
                { href: "#colours", label: "Colour Palette" },
                { href: "#interior", label: "Interior Paints" },
                { href: "#exterior", label: "Exterior Paints" },
                { href: "#specialty", label: "Specialty Coatings" },
              ]}
            />
          </div>

          {/* Company */}
          <div>
            <h4
              className={`text-[1.05rem] font-bold mb-5 text-[#ecf0f1] pb-2 ${styles.sectionHeading}`}
            >
              Company
            </h4>
            <FooterLinks
              links={[
                { href: "/about", label: "About Us" },
                { href: "#inspiration", label: "Inspiration" },
                { href: "#tools", label: "Paint Tools" },
                { href: "#blog", label: "Blog & Tips" },
                { href: "#careers", label: "Careers" },
              ]}
            />
          </div>

          {/* Support */}
          <div>
            <h4
              className={`text-[1.05rem] font-bold mb-5 text-[#ecf0f1] pb-2 ${styles.sectionHeading}`}
            >
              Support & Info
            </h4>
            <FooterLinks
              links={[
                { href: "#faq", label: "FAQ" },
                { href: "/contact", label: "Contact Us" },
                { href: "#privacy", label: "Privacy Policy" },
                { href: "#terms", label: "Terms & Conditions" },
                { href: "#returns", label: "Returns & Warranty" },
              ]}
            />
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4
              className={`text-[1.05rem] font-bold mb-5 text-[#ecf0f1] pb-2 ${styles.sectionHeading}`}
            >
              Get in Touch
            </h4>

            <div className="text-sm leading-7 text-[#bdc3c7] mb-6 space-y-3">
              <div>
                <strong className="block text-[#ecf0f1] mb-0.5">Email:</strong>
                <a
                  href="mailto:graphicsindus@gmail.com"
                  className={styles.contactLink}
                >
                  graphicsindus@gmail.com
                </a>
              </div>
              <div>
                <strong className="block text-[#ecf0f1] mb-0.5">Phone:</strong>
                {["+91 9422574609", "+91 9371199465", "+91 9881983132"].map(
                  (num) => (
                    <a
                      key={num}
                      href={`tel:${num.replace(/\s/g, "")}`}
                      className={`block ${styles.contactLink}`}
                    >
                      {num}
                    </a>
                  ),
                )}
              </div>
              <div>
                <strong className="block text-[#ecf0f1] mb-0.5">
                  Address:
                </strong>
                A-47, Kinhi MIDC Bhusawal,
                <br />
                Dist- Jalgaon 425201, Maharashtra, India
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h5 className="text-sm font-semibold text-[#ecf0f1] mb-2">
                Subscribe to our Newsletter
              </h5>
              <form
                className="flex gap-2 flex-wrap"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  className={styles.newsletterInput}
                />
                <button type="submit" className={styles.newsletterBtn}>
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className={styles.divider} />

        {/* Bottom Bar */}
        <div className="flex flex-wrap justify-between items-center gap-4 pt-6 max-sm:flex-col max-sm:text-center">
          <p className="text-sm text-[#95a5a6]">
            &copy; {currentYear} Active Paints. All rights reserved.
          </p>
          <ul className="flex gap-8 list-none p-0 m-0 max-sm:justify-center max-sm:gap-4">
            {["Privacy", "Terms", "Cookies", "Sitemap"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className={`text-sm text-[#95a5a6] no-underline transition-colors duration-300 ${styles.bottomLink}`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

/* ── helpers ── */

type Link = { href: string; label: string };

function FooterLinks({ links }: { links: Link[] }) {
  return (
    <ul className="list-none p-0 space-y-2.5">
      {links.map(({ href, label }) => (
        <li key={href}>
          <a
            href={href}
            className={`text-sm text-[#bdc3c7] no-underline ${styles.navLink}`}
          >
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
}
