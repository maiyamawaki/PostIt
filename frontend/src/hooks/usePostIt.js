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
		try {
			await createPostIt(postItTitle, postItContents, postItCategory);
		} catch(err) {
			console.log(err);
		}
	}
	return {handleCreate};
}

export const useUpdatePostIt = (postId) => {

	const handleUpdate = async(postItTitle, postItContents, postItCategory) => {
		try {
			await updatePostIt(postId, postItTitle, postItContents, postItCategory);
		} catch(err) {
			console.log(err);
		}
	}
	return {handleUpdate};
}