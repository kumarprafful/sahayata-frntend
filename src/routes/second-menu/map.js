import React, { Component , Fragment } from "react";
import { Row } from "reactstrap";

import IntlMessages from "Util/IntlMessages";

import { Colxx, Separator } from "Components/CustomBootstrap";
import BreadcrumbContainer from "Components/BreadcrumbContainer";

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {
  render() {
    return (
      <Map google={this.props.google} zoom={14}>

      <Marker onClick={this.onMarkerClick}
            name={'Current location'} />

      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyB9vqYI0HEsmewrWOek_Z0O555MyjBuviw")
})(MapContainer)
