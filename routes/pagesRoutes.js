const pagesRouter = require("express").Router();
const {
  index,
  getBlog,
  getGuide,
  getSingle,
  getDestination,
  getTestimonial,
  getService,
  getPackage,
} = require("../controllers/pagesControllers");
pagesRouter.get("/", index);
pagesRouter.get("/blog", getBlog);
pagesRouter.get("/destination", getDestination);
pagesRouter.get("/guide", getGuide);
pagesRouter.get("/package", getPackage);
pagesRouter.get("/service", getService);
pagesRouter.get("/single", getSingle);
pagesRouter.get("/testimonial", getTestimonial);
module.exports = pagesRouter;
