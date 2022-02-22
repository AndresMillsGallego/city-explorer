import React from 'react'

import './Main.css'

class Main extends React.Component {

  render() {
    let cityName;
    let cityLat;
    let cityLon;
    let cityMap;

    if (this.props.cityData.length > 0) {
      cityName = this.props.cityData[0].display_name;
      cityLat = this.props.cityData[0].lat;
      cityLon = this.props.cityData[0].lon;
      cityMap = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ}&center=${cityLat},${cityLon}&zoom=13`
    }

    return (
      <main>
        <p>This is my main for now, thanks for all the fish.</p>
        {this.props.cityData.length > 0 &&
          <article>
            <p>The location you have selected is <b id='name'>{cityName}</b></p>
            <p>The latitude for your selected city is: <b id='lat'>{cityLat}</b></p>
            <p>The longitude for your selected city is: <b id='lon'>{cityLon}</b></p>
            <img src={cityMap} alt={cityName} title={cityName}/>
          </article>
        }

      </main>
    )
  }
};

export default Main;