import React, { Component, Fragment } from "react";
import IntlMessages from "Util/IntlMessages";

import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Row, Card, CardBody, CardTitle, Button, Jumbotron } from "reactstrap";

import { Colxx, Separator } from "Components/CustomBootstrap";
import BreadcrumbContainer from "Components/BreadcrumbContainer";
import FarmerView from "./farmerView"
import StorageView from "./storageView"
import TransportView from "./transportView"
import LanguageChanger from "Components/LanguageChanger";
import Buyer from "./BuyerView";

import {
  setContainerClassnames,
  addContainerClassname,
  changeDefaultClassnames
} from "Redux/actions";

class Home extends Component {

  constructor(props){
    super(props);
    this.homeLoader = this.homeLoader.bind(this);
  }

  componentDidMount() {
    const { containerClassnames, menuClickCount } = this.props;
    this.props.setContainerClassnames(3, containerClassnames);
  }

  homeLoader(){
    var type = this.props.authUser.type;
    if(type == 'farmer'){
      return (
        <div><FarmerView/></div>
      );
    }
    else if(type == 'transport'){
      return (
        <div><TransportView/></div>
      );
    }
    else if (type == 'storage'){
      return (
        <div><StorageView/></div>
      )
    }
    else if(type == "buyer"){
      return (
        <div><Buyer/></div>
      );
    }
  }

  render() {
    return (
      <Fragment>
      <Row>
        <Colxx xxs="12">
          <BreadcrumbContainer
            heading={"Sahayata"}
            match={this.props.match}
          />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
        <Row>
          <Colxx xxs="12">
            {this.homeLoader()}
          </Colxx>
        </Row>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ menu , authUser }) => {
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
  )(Home)
);
