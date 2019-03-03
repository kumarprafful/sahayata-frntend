import React , { Component , Fragment } from "react";
import {Card} from "reactstrap";
import json from "./valueadded.json";

export default class extends Component {

  render(){
    console.log(this.props.crop);
    console.log(json[0].data.coffee);
    return (
      <Fragment>
        <b>Uses:</b>
        <br/>
        {json[0].data[this.props.crop].uses}
        <br/>
        <br/>
        <b>Processing</b>
        <br/>
        {json[0].data[this.props.crop].processing}
        <br/>
        <br/>
        <b>Processing Equipment</b>
        <br/>
        {json[0].data[this.props.crop].processingEquipment}
        <br/>
        <br/>
        <b>Price</b>
        <br/>
        {json[0].data[this.props.crop].price}
        <br/>
        <br/>
        <b>Cost</b>
        <br/>
        {json[0].data[this.props.crop].cost}

      </Fragment>
    );
  }
}
