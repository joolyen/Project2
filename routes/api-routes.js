// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/passport");
const axios = require("axios");
const MOVIE_KEY = process.env.MOVIE_KEY;

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

//--------------------------------------------

// axios call to retrieve movie data from TMDB API
  app.get("/api/moviesearch", (req, res) => {
    console.log("USER MAKING REQUEST =>", req.user);
    const { value } = req.query;
    console.log(value);

    if (!req.user) {
      res.redirect("/login");
    } else {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=${MOVIE_KEY}&language=en-US&query=${value}&page=1`
        )
        .then(response => res.json(response.data))
        .catch(err => console.log(err));
    }
  });

  // to create the movies table in movie_db
  app.post("/api/members", (req, res) => {
    db.Movie.create({
      title: req.body.title,
    })
      .then(() => {
        res.redirect(307, "/api/login");
      })
      .catch(err => {
        res.status(401).json(err);
      });
  });


  app.post("/api/movies", function(req, res) {
    // add movies to the database
    console.log("POST movies:", req.body)
     db.Movie.create({
    title: req.body.title,
    overview: req.body.overview,
    poster_path: req.body.poster_path

    // and any other fields you would like to add
    }).then(function(dbMovies) {
    
     res.json(dbMovies);
       });
       });


// doug's new project for wednesday night
=======


// GET route for getting all of the todos
app.get("/api/Movies", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Movie.findAll({}).then(function(dbMovies) {
      // We have access to the todos as an argument inside of the callback function
      res.json(dbMovies);
    });
  });



//from askBCS
app.post("/api/Movies", function(req, res) {
    // add movies to the database
    console.log("POST movies:", req.body)
     db.Movies.create({
    movie_name: req.body.movie_name,
    popularity: req.body.popularity
    // and any other fields you would like to add
    }).then(function(dbMovies) {
    
     res.json(dbMovies);
       });
       });

};

// *** make sure to wrap within the module exports curly brace

//   app.get("/api/results", function(req, res) {
//     // Here we add an "include" property to our options in our findAll query
//     // We set the value to an array of the models we want to include in a left outer join
//     // In this case, just db.Post
//     db.Movies.findAll({
//       include: [db.Post]
//     }).then(function(dbMovie) {
//       res.json(dbAhor);
//     });
//   });

//   app.get("/api/authors/:id", function(req, res) {
//     // Here we add an "include" property to our options in our findOne query
//     // We set the value to an array of the models we want to include in a left outer join
//     // In this case, just db.Post
//     db.Author.findOne({
//       where: {
//         id: req.params.id
//       },
//       include: [db.Post]
//     }).then(function(dbAuthor) {
//       res.json(dbAuthor);
//     });
//   });

//   app.post("/api/authors", function(req, res) {
//     db.Author.create(req.body).then(function(dbAuthor) {
//       res.json(dbAuthor);
//     });
//   });

//   app.delete("/api/authors/:id", function(req, res) {
//     db.Author.destroy({
//       where: {
//         id: req.params.id
//       }
//     }).then(function(dbAuthor) {
//       res.json(dbAuthor);
//     });
//   });

// };
