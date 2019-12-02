import React, {Component} from "react";
import Nav from "./nav-bar/Nav";
import Landing from "./landings/Landing.js";
import Cards from "./cards/Cards";
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
       <Cards/>
      </div>
    );
  }
}

export default App
