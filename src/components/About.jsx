import React from 'react';
import styles from './About.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const skills = [
  { name: 'React.js', icon: <FontAwesomeIcon icon="fa-brands fa-react" />, color: '#61DBFB' },
  { name: 'JavaScript', icon: <FontAwesomeIcon icon="fa-brands fa-js" />, color: '#F7DF1E' },
  { name: 'Node.js', icon: <FontAwesomeIcon icon="fa-brands fa-node" />, color: '#3C873A' },
  { name: 'Git & GitHub', icon: <FontAwesomeIcon icon="fa-brands fa-github" />, color: '#24292e' },
  { name: 'Firebase', icon: <FontAwesomeIcon icon="fa-solid fa-fire" />, color: '#FFA611' },
  { name: 'REST API Integration', icon: '🔗', color: '#E535AB' },
  { name: 'Python', icon: <FontAwesomeIcon icon="fa-brands fa-python" />, color: '#3572A5' },
  { name: 'Django', icon: '🍃', color: '#092E20' },
  { name: 'Java', icon: <FontAwesomeIcon icon="fa-brands fa-java" />, color: '#007396' },
  { name: 'Flutter', icon: <FontAwesomeIcon icon="fa-brands fa-flutter" />, color: '#02569B' },
  { name: 'Data Structures', icon: <FontAwesomeIcon icon="fa-solid fa-book" />, color: '#FF6F61' },
  { name: 'Algorithms', icon: <FontAwesomeIcon icon="fa-solid fa-chart-diagram" />, color: '#9C27B0' },
];

const About = () => {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>About Me</h2>

        {/* Developer Introduction */}
        <div className={styles.introSection}>
          <div className={styles.profileWrapper}>
            <img
              src="/prince-avatar.jfif"
              alt="Prince Desai"
              className={styles.profileImg}
            />
          </div>
          <div className={styles.introText}>
            <p>
            I'm Prince Desai — a dedicated software engineer with a deep passion for technology and a growing curiosity for artificial intelligence. From crafting sleek user interfaces with React to building powerful backends with Django and Firebase, I thrive on transforming complex problems into elegant digital solutions. As I continue exploring the world of AI, I'm excited about integrating intelligent systems into real-world applications that make a difference.
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div className={styles.skillsSection}>
          <h3 className={styles.subheading}>Skills & Technologies</h3>
          <ul className={styles.skills}>
            {skills.map((skill, index) => (
              <li
                key={skill.name}
                className={styles.skillItem}
                style={{
                  '--skill-color': skill.color,
                  '--index': index,
                }}
              >
                <div className={styles.skillIcon} role="img" aria-label={skill.name}>
                  {skill.icon}
                </div>
                <div className={styles.skillName}>{skill.name}</div>
                <div className={styles.skillBar}></div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
