import {combineReducers} from "redux";
import {movieReducer} from "./movieReducer";
import {genreReducer} from "./genreReducer";

const reducers = combineReducers({
	movies: movieReducer,
	genre: genreReducer,
});

export default reducers;
