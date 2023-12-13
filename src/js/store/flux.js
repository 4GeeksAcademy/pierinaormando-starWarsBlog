const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			starships: [],
			favorites: []
		},
		actions: {
			// obtener los personjaes
			getAllCharacters: () => {
				fetch("https://www.swapi.tech/api/people/")
					.then((response) => response.json())
					.then(data => {
						setStore({ characters: data.results })
					})
					.catch((error) => console.log(error))
			},

			getAllPlanets: () => {
				fetch('https://www.swapi.tech/api/planets')
					.then((response) => response.json())
					.then(data => {
						setStore({ planets: data.results })
					})
					.catch((error) => console.log(error))
			},

			getAllStarships: () => {
				fetch('https://www.swapi.tech/api/starships')
					.then((response) => response.json())
					.then(data => {
						setStore({ starships: data.results })
					})
					.catch((error) => console.log(error))
			},

			getPlanetsDetails: () => {
				fetch(`https://www.swapi.tech/api/planets/${id}`).then(resp => resp.json())
					.then(data => {
						setPlanet(data)
					})

					.catch(error => {
						console.log(error);
					});

			}

			/* addFavorite: (item) => {
				const favorite = getStore().favorites.concat(item);
				setStore({ favorites: favorite });
			},

			deleteFavorite: (index) => {
				const favorite = getStore().favorites.filter((_c, i) => {
					return index !== i;
				});
				setStore({ favorites: favorite });
			} */
		}
	}
};

export default getState;
