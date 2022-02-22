import React from 'react'
import Modal from 'react-bootstrap/Modal'

class ErrorModal extends React.Component {
  render() {
    return (
      <Modal 
        show={this.props.error}
        size='md'
        centered
        onHide={this.props.closeModal}
      >
        <Modal.Header closeButton>
          <Modal.Title>Error!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{`Error: ${this.props.errorType}!  Status: ${this.props.errorStatus}`}</p>
        </Modal.Body>

      </Modal>
    )
  }
}

export default ErrorModal;