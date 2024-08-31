const express = require("express");
const cors = require("cors"); // Import the cors package
const connectDB = require("./config/db");
require("dotenv").config();

const app = express();

// Connect to Database
// connectDB();
require("./config/db");

// Middleware
app.use(cors());
app.use(express.json());

app.get("/api", (req, res) => {
  res.send("Hello World");
});

// Routes
app.use("/api/user", require("./routes/user.routes"));
app.use("/api/inquiry", require("./routes/inquiry.routes"));
app.use("/api/caseStudy", require("./routes/caseStudy.routes"));
app.use("/api/service", require("./routes/service.routes"));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
