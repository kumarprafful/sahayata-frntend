import React, {Component, Fragment} from 'react';
import IntlMessages from "Util/IntlMessages";
import { connect } from "react-redux";


import { Row, Col, Card, CardBody, CardTitle, Button, Modal, ModalHeader, ModalBody, ModalFooter,Form, Label, Input } from "reactstrap";
import axios from 'axios';

class ShowTransport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    }
  }

  componentWillMount(){
    const userId = localStorage.userId;
    const apiURL = `https://sahayata-farmer.herokuapp.com/sahayata/transport/${userId}`;
    console.log("HET");
    axios.get(apiURL)
    .then(res => {
      // console.log(res);
      this.setState({data:res.data});
      // console.log(this.state);
    })
    .catch(error => {
      console.log(error);
    })
  }

  renderTransports() {


    // var data = [
    //   {"_id":"5c759ceb07ac51001769ff67","type":"sdkj","vehicleNumber":"lkj","capacity":"jkl","price":"lkj","__v":0},
    //   {"_id":"5c759d7107ac51001769ff69","type":"sdkj","vehicleNumber":"lkj","capacity":"jkl","price":"lkj","__v":0},
    //   {"_id":"5c759d7307ac51001769ff6a","type":"sdkj","vehicleNumber":"lkj","capacity":"jkl","price":"lkj","__v":0},
    //   {"_id":"5c759e7807ac51001769ff6b","type":"sd,","vehicleNumber":"lkjv","capacity":"slkdj","price":"lkj","__v":0},
    //   {"_id":"5c759f2507ac51001769ff6c","type":"df","vehicleNumber":"fe","capacity":"wdfh","price":"dhdfh","__v":0}
    // ]

    // this.setState({data:data});
    // console.log(this.state.data);


    // this.state.data.map(element => {
    //   console.log(element);
    // })


  }


  render() {
    console.log(this.state.data);
    return (
    <CardBody>
      // {this.renderTransports};
    </CardBody>
    );
  }
}

export default connect(null)(ShowTransport);
