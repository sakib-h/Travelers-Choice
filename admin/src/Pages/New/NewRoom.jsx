import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { MdOutlineDriveFolderUpload } from "react-icons/md";
import { useState } from "react";
import { roomInputs } from "../../Data/FormSource";
import useFetch from "../../hooks/useFetch";
import axios from "axios";
const NewRoom = () => {
	const [info, setInfo] = useState([]);
	const [hotelId, setHotelId] = useState();
	const [rooms, setRooms] = useState([]);
	const { data, loading, error } = useFetch("/hotels");
	const handleChange = (e) => {
		setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
	};

	const handleClick = async (e) => {
		e.preventDefault();
		const roomNumbers = rooms.split(",").map((room) => ({ number: room }));
		try {
			await axios.post(`/rooms/${hotelId}`, { ...info, roomNumbers });
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<div className="new  bg-[white] dark:bg-[#111] grid grid-cols-12 gap-5">
			<div className="col-span-3">
				<Sidebar />
			</div>
			<div className="newContainer col-span-9">
				<Navbar />
				<div className="top shadow-[2px_4px_10px_1px_rgba(201,201,201,0.47)] dark:shadow-[2px_4px_10px_1px_rgba(201,201,201,0.47)] rounded-lg px-3 py-2 m-5">
					<h1 className="text-[lightgray] text-[20px]">
						Add new Room
					</h1>
				</div>
				<div className="bottom shadow-[2px_4px_10px_1px_rgba(201,201,201,0.47)] rounded-lg px-3 py-2 m-5">
					<form
						action=""
						className="form grid grid-cols-2 gap-5 mr-10">
						{roomInputs.map((input) => (
							<div className="formInput" key={input.id}>
								<label>{input.label}</label>
								<input
									id={input.id}
									type={input.type}
									placeholder={input.placeholder}
									onChange={handleChange}
								/>
							</div>
						))}
						<div className="formInput">
							<label>Rooms</label>
							<textarea
								name="rooms"
								id="rooms"
								cols="30"
								rows="2"
								className=" px-2 py-1 border-[1px] border-[lightgray] dark:bg-[transparent] rounded-md outline-none"
								placeholder="Give Comma(,) between Room Numbers"
								onChange={(e) => setRooms(e.target.value)}
							/>
						</div>
						<div className="formInput">
							<label>Choose a Hotel</label>
							<select
								name="hotelId"
								id="hotelId"
								className="w-full  p-1 border-[1px] border-[lightgray] dark:bg-[transparent] rounded-md outline-none"
								onChange={(e) => setHotelId(e.target.value)}>
								{loading
									? "Loading"
									: data &&
									  data.map((hotel) => (
											<option
												value={hotel._id}
												key={hotel._id}>
												{hotel.name}
											</option>
									  ))}
							</select>
						</div>
						<button
							className="w-max px-5 py-2 border-none bg-[#7451f8] dark:bg-[#555] text-[white] dark:text-[lightgray]  rounded-md font-[700] cursor-pointer my-2.5"
							onClick={handleClick}>
							Send
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default NewRoom;
