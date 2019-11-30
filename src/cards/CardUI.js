// https://react-bootstrap.github.io/getting-started/introduction/
// https://getbootstrap.com/docs/4.0/utilities/colors/
// https://getbootstrap.com/docs/4.0/utilities/borders/

import React from 'react';
import './card-style.css'

const Card = props => {
  return(
    <div className = "card text-center shadow">
      <div className = "overflow">
        <img src={props.imgsrc} alt="astro" className="card-img-top" />
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text text-secondary">{props.text}</p>
        <a href={props.link} className="btn btn-outline-success">Go Anywhere</a>
      </div>
    </div>
  )
}

export default Card
