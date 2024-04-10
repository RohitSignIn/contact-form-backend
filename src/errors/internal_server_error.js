const { ReasonPhrases, StatusCodes } = require("http-status-codes");

class InternalServerError extends Error {
  constructor() {
    const errorMessage = `Something went wrong, Please try again later!`;
    super(errorMessage);
    this.message = errorMessage;
    this.reason = ReasonPhrases.INTERNAL_SERVER_ERROR;
    this.status = StatusCodes.INTERNAL_SERVER_ERROR;
    this.name = "InternalServerError";
  }
}

module.exports = InternalServerError;
