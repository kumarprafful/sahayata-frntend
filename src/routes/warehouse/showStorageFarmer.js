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

class ShowStorageFarmer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
    this.renderTransports = this.renderTransports.bind(this);
  }

  componentWillMount(){
    const userId = localStorage.userId;
    const apiURL = `https://sahayata-farmer.herokuapp.com/sahayata/storageall/${userId}`;
    axios.get(apiURL).then((res)=>{
      console.log(res.data);
      this.setState({data:res.data});
    })
    .catch((error)=>{
      console.log(error);
    })
  }

  renderTransports() {
    console.log(this.state.data);
    if (this.state.data!=null) {
      return this.state.data.map(element => {
        console.log(element);
        return (
          <Colxx xxs="4">
            <Card>
              <CardBody>
                <h3><b>{element.name}</b></h3>
                <h5><b>Price:</b> {element.price} Rs/km</h5>
                <h6><b>Capacity:</b> {element.quantity} tonnes</h6>
                <h5><b>Manager:</b> {element.manager}</h5>
                <h5><b>Address:</b> {element.address}</h5>
                <h5><b>District:</b> {element.district}</h5>
                <h5><b>State:</b> {element.state}</h5>


              </CardBody>
            </Card>
          </Colxx>
        );
      });
    } else if (this.state.data == null) {
      return <div className="loading" />;
    }
    else{
      return (
        <div><h3> no data available</h3></div>
      );
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

export default connect(null)(ShowStorageFarmer);
