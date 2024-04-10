const { ReasonPhrases, StatusCodes } = require("http-status-codes");

class BadRequest extends Error {
  constructor(property) {
    const errorMessage = `${property} is missing from the request body`;
    super(errorMessage);
    this.message = errorMessage;
    this.reason = ReasonPhrases.BAD_REQUEST;
    this.status = StatusCodes.BAD_REQUEST;
    this.name = "BadRequest";
  }
}

module.exports = BadRequest;
