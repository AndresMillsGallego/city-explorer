import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card'

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
          <Card>
            <Card.Header>The location you have selected is <b id='name'>{cityName}</b></Card.Header>
            <div id='zoomDiv'>
              <button onClick={this.zoomOut}>- Zoom Out -</button> <button onClick={this.zoomIn}>+ Zoom In +</button>
            </div>
            <Card.Img src={cityMap} alt={cityName} title={cityName} className="h-100 w-100" />
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