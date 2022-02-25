import React from 'react'
import Header from './Header'
import Main from './Main'
import './App.css';
import Footer from './Footer';
import CityForm from './CityForm'
import Weather from './Weather'
import Movies from './Movies'
import Row from 'react-bootstrap/Row'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityData: [],
      cityWeather: [],
      cityMovies: []
    }
  };

  getCityData = (cityData) => {
    this.setState({ cityData: cityData });
  }

  getCityWeather = (cityWeather) => {
    this.setState({ cityWeather: cityWeather });
  }

  getCityMovies = (cityMovies) => {
    this.setState({ cityMovies: cityMovies.data });
  }

  render() {

    return (
      <>
        <Header />
        <CityForm
          getCityData={this.getCityData}
          getCityWeather={this.getCityWeather}
          getCityMovies={this.getCityMovies}
        />
        <Main
          cityData={this.state.cityData}
          selectedCity={this.state.selectedCity}
        />
        {this.state.cityWeather.length > 0 &&
          <>
            <Weather
              cityData={this.state.cityData}
              cityWeather={this.state.cityWeather}
            />
            <Movies 
              cityMovies={this.state.cityMovies}
            />
          </>
        }
        <Footer />
      </>
    )
  }
}




export default App;
