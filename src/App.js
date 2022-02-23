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
    console.log(this.state.cityData[0].display_name)
  }

  getCityWeather = (cityWeather) => {
    this.setState({ cityWeather: cityWeather });
    console.log(this.state.cityWeather[0])
  }

  render() {
    let weatherCards = this.state.cityWeather.map((day, index)  => (
      <Weather key={index}
        cityData={this.state.cityData}
        cityWeather={this.state.cityWeather}
      ></Weather>
    ));

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
          // <p>{this.state.cityWeather[0].date}</p>
          <Row xs={1} md={2} lg={3}>
            {weatherCards}
          </Row>
        }
        
        <Footer />

      </>
    )
  }
}




export default App;
