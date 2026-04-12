import { useState, useEffect } from "react";
import { fetchPostIt, createPostIt} from "../api/postItApi";

export const usePostIt = () => {
	const [postIts, setPostIts] = useState([]);
	const [error, setError] = useState(null);

	useEffect(()=> {
		const getPostIts = async () => {
			try {
				const postItData = await fetchPostIt();
				setPostIts(postItData);
				console.log(postItData);
			} catch (err) { 
				setError(err);
			} finally {
				console.log("success");
			}
		};
		getPostIts();
	}, []);

	return {postIts, error};
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