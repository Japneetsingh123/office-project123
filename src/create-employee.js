// // CreateStudent Component for add new student 

// // Import Modules 
// import React, { useState, useEffect } from "react"; 
// import axios from 'axios'; 
// import EmployeeForm from "./EmployeeForm"; 

// // CreateEmployee Component 
// const CreateEmployee = () => { 
// const [formValues, setFormValues] = 
// 	useState({ name: '', email: '', phoneno: '' }) 
// // onSubmit handler 
// const onSubmit = studentObject => { 
// 	axios.post( 
// 'http://localhost:3000/employees/create-employee', 
// 	studentObject)  
// 	.then(res => { 
// 		if (res.status === 200) 
// 		alert('Employee successfully created') 
// 		else
// 		Promise.reject() 
// 	}) 
// 	.catch(err => alert('Something went wrong')) 
// } 
	
// // Return Empployee form 
// return( 
// 	<EmployeeForm initialValues={formValues} 
// 	onSubmit={onSubmit} 
// 	enableReinitialize> 
// 	Create Employee 
// 	</EmployeeForm> 
// ) 
// } 



import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import array from "./array";
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";

function Create() {
	
	const [name, setname] = useState("");
	const [age, setage] = useState("");

	
	let history = useNavigate();

	
	const handelSubmit = (e) => {
		e.preventDefault(); 

		const ids = uuid(); 
		let uni = ids.slice(0, 8); 

		
		let a = name,
			b = age;
		if (name === "" || age === "") {
			alert("invalid input");
			return;
		}
		array.push({ id: uni, Name: a, Age: b });

		
		history("/");
	};

	return (
		<div>
			<Form
				className="d-grid gap-2"
				style={{ margin: "5rem" }}
			>
				
				<Form.Group
					className="mb-3"
					controlId="formBasicName"
				>
					<Form.Control
						onChange={(e) =>
							setname(e.target.value)
						}
						type="text"
						placeholder="Enter Name"
						required
					/>
				</Form.Group>

				
				<Form.Group
					className="mb-3"
					controlId="formBasicAge"
				>
					<Form.Control
						onChange={(e) =>
							setage(e.target.value)
						}
						type="number"
						placeholder="Age"
						required
					/>
				</Form.Group>

				
				<Button
					onClick={(e) => handelSubmit(e)}
					variant="primary"
					type="submit"
				>
					Submit
				</Button>

				
				<Link className="d-grid gap-2" to="/home">
					<Button variant="info" size="lg">
						Home
					</Button>
				</Link>
			</Form>
		</div>
	);
}

export default Create;
