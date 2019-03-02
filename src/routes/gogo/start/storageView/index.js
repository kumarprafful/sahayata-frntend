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
    this.state = {
      warehouses: null,
      orders: null
    }
  }

  componentWillMount(){
    var userId =  localStorage.userId;
    axios.get(`https://sahayata-farmer.herokuapp.com/sahayata/storageall/${userId}`).then((res)=>{
      this.setState({warehouses: res.data});
    })
  }

  renderWarehouses() {
    if (this.state.warehouses == null) {
      return (
        <div className="loading"/>
      );
    }
    else if(this.state.warehouses[0] ==  undefined && localStorage.userType=="storage"){
      return <AddWarehouse />
    }
    else {
      return this.state.warehouses.map((element)=>{
        console.log(element);
        return (
          <Colxx xxs="4">
            <Card>
              <CardBody >
                <h2 >{element.name}</h2>
                <p>Capacity: {element.capacity}</p>
                <h5>Price: {element.price}</h5>
                <p>Address: {element.address}</p>
              </CardBody>
            </Card>
          </Colxx>
        );
      })
    }

  }

  renderCurrentOrders() {
    if (this.state.orders == null) {
      return (
        <CardBody>
        <div className="center-align">
          <h2><LanguageChanger text="Currently there are no orders"/></h2>
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
          <CardTitle><h1><LanguageChanger text="Registered Warehouses"/></h1></CardTitle>
          {this.renderWarehouses()}
        </Card>
        </Colxx>
      </Row>

      <br />
      <Row>
        <Colxx xxs="12">
          <Card style={{'padding':'1em'}}>
            <CardTitle><h1><LanguageChanger text="Current orders"/></h1></CardTitle>
            {this.renderCurrentOrders()}
          </Card>
          </Colxx>
      </Row>
      </Fragment>
    );
  }
}
