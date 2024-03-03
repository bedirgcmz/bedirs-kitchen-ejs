import express from "express";
import subDrinksRouter from "./subDrinks.js";
import recipeDrinksRouter from "./recipeDrinks.js";

const drinksRouter = express.Router();

drinksRouter.get("/", (req, res) => {
  res.render("pages/types-pages", {
    pageTitle: "Let's take a look at the drinks in Bedir's kitchen!",
    sideBarTitle: "Our Drinks",
    className: "drinks",
  });
});

drinksRouter.use("/drink-product", subDrinksRouter);
drinksRouter.use("/recipe", recipeDrinksRouter);
drinksRouter.use(express.static("public"));

export default drinksRouter;
