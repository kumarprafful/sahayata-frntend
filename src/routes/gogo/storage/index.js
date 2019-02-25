import React, { Component, Fragment } from "react";
import IntlMessages from "Util/IntlMessages";

import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Row, Card, CardBody, CardTitle, Button, Jumbotron } from "reactstrap";

import { Colxx, Separator } from "Components/CustomBootstrap";
import BreadcrumbContainer from "Components/BreadcrumbContainer";

import {
  setContainerClassnames,
  addContainerClassname,
  changeDefaultClassnames
} from "Redux/actions";

class Home extends Component {

  componentDidMount() {
    const { containerClassnames, menuClickCount } = this.props;
    this.props.setContainerClassnames(3, containerClassnames);
  }

  render() {
    return (
      <Fragment>
        <Row>
          Storage
        </Row>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ menu }) => {
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
    menuClickCount
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { setContainerClassnames, addContainerClassname, changeDefaultClassnames }
  )(Home)
);
