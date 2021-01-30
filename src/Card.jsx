import React from "react";
import web from "./images/portfolio1.jpg"
import { NavLink } from "react-router-dom";


const Card = (props) => {
  return (
    <>
                <div Class="col-md-4 col-10 mx-auto">
                <div Class="card">
                  <img src={props.imgsrc} Class="card-img-top" alt={props.imgsrc} />
                    <div Class="card-body">
                      <h5 Class="card-title font-weight-bold">{props.title}</h5>
                        <p Class="card-text">Some quick example 
                        text to build on the card title and make up 
                        the bulk of the card's content.</p>
                        <NavLink to="#" Class="btn btn-primary">Go somewhere</NavLink>
                    </div>
                  </div>
                </div>
              
    </>
  );
};

export default Card;
