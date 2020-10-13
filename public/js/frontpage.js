
//get search button and add event handler
// first get value from input
//add the value to a query string when we send request to endpoint
//server needs to take value from body
//use this to make API call

let searchButton = $("#search-btn")
console.log("search-btn", searchButton);
searchButton.on("click", function(event) {
const searchValue = $("#search-bar").val().trim()
console.log(searchValue)
//get request with query string on end
$.ajax({
    url: `/api/moviesearch?value=${searchValue}`,
    method: "GET",
    }).then(function(res) {
        //line 20 is the response i'm getting from my server
//create cards for each one and append to the parent div
//handle for misspelled errors
        console.log(res);
    });
});


