import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { userColumns, userRows } from "../../Data/DataTableSource";
const DataTable = () => {
	return (
		<div className="dataTable h-[600px] p-5">
			<DataGrid
				rows={userRows}
				columns={userColumns}
				pageSize={5}
				rowsPerPageOptions={[5]}
				checkboxSelection
			/>
		</div>
	);
};

export default DataTable;
