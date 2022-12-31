import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";

const Single = () => {
	return (
		<div className="single grid grid-cols-12 gap-5">
			<div className="col-span-3">
				<Sidebar />
			</div>
			<div className="singleContainer col-span-9">
				<Navbar />
				<div className="top p-5 grid grid-cols-3 gap-5">
					<div className="left col-span-1 shadow-[2px_4px_10px_1px_rgba(201,201,201,0.47)] rounded-lg px-3 py-2 relative">
						<div className="editButton"></div>
						<h1 className="title">Information</h1>
						<div className="item flex gap-5">
							<img
								src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
								alt=""
								className="itemImg w-[100px] h-[100px] rounded-[50%] object-cover"
							/>
						</div>
					</div>
					<div className="right col-span-2 shadow-[2px_4px_10px_1px_rgba(201,201,201,0.47)] rounded-lg px-3 py-2"></div>
				</div>
				<div className="bottom"></div>
			</div>
		</div>
	);
};

export default Single;
