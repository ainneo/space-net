import React, { Component } from 'react';
import "./contact.css"


class Form extends Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render(){
    return(
      <div id="contact" className="contact-wrapper">
        <h2>CONTACT US</h2>
        <p>Want more information?</p>
        <div className="contact-container">
          <label htmlFor="fname">First Name</label>
          <input type="text" name="firstname" placeholder="Your name.."/>
          <label htmlFor="lname">Last Name</label>
          <input type="text" name="lastname" placeholder="Your last name.."/>
          <label htmlFor="email">Last Name</label>
          <input type="text" name="email" placeholder="email.."/>
            <div className="button">
              <input type="submit" value="submit"/>
            </div>
         </div>
      </div>
    )
  }
}

export default Form
