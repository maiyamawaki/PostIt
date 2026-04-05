import React from "react";

const PostItItem = ({post}) => {
	return (
		<li>
			<h2>{post.postItTitle}</h2>
			<p>{post.updTime}</p>
			<p>{post.postItContents}</p>
		</li>
	)
}

export default PostItItem;