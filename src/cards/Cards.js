import React, {Component} from 'react';
import Card from './CardUI';
import './card-style.css'

import img1 from "../assets/astro.png";
import img2 from "../assets/astrogirl.png";
import img3 from "../assets/astroneon.png";

class Cards extends Component{
  render(){
    return(
      <div className="container-fluid">
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
    )
  }
}

export default Cards
