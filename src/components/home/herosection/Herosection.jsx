import React, { useState, useEffect, useRef } from "react";
import styles from "./Herosection.module.css";

import img1 from "../../../assets/Liftimages/images.jfif";
import img2 from "../../../assets/Liftimages/images1.jfif";
import img3 from "../../../assets/Liftimages/images.jfif";

const images = [img1, img2, img3];

const Herosection = () => {
  const [index, setIndex] = useState(0);
  const [animateImage, setAnimateImage] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const imageBoxRef = useRef(null);

  // Auto slide images
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimateImage(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % images.length);
      }, 150);
      setTimeout(() => setAnimateImage(false), 650);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Parallax effect on image box
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!imageBoxRef.current) return;
      const rect = imageBoxRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setMousePosition({ x, y });
    };

    const box = imageBoxRef.current;
    if (box) {
      box.addEventListener("mousemove", handleMouseMove);
      box.addEventListener("mouseleave", () => setMousePosition({ x: 0, y: 0 }));
    }
    return () => {
      if (box) {
        box.removeEventListener("mousemove", handleMouseMove);
        box.removeEventListener("mouseleave", () => setMousePosition({ x: 0, y: 0 }));
      }
    };
  }, []);

  return (
    <section className={styles.hero}>
      {/* Animated Background Orbs */}
      <div className={styles.orb1}></div>
      <div className={styles.orb2}></div>
      <div className={styles.orb3}></div>
      <div className={styles.gridPattern}></div>

      {/* LEFT CONTENT */}
      <div className={styles.content}>
        <div className={styles.badge}>
          <span className={styles.badgeDot}></span>
          Next Generation Technology
        </div>
        <h1 className={styles.title}>
          Next Gen{" "}
          <span className={styles.highlight}>
            Lift Solutions
            <svg className={styles.underlineSvg} viewBox="0 0 300 20">
              <path d="M0,10 Q150,0 300,10" stroke="#facc15" fill="none" strokeWidth="2" />
            </svg>
          </span>
          <br /> For Smart Buildings
        </h1>

        <p className={styles.subtitle}>
          High-speed, safe and intelligent elevators for homes, offices
          and industries. Experience the future of vertical mobility.
        </p>

        <div className={styles.buttonGroup}>
          <button className={styles.button}>
            Explore Now 🚀
            <span className={styles.buttonGlow}></span>
          </button>
          <button className={styles.buttonOutline}>
            Watch Demo ▶
          </button>
        </div>

        {/* Stats Section */}
        <div className={styles.stats}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>99.9%</span>
            <span className={styles.statLabel}>Safety Rate</span>
          </div>
          <div className={styles.statDivider}></div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>15k+</span>
            <span className={styles.statLabel}>Installed Units</span>
          </div>
          <div className={styles.statDivider}></div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>45+</span>
            <span className={styles.statLabel}>Countries</span>
          </div>
        </div>
      </div>

      {/* RIGHT IMAGE BOX */}
      <div 
        ref={imageBoxRef}
        className={styles.imageBox}
        style={{
          transform: `perspective(1000px) rotateY(${mousePosition.x * 15}deg) rotateX(${-mousePosition.y * 15}deg)`
        }}
      >
        <div className={styles.imageGlow}></div>
        <div className={styles.imageWrapper}>
          <img 
            src={images[index]} 
            alt={`Lift ${index + 1}`}
            className={`${styles.slideImage} ${animateImage ? styles.imageAnimate : ""}`}
          />
        </div>
        
        {/* Image Indicator Dots */}
        <div className={styles.dots}>
          {images.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === index ? styles.dotActive : ""}`}
              onClick={() => {
                setAnimateImage(true);
                setTimeout(() => setIndex(i), 150);
                setTimeout(() => setAnimateImage(false), 650);
              }}
            />
          ))}
        </div>

        {/* Floating tech badge */}
        <div className={styles.techBadge}>
          <span>⚡ AI-Powered</span>
        </div>
      </div>
    </section>
  );
};

export default Herosection;