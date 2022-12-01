import { format } from "date-fns";
import React, { useState } from "react";
import { DateRange } from "react-date-range";
import { useLocation } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";

const List = () => {
	const location = useLocation();
	const [destination, setDestination] = useState(
		location.state ? location.state.destination : ""
	);
	const [date, setDate] = useState(
		location.state
			? location.state.date
			: [
					{
						startDate: new Date(),
						endDate: new Date(),
						key: "selection",
					},
			  ]
	);
	const [options, setOptions] = useState(
		location.state ? location.state.options : ""
	);
	const [openDate, setOpenDate] = useState(false);

	return (
		<section>
			<Navbar />
			<Header type="list" />
			<div className="flex justify-center mt-5">
				<div className="container ">
					<div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-4 gap-5">
						<div className=" md:col-span-2 lg:col-span-1 listSearch bg-[#febb02] p-2.5 rounded-[10px] sticky top-[10px]">
							<h1 className="text-[18px] text-[#555] mb-2.5">
								Search
							</h1>
							<div className="listItem">
								<label htmlFor="destination">Destination</label>
								<input
									type="text"
									name="destination"
									id="destination"
									placeholder={destination}
								/>
							</div>

							<div className="listItem relative">
								<label htmlFor="check-in">Check-in Date</label>
								<span
									onClick={() => {
										setOpenDate(true);
									}}>
									{`${format(
										date[0].startDate,
										"MM/dd/yyyy"
									)} to ${format(
										date[0].endDate,
										"MM/dd/yyyy"
									)}`}
								</span>
								{openDate && (
									<div className="absolute top-[10px] left-[110%] shadow-2xl bg-white rounded-md">
										<DateRange
											onChange={(item) =>
												setDate([item.selection])
											}
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
							<div className="listItem">
								<label>Option</label>
								<div className="optionItem">
									<span className="optionText">
										Min Price <small>per Night</small>
									</span>
									<input
										type="number"
										name="minPrice"
										id="minPrice"
										className="optionInput"
									/>
								</div>
							</div>

							<div className="listItem">
								<label>Option</label>
								<div className="optionItem">
									<span className="optionText">
										Max Price <small>per Night</small>
									</span>
									<input
										type="number"
										name="maxPrice"
										id="maxPrice"
										className="optionInput"
									/>
								</div>
							</div>

							<div className="listItem">
								<label>Option</label>
								<div className="optionItem">
									<span className="optionText">Adult</span>
									<input
										type="number"
										name="adult"
										id="adult"
										className="optionInput"
									/>
								</div>
							</div>

							<div className="listItem">
								<label>Option</label>
								<div className="optionItem">
									<span className="optionText">Children</span>
									<input
										type="number"
										name="children"
										id="children"
										className="optionInput"
									/>
								</div>
							</div>

							<div className="listItem">
								<label>Option</label>
								<div className="optionItem">
									<span className="optionText">Room</span>
									<input
										type="number"
										name="room"
										id="room"
										className="optionInput"
									/>
								</div>
							</div>
						</div>
						<div className="listResult  col-span-3">
							<h1>Result</h1>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default List;
