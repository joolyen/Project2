// this must be altered to send results to the DB, preferably upon clicking "save"



function populateMovieTable(title, overview, poster_path) {
    $.post("/api/movies", {
      title: title,
      overview: overview,
      poster_path: poster_path
    })
      .then(() => {
        window.location.replace("/results");

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

//populateMovieTable("song", "stuff", "www.blah.com");

      });

