import Sidebar from "../../Components/Sidebar/Sidebar";

const Home = () => {
	return (
		<div className="home grid grid-cols-12 gap-5">
			<Sidebar />
			<div className="homeContainer col-span-9">Container</div>
		</div>
	);
};

export default Home;
