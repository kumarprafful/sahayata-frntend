import React, { Component, Fragment } from "react";
import { Row, Col } from "reactstrap";

import IntlMessages from "Util/IntlMessages";

import { Colxx, Separator } from "Components/CustomBootstrap";
import BreadcrumbContainer from "Components/BreadcrumbContainer";

export default class extends Component {
  render() {
    return (
      <Fragment>
      <Row>
        <Col style={{'background':'red'}} xs="6">.col-6</Col>
        <Col style={{'background':'green'}} xs="6">.col-6</Col>
      </Row>
        <div>storage is here</div>
      </Fragment>
    );
  }
}
