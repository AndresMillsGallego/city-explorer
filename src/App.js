import React from 'react'
import Header from './Header'
import Main from './Main'
import './App.css';
import Footer from './Footer';
import CityForm from './CityForm'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityData: [],
    }
  };

  getCityData = (cityData) => {
    this.setState({cityData: cityData});
  }
  
  
  render() {
    return (
      <>
        <Header />
        <CityForm 
        getCityData={this.getCityData}
        />
        <Main 
        cityData={this.state.cityData}
        selectedCity={this.state.selectedCity}
        />
        <Footer />
      </>
    )
  }
}




export default App;
