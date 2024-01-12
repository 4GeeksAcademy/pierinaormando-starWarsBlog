import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import starWars from "../../img/starWars.png";

export const Characters = () => {

    const { store, actions } = useContext(Context);

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const response = await fetch("https://www.swapi.tech/api/people/");
            } catch (error) {
                console.error("Error fetching characters:", error);
            }
        };

        fetchCharacters();
    }, []);

   
    return (
        <div >
            <h1 className="p-1 "style={{ marginTop: '150px' }}>Characters</h1>
            <fieldset className="row flex-row flex-nowrap overflow-auto mb-3" >

                {store.characters.map((characters, index) => (

                    <div className="card  border-dark m-3" style={{ width: '18rem' }} key={index}>
                        <img src={starWars} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{characters.name}</h5>
                            <p className="card-text">{`Height: ${characters.height}`}</p>
                            <p className="card-text">{`Birth year: ${characters.birth_year}`}</p>

                            <button className="btn btn-dark" data-bs-toggle="modal" data-bs-target={`#exampleModalChar${index}`}>
                                Learn More ★
                            </button>

                            <button onClick={() => actions.toggleFavorite(characters)} className="btn justify-content-md-end p-2 m-2">
                                {store.favorites.some(fav => fav.name === characters.name) ? "❤️" : "🤍"}
                            </button>
                        </div>

                        {/* MODAL */}
                        <div className="modal fade" id={`exampleModalChar${index}`} aria-labelledby={`exampleModalLabel${index}`} aria-hidden="false">

                            <div className="modal-dialog modal-lg border border-dark">
                                <div className="modal-content">
                                    <div className="modal-header row">
                                        <img src={starWars} className="card-img-top rounded-circle border border-dark" alt="..." style={{ width: '11rem' }} />

                                        <h1 className="modal-title text-center" id={`exampleModalLabel${index}`}>{characters.name}</h1>
                                    </div>
                                    <div className="modal-body">

                                        <p className="card-text">{`Gender: ${characters.gender}`}</p>
                                        <p className="card-text">{`Hair Color: ${characters.hair_color}`}</p>
                                        <p className="card-text">{`Height: ${characters.height}`}</p>
                                        <p className="card-text">{`Created: ${characters.created}`}</p>

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