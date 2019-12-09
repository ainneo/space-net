import React, { Component } from "react";
import heroImg from '../assets/heroImg.png';
import './landings-styles.css'


const hero = {
  minHeight: '60vh',
  backgroundSize: "cover",
  backgroundImage: `url("${ heroImg }")`,
};

class Landing extends Component {
  render(){
    return(
      <div id="home" className="bg-wrapper">
        <div className="banner" style={hero}>
          <h1>{this.props.title}</h1>
          <p>{this.props.subTitle}</p>
          <a href="#button">{this.props.button}</a>
        </div>
      </div>

    )
  }
}

export default Landing
