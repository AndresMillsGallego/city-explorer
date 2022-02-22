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
      errorStatus: '',
      showClear: false
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
      this.setState({showClear: true})
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

  closeAlert = () => this.setState({ error: false });

  clearForm = () => {
    document.getElementById('cityForm').reset();
    this.setState({showClear: false});
  }

  render() {
    return (
      <>
        {this.state.error === true &&
          <>
          <p id='error'>{`Error: ${this.state.errorType}!  Status: ${this.state.errorStatus}.`}<button onClick={this.closeAlert}>X</button></p>
          </>
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
        <form onSubmit={this.getCityData} id="cityForm">
          <fieldset>
            <legend>Choose A City!</legend>
            <input type="text" onChange={this.getCityInput}></input>
          </fieldset>
          <div id='formButtonDiv'>
          <button type='submit'>Explore!</button>
          {this.state.showClear === true && <button onClick={this.clearForm}>Clear</button>}
          </div>
        </form>
        
      </>
    )
  }
}

export default CityForm;