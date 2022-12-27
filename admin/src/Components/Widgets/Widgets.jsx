import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { FaUser } from "react-icons/fa";

const Widgets = () => {
	return (
		<div className="widgets h-[100px] col-span-1 flex  justify-between shadow-[2px_4px_10px_1px_rgba(201,201,201,0.47)] rounded-lg px-3 py-2">
			<div className="left flex flex-col justify-between">
				<span className="title font-[700] text-[14px] text-[rgb(160,160,160)]">
					USERS
				</span>
				<span className="counter text-[28px] font-[300]">20123</span>
				<span className="link w-max  text-[12px] border-b-[1px] border-[gray]">
					See all User
				</span>
			</div>
			<div className="right flex flex-col justify-between">
				<div className="parentage flex items-center text-[14px] positive">
					<MdKeyboardArrowUp /> 20%
				</div>
				<FaUser className="icon" />
			</div>
		</div>
	);
};

export default Widgets;
