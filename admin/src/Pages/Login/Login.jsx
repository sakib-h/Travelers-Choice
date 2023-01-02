import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

const Login = () => {
	const [credentials, setCredentials] = useState({
		username: undefined,
		password: undefined,
	});

	const { loading, error, dispatch } = useContext(AuthContext);
	const navigate = useNavigate();
	const handleChange = (e) => {
		setCredentials((prev) => ({
			...prev,
			[e.target.id]: e.target.value,
		}));
	};

	const handleClick = async (e) => {
		e.preventDefault();
		dispatch({ type: "LOGIN_START" });
		try {
			const res = await axios.post("/auth/login", credentials);
			dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
			navigate("/");
		} catch (error) {
			dispatch({ type: "LOGIN_FAILURE", payload: error.response.data });
		}
	};

	return (
		<div className="container">
			<input
				type="text"
				name="username"
				id="username"
				placeholder="Username"
				onChange={handleChange}
			/>
			<input
				type="password"
				name="password"
				id="password"
				placeholder="Password"
				onChange={handleChange}
			/>
			<button className="" disabled={loading} onClick={handleClick}>
				Login
			</button>
			{error && <span>{error.message}</span>}
		</div>
	);
};

export default Login;
