import React, {Component, Fragment} from 'react';
import axios from 'axios';

export default class PastOrders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    }
  }

  componentWillMount() {
    const userId = localStorage.userId;
    const apiURl = `https://sahayata-farmers.herokuapp.com/sahayata/farmer/${userId}/order`;
    axios.get(apiURl)
    .then(res => {
      this.setState({
        data: res.data
      })
    })
    .catch(error => {
      console.log(error);
    });
  }

  renderPastOrders() {
    console.log(this.state.data);
    if(this.state.data==null){
      return <div className="loading" />;
    }
    else{
      return (
        <div>hey</div>

      );
    }
  }

  render() {
    return (
      <Fragment>
        Past Orders.
      </Fragment>
    );
  }
}
