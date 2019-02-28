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
  Jumbotron,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu
} from "reactstrap";

import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Colxx, Separator } from "Components/CustomBootstrap";
import BreadcrumbContainer from "Components/BreadcrumbContainer";
import Drop from "./dropdown";

import {
  setContainerClassnames,
  addContainerClassname,
  changeDefaultClassnames
} from "Redux/actions";

import axios from "axios";

function getData(){
  axios.get("https://sahayata-farmer.herokuapp.com/search/crop").then(res => {
    return res.data;
  });
}

class SellCrop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      toggle: false
    };
    this.toggle = this.toggle.bind(this);
    this.changeData = this.changeData.bind(this);
  }

  toggle(){
    this.setState({toggle: !this.state.toggle});
  }

  componentWillMount() {
    axios.get("https://sahayata-farmer.herokuapp.com/search/crop").then(res => {
      this.setState({ data: res.data });
    });
  }

  componentDidMount() {
    const { containerClassnames, menuClickCount } = this.props;
    this.props.setContainerClassnames(3, containerClassnames);
  }

  changeData(element){
    console.log(element);
    var a = [];

    axios.get("https://sahayata-farmer.herokuapp.com/search/crop").then(res => {
      res.data.map((e)=>{
        if(e.crop == element){
          a.push(e);
        }
      })
      this.setState({data: a});
    });

  }

  CardsLoader() {
    if (this.state.data == null) {
      return <div className="loading" />;
    } else {
      return this.state.data.map(element => {
        return (
          <Fragment>
            <Card>
              <CardBody>
                <Row>
                  <Colxx xxs="11">
                    <CardTitle>
                      <b>{element.crop}</b>
                    </CardTitle>
                    <CardText>
                      Minimum price: ₹{element.min_price} ,<br/> Maximum Price:{" "}
                      ₹{element.max_price} ,<br/> Modal Price: ₹{element.modal_price}
                    </CardText>
                    <CardText>
                      Market: {element.market}, District: {element.district},
                      State: {element.state}
                    </CardText>
                  </Colxx>
                  <Colxx xxs="1">
                    distance: {element.route.length / 1000} km
                  </Colxx>
                </Row>
              </CardBody>
            </Card>
            <br />
          </Fragment>
        );
      });
    }
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
            <Drop select={this.changeData}/>
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
