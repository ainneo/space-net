import React, {Component} from 'react';
import Card from './CardUI';
import './card-style.css'

import img1 from "../assets/astro.png";
import img2 from "../assets/astrogirl.png";
import img3 from "../assets/astroneon.png";


class Cards extends Component{
  render(){
    return(
      <div className="cards-wrapper">
       <div className="container">
           <div className="box">
           <Card imgsrc={img1} title="NASA"
             text="A trip around the Moon"
             link="https://www.nasa.gov/"/>
           </div>
           <div className="box1">
             <Card imgsrc={img2} title="SpaceX"
             text="A trip to Mars"
             link="https://www.spacex.com"/>
           </div>
           <div className="box2">
             <Card imgsrc={img3} title="Virgin Galatic"
             text="Space Adventures"
             link="https://www.virgingalactic.com/"/>
        </div>
      </div>
      </div>
    )
  }
}

export default Cards
