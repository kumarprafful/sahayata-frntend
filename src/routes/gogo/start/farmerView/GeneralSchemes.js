import React, {Component, Fragment} from 'react';
import { Row, Card, CardBody, CardTitle, Button, Jumbotron } from "reactstrap";


export default class GeneralSchemes extends Component {
  render() {
    return (
      <Fragment>
      <h1><b><i>Schemes For Farmers</i></b></h1>
      <table border={2}>
      <tr>
      <th style={{"color":"purple"}}><b>S.No.</b></th>
      <th style={{"color":"purple"}}><b>Scheme & Components</b></th>
      <th style={{"color":"purple"}}><b>Provisions</b></th>
      </tr>
      <tr>
      <td><b>1</b></td>
      <td><b>Soil Health Card Scheme</b></td>
      <td><b>It  has been introduced to assist State Governments to issue Soil Health Cards to all farmers in the country.The Soil Health Cards provide information to farmers on nutrient status of their soil along with recommendation on appropriate dosage of nutrients to be applied for improving soil health and its fertility. </b></td>
      </tr>
      <tr>
      <td><b>2</b></td>
      <td><b>National Mission for Sustainable Agriculture (NMSA)</b></td>
      <td><b><br /> It aims at promoting Sustainable Agriculture through climate change adaptation measures, enhancing agriculture productivity especially in rainfed areas focusing on integrated farming, soil health management, and synergizing resource conservation. </b></td>
      </tr>
      <tr>
      <td><b>3</b></td>
      <td><b>Pradhan Mantri Krishi Sinchai Yojana (PMKSY)</b></td>
      <td><b><br /> Its motto is Har Khet Ko Paani for providing end-to end solutions in irrigation supply chain, viz. water sources, distribution network and farm level applications.
      PMKSY not only focuses on creating sources for assured irrigation, but also creating protective irrigation by harnessing rain water at micro level through Jal Sanchay and Jal Sinchan. </b></td>
      </tr>
      <tr>
      <td>4</td>
      <td> <b>Paramparagat Krishi Vikas Yojana (PKVY)</b></td>
      <td><b><br />It is implemented with a view to promote organic farming in the country.?To improve soil health and organic matter content and increase net income of the farmer so as to realise premium prices.  Under this scheme, an area of 5 lakh acre is targeted to be covered though 10,000 clusters of 50 acre each, from the year 2015-16 to 2017-18. </b></td>
      </tr>
      <tr>
      <td>5</td>
      <td><b>National Agriculture Market (e-NAM) </b></td>
      <td><b><br />It provides e-marketing platform at national level and support creation of infrastructure to enable e-marketing.This innovative market process is revolutionizing agriculture markets by ensuring better price discovery. It brings in transparency and competition to enable farmers to get improved remuneration for their produce moving towards One Nation One Market.</b></td>
      </tr>
      <tr>
      <td>6</td>
      <td><b> Pradhan Mantri Fasal Bima Yojana (PMFBY)</b></td>
      <td><b><br />PMFBY is an actuarial premium based scheme under which farmer has to pay maximum premium of 2% for Kharif, 1.5% for Rabi food & oilseed crops and 5% for annual commercial/horticultural crops and remaining part of the actuarial/bidded premium is shared equally by the Centre and State Government.  One of the objectives of the scheme is to facilitate prompt claims settlement. The claims must be settled within two months of harvest subject to timely provision of both yield data and share of premium subsidy by the State Government. </b></td>
      </tr>
      </table>
      </Fragment>
    );
  }

}
