import React, { Component, Fragment } from "react";
import IntlMessages from "Util/IntlMessages";
import { connect } from "react-redux";
import { Colxx, Separator } from "Components/CustomBootstrap";
import LanguageChanger from "Components/LanguageChanger"

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
  Input,
  CardText
} from "reactstrap";
import axios from "axios";
import BookStorageLevel from "./BookStorageLevel";
import {  NotificationManager} from "Components/ReactNotifications";


class ShowCrops extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      storage: null,
      modal: false,
      Cstate: 0,
      quantity: "",
      storageId: ""
    };
    this.renderCrops = this.renderCrops.bind(this);
    this.toggle = this.toggle.bind(this);
    this.renderNearbyStorage = this.renderNearbyStorage.bind(this);
  }
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  componentWillMount() {
    const userId = localStorage.userId;
    const apiURL = `https://sahayata-farmer.herokuapp.com/sahayata/farmer/${userId}`;
    axios
      .get(apiURL)
      .then(res => {
        console.log(res.data);
        this.setState({ data: res.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentDidMount() {
    const userId = localStorage.userId;
    const apiURLStorage = `https://sahayata-farmer.herokuapp.com/sahayata/storageall/${userId}`;
    const apiURLTransport = `https://sahayata-farmer.herokuapp.com/sahayata/transportall/${userId}`;
    axios
      .get(apiURLStorage)
      .then(res => {
        this.setState({ storage: res.data, Cstate: 1 });
      })
      .catch(error => {
        console.log(error);
      });

    axios.get(apiURLTransport).then((res)=>{
      this.setState({transport: res.data });
    }).catch((error)=>{
      console.log(error);
    })
  }

  sendOrder(transportId){
    var userId = localStorage.userId;
    var quantity = this.state.quantity;
    var storageId = this.state.storageId;
    axios.post(`https://sahayata-farmer.herokuapp.com/order/${userId}/storage/${storageId}`, {quantity: quantity}).then((res)=>{
      console.log(res);
    })
    axios.post(`https://sahayata-farmer.herokuapp.com/order/${userId}/transport/${transportId}`, {quantity: quantity}).then((res)=>{
      console.log(res);
    })
  }

  loadStorage(storage) {
    return storage.map(element => {
      console.log(element._id);
      return (
        <Fragment >
          <Card onClick={()=>{this.setState({Cstate: 2});this.setState({storageId: element._id })}} >
            <h3>
              <b> name: {element.name}</b>
            </h3>
            <CardText>Price/kg: {element.price}</CardText>
            <CardText>Manager: {element.manager}</CardText>
            <CardText>
              Address: {element.address} {element.district} {element.pincode}
            </CardText>
          </Card>
          <br />
        </Fragment>
      );
    });
  }

  loadTransport(transport){
    return transport.map((element)=>{
      console.log(element._id);
      return (
        <Fragment>
          <Card onClick={()=>{
            this.toggle();
            NotificationManager.success("Your order has been Succesfully booked",null,5000,null,null,"filled");
            this.sendOrder(element._id);
          }}>
            <CardText><h3><b>Full name: {element.firstName}</b></h3></CardText>
            <CardText><h3>Vehicle type: {element.type}</h3></CardText>
            <CardText><h3>Contact: {element.mobileNo}</h3></CardText>
            <CardText><h3>District: {element.district} {element.state}</h3></CardText>
          </Card>
        </Fragment>
      )
    })
  }

  renderNearbyStorage() {
    if (this.state.Cstate == 0) {
      return <div className="loading" />;
    }
    else if(this.state.Cstate == 1){
      return <Fragment>{this.loadStorage(this.state.storage)}</Fragment>;
    }
    else if(this.state.Cstate == 2){
      return (
        <Fragment>
          {this.loadTransport(this.state.transport)}
        </Fragment>
      )
    }
  }

  renderCrops() {
    if (this.state.data != null) {
      return this.state.data.map(element => {
        return (
          <Colxx xxs="4">
            <Card>
              <CardBody>
                <h3><LanguageChanger text="Crop:  " /> <LanguageChanger text={element.crop} /></h3>
                <h6><LanguageChanger text="Quantity:  "/> <LanguageChanger text= {element.quantity}/> <LanguageChanger text="  kg"/></h6>

                <Button className="" size="sm" onClick={()=>{this.toggle();this.setState({quantity: element.quantity})}}>
                  <i className="iconsmind-Warehouse" />
                </Button>

              </CardBody>
            </Card>
          </Colxx>
        );
      });
    } else if (this.state.data == null) {
      return <div className="loading" />;
    } else {
      return (
        <div>
          <h3> <LanguageChanger text="no data available"/> </h3>
        </div>
      );
    }
  }

  render() {
    var text ;
    if(this.state.Cstate == 1){
      text = "Storage"
    }
    else {
      text = "Vehicles";
    }
    return (
      <div>
        <Row>{this.renderCrops()}</Row>

        <Modal
          size="lg"
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}><LanguageChanger text="Nearby"/> <LanguageChanger text={text}/> </ModalHeader>
          <ModalBody>{this.renderNearbyStorage()}</ModalBody>
        </Modal>
      </div>
    );
  }
}

export default connect(null)(ShowCrops);
