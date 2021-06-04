import React, {useState} from "react";
import {Form, Alert} from "react-bootstrap";
import LoginPage from "./login";
import "../App.css";

function FormPage() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [phone, setPhone] = useState("");
	// const [profession, setProfession] = useState("");
	var obj = {
		name,
		setName,
		email,
		setEmail,
		password,
		setPassword,
		phone,
		setPhone,
	};
	const [flag, setFlag] = useState(false);
	const [login, setLogin] = useState(true);
	const [info, setInfo] = useState(true);

	// on form submit...
	function handleFormSubmit(e) {
		e.preventDefault();

		if (!name || !email || !password || !phone) {
			setFlag(true);
		} else {
			setFlag(false);
			localStorage.setItem("data", JSON.stringify(obj));
			// localStorage.setItem("name", JSON.stringify(name));
			// localStorage.setItem("phone", JSON.stringify(phone));
			// localStorage.setItem("Email", JSON.stringify(email));
			// localStorage.setItem("Password", JSON.stringify(password));
			console.log("Saved in Local Storage");

			setLogin(!login);
		}
	}

	// Directly to the login page
	function handleClick() {
		setLogin(!login);
	}

	(function () {
		window.addEventListener(
			"click",
			function () {
				var inputs = document.getElementsByClassName("form-control");
				var validation = Array.prototype.filter.call(inputs, function (input) {
					input.addEventListener(
						"blur",
						function (event) {
							input.classList.remove("is-invalid");
							input.classList.remove("is-valid");

							if (input.checkValidity() === false) {
								input.classList.add("is-invalid");
							} else {
								input.classList.add("is-valid");
							}
						},
						false
					);
				});
			},
			false
		);
	})();

	// Company Info
	// function infoClick() {
	// 	setInfo(!info);
	// }

	return (
		<div>
			{info ? (
				<div className="">
					{login ? (
						<div>
							<div className="formm logg">
								<form
									className="needs-validation signUp container "
									onSubmit={handleFormSubmit}
								>
									<h3>Register</h3>

									<div className="group">
										<label className="Label">Name :</label>

										<input
											type="text"
											className="input form-control"
											placeholder="Enter Full Name"
											name="name"
											required
											onChange={event => setName(event.target.value)}
										/>
										<div className="valid-feedback">Looks good!</div>
										<div className="invalid-feedback">Doesn't look good!</div>
									</div>

									<div className="group">
										<label className="Label">Phone No :</label>

										<input
											type="text"
											className="input form-control"
											placeholder="Enter 10 digit phone no"
											pattern="[0-9]{10}"
											required
											onChange={event => setPhone(event.target.value)}
										/>
										<div className="valid-feedback">Looks good!</div>
										<div className="invalid-feedback">Doesn't look good!</div>
									</div>

									<div className="group">
										<label className="Label">Email :</label>
										<span> </span>

										<input
											type="email"
											className="input  form-control"
											placeholder="Enter E-mail"
											required
											onChange={event => setEmail(event.target.value)}
										/>
										<div className="valid-feedback">Looks good!</div>
										<div className="invalid-feedback">Doesn't look good!</div>
									</div>

									<div className="group">
										<label className="Label">Password :</label>
										<span> </span>

										<input
											type="password"
											className="input form-control"
											placeholder="Enter password (Should be of 8 characters and contains letter(caps and small),number and special character)"
											pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
											required
											onChange={event => setPassword(event.target.value)}
										/>
										<div className="valid-feedback">Looks good!</div>
										<div className="invalid-feedback">Doesn't look good!</div>
									</div>

									<button type="submit" className="Butn">
										Register
									</button>
									<p className="forgot-password">
										Already registered{" "}
										<a href="#" className="logLink" onClick={handleClick}>
											log in?
										</a>
									</p>
									{flag && (
										<Alert color="primary" variant="danger">
											Please Fill All
										</Alert>
									)}
								</form>
							</div>
						</div>
					) : (
						<LoginPage />
					)}
				</div>
			) : (
				<div>
					<p>
						<strong>Phone:</strong> XXXXXXXXXX09
					</p>
					<p>
						<strong>Email:</strong> XXXXXXXX@gmail.com
					</p>
				</div>
			)}
		</div>
	);
}

export default FormPage;
