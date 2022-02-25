import React from 'react'
import Movie from './Movie'


import './Movies.css'

class Movies extends React.Component {
  render() {
   
    return (
      <Movie 
        cityMovies={this.props.cityMovies}
      />
    )
  }
}

export default Movies;