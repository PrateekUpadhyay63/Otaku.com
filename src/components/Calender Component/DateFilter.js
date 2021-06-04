import React, {useEffect, useState, useContext} from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Movie from "../Search Component/Movie";
import DateCards from "./DateCards";
import {ApiContext} from "../ApiContext";

const DateFilter = (value, setValid) => {
	var result = [];
	const [output, setOutput] = useState();

	const [demostate, setDemo] = useState("");
	const {truevalue, settruevalue} = useContext(ApiContext);
	const [startDate, setStartDate] = useState(new Date(2020, 8, 1));
	const [startDate3, setStartDate3] = useState(new Date(2016, 8, 1));
	const [startDate4, setStartDate4] = useState();
	const [startDate2, setStartDate2] = useState();
	const [DefDate, setDefDate] = useState();
	const [data, setData] = useState();
	const [dat, setDat] = useState([]);
	useEffect(() => {
		axios
			.get("https://api.jikan.moe/v3/search/anime?q=page=11")
			.then(response => setData(response.data.results))
			.catch(error => console.log(error));
	}, [startDate]);

	useEffect(() => {
		var result = [];
		dat &&
			dat.map(
				date =>
					data &&
					data.map(data =>
						data.start_date.slice(0, 10) === date.toJSON().slice(0, 10)
							? result.push(data)
							: null
					)
			);

		setOutput(result);
	}, [dat]);
	const HandleDate = date => {
		let date2 = date.toJSON();
		setStartDate(date);
		setStartDate2(date2);
		setDemo(date);
	};

	const HandleDate2 = date => {
		let date2 = date.toJSON();
		setStartDate3(date);
		setStartDate4(date2);
		setDemo(date);
	};
	var getDaysArray = function (start, end) {
		for (
			var arr = [], dt = new Date(start);
			dt <= end;
			dt.setDate(dt.getDate() + 1)
		) {
			arr.push(new Date(dt));
		}
		return arr;
	};
	useEffect(() => {
		// console.log("startdate4", typeof startDate4);
		// console.log("startdate2", typeof startDate2);
		var daylist =
			startDate2 &&
			startDate4 &&
			getDaysArray(
				new Date(startDate4.slice(0, 10)),
				new Date(startDate2.slice(0, 10))
			);
		setDat(daylist);
	}, [startDate, startDate3]);

	return (
		<div>
			{console.log("truevalue")}
			{truevalue ? (
				<div className="container c1">
					<div className="calander-div">
						<DatePicker
							className="calander-picker"
							selected={startDate3}
							// selected={new Date(2016,0,7)}
							// selected={[new Date(2017, 0, 1), new Date(2017, 7, 1)]}
							maxDate={new Date()}
							format="dd-MM-y"
							onChange={date => HandleDate2(date)}
						/>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<DatePicker
							className="calander-picker"
							selected={startDate}
							maxDate={new Date()}
							format="dd-MM-y"
							onChange={date => HandleDate(date)}
						/>
						{dat && console.log("dat", dat)}
						{result.length > 0 ? <h1>No Data</h1> : <h1>Data</h1>}
						{console.log("output", output)}
						<div className="flex-c">
							{output && output.map(d => <DateCards d={d} />)}
						</div>
					</div>
				</div>
			) : (
				<h1>please login first</h1>
			)}
		</div>
	);
};

export default DateFilter;
