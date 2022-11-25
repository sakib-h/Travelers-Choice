import React from "react";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";

const List = () => {
	return (
		<section>
			<Navbar />
			<Header type="list" />
			<div className="flex justify-center mt-5">
				<div className="container ">
					<div className="grid grid-cols-1 md:grid-cols-4 gap-5">
						<div className="col-span-1 listSearch bg-[#febb02]">
							<h1 className="text-[18px] text-[#555] mb-2.5">
								Search
							</h1>
						</div>
						<div className="listResult col-span-3">
							<h1>Result</h1>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default List;
