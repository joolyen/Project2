// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/passport");
const axios = require("axios");
const MOVIE_KEY = process.env.MOVIE_KEY

module.exports = function(app) {
    // Using the passport.authenticate middleware with our local strategy.
    // If the user has valid login credentials, send them to the members page.
    // Otherwise the user will be sent an error
    app.post("/api/login", passport.authenticate("local"), (req, res) => {
        // Sending back a password, even a hashed password, isn't a good idea
        res.json({
            email: req.user.email,
            id: req.user.id
        });
    });

    // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
    // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
    // otherwise send back an error
    app.post("/api/signup", (req, res) => {
        db.User.create({
                email: req.body.email,
                password: req.body.password
            })
            .then(() => {
                res.redirect(307, "/api/login");
            })
            .catch(err => {
                res.status(401).json(err);
            });
    });

    // Route for logging user out
    app.get("/logout", (req, res) => {
        req.logout();
        res.redirect("/");
    });

    // Route for getting some data about our user to be used client side
    app.get("/api/user_data", (req, res) => {
        if (!req.user) {
            // The user is not logged in, send back an empty object
            res.json({});
        } else {
            // Otherwise send back the user's email and id
            // Sending back a password, even a hashed password, isn't a good idea
            res.json({
                email: req.user.email,
                id: req.user.id
            });
        }
    });


    app.get("/api/moviesearch", function(req, res) {
        const { value } = req.query;
        console.log(value);
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${MOVIE_KEY}&language=en-US&query=${value}&page=1`)
            .then(response => res.json(response.data))
    });
};

//res.data


//"https://api.themoviedb.org/3/search/movie?api_key=8d048a3c98dcc45935bc83db0ed17aa6&language=en-US&query=movie&page=1&include_adult=false&year=2004"