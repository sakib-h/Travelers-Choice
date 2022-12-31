import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Chart from "../../Components/Chart/Chart";
import Table from "../../Components/Table/Table";
const Single = () => {
	return (
		<div className="single grid grid-cols-12 gap-5">
			<div className="col-span-3">
				<Sidebar />
			</div>
			<div className="singleContainer col-span-9">
				<Navbar />
				<div className="top p-5 grid lg:grid-cols-3 gap-5">
					<div className="left col-span-1 shadow-[2px_4px_10px_1px_rgba(201,201,201,0.47)] rounded-lg px-3 py-2 relative">
						<div className="editButton absolute top-0 right-0 px-2 py-1 text-[12px] cursor-pointer text-[#7451f8] bg-[rgba(117,81,248,0.2)] rounded-sm">
							Edit
						</div>
						<h1 className="title text-[16px] text-[lightgray] mb-5 ">
							Information
						</h1>
						<div className="item flex gap-5">
							<img
								src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
								alt=""
								className="itemImg w-[100px] h-[100px] rounded-[50%] object-cover"
							/>
							<div className="details">
								<h1 className="itemTitle">Jane Doe</h1>
								<div className="itemDetails">
									<span className="itemKey">Email:</span>
									<span className="itemValue">
										jane.doe@gmail.com
									</span>
								</div>
								<div className="itemDetails">
									<span className="itemKey">Phone:</span>
									<span className="itemValue">
										+1-2345 67 89
									</span>
								</div>
								<div className="itemDetails">
									<span className="itemKey">Address:</span>
									<span className="itemValue">
										Elton St. 234 Garden Yd. NewYork
									</span>
								</div>
								<div className="itemDetails">
									<span className="itemKey">Country:</span>
									<span className="itemValue">
										United States
									</span>
								</div>
							</div>
						</div>
					</div>
					<div className="right col-span-2 shadow-[2px_4px_10px_1px_rgba(201,201,201,0.47)] rounded-lg px-3 py-2">
						<Chart
							aspect={3 / 1}
							title="User Spending ( Last 6 Months )"
						/>
					</div>
				</div>
				<div className="bottom p-5 mx-5 my-2.5 shadow-[2px_4px_10px_1px_rgba(201,201,201,0.47)] rounded-lg">
					<h1 className="title text-[16px] text-[lightgray] mb-5 ">
						Last Transactions
					</h1>
					<Table />
				</div>
			</div>
		</div>
	);
};

export default Single;
