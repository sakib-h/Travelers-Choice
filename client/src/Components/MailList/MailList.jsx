import React from "react";

const MailList = () => {
	return (
		<div className="w-full my-[50px] bg-[#003580] text-white p-[50px]">
			<div className="container flex flex-col items-center gap-[20px] ">
				<h1 className="font-Source-Sans-Pro text-[24px] font-[700] ">
					Save Time, Save Money!
				</h1>
				<span className="mailDesc">
					Sign up for our newsletter and get the latest deals to you
				</span>
				<div className="flex items-center ">
					<input
						type="email"
						name="email"
						id="email"
						placeholder="Enter your Email address"
						className="mailInput"
					/>
					<button className="subscribeButton">Subscribe</button>
				</div>
			</div>
		</div>
	);
};

export default MailList;
