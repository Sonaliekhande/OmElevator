import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./Contact.module.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    setStatus({
      type: "",
      message: "",
    });

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      company: formData.company || "Not provided",
      service: formData.service,
      message: formData.message,
    };

    try {
      const response = await emailjs.send(
        "service_radtvq7",
        "template_0ekykkj",
        templateParams,
        {
          publicKey: "AcQzsnw89SATbVcNX",
        }
      );

      console.log("EMAIL SENT SUCCESSFULLY");
      console.log("Status:", response.status);
      console.log("Message:", response.text);

      setStatus({
        type: "success",
        message: "Your enquiry has been sent successfully!",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error("========== EMAILJS ERROR ==========");
      console.error("Status:", error.status);
      console.error("Text:", error.text);
      console.error("Full Error:", error);

      setStatus({
        type: "error",
        message: error.text || "Failed to send email.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.contactPage}>

      {/* =========================
          HERO
      ========================= */}

      <section className={styles.hero}>
        <div className={styles.heroContent}>

          <span>CONTACT OM ELEVATORS</span>

          <h1>
            Let's Build Something
            <br />
            <strong>That Moves.</strong>
          </h1>

          <p>
            Have an elevator requirement? Talk to our experts
            and get the right solution for your building.
          </p>

          <div className={styles.breadcrumb}>
            <span>Home</span>
            <b>/</b>
            <strong>Contact</strong>
          </div>

        </div>
      </section>


      {/* =========================
          CONTACT SECTION
      ========================= */}

      <section className={styles.contactSection}>

        <div className={styles.container}>

          <div className={styles.contactGrid}>

            {/* =========================
                CONTACT INFORMATION
            ========================= */}

            <div className={styles.contactInfo}>

              <span className={styles.sectionTag}>
                GET IN TOUCH
              </span>

              <h2>
                We Are Here
                <span> To Help.</span>
              </h2>

              <p className={styles.intro}>
                Whether you need a new elevator, modernization,
                maintenance or repair service, our team is ready
                to help.
              </p>


              {/* Phone */}

              <div className={styles.infoItem}>

                <div className={styles.infoIcon}>
                  ☎
                </div>

                <div>
                  <h3>Call Us</h3>

                  <a href="tel:+919876543210">
                    +91 98765 43210
                  </a>

                  <span>
                    Monday - Saturday, 9:00 AM - 7:00 PM
                  </span>
                </div>

              </div>


              {/* Email */}

              <div className={styles.infoItem}>

                <div className={styles.infoIcon}>
                  ✉
                </div>

                <div>
                  <h3>Email Us</h3>

                  <a href="mailto:sonaliekhande48@gmail.com">
                    sonaliekhande48@gmail.com
                  </a>

                  <span>
                    We usually respond within 24 hours
                  </span>
                </div>

              </div>


              {/* Address */}

              <div className={styles.infoItem}>

                <div className={styles.infoIcon}>
                  📍
                </div>

                <div>
                  <h3>Visit Us</h3>

                  <p>
                    OM Elevators,
                    <br />
                    Pune, Maharashtra, India
                  </p>
                </div>

              </div>


              {/* WhatsApp */}

              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noreferrer"
                className={styles.whatsapp}
              >

                <span>💬</span>

                <div>
                  <strong>Chat on WhatsApp</strong>
                  <small>Get quick assistance</small>
                </div>

                <b>→</b>

              </a>

            </div>


            {/* =========================
                CONTACT FORM
            ========================= */}

            <div className={styles.formCard}>

              <div className={styles.formHeader}>

                <span>REQUEST A QUOTE</span>

                <h2>
                  Tell Us About
                  <br />
                  Your Requirement
                </h2>

                <p>
                  Fill in the details below and our team
                  will contact you shortly.
                </p>

              </div>


              <form onSubmit={handleSubmit}>

                {/* Row 1 */}

                <div className={styles.formRow}>

                  <div className={styles.formGroup}>

                    <label>
                      Full Name <span>*</span>
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                    />

                  </div>


                  <div className={styles.formGroup}>

                    <label>
                      Email <span>*</span>
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                    />

                  </div>

                </div>


                {/* Row 2 */}

                <div className={styles.formRow}>

                  <div className={styles.formGroup}>

                    <label>
                      Phone Number <span>*</span>
                    </label>

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter phone number"
                      required
                    />

                  </div>


                  <div className={styles.formGroup}>

                    <label>
                      Company
                    </label>

                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company name"
                    />

                  </div>

                </div>


                {/* Service */}

                <div className={styles.formGroup}>

                  <label>
                    Select Service <span>*</span>
                  </label>

                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >

                    <option value="">
                      Select a service
                    </option>

                    <option value="Passenger Elevator">
                      Passenger Elevator
                    </option>

                    <option value="Home Elevator">
                      Home Elevator
                    </option>

                    <option value="Hospital Elevator">
                      Hospital Elevator
                    </option>

                    <option value="Goods Elevator">
                      Goods Elevator
                    </option>

                    <option value="Elevator Installation">
                      Elevator Installation
                    </option>

                    <option value="Elevator Maintenance">
                      Elevator Maintenance
                    </option>

                    <option value="Elevator Modernization">
                      Elevator Modernization
                    </option>

                    <option value="Elevator Repair">
                      Elevator Repair
                    </option>

                    <option value="Other">
                      Other
                    </option>

                  </select>

                </div>


                {/* Message */}

                <div className={styles.formGroup}>

                  <label>
                    Message <span>*</span>
                  </label>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your elevator requirement..."
                    rows="6"
                    required
                  />

                </div>


                {/* Success */}

                {status.type === "success" && (
                  <div className={styles.successMessage}>
                    ✓ {status.message}
                  </div>
                )}


                {/* Error */}

                {status.type === "error" && (
                  <div className={styles.errorMessage}>
                    ✕ {status.message}
                  </div>
                )}


                {/* Submit */}

                <button
                  type="submit"
                  className={styles.submitButton}
                  disabled={loading}
                >
                  {loading
                    ? "Sending..."
                    : "Send Enquiry →"}
                </button>


                <p className={styles.formNote}>
                  Your information is safe with us. We will
                  only use it to contact you regarding your
                  enquiry.
                </p>

              </form>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          CTA
      ========================= */}

      {/* <section className={styles.cta}>

        <div className={styles.ctaContent}>

          <div>

            <span>
              NEED IMMEDIATE ASSISTANCE?
            </span>

            <h2>
              Talk To Our Elevator Experts
            </h2>

          </div>

          <a
            href="tel:+919876543210"
            className={styles.ctaButton}
          >
            Call Now →
          </a>

        </div>

      </section> */}

    </div>
  );
};

export default Contact;