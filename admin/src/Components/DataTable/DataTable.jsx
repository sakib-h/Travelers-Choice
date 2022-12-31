import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { userColumns, userRows } from "../../Data/DataTableSource";
const DataTable = () => {
	const actionColumn = [
		{
			field: "action",
			headerName: "Action",
			width: 200,
			renderCell: () => {
				return (
					<div className="cellAction flex items-center gap-4">
						<div className=" px-3 py-1 rounded-md text-[darkblue] cursor-pointer border-dotted border-[1px] border-[rgba(0,0,139,0.6)]">
							View
						</div>
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
