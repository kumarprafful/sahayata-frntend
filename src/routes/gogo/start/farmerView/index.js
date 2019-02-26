import React, { Component, Fragment } from "react";
import { Row, Card, CardTitle, CardBody, Col } from "reactstrap";

import IntlMessages from "Util/IntlMessages";

import { Colxx, Separator } from "Components/CustomBootstrap";
import BreadcrumbContainer from "Components/BreadcrumbContainer";

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
          <h2>Add crops</h2>
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
<<<<<<< HEAD
          <Colxx xxs="12">
            <Row>
              <Colxx xxs="6">Prince</Colxx>
              <Colxx xxs="6">Prince</Colxx>
            </Row>
          </Colxx>
=======
          <Card style={{'padding':'1em'}}>
            <CardTitle><h1>Crops being produced</h1></CardTitle>
            {this.renderCrops()}
          </Card>
>>>>>>> ce5ed1bf89d0a0a7151629092757cac1eae37683
        </Row>
      </Fragment>
    );
  }
}
