import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post/Post";
const Posts = () => {
	const posts = useSelector((state) => state.posts);
	return (
		<>
			<Post />
		</>
	);
};

export default Posts;
