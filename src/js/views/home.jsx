import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import "../../styles/home.css";
import { CharacterCard } from "../component/CharacterCard.jsx";
import { PlanetCard } from "../component/PlanetCard.jsx"
import { VehicleCard } from "../component/VehicleCard.jsx"

export const Home = () => {
	const { store } = useContext(Context)
	return (
		<div className="container" >

			<div className="">
				<h1 className=" rounded-3 text-white text-center bg-black border-white p-2 border border-2"><strong>CHARACTERS</strong></h1>
				<div className="d-flex">
					<div className="d-flex flex-row flex-nowrap overflow-auto">
						{store.characters.map((cadaPersonaje, index) => (
							<CharacterCard
								key={index}
								id={index + 1}
								nombrePersonaje={cadaPersonaje.name}
								generoPersonaje={cadaPersonaje.gender}
								ColorOjosPersonaje={cadaPersonaje.eye_color}
							/>
						))}
					</div>
				</div>
			</div>
			{/* aca se trae la card de Vehiculos */}
			<div className="">
				<h1 className=" rounded-3 text-white text-center bg-black border-white p-2 border border-2"><strong>VEHICLES</strong></h1>
				<div className="d-flex">
					<div className="d-flex flex-row flex-nowrap overflow-auto">
						{store.vehicles.map((cadaVehiculo, index) => (
							<VehicleCard
								key={index}
								id={index + 1}
								nombreVehiculo={cadaVehiculo.name}
								modeloVehiculo={cadaVehiculo.model}
							/>
						))}
					</div>
				</div>
			</div>
			{/* aca se trae la card de Planetas */}
			<div className="">
				<h1 className=" rounded-3 text-white text-center bg-black border-white p-2 border border-2"><strong>PLANETS</strong></h1>
				<div className="d-flex">
					<div className="d-flex flex-row flex-nowrap overflow-auto">
						{store.planets.map((cadaPlaneta, index) => (
							<PlanetCard
								key={index}
								id={index + 1}
								nombrePlaneta={cadaPlaneta.name}
								diametroPlaneta={cadaPlaneta.diameter}
								climaPlaneta={cadaPlaneta.climate}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};