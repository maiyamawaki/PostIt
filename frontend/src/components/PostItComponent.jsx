import React from "react";
import { Link } from "react-router-dom";

const PostItComponent = ({post, onDelete}) => {

	const updDate = post.updTime.substring(0, 10).replace("T","");
	const updTime = post.updTime.substring(11, 16);

	return (
		<div className="postIt">
			<div className="postItContent">
				<h3>{post.postItTitle}</h3>
				<label>updTime : {updDate} {updTime}</label>
				<p>{post.postItContents}</p>
			</div>
			<div className="postItButtons">
				<Link to={`/postit/${post.postId}`}>Edit</Link>
				<button onClick={onDelete}>Delete</button>
			</div>
		</div>
	)
}

export default PostItComponent;