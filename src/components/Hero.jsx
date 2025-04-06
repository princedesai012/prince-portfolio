import React, { useEffect, useRef, useState } from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = ' Software Developer | AI & ML Enthusiast ';
  const index = useRef(0);
  const heroRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Typing effect
  useEffect(() => {
    if (!isVisible) return;

    const typeNextChar = () => {
      if (index.current < fullText.length) {
        setTypedText((prev) => prev + fullText.charAt(index.current));
        index.current += 1;
      } else {
        clearInterval(timer);
        // Start cursor blink animation after typing completes
        const cursor = document.querySelector(`.${styles.cursor}`);
        if (cursor) {
          cursor.style.animation = `${styles.blink} 1s steps(2, start) infinite`;
        }
      }
    };

    const timer = setInterval(typeNextChar, 50);

    return () => clearInterval(timer);
  }, [isVisible]);

  return (
    <section id="hero" className={styles.hero} ref={heroRef}>
      <div className={styles.overlay}></div>
      <div className={styles.particleBackground}></div>
      
      <div className={`${styles.content} ${isVisible ? styles.visible : ''}`}>
        <div className={styles.textContainer}>
          <div className={styles.greeting}>
            <h1>
              <span className={styles.hi}>Hi,</span> I'm{' '}
              <span className={styles.name}>
                <span className={styles.nameText}>Prince Desai</span>
                <span className={styles.nameUnderline}></span>
              </span>
            </h1>
          </div>

          <h2 className={styles.typingText}>
            {typedText}
            <span className={styles.cursor}>|</span>
          </h2>

          <p className={styles.description}>
          As a Software Developer, I develop scalable and accessible digital solutions <span className={styles.highlight}>with modern web technologies while exploring AI-driven innovation </span>,{' '}
            <span className={styles.highlight}>accessible</span> to create cutting-edge applications.
          </p>

          <div className={styles.buttons}>
            <a 
              href="#contact" 
              className={`${styles.button} ${styles.primaryButton}`}
              aria-label="Contact Me"
            >
              <span className={styles.buttonText}>Get In Touch</span>
              <div className={styles.buttonHover}></div>
            </a>
            <a
              href="/Prince_Desai_Resume.pdf"
              download
              className={`${styles.button} ${styles.secondaryButton}`}
              aria-label="Download Resume"
            >
              <span className={styles.buttonText}>View Resume</span>
              <div className={styles.buttonHover}></div>
            </a>
          </div>
        </div>

        <div className={styles.visualContainer}>
          <div className={styles.heroVisual}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
