import React from "react";
import Card from 'react-bootstrap/Card'

class Weather extends React.Component {
  render() {
    return (
      <>
      { this.props.cityData.length > 0 &&
        <Card>
          <Card.Title>{this.props.cityData[0].display_name}</Card.Title>
          <Card.Text>{this.props.cityWeather[0].date}</Card.Text>
          <Card.Text>{this.props.cityWeather[0].description}</Card.Text>
        </Card>
      }
      </>
    )
  }
}

export default Weather;