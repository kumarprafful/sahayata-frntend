import React, { Component, Fragment } from "react";
import { Row, Card, CardTitle, CardBody, Col } from "reactstrap";

import IntlMessages from "Util/IntlMessages";

import { Colxx, Separator } from "Components/CustomBootstrap";
import BreadcrumbContainer from "Components/BreadcrumbContainer";

export default class extends Component {
  constructor(props){
    super(props);
    this.state = {
      transport: null,
      orders: null,
      pastOrders: null
    }
  }

  renderTransport(){
    if(this.state.transport == null){
      return (
        <CardBody>
        <div className="center-align">
          <h2>Add Transport</h2>
          <h1 className="center"><i className="simple-icon-plus" /></h1>
        </div>
        </CardBody>
      );
    }
    else{
      return (
        <CardBody>THey are here</CardBody>
      );
    }
  }

  renderOrders() {
    if(this.state.orders == null) {
      return (
        <CardBody>
        <div className="center-align">
          <h2>Currently there are no orders</h2>
        </div>
        </CardBody>
      );
    }
    else{
      <CardBody>Orders</CardBody>
    }
  }

  renderPastOrders(){
    if(this.state.pastOrders == null) {
      return (
        <CardBody>
        <div className="center-align">
          <h2>Currently there are no orders</h2>
        </div>
        </CardBody>
      );
    }
    else{
      <CardBody>Orders</CardBody>
    }
  }

  render() {
    return (
      <Fragment>
      <Row>
      <Colxx xxs="12">
        <Card style={{'padding':'1em'}}>
          <CardTitle><h1>Registered transport</h1></CardTitle>
          {this.renderTransport()}
        </Card>
        </Colxx>
      </Row>
      <br />
      <Row>
        <Colxx xxs="12">
          <Card style={{'padding':'1em'}}>
            <CardTitle><h1>Current orders</h1></CardTitle>
            {this.renderOrders()}
          </Card>
          </Colxx>
      </Row>
      <br />

      <Row>
        <Colxx xxs="12">
          <Card style={{'padding':'1em'}}>
            <CardTitle><h1>Past orders</h1></CardTitle>
            {this.renderPastOrders()}
          </Card>
          </Colxx>
      </Row>
      <br />

      </Fragment>
    );
  }
}
