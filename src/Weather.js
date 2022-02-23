import React from "react";
import Card from 'react-bootstrap/Card'

class Weather extends React.Component {
  render() {
    return (
      <>
      { this.props.cityWeather &&
      <Card>
        <Card.Title>{this.props.cityData.display_name}</Card.Title>
        {/* <Card.Text>{this.props.cityWeather[0].description}</Card.Text> */}
        {/* <Card.Text>{this.props.cityWeather.data.description}</Card.Text> */}
      </Card>
      }
      </>
    )
  }
}

export default Weather;