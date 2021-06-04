import React, {useContext, useState} from "react";
import {Alert} from "react-bootstrap";
import Home from "./Home";
// import FormPage from "./Signup";
import "../App.css";
import {propTypes} from "react-bootstrap/esm/Image";
import {ApiContext} from "./ApiContext";
import ListApp from "./Main";
import { Redirect } from "react-router-dom";

const LoginPage = ({valid, setValid, localStore, setLocalStore}) => {
	const [emaillog, setEmaillog] = useState(" ");
	const [passwordlog, setPasswordlog] = useState(" ");

	const [flag, setFlag] = useState(false);

	const [home, setHome] = useState(true);
	const [FormPage, setSignup] = useState(true);
	const {truevalue, settruevalue} = useContext(ApiContext);
	console.log("Hello how are you from login valid", truevalue);
	//   function handleClick() {
	//     setSignup(!FormPage);
	//   }

	//   const fillStorage = () => {
	//     setLocalStore(false);
	//     console.log("LOCALSTORE ", localStore);
	//     // setValid(!valid);
	//     // localStorage.clear();
	//   };

	function handleLogin(e) {
		var obj;
		e.preventDefault();
		// var signdetails=''
		if(localStorage.length>0)
		{
			 var text = localStorage.getItem("data");
		// let name = localStorage.getItem("name").replace(/"/g, "");
		// let phone = localStorage.getItem("phone").replace(/"/g, "");
		// let pass = localStorage.getItem("Password").replace(/"/g, "");
			obj = JSON.parse(text);}
			// console.log("obj ", obj);
		else{
			alert('please signup first')
		  }
		// .replace(/"/g,"") is used to remove the double quotes for the string

		if(emaillog && passwordlog && text) if(passwordlog === obj.password && emaillog === obj.email) {
			setHome(!home);
			setFlag(false);
			settruevalue(true);
			//app.js
			console.log("jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj");

			console.log("LOCALSTORE ", localStore);

			setLocalStore && setLocalStore(false);
			//   setValid(true);
		}
		else{
			alert('invalid credentials')
		}
	}
	
	// function infoClick() {
	// 		setInfo(!info);
	// 	}

	return (
		<div>
			{console.log(truevalue, "hgrfg")}
			{/* <div className="container" onClick={infoClick}>
					<h4 className="btn btn-dark btn-lg btn-block">Company Info</h4>
				</div> */}
			{console.log("login props", setLocalStore)}
			
				<>
					<div className="container ">
						<form className="login " onSubmit={handleLogin}>
							<h3>Login</h3>
							<div className="group">
								<label className="Label">Email</label>
								<br />
								<input
									type="email"
									className="input"
									placeholder="Enter email"
									onChange={event => setEmaillog(event.target.value)}
								/>
							</div>

							<div className="group">
								<label className="Label">Password</label>
								<br />
								<input
									type="password"
									className="input"
									placeholder="Enter password"
									onChange={event => setPasswordlog(event.target.value)}
								/>
							</div>

							<button type="submit" className="Butn">
								Login
							</button>
						
						</form>
					</div>
				</>
				{console.log(ApiContext,"context")}
			{truevalue? <Redirect to= "/" /> :null }
		</div>
	)
};

export default LoginPage;
