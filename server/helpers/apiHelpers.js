const request = require('request');
const axios = require('axios');
const { API_KEY } = require('../../config.js');

// write out logic/functions required to query TheMovieDB.org

// FOR REFERENCE:
// https://www.themoviedb.org/account/signup
// https://developers.themoviedb.org/3/discover/movie-discover
// Get your API Key and save it in your config file

// Don't forget to export your functions and require them within your server file

//get genres

var queryAPI = function(requestString) {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.themoviedb.org/3${requestString}?language=en-US&api_key=${API_KEY}",
        "method": "GET",
        "headers": {},
        "data": "{}"
      }
    $.ajax(settings).done(function (response) {
        console.log(response);
    });
}



//export default queryAPI;
//export API_KEY =  API_KEY;