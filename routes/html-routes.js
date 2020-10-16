// Requiring path to so we can use relative routes to our HTML files
const path = require("path");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  // We want users to search freely for the movie that they are looking for
  app.get("/", (req, res) => {
    res.render("search", {title: "app landing page", layout: "home" });
  });
  
  
  
  app.get("/signup", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/index");
    } else {
      res.render("signup");
    }
  });

  app.get("/login", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    } else {
      res.render("login");
    }
  });

  app.get("/results", (req, res) => {
    res.render("results");
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, (req, res) => {
    res.render("members");
  });

  app.get("/index", isAuthenticated, (req, res) => {
    res.render("index");
  });
};
