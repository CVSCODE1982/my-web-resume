import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProjectCard from '../components/ProjectCard';

const Portfolio = () => {
   const [projects, setProjects] = useState([]);

   useEffect(() => {
      axios.get('http://localhost:5000/projects')
         .then(response => setProjects(response.data))
         .catch(error => console.log(error));
   }, []);

   return (
      <div className="container">
         <h2>My Portfolio</h2>
         <div className="d-flex flex-wrap">
            {projects.map((project) => <ProjectCard key={project._id} project={project} />)}
         </div>
      </div>
   );
};

export default Portfolio;
// This code defines a React component named Portfolio that fetches project data from a backend server using Axios and displays it using the ProjectCard component. The useEffect hook is used to make the API call when the component mounts, and the projects are stored in the state using useState. The projects are then mapped to individual ProjectCard components for rendering.
// The component is styled using Bootstrap classes for layout and design. The API endpoint is assumed to be running on localhost at port 5000, and the data is expected to be in JSON format. The component handles any errors that may occur during the API call by logging them to the console.