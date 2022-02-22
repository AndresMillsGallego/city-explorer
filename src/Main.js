import React from 'react'

class Main extends React.Component {

  render() {
    let cityName;
    let cityLat;
    let cityLon
    if (this.props.cityData.length > 0) {
       cityName = this.props.cityData[0].display_name;
       cityLat = this.props.cityData[0].lat;
       cityLon = this.props.cityData[0].lon;
    }
    return (
      <main>
        <p>This is my main for now, thanks for all the fish.</p>
        {this.props.cityData.length > 0 &&
          <article>
            <p>{`The location you have selected is ${cityName}`}</p>
            <p>{`The latitude for your selected city is: ${cityLat}`}</p>
            <p>{`The longitude for your selected city is: ${cityLon}`}</p>
          </article>
        }

      </main>
    )
  }
};

export default Main;