const mongoose = require("mongoose");
const { DB_URI } = require("./server_config");

function connectDB() {
  try {
    mongoose.connect(DB_URI);
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
}

module.exports = connectDB;
