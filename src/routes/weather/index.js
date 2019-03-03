import React, {Component, Fragment} from 'react';

import ReactWeather from 'react-open-weather';
import 'react-open-weather/lib/css/ReactWeather.css';

import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  setContainerClassnames,
  addContainerClassname,
  changeDefaultClassnames
} from "Redux/actions";


class Weather extends Component {

  componentDidMount() {
    const { containerClassnames, menuClickCount } = this.props;
    if(window.navigator.userAgent.match(/Android/i)) {
      this.props.setContainerClassnames(2,containerClassnames);
    }else{
      // console.log("dnsjbfkhdsvkhajkdjs");
      this.props.setContainerClassnames(3, containerClassnames);
    }
  }


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

const mapStateToProps = ({ menu , authUser }) => {
  const {
    containerClassnames,
    subHiddenBreakpoint,
    menuHiddenBreakpoint,
    menuClickCount
  } = menu;
  return {
    containerClassnames,
    subHiddenBreakpoint,
    menuHiddenBreakpoint,
    menuClickCount,
    authUser
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { setContainerClassnames, addContainerClassname, changeDefaultClassnames }
  )(Weather)
);


// export default Weather;
