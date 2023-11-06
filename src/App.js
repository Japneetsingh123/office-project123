 //import React from 'react';
 //import './App.css';
 //import Form from './form'

 //function App() {
   //return <Form />;
 //}

 //export default App

//import React from 'react';
//import { Routes, Route } from "react-router-dom";
//import Home from "./home.js";

//function App() {
  //return (
    //<>
      //<Home />
    //</>
  //)

//export default App;

import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Routes
} from "react-router-dom";
import "./App.css";
import Edit from "./edit-employee";
import Home from "./home";
import Create from "./create-employee";

function App() {
	return (
		<div className="App">
			<h1 className="Detail">Employee Details </h1>
			<h3>Enter Data</h3>
			<Router>
				<Routes>
					<Route 
					 exact  path="/" element={<Home />} />
					<Route
						exact path="/create-employee"
						element={<Create />}
					/>
					<Route
						exact path="/edit-empployee"
						element={<Edit />}
					/>
				</Routes>
			</Router>
		</div>
	);
}

export default App;

