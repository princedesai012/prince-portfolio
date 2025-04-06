import React, { useState, useEffect, useRef } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    // Theme initialization
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark');
      setDarkMode(true);
    }

    // Scroll effect
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = !darkMode;
    document.body.classList.toggle('dark');
    setDarkMode(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.style.overflow = !menuOpen ? 'hidden' : 'auto';
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠', href: '#hero' },
    { id: 'about', label: 'About', icon: '👤', href: '#about' },
    { id: 'projects', label: 'Projects', icon: '💼', href: '#projects' },
    { id: 'contact', label: 'Contact', icon: '✉️', href: '#contact' }
  ];

  return (
    <nav
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
      aria-label="Main Navigation"
    >
      <div className={styles.navContainer}>
        <a href="#hero" className={styles.logo} aria-label="Home">
          <img
            src="/sign.png"
            alt="Prince Desai Signature"
            className={styles.signatureLogo}
          />
        </a>
        <div className={styles.navRight} ref={menuRef}>
          <ul
            className={`${styles.navLinks} ${menuOpen ? styles.showMenu : ''}`}
            style={menuOpen ? { transform: 'translateX(0)' } : {}}
          >
            {navItems.map((item, index) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  onClick={closeMenu}
                  className={styles.navLink}
                  aria-label={item.label}
                  style={{ transitionDelay: menuOpen ? `${index * 0.1}s` : '0s' }}
                >
                  <span className={styles.navIcon} aria-hidden="true">{item.icon}</span>
                  <span className={styles.navText}>{item.label}</span>
                  <span className={styles.linkHover}></span>
                </a>
              </li>
            ))}
          </ul>

          {/* <button
            onClick={toggleTheme}
            className={styles.themeToggle}
            aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
          >
            <span className={styles.themeIcon} aria-hidden="true">
              {darkMode ? '🌞' : '🌙'}
            </span>
            <span className={styles.themeTooltip}>
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </span>
          </button> */}

          <button
            onClick={toggleMenu}
            className={`${styles.burger} ${menuOpen ? styles.open : ''}`}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className={styles.burgerLine}></span>
            <span className={styles.burgerLine}></span>
            <span className={styles.burgerLine}></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;