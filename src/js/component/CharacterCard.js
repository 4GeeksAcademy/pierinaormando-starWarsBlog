import React, { useContext } from 'react'
import { Context } from '../store/appContext'
import { Link } from 'react-router-dom'

export const CharacterCard = ({ nameCharacter, genderCharacter, colorEyesCharacter, id }) => {
  const { actions } = useContext(Context)

  return (
    <div className="container">
      <div className="col m-4 d-flex">
        <div className="card h-100" style={{ width: "18rem" }}>
          <img
            src={"https://starwars-visualguide.com/assets/img/characters/" + (id) + ".jpg"}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{nameCharacter} </h5>
            <p className="card-title"> Gender: {genderCharacter} </p>
            <p className="card-title"> Eye-Color: {colorEyesCharacter}</p>
            <Link to={"/viewCharacters/" + id} className="btn bg-dark text-white">Learn More!</Link>
            <div className="col-md d-flex justify-content-end">
              <button className="btn bg-warning text-dark border border-0 mt-3" onClick={() => actions.agregarFavorito(nombrePersonaje)}>
                <i className="fa fa-heart"> </i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};