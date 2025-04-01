const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");

dotenv.config();
const app = express();
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.log("Database connection failed:", err));

const PORT = process.env.PORT || 5000;

// Export for Vercel
module.exports = app;

// Start the server only if running locally
if (require.main === module) {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}
