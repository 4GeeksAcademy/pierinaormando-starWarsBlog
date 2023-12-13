import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { CharacterCard } from "../component/CharacterCard";
import { PlanetCard } from "../component/PlanetCard"
import { StarshipCard } from "../component/StarshipCard"

export const Home = () => {
	const { store, actions } = useContext(Context)
	return (
		<div className="text-center mt-5 container">
			<div >
				<h2 className='text-danger'>Characters</h2>
				<div className="d-flex">
					{store.characters && store.characters.map((character, index) => {
						return <CharacterCard key={character.uid} character={character} />

					})}
				</div>
			</div>
			<div >
				<h2 className='text-danger'>Planets</h2>
				<div className="d-flex lista">
					{store.planets && store.planets.map((planets, index) => {
						return <PlanetCard key={planets.uid} planets={planets} />

					})}
				</div>
			</div>
			<div>
				<h3 className="text-danger">Starships</h3>
				<div className="d-flex lista">
					{console.log(store.starships)}
					{store.starships && store.starships.map((starships, index) => {
						return <StarshipCard key={starships.uid} starships={starships} />
					})}
				</div>
			</div>
		</div>
	);
};

