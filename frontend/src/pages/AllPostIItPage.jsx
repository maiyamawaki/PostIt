import React from "react";
import { usePostIt } from "../hooks/usePostIt";
import PostItComponent from "../components/PostItComponent";
import HeaderComponent from "../components/HeaderComponent" 

const AllPostItPage = () => {
	const{postIts, error} = usePostIt();

	if(error) {
		return (<p>Algo esta mal</p>);
	}

	return (
		<div className="main">
			<HeaderComponent />
			<h1>HAZLOS</h1>
			<a href="/add">ADD</a>
			<div className="postItContainer">
				{postIts.map((post) => {
					return <PostItComponent key={post.postId} post={post} />
				})}
			</div>
		</div>
	)
}

export default AllPostItPage;