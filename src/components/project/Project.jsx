import React from 'react'
import "./project.css";
import Work from './Work';

const Project = () => {
  return (
    <section className="project section" id = 'project'>
        <h2 className="project-section-title container">Recent Projects</h2>
        <Work />
    </section>
  )
}

export default Project