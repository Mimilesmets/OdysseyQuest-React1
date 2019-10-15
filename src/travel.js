import React from "react";

export const Travel = props => (
  <div className="picture">
    <img src={props.image} alt={props.name} />
    <div className="destination">{props.destination}</div>
    <div className="country">{props.country}</div>
    <div className="distance">{props.distance}</div>
  </div>
);

export default Travel; 