// import React, { useState, useEffect, useRef } from "react";
// import styles from "./Herosection.module.css";

// import img1 from "../../../assets/Liftimages/images.jfif";
// import img2 from "../../../assets/Liftimages/images1.jfif";
// import img3 from "../../../assets/Liftimages/images.jfif";

// const images = [img1, img2, img3];

// const Herosection = () => {
//   const [index, setIndex] = useState(0);
//   const [animateImage, setAnimateImage] = useState(false);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const imageBoxRef = useRef(null);

//   // Auto slide images
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setAnimateImage(true);
//       setTimeout(() => {
//         setIndex((prev) => (prev + 1) % images.length);
//       }, 150);
//       setTimeout(() => setAnimateImage(false), 650);
//     }, 4000);

//     return () => clearInterval(interval);
//   }, []);

//   // Parallax effect on image box
//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       if (!imageBoxRef.current) return;
//       const rect = imageBoxRef.current.getBoundingClientRect();
//       const x = (e.clientX - rect.left) / rect.width - 0.5;
//       const y = (e.clientY - rect.top) / rect.height - 0.5;
//       setMousePosition({ x, y });
//     };

//     const box = imageBoxRef.current;
//     if (box) {
//       box.addEventListener("mousemove", handleMouseMove);
//       box.addEventListener("mouseleave", () => setMousePosition({ x: 0, y: 0 }));
//     }
//     return () => {
//       if (box) {
//         box.removeEventListener("mousemove", handleMouseMove);
//         box.removeEventListener("mouseleave", () => setMousePosition({ x: 0, y: 0 }));
//       }
//     };
//   }, []);

//   return (
//     <section className={styles.hero}>
//       {/* Animated Background Orbs */}
//       <div className={styles.orb1}></div>
//       <div className={styles.orb2}></div>
//       <div className={styles.orb3}></div>
//       <div className={styles.gridPattern}></div>

//       {/* LEFT CONTENT */}
//       <div className={styles.content}>
//         <div className={styles.badge}>
//           <span className={styles.badgeDot}></span>
//           Next Generation Technology
//         </div>
//         <h1 className={styles.title}>
//           Next Gen{" "}
//           <span className={styles.highlight}>
//             Lift Solutions
//             <svg className={styles.underlineSvg} viewBox="0 0 300 20">
//               <path d="M0,10 Q150,0 300,10" stroke="#facc15" fill="none" strokeWidth="2" />
//             </svg>
//           </span>
//           <br /> For Smart Buildings
//         </h1>

//         <p className={styles.subtitle}>
//           High-speed, safe and intelligent elevators for homes, offices
//           and industries. Experience the future of vertical mobility.
//         </p>

//         <div className={styles.buttonGroup}>
//           <button className={styles.button}>
//             Explore Now 🚀
//             <span className={styles.buttonGlow}></span>
//           </button>
//           <button className={styles.buttonOutline}>
//             Watch Demo ▶
//           </button>
//         </div>

//         {/* Stats Section */}
//         <div className={styles.stats}>
//           <div className={styles.statItem}>
//             <span className={styles.statNumber}>99.9%</span>
//             <span className={styles.statLabel}>Safety Rate</span>
//           </div>
//           <div className={styles.statDivider}></div>
//           <div className={styles.statItem}>
//             <span className={styles.statNumber}>15k+</span>
//             <span className={styles.statLabel}>Installed Units</span>
//           </div>
//           <div className={styles.statDivider}></div>
//           <div className={styles.statItem}>
//             <span className={styles.statNumber}>45+</span>
//             <span className={styles.statLabel}>Countries</span>
//           </div>
//         </div>
//       </div>

//       {/* RIGHT IMAGE BOX */}
//       <div 
//         ref={imageBoxRef}
//         className={styles.imageBox}
//         style={{
//           transform: `perspective(1000px) rotateY(${mousePosition.x * 15}deg) rotateX(${-mousePosition.y * 15}deg)`
//         }}
//       >
//         <div className={styles.imageGlow}></div>
//         <div className={styles.imageWrapper}>
//           <img 
//             src={images[index]} 
//             alt={`Lift ${index + 1}`}
//             className={`${styles.slideImage} ${animateImage ? styles.imageAnimate : ""}`}
//           />
//         </div>
        
//         {/* Image Indicator Dots */}
//         <div className={styles.dots}>
//           {images.map((_, i) => (
//             <button
//               key={i}
//               className={`${styles.dot} ${i === index ? styles.dotActive : ""}`}
//               onClick={() => {
//                 setAnimateImage(true);
//                 setTimeout(() => setIndex(i), 150);
//                 setTimeout(() => setAnimateImage(false), 650);
//               }}
//             />
//           ))}
//         </div>

//         {/* Floating tech badge */}
//         <div className={styles.techBadge}>
//           <span>⚡ AI-Powered</span>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Herosection;













import React from "react";
import styles from "./Herosection.module.css";

import img1 from "../../../assets/Liftimages/images.png";
import img2 from "../../../assets/Liftimages/images1.png";
import img3 from "../../../assets/Liftimages/images2.png";

const Herosection = () => {
  return (
    <main className={styles.home}>

      {/* ================= HERO ================= */}

      <section className={styles.hero}>

        <div className={styles.heroLeft}>

          <div className={styles.tag}>
            <span></span>
            GOVT. APPROVED LIFT INSTALLATION
          </div>

          <h1>
            Elevating
            <br />
            <span>Life Higher.</span>
          </h1>

          <p className={styles.heroText}>
            Safe, smart and reliable elevator solutions designed
            for modern homes, businesses, hospitals and industries.
          </p>

          <div className={styles.heroButtons}>

            <button className={styles.primaryBtn}>
              Explore Our Lifts
              <span>↗</span>
            </button>

            <button className={styles.secondaryBtn}>
              Get Free Quote
            </button>

          </div>

          <div className={styles.heroBottom}>

            <div>
              <strong>20+</strong>
              <span>Years Experience</span>
            </div>

            <div>
              <strong>500+</strong>
              <span>Installations</span>
            </div>

            <div>
              <strong>24/7</strong>
              <span>Support</span>
            </div>

          </div>

        </div>


        {/* HERO IMAGE */}

        <div className={styles.heroRight}>

          <div className={styles.heroImageWrapper}>

            <img
              src={img1}
              alt="OM Elevators modern elevator"
            />

            <div className={styles.imageNumber}>
              01
            </div>

          </div>

          <div className={styles.heroCard}>

            <div className={styles.cardIcon}>
              ↑
            </div>

            <div>
              <h4>Premium Lift Solutions</h4>
              <p>Safety • Quality • Technology</p>
            </div>

          </div>

        </div>

      </section>


      {/* ================= TRUST BAR ================= */}

      <section className={styles.trustBar}>

        <div>
          <span>✓</span>
          Licensed Electrical Contractors
        </div>

        <div>
          <span>✓</span>
          Professional Installation
        </div>

        <div>
          <span>✓</span>
          Expert Maintenance
        </div>

        <div>
          <span>✓</span>
          Reliable Support
        </div>

      </section>


      {/* ================= SERVICES ================= */}

      <section className={styles.services}>

        <div className={styles.sectionHeading}>

          <div className={styles.sectionTag}>
            WHAT WE DO
          </div>

          <h2>
            Complete
            <span> Elevator Solutions</span>
          </h2>

          <p>
            From installation to maintenance, OM Elevators provides
            complete solutions for every vertical transportation need.
          </p>

        </div>


        <div className={styles.serviceGrid}>

          <article className={styles.serviceCard}>

            <div className={styles.serviceTop}>
              <span>01</span>
              <div>↗</div>
            </div>

            <div className={styles.serviceIcon}>
              ⇅
            </div>

            <h3>Passenger Lifts</h3>

            <p>
              Comfortable, stylish and dependable elevators for
              residential and commercial buildings.
            </p>

          </article>


          <article className={styles.serviceCard}>

            <div className={styles.serviceTop}>
              <span>02</span>
              <div>↗</div>
            </div>

            <div className={styles.serviceIcon}>
              +
            </div>

            <h3>Hospital Lifts</h3>

            <p>
              Spacious and safe elevator solutions designed
              specifically for healthcare facilities.
            </p>

          </article>


          <article className={styles.serviceCard}>

            <div className={styles.serviceTop}>
              <span>03</span>
              <div>↗</div>
            </div>

            <div className={styles.serviceIcon}>
              ▣
            </div>

            <h3>Goods & Industrial</h3>

            <p>
              Heavy-duty elevator systems designed for factories,
              warehouses and industrial applications.
            </p>

          </article>


          <article className={styles.serviceCard}>

            <div className={styles.serviceTop}>
              <span>04</span>
              <div>↗</div>
            </div>

            <div className={styles.serviceIcon}>
              ⚙
            </div>

            <h3>Repair & Maintenance</h3>

            <p>
              Professional repair, renovation and regular maintenance
              to keep your elevators running smoothly.
            </p>

          </article>

        </div>

      </section>


      {/* ================= ABOUT ================= */}

      <section className={styles.about}>

        <div className={styles.aboutImages}>

          <div className={styles.aboutMainImage}>
            <img
              src={img2}
              alt="OM Elevators installation"
            />
          </div>

          <div className={styles.aboutSmallImage}>
            <img
              src={img3}
              alt="OM Elevators lift"
            />
          </div>

          <div className={styles.experienceBox}>

            <strong>20+</strong>

            <span>
              Years of
              <br />
              Excellence
            </span>

          </div>

        </div>


        <div className={styles.aboutContent}>

          <div className={styles.sectionTag}>
            ABOUT OM ELEVATORS
          </div>

          <h2>
            Moving People.
            <br />
            <span>Building Trust.</span>
          </h2>

          <p>
            OM Elevators is a professional elevator installation
            and maintenance company focused on providing safe,
            reliable and modern vertical transportation solutions.
          </p>

          <p>
            From passenger elevators to hospital, goods and
            industrial lifts, we deliver solutions designed
            around your building and your requirements.
          </p>


          <div className={styles.aboutPoints}>

            <div>
              <span>01</span>
              <div>
                <h4>Safety First</h4>
                <p>
                  Every installation follows safety-focused practices.
                </p>
              </div>
            </div>

            <div>
              <span>02</span>
              <div>
                <h4>Experienced Team</h4>
                <p>
                  Skilled professionals for installation and service.
                </p>
              </div>
            </div>

            <div>
              <span>03</span>
              <div>
                <h4>Long-Term Support</h4>
                <p>
                  Reliable maintenance after installation.
                </p>
              </div>
            </div>

          </div>

        </div>

      </section>


      {/* ================= LIFT PRODUCTS ================= */}

      <section className={styles.products}>

        <div className={styles.sectionHeading}>

          <div className={styles.sectionTag}>
            OUR ELEVATORS
          </div>

          <h2>
            Designed For
            <span> Every Need</span>
          </h2>

          <p>
            Explore elevator solutions combining functionality,
            durability and modern design.
          </p>

        </div>


        <div className={styles.productGrid}>

          <div className={styles.productCard}>

            <img
              src={img1}
              alt="Passenger Elevator"
            />

            <div className={styles.productInfo}>

              <span>01</span>

              <div>
                <h3>Passenger Lift</h3>
                <p>Comfortable & Elegant</p>
              </div>

              <b>↗</b>

            </div>

          </div>


          <div className={styles.productCard}>

            <img
              src={img2}
              alt="Capsule Elevator"
            />

            <div className={styles.productInfo}>

              <span>02</span>

              <div>
                <h3>Capsule Lift</h3>
                <p>Modern & Stylish</p>
              </div>

              <b>↗</b>

            </div>

          </div>


          <div className={styles.productCard}>

            <img
              src={img3}
              alt="Industrial Elevator"
            />

            <div className={styles.productInfo}>

              <span>03</span>

              <div>
                <h3>Industrial Lift</h3>
                <p>Powerful & Reliable</p>
              </div>

              <b>↗</b>

            </div>

          </div>

        </div>

      </section>


      {/* ================= WHY US ================= */}

      <section className={styles.whyUs}>

        <div className={styles.whyLeft}>

          <div className={styles.sectionTag}>
            WHY OM ELEVATORS
          </div>

          <h2>
            Built Around
            <br />
            <span>Your Safety.</span>
          </h2>

          <p>
            We combine quality products, skilled professionals
            and dependable service to create elevator systems
            that customers can trust.
          </p>

          <button className={styles.darkBtn}>
            Why Choose Us
            <span>↗</span>
          </button>

        </div>


        <div className={styles.whyGrid}>

          <div className={styles.whyItem}>

            <strong>01</strong>

            <div className={styles.whyIcon}>
              🛡
            </div>

            <h3>Safety</h3>

            <p>
              Safety-focused elevator installation and service.
            </p>

          </div>


          <div className={styles.whyItem}>

            <strong>02</strong>

            <div className={styles.whyIcon}>
              ⚙
            </div>

            <h3>Quality</h3>

            <p>
              Reliable components and professional workmanship.
            </p>

          </div>


          <div className={styles.whyItem}>

            <strong>03</strong>

            <div className={styles.whyIcon}>
              ⚡
            </div>

            <h3>Fast Service</h3>

            <p>
              Quick response for maintenance and repairs.
            </p>

          </div>


          <div className={styles.whyItem}>

            <strong>04</strong>

            <div className={styles.whyIcon}>
              ★
            </div>

            <h3>Experience</h3>

            <p>
              Years of practical elevator industry experience.
            </p>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}

      <section className={styles.cta}>

        <div>

          <span>READY TO MOVE FORWARD?</span>

          <h2>
            Let's Build Your
            <br />
            <strong>Perfect Elevator.</strong>
          </h2>

          <p>
            Talk to our team about your elevator installation,
            renovation or maintenance requirements.
          </p>

        </div>


        <div className={styles.ctaButtons}>

          <a href="tel:+919821297469">
            Call Us
            <span>↗</span>
          </a>

          <a href="mailto:omelevators@gmail.com">
            Get a Quote
            <span>↗</span>
          </a>

        </div>

      </section>

    </main>
  );
};

export default Herosection;