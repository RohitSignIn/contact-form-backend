const { ReasonPhrases, StatusCodes } = require("http-status-codes");

class DuplicateEntry extends Error {
  constructor() {
    const errorMessage = `Entered details are already present in the database`;
    super(errorMessage);
    this.message = errorMessage;
    this.reason = ReasonPhrases.CONFLICT;
    this.status = StatusCodes.CONFLICT;
    this.name = "DuplicateEntry";
  }
}

module.exports = DuplicateEntry;
