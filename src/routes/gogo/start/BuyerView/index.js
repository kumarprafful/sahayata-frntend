import React, { Component, Fragment } from "react";
import { Row, Col, Card, CardBody, CardTitle } from "reactstrap";

import IntlMessages from "Util/IntlMessages";

import { Colxx, Separator } from "Components/CustomBootstrap";
import BreadcrumbContainer from "Components/BreadcrumbContainer";

import AddWarehouse from '../../../warehouse/addWarehouse';
import LanguageChanger from "Components/LanguageChanger";

import axios from "axios";

export default class extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <Fragment>
        Buyer view
      </Fragment>
    );
  }
}
