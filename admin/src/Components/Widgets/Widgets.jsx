import {
	MdKeyboardArrowUp,
	MdKeyboardArrowDown,
	MdOutlineAccountBalance,
	MdOutlineShoppingCart,
	MdOutlineMonetizationOn,
} from "react-icons/md";
import { FaUser } from "react-icons/fa";

const Widgets = ({ type }) => {
	let data;

	// -----> TEMPORARY SOLUTION <-----
	const amount = 1000;
	const diff = 20;
	// This is a switch statement that will set the data variable to an object with the appropriate values
	switch (type) {
		case "user":
			data = {
				title: "USERS",
				isMoney: false,
				link: "See all User",
				icon: (
					<FaUser className="icon text-[crimson] bg-[rgba(255,0,0,0.2)] dark:text-[#f73232] dark:bg-[#e2e2e20f]" />
				),
			};
			break;

		case "order":
			data = {
				title: "ORDERS",
				isMoney: false,
				link: "View all Orders",
				icon: (
					<MdOutlineShoppingCart className="icon text-[goldenrod] bg-[rgba(218,165,32,0.2)] dark:text-[#c5b13f] dark:bg-[#e2e2e20f]" />
				),
			};
			break;
		case "earnings":
			data = {
				title: "EARNINGS",
				isMoney: true,
				link: "View net Earnings",
				icon: (
					<MdOutlineMonetizationOn className="icon text-[green] bg-[rgba(0,128,0,0.2)] dark:text-[#1aa515] dark:bg-[#e2e2e20f]" />
				),
			};
			break;
		case "balance":
			data = {
				title: "BALANCE",
				isMoney: true,
				link: "See details",
				icon: (
					<MdOutlineAccountBalance className="icon text-[purple] bg-[rgba(128,0,128,0.2)] dark:text-[#d142d1] dark:bg-[#e2e2e20f]" />
				),
			};
			break;
		default:
			break;
	}
	return (
		<div className="widgets h-[100px] col-span-1 flex  justify-between shadow-[2px_4px_10px_1px_rgba(201,201,201,0.47)] rounded-lg px-3 py-2">
			<div className="left flex flex-col justify-between">
				<span className="title font-[700] text-[14px] text-[rgb(160,160,160)]">
					{data.title}
				</span>
				<span className="counter text-[28px] font-[300]">
					{data.isMoney && "$"} {amount}
				</span>
				<span className="link w-max  text-[12px] border-b-[1px] border-[gray]">
					{data.link}
				</span>
			</div>
			<div className="right flex flex-col justify-between">
				<div className="parentage flex items-center text-[14px] positive">
					<MdKeyboardArrowUp /> {diff}%
				</div>
				{data.icon}
			</div>
		</div>
	);
};

export default Widgets;
