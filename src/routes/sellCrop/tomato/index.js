import React, { Component, Fragment } from "react";
import IntlMessages from "Util/IntlMessages";
import { Row, Card, CardBody, CardTitle, CardImg, CardText, Button, Jumbotron } from "reactstrap";

import { Colxx, Separator } from "Components/CustomBootstrap";
import BreadcrumbContainer from "Components/BreadcrumbContainer";

import axios from "axios";
import "./index.css";

var data = [
  {
    imgLink: "../../assets/img/sih/tom.jpg",
    cropName: "Tomato",
    minPrice: "5000",
    maxPrice: "5500",
    modelPrice: "5400",
    market: "Kharupetia",
    district: "Darrang",
    State: "Assam"
  },
  {
    imgLink: "../../assets/img/sih/tom.jpg",
    cropName: "Tomato",
    minPrice: "5000",
    maxPrice: "5500",
    modelPrice: "5400",
    market: "Kharupetia",
    district: "Darrang",
    State: "Assam"
  },
  {
    imgLink: "../../assets/img/sih/tom.jpg",
    cropName: "Tomato",
    minPrice: "5000",
    maxPrice: "5500",
    modelPrice: "5400",
    market: "Kharupetia",
    district: "Darrang",
    State: "Assam"
  }
]

export default class extends Component {
  constructor(props){
    super(props);
    axios.get("https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=579b464db66ec23bdd0000019bec003a24724c7a4ddd8abd5c4c29f9&format=json&offset=0&limit=10")
    .then(res => {
      console.log(res);
    })
  }

  CardsLoader(){
    return data.map((element)=>{
      console.log(element);
      return (
        <Card>
          <CardBody>
          <Row>
            <Colxx xxs="4">
              <CardImg className="sell_img" src={element.imgLink} alt="Card image cap" />
            </Colxx>
            <Colxx xxs="8">
              <CardTitle><b>{element.cropName}</b></CardTitle>
              <CardText>
                Minimum price: {element.minPrice}, Maximum Price: {element.maxPrice}, Modal Price: {element.modelPrice}</CardText>
              <CardText>Market: Kharupetia, District: Darrang, State: Assam</CardText>
            </Colxx>
          </Row>
          </CardBody>
        </Card>
      );
    })
  }

  render() {
    var img1 = "../../assets/img/sih/tom.jpg";

    return (
      <Fragment>
        <Row>
          <Colxx xxs="12">
            <BreadcrumbContainer
              heading={<IntlMessages id="menu.second" />}
              match={this.props.match}
            />
            <Separator className="mb-5" />

            {this.CardsLoader()}



          </Colxx>
        </Row>

      </Fragment>
    );
  }
}
