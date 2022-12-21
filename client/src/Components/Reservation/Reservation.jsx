import React from "react";
import { MdClose } from "react-icons/md";

const Reservation = ({ setOpenModal, id }) => {
	console.log(id);
	return (
		<div className="reservation  bg-[rgba(0,0,0,0.9)] fixed top-0 bottom-0 left-0 right-0 z-10 text-white">
			<div className="container">
				<MdClose
					className="cursor-pointer  text-white  text-[2rem] absolute top-[25%] right-[10%] "
					onClick={() => setOpenModal(false)}
				/>
				<span>Select your rooms:</span>
			</div>
		</div>
	);
};

export default Reservation;
