import React, {useState} from "react";
import {Alert} from "react-bootstrap";
import "../App.css";

function Home() {
	var obj1;
	function details() {
		// e.preventDefault();
		obj1 = JSON.parse(localStorage.getItem("data"));
		console.log("obj1", obj1);
	}
	return (
		<div>
			<div>
				{/* <button onClick={details()}></button> */}
				{details()}
				<div className="grou container">
					<h3>USER DATA</h3>
					<label className="Label">{obj1.name}</label><br/>
					<label className="Label">{obj1.phone}</label><br/>
					<label className="Label">{obj1.email}</label>

					<br />
				</div>
			</div>
		</div>
	);
}

export default Home;
