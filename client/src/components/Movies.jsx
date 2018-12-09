import React from 'react';

class Movies extends React.Component {
  constructor(props) {
    super(props)

  }

  // Make an onClick for each list item. If the movies shown is the search results, 
  // onClick add it to the database (do it in the main app, and pass down the function)

  // If you're currently showing the fave list, delete the movie instead
  // You can tell which list is currently being rendered based on whether the prop "showFaves" is false (search results) or true (fave list) (within index.jsx)

  render() {
    if (this.props.movies.length > 0) {
      return (
      
        <ul className="movies">
        {console.log(' THIS IS THE movie list', this.props.movies[0])}
  
          {/* Make this list dynamic! */}
          {this.props.movies.map(({id, title, vote_average, release_date, poster_path}) => {
            
            return (
            <li className="movie_item">
            <img src="https://lh3.googleusercontent.com/97gnjRiv2zIRnDupzfxYFoI-6zlIK3jKgb6KOCDf_tjWkY9epbITdSFIbiKhuccOqQ=w300" />
            <div className="movie_description">
              <h2>{title}</h2>
              <section className="movie_details">
                <div className="movie_year">
                  <span className="title">Year</span>
                  <span>{release_date.substr(0,4)}</span>
                </div>
                <div className="movie_rating">
                  <span className="title">Rating</span>
                  <span>{vote_average}</span>
                </div>
              </section>
            </div>
          </li>)

          })}
  
          
          
  
        </ul>
      );
    } else {
      return (<div></div>)
    }
    
  }
}

export default Movies;