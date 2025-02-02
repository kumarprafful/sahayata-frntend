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
    const apiURL = `http://sahayataapp.herokuapp.com/sahayata/storageall/${userId}`;
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
                <h3><b><LanguageChanger text={element.name}/></b></h3>
                <h5><b><LanguageChanger text="Price: "/></b> <LanguageChanger text={element.price}/> <LanguageChanger text=" Rs/kg"/></h5>
                <h6><b><LanguageChanger text="Capacity: "/></b> <LanguageChanger text={element.quantity}/> <LanguageChanger text=" tonnes"/></h6>
                <h5><b><LanguageChanger text="Manager: "/></b> <LanguageChanger text={element.manager}/></h5>
                <h5><b><LanguageChanger text="Address: "/></b> <LanguageChanger text={element.address}/></h5>
                <h5><b><LanguageChanger text="District: " /></b> <LanguageChanger text={element.district}/></h5>
                <h5><b><LanguageChanger text="State: "/></b> <LanguageChanger text={element.state}/></h5>
                <Button size="sm">Book</Button>


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
