import axios from 'axios';
import React from 'react';
import { Modal, ListGroup, Form, Button, ButtonGroup } from 'react-bootstrap'


import './CityForm.css'


class CityForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCity: '',
      error: false,
      errorType: '',
      errorStatus: '',
      cityData: [],
      showClear: false
    }
  }

  getCityInput = (event) => {
    let selectedCity = event.target.value;
    this.setState({ selectedCity: selectedCity })
  }

  getCityData = async (event) => {
    event.preventDefault();
    try {
      let cityUrl = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ}&q=${this.state.selectedCity}&format=json`
      let cityData = await axios.get(cityUrl);
      this.props.getCityData(cityData.data);
      this.setState({
        showClear: true,
        cityData: cityData.data[0]
      })
    } catch (error) {
      this.setState({
        error: true,
        errorType: 'We are having trouble getting the city data.',
        errorStatus: error.response.status
      })
    } this.getWeather();
      this.getMovies();
  };
  
  getWeather = async () => {
    try {
      let weatherUrl = `${process.env.REACT_APP_LIVE_SERVER}/weather?lat=${this.state.cityData.lat}&lon=${this.state.cityData.lon}`
      let cityWeather = await axios.get(weatherUrl);
      this.props.getCityWeather(cityWeather.data);
    } catch (error) {
      console.log('error');
      this.setState({
        error: true,
        errorType: 'We are having trouble getting the weather data.',
        errorStatus: error.response.status
      })
    }
  }

  getMovies = async () => {
    try {
      let movieUrl = `${process.env.REACT_APP_LIVE_SERVER}/movie?searchQuery=${this.state.selectedCity}`;
      let cityMovies = await axios.get(movieUrl);
      this.props.getCityMovies(cityMovies);
    } catch (error) {
      this.setState({
        error: true,
        errorType: 'We are having trouble getting the movie data.',
        errorStatus: error.response.status
      })
    }
  }

  closeAlert = () => this.setState({ error: false });

  clearForm = () => {
    document.getElementById('cityForm').reset();
    this.setState({ showClear: false });
  }

  render() {
    return (
      <>
        {this.state.error === true &&
          <>
            <Modal
              show={this.state.error}
              size='md'
              centered
              onHide={this.closeAlert}
            >
              <Modal.Header closeButton>
                <Modal.Title>Error!</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <ListGroup.Item>{`Error: ${this.state.errorType}!`}</ListGroup.Item>
                <ListGroup.Item>{`Status: ${this.state.errorStatus}!`}</ListGroup.Item>
              </Modal.Body>
            </Modal>
          </>
        }
        <Form onSubmit={this.getCityData} id="cityForm">
          <Form.Group>
            <Form.Label>Choose A City!</Form.Label>
            <Form.Control 
              type="text" 
              onChange={this.getCityInput}
              className="w-25 m-auto"
              ></Form.Control>
          </Form.Group>
          <ButtonGroup id='formButtons'>
            <Button type='submit'>Explore!</Button>
            {this.state.showClear === true && <Button onClick={this.clearForm}>Clear</Button>}
          </ButtonGroup>
        </Form>

      </>
    )
  }
}

export default CityForm;