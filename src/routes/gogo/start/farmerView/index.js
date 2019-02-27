import React, { Component, Fragment } from "react";
import { Row, Card, CardTitle, CardBody, Col } from "reactstrap";

import IntlMessages from "Util/IntlMessages";

import { Colxx, Separator } from "Components/CustomBootstrap";
import BreadcrumbContainer from "Components/BreadcrumbContainer";
import LanguageChanger from "Components/LanguageChanger";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      crops:null
    }
  }

  renderCrops(){
    if(this.state.crops == null) {
      return (
        <CardBody>
        <div className="center-align">
          <h2><LanguageChanger text="Add crops"/></h2>
          <h1 className="center"><i className="simple-icon-plus" /></h1>
        </div>
        </CardBody>
      );
    }
    else{
      return (
        <CardBody>crops</CardBody>
      );
    }
  }

  render() {
    return (
      <Fragment>
        <Row>
          <Card style={{'padding':'1em'}}>
            <CardTitle><h1><LanguageChanger text="Crops being produced"/></h1></CardTitle>
            {this.renderCrops()}
          </Card>
        </Row>
      </Fragment>
    );
  }
}
