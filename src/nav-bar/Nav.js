import React from 'react';
import './nav-styles.css';

const Nav = props => {
  return(
    <div>
    <nav className="navbar fixed-top navbar-expand-md navbar-light">
      <h1 className="nav-text">{props.LogoTitle}</h1>

      <button className="navbar-toggler" type="button" data-toggle="collapse"
      data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
      aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link text-success" href="#home"><p>Home</p><span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item active">
            <a className="nav-link text-success" href="#mission"><p>Mission</p><span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item active">
            <a className="nav-link text-success" href="#services"><p>Services</p><span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item active">
            <a className="nav-link text-success" href="#contact"><p>Contact</p><span className="sr-only">(current)</span></a>
          </li>
        </ul>
      </div>

    </nav>
    </div>
)
}

export default Nav
