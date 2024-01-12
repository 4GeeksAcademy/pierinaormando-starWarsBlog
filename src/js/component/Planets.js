import React, { useState, useEffect, useContext }  from "react";
import { Context } from "../store/appContext";
import starWars from "../../img/starWars.png";

export const Planets = () =>{
    const { store, actions } = useContext(Context);

    useEffect(() => {
        const fetchPlanets = async () => {
            try {
                const response = await fetch("https://www.swapi.tech/api/planets/");
            } catch (error) {
                console.error("Error fetching planets:", error);
            }
        };

        fetchPlanets();
    }, []);

    return (
        <div >
            <h1 className="p-1 m-1">
                Planets
            </h1>
            <fieldset className="row flex-row flex-nowrap overflow-auto mb-3" >

            {store.planets.map((planet, index) => (
                
                <div className="card  border-dark m-3 " style={{ width: '18rem' }} key={index}>
                    <img src={starWars} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{planet.name}</h5>
                        <p className="card-text">{`Population: ${planet.population}`}</p>
                        <p className="card-text">{`Climate: ${planet.climate}`}</p>

                        <button className="btn btn-dark" data-bs-toggle="modal" data-bs-target={`#exampleModalPlanet${index}`}>
                                Learn More ★
                            </button>

                        <button onClick={() => actions.toggleFavorite(planet)} className="btn justify-content-md-end">
                        {store.favorites.some(fav => fav.name === planet.name) ? "❤️" : "🤍"}
                        </button>
                    </div>

                     {/* MODAL */}
                     <div className="modal fade" id={`exampleModalPlanet${index}`} aria-labelledby={`exampleModalLabel${index}`} aria-hidden="false">
                            <div className="modal-dialog modal-lg border border-dark">
                                <div className="modal-content">
                                    <div className="modal-header row">
                                        <img src={starWars} className="card-img-top rounded-circle border border-dark" alt="..." style={{ width: '11rem' }} />

                                        <h1 className="modal-title text-center" id={`exampleModalLabel${index}`}>{planet.name}</h1>
                                    </div>
                                    <div className="modal-body">
                                        <p className="card-text">{`Diameter: ${planet.diameter}`}</p>
                                        <p className="card-text">{`Gravity: ${planet.gravity}`}</p>
                                        <p className="card-text">{`Created: ${planet.created}`}</p>
                                        <p className="card-text">{`Orbital_period: ${planet.orbital_period}`}</p>
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
    )
}