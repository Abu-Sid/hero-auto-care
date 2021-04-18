import React from 'react';
import { Link } from 'react-router-dom';
import "./ServiceDetail.css";
const ServiceDetail = ({ service }) => {
    
    console.log("service",service);
    const {_id,name,price,imageURL}=service;
    return (
      <>
        <Link to={`/checkout/${_id}`}>
          <div
            className="card m-5 shared-bg shadow animation"
          >
            <img
              src={imageURL}
              className="card-img-top img-fluid mt-3"
              style={{ height: "40%", width: "40%", margin: "auto" }}
              alt="..."
            />
            <div className="card-body text-center">
              <h3 className="card-title shared-color">{name}</h3>
              <p className="card-text shared-color text">
                {" "}
                Special Price:${price}
              </p>
            </div>
          </div>
        </Link>
      </>
    );
};

export default ServiceDetail;