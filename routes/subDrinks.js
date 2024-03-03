import express from "express";
import { allProductList } from "../public/js/data.js";

const subDrinksRouter = express.Router();

subDrinksRouter.get("/", (req, res) => {
  const productId = req.query.productId;
  const targetproduct = allProductList.find((item) => item.id == productId);

  res.render("pages/subRoutePages", {
    pageTitle: `${targetproduct.name} dish and recipe`,
    productImage: `images/${targetproduct.image}`,
    productName: targetproduct.name,
    productInfo: targetproduct.info,
  });
});

export default subDrinksRouter;
