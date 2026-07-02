import { useState, useEffect } from "react";
import { fetchAllPostIt, fetchPostIt, fetchAllDonePostIt, createPostIt, updatePostIt } from "../api/postItApi";

export const usePostIt = () => {
	const [postIts, setPostIts] = useState([]);
	const [error, setError] = useState(null);

	const getPostIts = async () => {
		try {
			const postItData = await fetchAllPostIt();
			setPostIts(postItData);
		} catch (err) { 
			setError(err);
		} finally {
			console.log("success");
		}
	}
	useEffect(()=> {
		getPostIts();
	}, []);
	return {postIts, error, refetch : getPostIts};
};

export const useGetPostIt = (postId) => {
	const [post, setPost] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		const getPostItById = async() => {
			try {
				const postItData = await fetchPostIt(postId);
				setPost(postItData);
			} catch (err) {
				setError(err);
			}
		}
		getPostItById();
	}, [postId]);
	
	return {post, error};
}

export const useAllDonePostIt = () => {
	const [error, setError] = useState(null);
	const [postIts, setPostIts] = useState([]);

	useEffect(() => {
		const getAllDonePostIt = async()=>{
			try {
				const postItData = await fetchAllDonePostIt();
				setPostIts(postItData);
			} catch (err) {
				setError(err);
			}
		}
		getAllDonePostIt();
	},[]);
	
	return {postIts, error};
}

export const useCreatePostIt = () => {
	const handleCreate = async (postItTitle, postItContents, postItCategory) => {
		await createPostIt(postItTitle, postItContents, postItCategory);
	}
	return {handleCreate};
}

export const useUpdatePostIt = (postId) => {
	const handleUpdate = async(postItTitle, postItContents, postItCategory) => {
		await updatePostIt(postId, postItTitle, postItContents, postItCategory); 
	}
	return {handleUpdate};
}
