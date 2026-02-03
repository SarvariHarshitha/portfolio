import React from 'react';
import projects from '../projects.json';

const ProjectsCard = () => {
  return (
    <div className="projects-container">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <h2>{project.title}</h2>
          <p className='desp'>{project.description}</p>
          <div className='skills'>
          <h4>Technologies:</h4>
          {project.technologies.map((tech, techIndex) => (
            <p key={techIndex}>{tech}</p>
          ))}
          </div>
          <a href={project.link} target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-globe"></i>Live Demo</a> <a href={project.github} target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i>GitHub Repo</a>
          
        </div>
      ))}
    </div>
  );
};

export default ProjectsCard;