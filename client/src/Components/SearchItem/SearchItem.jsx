import React from "react";
import { Link } from "react-router-dom";

const SearchItem = ({ item }) => {
	return (
		<div className="border-2 border-[lightgray] p-[10px] rounded-md flex justify-between gap-[20px] mb-[20px] overflow-hidden">
			<img src={item.photos[0]} alt="" className="siImg" />
			<div className="flex flex-col gap-[10px] flex-[2]">
				<h1 className="text-[20px] text-[#0071c2]">{item.name}</h1>
				<span className="text-[12px]">{item.distance}</span>
				<span className="text-[12px] bg-[#008009] text-white w-max p-3 rounded-md">
					Free airport taxi
				</span>
				<span className="text-[12px] font-[700]">
					Studio Apartment with Air conditioning
				</span>
				<span className="text-[12px]">{item.description}</span>
				<span className="text-[12px]  text-[#008009] font-[bold]">
					Free cancellation{" "}
				</span>
				<span className="text-[12px]  text-[#008009]">
					You can cancel later, so lock in this great price today!
				</span>
			</div>
			<div className="flex-[1] flex flex-col justify-between">
				{item.rating && (
					<div className="flex justify-between ">
						<span className="font-[500]">Excellent</span>
						<button className="bg-[#003580] text-white p-[5px] font-[700] border-none rounded-md">
							{item.rating}
						</button>
					</div>
				)}
				<div className="text-right flex flex-col gap-[5px]">
					<span className="text-[24px] ">${item.cheapestPrice}</span>
					<span className="text-[12px] text-[gray]">
						Includes taxes and fees
					</span>
					<Link to={`/hotel/${item._id}`}>
						<button className="bg-[#0071c2] text-white font-[bold] p-[5px] rounded-md border-none">
							See availability
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default SearchItem;
