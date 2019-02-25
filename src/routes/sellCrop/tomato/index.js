import React, { Component, Fragment } from "react";
import IntlMessages from "Util/IntlMessages";
import {
  Row,
  Card,
  CardBody,
  CardTitle,
  CardImg,
  CardText,
  Button,
  Jumbotron
} from "reactstrap";

import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Colxx, Separator } from "Components/CustomBootstrap";
import BreadcrumbContainer from "Components/BreadcrumbContainer";

import {
  setContainerClassnames,
  addContainerClassname,
  changeDefaultClassnames
} from "Redux/actions";

import axios from "axios";

var data = [
  {
    imgLink: "./../../assets/img/sih/tom.jpg",
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
];

class SellCrop extends Component {
  constructor(props) {
    super(props);
    axios
      .get(
        "https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=579b464db66ec23bdd0000019bec003a24724c7a4ddd8abd5c4c29f9&format=json&offset=0&limit=10"
      )
      .then(res => {
        console.log(res);
      });
  }

  componentDidMount() {
    const { containerClassnames, menuClickCount } = this.props;
    this.props.setContainerClassnames(3, containerClassnames);
  }

  CardsLoader() {
    return data.map(element => {
      return (
        <Fragment>
          <Card>
            <CardBody>
              <Row>
                <Colxx xxs="4">
                  <CardImg
                    className="sell_img"
                    src={element.imgLink}
                    alt="Card image cap"
                  />
                </Colxx>
                <Colxx xxs="8">
                  <CardTitle>
                    <b>{element.cropName}</b>
                  </CardTitle>
                  <CardText>
                    Minimum price: {element.minPrice}, Maximum Price:{" "}
                    {element.maxPrice}, Modal Price: {element.modelPrice}
                  </CardText>
                  <CardText>
                    Market: {element.market}, District: {element.district},
                    State: {element.state}
                  </CardText>
                </Colxx>
              </Row>
            </CardBody>
          </Card>
          <br/>
        </Fragment>
      );
    });
  }

  render() {
    var img1 = "./../../assets/img/sih/tom.jpg";

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

const mapStateToProps = ({ menu, authUser }) => {
  const {
    containerClassnames,
    subHiddenBreakpoint,
    menuHiddenBreakpoint,
    menuClickCount
  } = menu;
  return {
    containerClassnames,
    subHiddenBreakpoint,
    menuHiddenBreakpoint,
    menuClickCount,
    authUser
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { setContainerClassnames, addContainerClassname, changeDefaultClassnames }
  )(SellCrop)
);
