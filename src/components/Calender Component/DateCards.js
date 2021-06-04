import React from "react";
import "../../App.css";

const DateCards = props => {
	console.log("porps", props);
	return (
		<div className="movie-container">
			<div className="card">
				<div className="card-body">
					{
						<img
							alt={props.d.title}
							d-src={props.d.image_url}
							className="card-img-top"
							src={props.d.image_url}
						/>
					}
				</div>
				<div className="cars-body">
					<p className="card-text text-center text-capitalize text-primary">
						{props.d.title}
					</p>
					{/* <p className="car card-text text-center">{props.d.url}</p> */}
					<p className="car card-text text-center">{props.d.synopsis}</p>
					<p className="car card-text text-center">{props.d.type}</p>
				</div>
			</div>
		</div>
	);
};

export default DateCards;
