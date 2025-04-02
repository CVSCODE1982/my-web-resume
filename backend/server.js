import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import projectRoutes from './routes/projects.js'; // Import the routes

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

// Use routes
app.use('/projects', projectRoutes); // Mount the project routes

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// This code sets up an Express server with CORS and JSON parsing middleware. It connects to a MongoDB database using Mongoose and imports project routes for handling HTTP requests related to projects. The server listens on a specified port, defaulting to 5000 if not provided in the environment variables.
// The server is configured to use environment variables for sensitive information like the MongoDB connection URI, which is loaded using dotenv. The server logs a message indicating that it is running and connected to the database.