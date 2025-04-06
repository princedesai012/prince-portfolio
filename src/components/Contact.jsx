import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  const handleSubmit = (e) => {
    const form = e.target;

    // Allow Formspree to submit
    setTimeout(() => {
      form.reset(); // Auto-clear fields after submission
    }, 1000); // 1 second delay to ensure the request is sent
  };

  return (
    <section className={styles.contact} id="contact">
      <h2 className={styles.heading}>Get in Touch 📬</h2>
      <p className={styles.text}>
        Whether you have an opportunity or just want to say hello, my inbox is always open.
      </p>

      <form 
        action="https://formspree.io/f/xjkypvnn" 
        method="POST" 
        className={styles.form}
        onSubmit={handleSubmit}
      >
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
        <button type="submit" className={styles.button}>📨 Send Message</button>
      </form>

      <div className={styles.actions}>
        <a href="mailto:ppatel3735@gmail.com" className={styles.buttonAlt}>📧 Email Me</a>
        <a href="/Prince_Desai_Resume.pdf" download className={styles.buttonOutline}>📄 Download Resume</a>
      </div>
    </section>
  );
};

export default Contact;
