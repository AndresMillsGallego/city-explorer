import React from 'react'
import Header from './Header'
import Main from './Main'
import './App.css';
import Footer from './Footer';
import CityForm from './CityForm'
import Weather from './Weather'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityData: [],
      cityWeather: []
    }
  };

  getCityData = (cityData) => {
    this.setState({cityData: cityData});
  }
  
  getCityWeather = (cityWeather) => {
    this.setState({cityWeather: cityWeather});
    console.log(this.state.cityWeather[0].date)
  }
  
  render() {
    
    return (
      <>
        <Header />
        <CityForm 
        getCityData={this.getCityData}
        getCityWeather={this.getCityWeather}
        />
        <Main 
        cityData={this.state.cityData}
        selectedCity={this.state.selectedCity}
        />
        { this.state.cityWeather.length > 0 &&
        <p>{this.state.cityWeather[0].date}</p>
        }
        <Weather
          cityData={this.state.cityData}
          cityWeather={this.state.cityWeather}
        ></Weather>
        <Footer />
      </>
    )
  }
}




export default App;
