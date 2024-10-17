const express = require("express");
const userRoutes = require("./routes/userRoutes");  // Import your routes

const app = express();  // Create an Express app

// Middleware to parse incoming request bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Define routes
app.use("/api/users", userRoutes);  // Attach user routes with a prefix

// Export the app
module.exports = app;
