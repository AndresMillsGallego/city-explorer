import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import { Card, Button } from 'react-bootstrap'

import './Main.css'

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zoom: 14
    }
  }

  zoomOut = () => this.setState({ zoom: this.state.zoom - 1 });

  zoomIn = () => this.setState({ zoom: this.state.zoom + 1 });

  render() {
    let cityName;
    let cityLat;
    let cityLon;
    let cityMap;

    if (this.props.cityData.length > 0) {
      cityName = this.props.cityData[0].display_name;
      cityLat = this.props.cityData[0].lat;
      cityLon = this.props.cityData[0].lon;
      cityMap = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ}&center=${cityLat},${cityLon}&zoom=${this.state.zoom}`
    }

    return (
      <>
        {
          this.props.cityData.length > 0 &&
          <Card id="cityCard" className='w-75'>
            <Card.Header><b id='name'>{cityName}</b></Card.Header>
            <div id='zoomDiv'>
              <Button variant='outline-primary' onClick={this.zoomOut}>- Zoom Out -</Button> <Button variant='outline-danger' onClick={this.zoomIn}>+ Zoom In +</Button>
            </div>
            <Card.Img src={cityMap} alt={cityName} title={cityName} className="h-75 w-75 mb-4" />
            <Card.Body>
              <ListGroup>
                <ListGroup.Item>The location you have selected is <b id='name'>{cityName}</b></ListGroup.Item>
                <ListGroup.Item>The latitude for your selected city is: <b id='lat'>{cityLat}</b></ListGroup.Item>
                <ListGroup.Item>The longitude for your selected city is: <b id='lon'>{cityLon}</b></ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        }
      </>


    )
  }
};

export default Main;