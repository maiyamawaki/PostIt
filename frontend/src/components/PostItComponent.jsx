import React from "react";
import { Link } from "react-router-dom";

const PostItComponent = ({post, onDelete}) => {

	return (
		<div className="postIt">
			<h3>{post.postItTitle}</h3>
			<p>{post.updTime}</p>
			<p>{post.postItContents}</p>
			<p>id {post.postId}</p>
			<Link to={`/postit/${post.postId}`}>Edit</Link>
			<button onClick={onDelete}>Delete</button>
		</div>
	)
}

export default PostItComponent;