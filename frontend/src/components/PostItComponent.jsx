import React from "react";
import { Link } from "react-router-dom";

const PostItComponent = ({post}) => {
	return (
		<div className="postIt">
			<h3>{post.postItTitle}</h3>
			<p>{post.updTime}</p>
			<p>{post.postItContents}</p>
			<p>id {post.postId}</p>
			<Link to={`/postit/${post.postId}`}>Edit</Link>
		</div>
	)
}

export default PostItComponent;