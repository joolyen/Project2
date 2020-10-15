$(document).ready(() => {
  // eslint-disable-next-line camelcase
  function populateMovieTable(title, overview, poster_path) {
    $(".saveBtn").on("save", event => {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();

      const newMovie = {
        // eslint-disable-next-line camelcase
        movie_title: $("#movie")
          .val()
          .trim()
      };

      // Send the GET request.
      $.ajax("/api/movies", {
        type: "GET",
        data: newMovie
      }).then(() => {
        console.log("Created new movie");
        // Reload the page to get the updated list
        location.reload();
      });
    });
    $.post("/api/movies", {
      title: title,
      overview: overview,
      // eslint-disable-next-line camelcase
      poster_path: poster_path
    })
      .then(() => {

        //window.location.replace("/results");


    function loginUser(email, password) {
    $.post("/api/login", {
      email: email,
      password: password
    })
      .then(() => {
        window.location.replace("/members");
      
        // If there's an error, log the error
      })
      .catch(err => {
        console.error(err);

      });
    };


  // populateMovieTable("song", "stuff", "www.blah.com");

      });

    }
};