import express from "express";
import subDessertsRouter from "./subDessert.js";
import recipeDessertsRouter from "./recipeDesserts.js";

const dessertsRouter = express.Router();

dessertsRouter.get("/", (req, res) => {
  res.render("pages/types-pages", {
    pageTitle: "Let's take a look at the desserts in Bedir's kitchen!",
    sideBarTitle: "Our Desserts",
    className: "desserts",
  });
});

dessertsRouter.use("/dessert-product", subDessertsRouter);
dessertsRouter.use("/recipe", recipeDessertsRouter);
dessertsRouter.use(express.static("public"));

export default dessertsRouter;
