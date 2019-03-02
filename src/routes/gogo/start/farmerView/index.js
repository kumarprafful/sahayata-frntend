import React, { Component, Fragment } from "react";
import { Row, Card, CardTitle, CardBody, Col } from "reactstrap";
import {NavLink} from 'react-router-dom';

import IntlMessages from "Util/IntlMessages";

import { Colxx, Separator } from "Components/CustomBootstrap";
import BreadcrumbContainer from "Components/BreadcrumbContainer";
import LanguageChanger from "Components/LanguageChanger";

import AddCrops from './addCrops';
import ShowCrops from './showCrops';

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
        <div>
          <AddCrops />
          <ShowCrops />
        </div>

      );
    }
    else{
      return (
        <div>
          <CardBody>crops</CardBody>
        </div>
      );
    }
  }

  render() {
    return (
      <Fragment>

        <Row>
          <Colxx>
          <Card style={{'padding':'1em'}}>
            <CardTitle><h1><LanguageChanger text="Crops being produced"/></h1></CardTitle>
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


          <Colxx xxs="4">
          <NavLink to="women-schemes">
            <Card>
              <CardBody>
                <h2>Women Schemes</h2>
              </CardBody>
            </Card>
            </NavLink>
          </Colxx>
          <Colxx xxs="4">
          <NavLink to="general-schemes">
            <Card>
              <CardBody>
                <h2>General Schemes</h2>
              </CardBody>
            </Card>
            </NavLink>
          </Colxx>
        </Row>

      </Fragment>
    );
  }
}
