import React, { useEffect, useRef, useState } from 'react';
import styles from './Projects.module.css';

const Projects = () => {
  const allProjects = [
    {
      title: 'Resumia - AI Powered Resume Analyzer',
      tech: 'Python, React.Js, GEMINI API',
      desc: 'Developed an intelligent resume optimization tool using Google Gemini API to analyze and score resumes based on ATS compliance, keyword relevance, and skills alignment',
      // demo: '#',
      code: 'https://github.com/princedesai012/Resumia.git',
      bgColor: '#f0f7ff'
    },
    {
      title: 'DocTime - Appointment Booking App',
      tech: 'Flutter, firebase',
      desc: 'Developed using Flutter and Firebase for booking, managing, and tracking doctor appointments, reducing patient wait time by 40%.',
      // demo: '#',
      code: 'https://github.com/princedesai012/doctor.git',
      bgColor: '#fff0f5'
    },
    {
      title: 'tweetX - MicroBlogging Web',
      tech: 'Python, Django',
      desc: 'Developed using Django with user authentication, real-time posting, and RESTful API support.',
      // demo: '#',
      code: 'https://github.com/princedesai012/tweetX.git',
      bgColor: '#f0fff0'
    },
    // More projects 👇
    {
      title: 'RVFIN - Banking Consultant web',
      tech: 'React.js, Tailwind CSS',
      desc: 'A productivity web for consulting related banking services using HTML, CSS and JS.',
      // demo: '#',
      code: '#https://github.com/princedesai012/',
      bgColor: '#fff0f5'
    },
    {
      title: 'share_file- File Transfer Service',
      tech: 'Python, Flask',
      desc: 'AboutA simple yet powerful File Transfer Service built with Flask that allows users to securely upload files and receive shareable download links.',
      demo: '#',
      code: 'https://github.com/princedesai012/share_file.git',
      bgColor: '#f0fff0'
    },
    {
      title: 'Contact Manager Web',
      tech: 'React.js, Tailwind CSS',
      desc: 'Managing Contact Details using React.js and JSON parsing.',
      // demo: '#',
      code: 'https://github.com/princedesai012/',
      bgColor: '#fff0f5'
    },
    // {
    //   title: 'Text to QR Code Generator',
    //   tech: 'HTML, CSS, JS',
    //   desc: 'Auto-generates stylish QR Code from text or imput data using Js and RestfulAPI',
    //   // demo: '#',
    //   code: '#',
    //   bgColor: '#fffde7'
    // },
  ];

  const [visible, setVisible] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const displayedProjects = showAll ? allProjects : allProjects.slice(0, 3);

  return (
    <section 
      className={`${styles.projects} ${visible ? styles.visible : ''}`} 
      id="projects" 
      ref={sectionRef}
    >
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Projects</h2>
        <p className={styles.sectionSubtitle}>Here are some of my recent works</p>
        
        <div className={styles.projectsGrid}>
          {displayedProjects.map((project, index) => (
            <div 
              key={index}
              className={styles.projectCard}
              style={{ 
                backgroundColor: project.bgColor,
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectTech}>{project.tech}</p>
                <p className={styles.projectDesc}>{project.desc}</p>
              </div>
              
              <div className={styles.projectLinks}>
                {/* <a 
                  href={project.demo} 
                  className={styles.demoLink}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  View Live
                </a> */}
                <a 
                  href={project.code} 
                  className={styles.codeLink}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Source Code
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.viewMoreWrapper}>
          <button onClick={() => setShowAll(!showAll)} className={styles.viewMoreBtn}>
            {showAll ? 'View Less' : 'View More'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
