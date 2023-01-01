import "./App.css";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import List from "./Pages/List/List";
import Single from "./Pages/Single/Single";
import New from "./Pages/New/New";
import { Routes, Route } from "react-router-dom";
import { userInputs, productInputs } from "./Data/FormSource";
import { useContext, useState } from "react";
import { ThemeContext } from "./Context/ThemeContext";
function App() {
	const { darkMode } = useContext(ThemeContext);
	return (
		<div className={`App ${darkMode && "dark"}`}>
			<Routes>
				<Route path="/">
					<Route index element={<Home />} />
					<Route path="login" element={<Login />} />
					{/* Applying routes for user */}
					<Route path="users">
						<Route index element={<List />} />
						<Route path=":userId" element={<Single />} />
						<Route
							path="new"
							element={
								<New inputs={userInputs} title="Add new User" />
							}
						/>
					</Route>
					{/* Applying routes for products */}
					<Route path="products">
						<Route index element={<List />} />
						<Route path=":productId" element={<Single />} />
						<Route
							path="new"
							element={
								<New
									inputs={productInputs}
									title="Add new Product"
								/>
							}
						/>
					</Route>
				</Route>
			</Routes>
		</div>
	);
}

export default App;
