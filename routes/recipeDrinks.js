import express from "express";
import { allProductList } from "../public/js/data.js";

const recipeDrinksRouter = express.Router();

recipeDrinksRouter.get("/", (req, res) => {
  const group = req.query.group;
  const targetList = allProductList.filter((item) => item.group == group);

  res.render("pages/recipeRoutePages", {
    pageTitle: `${
      targetList[0].group.charAt(0).toUpperCase() + targetList[0].group.slice(1)
    } Recipes`,
    dataList: targetList,
  });
});

export default recipeDrinksRouter;
