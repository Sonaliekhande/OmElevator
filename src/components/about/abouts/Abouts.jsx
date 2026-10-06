import React from "react";
import styles from "./Abouts.module.css";

const Abouts = () => {
  return (
    <div className={styles.aboutPage}>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}>
          <div className={styles.heroContent}>
            <span className={styles.subtitle}>ABOUT OUR COMPANY</span>

            <h1>
              Moving People.
              <br />
              <span>Moving Possibilities.</span>
            </h1>

            <p>
              We design, manufacture, install and maintain reliable elevator
              solutions that make every journey safe, smooth and comfortable.
            </p>

            <button className={styles.primaryBtn}>
              Discover More
            </button>
          </div>
        </div>
      </section>


      {/* Company Introduction */}
      <section className={styles.companySection}>
        <div className={styles.imageBox}>
          <img
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5"
            alt="Elevator construction"
          />

          <div className={styles.experienceBox}>
            <h2>15+</h2>
            <p>Years of Experience</p>
          </div>
        </div>

        <div className={styles.companyContent}>
          <span className={styles.sectionLabel}>WHO WE ARE</span>

          <h2>
            Engineering Elevators
            <span> Built For Tomorrow</span>
          </h2>

          <p>
            We are a trusted elevator solutions company dedicated to
            designing and delivering innovative vertical transportation
            systems for residential, commercial and industrial buildings.
          </p>

          <p>
            Our team combines advanced technology, engineering expertise and
            customer-focused service to create elevator systems that are
            safe, energy-efficient and built to last.
          </p>

          <div className={styles.features}>
            <div className={styles.feature}>
              <div className={styles.icon}>✓</div>
              <div>
                <h3>Safety First</h3>
                <p>Advanced safety systems for every journey.</p>
              </div>
            </div>

            <div className={styles.feature}>
              <div className={styles.icon}>✓</div>
              <div>
                <h3>Smart Technology</h3>
                <p>Modern technology for smooth performance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Statistics */}
      <section className={styles.statsSection}>
        <div className={styles.stat}>
          <h2>500+</h2>
          <p>Elevators Installed</p>
        </div>

        <div className={styles.stat}>
          <h2>15+</h2>
          <p>Years Experience</p>
        </div>

        <div className={styles.stat}>
          <h2>350+</h2>
          <p>Happy Customers</p>
        </div>

        <div className={styles.stat}>
          <h2>24/7</h2>
          <p>Service Support</p>
        </div>
      </section>


      {/* Mission Vision */}
      <section className={styles.missionSection}>
        <div className={styles.sectionHeading}>
          <span className={styles.sectionLabel}>OUR PURPOSE</span>

          <h2>
            Driven By <span>Innovation & Trust</span>
          </h2>

          <p>
            Our goal is to make vertical transportation safer, smarter and
            more accessible for everyone.
          </p>
        </div>

        <div className={styles.missionGrid}>

          <div className={styles.missionCard}>
            <div className={styles.cardNumber}>01</div>

            <h3>Our Mission</h3>

            <p>
              To provide high-quality elevator solutions that combine safety,
              reliability, innovation and excellent customer service.
            </p>
          </div>

          <div className={styles.missionCard}>
            <div className={styles.cardNumber}>02</div>

            <h3>Our Vision</h3>

            <p>
              To become a leading elevator company known for technology,
              quality, sustainable solutions and customer satisfaction.
            </p>
          </div>

          <div className={styles.missionCard}>
            <div className={styles.cardNumber}>03</div>

            <h3>Our Values</h3>

            <p>
              Integrity, safety, innovation, teamwork and customer satisfaction
              are at the heart of everything we do.
            </p>
          </div>

        </div>
      </section>


      {/* Why Choose Us */}
      <section className={styles.whySection}>

        <div className={styles.whyContent}>
          <span className={styles.sectionLabel}>WHY CHOOSE US</span>

          <h2>
            More Than An Elevator.
            <span> A Complete Experience.</span>
          </h2>

          <p>
            From initial consultation to installation and maintenance, we
            provide complete elevator solutions designed around your needs.
          </p>

          <div className={styles.whyList}>

            <div>
              <span>01</span>
              <h3>Premium Quality</h3>
              <p>
                High-quality components and reliable engineering.
              </p>
            </div>

            <div>
              <span>02</span>
              <h3>Professional Team</h3>
              <p>
                Experienced engineers and trained technicians.
              </p>
            </div>

            <div>
              <span>03</span>
              <h3>After Sales Service</h3>
              <p>
                Reliable maintenance and technical support.
              </p>
            </div>

          </div>
        </div>

        <div className={styles.whyImage}>
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64"
            alt="Modern elevator"
          />
        </div>

      </section>


      {/* CTA */}
      <section className={styles.cta}>
        <div>
          <span>LET'S BUILD THE FUTURE TOGETHER</span>

          <h2>
            Looking For The Right
            <br />
            Elevator Solution?
          </h2>

          <p>
            Talk to our experts today and find the perfect elevator
            solution for your project.
          </p>
        </div>

        <button className={styles.ctaButton}>
          Contact Us →
        </button>
      </section>

    </div>
  );
};

export default Abouts;