const { StatusCodes } = require("http-status-codes");

function addContactValidator(req, res, next) {
  if (!req.body.name || !req.body.email || !req.body.phone) {
    return res.status(StatusCodes.BAD_REQUEST).json();
  }
}
