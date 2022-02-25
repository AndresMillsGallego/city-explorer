import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

import './Movies.css'

class Movies extends React.Component {
  render() {
    let movieCards = this.props.cityMovies.map(movie => (
      <Col key={movie.title} className="mt-4 mb-4 m-auto w-75 h-75">
        <Card className="w-75 h-75 m-auto">
          <Card.Title className='w-50 m-auto mb-2'>{movie.title}</Card.Title>
          <Card.Text>{movie.releaseDate}</Card.Text>
          <Card.Text>{movie.description}</Card.Text>
        </Card>
      </Col>
    ));
    return (
      <>
       {this.props.cityMovies.length > 0 &&
          <Container id="movieContainer" className="w-100">
            <h2>City Movies</h2>
            <Row xs={1} sm={2}>
              {movieCards}
            </Row>
          </Container>
        }
      </>
    )
  }
}

export default Movies;