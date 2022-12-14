import React from "react";
import DataTable from "../../Components/DataTable/DataTable";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";

const List = ({ columns }) => {
	return (
		<div className="list  bg-[white] dark:bg-[#111] grid grid-cols-12 gap-5">
			<div className="col-span-3">
				<Sidebar />
			</div>
			<div className="listContainer col-span-9">
				<Navbar />
				<DataTable columns={columns} />
			</div>
		</div>
	);
};

export default List;
