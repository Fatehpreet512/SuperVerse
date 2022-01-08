import React from 'react'
export default function Hero(props) {
  return (
    <div>
      <div className=" cardcolor container my-3 mx-3 card" style={{ width: '18rem' }}>
        <img src={props.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">
            {props.title} was designed as {props.aliases} of {props.race!==null?props.race:'Unknown'} race.
            <ul>
            <li>Published by:{props.pub}</li>
             <li>Intelligence:{props.intelligence}</li>
             <li>Power:{props.power}</li>
             <li>Combat:{props.combat}</li>

            </ul>
            </p>
         
        </div>
      </div>
    </div>
  )
}
