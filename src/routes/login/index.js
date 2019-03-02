import React, { Component, Fragment } from "react";
import IntlMessages from "Util/IntlMessages";
import { Alert, Row, Card, CardTitle, Form, Label, Input, Button , FormGroup} from "reactstrap";
import { NavLink } from "react-router-dom";

import { Colxx } from "Components/CustomBootstrap";

import { connect } from "react-redux";
import { loginUser, loginUserSuccess } from "Redux/actions";
import axios from "axios";

import LanguageChanger from "Components/LanguageChanger";
class LoginLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      index: 1,
      loading: false,
      errorMessage: ""
    };
    this.handleusername = this.handleusername.bind(this);
    this.handlepassword = this.handlepassword.bind(this);
    this.onUserLogin = this.onUserLogin.bind(this);
  }
  onUserLogin(e) {
    this.setState({loading:true})
    e.preventDefault();
    axios.post("https://sahayata-farmer.herokuapp.com/login", this.state)
    .then(res => {
      if(res.status == 200){
        this.props.loginUserSuccess({...this.state, username: res.data.email ,userType:res.data.type, userId: res.data.userId });
        this.props.history.push("/");
        this.setState({
          loading: false
        });
      }
    })
    .catch(error => {
      console.log(error.message);
      this.setState({
        loading: false,
        errorMessage: "Invalid credentials"
      });

    });
  }

  handleusername(event) {
    this.setState({ email: event.target.value });
  }
  handlepassword(event) {
    this.setState({ password: event.target.value });
  }

  componentDidMount() {
    document.body.classList.add("background");
    setInterval(() => {
      if (this.state.index < 6) {
        this.setState({ index: this.state.index + 1 });
      } else {
        this.setState({ index: 1 });
      }
    }, 10000);
  }
  componentWillUnmount() {
    document.body.classList.remove("background");
  }
  render() {
    var img = "assets/img/slider/s" + this.state.index +".jpg";
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
        <img className="fixed-background" src={img} />
        <main>
          <div className="container">
            <Row className="h-100">
              <Colxx xxs="12" md="6" className="mx-auto my-auto">
                <Card className="auth-card card-login">
                {content}
                  <div className="form-side">
                  {error}

                    <NavLink to={`/`}>

                      <CardTitle className="mb-4 h3 white">
                        <IntlMessages id="menu.gogo" />
                      </CardTitle>
                    </NavLink>
                    <CardTitle className="mb-4 white">
                      <LanguageChanger text="Login"/>
                    </CardTitle>
                    <Form onSubmit={this.onUserLogin}>

                        <Label className="form-group has-float-label mb-4" />
                        <Input
                          placeholder="Username"
                          type="text"
                          onChange={this.handleusername}
                        />




                        <Label className="form-group has-float-label mb-4" />
                        <Input
                          type="password"
                          placeholder="Password"
                          onChange={this.handlepassword}
                        />
                        <br />


                      <div className="d-flex justify-content-between align-items-center">

                        <Button
                          color="primary"
                          className="btn-shadow"
                          size="lg"
                          type="submit"
                        >
                          <LanguageChanger text="Login"/>
                        </Button>
                      </div>
                    </Form><br /><br />
                    <div><h3 className="mb-4 white text-center"> <LanguageChanger text="New user?" /><NavLink to="register" style={{'color': 'yellow'}}>  <LanguageChanger text="Sign up here"/> </NavLink></h3></div>

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
    loginUser,
    loginUserSuccess
  }
)(LoginLayout);
