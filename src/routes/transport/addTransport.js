import React, {Component, Fragment} from 'react';
import IntlMessages from "Util/IntlMessages";

import { Row, Col, Card, CardBody, CardTitle, Button, Modal, ModalHeader, ModalBody, ModalFooter,Form, Label, Input } from "reactstrap";
import axios from 'axios';

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
     const id =
     axios.post("https://sahayata-farmer.herokuapp.com/sahayata/transport/5c74d1d20bbcfc16c0b79f01", this.state)
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
      <h2>Add transport</h2>
      <h1 className="center" onClick={this.toggle}><i className="simple-icon-plus" /></h1>
      <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
         <ModalHeader toggle={this.toggle}>Add Transport</ModalHeader>
         <ModalBody>
         <Form>
           <Label className="form-group has-float-label mb-4">
             <Input
              type="text"
              onChange={(e) => this.setState({type:e.target.value})}
            />
             <IntlMessages id="Vehicle Type" />
           </Label>

           <Label className="form-group has-float-label mb-4">
             <Input
              type="text"
              onChange={(e) => this.setState({vehicleNumber:e.target.value})}
             />
             <IntlMessages id="Vehicle Number" />
           </Label>

           <Label className="form-group has-float-label mb-4">
             <Input
              type="text"
              onChange={(e) => this.setState({capacity:e.target.value})}
             />
             <IntlMessages id="Capacity" />
           </Label>

           <Label className="form-group has-float-label mb-4">
             <Input
              type="text"
              onChange={(e) => this.setState({price:e.target.value})}
             />
             <IntlMessages id="Price" />
           </Label>


           <div className="d-flex justify-content-end align-items-center">
             <Button
               color="primary"
               className="btn-shadow"
               size="lg"
               onClick={() => this.onTransportRegister()}
             >
               <IntlMessages id="user.register-button" />
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
