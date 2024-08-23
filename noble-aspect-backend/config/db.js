const mongoose = require("mongoose");
require("dotenv").config();

// const connectDB = async () => {
//   await mongoose
//     .connect(process.env.MONGO_URI)
//     .then(() => {
//       console.log("MongoDB Connected");
//     })
//     .catch((err) => {
//       console.log("MongoDB Not Connected...", err);
//     });
// };

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log("Database not connected", err);
  });
