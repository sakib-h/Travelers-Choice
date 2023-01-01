import React, { useContext } from "react";
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
import { Link } from "react-router-dom";
import { ThemeContext } from "../../Context/ThemeContext";
const Sidebar = () => {
	const { dispatch } = useContext(ThemeContext);
	const lightMode = () => {
		dispatch({ type: "LIGHT" });
		localStorage.setItem("theme", "light");
	};
	const darkMode = () => {
		dispatch({ type: "DARK" });
		localStorage.setItem("theme", "dark");
	};
	return (
		<div className="sidebar min-h-screen  border-r-[0.5px] border-[#e6e3e3] dark:border-[#333]">
			<div className="top h-[50px] flex items-center justify-center">
				<Link to="/">
					<h1 className="logo text-[20px] font-bold text-[#6439ff] dark:text-[#999]">
						Travelers Choice
					</h1>
				</Link>
			</div>
			<hr className="h-0 border-[0.5px] border-[#e6e3e3] dark:border-[#333]" />
			<div className="center pl-[10px]">
				<ul className="list-none m-0 p-0">
					<p className="title">MAIN</p>
					<Link to="/">
						<li>
							<MdDashboard className="icon" />
							<span>Dashboard</span>
						</li>
					</Link>
					<p className="title">LISTS</p>
					<Link to="/users">
						<li>
							<FaUser className="icon" />
							<span>Users</span>
						</li>
					</Link>
					<Link to="/products">
						<li>
							<ImPriceTag className="icon" />
							<span>Products</span>
						</li>
					</Link>
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
			<hr className="h-0 border-[0.5px] border-[#e6e3e3] dark:border-[#333] mt-[5px]" />
			<p className="title ml-[10px]">THEME</p>
			<div className="bottom flex justify-start items-center gap-3 pl-[15px] mt-[15px]">
				<div
					className="colorOption bg-[whitesmoke]"
					onClick={lightMode}
				/>
				<div className="colorOption bg-[#333]" onClick={darkMode} />
			</div>
		</div>
	);
};

export default Sidebar;
