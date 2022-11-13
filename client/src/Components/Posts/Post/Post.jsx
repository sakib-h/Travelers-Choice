import React from "react";
import moment from "moment";
import { MdMoreHoriz } from "react-icons/md";
const Post = ({ post }) => {
	return (
		<div className="card">
			<img
				src={post.selectedFile}
				alt={post.title}
				title={post.title}
				className="h-0 pt-[55%] bg-[#00000080] bg-blend-darken"
			/>
			<div className="absolute top-[20px] left-[20px] text-white">
				<h6>{post.creator}</h6>
				<p>{moment(post.createdAt).fromNow()}</p>
			</div>
			<div className="absolute top-[20px] right-[20px] text-white">
				<button className="" onClick={() => {}}>
					<MdMoreHoriz />
				</button>
			</div>
			<div className="flex justify-between m-[20px]"></div>
		</div>
	);
};

export default Post;
