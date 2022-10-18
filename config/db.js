require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("successfull");
  } catch (error) {
    console.log("connection fail");
    process.exit(1);
  }
};

module.exports = connectDB;
