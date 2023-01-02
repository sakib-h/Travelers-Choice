import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
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
			if (res.data.isAdmin) {
				dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
				navigate("/");
			} else {
				dispatch({
					type: "LOGIN_FAILURE",
					payload: { message: "You are not an admin" },
				});
			}
		} catch (error) {
			dispatch({ type: "LOGIN_FAILURE", payload: error.response.data });
		}
	};

	return (
		<div className="list  bg-[white] dark:bg-[#111] grid grid-cols-12 gap-5">
			<div className="col-span-3">
				<Sidebar />
			</div>
			<div className="listContainer col-span-9">
				<Navbar />
				<div className=" mx-auto ">
					<div className="top shadow-[2px_4px_10px_1px_rgba(201,201,201,0.47)] dark:shadow-[2px_4px_10px_1px_rgba(201,201,201,0.47)] rounded-lg px-3 py-2 m-5">
						<h1 className="text-[lightgray] text-[20px]">
							User Login
						</h1>
					</div>
					<div className=" shadow-[2px_4px_10px_1px_rgba(201,201,201,0.47)] rounded-lg px-3 py-2 m-5  gap-5">
						<div className="flex flex-col items-center justify-center ">
							<form action="" className="form w-full">
								<input
									type="text"
									name="username"
									id="username"
									placeholder="Username"
									onChange={handleChange}
									className=" my-5"
								/>
								<input
									type="password"
									name="password"
									id="password"
									placeholder="Password"
									onChange={handleChange}
									className=" mb-5"
								/>
								<button
									className="w-max px-5 py-2 border-none bg-[#7451f8] dark:bg-[#555] text-[white] dark:text-[ightgray]  rounded-md font-[700] cursor-pointer my-2.5"
									disabled={loading}
									onClick={handleClick}>
									Login
								</button>
								{error && <span>{error.message}</span>}
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
