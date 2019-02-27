import React, { Component, Fragment } from "react";
import IntlMessages from "Util/IntlMessages";
import { Row, Card, CardTitle, Form, Label, Input, Button , FormGroup} from "reactstrap";
import { NavLink } from "react-router-dom";

import { Colxx } from "Components/CustomBootstrap";

import { connect } from "react-redux";
import { loginUser, loginUserSuccess } from "Redux/actions";
import axios from "axios";

class LoginLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      index: 1
    };
    this.handleusername = this.handleusername.bind(this);
    this.handlepassword = this.handlepassword.bind(this);
    this.onUserLogin = this.onUserLogin.bind(this);
  }
  onUserLogin(e) {
    e.preventDefault();
    axios.post("https://sahayata-farmer.herokuapp.com/login", this.state)
    .then(res => {
      if(res.status == 200){
        this.props.loginUserSuccess({...this.state, username: res.data.email ,userType:res.data.type, userId: res.data.userId });
        this.props.history.push("/");
      }
    })
    .catch(error => {
      console.log(error);
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
    return (
      <Fragment>
        <img className="fixed-background" src={img} />
        <main>
          <div className="container">
            <Row className="h-100">
              <Colxx xxs="12" md="6" className="mx-auto my-auto">
                <Card className="auth-card card-login">
                  <div className="form-side">
                    <NavLink to={`/`}>
                      <CardTitle className="mb-4 h3 white">
                        <IntlMessages id="menu.gogo" />
                      </CardTitle>
                    </NavLink>
                    <CardTitle className="mb-4 white">
                      <IntlMessages id="user.login-title" />
                    </CardTitle>
                    <Form onSubmit={this.onUserLogin}>
                      <FormGroup>
                        <Label className="form-group has-float-label mb-4" />
                        <Input
                          placeholder="Username"
                          type="text"
                          onChange={this.handleusername}
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label className="form-group has-float-label mb-4" />
                        <Input
                          type="password"
                          placeholder="Password"
                          onChange={this.handlepassword}
                        />
                      </FormGroup>
                      <div className="d-flex justify-content-between align-items-center">
                        <NavLink to={`/forgot-password`} />
                        <Button
                          color="primary"
                          className="btn-shadow"
                          size="lg"
                          type="submit"
                        >
                          <IntlMessages id="user.login-button" />
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
    loginUser,
    loginUserSuccess
  }
)(LoginLayout);
