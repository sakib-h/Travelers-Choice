import React, { useContext, useState } from "react";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import { IoLocationSharp } from "react-icons/io5";
import {
	FaArrowCircleLeft,
	FaArrowCircleRight,
	FaTimesCircle,
} from "react-icons/fa";
import Footer from "../../Components/Footer/Footer";
import MailList from "../../Components/MailList/MailList";
import useFetch from "../../hooks/useFetch";
import { useLocation } from "react-router-dom";
import { SearchContext } from "../../Context/SearchContext";
const Hotel = () => {
	const location = useLocation();
	const id = location.pathname.split("/")[2];
	const [slideNumber, setSlideNumber] = useState(0);
	const [open, setOpen] = useState(false);
	const { data, loading, error } = useFetch(`/hotel/find/${id}`);

	const { dates, options } = useContext(SearchContext);
	const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
	const dayDifference = (start, end) => {
		const timeDiff = Math.abs(end.getTime() - start.getTime());
		const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
		return diffDays;
	};

	const days = dayDifference(
		dates[0]?.endDate || new Date(),
		dates[0]?.startDate || new Date()
	);
	console.log(days);
	const handleOpen = (index) => {
		setSlideNumber(index);
		setOpen(true);
	};

	const handleMove = (direction) => {
		let newSlideNumber;

		if (direction === "l") {
			newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
		} else {
			newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
		}

		setSlideNumber(newSlideNumber);
	};

	return (
		<div>
			{open && (
				<div className="fixed  w-full h-screen bg-[rgba(0,0,0,0.95)] z-[999]">
					<div className=" slider  ">
						<FaTimesCircle
							className="close sliderIcon  absolute top-5 right-10"
							onClick={() => setOpen(false)}
						/>
						<FaArrowCircleLeft
							className="arrow sliderIcon absolute left-[5%] top-[50%]"
							onClick={() => handleMove("l")}
						/>
						<div className="sliderWrapper">
							<img
								src={data.photos[slideNumber]}
								alt=""
								className="sliderImg   w-[65%]  absolute top-[50%] left-[50%]  -translate-x-1/2 -translate-y-1/2"
							/>
						</div>
						<FaArrowCircleRight
							className="arrow sliderIcon absolute right-[5%] top-[50%]"
							onClick={() => handleMove("r")}
						/>
					</div>
				</div>
			)}
			<Navbar />
			<Header type="list" />
			{loading ? (
				"Loading"
			) : (
				<div className="hotelContainer flex flex-col items-center mt-">
					<div className="hotelWrapper relative container flex flex-col gap-[10px]">
						<button className=" absolute top-[10px] right-0 border-none px-[10px] py-[20px] bg-[#0071c2] text-white font-[700] rounded-[5px] cursor-pointer">
							Reserve or Book Now!
						</button>
						<h1 className=" text-[24px]">{data.name}</h1>
						<div className=" text-[12px] flex items-center gap-2.5">
							<IoLocationSharp />
							<span>{data.address}</span>
						</div>
						<span className="text-[#0071c2] font-[500]">
							Excellent location – {data.distance} from city
						</span>
						<span className="text-[#008009] font-[500]">
							Book a stay over ${data.cheapestPrice} at this
							property and get a free airport taxi
						</span>
						<div className="grid grid-cols-3 gap-5">
							{data.photos?.map((photo, index) => (
								<div
									className="hotelImgWrapper col-span-1 "
									key={index}>
									<img
										onClick={() => handleOpen(index)}
										src={photo}
										alt=""
										className="hotelImg w-full h-[150px] object-cover"
									/>
								</div>
							))}
						</div>
						<div className="grid grid-cols-4 gap-5 mt-[20px]">
							<div className="hotelDetailsTexts col-span-3">
								<h1 className="hotelTitle">
									Stay in the heart of City
								</h1>
								<p className="text-[14px] mt-[20px]">
									{data.description}
								</p>
							</div>
							<div className="hotelDetailsPrice col-span-1 bg-[#ebf3ff] p-5 flex flex-col gap-5">
								<h1 className="text-[18px] text-[#555]">
									Perfect for a {days}-night stay!
								</h1>
								<span className="text-[14px] ">
									Located in the real heart of Krakow, this
									property has an excellent location score of
									{` ${data.rating}`}!
								</span>
								<h2 className="font-[300]">
									<b>
										$
										{data.cheapestPrice *
											days *
											options.room}
									</b>{" "}
									( {days} nights)
								</h2>
								<button className="  border-none px-5 py-2 bg-[#0071c2] text-white font-[700] rounded-[5px] cursor-pointer">
									Reserve or Book Now!
								</button>
							</div>
						</div>
					</div>
					<MailList />
					<Footer />
				</div>
			)}
		</div>
	);
};

export default Hotel;
