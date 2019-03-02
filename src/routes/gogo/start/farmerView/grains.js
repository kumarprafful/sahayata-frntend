import React, {Component, Fragment} from 'react';
import {Card, CardBody, CardTitle,Row} from 'reactstrap';
import {NavLink} from 'react-router-dom';
import {Colxx} from "Components/CustomBootstrap";


class Grains extends Component {
  render() {
    return (
      <Fragment>
        <Row>
          <Colxx xxs="4">
          <NavLink to="capacity">
            <Card>
              <CardBody>
                <h2>High/Low Capacity</h2>
              </CardBody>
            </Card>
          </NavLink>
          </Colxx>

          <Colxx xxs="4">
          <NavLink to="cost">
            <Card>
              <CardBody>
                <h2>Cheap/Expensive</h2>
              </CardBody>
            </Card>
            </NavLink>
          </Colxx>

          <Colxx xxs="4">
          <NavLink to="duration">
            <Card>
              <CardBody>
                <h2>High/Low Durability</h2>
              </CardBody>
            </Card>
            </NavLink>
          </Colxx>
        </Row>

        <br />
      <Card>
        {/* <CardTitle>Overview</CardTitle> */}
        <CardBody><p>Grain storage plays  an important role in preventing losses which are caused  mainly due to  weevils, 
          beetles, moths and rodents (Kartikeyan et al, 2009). It is estimated that 60-70% of food grain produced in the
           country is stored at home level in indigenous storage structures.</p>
           
The storage methods range from mud structures to modern bins. The containers are made from a  variety  of locally 
available materials differing  in   design, shape, size and functions. The materials used include paddy straw, wheat
 straw, wood, bamboo, reeds, mud, bricks, cow dung etc. Grains can be stored indoors, outdoor or at underground level
  (Channal et al, 2004).Outdoor storage of grains is done in structures made of bamboo or straw mixed with mud. Bamboo
   structures are used for storing unthreshed and threshed paddy.</CardBody>
      </Card></Fragment>

    );
  }
}

export default Grains;
