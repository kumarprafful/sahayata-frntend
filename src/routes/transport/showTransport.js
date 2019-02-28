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

  componentWillMount() {
    const userId = localStorage.userId;
    const apiURL = `https://sahayata-farmer.herokuapp.com/sahayata/transport/${userId}`;
    axios.get(apiURL)
    .then(res => {
      this.setState({data:res.data});
      console.log(this.state);
    })
    .catch(error => {
      console.log(error);
    })
  }

  renderTransports() {

    console.log(this.state.data);
    if(this.state.data){
      console.log("yeah");
      this.state.data.map(element => {
        console.log(element);
        return (
        <div>YESSS</div>
        );
      })
    }
    else{
      console.log("NO");
      return (
      <div>NOOOOOO</div>
      );
    }


  }


  render() {
    return (
    <div>
    {this.renderTransports()}
    sd
     </div>
    );
  }
}

export default connect(null)(ShowTransport);
