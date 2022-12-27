import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
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
			</div>
		</div>
	);
};

export default Home;
