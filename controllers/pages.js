const { Router } = require("express");
const router = Router();

/////////////////////////
// Routers
////////////////////////
//router.use("/dog", dogRouter) // "/pages/dog" routes

/////////////////////
// /api routes
/////////////////////
router.get("/", (req, res) => {
  res.status(200).render("index", { hello: "Hello World" }); // render views/index.ejs
});

module.exports = router;
