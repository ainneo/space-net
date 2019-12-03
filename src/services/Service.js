import React, { Component } from "react";
import './services.css'


class Service extends Component{


  render(){
   return(
     <div id="services" className="services">
     <div id="button" className="services-text">
       <h2>SERVICES</h2>
       <p>Space Adventures’ vision is to open spaceflight
       and the space frontier to private citizens.
       We are working to develop new spaceflight experiences
       that are exciting, yet safe, and are seeking new ways
       of arranging reliable, affordable and safe access to space!</p>
       </div>
       <div className="row">
         <div className="col-xs col-md-4">
           <span><i className="fa fa-grav"></i></span>
           <h4>Activities</h4>
           <p>Plan your next Moon or space walk</p>
         </div>
         <div className="col-xs col-md-4">
           <span><i className="fa fa-fort-awesome"></i></span>
           <h4>Accommodations</h4>
           <p>Space Stations and Pod Accommodations</p>
         </div>
         <div className="col-xs col-md-4">
           <span><i className="fa fa-space-shuttle"></i></span>
           <h4>Flights Into Space</h4>
           <p>Coordinate flights with any carrier you choose</p>
         </div>
       </div>
     </div>
   )
  }
}

export default Service
