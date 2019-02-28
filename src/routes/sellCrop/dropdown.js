// <div className="float-sm-right">
//   <Dropdown
//     onChange={(e)=>{console.log(e);}}
//     isOpen={this.state.toggle}
//     toggle={this.toggle}
//     className="mb-5"
//   >
//     <DropdownToggle caret color="secondary" outline>
//       All
//     </DropdownToggle>
//     <DropdownMenu>
//       <DropdownItem >
//         crop1
//       </DropdownItem>
//       <DropdownItem>
//         crop2
//       </DropdownItem>
//     </DropdownMenu>
//   </Dropdown>
// </div>
import React, {Component} from "react";
import {
  Row,
  Card,
  CardBody,
  CardTitle,
  CardImg,
  CardText,
  Button,
  Jumbotron,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu
} from "reactstrap";

export default class extends Component {

  constructor(props){
    super(props);
    this.state  = {
      toggle: false,
      value: "All"
    }
    this.toggleF = this.toggleF.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  toggleF(){
    this.setState({toggle: !this.state.toggle})
  }

  handleClick(e){
    // this.setState({value: e.target.value});
    this.props.select(e.target.value)
  }

  render(){
    return (
      <div className="float-sm-right">
        <Dropdown
          onChange={(e)=>{console.log(e);}}
          isOpen={this.state.toggle}
          toggle={this.toggleF}
          className="mb-5"
        >
          <DropdownToggle caret color="secondary" outline>
            All
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem value="Arhar (Tur/Red Gram)(Whole)" onClick={this.handleClick}>
              Arhar
            </DropdownItem>
            <DropdownItem value="Bajra(Pearl Millet/Cumbu)" onClick={this.handleClick}>
              Bajra
            </DropdownItem>
            <DropdownItem value="Bengal Gram(Gram)(Whole)" onClick={this.handleClick}>
              Bengal Gram
            </DropdownItem>
            <DropdownItem value="Black Gram (Urd Beans)(Whole)" onClick={this.handleClick}>
              Black GraM
            </DropdownItem>
            <DropdownItem value="Castor Seed" onClick={this.handleClick}>
              Castor Seed
            </DropdownItem>
            <DropdownItem value="Cotton" onClick={this.handleClick}>
              Cotton
            </DropdownItem>
            <DropdownItem value="Groundnut" onClick={this.handleClick}>
              Groundnut
            </DropdownItem>
            <DropdownItem value="Maize" onClick={this.handleClick}>
              Maize
            </DropdownItem>
            <DropdownItem value="Mustard" onClick={this.handleClick}>
              Banana
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
}
