import express from "express";
import * as path from "path";
import dessertsRouter from "./routes/desserts.js";
import drinksRouter from "./routes/dirnks.js";
import mealsRouter from "./routes/meals.js";

const app = express();
const port = 3002;
const __dirname = path.resolve();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("pages/home", {
    pageTitle: "🍽️ It's Nice to See You Here 🍳",
  });
});

app.use("/desserts", dessertsRouter);
app.use("/drinks", drinksRouter);
app.use("/meals", mealsRouter);

app.use(express.static("public"));
app.listen(port, console.log(`Server is working on port ${port}`));
