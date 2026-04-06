import React from "react";
import { usePostIt } from "../hooks/usePostIt";
import PostItComponent from "./PostItComponent";

const PostItList = () => {
	const {postIts, error} = usePostIt();

	if(error) {
		console.log(error);
		return <p>"Algo esta mal"</p>
	}

	return (
		<div>
			<li>
				{postIts.map((postIt)=>{
					<PostItComponent key={postIt.postItId} postIt={postIt} />
				})}
			</li>
		</div>
	)
}

export default PostItList;