import Chart from "../../Components/Chart/Chart";
import Featured from "../../Components/Featured/Featured";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Table from "../../Components/Table/Table";
import Widgets from "../../Components/Widgets/Widgets";

const Home = () => {
	return (
		<div className="home grid grid-cols-12 gap-5">
			<div className="col-span-3">
				<Sidebar />
			</div>
			<div className="homeContainer col-span-9">
				<Navbar />
				<div className="widgets grid grid-cols-2 lg:grid-cols-4 p-5 gap-5">
					<Widgets type="user" />
					<Widgets type="order" />
					<Widgets type="earnings" />
					<Widgets type="balance" />
				</div>
				<div className="charts grid grid-cols-1 md:grid-cols-3 px-5 py-2  gap-5">
					<Featured />
					<Chart aspect={2 / 1} title="Last Year (Revenue)" />
				</div>
				<div className="listContainer shadow-[2px_4px_10px_1px_rgba(201,201,201,0.47)] rounded-lg px-3 py-2 m-5">
					<div className="listTitle font-[500] text-[gray] mb-4">
						Latest Transactions
					</div>
					<Table />
				</div>
			</div>
		</div>
	);
};

export default Home;
