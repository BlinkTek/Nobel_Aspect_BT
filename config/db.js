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
  .connect("mongodb+srv://noble:0hT5yw1EGXyVcTuW@cluster0.hszw1.mongodb.net/noble")
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log("Database not connected", err);
  });
