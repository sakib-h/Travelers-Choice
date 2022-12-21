import React, { useContext, useState } from "react";
import { FaBed, FaCalendarDay, FaMale, FaSearch } from "react-icons/fa";
import { MdClose, MdTurnedIn } from "react-icons/md";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { Link, useNavigate } from "react-router-dom";
import { SearchContext } from "../../Context/SearchContext";
import { AuthContext } from "../../Context/AuthContext";
const Navbar = ({ type }) => {
	const [destination, setDestination] = useState("");
	const [openSearch, setOpenSearch] = useState(false);
	const [openDate, setOpenDate] = useState(false);
	const [openOptions, setOpenOptions] = useState(false);
	const [options, setOptions] = useState({
		adult: 1,
		children: 0,
		room: 1,
	});
	const [dates, setDates] = useState([
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
	const { dispatch } = useContext(SearchContext);
	const { user } = useContext(AuthContext);

	const navigate = useNavigate();
	const handleSearch = () => {
		dispatch({
			type: "NEW_SEARCH",
			payload: { destination, dates, options },
		});
		navigate("/hotels", { state: { destination, dates, options } });
	};
	return (
		<nav className="h-[50px] bg-[#003580] text-white flex justify-center py-10">
			<div className="container  flex items-center justify-between pt-2">
				<Link
					to="/"
					className="font-[600] font-Source-Sans-Pro text-2xl">
					Travelers Choice
				</Link>
				<div className="flex items-center gap-5 ">
					<div className="cursor-pointer lg:hidden">
						<FaSearch
							className="headerIcon"
							onClick={() => setOpenSearch(true)}
						/>
					</div>
					{user ? (
						<h3>{user.name}</h3>
					) : (
						<div className="flex gap-5 lg:gap-10">
							{["register", "login"].map((item, index) => (
								<button
									key={index}
									className="capitalize bg-white text-[#003580] px-[10px]
								 py-[5px] rounded-lg ">
									{item}
								</button>
							))}
						</div>
					)}
				</div>
			</div>
			{openSearch && (
				<div className="lg:hidden bg-[rgba(0,0,0,0.9)] fixed top-0 bottom-0 left-0 right-0 z-10 ">
					<MdClose
						className="cursor-pointer  text-white  text-[2rem] absolute top-[25%] right-[10%] "
						onClick={() => setOpenSearch(false)}
					/>
					<div className=" w-[80%] h-auto absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white  border-[3px] border-[#febb02] flex lg:hidden flex-col items-center  py-[20px] rounded-[5px] gap-10">
						<div className="w-full  border-b-2 ">
							<div className="navbarSearchItem">
								<FaBed className="navbarSearchIcon" />
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
						</div>

						<div className="w-full  border-b-2 relative">
							<div className="navbarSearchItem">
								<FaCalendarDay className="navbarSearchIcon" />
								<span
									onClick={() => setOpenDate(true)}
									className="text-[gray] cursor-pointer">
									{`${format(
										dates[0].startDate,
										"dd/MM/yyyy"
									)} to ${format(
										dates[0].endDate,
										"dd/MM/yyyy"
									)}`}
								</span>
							</div>
							{openDate && (
								<div className="absolute top-[50px] left-[50%] translate-x-[-50%] z-[2] bg-white rounded-md">
									<DateRange
										editableDateInputs={true}
										onChange={(item) =>
											setDates([item.selection])
										}
										moveRangeOnFirstSelection={false}
										minDate={new Date()}
										ranges={dates}
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

						<div className="w-full  border-b-2 relative">
							<div className="navbarSearchItem">
								<FaMale className="navbarSearchIcon" />
								<span
									className="text-[gray] cursor-pointer"
									onClick={() => {
										setOpenOptions(true);
									}}>
									{`${options.adult} Adults, ${options.children} Children, ${options.room} Room`}
								</span>
							</div>
							{openOptions && (
								<div className="absolute top-[50px] left-[50%] translate-x-[-50%] bg-white text-gray rounded-[5px] shadow-custom-shadow px-5 z-[2]">
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
														options.children <= 0
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
						<div
							className=" bg-[#0071c2] text-white font-[500] border-none outline-none px-5 py-2 cursor-pointer rounded-[5px] "
							onClick={handleSearch}>
							<button className="headerButton">Search</button>
						</div>
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
