const { ReasonPhrases, StatusCodes } = require("http-status-codes");

class NotFoundError extends Error {
  constructor(resourceName, property, propertyValue) {
    const errorMessage = `The resource: ${resourceName} with ${property} : ${propertyValue} not found!`;
    super(errorMessage);
    this.message = errorMessage;
    this.reason = ReasonPhrases.NOT_FOUND;
    this.status = StatusCodes.NOT_FOUND;
    this.name = "NotFoundError";
  }
}

module.exports = NotFoundError;
