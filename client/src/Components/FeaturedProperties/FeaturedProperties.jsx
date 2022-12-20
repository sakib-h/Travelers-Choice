import React from "react";
import useFetch from "../../hooks/useFetch";

const FeaturedProperties = () => {
	const { data, loading, error } = useFetch("hotel?featured=true&limit=4");
	console.log(data);
	return (
		<div className="container">
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[20px]">
				{loading
					? "Loading"
					: data.map((item, index) => (
							<div className="fpItem" id={index}>
								<img
									src={item.photos[0]}
									alt=""
									className="fpImg"
								/>
								<span className="fpName">{item.name}</span>
								<span className="fpCity capitalize">
									{item.city}
								</span>
								<span className="fpPrice">
									Starting from €{item.cheapestPrice}
								</span>
								<div className="fpRating">
									<button>{item.rating}</button>
									<span>Excellent</span>
								</div>
							</div>
					  ))}
			</div>
		</div>
	);
};

export default FeaturedProperties;
