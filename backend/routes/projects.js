import express from 'express';
import Project from '../models/Project.js';

const router = express.Router();

// Get all projects
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add a new project
router.post('/', async (req, res) => {
  try {
    const newProject = new Project(req.body);
    await newProject.save();
    res.status(201).json(newProject);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;

// This code defines an Express router for handling HTTP requests related to projects. It includes two routes: a GET route to retrieve all projects from the database and a POST route to create a new project. The router uses Mongoose to interact with the MongoDB database, and it exports the router for use in other parts of the application.
// The GET route fetches all projects from the database and sends them as a JSON response. The POST route creates a new project using the data sent in the request body, saves it to the database, and sends the created project back as a JSON response with a 201 status code indicating successful creation.