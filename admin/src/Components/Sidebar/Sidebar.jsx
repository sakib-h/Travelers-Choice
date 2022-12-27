import React from "react";
import {
	MdDashboard,
	MdLocalShipping,
	MdNotifications,
	MdLogout,
	MdSettings,
	MdPendingActions,
} from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { ImPriceTag } from "react-icons/im";
import { HiClipboardList } from "react-icons/hi";
import { ImStatsDots } from "react-icons/im";
import { RiHealthBookFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
const Sidebar = () => {
	return (
		<div className="sidebar min-h-screen  border-r-[0.5px] border-[#e6e3e3]">
			<div className="top h-[50px] flex items-center justify-center">
				<span className="logo text-[20px] font-bold text-[#6439ff]">
					Travelers Choice
				</span>
			</div>
			<hr className="h-0 border-[0.5px] border-[#e6e3e3]" />
			<div className="center pl-[10px]">
				<ul className="list-none m-0 p-0">
					<p className="title">MAIN</p>
					<li>
						<MdDashboard className="icon" />
						<span>Dashboard</span>
					</li>
					<p className="title">LISTS</p>
					<li>
						<FaUser className="icon" />
						<span>Users</span>
					</li>
					<li>
						<ImPriceTag className="icon" />
						<span>Products</span>
					</li>
					<li>
						<HiClipboardList className="icon" />
						<span>Orders</span>
					</li>
					<li>
						<MdLocalShipping className="icon" />
						<span>Delivery</span>
					</li>
					<p className="title">USEFUL LINKS</p>
					<li>
						<ImStatsDots className="icon" />
						<span>Stats</span>
					</li>
					<li>
						<MdNotifications className="icon" />
						<span>Notifications</span>
					</li>
					<p className="title">SERVICE</p>
					<li>
						<RiHealthBookFill className="icon" />
						<span>System Health</span>
					</li>
					<li>
						<MdPendingActions className="icon" />
						<span>Logs</span>
					</li>
					<li>
						<MdSettings className="icon" />
						<span>Settings</span>
					</li>
					<p className="title">USER</p>
					<li>
						<CgProfile className="icon" />
						<span>Profile</span>
					</li>
					<li>
						<MdLogout className="icon" />
						<span>Logout</span>
					</li>
				</ul>
			</div>
			<hr className="h-0 border-[0.5px] border-[#e6e3e3] mt-[5px]" />
			<p className="title ml-[10px]">THEME</p>
			<div className="bottom flex justify-start items-center gap-3 pl-[15px] mt-[15px]">
				<div className="colorOption bg-[whitesmoke]" />
				<div className="colorOption bg-[#333]" />
			</div>
		</div>
	);
};

export default Sidebar;
