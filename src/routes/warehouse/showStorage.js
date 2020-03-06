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
    const apiURL = `http://sahayataapp.herokuapp.com/sahayata/storage/${userId}`;
    axios.get(apiURL).then((res)=>{
      this.setState({data:res.data});
    })
    .catch((error)=>{
      console.log(error);
    })
  }

  loadMyWarehouse() {
    if (this.state.data == null) {
      return <div className="loading" />;
    } else if (this.state.data[0] == undefined && localStorage.userType=="storage") {
      return <AddWarehouse />;
    } else {
      return this.state.data.map(res => {
        // console.log(res);
        return (
          <Fragment>

          <Colxx xxs="3">
            <Card style={{ padding: "1em" }}>
              <CardTitle>
                <b><h4><LanguageChanger text={res.name}/></h4></b>
              </CardTitle>
              <CardBody>
                <h5><LanguageChanger text="manager:  "/>{res.manager}</h5>
                <h5><LanguageChanger text="price:  Rs."/>{res.price}<LanguageChanger text="kg"/></h5>
                <h5><LanguageChanger text="address:  "/><LanguageChanger text={res.address}/> , <LanguageChanger text={res.district}/>, <LanguageChanger text={res.state}/></h5>
              </CardBody>
            </Card>
            </Colxx>

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
