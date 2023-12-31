import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Vehicle = ({ modelVehicle, nameVehicle, id }) => {
  const { actions } = useContext(Context)
  return (
    <div className="container">
      <div className="col m-4 d-flex">
        <div className="card h-100" style={{ width: "18rem" }}>
          <img
            src={
              "https://starwars-visualguide.com/assets/img/vehicles/" +
              id +
              ".jpg"

            } onError={(e) => {
              e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg';
            }}
            className="card-img-top" style={{height:"393.25px"}}
            alt="..."

          />
          <div className="card-body">
            <h5 className="card-title"> {nameVehicle} </h5>
            <p className="card-text"> Model: {modelVehicle} </p>
            <Link to={"/viewVehicle/" + id} className="btn bg-dark text-white">Learn More!</Link>
            <div className="col-md d-flex justify-content-end">
              <button
                className="btn bg-warning text-dark border border-0 mt-3"
                onClick={() => actions.agregarFavorito(nameVehicle)}><i className="fa fa-heart"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};