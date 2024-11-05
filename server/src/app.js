const express = require("express");
const userRoutes = require("./routes/userRoutes"); // Import your routes
const corsMiddleware = require("../src/middlewares/cors"); // Import your CORS middleware

// Create an Express app
const app = express(); 

// Apply CORS middleware
app.use(corsMiddleware);

// Middleware to parse incoming request bodies
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

// Define routes
app.use("/api", userRoutes); // Attach user routes with a prefix

// Export the app
module.exports = app;
