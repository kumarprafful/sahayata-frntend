import React, { Component, Fragment } from "react";
import { Row, Col, Card, CardBody, CardTitle } from "reactstrap";

import IntlMessages from "Util/IntlMessages";

import { Colxx, Separator } from "Components/CustomBootstrap";
import BreadcrumbContainer from "Components/BreadcrumbContainer";

export default class extends Component {
  constructor(props){
    super(props);
    this.state = {
      warehouses: null,
      orders: null
    }
  }

  renderWarehouses() {
    if (this.state.warehouses == null) {
      return (
        <CardBody>
        <div className="center-align">
          <h2>Add warehouse</h2>
          <h1 className="center"><i className="simple-icon-plus" /></h1>
        </div>
        </CardBody>
      );
    }
  }

  renderCurrentOrders() {
    if (this.state.orders == null) {
      return (
        <CardBody>
        <div className="center-align">
          <h2>Currently there are no orders</h2>
        </div>
        </CardBody>
      );
    }
  }

  render() {
    return (
      <Fragment>
      <Row>
      <Colxx xxs="12">
        <Card style={{'padding':'1em'}}>
          <CardTitle><h1>Registered Warehouses</h1></CardTitle>
          {this.renderWarehouses()}
        </Card>
        </Colxx>
      </Row>

      <br />
      <Row>
        <Colxx xxs="12">
          <Card style={{'padding':'1em'}}>
            <CardTitle><h1>Current orders</h1></CardTitle>
            {this.renderCurrentOrders()}
          </Card>
          </Colxx>
      </Row>
      </Fragment>
    );
  }
}
