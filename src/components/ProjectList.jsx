import React from "react";

function ProjectList({ projects }) {
  return (
    <section id="projects">
      <h3>Projects</h3>
      <div className="project-list">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h4>{project.heading}</h4>
            <p>{project.paragraph}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectList;
