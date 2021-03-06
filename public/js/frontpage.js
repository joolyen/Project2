$(() => {
  $(".search-options").on("click", event => {
    event.preventDefault();
    // first get value from input
    //add the value to a query string when we send request to endpoint
    //server needs to take value from body
    //use this to make API call

    const searchButton = $("#search-btn");
    console.log("search-btn", searchButton);
    searchButton.on("click", () => {
      const searchValue = $("#search-bar")
        .val()
        .trim();
      let signedIn = false;
      // get request with query string on end
      $.ajax({
        // eslint-disable-next-line quotes
        url: `/api/user_data`,
        method: "GET"
      })
        .then(res => {
          if (!res) {
            console.log("no user logged in");
            return;
          }
          signedIn = true;
          return;
        })
        .catch(err => console.log(err));

      if (!signedIn) {
        console.log("request forbidden");
        //TODO: redirect towards login page (window thingy)
      } else {
        $.ajax({
          url: `/api/moviesearch?value=${searchValue}`,
          method: "GET"
        }).then(res => {
          //line 20 is the response i'm getting from my server
          //create cards for each one and append to the parent div
          //handle for misspelled errors
          console.log(res);
        });
      }
    });
  });
});
