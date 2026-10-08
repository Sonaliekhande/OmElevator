// import React, { useState } from "react";
// import styles from "./ServiceHome.module.css";
// import servicesData from "../../../data/servicesData";   // ✅ import data

// const ServiceHome = () => {
//   const [showAll, setShowAll] = useState(false);

//   const visibleServices = showAll
//     ? servicesData
//     : servicesData.slice(0, 6);

//   return (
//     <div className={styles.services}>
//       <h1 className={styles.title}>Key Services</h1>

//       <div className={styles.grid}>
//         {visibleServices.map((service) => (
//           <div className={styles.card} key={service.id}>
//             <img src={service.img} alt={service.name} />
//             <p>{service.name}</p>
//           </div>
//         ))}
//       </div>

//       <div className={styles.btnContainer}>
//         <button onClick={() => setShowAll(!showAll)}>
//           {showAll ? "Show Less" : "More Services"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ServiceHome;




import React from "react";
import styles from "./ServiceHome.module.css";

import passengerImg from "../../../assets/Liftimages/images2.png";
import homeImg from "../../../assets/Liftimages/images1.png";
import hospitalImg from "../../../assets/Liftimages/images2.png";
import goodsImg from "../../../assets/Liftimages/images1.png";
const services = [
  {
    id: 1,
    number: "01",
    title: "Passenger Elevators",
    shortTitle: "Passenger Lift",
    description:
      "Safe, smooth and efficient passenger elevators designed for residential, commercial and high-rise buildings.",
    image: passengerImg,
    features: [
      "Smooth & quiet operation",
      "Modern cabin designs",
      "Energy efficient technology",
      "Advanced safety systems",
    ],
  },
  {
    id: 2,
    number: "02",
    title: "Home Elevators",
    shortTitle: "Home Lift",
    description:
      "Premium home elevator solutions that combine comfort, elegance and safety for modern homes and villas.",
    image: homeImg,
    features: [
      "Compact installation",
      "Luxury cabin options",
      "Low power consumption",
      "Easy operation",
    ],
  },
  {
    id: 3,
    number: "03",
    title: "Hospital Elevators",
    shortTitle: "Hospital Lift",
    description:
      "Specially designed elevators for hospitals and healthcare facilities with spacious cabins and reliable performance.",
    image: hospitalImg,
    features: [
      "Large cabin capacity",
      "Smooth starting & stopping",
      "Stretcher friendly design",
      "High safety standards",
    ],
  },
  {
    id: 4,
    number: "04",
    title: "Goods Elevators",
    shortTitle: "Goods Lift",
    description:
      "Heavy-duty goods elevators engineered to transport materials, equipment and products safely and efficiently.",
    image: goodsImg,
    features: [
      "Heavy load capacity",
      "Strong construction",
      "Industrial performance",
      "Durable components",
    ],
  },
];

const additionalServices = [
  {
    icon: "🔧",
    title: "Installation",
    description:
      "Professional elevator installation with accurate planning, testing and commissioning.",
  },
  {
    icon: "🛠️",
    title: "Maintenance & AMC",
    description:
      "Regular preventive maintenance and AMC services to keep your elevator safe and reliable.",
  },
  {
    icon: "⚙️",
    title: "Modernization",
    description:
      "Upgrade existing elevators with modern technology, safety systems and improved performance.",
  },
  {
    icon: "🚨",
    title: "Repair & Breakdown",
    description:
      "Quick and professional breakdown support to reduce downtime and restore elevator operation.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Site Inspection",
    description:
      "Our experts inspect your building and understand your elevator requirements.",
  },
  {
    number: "02",
    title: "Planning & Design",
    description:
      "We create the right elevator solution based on building structure and usage.",
  },
  {
    number: "03",
    title: "Installation",
    description:
      "Our trained team installs and configures the elevator using quality components.",
  },
  {
    number: "04",
    title: "Testing & Handover",
    description:
      "Every system is thoroughly tested before final commissioning and handover.",
  },
];

const ServiceHome = () => {
  return (
    <div className={styles.servicesPage}>

      {/* =========================================
          HERO
      ========================================= */}

      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>

        <div className={styles.heroContent}>
          <span className={styles.heroTag}>
            OUR SERVICES
          </span>

          <h1>
            Complete Elevator
            <span> Solutions</span>
          </h1>

          <p>
            From installation to maintenance, OM Elevators provides
            complete elevator solutions designed around safety,
            performance and reliability.
          </p>

          <div className={styles.breadcrumb}>
            <a href="/">Home</a>
            <span>›</span>
            <span>Services</span>
          </div>
        </div>
      </section>

      {/* =========================================
          INTRODUCTION
      ========================================= */}

      <section className={styles.introSection}>
        <div className={styles.container}>

          <div className={styles.sectionHeading}>
            <span>WHAT WE OFFER</span>

            <h2>
              Professional Elevator
              <strong> Services</strong>
            </h2>

            <p>
              We deliver dependable elevator services for residential,
              commercial, industrial and healthcare buildings. Our
              experienced team focuses on quality installation,
              reliable maintenance and long-term elevator performance.
            </p>
          </div>

        </div>
      </section>

      {/* =========================================
          MAIN SERVICES
      ========================================= */}

      <section className={styles.mainServices}>
        <div className={styles.container}>

          <div className={styles.serviceGrid}>

            {services.map((service, index) => (
              <article
                className={`${styles.serviceCard} ${
                  index % 2 !== 0 ? styles.reverseCard : ""
                }`}
                key={service.id}
              >

                <div className={styles.serviceImage}>
                  <img
                    src={service.image}
                    alt={service.title}
                  />

                  <span className={styles.serviceNumber}>
                    {service.number}
                  </span>
                </div>

                <div className={styles.serviceContent}>

                  <span className={styles.serviceSmallTitle}>
                    {service.shortTitle}
                  </span>

                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                  <ul>
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>
                        <span>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="/contact"
                    className={styles.serviceButton}
                  >
                    Get a Quote
                    <span>→</span>
                  </a>

                </div>

              </article>
            ))}

          </div>

        </div>
      </section>

      {/* =========================================
          ADDITIONAL SERVICES
      ========================================= */}

      <section className={styles.additionalSection}>
        <div className={styles.container}>

          <div className={styles.sectionHeading}>
            <span>MORE SERVICES</span>

            <h2>
              Complete Support
              <strong> For Your Elevator</strong>
            </h2>

            <p>
              Our relationship with customers doesn't end after
              installation. We provide complete after-sales support
              throughout the life of your elevator.
            </p>
          </div>

          <div className={styles.additionalGrid}>

            {additionalServices.map((service, index) => (
              <div
                className={styles.additionalCard}
                key={index}
              >
                <div className={styles.serviceIcon}>
                  {service.icon}
                </div>

                <span className={styles.cardNumber}>
                  0{index + 1}
                </span>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <a href="/contact">
                  Learn More →
                </a>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* =========================================
          WHY CHOOSE US
      ========================================= */}

      <section className={styles.whySection}>
        <div className={styles.container}>

          <div className={styles.whyWrapper}>

            <div className={styles.whyContent}>

              <span className={styles.sectionLabel}>
                WHY OM ELEVATORS
              </span>

              <h2>
                Safety & Quality
                <strong> Come First</strong>
              </h2>

              <p>
                We believe every elevator should provide a safe,
                comfortable and reliable journey. Our team combines
                technical expertise with quality components and
                professional service.
              </p>

              <div className={styles.whyList}>

                <div>
                  <span>✓</span>
                  <section>
                    <h4>Experienced Professionals</h4>
                    <p>
                      Skilled engineers and technicians with
                      practical industry experience.
                    </p>
                  </section>
                </div>

                <div>
                  <span>✓</span>
                  <section>
                    <h4>Quality Components</h4>
                    <p>
                      Reliable components selected for long-term
                      performance and durability.
                    </p>
                  </section>
                </div>

                <div>
                  <span>✓</span>
                  <section>
                    <h4>Customer Focused</h4>
                    <p>
                      Solutions designed around your building,
                      requirements and budget.
                    </p>
                  </section>
                </div>

              </div>

            </div>

            <div className={styles.statsBox}>

              <div className={styles.statItem}>
                <strong>10+</strong>
                <span>Years Experience</span>
              </div>

              <div className={styles.statItem}>
                <strong>500+</strong>
                <span>Elevators Installed</span>
              </div>

              <div className={styles.statItem}>
                <strong>24/7</strong>
                <span>Service Support</span>
              </div>

              <div className={styles.statItem}>
                <strong>100%</strong>
                <span>Safety Focus</span>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================
          PROCESS
      ========================================= */}

      <section className={styles.processSection}>
        <div className={styles.container}>

          <div className={styles.sectionHeading}>
            <span>OUR PROCESS</span>

            <h2>
              How We
              <strong> Work</strong>
            </h2>

            <p>
              A simple and professional process from your first
              enquiry to successful elevator installation.
            </p>
          </div>

          <div className={styles.processGrid}>

            {processSteps.map((step) => (
              <div
                className={styles.processCard}
                key={step.number}
              >

                <div className={styles.processNumber}>
                  {step.number}
                </div>

                <div className={styles.processLine}></div>

                <h3>{step.title}</h3>

                <p>{step.description}</p>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* =========================================
          CTA
      ========================================= */}

      <section className={styles.ctaSection}>
        <div className={styles.ctaOverlay}></div>

        <div className={styles.ctaContent}>

          <span>READY TO GET STARTED?</span>

          <h2>
            Let's Build a Better
            <strong> Vertical Journey</strong>
          </h2>

          <p>
            Talk to our elevator experts today and find the right
            solution for your building.
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
              className={styles.phoneButton}
            >
              📞 +91 98765 43210
            </a>

          </div>

        </div>
      </section>

    </div>
  );
};

export default ServiceHome;