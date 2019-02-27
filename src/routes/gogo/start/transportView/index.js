import React, { Component, Fragment } from "react";
import { Row, Card, CardTitle, CardBody, Col } from "reactstrap";

import IntlMessages from "Util/IntlMessages";

import { Colxx, Separator } from "Components/CustomBootstrap";
import BreadcrumbContainer from "Components/BreadcrumbContainer";

import axios from 'axios';

import AddTransport from '../../../transport/addTransport';


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
    const userId = localStorage.userId;
    const apiURL = `https://sahayata-farmer.herokuapp.com/sahayata/transport/${userId}`;
    console.log('userId - ', apiURL);
    axios.get(apiURL)
    .then(res => {
      console.log(res);
    })
    .catch(error => {
      console.log(error);
    })

    if(this.state.transport == null){
      return (
        <CardBody>
        <AddTransport />
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
