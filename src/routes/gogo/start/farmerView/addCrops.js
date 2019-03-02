import React, {Component, Fragment} from 'react';
import IntlMessages from "Util/IntlMessages";

import { Row, Col, Card, CardBody, CardTitle, Button, Modal, ModalHeader, ModalBody, ModalFooter,Form, Label, Input } from "reactstrap";
import axios from 'axios';

export default class AddCrops extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      crop: "",
      quantity: "",
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
   this.setState(prevState => ({
     modal: !prevState.modal
   }));
 }

 onCropRegister() {
   if(this.state.crop == "" || this.state.quantity == "") {
     alert("All fields are mandatory");
     console.log(this.state);

   }
   else{
     console.log(this.state);
     const id = localStorage.userId;
     const apiURL = `https://sahayata-farmer.herokuapp.com/sahayata/farmer/${id}`;
     axios.post(apiURL, this.state)
     .then(res => {
       console.log(res);
       this.setState({crop:""});
       this.setState({quantity:""});
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
      <h2>Add crop</h2>
      <h1 className="center" onClick={this.toggle}><i className="simple-icon-plus" /></h1>
      <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
         <ModalHeader toggle={this.toggle}>Add Crop</ModalHeader>
         <ModalBody>
         <Form>
           <Label className="form-group has-float-label mb-4">
             <Input
              type="text"
              onChange={(e) => this.setState({crop:e.target.value})}
            />
             <IntlMessages id="Crop name" />
           </Label>

           <Label className="form-group has-float-label mb-4">
             <Input
              type="text"
              onChange={(e) => this.setState({quantity:e.target.value})}
             />
             <IntlMessages id="Quantity" />
           </Label>


           <div className="d-flex justify-content-end align-items-center">
             <Button
               color="primary"
               className="btn-shadow"
               size="lg"
               onClick={() => this.onCropRegister()}
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
