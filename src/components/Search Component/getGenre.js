import React, {useState} from "react";
import {connect} from "react-redux";
import "../../App.css";
import {fetchGenre} from "../../store/actions/genreAction";

const Genres = React.memo(({genre, fetchGenre}) => {
	const [page, setPage] = useState("Thriller");

	return(
		<div className="container">
			<div className="flex-c">
				{genre.genre.length > 0 &&
					genre.genre.map((image, index) => {
						const {title, image_url, type, synopsis, url} = image;
						return (
							<div key={index} className="card">
								<div className="card-body">
									<img
										alt={title}
										d-src={image_url}
										className="card-img-top"
										src={image_url}
									/>
								</div>
								<div className="card-footer">
									<p className="card-text text-center text-capitalize text-primary">
										{title}
									</p>
									<p className="card-text text-center">{type}</p>
									<p className="card-text text-center">{synopsis}</p>
									<a className="card-text">{url}</a>
								</div>
							</div>
						);
					})}
			</div>

{genre.fetching ? (
				<img
					className="loading"
					src="http://i.stack.imgur.com/SBv4T.gif"
					alt="Data Loading.... Please Wait!"
				/>
			) : (
				<h3> No Data </h3>
			)}
			</div>
		
	)
}


// wqdsacas



);

const mapsStateToProps = ({genre}) => {
	return {genre: genre};
};

export default connect(mapsStateToProps, {fetchGenre})(Genres);
