import Featured from "../../Components/Featured/Featured";
import FeaturedProperties from "../../Components/FeaturedProperties/FeaturedProperties";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import MailList from "../../Components/MailList/MailList";
import Navbar from "../../Components/Navbar/Navbar";
import PropertyList from "../../Components/PropertyList/PropertyList";

const Home = () => {
	return (
		<section>
			<Navbar />
			<Header />
			<div className="homeContainer mt-[50px] flex flex-col items-center gap-[30px]">
				<Featured />
				<h1 className="container text-[18px] font-Source-Sans-Pro font-[700]">
					Browse by Property type
				</h1>
				<PropertyList />
				<h1 className="container text-[18px] font-Source-Sans-Pro font-[700]">
					Homes guests love
				</h1>
				<FeaturedProperties />
				<MailList />
				<Footer />
			</div>
		</section>
	);
};

export default Home;
