import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
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
		<section>
			<Navbar />
			<Header />
			<div className="container">
				<div className="title text-[18px] mt-5">User Login</div>
				<div className="max-w-[350px] flex flex-col">
					<input
						type="text"
						name="username"
						id="username"
						placeholder="Username"
						onChange={handleChange}
						className="w-full my-10 border-b-[1px] border-[lightgray]"
					/>
					<input
						type="password"
						name="password"
						id="password"
						placeholder="Password"
						onChange={handleChange}
						className="w-full mb-10 border-b-[1px] border-[lightgray]"
					/>
					<button
						className="w-max bg-[#003580] text-white font-[700] py-[10px] px-[20px] rounded-[5px]"
						disabled={loading}
						onClick={handleClick}>
						Login
					</button>
					{error && <span>{error.message}</span>}
				</div>
			</div>
		</section>
	);
};

export default Login;
