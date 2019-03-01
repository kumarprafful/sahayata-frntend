import React, { Component, Fragment } from "react";
import { Row, Card, CardTitle, CardBody, Col } from "reactstrap";

import IntlMessages from "Util/IntlMessages";

import { Colxx, Separator } from "Components/CustomBootstrap";
import BreadcrumbContainer from "Components/BreadcrumbContainer";

import axios from 'axios';

import AddTransport from '../../../transport/addTransport';
import ShowTransport from '../../../transport/showTransport';
import LanguageChanger from "Components/LanguageChanger";

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
          <AddTransport />
          <ShowTransport />
        </CardBody>
      );
    }
    else{
      return (
        <div>
        <ShowTransport data={this.state.transport} />
        <div>sdf</div>
        </div>
      );
    }
  }

  renderOrders() {
    if(this.state.orders == null) {
      return (
        <CardBody>
        <div className="center-align">
          <h2><LanguageChanger text="Currently there are no orders"/></h2>
        </div>
        </CardBody>
      );
    }
    else{
      <CardBody><LanguageChanger text="Orders"/></CardBody>
    }
  }

  renderPastOrders(){
    if(this.state.pastOrders == null) {
      return (
        <CardBody>
        <div className="center-align">
          <h2><LanguageChanger text="Currently there are no orders"/></h2>
        </div>
        </CardBody>
      );
    }
    else{
      <CardBody><LanguageChanger text="Orders"/></CardBody>
    }
  }

  render() {
    return (
      <Fragment>
      <Row>
      <Colxx xxs="12">
        <Card style={{'padding':'1em'}}>
          <CardTitle><h1><LanguageChanger text="Registered transport"/></h1></CardTitle>
          {this.renderTransport()}
        </Card>
        </Colxx>
      </Row>
      <br />
      <Row>
        <Colxx xxs="12">
          <Card style={{'padding':'1em'}}>
            <CardTitle><h1><LanguageChanger text="Current orders"/></h1></CardTitle>
            {this.renderOrders()}
          </Card>
          </Colxx>
      </Row>
      <br />

      <Row>
        <Colxx xxs="12">
          <Card style={{'padding':'1em'}}>
            <CardTitle><h1><LanguageChanger text="Past orders"/></h1></CardTitle>
            {this.renderPastOrders()}
          </Card>
        </Colxx>
      </Row>
      <br />
      </Fragment>
    );
  }
}
