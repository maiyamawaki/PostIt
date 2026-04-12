import React from "react";

const PostItComponent = ({post}) => {
	return (
		<div className="postIt">
			<h3>{post.postItTitle}</h3>
			<p>{post.updTime}</p>
			<p>{post.postItContents}</p>
		</div>
	)
}

export default PostItComponent;