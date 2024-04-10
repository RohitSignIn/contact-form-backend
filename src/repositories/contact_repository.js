const Contact = require("../models/contact_model");

class ContactRepository {
  async getEntries() {
    try {
      const res = await Contact.find();
      return res;
    } catch (e) {
      throw e;
    }
  }

  async addEntry(name, email, phone) {
    try {
      const res = await Contact.create({
        name,
        email,
        phone,
      });
      return res;
    } catch (e) {
      throw e;
    }
  }

  async updateEntry(id, updateObj) {
    try {
      const res = await Contact.findOneAndUpdate({ _id: id }, updateObj, {
        new: true,
      });
      return res;
    } catch (e) {
      throw e;
    }
  }

  async deleteEntry(id) {
    try {
      const res = await Contact.deleteOne({ _id: id });
      return res;
    } catch (e) {
      throw e;
    }
  }
}

module.exports = ContactRepository;
