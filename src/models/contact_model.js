const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  dialcode: {
    type: String,
  },
  phone: {
    type: String,
    unique: true,
  },
});

const Contact = new mongoose.model("contact", contactSchema);

module.exports = Contact;
