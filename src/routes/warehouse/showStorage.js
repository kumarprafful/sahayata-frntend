import React, { Component, Fragment } from "react";
import { Row, Card, CardTitle, CardBody } from "reactstrap";
import { Colxx, Separator } from "Components/CustomBootstrap";
import LanguageChanger from "Components/LanguageChanger";
import axios from "axios";
import AddWarehouse from "./addWarehouse";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = { data: null };
  }

  componentWillMount(){
    const userId = localStorage.userId;
    const apiURL = `https://sahayata-farmer.herokuapp.com/sahayata/storage/${userId}`;
    axios.get(apiURL).then((res)=>{
      console.log(res.data);
      this.setState({data:res.data});
    })
    .catch((error)=>{
      console.log(error);
    })
  }

  loadMyWarehouse() {
    console.log(this.state.data);
    if (this.state.data == null) {
      return <div className="loading" />;
    } else if (this.state.data[0] == undefined) {
      return <AddWarehouse />;
    } else {
      return this.state.data.map(res => {
        // console.log(res);
        return (
          <Fragment>
            <Card style={{ padding: "1em" }}>
              <CardTitle>
                <b>{res.name}</b>
              </CardTitle>
              <CardBody>
                manager: {res.manager}
                <br />
                price: {res.price}
                <br />
                address: {res.address}
              </CardBody>
            </Card>
            <br />
          </Fragment>
        );
      });
    }
  }

  render() {
    return <Fragment>{this.loadMyWarehouse()}</Fragment>;
  }
}
