import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

import './Weather.css'


class Weather extends React.Component {
  render() {
    let weatherCards = this.props.cityWeather.map(day => (
      <Col key={day.date} className="mt-4 mb-4">
        <Card className="w-50 m-auto">
          {/* <Card.Title>{this.props.cityData[0].display_name}</Card.Title> */}
          <Card.Text>{day.date}</Card.Text>
          <Card.Text>{day.description}</Card.Text>
        </Card>
      </Col>

    ));
    return (
      <>
        {this.props.cityData.length > 0 &&
          <Container id="weatherContainer" className="w-100 m-auto">
            <h2>Weather Forecast</h2>
            <Row xs={1} sm={2} md={3} lg={4}>
              {weatherCards}
            </Row>
          </Container>
        }
      </>
    )
  }
}

export default Weather;