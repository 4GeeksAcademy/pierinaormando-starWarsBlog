const getState = ({ getStore, setStore }) => {
	return {
		store: {

			favorites: [],
			characters: [],
			planets: [],
			vehicles: [],
			
		},
		actions: {

			getPlanets: () => {
				fetch('https://swapi.dev/api/planets')
					.then(res => res.json())
					.then(data => setStore({ planets: data.results }))
					.catch(err => console.error(err))
			},
			getVehicles: () => {
				fetch('https://swapi.dev/api/vehicles')
					.then(res => res.json())
					.then(data => setStore({ vehicles: data.results }))
					.catch(err => console.error(err))
			},

			getCharacters: () => {
				fetch('https://swapi.dev/api/people')
					.then(res => res.json())
					.then(data => setStore({ characters: data.results }))
					.catch(err => console.error(err))
			
			},


		addToFavorites: (item) => {
			let store = getStore();
			
			let newFavorites = [...store.favorites, item];
			setStore({ favorites: newFavorites });
		},

		removeFromFavorites: (item) => {
			let store = getStore();
			let newFavorites = store.favorites.filter(fav => fav !== item);
			setStore({ favorites: newFavorites });
		},
		toggleFavorite: (item) => {
			let store = getStore();
			let isFavorite = store.favorites.some(fav => fav === item);

			if (isFavorite) {
				let newFavorites = store.favorites.filter(fav => fav !== item);
				setStore({ favorites: newFavorites });
				console.log("eliminar favorito", newFavorites)
			} else {
				let newFavorites = [...store.favorites, item];
				setStore({ favorites: newFavorites });
				console.log("a favorito", newFavorites)
			}
		},

	}
};
};

export default getState;