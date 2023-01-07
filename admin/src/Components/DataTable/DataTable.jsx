import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../Data/DataTableSource";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import axios from "axios";
const DataTable = ({ columns }) => {
	const location = useLocation();
	const path = location.pathname.split("/")[1];
	const { data, loading, error } = useFetch(`/${path}`);
	const [list, setList] = useState(data);
	useEffect(() => {
		setList(data);
	}, [data]);

	const handleDelete = async (id) => {
		try {
			await axios.delete(`/${path}/${id}`);
			setList(list.filter((item) => item._id !== id));
		} catch (err) {
			error(err);
		}
	};
	const actionColumn = [
		{
			field: "action",
			headerName: "Action",
			width: 200,
			renderCell: (params) => {
				return (
					<div className="cellAction flex items-center gap-4 outline-none">
						<Link to="/users/1">
							<div className=" px-3 py-1 rounded-md text-[darkblue] dark:text-[gray] cursor-pointer border-dotted border-[1px] border-[rgba(0,0,139,0.6)] dark:border-none ">
								View
							</div>
						</Link>
						<div
							className="px-3 py-1 rounded-md text-[crimson]  dark:text-[gray] cursor-pointer border-dotted border-[1px] border-[rgba(220,20,60,0.6)] dark:border-none"
							onClick={() => handleDelete(params.row._id)}>
							Delete
						</div>
					</div>
				);
			},
		},
	];
	return (
		<div className="dataTable h-[720px] p-5">
			<div className="dataTableTitle flex justify-between items-center text-[18px] text-[gray] mb-2.5">
				Add new User
				<Link
					to={`/${path}/new`}
					className="addUser text-[green] dark:text-[#1aa515] text-[14px] font-[400] border-[1px] border-[green] px-3 py-1 rounded-md cursor-pointer">
					Add New
				</Link>
			</div>
			<DataGrid
				rows={list}
				columns={columns.concat(actionColumn)}
				pageSize={10}
				rowsPerPageOptions={[10]}
				checkboxSelection
				getRowId={(row) => row._id}
				className="dark:text-[gray] dark:border-none"
			/>
		</div>
	);
};

export default DataTable;
