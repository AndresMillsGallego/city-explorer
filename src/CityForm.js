import axios from 'axios';
import React from 'react';

import './CityForm.css'


class CityForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCity: ''
    }
  }
  
  getCityInput = (event) => {
    let selectedCity = event.target.value;
    this.setState({selectedCity: selectedCity})
    console.log(event.target.value);
  }

  getCityData = async (event) => {
    event.preventDefault();
    let cityUrl = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ}&q=${this.state.selectedCity}&format=json`
    let cityData = await axios.get(cityUrl);
    this.props.getCityData(cityData.data);
    
  }

  render() {
    return (
      <>
      <form onSubmit={this.getCityData} name="cityForm">
        <fieldset>
          <legend>Choose A City!</legend>
        <input type="text" onChange={this.getCityInput} name="cityForm"></input>
        </fieldset>
        <button type='submit' name="cityForm">Explore!</button>
      </form>
      </>
    )
  }
}

export default CityForm;