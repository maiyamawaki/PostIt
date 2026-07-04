import React from "react";
import { usePostIt } from "../hooks/usePostIt";
import { useParams } from "react-router-dom";
import { deletePostIt, updatePostItAsDone } from "../api/postItApi";
import PostItComponent from "../components/PostItComponent";
import HeaderComponent from "../components/HeaderComponent" 

const AllPostItPage = () => {
	const {labelId} = useParams();
	const{postIts, error, refetch} = usePostIt(labelId);
	
	console.log("test : " + labelId);

	const handleUpdatePostItAsDone = async(postId) => {
		try { 
			await updatePostItAsDone(postId, labelId);
			refetch();
		} catch(err) {
			console.log(err);
		}
	}

	const handleDelete = async(postId, labelId) => {
		try {
			await deletePostIt(postId, labelId);
			refetch();
		} catch(err) {
			console.log(err);
		}
	};

	if(error) {
		return (<p>Algo esta mal</p>);
	}

	return (
		<div className="main">
			<HeaderComponent />
			<h1>postit</h1>
			<div className="postItContainer">
				{postIts.map((post) => {
					return <PostItComponent 
						key={post.postId} 
						post={post}
						onDone={()=>handleUpdatePostItAsDone(post.postId)}
						onDelete={()=>handleDelete(post.postId)}
						/>
				})}
			</div>
		</div>
	)
}

export default AllPostItPage;