////////////////////////////////
// Dependencies
////////////////////////////////
require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const ApiRouter = require("./controllers/api");
const PagesRouter = require("./controllers/pages");

////////////////////////////////
// Global Variables
////////////////////////////////
const app = express();
const { PORT = 4000 } = process.env;

/////////////////////////////////
// Middleware
/////////////////////////////////
app.set("view engine", "ejs"); // enable EJS for res.render
app.use(morgan("tiny")); // Logging
app.use(express.static("react/build")); //serve react build folder
app.use(express.static("public")); // Use for hosting an CSS/JS files for EJS templates
app.use(express.json()); // Parse Json Bodies
app.use("/api", ApiRouter); //attach routes from controllers/api
app.use("/pages", PagesRouter); //attach routes from controllers/pages
app.use("*", (req, res) => res.redirect("/")); //catch-all route for react router

/////////////////////////////////
// Listener
/////////////////////////////////
app.listen(PORT, () => console.log(`Listening to port ${PORT}`));
