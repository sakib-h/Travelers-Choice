import React from "react";
import { FaBed, FaPlane, FaCar, FaTaxi } from "react-icons/fa";
const Header = () => {
	return (
		<div className="bg-[#003580] text-white flex justify-center">
			<div className="container mt-5 mb-20">
				<div className="flex items-center gap-10">
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
			</div>
		</div>
	);
};

export default Header;
