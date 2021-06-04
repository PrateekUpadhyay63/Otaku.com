import React, {useRef, useEffect, useContext} from "react";
import {connect} from "react-redux";
import "../../App.css";
import {ApiContext} from "../ApiContext";
import {fetchGenre, resetGenre} from "../../store/actions/genreAction";
import Genre from "../Search Component/getGenre";
const ShowGenre = React.memo(({fetchGenre, resetGenre, value, setvalue}) => {
	const inputRef = useRef();
	const [search, setSearch] = React.useState("");
	const {truevalue, settruevalue} = useContext(ApiContext);
	// useEffect(() => {
	// 	inputRef.current.focus();
	// }, []);

	const handleSearchInput = e => {
		e.preventDefault();
		setSearch(e.target.value);
		console.log("search clicked", fetchGenre);
		fetchGenre(search);
		resetGenre();
	};
	return (
		<div className="container-fluid">
			{console.log("truevalue", truevalue)}
			{truevalue ? (
				<div>
					<form className="form-inline mt-2 mb-2" id="form">
						<label for="cars">Choose a Genre:</label>
						<select
							className="input"
							value={search}
							// ref={inputRef}
							onChange={e => handleSearchInput(e)}
							placeholder="Search"
						>
							<option value="Thriller">Thriller</option>
							<option value="Supernatural">Supernatural</option>
							<option value="Police">Police</option>
							<option value="Shounen">Shounen</option>
							<option value="Sports">Sports</option>
							<option value="Samurai">Samurai</option>
							<option value="Action">Action</option>
							<option value="Magic">Magic</option>
							<option value="Martial Arts">Martial Arts</option>
							<option value="Music">Music</option>
							<option value="Sci Fi">Sci Fi</option>
							<option value="Josei">Josei</option>
							<option value="Mecha">Mecha</option>
							<option value="Yuri">Yuri</option>
							<option value="Horror">Horror</option>
						</select>
					</form>
					<Genre />
				</div>
			) : (
				<h1>please login first</h1>
			)}
		</div>
	);
});

export default connect(null, {fetchGenre, resetGenre})(ShowGenre);
