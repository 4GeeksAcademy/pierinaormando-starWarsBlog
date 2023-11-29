const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
				character: [],
				charactersList: [],
				planet: [],
				planetsList: [],
				starship: [],
				starshipsList: [],
				favorites: []
		},
		actions: {
			// obtener los personjaes
			getAllCharacters: () => {
				fetch("https://www.swapi.tech/api/people/",{
					method: "GET",
				})
				.then((response) => response.json())
				.then(data => {
					setStore({ ...getStore, charactersList: data.results })
				})
				.catch((error) => console.log(error))
			},
		}
	};
};

export default getState;
