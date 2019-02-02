const movieModel = require('../models/movieModel.js');
const apiHelpers = require('../helpers/apiHelpers.js');
const axios = require('axios');
const { API_KEY } = require('../../config.js');
const {saveFave} = require('../../db/sql/index.js')

    // https://www.themoviedb.org/account/signup
    // get your API KEY
        // use this endpoint to search for movies by genres, you will need an API key

//Return requests to the client
module.exports = {
  getSearch: (req, res) => {
    // get the search genre
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=vote_average.asc&include_adult=false&include_video=false&page=1&with_genres=${req.query.value}`)
      .then(function(response) {
        const data = response.data;
        //console.log(data);
        res.send(data);
      })
      .catch((err)=> {
        console.log('getSearch was not successful', err)
      })
    console.log('inside getsearch')
    //console.log(' These are params', req)
    console.log('value is', req.query.value)


    // https://api.themoviedb.org/3/discover/movie

    // and sort them by horrible votes using the search parameters in the API
  },
  getGenres: (req, res) => {
    // make an axios request to get the list of official genres
    axios.get(`https://api.themoviedb.org/3/genre/movie/list?language=en-US&api_key=${API_KEY}`)
      .then(function(response) {
        const data = response.data;
        //console.log(data);
        res.send(data);
      })
      .catch((err) => {
        console.log('getGenres was not successful')
      })
    
    // use this endpoint, which will also require your API key: https://api.themoviedb.org/3/genre/movie/list
    
    // send back
  },
  saveMovie: (req, res) => {
    console.log('inside server saveMovie:', req.body.params.value)
    //save the data to MYSQL
    saveFave(req.body.params.value)
      .then(() => res.sendStatus(201))
      .catch((err) => {
        res.sendStatus(500);
        console.log('error on saveFave: ', err)
      })




  },
  deleteMovie: (req, res) => {

  }
}