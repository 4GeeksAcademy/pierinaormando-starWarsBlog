import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Planets = ({ namePlanet, diameterPlanet, climatePlanet, id }) => {
  const { actions } = useContext(Context)
  return (
    <div className="container">
      <div className="col m-4 d-flex">
        <div className="card h-100" style={{ width: "18rem" }}>
          <img
            src={"https://starwars-visualguide.com/assets/img/planets/" + (id) + ".jpg"}
            onError={(e) => {
              e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg';
            }}
            className="card-img-top" style={{ height: "393.25px" }}
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title"> {namePlanet} </h5>
            <p className="card-text"> Diameter: {diameterPlanet} </p>
            <p className="card-text"> Climate: {climatePlanet} </p>
            <Link to={"/viewPlanets/" + id} className="btn bg-dark text-white">Learn More!</Link>
            <div className="col-md d-flex justify-content-end">
              <button className="btn bg-warning text-dark border border-0 mt-3" onClick={() => actions.agregarFavorito(namePlanet)}>
                <i className="fa fa-heart"> </i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};