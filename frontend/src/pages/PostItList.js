import React from "react";
import { usePostIt } from "../hooks/usePostIt";
import PostItItem from "../components/PostItItem";

const PostItList = () => {
	const{postIts, error} = usePostIt();

	if(error) {
		return <p>Algo esta mal.</p>
	}

	return (
		<div>
			<h1>HAZLOS</h1>
			<div class="postItContainer">
				<div class="postIt">
					{postIts.map((post) => {
						<PostItItem key={post.postId} post={post} />
					})}
				</div>
			</div>
		</div>
	)
}

export default PostItItem;