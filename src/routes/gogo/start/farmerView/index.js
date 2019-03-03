import React, { Component, Fragment } from "react";
import { Row, Card, CardTitle, CardBody, Col } from "reactstrap";
import { NavLink } from "react-router-dom";

import IntlMessages from "Util/IntlMessages";

import { Colxx, Separator } from "Components/CustomBootstrap";
import BreadcrumbContainer from "Components/BreadcrumbContainer";
import LanguageChanger from "Components/LanguageChanger";

import axios from "axios";
import AddCrops from "./addCrops";

import ShowCrops from './showCrops';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      crops: null,
      profitData: null
    };
    this.loadProfit = this.loadProfit.bind(this);
  }

  loadProfit(){
    if(this.state.crops == null) {
      return (
        <div>
          <AddCrops />
        </div>

      );
    }
    else {
      console.log(profit);
      return (
        <Fragment>
          <Row>
            <Colxx xxs="2">
              <Card><h4><b>Crop Quantity</b></h4></Card>
            </Colxx>
            <Colxx xxs="4">
              <Card><h4>{profit.type1.cropQuantity} kg</h4></Card>
            </Colxx>
            <Colxx xxs="2">
              <Card><h4><b>Crop Quantity</b></h4></Card>
            </Colxx>
            <Colxx xxs="4">
              <Card><h4>{profit.type2.cropQuantity} kg</h4></Card>
            </Colxx>
          </Row>
          <br />
          <Row>
            <Colxx xxs="2">
              <Card><h4><b>Nearest Crop Price</b></h4></Card>
            </Colxx>
            <Colxx xxs="4">
              <Card><h4>{profit.type1.nearestCropPrice} ₹/kg</h4></Card>
            </Colxx>
            <Colxx xxs="2">
              <Card><h4><b>Last Year Max Price</b></h4></Card>
            </Colxx>
            <Colxx xxs="4">
              <Card><h4>{profit.type2.lastyearMaxPrice} ₹/kg</h4></Card>
            </Colxx>
          </Row>
          <br />
          <Row>
            <Colxx xxs="2">
              <Card><h4><b>Transport Price</b></h4></Card>
            </Colxx>
            <Colxx xxs="4">
              <Card><h4>{profit.type1.transportPrice} ₹/km</h4></Card>
            </Colxx>
            <Colxx xxs="2">
              <Card><h4><b>Transport Price</b></h4></Card>
            </Colxx>
            <Colxx xxs="4">
              <Card><h4>{profit.type2.transportPrice} ₹/km</h4></Card>
            </Colxx>
          </Row>
          <br />
          <Row>
            <Colxx xxs="2">
              <Card><h4><b>Nearest Mandi</b></h4></Card>
            </Colxx>
            <Colxx xxs="4">
              <Card><h4>{profit.type1.nearestMandi} km</h4></Card>
            </Colxx>
            <Colxx xxs="2">
              <Card><h4><b>Nearest Warehouse</b></h4></Card>
            </Colxx>
            <Colxx xxs="4">
              <Card><h4>{profit.type2.nearestWarehouse} km</h4></Card>
            </Colxx>
          </Row>
          <br />
          <Row>
            <Colxx xxs="2">
              <Card><h4><b>Total</b></h4></Card>
            </Colxx>
            <Colxx xxs="4">
              <Card><h4><b>{profit.type1ans} km</b></h4></Card>
            </Colxx>
            <Colxx xxs="2">
              <Card><h4><b>Total</b></h4></Card>
            </Colxx>
            <Colxx xxs="4">
              <Card><h4><b>{profit.type2ans} km</b></h4></Card>
            </Colxx>
          </Row>
        </Fragment>
      );
    }
  }

  componentWillMount() {
    axios.get("https://sahayata-farmer.herokuapp.com/profit").then(res => {
      this.setState({ profitData: res.data });
    });
  }

  renderCrops() {
    if (this.state.crops == null) {
      return (
        <Fragment>
          <AddCrops />
          <ShowCrops />
        </Fragment>
      );
    } else {
      return <CardBody>crops</CardBody>;
    }
  }

  render() {
    return (
      <Fragment>
        <Row>
          <Colxx>
            <Card style={{ padding: "1em" }}>
              <CardTitle>
                <h1>
                  <LanguageChanger text="Crops being produced" />
                </h1>
              </CardTitle>
              {this.renderCrops()}
            </Card>
          </Colxx>
        </Row>
        <br />
        <Row>
          <Colxx xxs="4">
            <NavLink to="home-storage">
              <Card>
                <CardBody>
                  <h2>Home storage ideas</h2>
                </CardBody>
              </Card>
            </NavLink>
          </Colxx>
          <Colxx xxs="8">
            <Card>
              <CardBody>
                <h3 className="center-align">
                  <b>What can you do with your crop</b>
                </h3>
              </CardBody>
            </Card>
            <br />
            {this.loadProfit()}
          </Colxx>
        </Row>
      </Fragment>
    );
  }
}
