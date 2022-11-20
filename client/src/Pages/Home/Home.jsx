import Featured from "../../Components/Featured/Featured";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";

const Home = () => {
	return (
		<section>
			<Navbar />
			<Header />
			<div className="homeContainer mt-[50px] flex flex-col items-center gap-[30px]">
				<Featured />
			</div>
		</section>
	);
};

export default Home;
