import React, {useContext, useEffect} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Favorites } from "./Favorites";
import starWarsLogo from "../../img/starWarsLogo.png";


export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light p-3 m-3"style={{ position: 'fixed',  top: '0', width: '100%', zIndex: '100' }}>
			<a href="#top"> 
				<span className="navbar-brand mb-0 h1"><img  style={{ width: '5rem' }}  src={starWarsLogo}/></span>
			</a>
			<div className="ml-auto m-3 p-3">
				<Favorites/>
			</div>
		</nav>
	);
};