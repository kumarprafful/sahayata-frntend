import React, {Component, Fragment} from 'react';
import IntlMessages from "Util/IntlMessages";

import { Row, Col, Card, CardBody, CardTitle, Button, Modal, ModalHeader, ModalBody, ModalFooter,Form, Label, Input } from "reactstrap";
import axios from 'axios';
import LanguageChanger from "Components/LanguageChanger";

export default class AddTransport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      type: "",
      vehicleNumber: "",
      capacity: "",
      price: "",
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
   this.setState(prevState => ({
     modal: !prevState.modal
   }));
 }

 onTransportRegister() {
   if(this.state.type == "" || this.state.vehicleNumber == "" || this.state.capacity == "" || this.state.price == "") {
     alert("All fields are mandatory");
     console.log(this.state);

   }
   else{
     console.log(this.state);
     const id = localStorage.userId;
     const apiURL = `http://sahayataapp.herokuapp.com/sahayata/transport/${id}`
     axios.post(apiURL, this.state)
     .then(res => {
       console.log(res);
       this.setState({type:""});
       this.setState({vehicleNumber:""});
       this.setState({capacity:""});
       this.setState({price:""});
       this.toggle();

     })
     .catch(error => {
       console.log(error);
     })

   }
 }


  render() {
    return (
    <CardBody>
    <div className="center-align">
      <h2><LanguageChanger text="Add Transport"/></h2>
      <h1 className="center" onClick={this.toggle}><i className="simple-icon-plus" /></h1>
      <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
         <ModalHeader toggle={this.toggle}><LanguageChanger text="Add transport"/></ModalHeader>
         <ModalBody>
         <Form>
           <Label className="form-group has-float-label mb-4">
             <Input
              type="text"
              onChange={(e) => this.setState({type:e.target.value})}
            />
             <LanguageChanger text="Vehicle Type" />
           </Label>

           <Label className="form-group has-float-label mb-4">
             <Input
              type="text"
              onChange={(e) => this.setState({vehicleNumber:e.target.value})}
             />
             <LanguageChanger text="Vehicle Number" />
           </Label>

           <Label className="form-group has-float-label mb-4">
             <Input
              type="text"
              onChange={(e) => this.setState({capacity:e.target.value})}
             />
             <LanguageChanger text="Capacity" />
           </Label>

           <Label className="form-group has-float-label mb-4">
             <Input
              type="text"
              onChange={(e) => this.setState({price:e.target.value})}
             />
             <LanguageChanger text="Price" />
           </Label>


           <div className="d-flex justify-content-end align-items-center">
             <Button
               color="primary"
               className="btn-shadow"
               size="lg"
               onClick={() => this.onTransportRegister()}
             >
               <LanguageChanger text="REGISTER" />
             </Button>
           </div>
         </Form>

         </ModalBody>
       </Modal>
    </div>
    </CardBody>
    );
  }
}
