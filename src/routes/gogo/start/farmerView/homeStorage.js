import React, {Component, Fragment} from "react";

import {Row, Card, CardBody} from 'reactstrap';
import {Colxx} from "Components/CustomBootstrap";

import {NavLink} from 'react-router-dom';
import "./css/homeStorage.css";

class HomeStorage extends Component {
  render() {
    var pic2 = "../../../../assets/img/Home-storage/img3.jpg";
    var pic3 = "../../../../assets/img/Home-storage/img4.jpg";


    return (
      <Fragment>
        <Row>
          <Colxx xxs="6">
          <NavLink to="grains">
            <Card>
              <CardBody>
                <h2>Grains</h2>
              </CardBody>
            </Card>
          </NavLink>
          </Colxx>

          <Colxx xxs="6">
          <NavLink to="fruits-vegetables">
            <Card>
              <CardBody>
                <h2>Fruits/Vegetable</h2>
              </CardBody>
            </Card>
            </NavLink>
          </Colxx>
        </Row>

        <br />
      <Card>
      <CardBody>
        <div>
          <p>In India, the post-harvest losses of 
           food grains amount to more than 20 million tons per year, which is approximately 10% 
           of the total food grains produced. This can be attributed to the poor infrastructural
            facility and unscientific methodologies followed for food grain storage in the country.</p>
            <img src={pic3} class="para1img"/><img src={pic2} class="para1img2"/>
            <p> 
            In a country where about 20% of the population is undernourished, post-harvest losses of
             20 million tons annually is a substantial avoidable waste. Safe grain storage methods p
             lay a crucial role in preventing losses caused mainly by weevils, beetles, moths and rodents.
              It is estimated that 60–70% of food grain produced in the country is stored at domestic level.
               </p>
               
                <p> To ensure safe and scientific storage, careful selection of storage site, storage structure and proper aeration 
                  of grains, regular inspection of grain stock, cleaning and fumigation needs to be performed when required.
                   Traditionally two approaches are employed for grain storage in India:
                 temporary and long-term storage methods.</p>
                   <p> Bulk storage of
                    produce is done in warehouses owned by the Food Corporation of India (FCI) and the Central and State 
                    Warehousing Corporation (CWC/SWC).</p>
                     <p>Moisture content is another important parameter which should be
                  considered during grain quality analysis. The indigenous storage structures are not suitable for storing
                grains for very long periods. Thus, improved storage structures and scientific storage of grains in form 
    of warehouses is the need of the hour to strengthen traditional means of storage.</p>
    </div>
      </CardBody>
      </Card>
      </Fragment>
    );
  }
}

export default HomeStorage;
