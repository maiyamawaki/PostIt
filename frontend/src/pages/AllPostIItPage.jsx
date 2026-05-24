import React from "react";
import { usePostIt } from "../hooks/usePostIt";
import { deletePostIt, updatePostItAsDone } from "../api/postItApi";
import PostItComponent from "../components/PostItComponent";
import HeaderComponent from "../components/HeaderComponent" 

const AllPostItPage = () => {
	const{postIts, error, refetch} = usePostIt();
	
	const handleUpdatePostItAsDone = async(postId) => {
		try { 
			await updatePostItAsDone(postId);
			refetch();
		} catch(err) {
			console.log(err);
		}
	}

	const handleDelete = async(postId) => {
		try {
			await deletePostIt(postId);
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