import React, {Component, Fragment} from 'react';
import IntlMessages from "Util/IntlMessages";

import { Row, Col, Card, CardBody, CardTitle, Button, Modal, ModalHeader, ModalBody, ModalFooter,Form, Label, Input } from "reactstrap";
import LanguageChanger from "Components/LanguageChanger";
import axios from 'axios';

export default class AddWarehouse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      name: "",
      manager: "",
      capacity: "",
      price: "",
      address: "",
      district: "",
      state: "",
      pincode: ""
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
   this.setState(prevState => ({
     modal: !prevState.modal
   }));
 }

 onWarehouseRegister() {
   if(this.state.name == "" || this.state.manager == "" || this.state.capacity == "" || this.state.price == "" || this.state.address == "" || this.state.district == "" || this.state.state == "" || this.state.pincode == "") {
     alert("All fields are mandatory");
     console.log(this.state);

   }
   else{
     const id = localStorage.userId;
     const apiURL = `http://sahayataapp.herokuapp.com/sahayata/storage/${id}`;
     axios.post(apiURL, this.state)
     .then(res => {
       console.log(res);
       this.setState({name:""});
       this.setState({manager:""});
       this.setState({capacity:""});
       this.setState({price:""});
       this.setState({address:""});
       this.setState({district:""});
       this.setState({state:""});
       this.setState({pincode:""});

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
      <h2><LanguageChanger text="Add warehouse"/></h2>
      <h1 className="center" onClick={this.toggle}><i className="simple-icon-plus" /></h1>
      <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
         <ModalHeader toggle={this.toggle}><LanguageChanger text="Add Warehouse"/></ModalHeader>
         <ModalBody>
         <Form>
           <Label className="form-group has-float-label mb-4">
             <Input
              type="text"
              onChange={(e) => this.setState({name:e.target.value})}
            />
              <LanguageChanger text="Warehouse name"/>
          </Label>

           <Label className="form-group has-float-label mb-4">
             <Input
              type="text"
              onChange={(e) => this.setState({manager:e.target.value})}
             />
             <LanguageChanger text="Manager"/>
           </Label>

           <Label className="form-group has-float-label mb-4">
             <Input
              type="text"
              onChange={(e) => this.setState({capacity:e.target.value})}
             />
             <LanguageChanger text="Capacity"/>
           </Label>

           <Label className="form-group has-float-label mb-4">
             <Input
              type="text"
              onChange={(e) => this.setState({price:e.target.value})}
             />
             <LanguageChanger text="Price"/>
           </Label>

           <Label className="form-group has-float-label mb-4">
             <Input
              type="text"
              onChange={(e) => this.setState({address:e.target.value})}
             />
             <LanguageChanger text="Address Line 1"/>
           </Label>

           <Label className="form-group has-float-label mb-4">
             <Input
              type="text"
              onChange={(e) => this.setState({district:e.target.value})}
             />
             <LanguageChanger text="District"/>
           </Label>

           <Label className="form-group has-float-label mb-4">
             <Input
              type="text"
              onChange={(e) => this.setState({state:e.target.value})}
             />
             <LanguageChanger text="State"/>
           </Label>

           <Label className="form-group has-float-label mb-4">
             <Input
              type="text"
              onChange={(e) => this.setState({pincode:e.target.value})}
             />
             <LanguageChanger text="Pincode"/>
           </Label>


           <div className="d-flex justify-content-end align-items-center">
             <Button
               color="primary"
               className="btn-shadow"
               size="lg"
               onClick={() => this.onWarehouseRegister()}
             >
               <LanguageChanger text="REGISTER"/>
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
