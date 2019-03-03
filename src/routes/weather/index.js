import React, {Component, Fragment} from 'react';

import ReactWeather from 'react-open-weather';
import 'react-open-weather/lib/css/ReactWeather.css';


class Weather extends Component {
  render() {
    return (
      <ReactWeather
    forecast="5days"
    apikey="5e276e748bea4b24b6222100190303"
    type="city"
    city="Chennai"
    moon_phase="New Moon"
    sunrise
    lang="hi"
    />
    );
  }

}

export default Weather;
