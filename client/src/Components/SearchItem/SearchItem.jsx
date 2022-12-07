import React from "react";

const SearchItem = () => {
	return (
		<div className="border-2 border-[lightgray] p-[10px] rounded-md flex justify-between gap-[20px] mb-[20px] overflow-hidden">
			<img
				src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
				alt=""
				className="siImg"
			/>
			<div className="siDesc">
				<h1 className="text-[20px] text-[#0071c2]">
					Tower Street Apartments
				</h1>
				<span className="text-[12px]">500m from center</span>
				<span className="text-[12px] bg-[#008009] text-white w-max p-3 rounded-md">
					Free airport taxi
				</span>
				<span className="siSubtitle">
					Studio Apartment with Air conditioning
				</span>
				<span className="siFeatures">
					Entire studio • 1 bathroom • 21m² 1 full bed
				</span>
				<span className="siCancelOp">Free cancellation </span>
				<span className="siCancelOpSubtitle">
					You can cancel later, so lock in this great price today!
				</span>
			</div>
			<div className="siDetails">
				<div className="siRating">
					<span>Excellent</span>
					<button>8.9</button>
				</div>
				<div className="siDetailTexts">
					<span className="siPrice">$112</span>
					<span className="siTaxOp">Includes taxes and fees</span>
					<button className="siCheckButton">See availability</button>
				</div>
			</div>
		</div>
	);
};

export default SearchItem;
