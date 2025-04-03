import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import projectRoutes from './routes/projects.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.use('/projects', projectRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));
// This code sets up an Express server that connects to a MongoDB database using Mongoose. It uses the dotenv package to load environment variables from a .env file, and the cors package to enable Cross-Origin Resource Sharing. The server listens on port 5000 and uses a router for handling requests related to projects, which is defined in another file (routes/projects.js). The server is configured to parse JSON request bodies.
// The MongoDB connection is established using the connection string stored in the MONGO_URI environment variable. If the connection is successful, a message is logged to the console; otherwise, an error message is displayed.   