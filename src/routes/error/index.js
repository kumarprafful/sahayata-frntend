import React, { Component, Fragment } from "react";
import IntlMessages from "Util/IntlMessages";
import { Row, Card, CardTitle, Button } from "reactstrap";
import { NavLink } from "react-router-dom";

import { Colxx } from "Components/CustomBootstrap";

class Error404 extends Component {
  constructor(props) {
    super(props);
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
                    <Card style={{'margin':'0 auto', 'width':'50em', 'text-align':'center' }}>
                    <CardTitle className="mb-4">
                      <IntlMessages id="layouts.error-title" />
                    </CardTitle>
                    <p className="mb-0 text-muted text-small mb-0">
                      <IntlMessages id="layouts.error-code" />
                    </p>
                    <p className="display-1 font-weight-bold mb-5">404</p>
                    <Button
                      href="/app"
                      color="primary"
                      className="btn-shadow"
                      size="lg"
                    >
                      <IntlMessages id="layouts.go-back-home" />
                    </Button>
                    </Card>

            </Row>
          </div>
        </main>
      </Fragment>
    );
  }
}
export default Error404;
