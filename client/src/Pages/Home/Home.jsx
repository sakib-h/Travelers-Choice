import Featured from "../../Components/Featured/Featured";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import PropertyList from "../../Components/PropertyList/PropertyList";

const Home = () => {
	return (
		<section>
			<Navbar />
			<Header />
			<div className="homeContainer mt-[50px] flex flex-col items-center gap-[30px]">
				<Featured />
				<h1 className="container text-[20px] font-Source-Sans-Pro font-[700]">
					Browse by Property type
				</h1>
				<PropertyList />
			</div>
		</section>
	);
};

export default Home;
