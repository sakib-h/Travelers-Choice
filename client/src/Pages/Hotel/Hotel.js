import React, { useState } from "react";
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
const Hotel = () => {
	const [slideNumber, setSlideNumber] = useState(0);
	const [open, setOpen] = useState(false);

	const photos = [
		{
			src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
		},
		{
			src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
		},
		{
			src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
		},
		{
			src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
		},
		{
			src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
		},
		{
			src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
		},
	];

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
								src={photos[slideNumber].src}
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
			<div className="hotelContainer flex flex-col items-center mt-">
				<div className="hotelWrapper relative container flex flex-col gap-[10px]">
					<button className=" absolute top-[10px] right-0 border-none px-[10px] py-[20px] bg-[#0071c2] text-white font-[700] rounded-[5px] cursor-pointer">
						Reserve or Book Now!
					</button>
					<h1 className=" text-[24px]">Tower Street Apartments</h1>
					<div className=" text-[12px] flex items-center gap-2.5">
						<IoLocationSharp />
						<span>Elton St 125 New york</span>
					</div>
					<span className="text-[#0071c2] font-[500]">
						Excellent location – 500m from center
					</span>
					<span className="text-[#008009] font-[500]">
						Book a stay over $114 at this property and get a free
						airport taxi
					</span>
					<div className="grid grid-cols-3 gap-5">
						{photos.map((photo, index) => (
							<div
								className="hotelImgWrapper col-span-1 "
								key={index}>
								<img
									onClick={() => handleOpen(index)}
									src={photo.src}
									alt=""
									className="hotelImg object-cover"
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
								Located a 5-minute walk from St. Florian's Gate
								in Krakow, Tower Street Apartments has
								accommodations with air conditioning and free
								WiFi. The units come with hardwood floors and
								feature a fully equipped kitchenette with a
								microwave, a flat-screen TV, and a private
								bathroom with shower and a hairdryer. A fridge
								is also offered, as well as an electric tea pot
								and a coffee machine. Popular points of interest
								near the apartment include Cloth Hall, Main
								Market Square and Town Hall Tower. The nearest
								airport is John Paul II International
								Kraków–Balice, 16.1 km from Tower Street
								Apartments, and the property offers a paid
								airport shuttle service.
							</p>
						</div>
						<div className="hotelDetailsPrice col-span-1 bg-[#ebf3ff] p-5 flex flex-col gap-5">
							<h1 className="text-[18px] text-[#555]">
								Perfect for a 9-night stay!
							</h1>
							<span className="text-[14px] ">
								Located in the real heart of Krakow, this
								property has an excellent location score of 9.8!
							</span>
							<h2 className="font-[300]">
								<b>$945</b> (9 nights)
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
		</div>
	);
};

export default Hotel;
