import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";

const Home = () => {
	return (
		<div className="home grid grid-cols-12 gap-5">
			<div className="col-span-3">
				<Sidebar />
			</div>
			<div className="homeContainer col-span-9">
				<Navbar />
				Home Container
			</div>
		</div>
	);
};

export default Home;
