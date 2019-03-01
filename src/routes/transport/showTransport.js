import React, { Component, Fragment } from "react";
import IntlMessages from "Util/IntlMessages";
import { connect } from "react-redux";
import { Colxx, Separator } from "Components/CustomBootstrap";

import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  Label,
  Input
} from "reactstrap";
import axios from "axios";

class ShowTransport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
    this.renderTransports = this.renderTransports.bind(this);
  }

  renderTransports() {
    if (this.props.data) {
      return this.props.data.map(element => {
        return (
          <Colxx xxs="2">
            <Card
              inversive
              body
              style={{ backgroundColor: "#5850508c", borderColor: "#5850508c" }}
            >
              <CardBody >
                <h3 >{element.type}</h3>
                <h6>Capacity: {element.capacity}</h6>
                <h5>Price: {element.price}</h5>
              </CardBody>
            </Card>
          </Colxx>
        );
      });
    } else {
      return <div className="loading" />;
    }
  }

  render() {
    console.log(this.state.data);
    return (
      <div>
        <Row>{this.renderTransports()}</Row>
      </div>
    );
  }
}

export default connect(null)(ShowTransport);
