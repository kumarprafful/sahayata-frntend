import React, { Component, Fragment } from "react";
import IntlMessages from "Util/IntlMessages";
import { Row, Card, CardTitle, Form, Label, Input, Button } from "reactstrap";
import { NavLink } from "react-router-dom";

import { Colxx } from "Components/CustomBootstrap";

import { connect } from "react-redux";
import { registerUser } from "Redux/actions";

class RegisterLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      type: "farmer"
    };
  }
  onUserRegister() {
    console.log(this.state);
    if (this.state.email !== "" && this.state.password !== "") {
      // This is for adding user to Firebase. Commented out for demo purpose.
      // this.props.registerUser(this.state, this.props.history);
      

      this.props.history.push("/login");
    }
  }

  componentDidMount() {
    document.body.classList.add("background");
  }
  componentWillUnmount() {
    document.body.classList.remove("background");
  }
  render() {
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
                      Please use this form to register. <br />
                      If you are a member, please{" "}
                      <NavLink to={`/login`} className="white">
                        login
                      </NavLink>
                      .
                    </p>
                  </div>
                  <div className="form-side">
                    <NavLink to={`/`} className="white">
                      <span className="logo-single" />
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
    registerUser
  }
)(RegisterLayout);
