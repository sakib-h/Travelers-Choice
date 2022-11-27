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
import { useNavigate } from "react-router-dom";
const Header = ({ type }) => {
	const [destination, setDestination] = useState("");
	const [openDate, setOpenDate] = useState(false);
	const [openOptions, setOpenOptions] = useState(false);
	const [options, setOptions] = useState({
		adult: 1,
		children: 0,
		room: 1,
	});
	const [date, setDate] = useState([
		{
			startDate: new Date(),
			endDate: new Date(),
			key: "selection",
		},
	]);

	const handleOption = (name, operation) => {
		setOptions((prev) => {
			return {
				...prev,
				[name]:
					operation === "increase"
						? options[name] + 1
						: options[name] - 1,
			};
		});
	};
	const navigate = useNavigate();
	const handleSearch = () => {
		navigate("/hotels", { state: { destination, date, options } });
	};
	return (
		<div className="bg-[#003580] text-white flex justify-center  ">
			<div className="container pt-5 pb-[20px] relative">
				<div
					className={`flex justify-between lg:justify-start  items-center lg:gap-[40px]  ${
						type === "list" ? "mb-[20px]" : "mb-[20px] lg:mb-[40px]"
					}`}>
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
				{type !== "list" && (
					<>
						<h1 className="headerTitle">
							A lifetime of Discounts? It's Genius'
						</h1>
						<p className="my-[20px]">
							Get rewarded for your travels – unlock instant
							savings of 10% or more with a free Travelers Choice
							account
						</p>
						<button className="bg-[#0071c2] text-white font-[500] border-none outline-none p-2.5 cursor-pointer mb-[20px] lg:mb-[50px]">
							{" "}
							Sign in / Register
						</button>
						<div className="h-[50px]  bg-white   border-[3px] border-[#febb02] hidden lg:flex flex-row items-center justify-between  px-[20px] rounded-[5px] absolute bottom-[-25px] w-full gap-5">
							<div className="headerSearchItem">
								<FaBed className="searchBarIcon" />
								<input
									type="text"
									name="destination"
									id="destination"
									placeholder="Where are you going?"
									className="border-none outline-none text-[gray] placeholder:text-[gray]"
									onChange={(e) =>
										setDestination(e.target.value)
									}
								/>
							</div>

							<div className="headerSearchItem">
								<FaCalendarDay className="searchBarIcon" />
								<span
									onClick={() => setOpenDate(true)}
									className="text-[gray] cursor-pointer">
									{`${format(
										date[0].startDate,
										"dd/MM/yyyy"
									)} to ${format(
										date[0].endDate,
										"dd/MM/yyyy"
									)}`}
								</span>
								{openDate && (
									<div className="absolute top-[50px] z-[2] shadow-2xl bg-white rounded-md">
										<DateRange
											editableDateInputs={true}
											onChange={(item) =>
												setDate([item.selection])
											}
											moveRangeOnFirstSelection={false}
											minDate={new Date()}
											ranges={date}
										/>
										<div className="flex justify-end">
											<button
												className="bg-[#0071c2] text-[14px]  px-[10px] py-[5px] text-white font-[500] rounded-[5px] cursor-pointer mb-5 mr-3"
												onClick={() => {
													setOpenDate(false);
												}}>
												Done
											</button>
										</div>
									</div>
								)}
							</div>

							<div className="headerSearchItem">
								<FaMale className="searchBarIcon" />
								<span
									className="text-[gray] cursor-pointer"
									onClick={() => {
										setOpenOptions(true);
									}}>
									{`${options.adult} Adults, ${options.children} Children, ${options.room} Room`}
								</span>
								{openOptions && (
									<div className="absolute top-[50px] bg-white text-gray rounded-[5px] shadow-custom-shadow px-5 z-[2]">
										<div className="mb-5">
											<div className="optionItem">
												<span>Adults</span>
												<div className="optionCounter">
													<button
														className="counterButton"
														onClick={() => {
															handleOption(
																"adult",
																"decrease"
															);
														}}
														disabled={
															options.adult <= 1
														}>
														-
													</button>
													<span className="number">
														{options.adult}
													</span>
													<button
														className="counterButton"
														onClick={() => {
															handleOption(
																"adult",
																"increase"
															);
														}}>
														+
													</button>
												</div>
											</div>

											<div className="optionItem">
												<span>Children</span>
												<div className="optionCounter">
													<button
														className="counterButton"
														onClick={() => {
															handleOption(
																"children",
																"decrease"
															);
														}}
														disabled={
															options.children <=
															0
														}>
														-
													</button>
													<span className="number">
														{options.children}
													</span>
													<button
														className="counterButton"
														onClick={() => {
															handleOption(
																"children",
																"increase"
															);
														}}>
														+
													</button>
												</div>
											</div>

											<div className="optionItem">
												<span>Rooms</span>
												<div className="optionCounter">
													<button
														className="counterButton"
														onClick={() => {
															handleOption(
																"room",
																"decrease"
															);
														}}
														disabled={
															options.room <= 1
														}>
														-
													</button>
													<span className="number">
														{options.room}
													</span>
													<button
														className="counterButton"
														onClick={() => {
															handleOption(
																"room",
																"increase"
															);
														}}>
														+
													</button>
												</div>
											</div>
										</div>

										<div className="flex justify-end">
											<button
												className="bg-[#0071c2] text-[14px]  px-[10px] py-[5px] text-white font-[500] rounded-[5px] cursor-pointer mb-5 "
												onClick={() => {
													setOpenOptions(false);
												}}>
												Done
											</button>
										</div>
									</div>
								)}
							</div>
							<div className="bg-[#0071c2] text-white font-[500] border-none outline-none px-4 py-2 cursor-pointer rounded-[5px]">
								<button
									className="headerButton"
									onClick={handleSearch}>
									Search
								</button>
							</div>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default Header;
