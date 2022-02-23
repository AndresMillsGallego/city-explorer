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
      let weatherUrl = `http://localhost:3001/weather?city=${this.state.selectedCity}`
      let cityData = await axios.get(cityUrl);
      let cityWeather = await axios.get(weatherUrl);
      // console.log(cityWeather.data);
      this.props.getCityWeather(cityWeather.data);
      this.props.getCityData(cityData.data);
      this.setState({ showClear: true })
    } catch (error) {
      this.setState({
        error: true,
        errorType: error.response.data.error,
        errorStatus: error.response.status
      })
      // console.log(error.response);
      // console.log(this.state.error, this.state.errorType, this.state.errorStatus);

    }
  };

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
            <Form.Control type="text" onChange={this.getCityInput}></Form.Control>
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