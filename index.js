const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const testRoutes = require("./routes/testRoutes");
const courseRoutes = require("./routes/courseRoutes");
const thesisRoutes = require("./routes/thesisRoutes");
const facultyRoutes = require("./routes/facultyconsultation_route");
const stConsultationRoutes = require("./routes/stconsultation_route");
const alumniRoutes = require("./routes/alumni_route");
const sosRoute = require("./routes/sos_route");

dotenv.config();
const app = express();
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/test", testRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/thesis", thesisRoutes);
app.use("/api/faculty", facultyRoutes);
app.use("/api/stconsultation", stConsultationRoutes);
app.use("/api/alumni", alumniRoutes);
app.use("/api/sos", sosRoute);

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
