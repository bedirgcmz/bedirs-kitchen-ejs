import express from "express";
import { allProductList } from "../public/js/data.js";

const subMealsRouter = express.Router();

// let produceId;
// subMealsRouter.get("/meals/produce", (req, res) => {
//   produceId = req.query.produceId;
// });

subMealsRouter.get("/", (req, res) => {
  const productId = req.query.productId;
  const targetproduct = allProductList.find((item) => item.id == productId);

  res.render("pages/subRoutePages", {
    pageTitle: `What is ${targetproduct.name}?`,
    productImage: `images/${targetproduct.image}`,
    productName: targetproduct.name,
    productInfo: targetproduct.info,
  });
});

export default subMealsRouter;
