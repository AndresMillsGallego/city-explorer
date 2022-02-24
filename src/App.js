import React from 'react'
import Header from './Header'
import Main from './Main'
import './App.css';
import Footer from './Footer';
import CityForm from './CityForm'
import Weather from './Weather'
import Row from 'react-bootstrap/Row'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityData: [],
      cityWeather: []
    }
  };

  getCityData = (cityData) => {
    this.setState({ cityData: cityData });
    console.log(this.state.cityData[0])
  }

  getCityWeather = (cityWeather) => {
    this.setState({ cityWeather: cityWeather });
    console.log(this.state.cityWeather)
  }

  render() {
    console.log(this.state.cityWeather)
    
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
        {this.state.cityWeather.length > 0 &&
          <Row xs={1} md={2} lg={3} className="weatherRow">
            <Weather 
              cityData={this.state.cityData}
              cityWeather={this.state.cityWeather}
            />
            </Row>
        }
        
        <Footer />

      </>
    )
  }
}




export default App;
