import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import starWars from "../../img/starWars.png";

export const Vehicles = () => {

    const { store, actions } = useContext(Context);

    useEffect(() => {
        const fetchVehicles = async () => {
            try {
                const response = await fetch("https://www.swapi.tech/api/vehicles/");
            } catch (error) {
                console.error("Error fetching vehicles:", error);
            }
        };

        fetchVehicles();
    }, []);

   
    return (
        <div >
            <h1 className="p-1 m-1">Vehicles</h1>

            <fieldset className="row flex-row flex-nowrap overflow-auto mb-3" >

                {store.vehicles.map((vehicles, index) => (

                    <div className="card  border-dark m-3" style={{ width: '18rem' }} key={index}>
                        <img src={starWars} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{vehicles.name}</h5>
                            <p className="card-text">{`Height: ${vehicles.cargo_capacity}`}</p>
                            <p className="card-text">{`Cost in credits: ${vehicles.cost_in_credits}`}</p>

                            <button className="btn btn-dark" data-bs-toggle="modal" data-bs-target={`#exampleModalVehicles${index}`}>
                                Learn More ★
                            </button>

                            <button onClick={() => actions.toggleFavorite(vehicles)} className="btn justify-content-md-end p-2 m-2">
                                {store.favorites.some(fav => fav.name === vehicles.name) ? "❤️" : "🤍"}
                            </button>
                        </div>

                        {/* MODAL */}
                        <div className="modal fade" id={`exampleModalVehicles${index}`} aria-labelledby={`exampleModalLabel${index}`} aria-hidden="false">

                            <div className="modal-dialog modal-lg border border-dark">
                                <div className="modal-content">
                                    <div className="modal-header row">
                                        <img src={starWars} className="card-img-top rounded-circle border border-dark" alt="..." style={{ width: '11rem' }} />

                                        <h1 className="modal-title text-center" id={`exampleModalLabel${index}`}>{vehicles.name}</h1>
                                    </div>
                                    <div className="modal-body">

                                        <p className="card-text">{`Consumables: ${vehicles.consumables}`}</p>
                                        <p className="card-text">{`Created: ${vehicles.created}`}</p>
                                        <p className="card-text">{`Crew: ${vehicles.crew}`}</p>
                                        <p className="card-text">{`Length: ${vehicles.length}`}</p>

                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-dark" data-bs-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </fieldset>
        </div>
    );
};