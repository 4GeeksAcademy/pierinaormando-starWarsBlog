import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Favorites = () => {
    const { store, actions } = useContext(Context);
    const { favorites } = store;

    return (
        <div className="dropdown ml-auto">
        
      <div className="dropdown">
            <button
                className="btn btn-dark dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                Favorites ({favorites.length})
            </button>
            <ul className="dropdown-menu">
            {store.favorites.map((item, i) => (
							<li key={i} className="px-1 dropdown-item container-favoritos-dropdown">

								<div className="nombre-favoritos">
									<strong>{item.name}</strong>
								

								<div className="eliminar-favoritos"><button  onClick={() => actions.toggleFavorite(item)}>💔</button></div>
                                </div>

							</li>
						))}
            </ul>
            </div>
        </div>
    );
};