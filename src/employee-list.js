import React, { useState, useEffect } from "react"; 
import axios from "axios"; 
import { Table } from "react-bootstrap"; 
import EmployeeTableRow from "./EmployeeTableRow"; 

const EmployeeList = () => { 
const [students, setStudents] = useState([]); 

useEffect(() => { 
	axios 
	.get("http://localhost:3000") 
	.then(({ data }) => { 
		setStudents(data); 
	}) 
	.catch((error) => { 
		console.log(error); 
	}); 
}, []); 

const DataTable = () => { 
	return students.map((res, i) => { 
	return <EmployeeTableRow obj={res} key={i} />; 
	}); 
}; 

return ( 
	<div className="table-wrapper"> 
	<Table striped bordered hover> 
		<thead> 
		<tr> 
			<th>Name</th> 
			<th>Email</th> 
			<th>Phone No</th> 
			<th>Action</th> 
		</tr> 
		</thead> 
		<tbody>{DataTable()}</tbody> 
	</Table> 
	</div> 
); 
}; 

export default EmployeeList;
