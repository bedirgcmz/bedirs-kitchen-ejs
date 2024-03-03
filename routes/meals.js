import express from "express";
import subMealsRouter from "./subMeals.js";
import recipeMealsRouter from "./recipeMeals.js";

const mealsRouter = express.Router();

mealsRouter.get("/", (req, res) => {
  res.render("pages/types-pages", {
    pageTitle: "Let's take a look at the meals in Bedir's kitchen!",
    sideBarTitle: "Our Meals",
    className: "meals",
  });
});

mealsRouter.use("/meal-product", subMealsRouter);
mealsRouter.use("/recipe", recipeMealsRouter);
mealsRouter.use(express.static("public"));

export default mealsRouter;
