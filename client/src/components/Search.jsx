import React from 'react';
import Axios from 'axios';

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      genres: []
    };
  }

  
  getGenres() {
    //make an axios request in this component to get the list of genres from your endpoint GET GENRES
    return Axios.get('/movies/genres')
      .then((res) => {
        console.log('get genres success');
        this.setState({genres:res.data.genres});
        console.log(this.state.genres[0]['name']);
      })
  }
  componentDidMount() {
    this.getGenres();
    console.log('genre mounting', this.state);

  }


  render() {
    if (this.state.genres.length > 0) {
      return (
      
        <div className="search">
          <button onClick={() => {this.props.swapFavorites()}}>{this.props.showFaves ? "Show Results" : "Show Favorites"}</button>
          <br/><br/>
  
          {/* Make the select options dynamic from genres !!! */}
          {/* How can you tell which option has been selected from here? */}
  
          <select>
            {console.log('CHECK', this.state)}
            {this.state.genres.map(({id, name}) => {
              return (<option key={id}> {name}
              </option>)
            }
            
            )}
            
          </select>
          <br/><br/>
  
          <button>Search</button>
  
        </div>
      );
    } else {
      return (
        <div> </div>
      )
    }
    
  }
}

export default Search;