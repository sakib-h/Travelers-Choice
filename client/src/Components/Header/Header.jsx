import React, { useState } from "react";
import {
	FaBed,
	FaPlane,
	FaCar,
	FaTaxi,
	FaCalendarDay,
	FaMale,
} from "react-icons/fa";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
const Header = () => {
	const [openDate, setOpenDate] = useState(false);
	const [date, setDate] = useState([
		{
			startDate: new Date(),
			endDate: new Date(),
			key: "selection",
		},
	]);

	return (
		<div className="bg-[#003580] text-white flex justify-center  ">
			<div className="container pt-5 pb-[20px] relative">
				<div className="flex items-center gap-10 mb-[50px]">
					<div className="headerListItem active">
						<FaBed className="headerIcon" />
						<span>Stays</span>
					</div>
					<div className="headerListItem">
						<FaPlane className="headerIcon" />
						<span>Flights</span>
					</div>
					<div className="headerListItem">
						<FaCar className="headerIcon" />
						<span>Car Rentals</span>
					</div>
					<div className="headerListItem">
						<FaBed className="headerIcon" />
						<span>Attractions</span>
					</div>
					<div className="headerListItem">
						<FaTaxi className="headerIcon" />
						<span>Airport Taxis</span>
					</div>
				</div>
				<>
					<h1 className="headerTitle">
						A lifetime of Discounts? It's Genius'
					</h1>
					<p className="my-[20px]">
						Get rewarded for your travels – unlock instant savings
						of 10% or more with a free Travelers Choice account
					</p>
					<button className="bg-[#0071c2] text-white font-[500] border-none outline-none p-2.5 cursor-pointer mb-[50px]">
						{" "}
						Sign in / Register
					</button>
					<div className="h-[50px] bg-white border-[3px] border-[#febb02] flex items-center justify-between py-[10px] px-[20px] rounded-[5px] absolute bottom-[-25px] w-full">
						<div className="headerSearchItem">
							<FaBed className="headerIcon" />
							<input
								type="text"
								name="destination"
								id="destination"
								placeholder="Where are you going?"
								className="border-none outline-none "
							/>
						</div>

						<div className="headerSearchItem">
							<FaCalendarDay className="headerIcon" />
							<span
								onClick={() => setOpenDate((prev) => !prev)}
								className="text-[lightgray] cursor-pointer">
								{`${format(
									date[0].startDate,
									"dd/MM/yyyy"
								)} to ${format(date[0].endDate, "dd/MM/yyyy")}`}
							</span>
							{openDate && (
								<DateRange
									editableDateInputs={true}
									onChange={(item) =>
										setDate([item.selection])
									}
									moveRangeOnFirstSelection={false}
									ranges={date}
									className="absolute top-[50px] "
								/>
							)}
						</div>

						<div className="headerSearchItem">
							<FaMale className="headerIcon" />
							<span className="text-[lightgray] cursor-pointer">
								2 Adults 2 Children 1 room
							</span>
						</div>
						<div className="headerSearchItem">
							<button className="headerButton">Search</button>
						</div>
					</div>
				</>
			</div>
		</div>
	);
};

export default Header;
