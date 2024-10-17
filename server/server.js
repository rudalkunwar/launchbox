require("dotenv").config(); // Load environment variables
const mongoose = require("mongoose");
const app = require("./src/app"); // Import the app.js from src

// Connect to MongoDB
mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("Connected to the database.");
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Database connection failed:", error);
  });
