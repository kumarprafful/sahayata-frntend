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

class ShowTransportFarmer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      vehicles: null
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

  // renderVehicles(vehicles) {
  //   if(vehicles == null){
  //     <Fragment>No transport agency selected.</Fragment>
  //
  //   }
  //   else{
  //     return (
  //       this.setState({vehicles});
  //       console.log(this.state);
  //     return this.state.vehicles.map(v =>{
  //       return (
  //       <Fragment>{v.type}</Fragment>
  //         )
  //     });
  //     );
  //   }
  // }

  renderTransports() {
    console.log(this.state.data);
    if (this.state.data!=null) {
      return this.state.data.map(element => {
        console.log(element);
        return (
          <Colxx xxs="4">
            <Card onClick={()=>this.renderVehicles(element.vehicles)}>
              <CardBody>
                <h3><LanguageChanger text={element.firstName}/></h3>
                <h5><LanguageChanger text="Email: "/>{element.email}</h5>
                <h5><LanguageChanger text="Contact: "/>{element.mobileNo}</h5>
                <h5><LanguageChanger text="District: "/><LanguageChanger text={element.district}/></h5>
                <h5><LanguageChanger text="State: "/><LanguageChanger text={element.state}/></h5>
                <Button size="sm">Book</Button>
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
        <div><h3> <LanguageChanger text="no data available"/> </h3></div>
      );
    }
  }

  render() {
    console.log(this.state.data);
    return (
      <div>
        <Row>{this.renderTransports()}</Row>
        {/*<Row>{this.renderVehicles(this.state.data.vehicles)}</Row>*/}

      </div>
    );
  }
}

export default connect(null)(ShowTransportFarmer);
