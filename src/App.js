import React, {Component} from "react";
import Nav from "./nav-bar/Nav";
import Landing from "./landings/Landing.js";
import Cards from "./cards/Cards";
import Services from "./services/Service.js";
import Form from "./contact/Contact.js";
import "./App.css"


class App extends Component{

  render(){
    return (
      <div>
       <Nav LogoTitle="SPACE NET"/>
       <Landing
       title="SPACE VACATION"
       subTitle="Packages starting at $35,000 per night"
       button="Find Out More"
       />
       <Cards
       title="MISSION"
       information="SPACE NET wants as many people as possible
       to experience what it is like to live in space, to circle
       the Earth, or travel beyond Earth orbit. In the next ten
       years, our clients will have a choice as to what vehicle
       to fly to space on, and will be able to choose from multiple
       different destinations and sources."
       subTitle="CHOOSE YOUR CARRIER"
       subInformation="We will coordinate and plan your trip with the carrier you choose"
       />
       <Services/>
       <Form/>
      </div>
    );
  }
}

export default App
