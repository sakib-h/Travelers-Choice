import React, { useContext, useState } from "react";
import { MdClose } from "react-icons/md";
import useFetch from "../../hooks/useFetch";
import { SearchContext } from "../../Context/SearchContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Reservation = ({ setOpenModal, id }) => {
	const navigate = useNavigate();
	const [selectedRooms, setSelectedRooms] = useState([]);
	const { data, loading, error } = useFetch(`/hotels/rooms/${id}`);
	const { dates } = useContext(SearchContext);
	const getDatesInRange = (startDate, endDate) => {
		const start = new Date(startDate) || new Date();
		const end = new Date(endDate) || new Date();
		const date = new Date(start.getTime());
		let dateLists = [];

		while (date <= end) {
			dateLists.push(new Date(date).getTime());
			date.setDate(date.getDate() + 1);
		}
		return dateLists;
	};

	const allDates = getDatesInRange(dates[0].startDate, dates[0].endDate);
	const isAvailable = (roomNumber) => {
		const isFound = roomNumber.unavailableDates.some((date) =>
			allDates.includes(new Date(date).getTime())
		);

		return !isFound;
	};

	const handleSelect = (e) => {
		const checked = e.target.checked;
		const value = e.target.value;
		setSelectedRooms(
			checked
				? [...selectedRooms, value]
				: selectedRooms.filter((item) => item !== value)
		);
	};

	const handleClick = async () => {
		try {
			await Promise.all(
				selectedRooms.map((roomID) => {
					const res = axios.put(`/rooms/availability/${roomID}`, {
						dates: allDates,
					});
					return res.data;
				})
			);
			setOpenModal(false);
			navigate("/");
		} catch (error) {}
	};

	return (
		<div className="reservation  bg-[rgba(0,0,0,0.9)] fixed top-0 bottom-0 left-0 right-0 z-10 text-white">
			<div className="w-[85vw]  lg:w-max mx-auto  first-letter:  bg-white text-black px-10 py-10 relative top-[50%] translate-y-[-50%] overflow-auto ">
				<MdClose
					className="cursor-pointer  text-[gray]  text-[2rem] absolute top-5 right-5 "
					onClick={() => setOpenModal(false)}
				/>
				<span className="mt-5 text-[16px]">Select your rooms:</span>
				{data.map((item, index) => (
					<div
						className="item flex items-center  py-[10px] "
						key={index}>
						<div className="w-full itemInfo flex flex-row items-center justify-between gap-10">
							<div className="basis-[70%] flex flex-col gap-2 text-[14px]">
								<div className="title font-[600] text-[20px]">
									{item.title}
								</div>
								<div className="description ">
									{item.description}
								</div>
								<div className="maxPeople font-[400]  italic">
									Max People:{" "}
									<span className="font-[700]">
										{item.maxPeople}
									</span>
								</div>
								<div className="maxPrice font-[500]">
									Price: Є{item.price} Per night
								</div>
							</div>
							<div className="roomNumber basis-[30%] flex flex-row flex-wrap text-[gray] gap-3">
								{item.roomNumbers.map((roomNumber) => (
									<div
										className="room flex flex-col items-center"
										key={roomNumber._id}>
										<label htmlFor="check">
											{roomNumber.number}
										</label>
										<input
											type="checkbox"
											id="check"
											value={roomNumber._id}
											disabled={!isAvailable(roomNumber)}
											onChange={handleSelect}
											className="cursor-pointer"
										/>
									</div>
								))}
							</div>
						</div>
					</div>
				))}
				<button
					onClick={handleClick}
					className="border-none px-[20px] py-[10px] bg-[#0071c2] text-white font-[700] cursor-pointer rounded-md w-full mt-[20px]">
					Reserve Now!
				</button>
			</div>
		</div>
	);
};

export default Reservation;
