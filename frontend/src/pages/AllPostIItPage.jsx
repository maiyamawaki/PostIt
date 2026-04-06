import React from "react";
import { usePostIt } from "../hooks/usePostIt";
import PostItComponent from "../components/PostItComponent";

const AllPostItPage = () => {
	const{postIts, error} = usePostIt();

	if(error) {
		return (<p>Algo esta mal</p>);
	}

	return (
		<div>
			<h1>HAZLOS</h1>
			<div className="postItContainer">
				<div className="postIt">
					{postIts.map((post) => {
						<PostItComponent key={post.postId} post={post} />
					})}
				</div>
			</div>
		</div>
	)
}

export default AllPostItPage;