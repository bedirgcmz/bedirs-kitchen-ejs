import express from "express";

const mealsRouter = express.Router();

mealsRouter.get("/", (req, res) => {
  res.render("pages/types-pages", {
    pageTitle: "Let's take a look at the meals in Bedir's kitchen!",
    sideBarTitle: "Our Meals",
    className: "meals",
  });
});

export default mealsRouter;
