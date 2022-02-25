import React from "react";
import WeatherDay from './WeatherDay'
import './Weather.css'


class Weather extends React.Component {
  render() {

    return (
      <>
        {this.props.cityData.length > 0 &&
          <WeatherDay
            cityWeather={this.props.cityWeather}
            cityData={this.props.cityData}
          />
        }
      </>
    )
  }
}

export default Weather;