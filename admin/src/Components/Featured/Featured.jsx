import { MdMoreVert } from "react-icons/md";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const Featured = () => {
	return (
		<div className="featured md:col-span-1 shadow-[2px_4px_10px_1px_rgba(201,201,201,0.47)] rounded-lg px-3 py-2">
			<div className="top flex justify-between items-center text-[gray]">
				<h1 className="title text-[16px] font-[500]">Total Revenue</h1>
				<MdMoreVert className="icon" />
			</div>
			<div className="bottom flex flex-col items-center justify-center gap-5">
				<div className="featuredChart w-[100px] h-[100px]">
					<CircularProgressbar
						value={70}
						text={"70%"}
						strokeWidth={5}
					/>
				</div>
				<p className="title font-[500] text-[gray]">
					Total Sales made Today
				</p>
				<p className="amount text-[30px]">$420</p>
				<p className="description font-[300] text-[12px] text-[gray] text-center">
					Previous transaction processing. Last payment may not be
					included
				</p>
				<div className="summary w-full flex items-center justify-between ">
					<div className="item">
						<div className="itemTitle">This Week</div>
						<div className="itemResult positive">
							<MdKeyboardArrowUp className="icon " />
							<div className="resultAmount">$12.4k</div>
						</div>
					</div>

					<div className="item">
						<div className="itemTitle">Last Week</div>
						<div className="itemResult negative">
							<MdKeyboardArrowDown className="icon " />
							<div className="resultAmount">$1.1k</div>
						</div>
					</div>

					<div className="item">
						<div className="itemTitle">Last Month</div>
						<div className="itemResult positive">
							<MdKeyboardArrowUp className="icon " />
							<div className="resultAmount">$12.4k</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Featured;
