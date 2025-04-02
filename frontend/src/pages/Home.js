import React from 'react';

const Home = () => (
    <div className="container text-center mt-5">
        <img 
            src="/path-to-your-image.jpg" 
            alt="Cristobal Vallejo" 
            className="rounded-circle" 
            style={{ width: "150px", height: "150px" }}
        />
        <h1 className="mt-3">Cristobal Vallejo</h1>
        <p className="lead">
            A results-driven marketing professional with 15+ years of experience 
            in business development, digital marketing, and communications.
        </p>
        <a href="/portfolio" className="btn btn-primary">View Portfolio</a>
        <a href="/contact" className="btn btn-outline-secondary ml-2">Contact Me</a>
    </div>
);

export default Home;
// // This code defines a functional component named Home that serves as the landing page of a portfolio website. It includes an image, a name, a brief description, and buttons to view the portfolio and contact information. The image is styled as a rounded circle, and the layout is centered using Bootstrap classes. The component is exported for use in other parts of the application.
// // The component is designed to be visually appealing and user-friendly, providing a clear introduction to the individual and their work. The buttons are styled using Bootstrap classes for a consistent look and feel across the website.