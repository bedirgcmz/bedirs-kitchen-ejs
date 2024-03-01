import express from "express";

const drinksRouter = express.Router();

drinksRouter.get("/", (req, res) => {
  res.render("pages/types-pages", {
    pageTitle: "Let's take a look at the drinks in Bedir's kitchen!",
    sideBarTitle: "Our Drinks",
    className: "drinks",
  });
});

export default drinksRouter;
