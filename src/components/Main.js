import React, {Component} from "react";
import Card from "./Card";
import "./../App.css";

class ListApp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [],
			isLoaded: false,
		};
	}
	componentDidMount = () => {
		fetch("https://api.jikan.moe/v3/search/anime?q=sort=ascending")
			.then(resp => resp.json())
			.then(resp => {
				this.setState({
					isLoaded: true,
					items: resp.results,
				});
			});
	};

	render() {
		var {isLoaded, items} = this.state;
		return (
			<div className="container">
				<div className="flex-c">
					{items.map(data => (
						<Card data={data} />
					))}
				</div>
			</div>
		);
	}
}

export default ListApp;
