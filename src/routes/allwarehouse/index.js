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
import LanguageChanger from "Components/LanguageChanger";
import ShowStorage from '../warehouse/showStorage.js';

import {
  setContainerClassnames,
  addContainerClassname,
  changeDefaultClassnames
} from "Redux/actions";

import axios from "axios";

class SellCrop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
    this.loadAllWarehouse = this.loadAllWarehouse.bind(this);
  }

  loadAllWarehouse() {
    if (this.state.data == null) {
      <div className="loading" />;
    } else if (this.state.data[0] == undefined) {
      return <div>no avalible warehouse</div>;
    } else {
      return this.state.data.map(element => {
        console.log(element);
        return (
          <Fragment>
          <Row>
            <ShowStorage />
            </Row>
          <br />
          </Fragment>
        );
      });
    }
  }

  componentWillMount() {
    if (this.state.data == null) {
      <div className="loading" />;
    } else if (this.state.data[0] == undefined) {
      return <div>no avalible warehouse</div>;
    } else {
      return this.state.data.map(element => {
        console.log(element);
        return (
          <Fragment>
          <Row>
            <ShowStorage />
          </Row>
          <br />
          </Fragment>
        );
      });
    }
  }

  componentDidMount() {
    var userId = localStorage.userId;
    axios
      .get(
        `http://sahayataapp.herokuapp.com/sahayata/storageall/${userId}`
      )
      .then(res => {
        this.setState({ data: res.data });
      });

    const { containerClassnames, menuClickCount } = this.props;
    this.props.setContainerClassnames(3, containerClassnames);
  }
  render() {
    return (
      <Fragment>
        <Row>
          <Colxx xxs="12">
            <BreadcrumbContainer
              heading={<IntlMessages id="menu.second" />}
              match={this.props.match}
            />
            <Separator className="mb-5" />
            {this.loadAllWarehouse()}
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
