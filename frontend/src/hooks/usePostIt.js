import { useState, useEffect } from "react";
import { fetchAllPostIt, fetchAllDonePostIt, createPostIt, updatePostIt } from "../api/postItApi";

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

export const useAllDonePostIt = () => {
	const [error, setError] = useState(null);
	const [postIts, setPostIts] = useState([]);

	const getAllDonePostIt = async()=>{
			try {
				const postItData = await fetchAllDonePostIt();
				setPostIts(postItData);
			} catch (err) {
				setError(err);
			}
	}
	return {postIts, error, getAllDonePostIt};
}

export const useCreatePostIt = () => {
	const handleCreate = async (postItTitle, postItContents) => {
		try {
			await createPostIt(postItTitle, postItContents);
		} catch(err) {
			console.log(err);
		}
	}
	return {handleCreate};
}

export const useUpdatePostIt = (postId) => {

	const handleUpdate = async(postItTitle, postItContents) => {
		try {
			await updatePostIt(postId, postItTitle, postItContents);
		} catch(err) {
			console.log(err);
		}
	}
	return {handleUpdate};
}