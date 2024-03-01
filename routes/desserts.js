import express from "express";

const dessertsRouter = express.Router();

dessertsRouter.get("/", (req, res) => {
  res.render("pages/types-pages", {
    pageTitle: "Let's take a look at the desserts in Bedir's kitchen!",
    sideBarTitle: "Our Desserts",
    className: "desserts",
  });
});

export default dessertsRouter;
