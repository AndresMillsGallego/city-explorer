import React from 'react';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

class CityForm extends React.Component {
  render() {
    return (
      <>
        <Form>
          <Form.Group>
          <Form.Label>
            <input type="text"></input>
          </Form.Label>
          <Button type="submit">Explore!</Button>
        </Form.Group>
      </Form>
      </>
    )
  }
}

export default CityForm;