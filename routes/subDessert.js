import express from "express";
import { allProductList } from "../public/js/data.js";

const subDessertsRouter = express.Router();

subDessertsRouter.get("/", (req, res) => {
  const productId = req.query.productId;
  const targetproduct = allProductList.find((item) => item.id == productId);

  res.render("pages/subRoutePages", {
    pageTitle: `What is ${targetproduct.name}?`,
    productImage: `images/${targetproduct.image}`,
    productName: targetproduct.name,
    productInfo: targetproduct.info,
  });
});

export default subDessertsRouter;
