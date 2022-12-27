import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import List from "./Pages/List/List";
import Single from "./Pages/Single/Single";
import New from "./Pages/New/New";
import { Routes, Route } from "react-router-dom";
function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/">
					<Route index element={<Home />} />
					<Route path="login" element={<Login />} />
					{/* Applying routes for user */}
					<Route path="users">
						<Route index element={<List />} />
						<Route path=":userId" element={<Single />} />
						<Route path="new" element={<New />} />
					</Route>
					{/* Applying routes for products */}
					<Route path="products">
						<Route index element={<List />} />
						<Route path=":productId" element={<Single />} />
						<Route path="new" element={<New />} />
					</Route>
				</Route>
			</Routes>
		</div>
	);
}

export default App;
