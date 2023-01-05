import React from "react";
import useFetch from "../../hooks/useFetch";

const Featured = () => {
	const { data, loading, error } = useFetch(
		"hotels/countByCity?cities=london,madrid,liverpool"
	);

	return (
		<div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[25px] z-[1]">
			{loading ? (
				"Loading please wait..."
			) : (
				<>
					<div className="featuredItem">
						<img
							src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
							alt="featured"
							className="featuredImg"
						/>
						<div className="featuredTitles">
							<h1 className="font-Source-Sans-Pro text-[2rem] font-[700] ">
								London
							</h1>
							<h2 className="font-Source-Sans-Pro text-[1.2rem] leading-3 font-[500]">
								{data[0]} Properties
							</h2>
						</div>
					</div>
					<div className="featuredItem">
						<img
							src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
							alt="featured"
							className="featuredImg"
						/>
						<div className="featuredTitles">
							<h1 className="font-Source-Sans-Pro text-[2rem] font-[700] ">
								Madrid
							</h1>
							<h2 className="font-Source-Sans-Pro text-[1.2rem] leading-3 font-[500]">
								{data[1]} properties
							</h2>
						</div>
					</div>
					<div className="featuredItem">
						<img
							src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="
							alt="featured"
							className="featuredImg"
						/>
						<div className="featuredTitles">
							<h1 className="font-Source-Sans-Pro text-[2rem] font-[700] ">
								Liverpool
							</h1>
							<h2 className="font-Source-Sans-Pro text-[1.2rem] leading-3 font-[500]">
								{data[2]} properties
							</h2>
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default Featured;
