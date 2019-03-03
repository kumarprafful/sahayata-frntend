import React, { Component, Fragment } from "react";
import { Row, Card,CardTitle } from "reactstrap";
import axios from "axios";
import { Colxx, Separator } from "Components/CustomBootstrap";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profitData: null
    }
  }

  componentWillMount() {
    axios.get("https://sahayata-farmer.herokuapp.com/profit").then(res => {
      this.setState({ profitData: res.data });
    });
  }

  loadProfit() {

    var profit = this.state.profitData;
    if(profit === null){
      return <div className="loading"/>
    }
    else {
      return (
        <Fragment>
          <Row>
            <Colxx xxs="2">
              <Card>
                <h4>
                  <b>Crop Quantity</b>
                </h4>
              </Card>
            </Colxx>
            <Colxx xxs="4">
              <Card>
                <h4>{this.props.quantity} kg</h4>
              </Card>
            </Colxx>
            <Colxx xxs="2">
              <Card>
                <h4>
                  <b>Crop Quantity</b>
                </h4>
              </Card>
            </Colxx>
            <Colxx xxs="4">
              <Card>
                <h4>{this.props.quantity} kg</h4>
              </Card>
            </Colxx>
          </Row>
          <br />
          <Row>
            <Colxx xxs="2">
              <Card>
                <h4>
                  <b>Nearest Crop Price</b>
                </h4>
              </Card>
            </Colxx>
            <Colxx xxs="4">
              <Card>
                <h4>{profit.type1.nearestCropPrice} ₹/kg</h4>
              </Card>
            </Colxx>
            <Colxx xxs="2">
              <Card>
                <h4>
                  <b>Last Year Max Price</b>
                </h4>
              </Card>
            </Colxx>
            <Colxx xxs="4">
              <Card>
                <h4>{profit.type2.lastyearMaxPrice} ₹/kg</h4>
              </Card>
            </Colxx>
          </Row>
          <br />
          <Row>
            <Colxx xxs="2">
              <Card>
                <h4>
                  <b>Transport Price</b>
                </h4>
              </Card>
            </Colxx>
            <Colxx xxs="4">
              <Card>
                <h4>{profit.type1.transportPrice} ₹/km</h4>
              </Card>
            </Colxx>
            <Colxx xxs="2">
              <Card>
                <h4>
                  <b>Transport Price</b>
                </h4>
              </Card>
            </Colxx>
            <Colxx xxs="4">
              <Card>
                <h4>{profit.type2.transportPrice} ₹/km</h4>
              </Card>
            </Colxx>
          </Row>
          <br />
          <Row>
            <Colxx xxs="2">
              <Card>
                <h4>
                  <b>Nearest Mandi</b>
                </h4>
              </Card>
            </Colxx>
            <Colxx xxs="4">
              <Card>
                <h4>{profit.type1.nearestMandi} km</h4>
              </Card>
            </Colxx>
            <Colxx xxs="2">
              <Card>
                <h4>
                  <b>Nearest Warehouse</b>
                </h4>
              </Card>
            </Colxx>
            <Colxx xxs="4">
              <Card>
                <h4>{profit.type2.nearestWarehouse} km</h4>
              </Card>
            </Colxx>
          </Row>
          <br />
          <Row>
            <Colxx xxs="2">
              <Card>
                <h4>
                  <b>Total</b>
                </h4>
              </Card>
            </Colxx>
            <Colxx xxs="4">
              <Card>
                <h4>
                  <b>{profit.type1ans} km</b>
                </h4>
              </Card>
            </Colxx>
            <Colxx xxs="2">
              <Card>
                <h4>
                  <b>Total</b>
                </h4>
              </Card>
            </Colxx>
            <Colxx xxs="4">
              <Card>
                <h4>
                  <b>{profit.type2ans} km</b>
                </h4>
              </Card>
            </Colxx>
          </Row>
        </Fragment>
      );
    }
  }

  render() {
    return (
      <div>
        <Card>
          <CardTitle><h1 className="center-align"><b>{this.props.crop} to sell</b></h1></CardTitle>
        </Card>
        <br/>
        <Card >
          {this.loadProfit()}
        </Card>
      </div>
    );
  }
}
