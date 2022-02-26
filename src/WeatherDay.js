import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

import './Weather.css'

class WeatherDay extends React.Component {
  render() {
    let weatherCards = this.props.cityWeather.map(day => (
      <Col key={day.date} className="">
        <Card className="w-75 m-auto mb-4">
          <Card.Text>{day.date}</Card.Text>
          <Card.Text>{day.description}</Card.Text>
        </Card>
      </Col>

    ));
    return (
      <>
        {this.props.cityData.length > 0 &&
          <Container id="weatherContainer" className="mt-5">
            <h2 className="mb-4">Weather Forecast</h2>
            <Row xs={1} sm={2} lg={3} className="m-auto">
              {weatherCards}
            </Row>
          </Container>
        }
      </>
    )
  }
}

export default WeatherDay;