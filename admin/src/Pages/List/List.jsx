import React from "react";
import DataTable from "../../Components/DataTable/DataTable";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";

const List = () => {
	return (
		<div className="list grid grid-cols-12 gap-5">
			<div className="col-span-3">
				<Sidebar />
			</div>
			<div className="listContainer col-span-9">
				<Navbar />
				<DataTable />
			</div>
		</div>
	);
};

export default List;
