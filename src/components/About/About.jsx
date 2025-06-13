import React from 'react';
import { Code, Palette, Smartphone, Database } from 'lucide-react';
import image from "../../assest/image.png";
import './About.css';

const About = () => {
  const skills = [
    {
      icon: <Code size={32} />,
      title: 'Frontend Development',
      description: 'React, JavaScript, HTML5, CSS3, Responsive Design',
    },
    {
      icon: <Database size={32} />,
      title: 'Backend Development',
      description: 'Node.js, Python, MongoDB, REST APIs',
    },
    {
      icon: <Palette size={32} />,
      title: 'UI/UX Design',
      description: 'Figma, User Research',
    },
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">About Me</h2>
            <div className="about-description">
              <p>
                I'm a passionate Full Stack Developer with creating digital solutions that make a difference.
                 My journey began with 
                a fascination for how technology can solve real-world problems, and it 
                has evolved into a career dedicated to building exceptional user experiences.
              </p>
              <p>
                I believe in the power of clean code, thoughtful design, and collaborative 
                problem-solving. When I'm not coding, you'll find me exploring new technologies, 
                contributing to open-source projects, or mentoring aspiring developers.
              </p>
              <p>
                My approach combines technical expertise with creative vision, ensuring 
                that every project not only functions flawlessly but also delights users 
                with intuitive and beautiful interfaces.
              </p>
            </div>
          </div>
          
          <div className="about-image">
            <div className="image-container">
              <img
                src={image}
                alt="sreejith- Full Stack Developer"
                className="profile-image"
              />
              <div className="image-overlay"></div>
            </div>
          </div>
        </div>

        <div className="skills-section">
          <h3 className="skills-title">What I Do</h3>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-icon">
                  {skill.icon}
                </div>
                <h4 className="skill-title">{skill.title}</h4>
                <p className="skill-description">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;