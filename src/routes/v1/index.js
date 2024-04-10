const v1Router = require("express").Router();

const contactRouter = require("./contact_router");

v1Router.use("/contact", contactRouter);

module.exports = v1Router;
