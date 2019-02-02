import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
// import AnyComponent from './components/filename.jsx'
import Search from './components/Search.jsx'
import Movies from './components/Movies.jsx'
import Axios from 'axios';


class App extends React.Component {
  constructor(props) {
  	super(props)
  	this.state = {
      movies: [],
      favorites: [{deway: "favorites"}],
      showFaves: false,
    };
    
    // you might have to do something important here!
    this.getMovies = this.getMovies.bind(this);
    this.saveMovie = this.saveMovie.bind(this);
    this.swapFavorites = this.swapFavorites.bind(this);
  }


  getMovies(genreId) {
    // make an axios request to your server on the GET SEARCH endpoint
    return Axios.get('/movies/search', {
      params: {
        value: genreId
      }
    })
      .then((res) => {
        console.log('get genres success');
        this.setState({movies:res.data.results});
      })
  }

  saveMovie(movieID) {
    // same as above but do something diff
    console.log('save function invoked', movieID.id);
    return Axios.post('/movies/save', {
      params: {
        value: movieID.id
      }
    })
    .then((res) => {
      console.log('saveMovieSuccess:')
    })
  }

  deleteMovie() {
    // same as above but do something diff
  }

  swapFavorites() {
  //dont touch
    this.setState({
      showFaves: !this.state.showFaves
    });
  }

  componentDidMount() {
    console.log('did mount')
    this.getMovies();

  }


  render () {
  	return (
      <div className="app">
        <header className="navbar"><h1>Bad Movies</h1></header> 
        
        <div className="main">
          <Search swapFavorites={this.swapFavorites} showFaves={this.state.showFaves} getMovies = {this.getMovies}/>
          <Movies movies={this.state.showFaves ? this.state.favorites : this.state.movies} showFaves={this.state.showFaves}
            saveMovie = {this.saveMovie}/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));