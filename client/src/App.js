import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import List from "./Pages/List/List";
import Hotel from "./Pages/Hotel/Hotel";
function App() {
	return (
		<div className="App ">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/hotels" element={<List />} />
				<Route path="/hotels/:id" element={<Hotel />} />
			</Routes>
		</div>
	);
}

export default App;
