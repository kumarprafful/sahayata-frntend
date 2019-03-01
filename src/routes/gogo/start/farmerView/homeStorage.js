import React, {Component, Fragment} from "react";

import {Row, Card, CardBody} from 'reactstrap';
import {Colxx} from "Components/CustomBootstrap";

import {NavLink} from 'react-router-dom';

class HomeStorage extends Component {
  render() {
    return (
      <Fragment>
        <Row>
          <Colxx xxs="6">
          <NavLink to="grains">
            <Card>
              <CardBody>
                <h2>Grains</h2>
              </CardBody>
            </Card>
          </NavLink>
          </Colxx>

          <Colxx xxs="6">
          <NavLink to="fruits-vegetables">
            <Card>
              <CardBody>
                <h2>Fruits/Vegetable</h2>
              </CardBody>
            </Card>
            </NavLink>
          </Colxx>
        </Row>

        <br />
      <Card>
      <CardBody>
        <div>lorem ispsum doremlorem ispsum doremlorem ispsum doremlorem ispsum doremlorem ispsum doremlorem ispsum dorem</div>
      </CardBody>
      </Card>
      </Fragment>
    );
  }
}

export default HomeStorage;
