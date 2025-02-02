import React, { Component, Fragment } from "react";
import IntlMessages from "Util/IntlMessages";
import { connect } from "react-redux";
import { Colxx, Separator } from "Components/CustomBootstrap";
import LanguageChanger from "Components/LanguageChanger";

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

  componentWillMount(){
    const userId = localStorage.userId;
    const apiURL = `http://sahayataapp.herokuapp.com/sahayata/transportall/${userId}`;
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
        return (
          <Colxx xxs="4">
            <Card>
              <CardBody>
                <h3><b><LanguageChanger text={element.type}/></b></h3>
                <h5><LanguageChanger text="Capacity:  "/>{element.capacity}<LanguageChanger text="tonnes"/></h5>
                <h5><LanguageChanger text="Fare:  Rs."/>{element.price}<LanguageChanger text="km"/></h5>
                <h5><LanguageChanger text="Vehicle no.:  "/>{element.vehicleNumber}</h5>
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
        <Row>{this.renderTransports()}</Row>
      </div>
    );
  }
}

export default connect(null)(ShowTransport);
