import React from "react";
import "./../App.css";

const Card = props => {
	return (
		<div className="movie-container">
			<div className="card">
				<div className="card-body">
					{
						<img
							alt={props.data.title}
							data-src={props.data.image_url}
							className="card-img-top"
							src={props.data.image_url}
						/>
					}
				</div>
				<div className="cars-body">
					<p className="card-text text-center text-capitalize text-primary">
						{props.data.title}
					</p>

					<p className="car card-text text-center">{props.data.synopsis}</p>
				</div>
			</div>
		</div>
	);
};

export default Card;
