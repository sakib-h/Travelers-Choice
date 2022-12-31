import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../Data/DataTableSource";
import { Link } from "react-router-dom";
const DataTable = () => {
	const actionColumn = [
		{
			field: "action",
			headerName: "Action",
			width: 200,
			renderCell: () => {
				return (
					<div className="cellAction flex items-center gap-4">
						<Link to="/users/1">
							<div className=" px-3 py-1 rounded-md text-[darkblue] cursor-pointer border-dotted border-[1px] border-[rgba(0,0,139,0.6)]">
								View
							</div>
						</Link>
						<div className=" px-3 py-1 rounded-md text-[crimson] cursor-pointer border-dotted border-[1px] border-[rgba(220,20,60,0.6)]">
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
					to="/users/new"
					className="addUser text-[green] text-[14px] font-[400] border-[1px] border-[green] px-3 py-1 rounded-md cursor-pointer">
					Add New
				</Link>
			</div>
			<DataGrid
				rows={userRows}
				columns={userColumns.concat(actionColumn)}
				pageSize={10}
				rowsPerPageOptions={[10]}
				checkboxSelection
			/>
		</div>
	);
};

export default DataTable;
