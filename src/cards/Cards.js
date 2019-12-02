import React, {Component} from 'react';
import Card from './CardUI';
import './card-style.css'

import img1 from "../assets/astro.png";
import img2 from "../assets/astrogirl.png";
import img3 from "../assets/astroneon.png";

class Cards extends Component{
  render(){
    return(
      <div id="mission" className="wrapper">
        <div className="container-fluid">
          <h1>Mission</h1>
            <div className="row">
              <p>SPACE NET wants as many people as
                possible to experience what it is like to live
                in space, to circle the Earth, or travel beyond
                Earth orbit. In the next ten years, our clients
                will have a choice as to what vehicle to fly to
                space on, and will be able to choose from multiple
                different destinations and sources.
              </p>
          </div>
            <h2>CHOOSE YOUR CARRIER</h2>
             <p>We will coordinate and plan your trip with the carrier you choose</p>
          <div className="row">
           <div className="box col-xs col-sm-6 col-md-4">
           <Card imgsrc={img1} title="NASA"
             text="A trip around the Moon"
             link="https://www.nasa.gov/"/>
           </div>
           <div className="box col-sx col-sm-6 col-md-4">
             <Card imgsrc={img2} title="SpaceX"
             text="Take a walk on Mars"
             link="https://www.spacex.com"/>
           </div>
           <div className="box col-sx col-sm-6 col-md-4">
             <Card imgsrc={img3} title="Virgin Galatic"
             text="Intergalactic Adventures"
             link="https://www.virgingalactic.com/"/>
           </div>
         </div>
       </div>
     </div>
    )
  }
}

export default Cards
