const router = require("express").Router();

const {
  getEntries,
  addEntry,
  updateEntry,
  deleteEntry,
} = require("../../controllers/contact_controller");

// GET ALL Entries
router.get("/", getEntries);

// CREATE Entry
router.post("/", addEntry);

// UPDATE Entry
router.patch("/", updateEntry);

// DELETE Entry
router.delete("/", deleteEntry);

module.exports = router;
