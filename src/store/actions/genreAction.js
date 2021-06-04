import axios from "axios";

export const fetchGenre = d => async dispatch => {
	// console.log("gen", genre);
	dispatch({type: "FETCHING_GENRE", fetching: true});
	await axios(`https://api.jikan.moe/v3/search/anime?q=genre=${d}`)
		.then(response => {
			console.log("ress", response.data.results);
			const results = response.data.results;
			dispatch({type: "MOVIE_GENRE", results});
			dispatch({type: "SEARCH_GENRE", d});
			dispatch({type: "FETCH_MOVIE", fetching: false});
		})
		.catch(e => {
			// handle error
			alert(e.response.data.message);
			dispatch({type: "FETCHING_MOVIES", fetching: false});
			return e;
		});
};
export const resetGenre = () => dispatch => {
	dispatch({type: "RESET_SEARCH", payload: []});
};
