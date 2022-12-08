const formRouter = require("express").Router();
const {
  getAbout,
  postAbout,
  getContact,
  postContact,
} = require("../controllers/formControllers");
formRouter.get("/about", getAbout);

formRouter.get("/contact", getContact);

formRouter.post("/about", postAbout);

formRouter.post("/contact", postContact);

module.exports = formRouter;
