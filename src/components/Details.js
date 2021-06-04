import React from "react";

function show() {
	function getit() {
		var object_fetchData = localStorage.getItem("obj1");
		var storedData = JSON.parse(object_fetchData);
		//storedData=JSON.parse(localStorage.getItem('myJSON'));
		document.getElementById("name_w").innerHTML = storedData.name;

		document.getElementById("email_w").innerHTML = storedData.emai;

		document.getElementById("Number_w").innerHTML = storedData.Number;

		document.getElementById("gender_w").innerHTML = storedData.gender;

		document.getElementById("username_w").innerHTML = storedData.username;
	}
	return (
		<div>
			<h1>Home page</h1>

			<table class="table">
				<thead>
					<tr>
						<th scope="col"></th>
						<th scope="col"></th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th scope="row">Name</th>
						<td id="name_w"></td>
					</tr>
					<tr>
						<th scope="row">Email</th>
						<td id="email_w"></td>
					</tr>
					<tr>
						<th scope="row">Number</th>
						<td colspan="2" id="Number_w"></td>
					</tr>
					<tr>
						<th scope="row">Gender</th>
						<td colspan="2" id="gender_w"></td>
					</tr>
					<tr>
						<th scope="row">username</th>
						<td colspan="2" id="username_w"></td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

