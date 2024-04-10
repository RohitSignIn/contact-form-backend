const ContactService = require("../services/contact_service");
const ContactRepository = require("../repositories/contact_repository");

const contactService = new ContactService(new ContactRepository());

async function getEntries(req, res) {
  try {
    const response = await contactService.getEntries();
    return res.status(200).json({
      success: true,
      data: response,
    });
  } catch (error) {
    return res.status(error.status).json({ Error: error.message });
  }
}

async function addEntry(req, res) {
  try {
    const response = await contactService.addEntry(req.body);
    return res.status(201).json({
      success: true,
      data: response,
    });
  } catch (error) {
    return res.status(error.status).json({ Error: error.message });
  }
}

async function updateEntry(req, res) {
  try {
    const response = await contactService.updateEntry(req.body.id, {
      [req.body.update]: req.body[req.body.update],
    });
    return res.status(200).json({
      success: true,
      data: response,
    });
  } catch (error) {
    return res.status(error.status).json({ Error: error.message });
  }
}

async function deleteEntry(req, res) {
  try {
    const response = await contactService.deleteEntry(req.body.id);
    return res.status(200).json({
      success: true,
      data: response,
    });
  } catch (error) {
    return res.status(error.status).json({ Error: error.message });
  }
}

module.exports = {
  getEntries,
  addEntry,
  updateEntry,
  deleteEntry,
};
