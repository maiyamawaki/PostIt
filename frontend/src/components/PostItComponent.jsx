import React from "react";

const PostItComponent = ({postIt}) => {
	return (
		<li>
			<h2>{postIt.postItTitle}</h2>
			<p>{postIt.updTime}</p>
			<p>{postIt.postItContents}</p>
		</li>
	)
}

export default PostItComponent;