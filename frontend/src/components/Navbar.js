import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            <Link className="navbar-brand" to="/">Cristobal Vallejo</Link>
            <div>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/portfolio">Portfolio</Link>
                <Link className="nav-link" to="/skills">Skills</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
            </div>
        </div>
    </nav>
);

export default Navbar;
// This code defines a functional component named Navbar that renders a navigation bar using Bootstrap classes. The navbar contains links to different sections of the website: About, Portfolio, Skills, and Contact. The Link component from react-router-dom is used to create client-side navigation without reloading the page. The navbar is styled with a dark background and contains a brand name "Cristobal Vallejo" that links to the homepage.
// The component is exported for use in other parts of the application. The use of Bootstrap classes ensures that the navbar is responsive and visually appealing across different devices.