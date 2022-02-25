import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'


class Movies extends React.Component {
  render() {
    let movieCards = this.props.cityMovies.map(movie => (
      <Col key={movie.title} className="mt-4 mb-4">
        <Card className="w-50 m-auto">
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>{movie.releaseDate}</Card.Text>
          <Card.Text>{movie.description}</Card.Text>
        </Card>
      </Col>
    ));
    return (
      <>
       {this.props.cityMovies.length > 0 &&
          <Container id="movieContainer" className="w-100 m-auto">
            <h2>City Movies</h2>
            <Row xs={1} sm={2} md={3} lg={4}>
              {movieCards}
            </Row>
          </Container>
        }
      </>
    )
  }
}

export default Movies;