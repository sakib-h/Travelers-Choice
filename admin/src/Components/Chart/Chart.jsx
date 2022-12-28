import {
	AreaChart,
	Area,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from "recharts";

const data = [
	{ name: "January", Total: 1200 },
	{ name: "February", Total: 820 },
	{ name: "March", Total: 1090 },
	{ name: "April", Total: 1700 },
	{ name: "May", Total: 1950 },
	{ name: "June", Total: 1610 },
	{ name: "July", Total: 1450 },
	{ name: "August", Total: 1060 },
	{ name: "September", Total: 1650 },
	{ name: "October", Total: 1200 },
	{ name: "November", Total: 1710 },
	{ name: "December", Total: 1480 },
];

const Chart = () => {
	return (
		<div className="chart md:col-span-2 shadow-[2px_4px_10px_1px_rgba(201,201,201,0.47)] rounded-lg px-3 py-2 text-[gray]">
			<div className="title mb-5">Last Year (Revenue)</div>
			<ResponsiveContainer width="100%" aspect={2 / 1}>
				<AreaChart
					width={730}
					height={250}
					data={data}
					margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
					<defs>
						<linearGradient
							id="totalRevenue"
							x1="0"
							y1="0"
							x2="0"
							y2="1">
							<stop
								offset="5%"
								stopColor="#8884d8"
								stopOpacity={0.8}
							/>
							<stop
								offset="95%"
								stopColor="#8884d8"
								stopOpacity={0}
							/>
						</linearGradient>
					</defs>
					<XAxis dataKey="name" stroke="gray" />
					<CartesianGrid
						strokeDasharray="3 3"
						className="stroke-[rgb(228,225,225)]"
					/>
					<Tooltip />
					<Area
						type="monotone"
						dataKey="Total"
						stroke="#8884d8"
						fillOpacity={1}
						fill="url(#totalRevenue)"
					/>
				</AreaChart>
			</ResponsiveContainer>
		</div>
	);
};

export default Chart;
