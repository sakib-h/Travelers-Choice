import React from "react";

const Navbar = () => {
	return (
		<nav className="h-[50px] bg-[#003580] text-white flex justify-center">
			<div className="container  flex items-center justify-between">
				<div className="font-[600] font-Source-Sans-Pro text-2xl">
					Travelers Choice
				</div>
				<div className="flex gap-10">
					{["register", "login"].map((item, index) => (
						<button
							key={index}
							className="capitalize bg-white text-[#003580] px-[10px]
							 py-[5px] rounded-lg ">
							{item}
						</button>
					))}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
