import React from "react";

const Navbar = () => {
	return (
		<nav className="h-[50px] bg-[#003580] flex justify-center">
			<div className="w-[100%] max-w-[1366px] text-white ">
				<div className="logo">Travelers Choice</div>
				<div>
					{["register", "login"].map((item, index) => (
						<button key={index} className="">
							{item}
						</button>
					))}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
