// // EditEmployee Component for update student data 

// // Import Modules 
// import React, { useState, useEffect } from "react"; 
// import axios from "axios"; 
// import EmployeeForm from "./EmployeeForm"; 

// // EditEmployee Component 
// const EditEmployee = (props) => { 
// const [formValues, setFormValues] = useState({ 
// 	name: "", 
// 	email: "", 
// 	phoneno: "", 
// }); 
	
// //onSubmit handler 
// const onSubmit = (studentObject) => { 
// 	axios 
// 	.put( 
// 		"http://localhost:3000/students/update-employee/" + 
// 		props.match.params.id, 
// 		studentObject 
// 	) 
// 	.then((res) => { 
// 		if (res.status === 200) { 
// 		alert("Student successfully updated"); 
// 		props.history.push("/student-list"); 
// 		} else Promise.reject(); 
// 	}) 
// 	.catch((err) => alert("Something went wrong")); 
// }; 

// // Load data from server and reinitialize Employee form 
// useEffect(() => { 
// 	axios 
// 	.get( 
// 		"http://localhost:3000/Employee/update-employee/"
// 		+ props.match.params.id 
// 	) 
// 	.then((res) => { 
// 		const { name, email, phoneno } = res.data; 
// 		setFormValues({ name, email, phoneno }); 
// 	}) 
// 	.catch((err) => console.log(err)); 
// }, []); 

// // Return Employee form 
// return ( 
// 	<EmployeeForm 
// 	initialValues={formValues} 
// 	onSubmit={onSubmit} 
// 	enableReinitialize 
// 	> 
// 	Update Employee
// 	</EmployeeForm> 
// ); 
// }; 

// // Export EditEmployee Component 
// export default EditEmployee;


import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import array from "./array";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Edit() {
	// Here usestate has been used in order
	// to set and get values from the jsx
	const [Name, setname] = useState("");
	const [age, setage] = useState("");
	const [id, setid] = useState("");

	// Used for navigation with logic in javascript
	let history = useNavigate();

	// Getting an index of an entry with an id
	let index = array
		.map(function (e) {
			return e.id;
		})
		.indexOf(id);

	// Function for handling the edit and
	// pushing changes of editing/updating
	const handelSubmit = (e) => {
		// Preventing from reload
		e.preventDefault();
		if (Name === "" || age === "") {
			alert("invalid input");
			return;
		}

		// Getting an index of an array
		let a = array[index];

		// Putting the value from the input
		// textfield and replacing it from
		// existing for updation
		a.Name = Name;
		a.Age = age;
	

		// Redirecting to main page
		history("/home");
	};

	// Useeffect take care that page will
	// be rendered only once
	useEffect(() => {
		setname(localStorage.getItem("Name"));
		setage(localStorage.getItem("Age"));
		setid(localStorage.getItem("id"));
	}, []);

	return (
		<div>
			<Form
				className="d-grid gap-2"
				style={{ margin: "5rem" }}
			>
				{/* setting a name from the 
					input textfiled */}
				<Form.Group
					className="mb-3"
					controlId="formBasicEmail"
				>
					<Form.Control
						value={Name}
						onChange={(e) =>
							setname(e.target.value)
						}
						type="text"
						placeholder="Enter Name"
					/>
				</Form.Group>

				{/* setting a age from the input textfiled */}
				<Form.Group
					className="mb-3"
					controlId="formBasicPassword"
				>
					<Form.Control
						value={age}
						onChange={(e) =>
							setage(e.target.value)
						}
						type="number"
						placeholder="Age"
					/>
				</Form.Group>

				{/* Hadinling an onclick event 
					running an edit logic */}
				<Button
					onClick={(e) => handelSubmit(e)}
					variant="primary"
					type="submit"
					size="lg"
				>
					Update
				</Button>

				{/* Redirecting to main page after editing */}
				<Link className="d-grid gap-2" to="/">
					<Button variant="warning" size="lg">
						Home
					</Button>
				</Link>
			</Form>
		</div>
	);
}

export default Edit;
