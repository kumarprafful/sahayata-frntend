import React, {Component} from 'react';
import {Card, CardBody, CardTitle} from 'reactstrap';

import "./css/fVegies.css";


class FVegies extends Component {
  render() {
    var clamp = "../../../../assets/img/Home-storage/clamp.jpg";
    var cellar = "../../../../assets/img/Home-storage/cellar.jpg";
    var charcoalcooler = "../../../../assets/img/Home-storage/charcoal-cooler.jpg";
    var ventilated = "../../../../assets/img/Home-storage/ventilated.jpg";
    var potinpot = "../../../../assets/img/Home-storage/pot-in-pot.jpg";
    return (
      <Card>
        {/* <CardTitle>Fruits and vegetables</CardTitle> */}
        <CardBody>
          <p>
        1. Clamps : 
Tropical  roots  and  tuber  crops  must  be  stored  at
 temperatures  that  will  provide  protection against 
   chilling, which  causes  internal  browning,  surface
  pitting  and increased  susceptibility  to  decay.
To  conquer  these conditions in potatoes, a field storage clamp is a simple and low  cost  technology  that  can  be  designed  using  local available  materials  for  ventilation  and  insulation.  For ex. potato for  processing, should  have less  sugars as  they turn dark during heating.  Whereas for house  hold consumption they  should  be  stored  in  dark  to  avoid  development  of solanine (toxic alkaloid) (CIP  1981). A storage clamp (Fig 1) is used in agricultural fields for temporary storage of root crops. Clamps are usually used in temperate regions but are also effective at higher  elevations and in  warmer climates. In tropical climates of India,  extra straw casing is made to give  extra  ventilation  instead  of  soil.  In  cold  climates,  a
second layer of straw and soil can be added whereas in hot regions, chimney type air outlets at the top of the clamp can be  made.  However,  during  rainy  weathers  clamp  can  be constructed  under  the  tree  or  roof  for  protection  from rainfall.
</p>
<p><img src={clamp}/></p>
<p>
2. Cellars : 
second layer of straw and soil can be added whereas in hot regions, chimney type air outlets at the top of the clamp can be  made.  However,  during  rainy  weathers  clamp  can  be constructed  under  the  tree  or  roof  for  protection  from rainfall.
</p>
<p><img src={cellar}/></p>
<p>
3. Ventilated storage structures : 
Naturally  ventilated  structures  can  be  used  for  the storage  of fruits  and  vegetables  such as  roots  and tubers, pumpkins, onions and hard  white cabbage.  Such structures are  designed  and  built  specifically  for  each  intended location. Any type of building can be used that allows free circulation of air through the structure and its contents. 
The  following  points  must  be  kept  in  mind  during  their construction:  Site should have low  night temperatures  occur over  the required storage period  It  should  maximize  the  use  of  the prevailing  wind  for ventilation  Roofs and walls should provide insulation against sun  Shade of tree should be used : if they do not interfere with the prevailing air flow  Provide  ventilation spaces  below  the floor  and between walls and roofs to give appropriate air flow This  type  of  storage  structure  is  commonly  used  in India for  the bulk  storage of  onion and  garlic. Onions  are stored in these  sheds by spreading them on  dry and damp proof  floor  or  racks.  Some  of  the  improved  storage structures  for  onions    include  concentric  structures,  low volume  low  cost  structures  (5-10  tons  capacity) made  of bamboo,  high  volume  bottom  and side  ventilated  storage structure (25-50 tons capacity), Nasik type storage structure etc.
</p>
<p><img src={ventilated}/></p>
<p>
4. Evaporative cool chambers : 
Evaporative  cooling  is  a  natural  phenomenon  that occurs  when moving  air passes  over a  wetted  medium or water  source  like  pond,  fountain,  river,  sea,  shower,  etc. When  water  evaporates,  it  draws  energy  from  its surroundings which produce  a considerable  cooling effect. Efficiency of evaporative cooler depends on humidity of the surrounding air which can be understood from a temperature drop chart (Table 1) as given below.  Evaporative cooling is one  of  the  methods  to  cool  the  environment  where  the temperature drops and humidity increases considerably to a suitable level for on-farm storage short-term of perishables (Jha and Kudas 2006). Cooling  by evaporation  is an  age  old practice  and is known in every part  of the  world. This  technique is  more Kale et al. 2016  Indian Horticulture Journal 6(3) 377 
popular  in  India,  African  countries  and  Middle  East. Different  types of  evaporative  cool chambers  with varied  size, capacity, volume have been developed in various parts of the world.</p>
    <p>
    (i) Pot-in-pot :
    It  is a  simple design  of  evaporative cooler  for use  at home.  The  basic  design  consists  of  a  storage  pot  placed inside  a bigger  pot that holds  water.  The inner  pot stores food  that  is  kept  cool.  One  adaptation  on  the  basic  pot design is  the Janata cooler (Fig 5),  developed by the food and nutrition board  of India  (Roy and  Khurdiya 1985). A storage  pot  is  placed  in  an  earthenware  bowl  containing water.  The pot  is then  covered  with a  damp  cloth that  is dipped into the reservoir of water. Water drawn up the cloth evaporates keeping the storage pot cool. The bowl is  also placed on wet sand to isolate the pot from the ground.</p>
    <p><img src={potinpot} class="pot"/></p> 
    <p>
    (ii) Charcoal cooler :
    The charcoal cooler is made from an open timber frame of  approximately 50mm  ×  25mm in  section.  The  door  is made by simply hanging one side of the frame. The wooden frame is covered in mesh, inside and out, leaving a 25 mm cavity which is filled with pieces of charcoal. The charcoal is sprayed with water and when wet provides an evaporative cooling. The frame work is mounted outside the house on a pole with ametal  cone to deter rats and  a good  coating of grease to prevent ants from getting to the food (Odesola and Onyebuchi  2009).  The  top  is  usually  solid  and  thatched, with an overhang to deter flying insects.</p>
    <p><img src={charcoalcooler}/></p>
    <p>
    (iii) Evaporative  cool  chamber  (ECC) or  zero  energy cool chamber (ZECC) :
    IARI, New Delhi developed a cooling chamber that can be  built in  any part  of the country using locally available materials (Roy and Khurdiya 1985). The basic structure of the chamber can be built from bricks and river sand, with a cover made from cane or other plant materials such as straw and sacks or cloth. This structure requires a nearby source of water. Its construction is simple. Floor is built from a single layer  of  bricks  and  then  a  cavity  wall  is  constructed  of bricks around the outer edge of the floor with a gap  of 75 mm between the inner wall and the outer wall. This cavity is then filled with sand. About 400 bricks are needed to build a chamber of the size shown below (Fig 8). A covering for the chamber is made with canes covered in sacking all mounted in a bamboo frame. The whole structure should be protected from  sunlight  by  making  a  roof  to  provide  shade.  After construction of the walls and floor, the sand in the cavity is thoroughly  saturated  with  water.  Once  the  chamber  is completely wet, a twice daily sprinkling of water is enough to maintain the moisture and temperature of the chamber. A simple automated drip watering ECC has been shown in Fig 7(A). Number of attempts has been made to modify existing ECC  and some  of  the improved  structures of  evaporative cool chambers have been developed recently. Fig 7(B) and Fig 7 (C) show the improved ECC structures developed by ICAR-IARI,  New  Delhi  and  ICAR-Central  Institute  of Postharvest Engineering and Technology, Abohar (Punjab), respectively.  It  has been  reported  that  ECC  can  keep  the Low Cost Storage Structures for Fruits and Vegetables 378 
temperature  10-15°C  cooler  than  the  outside  temperature and maintain about 90% relative humidity. A  study  was  conducted  at  ICAR-CIPHET,  Abohar (Punjab)  to  understand  the  effect  of  storage  conditions provided by evaporative cooling chamber (ECC), cold store (CS)  and  ambient  conditions  (room)  on  stored  tomatoes. During  study,  room  temperature  varied  from  30  to  45°C whereas, evaporative  cooling chamber (ECC) provided the temperature  5  to  10°C  lower  than  room  temperature. Ambient  RH  varied  from  15  to 56%  whereas  RH  inside ECC was found to be 74-80%. Temperature and RH inside cold  store was  set as  5°C  and 90%,  respectively. Tomato samples  were  stored  for  a  period  of  15  days  and  were analyzed  for  selected  physico-chemical  parameters  like physiological  loss in  weight (%),  colour,  texture,  pH  and total soluble  solids (°Brix). It was observed that  lower the storage  temperature  lesser  was  the  changes  in  physico-chemical  properties and  vice versa.  At  the  end of  storage period, physiological  loss in weight was  more in  tomatoes stored at room temperature  (16%) followed by  ECC (7%) and cold store (2%). Remaining parameters showed similar results. Thus, tomatoes  stored at room temperature showed more quantitative as well as qualitative losses compared to that  stored  in  ECC  structure.  At  room  conditions, temperature  was  higher  and  RH  was  lower  compared  to ECC  structure  which  resulted  in  severe  deterioration  in quality. 
</p>
        </CardBody>
      </Card>

    );
  }
}

export default FVegies;
