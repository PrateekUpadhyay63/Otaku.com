import React, {useState} from "react";
import {connect} from "react-redux";
import "../../App.css";
import {fetchMovies} from "../../store/actions/movieAction";

const Movie = React.memo(({movies, fetchMovies}) => {
	const [page, setPage] = useState(1);
	const loadMore = () => {
		// console.log("load more");
		setPage(page + 1);
		fetchMovies({search: movies.search, page: page + 1});
	};

	return (
		<div className="container">
			<div className="flex-c">
				{movies.movies.length > 0 &&
					movies.movies.map((image, index) => {
						const {title, image_url, type, synopsis, url} = image;
						return (
							<div key={index} className="card">
								<div className="card-body">
									<img
										alt={title}
										data-src={image_url}
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
			{movies.fetching ? (
				<img
					className="loading"
					src="http://i.stack.imgur.com/SBv4T.gif"
					alt="Data Loading.... Please Wait!"
				/>
			) : movies.movies.length > 0 ? (
				<button className="Bun" onClick={() => loadMore()}>
					Load More
				</button>
			) : (
				<h3> </h3>
			)}
		</div>
	);
});

const mapsStateToProps = ({movies}) => {
	return {movies: movies};
};

export default connect(mapsStateToProps, {fetchMovies})(Movie);
