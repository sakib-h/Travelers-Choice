// temporary data
export const userColumns = [
	{ field: "id", headerName: "ID", width: 70 },
	{
		field: "user",
		headerName: "User",
		width: 230,
		renderCell: (params) => {
			return (
				<div className="cellWithImg">
					<img
						className="cellImg"
						src={params.row.img}
						alt="avatar"
					/>
					{params.row.username}
				</div>
			);
		},
	},
	{
		field: "email",
		headerName: "Email",
		width: 230,
	},

	{
		field: "country",
		headerName: "Country",
		width: 100,
	},
	{
		field: "city",
		headerName: "City",
		width: 100,
	},
	{
		field: "phone",
		headerName: "Phone",
		width: 150,
	},
];
