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
        <div className="container mt-5">
            <h2>My Portfolio</h2>
            <p>Explore my work in e-commerce, digital marketing, web development, and SEO campaigns.</p>
            <div className="d-flex flex-wrap">
                {projects.map((project) => <ProjectCard key={project._id} project={project} />)}
            </div>
        </div>
    );
};

export default Portfolio;
// // This code defines a functional component named Portfolio that fetches and displays a list of projects from a backend server. It uses the useEffect hook to make an HTTP GET request to the server when the component mounts, retrieving project data and storing it in the state using the useState hook. Each project is displayed using a ProjectCard component, which is passed the project data as props. The layout is responsive, utilizing Bootstrap classes for styling and organization. The component is exported for use in other parts of the application.
// // The component is designed to provide a visually appealing and user-friendly way to showcase the individual's work, with a focus on e-commerce, digital marketing, web development, and SEO campaigns. The use of axios for HTTP requests allows for easy data fetching and error handling, ensuring a smooth user experience.