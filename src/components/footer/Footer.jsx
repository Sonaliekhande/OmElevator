import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>

      {/* Main Footer */}
      <div className={styles.footerContainer}>

        {/* Company */}
        <div className={styles.footerColumn}>
          <h2 className={styles.logo}>
            OM<span>ELEVATORS</span>
          </h2>

          <p className={styles.description}>
            We provide reliable, safe and modern elevator solutions
            designed to make every journey smooth and comfortable.
          </p>

          <div className={styles.socials}>
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="Instagram">◎</a>
            <a href="#" aria-label="LinkedIn">in</a>
            <a href="#" aria-label="YouTube">▶</a>
          </div>
        </div>

        {/* Quick Links */}
        <div className={styles.footerColumn}>
          <h3>Quick Links</h3>

          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Services */}
        <div className={styles.footerColumn}>
          <h3>Our Services</h3>

          <ul>
            <li><a href="/services">Passenger Elevators</a></li>
            <li><a href="/services">Home Elevators</a></li>
            <li><a href="/services">Hospital Elevators</a></li>
            <li><a href="/services">Goods Elevators</a></li>
            <li><a href="/services">Elevator Maintenance</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className={styles.footerColumn}>
          <h3>Contact Us</h3>

          <div className={styles.contactItem}>
            <span>📍</span>
            <p>
              Pune, Maharashtra,<br />
              India
            </p>
          </div>

          <div className={styles.contactItem}>
            <span>📞</span>
            <p>
              <a href="tel:+919876543210">
                +91 98765 43210
              </a>
            </p>
          </div>

          <div className={styles.contactItem}>
            <span>✉</span>
            <p>
              <a href="mailto:info@omelevators.com">
                info@omelevators.com
              </a>
            </p>
          </div>

          <div className={styles.contactItem}>
            <span>🕐</span>
            <p>
              Mon - Sat<br />
              9:00 AM - 6:00 PM
            </p>
          </div>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className={styles.footerBottom}>

        <p>
          © {new Date().getFullYear()} OM Elevators. All Rights Reserved.
        </p>

        <div className={styles.bottomLinks}>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms">Terms & Conditions</a>
        </div>

      </div>

    </footer>
  );
};

export default Footer;