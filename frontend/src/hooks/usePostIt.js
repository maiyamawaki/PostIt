import { useState, useEffect } from "react";
import { fetchAllPostIt, fetchPostIt, fetchAllDonePostIt, createPostIt, updatePostIt } from "../api/postItApi";

export const usePostIt = (labelId) => {
	const [postIts, setPostIts] = useState([]);
	const [error, setError] = useState(null);

	const getPostIts = async () => {
		try {
			const postItData = await fetchAllPostIt(labelId);
			setPostIts(postItData);
		} catch (err) { 
			setError(err);
		} finally {
			console.log("success");
		}
	}
	useEffect(()=> {
		getPostIts();
	}, [labelId]);
	return {postIts, error, refetch : getPostIts};
};

export const useGetPostIt = (labelId, postId) => {
	const [post, setPost] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		const getPostItById = async() => {
			try {
				const postItData = await fetchPostIt(postId, labelId);
				setPost(postItData);
			} catch (err) {
				setError(err);
			}
		}
		getPostItById();
	}, [postId, labelId]);

	return {post, error};
}

export const useAllDonePostIt = (labelId) => {
	const [error, setError] = useState(null);
	const [postIts, setPostIts] = useState([]);

	useEffect(() => {
		const getAllDonePostIt = async()=>{
			try {
				const postItData = await fetchAllDonePostIt(labelId);
				setPostIts(postItData);
			} catch (err) {
				setError(err);
			}
		}
		getAllDonePostIt();
	}, [labelId]);
	
	return {postIts, error};
}

export const useCreatePostIt = (labelId) => {
	console.log("hooks :" +  labelId);
	const handleCreate = async (postItTitle, postItContents, postItCategory) => {
		await createPostIt(labelId, postItTitle, postItContents, postItCategory);
	}
	return {handleCreate};
}

export const useUpdatePostIt = (labelId, postId) => {
	const handleUpdate = async(postItTitle, postItContents, postItCategory) => {
		await updatePostIt(labelId, postId, postItTitle, postItContents, postItCategory);
	}
	return {handleUpdate};
}
