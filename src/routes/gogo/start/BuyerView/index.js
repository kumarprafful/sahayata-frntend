import React, { Component, Fragment } from "react";
import { Row, Col, Card, CardBody, CardTitle, Button } from "reactstrap";

import IntlMessages from "Util/IntlMessages";

import { Colxx, Separator } from "Components/CustomBootstrap";
import BreadcrumbContainer from "Components/BreadcrumbContainer";

import AddWarehouse from "../../../warehouse/addWarehouse";
import LanguageChanger from "Components/LanguageChanger";
import ReactAutosuggest from "Components/ReactAutosuggest";

import axios from "axios";


const cropData = [
  {
    name: "Coffee"
  },
  {
    name: "Banana"
  },
  {
    name: "Roses"
  },
  {
    name: "Tulips"
  },
  {
    name: "Tomatoes"
  },
  {
    name: "Turmeric"
  }
];

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      search: null,
      useData: null
    }
    this.handleCrops = this.handleCrops.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleCrops() {
    var search = this.state.search;
    if(this.state.useData == null){
        <div/>
    }
    else{
      return this.state.useData.map((element)=>{
        console.log(element);

        return (
          <Fragment>
            <Card>
                <h4><b>CROP : {element.crop}</b></h4>
                <br/>
                Quantity :{element.quantity} kg
                <Button size="sm">Request for price</Button>
            </Card>
            <br/>
          </Fragment>
        );
      })
    }

  }

  handleChange(value){
    var a = this.state.data.filter((res)=>{
      if(res.crop == value){
        return res;
      }
    });
    this.setState({useData: a});
  }

  componentWillMount(){
    axios.get("https://sahayata-farmer.herokuapp.com/sahayata/buyer").then((res)=>{
      this.setState({data: res.data});
    });
  }

  render() {
    return (
      <Fragment>
        <Card>
          <ReactAutosuggest
            placeholder="Type a crop you want to buy"
            data={cropData}
            onChange={this.handleChange}
          />
        </Card>
        <br/>
        {this.handleCrops()}
      </Fragment>
    );
  }
}
