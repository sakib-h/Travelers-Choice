import "./App.css";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import List from "./Pages/List/List";
import Single from "./Pages/Single/Single";
import New from "./Pages/New/New";
import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "./Context/ThemeContext";
import { AuthContext } from "./Context/AuthContext";
import { hotelColumns, roomColumns, userColumns } from "./Data/DataTableSource";
import NewHotel from "./Pages/New/NewHotel";
import NewRoom from "./Pages/New/NewRoom";
function App() {
	const { darkMode } = useContext(ThemeContext);
	const theme = localStorage.getItem("theme");
	const ProtectedRoutes = ({ children }) => {
		const { user } = useContext(AuthContext);
		return user ? children : <Navigate to="/login" />;
	};
	return (
		<div className={`App ${theme ? theme : darkMode && "dark"}`}>
			<Routes>
				<Route path="/">
					<Route
						index
						element={
							<ProtectedRoutes>
								<Home />
							</ProtectedRoutes>
						}
					/>
					<Route path="login" element={<Login />} />
					{/* Applying routes for user */}
					<Route path="users">
						<Route
							index
							element={
								<ProtectedRoutes>
									<List columns={userColumns} />
								</ProtectedRoutes>
							}
						/>
						<Route
							path=":userId"
							element={
								<ProtectedRoutes>
									<Single />
								</ProtectedRoutes>
							}
						/>
						<Route
							path="new"
							element={
								<ProtectedRoutes>
									<New />
								</ProtectedRoutes>
							}
						/>
					</Route>
					{/* Applying routes for Hotels */}
					<Route path="hotels">
						<Route
							index
							element={
								<ProtectedRoutes>
									<List columns={hotelColumns} />
								</ProtectedRoutes>
							}
						/>
						<Route
							path=":productId"
							element={
								<ProtectedRoutes>
									<Single />
								</ProtectedRoutes>
							}
						/>
						<Route
							path="new"
							element={
								<ProtectedRoutes>
									<NewHotel />
								</ProtectedRoutes>
							}
						/>
					</Route>
					{/* Applying routes for Rooms */}
					<Route path="rooms">
						<Route
							index
							element={
								<ProtectedRoutes>
									<List columns={roomColumns} />
								</ProtectedRoutes>
							}
						/>
						<Route
							path=":productId"
							element={
								<ProtectedRoutes>
									<Single />
								</ProtectedRoutes>
							}
						/>
						<Route
							path="new"
							element={
								<ProtectedRoutes>
									<NewRoom />
								</ProtectedRoutes>
							}
						/>
					</Route>
				</Route>
			</Routes>
		</div>
	);
}

export default App;
