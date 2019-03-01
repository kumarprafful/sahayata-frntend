import React, { Component, Fragment } from "react";
import IntlMessages from "Util/IntlMessages";
import { Alert, Row, Card, CardTitle, Form, Label, Input, Button } from "reactstrap";
import { NavLink } from "react-router-dom";

import { Colxx } from "Components/CustomBootstrap";

import { connect } from "react-redux";
import { registerUser, loginUserSuccess } from "Redux/actions";

import axios from 'axios';
import LanguageChanger from "Components/LanguageChanger";


class RegisterLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      type: "farmer",
      firstName: "",
      mobileNo: "",
      sex: "Male",
      district: "",
      state: "",
      loading: false,
      errorMessage: ""
    };
  }
  onUserRegister() {
    if (this.state.email == "" || this.state.password == "" || this.state.firstName == "" || this.state.mobileNo == "" || this.state.sex == "" || this.state.district == "" || this.state.state == "") {
      alert("Fill the credentials")
      // this.props.history.push("/login");
    }
    else{
      this.setState({loading:true});
      axios.post("https://sahayata-farmer.herokuapp.com/register", this.state)
      .then(res => {
        console.log(res);
        this.props.loginUserSuccess({...this.state, userType:res.data.type});
        this.props.history.push("/");
        this.setState({loading:false});

      })
      .catch(error =>{
        console.log(error);
        this.setState({
          loading:false,
          errorMessage: "Invalid credentials"
        });

      })
    }


  }

  componentDidMount() {
    document.body.classList.add("background");
  }
  componentWillUnmount() {
    document.body.classList.remove("background");
  }
  render() {
    var logo = "../../assets/img/icon/output-onlinepngtools.png";
    let content, error;
    if (this.state.loading) {
      content = <div className="loading" />;
    }
    else{
      content = <div></div>;
    }
    if(this.state.errorMessage){
      error = <Alert color="danger"><h1>{this.state.errorMessage}</h1></Alert>
    }
    return (
      <Fragment>
        <div className="fixed-background" />
        <main>
          <div className="container">
            <Row className="h-100">
              <Colxx xxs="12" md="10" className="mx-auto my-auto">
                <Card className="auth-card">
                  <div className="position-relative image-side ">
                    <p className="text-white h2">MAGIC IS IN THE DETAILS</p>
                    <p className="white">
                    <LanguageChanger text="A fertile soil alone does not carry agriculture to perfection" />

                      If you are a member, please{" "}
                      <NavLink to={`/login`} className="yellow" >
                        login
                      </NavLink>
                      .

                    </p>
                  </div>
                  <div className="form-side">
                  {content}
                  {error}
                    <NavLink to={`/`} className="white">
                      <span><img src={logo} /></span>
                    </NavLink>
                    <CardTitle className="mb-4">
                      <IntlMessages id="user.register" />
                    </CardTitle>
                    <Form>
                      <Label className="form-group has-float-label mb-4">
                        <Input
                         type="email"
                         onChange={(e) => this.setState({email:e.target.value})}
                       />
                        <IntlMessages id="user.email" />
                      </Label>
                      <Label className="form-group has-float-label mb-4">
                        <Input
                         type="password"
                         onChange={(e) => this.setState({password:e.target.value})}
                        />
                        <IntlMessages id="user.password" />
                      </Label>
                      <Label className="form-group has-float-label mb-4">
                        <Input type="select" name="select" onChange={(e) => this.setState({type:e.target.value})}>
                          <option selected value="farmer">Farmer</option>
                          <option value="transport">Transport</option>
                          <option value="storage">Storage</option>
                        </Input>
                        <IntlMessages id="user.type" />
                      </Label>
                      <Label className="form-group has-float-label mb-4">
                        <Input
                         type="text"
                         onChange={(e) => this.setState({firstName:e.target.value})}
                        />
                        <IntlMessages id="Full name" />
                      </Label>
                      <Label className="form-group has-float-label mb-4">
                        <Input
                         type="text"
                         onChange={(e) => this.setState({mobileNo:e.target.value})}
                        />
                        <IntlMessages id="Mobile number" />
                      </Label>
                      <Label className="form-group has-float-label mb-4">
                      <Input type="select" name="select" onChange={(e) => this.setState({sex:e.target.value})}>
                        <option selected value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="others">Others</option>
                      </Input>
                        <IntlMessages id="Gender" />
                      </Label>
                      <Label className="form-group has-float-label mb-4">
                        <Input
                         type="text"
                         onChange={(e) => this.setState({district:e.target.value})}
                        />
                        <IntlMessages id="District" />
                      </Label>
                      <Label className="form-group has-float-label mb-4">
                        <Input
                         type="text"
                         onChange={(e) => this.setState({state:e.target.value})}
                        />
                        <IntlMessages id="State" />
                      </Label>


                      <div className="d-flex justify-content-end align-items-center">
                        <Button
                          color="primary"
                          className="btn-shadow"
                          size="lg"
                          onClick={() => this.onUserRegister()}
                        >
                          <IntlMessages id="user.register-button" />
                        </Button>
                      </div>
                    </Form>
                  </div>
                </Card>
              </Colxx>
            </Row>
          </div>
        </main>
      </Fragment>
    );
  }
}
const mapStateToProps = ({ authUser }) => {
  const { user, loading } = authUser;
  return { user, loading };
};

export default connect(
  mapStateToProps,
  {
    registerUser,
    loginUserSuccess
  }
)(RegisterLayout);
