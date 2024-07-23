import React from 'react';
import './Experience.css';

const experiences = [
  {
    role: "Software Developer",
    company: "Brane Enterprises",
    location: "Hyderabad",
    duration: "July 2023 - Present",
    tasks: [
      "Designing and building admin micro-services which support role-based access controls (RBAC).",
      "Implemented RESTful APIs to facilitate seamless communication between front-end and back-end systems.",
      "Developed a responsive and dynamic user interface using React.js.",
    ],
  },
  // Add other experiences similarly...
];

const Experience = () => {
  return (
    <section id="experience" className="experience animate-section">
      <h2>Experience</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="job">
          <h3>{exp.role} | {exp.company}</h3>
          <p>{exp.location}</p>
          <p>{exp.duration}</p>
          <ul>
            {exp.tasks.map(task => <li key={task}>{task}</li>)}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Experience;
