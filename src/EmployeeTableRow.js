import React from "react"; 
import { Button } from "react-bootstrap"; 
import { Link } from "react-router-dom"; 
import axios from "axios"; 

const EmployeeTableRow = (props) => { 
const { _id, name, email, phoneno } = props.obj; 

const deleteEmployee = () => { 
	axios 
	.delete( 
"http://localhost:3000" + _id) 
	.then((res) => { 
		if (res.status === 200) { 
		alert("Employee successfully deleted"); 
		window.location.reload(); 
		} else Promise.reject(); 
	}) 
	.catch((err) => alert("Something went wrong")); 
}; 

return ( 
	<tr> 
	<td>{name}</td> 
	<td>{email}</td> 
	<td>{phoneno}</td> 
	<td> 
		<Link className="edit-link"
		to={"/edit-employee/" + _id}> 
		Edit 
		</Link> 
		<Button onClick={deleteEmployee} 
		size="sm" variant="danger"> 
		Delete 
		</Button> 
	</td> 
	</tr> 
); 
}; 

export default EmployeeTableRow;
