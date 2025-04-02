import React from 'react';

const ProjectCard = ({ project }) => (
   <div className="card m-2" style={{ width: "18rem" }}>
      <img src={project.image} className="card-img-top" alt={project.title} />
      <div className="card-body">
         <h5 className="card-title">{project.title}</h5>
         <p className="card-text">{project.description}</p>
         <a href={project.githubLink} className="btn btn-primary">GitHub</a>
         <a href={project.liveDemo} className="btn btn-secondary">Live Demo</a>
      </div>
   </div>
);

export default ProjectCard;
