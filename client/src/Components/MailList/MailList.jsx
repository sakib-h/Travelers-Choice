import React from "react";

const MailList = () => {
	return (
		<div className="w-full my-[50px] bg-[#003580] text-white px-5 py-20 lg:p-[50px] text-center">
			<div className=" flex flex-col items-center gap-[10px] ">
				<h1 className="font-Source-Sans-Pro text-[24px] font-[700] mb-1">
					Save Time, Save Money!
				</h1>
				<span className="text-[14px] font-[400] mb-2  ">
					Sign up for our newsletter and get the latest deals to you
				</span>
				<div className="flex items-center justify-center w-full">
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
