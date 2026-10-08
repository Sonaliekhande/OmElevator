// import React from "react";
// import styles from "./Abouts.module.css";

// const Abouts = () => {
//   return (
//     <div className={styles.aboutPage}>

//       {/* Hero Section */}
//       <section className={styles.hero}>
//         <div className={styles.heroOverlay}>
//           <div className={styles.heroContent}>
//             <span className={styles.subtitle}>ABOUT OUR COMPANY</span>

//             <h1>
//               Moving People.
//               <br />
//               <span>Moving Possibilities.</span>
//             </h1>

//             <p>
//               We design, manufacture, install and maintain reliable elevator
//               solutions that make every journey safe, smooth and comfortable.
//             </p>

//             <button className={styles.primaryBtn}>
//               Discover More
//             </button>
//           </div>
//         </div>
//       </section>


//       {/* Company Introduction */}
//       <section className={styles.companySection}>
//         <div className={styles.imageBox}>
//           <img
//             src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5"
//             alt="Elevator construction"
//           />

//           <div className={styles.experienceBox}>
//             <h2>15+</h2>
//             <p>Years of Experience</p>
//           </div>
//         </div>

//         <div className={styles.companyContent}>
//           <span className={styles.sectionLabel}>WHO WE ARE</span>

//           <h2>
//             Engineering Elevators
//             <span> Built For Tomorrow</span>
//           </h2>

//           <p>
//             We are a trusted elevator solutions company dedicated to
//             designing and delivering innovative vertical transportation
//             systems for residential, commercial and industrial buildings.
//           </p>

//           <p>
//             Our team combines advanced technology, engineering expertise and
//             customer-focused service to create elevator systems that are
//             safe, energy-efficient and built to last.
//           </p>

//           <div className={styles.features}>
//             <div className={styles.feature}>
//               <div className={styles.icon}>✓</div>
//               <div>
//                 <h3>Safety First</h3>
//                 <p>Advanced safety systems for every journey.</p>
//               </div>
//             </div>

//             <div className={styles.feature}>
//               <div className={styles.icon}>✓</div>
//               <div>
//                 <h3>Smart Technology</h3>
//                 <p>Modern technology for smooth performance.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>


//       {/* Statistics */}
//       <section className={styles.statsSection}>
//         <div className={styles.stat}>
//           <h2>500+</h2>
//           <p>Elevators Installed</p>
//         </div>

//         <div className={styles.stat}>
//           <h2>15+</h2>
//           <p>Years Experience</p>
//         </div>

//         <div className={styles.stat}>
//           <h2>350+</h2>
//           <p>Happy Customers</p>
//         </div>

//         <div className={styles.stat}>
//           <h2>24/7</h2>
//           <p>Service Support</p>
//         </div>
//       </section>


//       {/* Mission Vision */}
//       <section className={styles.missionSection}>
//         <div className={styles.sectionHeading}>
//           <span className={styles.sectionLabel}>OUR PURPOSE</span>

//           <h2>
//             Driven By <span>Innovation & Trust</span>
//           </h2>

//           <p>
//             Our goal is to make vertical transportation safer, smarter and
//             more accessible for everyone.
//           </p>
//         </div>

//         <div className={styles.missionGrid}>

//           <div className={styles.missionCard}>
//             <div className={styles.cardNumber}>01</div>

//             <h3>Our Mission</h3>

//             <p>
//               To provide high-quality elevator solutions that combine safety,
//               reliability, innovation and excellent customer service.
//             </p>
//           </div>

//           <div className={styles.missionCard}>
//             <div className={styles.cardNumber}>02</div>

//             <h3>Our Vision</h3>

//             <p>
//               To become a leading elevator company known for technology,
//               quality, sustainable solutions and customer satisfaction.
//             </p>
//           </div>

//           <div className={styles.missionCard}>
//             <div className={styles.cardNumber}>03</div>

//             <h3>Our Values</h3>

//             <p>
//               Integrity, safety, innovation, teamwork and customer satisfaction
//               are at the heart of everything we do.
//             </p>
//           </div>

//         </div>
//       </section>


//       {/* Why Choose Us */}
//       <section className={styles.whySection}>

//         <div className={styles.whyContent}>
//           <span className={styles.sectionLabel}>WHY CHOOSE US</span>

//           <h2>
//             More Than An Elevator.
//             <span> A Complete Experience.</span>
//           </h2>

//           <p>
//             From initial consultation to installation and maintenance, we
//             provide complete elevator solutions designed around your needs.
//           </p>

//           <div className={styles.whyList}>

//             <div>
//               <span>01</span>
//               <h3>Premium Quality</h3>
//               <p>
//                 High-quality components and reliable engineering.
//               </p>
//             </div>

//             <div>
//               <span>02</span>
//               <h3>Professional Team</h3>
//               <p>
//                 Experienced engineers and trained technicians.
//               </p>
//             </div>

//             <div>
//               <span>03</span>
//               <h3>After Sales Service</h3>
//               <p>
//                 Reliable maintenance and technical support.
//               </p>
//             </div>

//           </div>
//         </div>

//         <div className={styles.whyImage}>
//           <img
//             src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64"
//             alt="Modern elevator"
//           />
//         </div>

//       </section>


//       {/* CTA */}
//       <section className={styles.cta}>
//         <div>
//           <span>LET'S BUILD THE FUTURE TOGETHER</span>

//           <h2>
//             Looking For The Right
//             <br />
//             Elevator Solution?
//           </h2>

//           <p>
//             Talk to our experts today and find the perfect elevator
//             solution for your project.
//           </p>
//         </div>

//         <button className={styles.ctaButton}>
//           Contact Us →
//         </button>
//       </section>

//     </div>
//   );
// };

// export default Abouts;


import React from "react";
import styles from "./Abouts.module.css";

const Abouts = () => {
  return (
    <div className={styles.aboutPage}>

      {/* =========================
          HERO SECTION
      ========================= */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>

        <div className={styles.heroContent}>
          <span className={styles.heroTag}>ABOUT OM ELEVATORS</span>

          <h1>
            Moving People.
            <br />
            <span>Moving Progress.</span>
          </h1>

          <p>
            Reliable elevator solutions designed to make every journey
            safe, smooth and comfortable.
          </p>

          <div className={styles.breadcrumb}>
            <span>Home</span>
            <span>/</span>
            <strong>About Us</strong>
          </div>
        </div>
      </section>

      {/* =========================
          ABOUT COMPANY
      ========================= */}
      <section className={styles.aboutSection}>
        <div className={styles.container}>

          <div className={styles.aboutGrid}>

            {/* Image */}
            <div className={styles.aboutImageWrapper}>
              <div className={styles.imageBox}>
                <div className={styles.imagePlaceholder}>
                  <span>OM</span>
                  <p>ELEVATORS</p>
                </div>
              </div>

              <div className={styles.experienceBox}>
                <strong>10+</strong>
                <span>Years of<br />Experience</span>
              </div>
            </div>

            {/* Content */}
            <div className={styles.aboutContent}>

              <span className={styles.sectionTag}>
                WHO WE ARE
              </span>

              <h2>
                Your Trusted Partner in
                <span> Vertical Transportation</span>
              </h2>

              <p>
                OM Elevators is committed to providing high-quality,
                reliable and innovative elevator solutions for residential,
                commercial, industrial and institutional buildings.
              </p>

              <p>
                We combine modern technology, skilled professionals and
                customer-focused service to deliver elevators that provide
                excellent performance, safety and long-term reliability.
              </p>

              <div className={styles.aboutFeatures}>

                <div className={styles.feature}>
                  <div className={styles.featureIcon}>✓</div>

                  <div>
                    <h3>Safety First</h3>
                    <p>
                      Safety is at the heart of everything we do.
                    </p>
                  </div>
                </div>

                <div className={styles.feature}>
                  <div className={styles.featureIcon}>✓</div>

                  <div>
                    <h3>Quality Products</h3>
                    <p>
                      Reliable elevator systems built for performance.
                    </p>
                  </div>
                </div>

                <div className={styles.feature}>
                  <div className={styles.featureIcon}>✓</div>

                  <div>
                    <h3>Expert Support</h3>
                    <p>
                      Professional installation and maintenance.
                    </p>
                  </div>
                </div>

                <div className={styles.feature}>
                  <div className={styles.featureIcon}>✓</div>

                  <div>
                    <h3>Customer Focused</h3>
                    <p>
                      Solutions designed around your requirements.
                    </p>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================
          STATS
      ========================= */}
      <section className={styles.statsSection}>
        <div className={styles.container}>

          <div className={styles.statsGrid}>

            <div className={styles.statItem}>
              <strong>10+</strong>
              <span>Years Experience</span>
            </div>

            <div className={styles.statItem}>
              <strong>500+</strong>
              <span>Elevators Installed</span>
            </div>

            <div className={styles.statItem}>
              <strong>450+</strong>
              <span>Happy Customers</span>
            </div>

            <div className={styles.statItem}>
              <strong>24/7</strong>
              <span>Service Support</span>
            </div>

          </div>

        </div>
      </section>

      {/* =========================
          MISSION & VISION
      ========================= */}
      <section className={styles.missionSection}>
        <div className={styles.container}>

          <div className={styles.sectionHeading}>
            <span className={styles.sectionTag}>
              OUR PURPOSE
            </span>

            <h2>
              Driven By <span>Purpose</span>
            </h2>

            <p>
              Our goal is to create safer, smarter and more comfortable
              vertical transportation solutions.
            </p>
          </div>

          <div className={styles.missionGrid}>

            {/* Mission */}
            <div className={styles.missionCard}>

              <div className={styles.missionIcon}>
                🎯
              </div>

              <div>
                <h3>Our Mission</h3>

                <p>
                  To provide dependable elevator solutions that combine
                  advanced technology, quality engineering and excellent
                  customer service.
                </p>
              </div>

            </div>

            {/* Vision */}
            <div className={`${styles.missionCard} ${styles.visionCard}`}>

              <div className={styles.missionIcon}>
                👁
              </div>

              <div>
                <h3>Our Vision</h3>

                <p>
                  To become a trusted name in the elevator industry by
                  continuously improving technology, quality and customer
                  experience.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================
          WHY CHOOSE US
      ========================= */}
      <section className={styles.whySection}>
        <div className={styles.container}>

          <div className={styles.sectionHeading}>
            <span className={styles.sectionTag}>
              WHY OM ELEVATORS
            </span>

            <h2>
              Why Choose <span>Us?</span>
            </h2>

            <p>
              We don't just install elevators. We build long-term
              relationships with our customers.
            </p>
          </div>

          <div className={styles.whyGrid}>

            <div className={styles.whyCard}>
              <div className={styles.whyNumber}>01</div>

              <h3>Advanced Technology</h3>

              <p>
                We use modern elevator technology to provide efficient,
                comfortable and reliable transportation.
              </p>
            </div>

            <div className={styles.whyCard}>
              <div className={styles.whyNumber}>02</div>

              <h3>Experienced Team</h3>

              <p>
                Our skilled team handles installation, maintenance and
                service with professional expertise.
              </p>
            </div>

            <div className={styles.whyCard}>
              <div className={styles.whyNumber}>03</div>

              <h3>Safety & Quality</h3>

              <p>
                Every solution is designed with safety, durability and
                performance as our highest priorities.
              </p>
            </div>

            <div className={styles.whyCard}>
              <div className={styles.whyNumber}>04</div>

              <h3>After-Sales Service</h3>

              <p>
                Our support continues even after installation with
                maintenance and reliable service assistance.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* =========================
          VALUES
      ========================= */}
      <section className={styles.valuesSection}>
        <div className={styles.container}>

          <div className={styles.valuesGrid}>

            <div className={styles.valuesContent}>

              <span className={styles.sectionTag}>
                OUR VALUES
              </span>

              <h2>
                What We <span>Stand For</span>
              </h2>

              <p>
                Our values guide every decision we make and every elevator
                solution we deliver.
              </p>

              <div className={styles.valueList}>

                <div className={styles.valueItem}>
                  <span>01</span>
                  <div>
                    <h3>Integrity</h3>
                    <p>
                      We believe in honest and transparent business.
                    </p>
                  </div>
                </div>

                <div className={styles.valueItem}>
                  <span>02</span>
                  <div>
                    <h3>Innovation</h3>
                    <p>
                      We continuously look for smarter solutions.
                    </p>
                  </div>
                </div>

                <div className={styles.valueItem}>
                  <span>03</span>
                  <div>
                    <h3>Excellence</h3>
                    <p>
                      We always aim for the highest quality standards.
                    </p>
                  </div>
                </div>

                <div className={styles.valueItem}>
                  <span>04</span>
                  <div>
                    <h3>Customer Satisfaction</h3>
                    <p>
                      Your satisfaction is the measure of our success.
                    </p>
                  </div>
                </div>

              </div>

            </div>

            <div className={styles.valuesVisual}>

              <div className={styles.visualCircle}>
                <div>
                  <strong>OM</strong>
                  <span>ELEVATORS</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================
          PROCESS
      ========================= */}
      <section className={styles.processSection}>
        <div className={styles.container}>

          <div className={styles.sectionHeading}>
            <span className={styles.sectionTag}>
              HOW WE WORK
            </span>

            <h2>
              Simple Process.
              <span> Reliable Results.</span>
            </h2>
          </div>

          <div className={styles.processGrid}>

            <div className={styles.processItem}>
              <div className={styles.processNumber}>01</div>
              <h3>Consultation</h3>
              <p>
                We understand your building and elevator requirements.
              </p>
            </div>

            <div className={styles.processItem}>
              <div className={styles.processNumber}>02</div>
              <h3>Planning</h3>
              <p>
                Our team creates the right elevator solution for your needs.
              </p>
            </div>

            <div className={styles.processItem}>
              <div className={styles.processNumber}>03</div>
              <h3>Installation</h3>
              <p>
                Professional installation with attention to safety and quality.
              </p>
            </div>

            <div className={styles.processItem}>
              <div className={styles.processNumber}>04</div>
              <h3>Support</h3>
              <p>
                Continued maintenance and service after installation.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* =========================
          CTA
      ========================= */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>

          <div className={styles.ctaContent}>

            <span>READY TO GET STARTED?</span>

            <h2>
              Let's Build a Better
              <br />
              <strong>Vertical Future Together.</strong>
            </h2>

            <p>
              Talk to our experts about your elevator requirements today.
            </p>

            <div className={styles.ctaButtons}>

              <a
                href="/contact"
                className={styles.primaryButton}
              >
                Get a Free Quote
                <span>→</span>
              </a>

              <a
                href="tel:+919876543210"
                className={styles.secondaryButton}
              >
                Call Us
              </a>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

export default Abouts;