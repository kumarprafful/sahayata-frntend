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

  componentWillMount() {
    var userId = localStorage.userId;
    axios
      .get(`https://sahayata-farmer.herokuapp.com/sahayata/storage/${userId}`)
      .then(res => {
        // console.log(res);
        this.setState({ data: res.data });
      });
  }

  loadMyWarehouse() {
    if (this.state.data == null) {
      <div className="loading" />;
    } else if (this.state.data[0] == undefined) {
      <AddWarehouse />;
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
