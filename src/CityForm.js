import axios from 'axios';
import React from 'react';
// import Modal from 'react-bootstrap/Modal'

import './CityForm.css'


class CityForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCity: '',
      error: false,
      errorType: '',
      errorStatus: ''
    }
  }

  getCityInput = (event) => {
    let selectedCity = event.target.value;
    this.setState({ selectedCity: selectedCity })
    console.log(event.target.value);
  }

  getCityData = async (event) => {
    event.preventDefault();
    try {
      let cityUrl = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ}&q=${this.state.selectedCity}&format=json`
      let cityData = await axios.get(cityUrl);
      this.props.getCityData(cityData.data);
    } catch (error) {
      this.setState({
        error: true,
        errorType: error.response.data.error,
        errorStatus: error.response.status
      })
      console.log(error.response);
      console.log(this.state.error, this.state.errorType, this.state.errorStatus)
      alert(`Error: ${this.state.errorType}!  Status: ${this.state.errorStatus}.`);

    }
  };

  closeModal = () => this.setState({ error: false });

  render() {
    return (
      <>
        {this.state.error === true &&
          <p id='error'>{`Error: ${this.state.errorType}!  Status: ${this.state.errorStatus}.`}</p>
          // <Modal
          //   show={this.state.error}
          //   size='md'
          //   centered
          //   onHide={this.closeModal}
          // >
          //   <Modal.Header closeButton>
          //     <Modal.Title>Error!</Modal.Title>
          //   </Modal.Header>
          //   <Modal.Body>
              
          //   </Modal.Body>
          // </Modal>
        }
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