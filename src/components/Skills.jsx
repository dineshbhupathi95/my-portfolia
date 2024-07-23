import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    "Python", "Django", "Agile Methodology", "AWS", "Kong API Gateway",
    "Django Rest Framework", "FastAPI", "Flask", "MySQL", "React JS",
    "Elastic Search", "Linux", "Git", "GitHub", "Celery", "NGINX", "Pandas"
  ];

  return (
    <section id="skills" className="skills animate-section">
      <h2>Skills</h2>
      <ul>
        {skills.map(skill => <li key={skill} className="skill-item">{skill}</li>)}
      </ul>
    </section>
  );
};

export default Skills;
