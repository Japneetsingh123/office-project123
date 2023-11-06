// import React, { useState } from "react";

// const Home = () => {
//   const [inputs, setInputs] = useState({
//     name: "",
//     email: "",
//     phoneno:""
//   });
//   const [tableData, setTableData] = useState([]);
//   const [editClick, setEditClick] = useState(false);
//   const [editIndex, setEditIndex] = useState("");
//   const handleChange = (e) => {
//     setInputs({
//       ...inputs,
//       [e.target.name]: e.target.value,
//     });
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // console.log("inputs", inputs);
//     if (editClick) {
//       const tempTableData = tableData;
//       Object.assign(tempTableData[editIndex], inputs);
//       setTableData([...tempTableData]);
//       setEditClick(false);
//       setInputs({
//         name: "",
//         email: "",
//         phoneno:"",
//       });
//     } else {
//       setTableData([...tableData, inputs]);
//       setInputs({
//         name: "",
//         email: "",
//         phoneno:"",
//       });
//     }
//   };

//   const handleDelete = (index) => {
//     const filterData = tableData.filter((item, i) => i !== index);
//     setTableData(filterData);
//   };
//   const handleEdit = (index) => {
//     const tempData = tableData[index];

//     setInputs({ name: tempData.name, email: tempData.email, phoneno:tempData.phoneno });
//     setEditClick(true);
//     setEditIndex(index);
//   };
//   return (
//     <div className="min-h-screen bg-[#004b43]">
//       <h1 className="main">Employee Details</h1>
//       <div className="bg-[#e5e4e4] max-w-fit m-auto p-10">
//         <form onSubmit={handleSubmit}>
//           <div className="flex flex-col">
//             <label>Name</label>
//             <input name="name" value={inputs.name} onChange={handleChange} />
//           </div>
//           <div className="flex flex-col">
//             <label>Email</label>
//             <input name="email" value={inputs.email} onChange={handleChange} />
//           </div>
//           <div className="flex flex-col">
//           <label> Phone Number</label>
//           <input name="Phone number" value={inputs.phonenumber} onChange={handleChange}/>
//          </div>
//           <button type="submit" className="w-full bg-[#014d64] text-white mt-3">
//             {editClick ? "update" : "Add"}
//           </button>
//         </form>
//       </div>
//       <div>
//         <table className="w-full text-center">
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Email</th>
//               <th>phone number</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody className="text-white">
//             {tableData.map((item, i) => (
//               <tr>
//                 <td>{item.name}</td>
//                 <td>{item.email}</td>
//                 <td>{item.phoneno}</td>
//                 <td>
//                   <button
//                     onClick={() => handleEdit(i)}
//                     className="mr-3 text-yellow-300"
//                   >
//                     Edit
//                   </button>
//                   <button
//                     onClick={() => handleDelete(i)}
//                     className="text-red-500"
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

//export default Home;




import React from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import array from "./array";
import { Link, useNavigate } from "react-router-dom";

function Home() {
	let history = useNavigate();

	
	function setID(id, Name, age) {
		localStorage.setItem("id", id);
		localStorage.setItem("Name", Name);
		localStorage.setItem("Age", age);
	}

	
	function deleted(id) {
		let index = array
			.map(function (e) {
				return e.id;
			})
			.indexOf(id);

		
		array.splice(index, 1);

		
		history("/");
	}

	return (
		<div style={{ margin: "5rem" }}>
			<Table striped bordered hover size="sm">
				<thead>
					<tr>
						<th>Name</th>
						<th>Age</th>
					</tr>
				</thead>
				<tbody>
					
					{array.map((item) => {
						return (
							<tr>
								<td>{item.Name}</td>
								<td>{item.Age}</td>

								
								<td>
									<Link to={`/edit-employee`}>
										<Button
											onClick={(e) =>
												setID(
													item.id,
													item.Name,
													item.Age
												)
											}
											variant="info"
										>
											Update
										</Button>
									</Link>
								</td>

								
								<td>
									<Button
										onClick={(e) =>
											deleted(item.id)
										}
										variant="danger"
									>
										Delete
									</Button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</Table>

			
			<Link className="d-grid gap-2" to="/Create-employee">
				<Button variant="warning" size="lg">
					Create
				</Button>
			</Link>
		</div>
	);
}

export default Home;
