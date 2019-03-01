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

class ShowCrops extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
    this.renderCrops = this.renderCrops.bind(this);
  }

  componentWillMount(){
    const userId = localStorage.userId;
    const apiURL = `https://sahayata-farmer.herokuapp.com/sahayata/farmer/${userId}`;
    axios.get(apiURL).then((res)=>{
      console.log(res.data);
      this.setState({data:res.data});
    })
    .catch((error)=>{
      console.log(error);
    })
  }


  renderCrops() {
    console.log(this.state.data);
    if (this.state.data!=null) {
      return this.state.data.map(element => {
        return (
          <Colxx xxs="4">
            <Card>
              <CardBody>
                <h3>{element.crop}</h3>
                <h6>Quantity: {element.quantity}</h6>
              </CardBody>
            </Card>
          </Colxx>
        );
      });
    } else if (this.state.data == null) {
      return <div className="loading" />
;
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
        <Row>{this.renderCrops()}</Row>
      </div>
    );
  }
}

export default connect(null)(ShowCrops);
