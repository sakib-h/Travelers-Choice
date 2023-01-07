import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { MdOutlineDriveFolderUpload } from "react-icons/md";
import { useState } from "react";
import { hotelInputs } from "../../Data/FormSource";
import useFetch from "../../hooks/useFetch";
const NewHotel = () => {
	const [files, setFiles] = useState("");
	const [info, setInfo] = useState({});
	const { data, loading, error } = useFetch("/rooms");
	const handleChange = (e) => {
		setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
	};
	const handleSelect = () => {};
	return (
		<div className="new  bg-[white] dark:bg-[#111] grid grid-cols-12 gap-5">
			<div className="col-span-3">
				<Sidebar />
			</div>
			<div className="newContainer col-span-9">
				<Navbar />
				<div className="top shadow-[2px_4px_10px_1px_rgba(201,201,201,0.47)] dark:shadow-[2px_4px_10px_1px_rgba(201,201,201,0.47)] rounded-lg px-3 py-2 m-5">
					<h1 className="text-[lightgray] text-[20px]">
						Add new Hotel
					</h1>
				</div>
				<div className="bottom shadow-[2px_4px_10px_1px_rgba(201,201,201,0.47)] rounded-lg px-3 py-2 m-5 lg:grid grid-cols-3 gap-5">
					<div className="left col-span-1 flex justify-center">
						<img
							src={
								files
									? URL.createObjectURL(files[0])
									: "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
							}
							alt="add"
							className="w-[100px] h-[100px] rounded-full object-cover mb-10"
						/>
					</div>
					<div className="right col-span-2">
						<form
							action=""
							className="form grid grid-cols-2 gap-5 mr-10">
							<div className="formInput">
								<label
									htmlFor="imageUpload"
									className="flex items-center gap-2.5">
									Upload you Image:{" "}
									<MdOutlineDriveFolderUpload className=" text-[18px] cursor-pointer" />
								</label>
								<input
									type="file"
									name="imageUp"
									id="imageUpload"
									multiple
									className="hidden"
									onChange={(e) => setFiles(e.target.files)}
								/>
							</div>
							{hotelInputs.map((input) => (
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
								<label>Featured: </label>
								<select
									name="featured"
									id="featured"
									onChange={handleChange}>
									<option value="true">Yes</option>
									<option value="false">No</option>
								</select>
							</div>
							<div className="selectRooms">
								<label>Rooms </label>
								<select
									name="rooms"
									id="rooms"
									multiple
									onChange={handleSelect}>
									{loading
										? "Loading"
										: data &&
										  data.map((room) => (
												<option
													key={room._id}
													value={room._ud}>
													{room.title}
												</option>
										  ))}
								</select>
							</div>
							<button className="w-max px-5 py-2 border-none bg-[#7451f8] dark:bg-[#555] text-[white] dark:text-[lightgray]  rounded-md font-[700] cursor-pointer my-2.5">
								Send
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NewHotel;
