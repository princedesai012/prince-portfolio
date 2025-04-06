import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.credit}>
          Designed & Developed by <strong>Prince Desai</strong> 🚀
        </p>

        <nav className={styles.links} aria-label="Footer navigation">
          <a
            href="https://github.com/princedesai012"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Prince Desai on GitHub"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/prince-desai-420910282"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Prince Desai on LinkedIn"
          >
            LinkedIn
          </a>
          <a
            href="mailto:ppatel3735@gmail.com?subject=Portfolio Inquiry&body=Hi Prince,%0D%0AI came across your portfolio and..."
            aria-label="Send an email to Prince Desai"
          >
            Email
          </a>
        </nav>

        <small className={styles.copy}>
          © {currentYear} Prince Desai. All rights reserved.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
