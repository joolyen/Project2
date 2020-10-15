// this must be altered to send results to the DB, preferably upon clicking "save"


function populateMovieTable(title, overview, poster_path) {
    $.post("/api/movies", {
      title: title,
      overview: overview,
      poster_path: poster_path
    })
      .then(() => {
        window.location.replace("/results");
        // If there's an error, log the error
      })
      .catch(err => {
        console.error(err);
      });
    };

//populateMovieTable("song", "stuff", "www.blah.com");
