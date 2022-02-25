import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

import './Weather.css'

class WeatherDay extends React.Component {
  render() {
    let weatherCards = this.props.cityWeather.map(day => (
      <Col key={day.date} className="mt-4 mb-4">
        <Card className="w-50 m-auto">
          <Card.Text>{day.date}</Card.Text>
          <Card.Text>{day.description}</Card.Text>
        </Card>
      </Col>

    ));
    return (
      <>
        {this.props.cityData.length > 0 &&
          <Container >
            <h2>Weather Forecast</h2>
            <Row xs={1} sm={2} md={3} lg={4} className="m-auto w-100">
              {weatherCards}
            </Row>
          </Container>
        }
      </>
    )
  }
}

export default WeatherDay;