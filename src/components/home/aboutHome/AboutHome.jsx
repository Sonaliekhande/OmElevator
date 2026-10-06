import React from "react";
import styles from "./AboutHome.module.css";

// Replace this import with your actual image path
import aboutImage from "../../../assets/Liftimages/images.jfif";

const AboutHome = () => {
  return (
    <div className={styles.about}>
      <div className={styles.container}>
        
        {/* LEFT CONTENT */}
        <div className={styles.textContent}>
          <h1 className={styles.title}>
            About <span className={styles.highlight}>OM Elevators</span>
          </h1>
          
          <p className={styles.description}>
            OM Elevators is a leading provider of modern elevator solutions, 
            delivering safe, reliable, and high-quality lift systems for 
            residential, commercial, and industrial buildings. With years 
            of experience in the industry, we specialize in installation, 
            maintenance, and repair of elevators with advanced technology.
          </p>

          <p className={styles.description}>
            Our mission is to enhance vertical transportation with innovative 
            designs, energy-efficient systems, and cutting-edge safety features. 
            We are committed to providing customized elevator solutions that 
            meet the unique requirements of every client, ensuring comfort, 
            convenience, and long-term performance.
          </p>

          <p className={styles.description}>
            At OM Elevators, we focus on quality workmanship, timely project 
            delivery, and exceptional customer service. Our team of skilled 
            engineers and technicians works closely with clients to ensure 
            smooth operation and minimal downtime. From high-rise buildings 
            to small residential projects, we bring excellence and trust in 
            every lift we install.
          </p>

          <p className={styles.description}>
            We believe in continuous improvement and adopt the latest technologies 
            to deliver smarter and more efficient elevator systems. Your safety 
            and satisfaction are our top priorities, making us a trusted name 
            in the elevator industry.
          </p>

          {/* Optional CTA Button */}
          <button className={styles.ctaButton}>
            Learn More →
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className={styles.imageWrapper}>
          <div className={styles.imageCard}>
            <img 
              src={aboutImage} 
              alt="OM Elevators Modern Lift" 
              className={styles.aboutImage}
            />
            <div className={styles.imageOverlay}></div>
            <div className={styles.imageCaption}>
              <span>✨ Smart & Safe Lifts</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutHome;