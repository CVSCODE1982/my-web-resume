import React from 'react';

const Contact = () => (
    <div className="container mt-5">
        <h2>Contact Me</h2>
        <p>Feel free to reach out for collaborations, projects, or just to connect.</p>

        <form>
            <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" placeholder="Your Name" />
            </div>
            <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" placeholder="Your Email" />
            </div>
            <div className="form-group">
                <label>Message</label>
                <textarea className="form-control" rows="3" placeholder="Your Message"></textarea>
            </div>
            <button type="submit" className="btn btn-primary mt-2">Send</button>
        </form>

        <h4 className="mt-4">Connect with me</h4>
        <p>
            LinkedIn: <a href="https://linkedin.com/in/cristobalvallejo" target="_blank" rel="noopener noreferrer">Profile</a><br />
            GitHub: <a href="https://github.com/CVSCODE1982" target="_blank" rel="noopener noreferrer">Projects</a>
        </p>
    </div>
);

export default Contact;
// // // This code defines a functional component named Contact that provides a contact form and links to the individual's LinkedIn and GitHub profiles. The form includes fields for the user's name, email, and message, along with a submit button. The component is styled using Bootstrap classes for layout and design, ensuring a clean and professional appearance. The component is exported for use in other parts of the application.
// // // The component is designed to facilitate communication and networking, allowing visitors to easily reach out for collaborations or inquiries. The inclusion of external links to LinkedIn and GitHub profiles enhances the individual's online presence and provides additional avenues for connection. The use of Bootstrap classes ensures a responsive and visually appealing layout across different devices.