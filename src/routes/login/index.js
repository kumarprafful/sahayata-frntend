import React, { Component, Fragment } from "react";
import IntlMessages from "Util/IntlMessages";
import { Row, Card, CardTitle, Form, Label, Input, Button , FormGroup} from "reactstrap";
import { NavLink } from "react-router-dom";

import { Colxx } from "Components/CustomBootstrap";

import { connect } from "react-redux";
import { loginUser } from "Redux/actions";
import axios from "axios";

class LoginLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      index: 1
    };
    this.handleusername = this.handleusername.bind(this);
    this.handlepassword = this.handlepassword.bind(this);
    this.onUserLogin = this.onUserLogin.bind(this);
  }
  onUserLogin() {
    console.log(this.state);
    if (this.state.email !== "" && this.state.password !== "") {
      this.props.loginUser(this.state, this.props.history);
    }
    // <Redirect to={}
    this.props.history.push("/");
  }

  handleusername(event) {
    this.setState({ username: event.target.value });
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
                          onChange={this.handleUsername}
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label className="form-group has-float-label mb-4" />
                        <Input
                          type="password"
                          placeholder="Password"
                          onChange={this.handlePassword}
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
    loginUser
  }
)(LoginLayout);
