import React, { Component, Fragment } from "react";
import { Row, Card, CardBody, Col } from "reactstrap";

import IntlMessages from "Util/IntlMessages";

import { Colxx, Separator } from "Components/CustomBootstrap";
import BreadcrumbContainer from "Components/BreadcrumbContainer";

export default class extends Component {
  render() {
    return (
      <Fragment>
        <Row>
          <Colxx xxs="12">
            <Row>
              <Colxx xxs="6">Prince</Colxx>
              <Colxx xxs="6">Prince</Colxx>
            </Row>
          </Colxx>
        </Row>
      </Fragment>
    );
  }
}
