import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
   title: String,
   description: String,
   techStack: [String],
   image: String,
   githubLink: String,
   liveDemo: String
});

export default mongoose.model('Project', ProjectSchema);
// This code defines a Mongoose schema and model for a project entity in a MongoDB database. The schema includes fields for the project's title, description, technology stack, image URL, GitHub link, and live demo link. The model is then exported for use in other parts of the application.
// The schema is defined using Mongoose, which is an ODM (Object Data Modeling) library for MongoDB and Node.js. The schema defines the structure of the documents in the "projects" collection in the MongoDB database. Each project document will have a title, description, tech stack (an array of strings), image URL, GitHub link, and live demo link. The model is then exported for use in other parts of the application.