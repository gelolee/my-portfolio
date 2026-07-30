import React from 'react';
import "./about.css";

// Data array defined outside the component to avoid recreating it on every render
const TECH_STACKS = [
  {
    category: "Languages",
    skills: ["HTML", "CSS", "JavaScript", "jQuery", "TypeScript", "PHP"],
  },
  {
    category: "Frameworks & Libraries",
    skills: ["ReactJS", "Laravel", "Bootstrap"],
  },
  {
    category: "Mobile",
    skills: ["React Native"],
  },
  {
    category: "Database",
    skills: ["MySQL", "Firebase"],
  },
  {
    category: "CMS",
    skills: ["WordPress", "Drupal"],
  },
  {
    category: "AI Tools",
    skills: ["Gemini", "ChatGPT", "GitHub Copilot", "Claude", "Deepseek"], // Add your specific AI tools here
  },
  {
    category: "Tools & Hosting",
    skills: ["Git", "GitHub", "Vercel", "Netlify"],
  },
];

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="about-container container grid">
        <div className="about-data">
          <h2 className="about-section-title">About</h2>
          <p className="about-description">
            I’m a Web & Mobile Developer focused on translating complex requirements and visual designs into clean, high-performance digital products. With a strong engineering foundation across web platforms and mobile applications, I specialize in building robust frontend interfaces, smooth user experiences, and scalable backend logic. Whether engineering full-stack applications or optimizing digital infrastructure, I leverage modern development practices and AI-assisted workflows to build reliable, maintainable code.
          </p>
        </div>
        <div className="-stacks-container">
            <h3 className="about-section-title">Tech Stacks</h3>
            
            <div className="skills-categories">
              {TECH_STACKS.map((group) => (
                <div key={group.category} className="skill-group">
                  <h4 className="category-title">{group.category}</h4>
                  <div className="skills-list">
                    {group.skills.map((skill) => (
                      <span key={skill} className="skill-badge">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
      </div>
    </section>
  );
};

export default About;